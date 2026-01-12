import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "GOxT CRM - Gestión Comercial para Transporte",
    description:
        "El CRM diseñado para empresas de transporte. Cotizaciones en minutos, pipeline visual, productos configurables e integración con operaciones.",
};

const features = [
    {
        icon: "📊",
        title: "Pipeline Visual Kanban",
        description:
            "Visualiza todas tus oportunidades en un tablero intuitivo. Arrastra y suelta entre etapas, asigna responsables y nunca pierdas una oportunidad.",
    },
    {
        icon: "📝",
        title: "Cotizaciones Dinámicas",
        description:
            "Configura tus productos una vez y genera cotizaciones profesionales en segundos. Múltiples servicios, descuentos por línea, PDF listo para enviar.",
    },
    {
        icon: "🛠️",
        title: "Productos 100% Configurables",
        description:
            "Crea productos con los campos exactos que necesitas: origen, destino, tipo de carga, peso, volumen. Sin código, sin desarrolladores.",
    },
    {
        icon: "🔗",
        title: "Integración con Cargo",
        description:
            "Conecta ventas con operaciones. Las cotizaciones aprobadas se convierten en órdenes de trabajo automáticamente.",
    },
    {
        icon: "👥",
        title: "Gestión de Contactos",
        description:
            "Centraliza toda la información de tus clientes. Contactos, organizaciones, historial de interacciones en un solo lugar.",
    },
    {
        icon: "📅",
        title: "Actividades y Calendario",
        description:
            "Programa llamadas, reuniones y tareas. Sincroniza con Google Calendar. Nunca olvides un seguimiento.",
    },
    {
        icon: "📈",
        title: "Reportes y Dashboards",
        description:
            "Visualiza métricas clave: pipeline por etapa, conversión, desempeño por vendedor. Dashboards personalizados con Metabase.",
    },
    {
        icon: "🏢",
        title: "Multi-Workspace",
        description:
            "Espacios separados por empresa o división. Cada workspace con su propia configuración, usuarios y datos aislados.",
    },
];

const useCases = [
    {
        icon: "🚛",
        title: "Transporte Terrestre",
        items: [
            "Cotiza rutas con origen/destino desde mapa",
            "Integra tarifas por km o por zona",
            "Conecta con tu TMS para generar órdenes",
        ],
    },
    {
        icon: "🚢",
        title: "Transporte Marítimo",
        items: [
            "Campos específicos: nave, contenedor, puerto",
            "Múltiples servicios por cotización",
            "Integración con información de viajes",
        ],
    },
    {
        icon: "📦",
        title: "Operadores Logísticos",
        items: [
            "Cotiza almacenaje, picking, packing",
            "Campos de inventario y ubicaciones",
            "Tarifas por volumen o por operación",
        ],
    },
];

export default function CRMPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-20">
                <div className="goxt-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="text-6xl">🎯</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--goxt-gray-900)]" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                GOxT: <span className="goxt-gradient-accent-text">CRM</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl font-medium text-[var(--goxt-primary)] mb-4">
                            De leads a clientes: gestiona todo el ciclo de ventas
                        </p>
                        <p className="text-lg text-[var(--goxt-gray-600)] mb-8 max-w-2xl mx-auto">
                            El CRM que habla el idioma de tu operación. Diseñado
                            específicamente para empresas de transporte y logística.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://crm.goxt.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="goxt-btn-primary text-lg px-8 py-4"
                            >
                                Iniciar Sesión
                            </a>
                            <Link href="/contacto" className="goxt-btn-secondary text-lg px-8 py-4">
                                Solicitar Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshot */}
            <section className="py-16 bg-white">
                <div className="goxt-container">
                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-20 rounded-2xl blur-2xl" />
                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-400 border border-gray-200">
                                        crm.goxt.io
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full">
                                <Image
                                    src="/assets/Flujo CRM.png"
                                    alt="Pipeline Kanban de GOxT CRM"
                                    width={1200}
                                    height={675}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="goxt-section bg-[var(--goxt-gray-50)]">
                <div className="goxt-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            Funcionalidades <span className="goxt-gradient-accent-text">Principales</span>
                        </h2>
                        <p className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto">
                            Todo lo que necesitas para gestionar tu proceso comercial de
                            principio a fin.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <span className="text-4xl block mb-4">{feature.icon}</span>
                                <h3 className="text-lg font-bold text-[var(--goxt-gray-900)] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[var(--goxt-gray-600)]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="goxt-section bg-white">
                <div className="goxt-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            Casos de Uso por <span className="goxt-gradient-accent-text">Industria</span>
                        </h2>
                        <p className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto">
                            GOxT CRM se adapta a diferentes tipos de operaciones de
                            transporte y logística.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {useCases.map((useCase) => (
                            <div key={useCase.title} className="goxt-card">
                                <span className="text-5xl block mb-4">{useCase.icon}</span>
                                <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-4">
                                    {useCase.title}
                                </h3>
                                <ul className="space-y-3">
                                    {useCase.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-2 text-[var(--goxt-gray-600)]"
                                        >
                                            <svg
                                                className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="goxt-section">
                <div className="goxt-container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-6" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                        ¿Listo para transformar tu proceso comercial?
                    </h2>
                    <p className="text-lg text-[var(--goxt-gray-600)] mb-8 max-w-2xl mx-auto">
                        Agenda una demo personalizada y descubre cómo GOxT CRM puede
                        ayudarte a cerrar más negocios.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="goxt-btn-primary text-lg px-8 py-4"
                        >
                            Solicitar Demo
                        </Link>
                        <Link
                            href="/productos/cargo"
                            className="goxt-btn-secondary text-lg px-8 py-4"
                        >
                            Conocer GOxT Cargo →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
