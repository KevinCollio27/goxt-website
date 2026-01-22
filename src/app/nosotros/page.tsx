import { Metadata } from "next";
import Link from "next/link";
import { Target, Users, Zap, Globe, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Nosotros",
    description:
        "Conoce nuestra misión, valores y lo que nos hace diferentes. GOxT desarrolla soluciones tecnológicas especializadas para transporte y logística en Latinoamérica.",
};

const valores = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "Enfoque Especializado",
        description: "Creamos tecnología específica para transporte, no adaptamos soluciones genéricas.",
        color: "text-[var(--goxt-primary)]",
        bgColor: "bg-blue-50",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Innovación Constante",
        description: "Evolucionamos con la industria, incorporando las últimas tecnologías.",
        color: "text-[var(--goxt-accent)]",
        bgColor: "bg-orange-50",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Soporte Local",
        description: "Equipo en Latinoamérica que habla tu idioma y entiende tu contexto.",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Visión Global",
        description: "Tecnología que conecta operaciones locales con estándares internacionales.",
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Confianza y Seguridad",
        description: "Tus datos están protegidos con los más altos estándares de seguridad.",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
];

const diferencias = [
    {
        titulo: "Especialización Profunda",
        descripcion: "Nuestro equipo vive y respira la industria del transporte. Entendemos tus desafíos específicos porque trabajamos codo a codo con empresas como la tuya.",
        icon: "🎯",
    },
    {
        titulo: "Integración Total",
        descripcion: "CRM, Cargo y todos nuestros módulos trabajan en perfecta sincronía. Eliminamos la fragmentación de datos para una visión unificada de tu operación.",
        icon: "🔗",
    },
    {
        titulo: "Flexibilidad Absoluta",
        descripcion: "Productos 100% configurables que se adaptan a tu flujo de trabajo, no al revés. Escalables desde una flota pequeña hasta grandes corporaciones.",
        icon: "⚙️",
    },
    {
        titulo: "Soporte en tu Idioma",
        descripcion: "Equipo local en Chile y Latinoamérica disponible en tu zona horaria. Entendemos las particularidades regulatorias y operativas de la región.",
        icon: "🌎",
    },
];

export default function NosotrosPage() {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-20">
                <div className="goxt-container text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-[var(--goxt-primary)] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span>Desde 2024</span>
                        <span className="w-1 h-1 bg-[var(--goxt-primary)] rounded-full"></span>
                        <span>Hecho en Latinoamérica</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--goxt-gray-900)] mb-6" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                        Transformamos la <span className="goxt-gradient-accent-text">logística</span> con tecnología
                    </h1>
                    <p className="text-xl text-[var(--goxt-gray-600)] max-w-3xl mx-auto mb-8">
                        En GOxT no solo creamos software; construimos el ecosistema digital que
                        impulsa la industria del transporte hacia el futuro.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="goxt-btn-accent inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <span>Hablar con un especialista</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/productos"
                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[var(--goxt-gray-900)] border border-gray-300 px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                        >
                            <span>Ver productos</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Misión Section */}
            <section className="goxt-section">
                <div className="goxt-container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--goxt-primary)] uppercase tracking-wider mb-4">
                                <div className="w-2 h-2 bg-[var(--goxt-primary)] rounded-full"></div>
                                Nuestra razón de ser
                            </div>
                            <h2 className="text-4xl font-bold text-[var(--goxt-gray-900)] mb-6">
                                Más que software, una <span className="text-[var(--goxt-primary)]">solución integral</span>
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg text-[var(--goxt-gray-600)]">
                                    En GOxT creemos que las empresas de transporte y logística merecen
                                    herramientas tecnológicas diseñadas específicamente para sus necesidades únicas.
                                </p>
                                <p className="text-lg text-[var(--goxt-gray-600)]">
                                    No adaptamos soluciones genéricas; creamos desde cero software que
                                    <strong className="text-[var(--goxt-gray-900)]"> entiende profundamente tu operación</strong>,
                                    optimizando cada proceso y desbloqueando nuevo potencial de crecimiento.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[var(--goxt-accent)] to-blue-800 rounded-2xl p-8 text-white">
                                <div className="mb-6">
                                    <Target className="w-12 h-12 mb-4" />
                                    <h3 className="text-2xl font-bold mb-3">Nuestra Misión</h3>
                                    <p className="text-blue-100">
                                        Democratizar el acceso a tecnología de punta para empresas de transporte
                                        de todos los tamaños en Latinoamérica, eliminando barreras y creando
                                        oportunidades de crecimiento.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Nuestra Visión</h3>
                                    <p className="text-blue-100">
                                        Ser el ecosistema tecnológico líder que define el estándar de excelencia
                                        operativa en la industria logística de habla hispana.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[var(--goxt-accent)] to-orange-400 rounded-2xl -z-10 opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferencias Section */}
            <section className="goxt-section bg-gray-50">
                <div className="goxt-container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--goxt-primary)] uppercase tracking-wider mb-4">
                            <div className="w-2 h-2 bg-[var(--goxt-primary)] rounded-full"></div>
                            Por qué elegirnos
                        </div>
                        <h2 className="text-4xl font-bold text-[var(--goxt-gray-900)] mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            Lo que nos hace <span className="text-[var(--goxt-primary)]">diferentes</span>
                        </h2>
                        <p className="text-lg text-[var(--goxt-gray-600)]">
                            Combinamos experiencia de la industria con innovación tecnológica para ofrecer soluciones únicas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {diferencias.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[var(--goxt-primary)] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-3" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                            {item.titulo}
                                        </h3>
                                        <p className="text-[var(--goxt-gray-600)]">
                                            {item.descripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valores Section */}
            <section className="goxt-section">
                <div className="goxt-container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--goxt-accent)] uppercase tracking-wider mb-4">
                            <div className="w-2 h-2 bg-[var(--goxt-accent)] rounded-full"></div>
                            Nuestros valores
                        </div>
                        <h2 className="text-4xl font-bold text-[var(--goxt-gray-900)] mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            Pilares de nuestra <span className="text-[var(--goxt-accent)]">cultura</span>
                        </h2>
                        <p className="text-lg text-[var(--goxt-gray-600)]">
                            Lo que nos guía en cada decisión y en cada línea de código que escribimos.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {valores.map((valor, index) => (
                            <div
                                key={index}
                                // Ancho fijo de 280px (ajusta según necesites)
                                className={`${valor.bgColor} rounded-xl p-7 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col min-h-[240px] w-full sm:w-[280px] justify-between`}
                            >
                                <div>
                                    <div className={`${valor.color} mb-5 flex justify-center`}>
                                        <div className="w-9 h-9">
                                            {valor.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-[var(--goxt-gray-900)] mb-3 text-lg" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                        {valor.title}
                                    </h3>
                                </div>
                                <p className="text-[var(--goxt-gray-600)] leading-relaxed text-pretty text-sm">
                                    {valor.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="goxt-section">
                <div className="goxt-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-[var(--goxt-accent)] to-blue-800 rounded-2xl p-12 text-white text-center relative overflow-hidden">
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                    ¿Listo para transformar tu operación logística?
                                </h2>
                                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                    Únete a las empresas que ya optimizaron sus procesos con GOxT.
                                    Agenda una demostración personalizada y descubre cómo podemos ayudarte.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contacto"
                                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[var(--goxt-primary)] px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                                    >
                                        <span>Agendar demostración</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/productos"
                                        className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                                    >
                                        <span>Ver todos los productos</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                                <p className="text-blue-200 text-sm mt-6">
                                    Respuesta en menos de 24 horas • Soporte en español • Sin compromisos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}