import { NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// URLs de login de los productos
const PRODUCT_URLS = {
    CRM: "https://crm.goxt.io/",
    CARGO: "https://cargo.goxt.io/",
    DEMO_REQUEST: "https://goxt.io/contacto" // Cambiado a página de contacto
};

// Interfaz para información en caché
interface CachedDocs {
    crm: string;
    timestamp: number;
}

// Interfaz para datos del lead
interface LeadData {
    name: string;
    email: string;
    company?: string;
    productInterest: string;
    message?: string;
    phone?: string;
    fleetSize?: string;
    currentSoftware?: string;
    collectedAt: Date;
}

// Estado de la conversación
interface ConversationState {
    isCollectingDemoData: boolean;
    currentStep: number;
    collectedData: Partial<LeadData>;
    detectedInterest: {
        crm: boolean;
        cargo: boolean;
        wantsTrial: boolean;
        wantsLogin: boolean;
    };
}

const conversationStates = new Map<string, ConversationState>();

// Caché simple
let docsCache: CachedDocs | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

// Leer y cachear documentos (SOLO CRM ahora)
function getCachedDocs(): CachedDocs {
    const now = Date.now();

    if (docsCache && (now - docsCache.timestamp) < CACHE_DURATION) {
        return docsCache;
    }

    console.log("Actualizando caché de documentos...");

    const possiblePaths = [
        path.join(process.cwd(), 'docs'),
        path.join(process.cwd(), 'src', 'docs'),
        path.join(process.cwd()),
    ];

    let crmContent = '';

    for (const basePath of possiblePaths) {
        const crmPath = path.join(basePath, 'GOXT_CRM_RESUMEN_COMPLETO.md');

        try {
            if (fs.existsSync(crmPath) && !crmContent) {
                crmContent = fs.readFileSync(crmPath, 'utf-8');
                console.log(`Encontrado CRM en: ${crmPath}`);
            }
        } catch (error) {
            console.warn(`Error accediendo a ${basePath}:`, error);
        }
    }

    if (!crmContent) {
        crmContent = "Información detallada del CRM no disponible. Solicita una demo para más información.";
    }

    const maxLength = 4000;
    if (crmContent.length > maxLength) {
        crmContent = crmContent.substring(0, maxLength) + "... [información truncada por tamaño]";
    }

    docsCache = {
        crm: crmContent,
        timestamp: now
    };

    return docsCache;
}

// Analizar interés del usuario
function analyzeUserInterest(userMessage: string, conversationHistory: string[] = []): {
    wantsDemo: boolean;
    wantsTrial: boolean;
    wantsLogin: boolean;
    interestedInCRM: boolean;
    interestedInCargo: boolean;
    askingAboutPricing: boolean; // Nueva: detectar preguntas sobre precios
} {
    const message = userMessage.toLowerCase();
    const fullConversation = [...conversationHistory, message].join(' ').toLowerCase();

    // Detectar interés en DEMO
    const demoKeywords = [
        'demo', 'demostración', 'prueba', 'probar', 'agendar',
        'cita', 'reunión', 'contactar', 'solicitar', 'quiero una demo',
        'necesito demo', 'programar demo', 'me interesa una demo',
        'quiero ver', 'mostrar', 'presentación'
    ];
    const wantsDemo = demoKeywords.some(keyword => message.includes(keyword));

    // Detectar interés en TRIAL o LOGIN
    const trialKeywords = [
        'probar', 'prueba', 'test', 'ensayar', 'usar',
        'acceder', 'ingresar', 'entrar', 'login', 'iniciar sesión',
        'registrarme', 'cuenta', 'trial', 'prueba gratuita'
    ];
    const wantsTrial = trialKeywords.some(keyword => message.includes(keyword));

    // Detectar interés específico en LOGIN
    const loginKeywords = [
        'login', 'iniciar sesión', 'entrar', 'acceder',
        'cómo ingreso', 'dónde me registro', 'quiero entrar',
        'acceso', 'credenciales', 'usuario y contraseña'
    ];
    const wantsLogin = loginKeywords.some(keyword => message.includes(keyword));

    // Detectar interés en CRM
    const crmKeywords = [
        'crm', 'clientes', 'cotización', 'cotizaciones', 'ventas',
        'comercial', 'prospectos', 'oportunidades', 'lead', 'leads',
        'facturación', 'factura', 'seguimiento', 'pipeline', 'venta'
    ];
    const interestedInCRM = crmKeywords.some(keyword => fullConversation.includes(keyword));

    // Detectar interés en Cargo
    const cargoKeywords = [
        'cargo', 'flota', 'flotas', 'transporte', 'logística',
        'operaciones', 'rutas', 'gps', 'seguimiento', 'conductores',
        'vehículos', 'mantenimiento', 'combustible', 'carga'
    ];
    const interestedInCargo = cargoKeywords.some(keyword => fullConversation.includes(keyword));

    // Detectar preguntas sobre PRECIOS (NUEVO)
    const pricingKeywords = [
        'precio', 'precios', 'costo', 'costos', 'cuánto cuesta',
        'tarifa', 'tarifas', 'valor', 'valores', 'plan', 'planes',
        'pago', 'mensualidad', 'anualidad', 'subscription', 'suscripción',
        'gratis', 'gratuito', 'barato', 'caro', 'económico'
    ];
    const askingAboutPricing = pricingKeywords.some(keyword => message.includes(keyword));

    return {
        wantsDemo,
        wantsTrial,
        wantsLogin,
        interestedInCRM,
        interestedInCargo,
        askingAboutPricing
    };
}

// Iniciar proceso de demo
function startDemoCollection(sessionId: string): ConversationState {
    const conversationState: ConversationState = {
        isCollectingDemoData: true,
        currentStep: 0,
        collectedData: {},
        detectedInterest: {
            crm: false,
            cargo: false,
            wantsTrial: false,
            wantsLogin: false
        }
    };
    conversationStates.set(sessionId, conversationState);
    return conversationState;
}

// Procesar paso de demo
function processDemoStep(sessionId: string, userInput: string, currentStep: number) {
    const conversationState = conversationStates.get(sessionId);
    if (!conversationState) return { nextStep: 0, isComplete: false };

    // Guardar dato según el paso actual
    const steps = ['name', 'email', 'company', 'productInterest', 'phone', 'fleetSize', 'currentSoftware'];
    if (currentStep < steps.length) {
        const field = steps[currentStep] as keyof Omit<LeadData, 'collectedAt' | 'message'>;
        conversationState.collectedData[field] = userInput.trim();
    }

    const nextStep = currentStep + 1;
    const isComplete = nextStep >= steps.length;

    if (!isComplete) {
        conversationState.currentStep = nextStep;
    }

    conversationStates.set(sessionId, conversationState);
    return { nextStep, isComplete };
}

// Enviar lead a la API
async function submitLeadToAPI(leadData: LeadData): Promise<{ success: boolean; error?: string }> {
    try {
        const response = await fetch(`http://localhost:3000/api/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...leadData,
                collectedAt: leadData.collectedAt.toISOString()
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return { success: false, error: error.error || 'Error desconocido' };
        }

        return { success: true };
    } catch (error) {
        console.error('Error submitting lead:', error);
        return { success: false, error: 'Error de conexión' };
    }
}

// Obtener respuesta con enlaces de login
function getLoginResponse(interest: {
    interestedInCRM: boolean;
    interestedInCargo: boolean;
    wantsTrial: boolean;
}): string {
    let response = "¡Perfecto! Te puedo ayudar con eso:\n\n";

    if (interest.wantsTrial) {
        response += "Actualmente ofrecemos una **demo personalizada** en lugar de un trial autogestionado. Esto nos permite:\n";
        response += "• Mostrarte exactamente cómo funciona en TU operación\n";
        response += "• Responder todas tus preguntas en vivo\n";
        response += "• Configurar todo según tus necesidades\n\n";
        response += "¿Te gustaría agendar una demo personalizada?\n\n";
    }

    if (interest.interestedInCRM && interest.interestedInCargo) {
        response += "**Para ambos productos:**\n";
        response += `• 📊 GOxT CRM: ${PRODUCT_URLS.CRM}\n`;
        response += `• 🚛 GOxT Cargo: ${PRODUCT_URLS.CARGO}\n\n`;
        response += "**¿Ya tienes cuenta?**\n";
        response += "Puedes iniciar sesión en los enlaces de arriba.\n";
        response += "**¿Eres nuevo?** Te recomiendo solicitar una demo primero para ver todo el potencial.\n\n";
        response += "¿Te interesa solicitar una demo o ya tienes cuenta y necesitas acceso?";

    } else if (interest.interestedInCRM) {
        response += "**Para GOxT CRM:**\n";
        response += `📊 Accede aquí: ${PRODUCT_URLS.CRM}\n\n`;
        response += "**Si ya tienes cuenta:** Usa el enlace de arriba.\n";
        response += "**Si eres nuevo:** Te recomiendo primero una demo para ver cómo optimiza tus cotizaciones y ventas.\n\n";
        response += "¿Quieres solicitar la demo o necesitas ayuda con el acceso?";

    } else if (interest.interestedInCargo) {
        response += "**Para GOxT Cargo:**\n";
        response += `🚛 Accede aquí: ${PRODUCT_URLS.CARGO}\n\n`;
        response += "**Si ya tienes cuenta:** Usa el enlace de arriba.\n";
        response += "**Si eres nuevo:** Te recomiendo primero una demo para ver cómo optimiza tu flota.\n\n";
        response += "¿Quieres solicitar la demo o necesitas ayuda con el acceso?";
    }

    return response;
}

// Respuesta para preguntas sobre precios (NUEVA FUNCIÓN)
function getPricingResponse(): string {
    return `**¡Excelente pregunta!** 

En GOxT entendemos que cada empresa de transporte y logística tiene necesidades únicas. Por eso:

🎯 **Nuestro enfoque personalizado:**
• Precios escalables según el tamaño de tu operación
• Planes adaptados a tus necesidades específicas
• Sin cargos ocultos ni sorpresas

📊 **Valor que ofrecemos:**
• Ahorro de tiempo en cotizaciones (de horas a minutos)
• Reducción de costos operativos de flota
• Incremento en conversión de ventas
• Control completo de tus operaciones

👥 **Proceso transparente:**
1. **Demo personalizada** - Te mostramos cómo funciona en TU operación
2. **Propuesta adaptada** - Creamos un plan que se ajuste a tus necesidades
3. **Implementación guiada** - Te acompañamos en todo el proceso

💡 **¿Por qué preferimos una demo antes de hablar de números?**
Porque queremos asegurarnos de que:
• Entiendas TODO el valor que recibirás
• Veas cómo se adapta EXACTAMENTE a lo que necesitas
• Sepas que estás invirtiendo en una solución que realmente funciona para ti

¿Te gustaría agendar una **demo personalizada y sin compromiso** para que nuestro equipo pueda conocerte mejor y crear una propuesta que se ajuste perfectamente a lo que necesitas?`;
}

// Prompt para proceso de demo
function getDemoPrompt(currentStep: number, collectedData: Partial<LeadData> = {}) {
    const steps = [
        {
            question: "nombre completo",
            field: "name",
            explanation: "para personalizar tu experiencia y dirigirte correctamente"
        },
        {
            question: "correo electrónico",
            field: "email",
            explanation: "para enviarte los detalles de la demo y materiales"
        },
        {
            question: "nombre de tu empresa",
            field: "company",
            explanation: "para entender mejor tu contexto (este campo es opcional, puedes decir 'prefiero no decirlo')"
        },
        {
            question: "producto de interés",
            field: "productInterest",
            explanation: "¿te interesa CRM, Cargo, o ambos? Así enfocamos la demo en lo que necesitas"
        },
        {
            question: "teléfono de contacto",
            field: "phone",
            explanation: "por si necesitamos contactarte (opcional, puedes decir 'no quiero compartirlo')"
        },
        {
            question: "tamaño aproximado de tu flota",
            field: "fleetSize",
            explanation: "para mostrarte cómo GOxT escala según tu operación (opcional)"
        },
        {
            question: "software actual que utilizas",
            field: "currentSoftware",
            explanation: "para explicarte la migración y beneficios específicos (opcional, si no usas ninguno solo dilo)"
        }
    ];

    const step = steps[currentStep];
    const collectedFields = Object.keys(collectedData).length;

    return `Eres el agente IA de GOxT, que está ayudando a un usuario a SOLICITAR UNA DEMO.

ESTADO DEL PROCESO (${collectedFields + 1}/7 datos):

DATOS RECOPILADOS:
${Object.entries(collectedData)
            .filter(([_, v]) => v)
            .map(([k, v]) => `✓ ${k}: ${v}`)
            .join('\n') || 'Aún sin datos.'}

PASO ACTUAL (${currentStep + 1}/7):
Necesitas recopilar: ${step.question}

INSTRUCCIONES CRÍTICAS:
1. Sé CONVERSACIONAL y AMABLE, no como un formulario
2. PIDE SOLO este dato: "${step.question}"
3. EXPLICA brevemente: "${step.explanation}"
4. Si es campo opcional, MENCIONA que puede omitirlo
5. NO preguntes múltiples cosas a la vez
6. NO pidas datos que ya tienes

EJEMPLO DE RESPUESTA IDEAL:
"¡Perfecto! Ahora necesito tu ${step.question} ${step.explanation}. ¿Cuál es tu ${step.question}?"

SI EL USUARIO PREGUNTA OTRA COSA:
Responde MUY BREVEMENTE y luego retoma: "Por cierto, necesitaría tu ${step.question} para continuar."

SI EL DATO PARECE INVÁLIDO (ej: email sin @):
"Hmm, ese ${step.question} no parece correcto. ¿Podrías verificarlo?"

TONO: Profesional pero cálido, como un vendedor experto ayudando a un cliente.

RESPONDE EN ESPAÑOL.`;
}

// Prompt para confirmación de envío
function getConfirmationPrompt(leadData: LeadData, submitResult: { success: boolean; error?: string }) {
    if (submitResult.success) {
        // Determinar qué login recomendar
        const productLower = leadData.productInterest.toLowerCase();
        let loginInfo = "";

        if (productLower.includes('crm') && productLower.includes('cargo')) {
            loginInfo = `\n\n**Cuando necesites acceder:**\n• GOxT CRM: ${PRODUCT_URLS.CRM}\n• GOxT Cargo: ${PRODUCT_URLS.CARGO}`;
        } else if (productLower.includes('crm')) {
            loginInfo = `\n\n**Cuando necesites acceder a GOxT CRM:** ${PRODUCT_URLS.CRM}`;
        } else if (productLower.includes('cargo')) {
            loginInfo = `\n\n**Cuando necesites acceder a GOxT Cargo:** ${PRODUCT_URLS.CARGO}`;
        }

        return `Eres el agente IA de GOxT y acabas de COMPLETAR exitosamente la solicitud de demo del usuario.

DATOS CAPTURADOS:
- Nombre: ${leadData.name}
- Email: ${leadData.email}
- Empresa: ${leadData.company || 'No especificada'}
- Producto: ${leadData.productInterest}
- Teléfono: ${leadData.phone || 'No especificado'}
- Flota: ${leadData.fleetSize || 'No especificada'}
- Software actual: ${leadData.currentSoftware || 'No especificado'}

INSTRUCCIONES:
1. CONFIRMA que su solicitud fue enviada exitosamente
2. Dile que el equipo se pondrá en contacto en menos de 24 horas
3. ${loginInfo ? 'Proporciona la información de login:' : ''}
4. Pregunta si tiene alguna otra duda mientras tanto
5. Mantén un tono ENTUSIASTA y PROFESIONAL

RESPONSE FORMAT:
"¡Listo, ${leadData.name}! 🎉 Tu solicitud de demo para ${leadData.productInterest} ha sido enviada exitosamente. 

Nuestro equipo se pondrá en contacto contigo a ${leadData.email} en las próximas 24 horas para coordinar la mejor fecha y hora.${loginInfo}

Mientras tanto, ¿hay algo más que quieras saber sobre GOxT?"

RESPONDE EN ESPAÑOL con mucho ENTUSIASMO.`;
    } else {
        return `Eres el agente IA de GOxT y hubo un ERROR al enviar la solicitud de demo.

ERROR: ${submitResult.error}

INSTRUCCIONES:
1. DISCULPATE profesionalmente
2. Ofrece alternativa: que te contacte por email a contacto@goxt.io
3. Mantén tono CALMADO y SERVICIAL

RESPONDE EN ESPAÑOL de forma EMPÁTICA.`;
    }
}

// Prompt normal con detección de interés
function getNormalPrompt(
    userMessage: string,
    conversationHistory: string[] = [],
    interest: ReturnType<typeof analyzeUserInterest>
) {
    const docs = getCachedDocs();

    const detectedCRM = interest.interestedInCRM;
    const detectedCargo = interest.interestedInCargo;
    const wantsLogin = interest.wantsLogin;
    const wantsTrial = interest.wantsTrial;
    const askingAboutPricing = interest.askingAboutPricing;

    // Si pregunta sobre precios, usar respuesta especial
    if (askingAboutPricing) {
        return `Eres el agente IA de GOxT especializado en software para transporte y logística.

DETECTADO: El usuario está preguntando sobre PRECIOS.

INSTRUCCIONES CRÍTICAS:
1. NO INVENTES precios, planes o tarifas
2. NO hagas referencia a un archivo de precios (ya no existe)
3. Explica POR QUÉ preferimos hacer una demo primero
4. Destaca el VALOR y BENEFICIOS que recibirá
5. Motívalo a solicitar una demo personalizada
6. Sé TRANSPARENTE y PROFESIONAL
7. Crea INTERÉS en conocer su operación

TONO:
• Entusiasta pero profesional
• Valórico (habla del valor, no del precio)
• Persuasivo pero honesto
• Orientado a soluciones

ESTRATEGIA DE RESPUESTA:
1. Agradece la pregunta
2. Explica nuestro enfoque personalizado
3. Destaca los beneficios y valor
4. Explica POR QUÉ una demo primero es mejor para él/ella
5. Invita a agendar demo sin compromiso

EJEMPLO DE RESPUESTA:
"¡Excelente pregunta! En GOxT creamos planes personalizados porque cada empresa de transporte es única. Preferimos mostrarte primero todo el valor que recibirás en una demo, para luego crear una propuesta que se ajuste exactamente a tus necesidades. ¿Te gustaría agendar una demo para que veas cómo podemos optimizar tu operación?"

RESPONDE EN ESPAÑOL de forma CONVINCENTE y MOTIVADORA.`;
    }

    // Base prompt para conversación normal
    let systemPrompt = `Eres el agente IA de GOxT especializado en software para transporte y logística.

CONTEXTO DISPONIBLE:
=== INFORMACIÓN DEL CRM ===
${docs.crm}
=== FIN CRM ===

DETECTADO EN CONVERSACIÓN:
${detectedCRM ? '• Usuario muestra interés en CRM\n' : ''}
${detectedCargo ? '• Usuario muestra interés en Cargo\n' : ''}
${wantsLogin ? '• Usuario quiere acceder/login\n' : ''}
${wantsTrial ? '• Usuario quiere probar el sistema\n' : ''}

URLS IMPORTANTES (úsalos cuando sea relevante, pero NO los repitas textualmente):
• GOxT CRM Login: ${PRODUCT_URLS.CRM}
• GOxT Cargo Login: ${PRODUCT_URLS.CARGO}
• Solicitar Demo: ${PRODUCT_URLS.DEMO_REQUEST}

TU ESTRATEGIA:`;

    if (wantsLogin) {
        systemPrompt += `
USUARIO QUIERE LOGIN/ACCESO:
1. Si pregunta específicamente por CRM o Cargo, da el link correspondiente
2. Si no especifica, pregunta: "¿Para qué producto necesitas acceso: CRM, Cargo o ambos?"
3. Si es nuevo usuario, sugiere demo primero
4. SIEMPRE proporciona los links cuando sea relevante

EJEMPLOS:
Usuario: "¿Cómo ingreso al CRM?"
Tú: "Para acceder a GOxT CRM: ${PRODUCT_URLS.CRM}"
Usuario: "Quiero entrar al sistema"
Tú: "¿Te refieres a GOxT CRM (${PRODUCT_URLS.CRM}) o GOxT Cargo (${PRODUCT_URLS.CARGO})? ¿O ambos?"`;

    } else if (wantsTrial) {
        systemPrompt += `
USUARIO QUIERE PROBAR/PRUEBA:
1. Explícale que ofrecemos demo personalizada en lugar de trial autogestionado
2. Destaca ventajas: configuración personalizada, respuesta a dudas en vivo
3. Ofrece agendar demo inmediatamente
4. Si insiste en trial, menciona que el equipo evaluará su caso

EJEMPLO:
"Actualmente ofrecemos demos personalizadas para que veas exactamente cómo funciona en TU operación. ¿Te gustaría agendar 15 minutos para mostrarte todo?"`;

    } else if (detectedCRM || detectedCargo) {
        systemPrompt += `
USUARIO INTERESADO EN PRODUCTOS ESPECÍFICOS:
1. Responde su pregunta de forma ÚTIL
2. Destaca 1-2 BENEFICIOS clave del producto que le interesa
3. Termina ofreciendo DEMO personalizada O link de login si parece ser usuario existente

EJEMPLOS:
Usuario pregunta sobre CRM:
"GOxT CRM optimiza cotizaciones en 3 minutos y organiza tus clientes. ¿Ya eres usuario? Puedes acceder en: ${PRODUCT_URLS.CRM} ¿O prefieres una demo personalizada?"

Usuario pregunta sobre Cargo:
"GOxT Cargo reduce costos de flota con seguimiento GPS en tiempo real. ¿Ya lo usas? Accede en: ${PRODUCT_URLS.CARGO} ¿O te interesa ver una demo?"`;

    } else {
        systemPrompt += `
CONVERSACIÓN GENERAL:
1. Responde preguntas de forma CLARA y ÚTIL
2. Detecta señales de interés en productos específicos
3. Si menciona "probar", "usar", "acceder", "login" → ofrece links
4. Si menciona "demo", "ver", "mostrar" → ofrece demo
5. SIEMPRE termina con opción clara: demo o login según contexto

OBJETIVO FINAL:
Guiar al usuario hacia DEMO (para nuevos) o LOGIN (para existentes) según su interés detectado.

TONO:
Amigable, servicial, pero directo al punto.`;
    }

    systemPrompt += `

RESPONDE EN ESPAÑOL con tono PROFESIONAL y AMIGABLE.`;

    return systemPrompt;
}

export async function POST(req: Request) {
    try {
        const { messages, sessionId } = await req.json();

        const lastUserMessage = messages
            .filter((msg: any) => msg.role === 'user')
            .pop()?.content || '';

        const conversationHistory = messages
            .filter((msg: any) => msg.role === 'user')
            .slice(0, -1) // Excluir el último mensaje
            .map((msg: any) => msg.content);

        // Obtener o crear sessionId
        const currentSessionId = sessionId || `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Verificar estado de conversación actual
        let conversationState = conversationStates.get(currentSessionId);

        // Analizar interés del usuario
        const interest = analyzeUserInterest(lastUserMessage, conversationHistory);

        // Actualizar estado de interés
        if (conversationState) {
            conversationState.detectedInterest = {
                crm: conversationState.detectedInterest.crm || interest.interestedInCRM,
                cargo: conversationState.detectedInterest.cargo || interest.interestedInCargo,
                wantsTrial: conversationState.detectedInterest.wantsTrial || interest.wantsTrial,
                wantsLogin: conversationState.detectedInterest.wantsLogin || interest.wantsLogin
            };
        }

        // Si el usuario quiere demo y no estamos en proceso, iniciar
        if (interest.wantsDemo && !conversationState?.isCollectingDemoData) {
            conversationState = startDemoCollection(currentSessionId);

            // Transferir interés detectado
            if (conversationState) {
                conversationState.detectedInterest = {
                    crm: interest.interestedInCRM,
                    cargo: interest.interestedInCargo,
                    wantsTrial: interest.wantsTrial,
                    wantsLogin: interest.wantsLogin
                };
            }
        }

        // Si estamos en proceso de demo
        if (conversationState?.isCollectingDemoData) {
            const { nextStep, isComplete } = processDemoStep(
                currentSessionId,
                lastUserMessage,
                conversationState.currentStep
            );

            // Si completamos todos los pasos, enviar a API
            if (isComplete && conversationState.collectedData.name && conversationState.collectedData.email) {
                const leadData: LeadData = {
                    name: conversationState.collectedData.name,
                    email: conversationState.collectedData.email,
                    company: conversationState.collectedData.company,
                    productInterest: conversationState.collectedData.productInterest || 'general',
                    phone: conversationState.collectedData.phone,
                    fleetSize: conversationState.collectedData.fleetSize,
                    currentSoftware: conversationState.collectedData.currentSoftware,
                    message: `Demo solicitada vía Chat IA. Flota: ${conversationState.collectedData.fleetSize || 'N/A'}, Software: ${conversationState.collectedData.currentSoftware || 'N/A'}`,
                    collectedAt: new Date()
                };

                const submitResult = await submitLeadToAPI(leadData);

                // Generar mensaje de confirmación
                const systemPrompt = getConfirmationPrompt(leadData, submitResult);

                const completion = await openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: "Confirma el envío de mi solicitud" }
                    ],
                    temperature: 0.7,
                    max_tokens: 300,
                });

                const response = completion.choices[0]?.message?.content ||
                    "¡Solicitud enviada! Nos contactaremos pronto.";

                // Limpiar estado
                conversationStates.delete(currentSessionId);

                return NextResponse.json({
                    message: response,
                    sessionId: currentSessionId,
                    isCollectingDemo: false,
                    demoComplete: true,
                    submitSuccess: submitResult.success
                });

            } else {
                // Continuar con el siguiente paso
                const systemPrompt = getDemoPrompt(
                    conversationState.currentStep,
                    conversationState.collectedData
                );

                const completion = await openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: systemPrompt },
                        ...messages,
                    ],
                    temperature: 0.7,
                    max_tokens: 300,
                });

                const response = completion.choices[0]?.message?.content ||
                    "Por favor, proporciona la información solicitada.";

                return NextResponse.json({
                    message: response,
                    sessionId: currentSessionId,
                    isCollectingDemo: true,
                    demoStep: nextStep,
                    demoComplete: false
                });
            }

        } else {
            // Si el usuario pregunta sobre PRECIOS, dar respuesta especial
            if (interest.askingAboutPricing) {
                const pricingResponse = getPricingResponse();

                return NextResponse.json({
                    message: pricingResponse,
                    sessionId: currentSessionId,
                    isCollectingDemo: false,
                    interestDetected: interest,
                    isPricingQuestion: true
                });
            }

            // Si el usuario quiere login/trial y NO está en demo, dar respuesta directa
            if ((interest.wantsLogin || interest.wantsTrial) && !interest.wantsDemo) {
                const loginResponse = getLoginResponse(interest);

                return NextResponse.json({
                    message: loginResponse,
                    sessionId: currentSessionId,
                    isCollectingDemo: false,
                    interestDetected: interest
                });
            }

            // Conversación normal con detección de interés
            const systemPrompt = getNormalPrompt(lastUserMessage, conversationHistory, interest);

            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: systemPrompt },
                    ...messages,
                ],
                temperature: 0.8,
                max_tokens: 500,
            });

            const response = completion.choices[0]?.message?.content ||
                "Lo siento, no pude generar una respuesta.";

            return NextResponse.json({
                message: response,
                sessionId: currentSessionId,
                isCollectingDemo: false,
                interestDetected: interest
            });
        }

    } catch (error) {
        console.error("Error en API de chat:", error);
        return NextResponse.json(
            { error: "Error al procesar la solicitud" },
            { status: 500 }
        );
    }
}