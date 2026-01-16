"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        question: "¿Qué es la integración GOxT-Cargo y cómo funciona?",
        answer: "Es la conexión bidireccional entre nuestro CRM GOxT y el sistema operativo Cargo. Envías contactos y cotizaciones (órdenes) desde GOxT y recibes en tiempo real información de naves, direcciones, rutas y geocercas desde Cargo, sincronizando automáticamente el estado de las operaciones."
    },
    {
        question: "¿Puedo gestionar oportunidades y generar cotizaciones sin integración con Cargo?",
        answer: "Sí, GOxT funciona como un CRM completo independientemente de la integración. La conexión con Cargo es opcional y está diseñada para empresas que ya utilizan sistemas operativos logísticos."
    },
    {
        question: "¿Qué incluye el plan básico de GOxT CRM?",
        answer: "Incluye gestión de contactos y organizaciones, pipelines de ventas personalizables, oportunidades, actividades, cotizaciones dinámicas, catálogos básicos y dashboards con métricas esenciales. La integración con Cargo y otras funcionalidades avanzadas están en planes superiores."
    },
    {
        question: "¿GOxT es solo para empresas de transporte y logística?",
        answer: "Aunque está especializado en transporte terrestre/marítimo y operadores logísticos, GOxT es adaptable a cualquier negocio B2B con ciclos de ventas complejos, como construcción, manufactura, distribución y servicios profesionales."
    },
    {
        question: "¿Cómo funcionan los campos dinámicos en productos y cotizaciones?",
        answer: "Cada producto en GOxT puede tener campos personalizables (texto, número, lista, fecha, etc.). Al crear una cotización, heredas esa estructura dinámica, permitiendo adaptar cada propuesta comercial a las necesidades específicas del cliente y servicio."
    },
    {
        question: "¿Qué es un workspace y puedo tener varios?",
        answer: "Cada cliente/empresa tiene su propio workspace aislado con configuración independiente (pipelines, catálogos, campos dinámicos). Puedes gestionar múltiples workspaces desde una misma cuenta si eres consultor o administrador."
    },
    {
        question: "¿Cómo se sincronizan las actividades con Google Calendar?",
        answer: "Al crear una actividad (llamada, reunión, tarea) en GOxT, puedes sincronizarla automáticamente con tu Google Calendar. Los cambios en cualquiera de las plataformas se reflejan en ambas."
    },
    {
        question: "¿Qué dashboards y métricas incluye GOxT?",
        answer: "Incluimos dashboards embebidos de Metabase con métricas como: conversión por etapa del pipeline, valor promedio de oportunidades, tiempo en cada etapa, actividades por responsable y análisis de cotizaciones aceptadas/rechazadas."
    },
    {
        question: "¿Puedo personalizar los pipelines de ventas (flujos)?",
        answer: "Sí, cada workspace puede definir sus propias etapas de venta (ej: Prospección, Cotización, Negociación, Cierre) y visualizarlas en un pipeline Kanban totalmente personalizable."
    },
    {
        question: "¿Cómo es el proceso de creación de una cotización en GOxT?",
        answer: "Sigue 6 pasos guiados: 1) Seleccionar producto, 2) Completar campos dinámicos del producto, 3) Agregar múltiples servicios, 4) Configurar montos y moneda, 5) Establecer términos comerciales, 6) Definir validez. Al final, se genera un PDF profesional listo para enviar."
    },
    {
        question: "¿GOxT ofrece API para integraciones personalizadas?",
        answer: "Sí, ofrecemos API REST para conectar GOxT con otros sistemas ERP, plataformas de pagos, herramientas de marketing o sistemas internos. Consulta nuestro plan Enterprise para detalles."
    },
    {
        question: "¿Qué tipos de actividades puedo gestionar?",
        answer: "GOxX permite registrar llamadas, emails, reuniones, tareas y visitas. Cada workspace puede personalizar tipos adicionales según sus necesidades."
    },
    {
        question: "¿Cómo maneja GOxT la información de contacto y organizaciones?",
        answer: "Una organización puede tener múltiples contactos, pero cada contacto pertenece a una sola organización. Ambos tienen campos principales fijos y campos dinámicos personalizables por cada empresa."
    },
    {
        question: "¿Puedo migrar mis datos desde otro CRM a GOxT?",
        answer: "Sí, ofrecemos servicios de migración asistida desde plataformas como Salesforce, HubSpot o sistemas personalizados. Contáctanos para una evaluación de tu migración."
    }
];

export function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="goxt-container">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--goxt-gray-900)]" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                    ¿Tienes <span className="goxt-gradient-accent-text">preguntas?</span>
                </h2>
                <p className="text-center text-[var(--goxt-gray-600)] mb-12">
                    Si la respuesta a tu pregunta no está en esta página, contacta a nuestros{" "}
                    <Link href="/contacto" className="text-[var(--goxt-primary)] hover:underline font-semibold">
                        Gerentes de cuenta
                    </Link>
                </p>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-[var(--goxt-gray-900)] pr-4">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-[var(--goxt-gray-600)] transition-transform flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-6 text-[var(--goxt-gray-600)]">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
