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

// Interfaz para datos del lead (coincide con formulario de contacto)
interface LeadData {
    name: string;
    email: string;
    phone: string;
    company: string;
    rut?: string;
    website?: string;
    industry?: string;
    productInterest: string;
    message?: string;
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

// Extraer email de un mensaje de texto natural
function extractEmail(text: string): string {
    const emailRegex = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;
    const match = text.match(emailRegex);
    return match ? match[0] : text.trim();
}

// Extraer teléfono de un mensaje de texto natural
function extractPhone(text: string): string {
    // Eliminar texto común y quedarse sólo con el número
    const phoneRegex = /[+]?[\d\s\-().]{7,20}/;
    const match = text.match(phoneRegex);
    return match ? match[0].trim() : text.trim();
}

// Procesar paso de demo (5 pasos alineados con formulario de contacto)
function processDemoStep(sessionId: string, userInput: string, currentStep: number) {
    const conversationState = conversationStates.get(sessionId);
    if (!conversationState) return { nextStep: 0, isComplete: false };

    // Mapear paso actual al campo correspondiente
    const stepFieldMap: { step: number; fields: (keyof Omit<LeadData, 'collectedAt' | 'message'>)[] }[] = [
        { step: 0, fields: ['name'] },
        { step: 1, fields: ['email'] },
        { step: 2, fields: ['phone'] },
        { step: 3, fields: ['company', 'rut'] },       // empresa + RUT juntos
        { step: 4, fields: ['industry', 'website'] },   // industria + web juntos (opcionales)
    ];

    const TOTAL_STEPS = stepFieldMap.length;

    if (currentStep < TOTAL_STEPS) {
        const mapping = stepFieldMap[currentStep];
        const input = userInput.trim();

        if (currentStep === 1) {
            // Paso 2: extraer email del mensaje del usuario
            conversationState.collectedData.email = extractEmail(input);
        } else if (currentStep === 2) {
            // Paso 3: extraer teléfono del mensaje del usuario
            conversationState.collectedData.phone = extractPhone(input);
        } else if (currentStep === 3) {
            // Paso 4: separar empresa y RUT si el usuario los da juntos
            const parts = input.split(/[,;\-–]/); // separador flexible
            conversationState.collectedData.company = parts[0]?.trim() || input;
            if (parts[1]) {
                conversationState.collectedData.rut = parts[1].trim();
            }
        } else if (currentStep === 4) {
            // Paso 5: industria y web opcionales
            if (input.toLowerCase().includes('no') || input.toLowerCase().includes('omitir') || input.toLowerCase().includes('saltar')) {
                // El usuario no quiere dar estos datos
            } else {
                conversationState.collectedData.industry = input;
            }
        } else {
            // Pasos simples: un campo por paso (nombre)
            const field = mapping.fields[0];
            conversationState.collectedData[field] = input;
        }
    }

    const nextStep = currentStep + 1;
    const isComplete = nextStep >= TOTAL_STEPS;

    if (!isComplete) {
        conversationState.currentStep = nextStep;
    }

    conversationStates.set(sessionId, conversationState);
    return { nextStep, isComplete };
}

// Enviar lead a la API
async function submitLeadToAPI(leadData: LeadData, requestUrl?: string): Promise<{ success: boolean; error?: string }> {
    try {
        // Determinar la URL base dinámicamente
        let baseUrl = 'http://localhost:3000';
        if (requestUrl) {
            try {
                const url = new URL(requestUrl);
                baseUrl = url.origin;
            } catch {
                // fallback al default
            }
        } else if (process.env.NEXT_PUBLIC_SITE_URL) {
            baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
        }

        const response = await fetch(`${baseUrl}/api/leads`, {
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

// Prompt para proceso de demo (5 pasos alineados con formulario de contacto)
function getDemoPrompt(currentStep: number, collectedData: Partial<LeadData> = {}) {
    const steps = [
        {
            question: "nombre completo",
            field: "name",
            explanation: "para personalizar tu experiencia. Ej: Juan Pérez"
        },
        {
            question: "correo electrónico",
            field: "email",
            explanation: "para enviarte los detalles de la demo. Puede ser tu correo de trabajo o personal"
        },
        {
            question: "teléfono de contacto",
            field: "phone",
            explanation: "para que nuestro equipo pueda coordinarse contigo de forma rápida"
        },
        {
            question: "nombre de tu empresa y RUT o ID fiscal",
            field: "company",
            explanation: "para preparar la demo con el contexto de tu empresa. Dime el nombre y, si lo tienes a mano, el RUT separado por coma. Ej: Transportes S.A., 76.123.456-K"
        },
        {
            question: "industria o giro de tu empresa y sitio web",
            field: "industry",
            explanation: "para entender mejor tu sector (ej: Logística, Minería, Retail). Si tienes sitio web, compártelo también. Estos campos son opcionales, puedes decir 'omitir' si prefieres"
        }
    ];

    const TOTAL_STEPS = steps.length;
    const step = steps[currentStep];
    const collectedFields = Object.entries(collectedData).filter(([_, v]) => v).length;

    return `Eres el Agente GOxT, un consultor amable que está ayudando a un usuario a SOLICITAR UNA DEMO completando su formulario de contacto.

ESTADO DEL PROCESO (${collectedFields + 1}/${TOTAL_STEPS} datos):

DATOS RECOPILADOS:
${Object.entries(collectedData)
            .filter(([_, v]) => v)
            .map(([k, v]) => `✓ ${k}: ${v}`)
            .join('\n') || 'Aún sin datos.'}

PASO ACTUAL (${currentStep + 1}/${TOTAL_STEPS}):
Necesitas recopilar: ${step.question}

INSTRUCCIONES CRÍTICAS:
1. Sé CONVERSACIONAL, CORDIAL y CÁLIDO, como un asesor que genuinamente quiere ayudar
2. PIDE SOLO este dato: "${step.question}"
3. EXPLICA brevemente: "${step.explanation}"
4. Si es el último paso (paso 5), menciona que es OPCIONAL y puede decir "omitir"
5. NO preguntes múltiples cosas a la vez
6. NO pidas datos que ya tienes
7. Si el usuario ya proporcionó algún dato previamente en la conversación, reconócelo

SI EL USUARIO PREGUNTA OTRA COSA:
Responde MUY BREVEMENTE y luego retoma cordialmente: "Por cierto, para avanzar con tu solicitud, necesitaría tu ${step.question}."

SI EL DATO PARECE INVÁLIDO (ej: email sin @, teléfono muy corto):
"Hmm, parece que ese dato no está completo. ¿Podrías verificarlo?"

TONO: Profesional pero cálido, como un asesor experto que se preocupa por el cliente.

IMPORTANTE: Menciona que estás completando su formulario de solicitud de demo para que el equipo de GOxT pueda contactarlo.

RESPONDE EN ESPAÑOL.`;
}

// Prompt para confirmación de envío
function getConfirmationPrompt(leadData: LeadData, submitResult: { success: boolean; error?: string }) {
    if (submitResult.success) {
        return `Eres el Agente GOxT y acabas de COMPLETAR exitosamente el formulario de solicitud de demo del usuario.

DATOS DEL FORMULARIO ENVIADOS:
- Nombre: ${leadData.name}
- Email: ${leadData.email}
- Teléfono: ${leadData.phone}
- Empresa: ${leadData.company}
- RUT: ${leadData.rut || 'No proporcionado'}
- Industria: ${leadData.industry || 'No proporcionada'}
- Sitio Web: ${leadData.website || 'No proporcionado'}

INSTRUCCIONES:
1. CONFIRMA con entusiasmo que su formulario de solicitud de demo fue completado y enviado exitosamente
2. Haz un RESUMEN breve de los datos enviados
3. Dile que el equipo de GOxT se pondrá en contacto en menos de 24 horas
4. Menciona que pueden contactarlo al email y teléfono que proporcionó
5. Pregunta si tiene alguna otra duda mientras tanto
6. Mantén un tono ENTUSIASTA, CORDIAL y PROFESIONAL

RESPONDE EN ESPAÑOL con mucho ENTUSIASMO.`;
    } else {
        return `Eres el Agente GOxT y hubo un ERROR al enviar el formulario de solicitud de demo.

ERROR: ${submitResult.error}

INSTRUCCIONES:
1. DISCÚLPATE profesionalmente
2. Ofrece alternativa: que te contacte por email a contacto@goxt.io o que complete el formulario directamente en la sección de contacto del sitio web
3. Mantén tono CALMADO y SERVICIAL

RESPONDE EN ESPAÑOL de forma EMPÁTICA.`;
    }
}

// Formatear mensajes para OpenAI (soporte para visión)
function formatOpenAIMessages(messages: any[]): any[] {
    return messages.map((msg) => {
        if (msg.role === 'user' && msg.image) {
            return {
                role: 'user',
                content: [
                    { type: 'text', text: msg.content || "¿Qué ves en esta imagen?" },
                    {
                        type: 'image_url',
                        image_url: {
                            url: msg.image, // base64 data URL
                        },
                    },
                ],
            };
        }
        return {
            role: msg.role,
            content: msg.content,
        };
    });
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
    let systemPrompt = `Eres el Agente GOxT, un consultor experto y cordial en software para transporte y logística.
    
    TU OBJETIVO PRINCIPAL:
    1. ESCUCHAR y ENTENDER los problemas o desafíos logísticos del usuario.
    2. CAPTURAR información del lead (Nombre, Email, Teléfono) de forma natural durante la charla.
    3. GUIAR al usuario hacia una solución (Demo o Login).

    CONSTITUCIÓN DEL AGENTE:
    - Sé EXTREMADAMENTE CORDIAL y EMPÁTICO. Usa frases como "Entiendo perfectamente lo difícil que puede ser...", "¿Cómo te ha afectado ese problema en el día a día?", "¡Qué gusto saludarte! Estoy aquí para apoyarte".
    - No seas un simple buscador de info. Sé un asesor. Si el usuario menciona un problema, indaga más antes de dar una solución técnica.
    - Captura de Datos: No pidas todo de golpe. Si el usuario te cuenta un problema, podrías decir: "Eso suena como algo que podemos resolver. Para darte una asesoría más precisa, ¿con quién tengo el gusto de hablar?" (para nombre) o "Me encantaría enviarte una propuesta sobre esto, ¿cuál es tu correo?".

    CONTEXTO DISPONIBLE:
    === INFORMACIÓN DEL CRM ===
    ${docs.crm}
    === FIN CRM ===
    
    DETECTADO EN CONVERSACIÓN:
    ${detectedCRM ? '• Usuario muestra interés en CRM\n' : ''}
    ${detectedCargo ? '• Usuario muestra interés en Cargo\n' : ''}
    ${wantsLogin ? '• Usuario quiere acceder/login\n' : ''}
    ${wantsTrial ? '• Usuario quiere probar el sistema\n' : ''}
    
    URLS IMPORTANTES (úsalos cuando sea relevante):
    • GOxT CRM Login: ${PRODUCT_URLS.CRM}
    • GOxT Cargo Login: ${PRODUCT_URLS.CARGO}
    • Solicitar Demo: ${PRODUCT_URLS.DEMO_REQUEST}
    
    ESTRATEGIA RECOMENDADA:
    - Si es el inicio de la charla: Saluda cordialmente y pregunta qué problemas o desafíos está enfrentando hoy en su logística o ventas.
    - Si ya identificaste un problema: Explica brevemente cómo GOxT lo resuelve y pide un dato de contacto (Email o Teléfono) para profundizar.
    - Si el usuario parece listo: Ofrécele agendar una demo personalizada.

    RESPONDE EN ESPAÑOL con tono PROFESIONAL, CÁLIDO y de ASESOR experto.`;

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

        // Formatear mensajes para OpenAI (Vision support)
        const openAIMessages = formatOpenAIMessages(messages);

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
        let justStartedDemo = false;
        if (interest.wantsDemo && !conversationState?.isCollectingDemoData) {
            conversationState = startDemoCollection(currentSessionId);
            justStartedDemo = true;

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
            // Si acabamos de iniciar el demo, NO procesar el mensaje trigger como dato
            // Solo generar el prompt para pedir el primer dato (nombre)
            let nextStep = conversationState.currentStep;
            let isComplete = false;

            if (!justStartedDemo) {
                const result = processDemoStep(
                    currentSessionId,
                    lastUserMessage,
                    conversationState.currentStep
                );
                nextStep = result.nextStep;
                isComplete = result.isComplete;
            }

            // Si completamos todos los pasos, enviar a API
            if (isComplete && conversationState.collectedData.name && conversationState.collectedData.email) {
                const leadData: LeadData = {
                    name: conversationState.collectedData.name,
                    email: conversationState.collectedData.email,
                    phone: conversationState.collectedData.phone || '',
                    company: conversationState.collectedData.company || '',
                    rut: conversationState.collectedData.rut,
                    website: conversationState.collectedData.website,
                    industry: conversationState.collectedData.industry,
                    productInterest: 'Demo solicitada vía Chat IA',
                    message: `Empresa: ${conversationState.collectedData.company || 'N/A'}, RUT: ${conversationState.collectedData.rut || 'N/A'}, Industria: ${conversationState.collectedData.industry || 'N/A'}`,
                    collectedAt: new Date()
                };

                const submitResult = await submitLeadToAPI(leadData, req.url);

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
                        ...openAIMessages,
                    ],
                    temperature: 0.7,
                    max_tokens: 500, // Aumentado para visión
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
                    ...openAIMessages,
                ],
                temperature: 0.8,
                max_tokens: 800, // Aumentado para visión
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