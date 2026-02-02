import { NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Interfaz para información en caché
interface CachedDocs {
    pricing: string;
    crm: string;
    timestamp: number;
}

// Caché simple
let docsCache: CachedDocs | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

// Leer y cachear documentos
function getCachedDocs(): CachedDocs {
    const now = Date.now();

    if (docsCache && (now - docsCache.timestamp) < CACHE_DURATION) {
        return docsCache;
    }

    console.log("Actualizando caché de documentos...");

    // Busca archivos en varias ubicaciones posibles
    const possiblePaths = [
        path.join(process.cwd(), 'docs'),
        path.join(process.cwd(), 'src', 'docs'),
        path.join(process.cwd()),
    ];

    let pricingContent = '';
    let crmContent = '';

    for (const basePath of possiblePaths) {
        const pricingPath = path.join(basePath, 'GOXT_PRICING_STRATEGY.md');
        const crmPath = path.join(basePath, 'GOXT_CRM_RESUMEN_COMPLETO.md');

        try {
            if (fs.existsSync(pricingPath) && !pricingContent) {
                pricingContent = fs.readFileSync(pricingPath, 'utf-8');
                console.log(`Encontrado pricing en: ${pricingPath}`);
            }

            if (fs.existsSync(crmPath) && !crmContent) {
                crmContent = fs.readFileSync(crmPath, 'utf-8');
                console.log(`Encontrado CRM en: ${crmPath}`);
            }
        } catch (error) {
            console.warn(`Error accediendo a ${basePath}:`, error);
        }
    }

    // Fallback si no se encuentran
    if (!pricingContent) {
        pricingContent = "Información de precios no disponible. Contacta al equipo de ventas.";
    }

    if (!crmContent) {
        crmContent = "Información detallada del CRM no disponible. Solicita una demo para más información.";
    }

    // Limitar tamaño para no exceder tokens
    const maxLength = 4000; // Aprox 8000 tokens
    if (pricingContent.length > maxLength) {
        pricingContent = pricingContent.substring(0, maxLength) + "... [información truncada por tamaño]";
    }

    if (crmContent.length > maxLength) {
        crmContent = crmContent.substring(0, maxLength) + "... [información truncada por tamaño]";
    }

    docsCache = {
        pricing: pricingContent,
        crm: crmContent,
        timestamp: now
    };

    return docsCache;
}

// Analizar el prompt del usuario para determinar qué información necesita
function analyzeQuery(userMessage: string): { needsPricing: boolean; needsCRM: boolean } {
    const message = userMessage.toLowerCase();

    // Palabras clave para precios
    const pricingKeywords = [
        'precio', 'costo', 'valor', 'tarifa', 'plan', 'mensual', 'anual',
        'cuánto cuesta', 'pago', 'suscripción', 'licencia', 'costos',
        'precios', 'inversión', 'presupuesto'
    ];

    // Palabras clave para CRM
    const crmKeywords = [
        'crm', 'clientes', 'cotización', 'cotizaciones', 'ventas',
        'comercial', 'prospectos', 'oportunidades', 'lead', 'leads',
        'facturación', 'factura', 'seguimiento', 'pipeline', 'venta',
        'característica', 'función', 'módulo', 'qué hace', 'cómo funciona'
    ];

    const needsPricing = pricingKeywords.some(keyword => message.includes(keyword));
    const needsCRM = crmKeywords.some(keyword => message.includes(keyword));

    // Si no detectamos nada específico, mostramos todo
    if (!needsPricing && !needsCRM) {
        return { needsPricing: true, needsCRM: true };
    }

    return { needsPricing, needsCRM };
}

// Función para determinar si es un lead calificado
function isQualifiedLead(userMessage: string, conversationHistory: string[]): boolean {
    const message = userMessage.toLowerCase();

    // Señales de interés alto
    const highInterestSignals = [
        'demo', 'prueba', 'probar', 'implementar', 'contratar', 'comprar',
        'quiero', 'necesito', 'urgente', 'inmediato', 'hoy', 'rápido',
        'mi empresa', 'tenemos', 'actualmente usamos', 'estamos buscando'
    ];

    // Señales de búsqueda de información (interés medio)
    const mediumInterestSignals = [
        'características', 'funciones', 'beneficios', 'ventajas',
        'comparar', 'diferencias', 'opiniones', 'experiencias',
        'cómo funciona', 'para qué sirve'
    ];

    const hasHighInterest = highInterestSignals.some(signal => message.includes(signal));
    const hasMediumInterest = mediumInterestSignals.some(signal => message.includes(signal));

    // Si tiene interés alto o es la tercera pregunta o más
    return hasHighInterest || (hasMediumInterest && conversationHistory.length >= 2);
}

// Construir prompt dinámico basado en la consulta con estrategia de ventas
function buildDynamicSystemPrompt(userMessage: string, conversationHistory: string[] = []): string {
    const docs = getCachedDocs();
    const { needsPricing, needsCRM } = analyzeQuery(userMessage);
    const isQualified = isQualifiedLead(userMessage, conversationHistory);

    let contextSections = [];

    if (needsPricing) {
        contextSections.push(`=== INFORMACIÓN DE PRECIOS Y PLANES ===
${docs.pricing}
=== FIN PRECIOS ===`);
    }

    if (needsCRM) {
        contextSections.push(`=== INFORMACIÓN DETALLADA DEL CRM ===
${docs.crm}
=== FIN CRM ===`);
    }

    // Si no se necesita nada específico, mostrar información general
    if (contextSections.length === 0) {
        contextSections.push(`=== INFORMACIÓN GENERAL GOxT ===
GOxT ofrece dos productos principales para transporte y logística:
1. GOxT CRM - Sistema de gestión comercial
2. GOxT Cargo - Sistema de control de flotas

Para precios específicos, consulta la sección de precios.
Para detalles técnicos del CRM, pregunta por características específicas.
=== FIN INFORMACIÓN GENERAL ===`);
    }

    const context = contextSections.join('\n\n');

    // ESTRATEGIA DE VENTAS BASADA EN EL PERFIL DEL LEAD
    let salesStrategy = '';
    if (isQualified) {
        salesStrategy = `ESTRATEGIA DE VENTAS (LEAD CALIFICADO):
- Este usuario muestra ALTO INTERÉS
- Sé DIRECTIVO y PROACTIVO
- OFRECE DEMO INMEDIATA
- PIDE INFORMACIÓN DE CONTACTO
- MENCIONA BENEFICIOS DE IMPLEMENTACIÓN RÁPIDA
- Usa frases como: "Perfecto, para tu caso específico..."
- Termina con: "¿En qué horario te viene bien para la demo?"`;
    } else {
        salesStrategy = `ESTRATEGIA DE VENTAS (LEAD EN PROSPECCIÓN):
- Este usuario está BUSCANDO INFORMACIÓN
- Sé EDUCATIVO pero VENDEDOR
- DESTACA 2-3 BENEFICIOS CLAVE
- NO des toda la información de una vez
- GENERA CURIOSIDAD con frases como: "Lo mejor es que lo veas en acción..."
- TERMINA con una LLAMADA A ACCIÓN SUAVE
- Usa: "Para ver exactamente cómo se adapta a tus necesidades..."`;
    }

    return `Eres GOXY, el AGENTE DE VENTAS virtual de GOxT. Tu MISIÓN es CONVERTIR consultas en DEMOS y VENTAS.

TU ROL:
- Eres un VENDEDOR EXPERTO en software para transporte
- Tu objetivo es AGENDAR DEMOS y CAPTURAR LEADS
- Estrategia: "Dale suficiente para interesar, pero no tanto para que no necesite la demo"

CONTEXTO DISPONIBLE:
${context}

${salesStrategy}

TÉCNICAS DE VENTA OBLIGATORIAS:
1. REGLA DEL 80/20: Da el 80% de la respuesta, reserva el 20% para la demo
2. PREGUNTAS DE DESCUBRIMIENTO: Incluye al menos 1 pregunta para conocer su negocio
3. BENEFICIOS SOBRE CARACTERÍSTICAS: Siempre menciona cómo ayuda a SU NEGOCIO
4. PRUEBA SOCIAL: Menciona que "+500 empresas" confían en GOxT
5. URGENCIA SUAVE: "Las empresas que implementan ahora ahorran 30% en tiempo"

RESPUESTAS PROHIBIDAS:
- ❌ NO des manuales técnicos completos
- ❌ NO enumeres TODAS las funciones
- ❌ NO seas solo un "chat de preguntas frecuentes"
- ❌ NO termines sin llamada a acción

FORMATO DE RESPUESTA IDEAL:
1. RESPUESTA INFORMATIVA (60%): Responde la pregunta con información útil
2. VALOR AÑADIDO (20%): Añade un beneficio o dato relevante extra
3. LLAMADA A ACCIÓN (20%): Invita a demo/contacto con motivo específico

EJEMPLOS DE LLAMADAS A ACCIÓN:
- "Para que veas EXACTAMENTE cómo funciona en tu tipo de transporte..."
- "La demo personalizada te mostrará el AHORRO ESPECÍFICO para tu empresa..."
- "¿Te gustaría AGENDAR 15 minutos para mostrarte el sistema en vivo?"
- "Nuestro equipo puede hacer un ANÁLISIS GRATIS de tu operación actual..."

SI NO SABES ALGO:
"Ese detalle técnico lo revisamos en la demo personalizada. ¿Te interesa agendar?"

RESPONDE SIEMPRE EN ESPAÑOL con tono AMABLE pero SEGURO.`;
}

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Obtener el último mensaje del usuario
        const lastUserMessage = messages
            .filter((msg: any) => msg.role === 'user')
            .pop()?.content || '';

        // Extraer historial de conversación (solo mensajes del usuario)
        const conversationHistory = messages
            .filter((msg: any) => msg.role === 'user')
            .map((msg: any) => msg.content);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: buildDynamicSystemPrompt(lastUserMessage, conversationHistory),
                },
                ...messages,
            ],
            temperature: 0.8, // Un poco más creativo para ventas
            max_tokens: 800, // Respuestas más concisas
        });

        const assistantMessage = completion.choices[0]?.message?.content || "Lo siento, no pude generar una respuesta.";

        return NextResponse.json({ message: assistantMessage });
    } catch (error) {
        console.error("Error en API de chat:", error);
        return NextResponse.json(
            { error: "Error al procesar la solicitud" },
            { status: 500 }
        );
    }
}