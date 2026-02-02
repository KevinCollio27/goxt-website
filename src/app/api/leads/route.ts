import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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
    collectedAt: string; // ISO string
}

export async function POST(req: Request) {
    try {
        const leadData: LeadData = await req.json();

        // Validar datos requeridos
        if (!leadData.name || !leadData.email || !leadData.productInterest) {
            return NextResponse.json(
                { error: "Faltan campos requeridos: name, email, productInterest" },
                { status: 400 }
            );
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(leadData.email)) {
            return NextResponse.json(
                { error: "Formato de email inválido" },
                { status: 400 }
            );
        }

        // Guardar en archivo JSON
        const filePath = path.join(process.cwd(), 'leads.json');
        let leads: LeadData[] = [];

        // Leer leads existentes si el archivo existe
        if (fs.existsSync(filePath)) {
            try {
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                leads = JSON.parse(fileContent);
            } catch (error) {
                console.warn('Error leyendo leads.json, creando nuevo archivo:', error);
                leads = [];
            }
        }

        // Agregar timestamp si no existe
        if (!leadData.collectedAt) {
            leadData.collectedAt = new Date().toISOString();
        }

        // Agregar nuevo lead
        leads.push(leadData);

        // Guardar archivo actualizado
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');

        console.log('✅ Lead capturado exitosamente:', leadData);

        // TODO: En el futuro, también enviar a api-crm.goxt.io/public/leads
        // try {
        //     await fetch('https://api-crm.goxt.io/public/leads', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(leadData)
        //     });
        // } catch (error) {
        //     console.error('Error enviando a CRM externo:', error);
        // }

        return NextResponse.json({
            success: true,
            message: "Lead capturado exitosamente",
            leadId: leads.length
        });

    } catch (error) {
        console.error("Error procesando lead:", error);
        return NextResponse.json(
            { error: "Error interno procesando la solicitud" },
            { status: 500 }
        );
    }
}
