import { Metadata } from "next";
import FloatingBubbles from "@/components/ui/FloatingBubbles";
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
                    <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-500 text-sm font-semibold mb-6 tracking-wide uppercase">
                        Soluciones Tecnológicas
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-[var(--goxt-gray-900)] mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                        Potencia tu <span className="goxt-gradient-accent-text">Crecimiento</span>
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
