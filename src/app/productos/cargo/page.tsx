import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "GOxT Cargo - Control de Flotas y Operaciones Logísticas",
    description:
        "Sistema operativo para transporte. Gestiona flotas, tracking GPS, órdenes de transporte, combustible y mantenimiento en una sola plataforma.",
};

const features = [
    {
        icon: "🚛",
        title: "Gestión de Flotas",
        description:
            "Administra todos tus vehículos, documentación, vencimientos y estado operativo en un solo lugar.",
    },
    {
        icon: "📍",
        title: "Tracking GPS en Tiempo Real",
        description:
            "Monitorea la ubicación de tu flota en tiempo real. Geocercas, alertas y historial de recorridos.",
    },
    {
        icon: "📋",
        title: "Órdenes de Transporte",
        description:
            "Crea, asigna y da seguimiento a órdenes de transporte. Desde la solicitud hasta la entrega.",
    },
    {
        icon: "⛽",
        title: "Control de Combustible",
        description:
            "Registra consumos, analiza rendimientos y detecta anomalías. Reduce costos de operación.",
    },
    {
        icon: "🔧",
        title: "Mantenimiento Programado",
        description:
            "Alertas de mantenimiento preventivo. Historial de reparaciones y control de costos por vehículo.",
    },
    {
        icon: "👤",
        title: "Gestión de Conductores",
        description:
            "Documentación, licencias, asignación de vehículos y evaluación de desempeño.",
    },
    {
        icon: "📄",
        title: "Documentación Digital",
        description:
            "Guías de despacho, manifiestos y toda la documentación necesaria en formato digital.",
    },
    {
        icon: "📊",
        title: "Reportes Operativos",
        description:
            "KPIs de eficiencia, utilización de flota, costos por km y análisis de rentabilidad.",
    },
];

export default function CargoPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-20">
                <div className="goxt-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="text-6xl">🚛</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--goxt-gray-900)]">
                                GOxT Cargo
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl font-medium text-[var(--goxt-accent)] mb-4">
                            Control total de tu flota y operaciones logísticas
                        </p>
                        <p className="text-lg text-[var(--goxt-gray-600)] mb-8 max-w-2xl mx-auto">
                            Sistema operativo para transporte terrestre y marítimo. Gestiona
                            flotas, rutas, conductores y toda tu operación en una sola
                            plataforma.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contacto" className="goxt-btn-accent text-lg px-8 py-4">
                                Solicitar Demo Gratuita
                            </Link>
                            <a
                                href="https://cargo.goxt.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="goxt-btn-secondary text-lg px-8 py-4"
                            >
                                Iniciar Sesión
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshot */}
            <section className="py-16 bg-white">
                <div className="goxt-container">
                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 opacity-20 rounded-2xl blur-2xl" />
                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-400 border border-gray-200">
                                        cargo.goxt.io
                                    </div>
                                </div>
                            </div>
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-8xl block mb-4">🚛</span>
                                    <span className="text-gray-400">
                                        Screenshot del Mapa de Tracking
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="goxt-section bg-[var(--goxt-gray-50)]">
                <div className="goxt-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-4">
                            Funcionalidades Principales
                        </h2>
                        <p className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto">
                            Todo lo que necesitas para controlar tu operación logística de
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

            {/* Integration with CRM */}
            <section className="goxt-section bg-white">
                <div className="goxt-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1 bg-[var(--goxt-primary-100)] text-[var(--goxt-primary)] rounded-full text-sm font-medium mb-4">
                                Integración
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-6">
                                Mejor cuando trabajan juntos
                            </h2>
                            <p className="text-lg text-[var(--goxt-gray-600)] mb-6">
                                GOxT Cargo se integra nativamente con GOxT CRM. Las
                                cotizaciones aprobadas se convierten automáticamente en órdenes
                                de transporte.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
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
                                    <span className="text-[var(--goxt-gray-700)]">
                                        Datos sincronizados: clientes, direcciones, rutas
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
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
                                    <span className="text-[var(--goxt-gray-700)]">
                                        Sin doble digitación entre ventas y operaciones
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
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
                                    <span className="text-[var(--goxt-gray-700)]">
                                        Visibilidad completa del cliente al operador
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link href="/productos/crm" className="goxt-btn-primary">
                                    Conocer GOxT CRM →
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 opacity-20 rounded-2xl blur-2xl" />
                            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                                <div className="flex justify-center gap-8 items-center">
                                    <div className="text-center">
                                        <span className="text-6xl block mb-2">🎯</span>
                                        <span className="font-semibold text-[var(--goxt-gray-900)]">
                                            CRM
                                        </span>
                                    </div>
                                    <svg
                                        className="w-8 h-8 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                    <div className="text-center">
                                        <span className="text-6xl block mb-2">🚛</span>
                                        <span className="font-semibold text-[var(--goxt-gray-900)]">
                                            Cargo
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-center text-[var(--goxt-gray-600)]">
                                        Cotización aprobada → Orden de transporte automática
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="goxt-section bg-[var(--goxt-accent)]">
                <div className="goxt-container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿Listo para tomar control de tu operación?
                    </h2>
                    <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                        Agenda una demo personalizada y descubre cómo GOxT Cargo puede
                        ayudarte a optimizar tu flota.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="goxt-btn-primary text-lg px-8 py-4"
                        >
                            Solicitar Demo
                        </Link>
                        <Link
                            href="/productos/crm"
                            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-colors"
                        >
                            Conocer GOxT CRM →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
