import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Productos",
    description:
        "Conoce nuestros productos: GOxT CRM para gestión comercial y GOxT Cargo para control de flotas y operaciones logísticas.",
};

const products = [
    {
        id: "crm",
        name: "CRM",
        tagline: "De leads a clientes: gestiona todo el ciclo de ventas",
        description:
            "El CRM que habla el idioma de tu operación. Cotizaciones en minutos, seguimiento visual de oportunidades e integración con tu sistema operativo.",
        href: "/productos/crm",
        icon: "🎯",
        gradient: "from-blue-500 to-blue-700",
    },
    {
        id: "cargo",
        name: "CARGO",
        tagline: "Control total de tu flota y operaciones logísticas",
        description:
            "Sistema operativo para transporte terrestre y marítimo. Gestiona flotas, rutas, conductores y toda tu operación en una sola plataforma.",
        href: "/productos/cargo",
        icon: "🚛",
        gradient: "from-orange-500 to-orange-700",
    },
];

export default function ProductosPage() {
    return (
        <div className="pt-24">
            {/* Header */}
            <section className="py-20">
                <div className="goxt-container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--goxt-gray-900)] mb-6" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                        Nuestros <span className="goxt-gradient-accent-text">Productos</span>
                    </h1>
                    <p className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto">
                        Dos productos potentes diseñados para empresas de transporte y
                        logística. Usa cada uno por separado o intégralos para una solución
                        completa.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="goxt-section">
                <div className="goxt-container">
                    <div className="grid md:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={product.href}
                                className="group goxt-card hover:shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl">{product.icon}</span>
                                    <div>
                                        <h2 className="text-2xl font-bold text-[var(--goxt-gray-900)] group-hover:text-[var(--goxt-primary)] transition-colors" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                            GOXT: <span className="goxt-gradient-accent-text">{product.name}</span>
                                        </h2>
                                        <p className="text-[var(--goxt-primary)] font-medium">
                                            {product.tagline}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[var(--goxt-gray-600)] mb-6">
                                    {product.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-[var(--goxt-primary)] font-semibold group-hover:gap-4 transition-all">
                                    Conocer más
                                    <svg
                                        className="w-5 h-5"
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
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
