"use client";

import { motion } from "framer-motion";
import { Zap, Link2, BarChart3, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
    Icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    bgColor: string;
}

const benefits: Benefit[] = [
    {
        Icon: Zap,
        title: "Cotizaciones en Minutos",
        description:
            "Configura tus productos una vez y genera cotizaciones profesionales en segundos. Responde antes que la competencia.",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
    },
    {
        Icon: Link2,
        title: "Conectado con tu Operación",
        description:
            "Integración nativa entre ventas y operaciones. De la cotización al viaje, sin doble digitación.",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
    },
    {
        Icon: BarChart3,
        title: "Pipeline Visual",
        description:
            "Tablero Kanban para visualizar todo tu embudo de ventas. Nunca pierdas de vista una oportunidad.",
        color: "text-green-600",
        bgColor: "bg-green-100",
    },
    {
        Icon: Settings2,
        title: "100% Personalizable",
        description:
            "Crea productos con los campos exactos que necesitas. Sin desarrolladores, sin esperas, sin código.",
        color: "text-purple-600",
        bgColor: "bg-purple-100",
    },
];

export function BenefitsSection() {
    return (
        <section className="goxt-section">
            <div className="goxt-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        ¿Por qué elegir{" "}
                        <span className="goxt-gradient-accent-text">GOxT</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto"
                    >
                        Diseñado específicamente para empresas de transporte y logística.
                        Resolvemos los problemas que otros CRM no entienden.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="goxt-card text-center group"
                        >
                            <div
                                className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                            >
                                <benefit.Icon
                                    className={`w-8 h-8 ${benefit.color}`}
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-[var(--goxt-gray-600)]">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
