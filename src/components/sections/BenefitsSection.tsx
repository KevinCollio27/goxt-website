"use client";

import { motion } from "framer-motion";
import { Zap, Link2, BarChart3, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
    Icon: LucideIcon;
    title: string;
    accent: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        Icon: Zap,
        title: "Cotizaciones en ",
        accent: "Minutos",
        description:
            "Configura tus productos una vez y genera cotizaciones profesionales en segundos. Responde antes que la competencia.",
    },
    {
        Icon: Link2,
        title: "Conectado a tu ",
        accent: "Operación",
        description:
            "Integración nativa entre ventas y operaciones. De la cotización al viaje, sin doble digitación.",
    },
    {
        Icon: BarChart3,
        title: "Inteligente ",
        accent: "Pipeline Visual",
        description:
            "Tablero Kanban para visualizar todo tu embudo de ventas. Nunca pierdas de vista una oportunidad.",
    },
    {
        Icon: Settings2,
        title: "100% ",
        accent: "Personalizable",
        description:
            "Crea productos con los campos exactos que necesitas. Sin desarrolladores, sin esperas, sin código.",
    },
];

export function BenefitsSection() {
    return (
        <section className="goxt-section bg-white">
            <div className="goxt-container">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{
                            fontFamily: "var(--font-display), serif",
                            color: 'var(--goxt-primary)'
                        }}
                    >
                        ¿Por qué elegir a {" "}
                        <span
                            className="font-bold text-5xl md:text-6xl"
                            style={{
                                fontFamily: "var(--font-handwritten), cursive",
                                color: 'var(--goxt-accent)'
                            }}
                        >
                            GOxT
                        </span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Diseñado específicamente para empresas de transporte y logística.
                        Resolvemos los problemas que otros CRM no entienden.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.accent}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative bg-white rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-50"
                            style={{
                                boxShadow: 'var(--goxt-shadow-lg)',
                            }}
                        >
                            {/* Icon Container con estilo Midnight/Cream */}
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:rotate-12"
                                style={{
                                    background: 'var(--goxt-midnight)',
                                    color: 'var(--goxt-cream)',
                                    boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2)'
                                }}
                            >
                                <benefit.Icon
                                    className="w-7 h-7"
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Title con parte handwritten */}
                            <h3
                                className="text-xl font-bold mb-4 leading-tight"
                                style={{ color: 'var(--goxt-primary)' }}
                            >
                                {benefit.title}
                                <span
                                    className="block text-2xl"
                                    style={{
                                        fontFamily: "var(--font-handwritten), cursive",
                                        color: 'var(--goxt-accent)',
                                        marginTop: '0.2rem'
                                    }}
                                >
                                    {benefit.accent}
                                </span>
                            </h3>

                            {/* Description */}
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {benefit.description}
                            </p>

                            {/* Decorative element - sutil línea Cream al hover */}
                            <div
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full opacity-0 transition-opacity duration-300"
                                style={{ background: 'var(--goxt-accent)' }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
