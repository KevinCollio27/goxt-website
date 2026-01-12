import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nosotros",
    description:
        "Conoce la historia y misión de GOxT. Transformando la industria del transporte y logística con tecnología.",
};

export default function NosotrosPage() {
    return (
        <div className="pt-24">
            {/* Header */}
            <section className="py-20">
                <div className="goxt-container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--goxt-gray-900)] mb-6">
                        Sobre GOxT
                    </h1>
                    <p className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto">
                        Transformando la industria del transporte y logística con tecnología.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="goxt-section">
                <div className="goxt-container">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg">
                            <h2 className="text-2xl font-bold text-[var(--goxt-gray-900)] mb-4">
                                Nuestra Misión
                            </h2>
                            <p className="text-[var(--goxt-gray-600)] mb-8">
                                En GOxT creemos que las empresas de transporte y logística
                                merecen herramientas tecnológicas diseñadas específicamente para
                                sus necesidades. No adaptamos soluciones genéricas; creamos
                                software que entiende tu operación.
                            </p>

                            <h2 className="text-2xl font-bold text-[var(--goxt-gray-900)] mb-4">
                                Lo que nos diferencia
                            </h2>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-[var(--goxt-primary)] flex-shrink-0 mt-0.5"
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
                                    <span className="text-[var(--goxt-gray-600)]">
                                        <strong className="text-[var(--goxt-gray-900)]">
                                            Especialización:
                                        </strong>{" "}
                                        Conocemos la industria del transporte porque trabajamos con
                                        ella todos los días.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-[var(--goxt-primary)] flex-shrink-0 mt-0.5"
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
                                    <span className="text-[var(--goxt-gray-600)]">
                                        <strong className="text-[var(--goxt-gray-900)]">
                                            Integración:
                                        </strong>{" "}
                                        Nuestros productos trabajan juntos, eliminando la
                                        fragmentación de datos.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-[var(--goxt-primary)] flex-shrink-0 mt-0.5"
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
                                    <span className="text-[var(--goxt-gray-600)]">
                                        <strong className="text-[var(--goxt-gray-900)]">
                                            Flexibilidad:
                                        </strong>{" "}
                                        Productos 100% configurables que se adaptan a tu forma de
                                        trabajar.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-[var(--goxt-primary)] flex-shrink-0 mt-0.5"
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
                                    <span className="text-[var(--goxt-gray-600)]">
                                        <strong className="text-[var(--goxt-gray-900)]">
                                            Soporte local:
                                        </strong>{" "}
                                        Equipo en Chile y Latinoamérica, en tu zona horaria y en tu
                                        idioma.
                                    </span>
                                </li>
                            </ul>

                            <div className="bg-[var(--goxt-gray-50)] rounded-xl p-8 text-center">
                                <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-4">
                                    ¿Quieres conocer más?
                                </h3>
                                <p className="text-[var(--goxt-gray-600)] mb-6">
                                    Agenda una reunión y conversemos sobre cómo podemos ayudar a
                                    tu empresa.
                                </p>
                                <Link href="/contacto" className="goxt-btn-accent">
                                    Contáctanos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
