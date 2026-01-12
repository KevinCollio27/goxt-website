import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Precios",
    description:
        "Conoce los planes y precios de GOxT CRM y Cargo. Soluciones flexibles para empresas de todos los tamaños.",
};

export default function PreciosPage() {
    return (
        <div className="pt-24">
            {/* Header */}
            <section className="py-20">
                <div className="goxt-container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--goxt-gray-900)] mb-6">
                        Precios
                    </h1>
                    <p className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto">
                        Planes flexibles que se adaptan al tamaño de tu operación. Contáctanos para una cotización personalizada.
                    </p>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="goxt-section">
                <div className="goxt-container text-center">
                    <div className="max-w-2xl mx-auto">
                        <span className="text-6xl block mb-6">🚧</span>
                        <h2 className="text-2xl font-bold text-[var(--goxt-gray-900)] mb-4">
                            Página en construcción
                        </h2>
                        <p className="text-[var(--goxt-gray-600)] mb-8">
                            Estamos trabajando en nuestra página de precios. Mientras tanto,
                            contáctanos directamente para obtener una cotización personalizada
                            según tus necesidades.
                        </p>
                        <Link href="/contacto" className="goxt-btn-accent">
                            Solicitar Cotización
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
