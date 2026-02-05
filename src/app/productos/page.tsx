import { Metadata } from "next";
import ProductCarousel from "@/components/sections/ProductCarousel";

export const metadata: Metadata = {
    title: "Productos | GOxT",
    description:
        "Descubre GOxT CRM y Cargo. Soluciones tecnológicas integrales para la gestión comercial y logística de tu empresa.",
};

export default function ProductosPage() {
    return (
        <div className="pt-24 min-h-screen relative overflow-hidden">
            {/* <FloatingBubbles /> */}

            {/* Header Section */}
            <section className="py-20 relative z-10">
                <div className="goxt-container text-center">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: 'var(--goxt-surface-card)',
                            border: '1px solid var(--goxt-accent)',
                        }}
                    >
                        <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: 'var(--goxt-accent)' }}
                        />
                        <span
                            className="text-sm font-medium"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            Soluciones Tecnológicas
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        <span
                            className="font-bold"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Potencia tu
                        </span>{" "}
                        <span className="goxt-gradient-accent-text font-bold">
                            Crecimiento
                        </span>
                    </h1>
                    <p className="text-xl text-[var(--goxt-gray-600)] max-w-3xl mx-auto leading-relaxed">
                        Herramientas diseñadas para la realidad de tu industria.
                        Desde la primera cotización hasta la entrega final, GOxT está contigo.
                    </p>
                </div>
            </section>

            {/* Carousel Interactive Section */}
            <section className="pb-20 relative z-10">
                <ProductCarousel />
            </section>
        </div>
    );
}