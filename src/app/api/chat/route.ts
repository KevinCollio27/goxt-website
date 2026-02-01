import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `Eres un asistente virtual de GOxT, una empresa que ofrece software de gestión para empresas de transporte y logística. 
                    
GOxT tiene dos productos principales:
1. GOxT CRM: Sistema de gestión comercial y cotizaciones para empresas de transporte
2. GOxT Cargo: Sistema de control de flotas y operaciones logísticas

Tu función es:
- Ayudar a los usuarios a entender los productos de GOxT
- Responder preguntas sobre las características y beneficios
- Guiar a los usuarios interesados hacia la solicitud de demo
- Ser amable, profesional y conciso en tus respuestas
- Responder siempre en español

Si te preguntan sobre precios, menciona que pueden ver la página de precios o solicitar una demo personalizada.`,
                },
                ...messages,
            ],
            temperature: 0.7,
            max_tokens: 500,
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
