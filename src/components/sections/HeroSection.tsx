"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, DollarSign, Clock, HeadphonesIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
    value: string;
    label: string;
    description: string;
    Icon: LucideIcon;
    color: string;
}

const stats: Stat[] = [
    {
        value: "+500",
        label: "Empresas",
        description: "confían en GOxT",
        Icon: Building2,
        color: "text-blue-500",
    },
    {
        value: "$2M+",
        label: "Gestionados",
        description: "en cotizaciones",
        Icon: DollarSign,
        color: "text-green-500",
    },
    {
        value: "30%",
        label: "Ahorro",
        description: "en tiempo de cotización",
        Icon: Clock,
        color: "text-orange-500",
    },
    {
        value: "24/7",
        label: "Soporte",
        description: "disponible siempre",
        Icon: HeadphonesIcon,
        color: "text-purple-500",
    },
];

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16">
            <div className="goxt-container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 mb-6"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-600">
                            La suite para transporte y logística
                        </span>
                    </motion.div>

                    {/* Headline - Más grande estilo Odoo */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        <span className="text-[var(--goxt-primary)] font-bold">Más clientes.</span>{" "}
                        <span className="goxt-gradient-accent-text font-bold">Mejor control.</span>
                        <br />
                        <span className="text-[var(--goxt-primary)] font-bold">Menos problemas.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-[var(--goxt-gray-600)] mb-8 max-w-2xl mx-auto"
                    >
                        Todo lo que necesitas para gestionar clientes, cotizaciones, flotas
                        y operaciones en una sola plataforma diseñada para empresas de
                        transporte.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Link href="/contacto" className="goxt-btn-primary text-lg px-8 py-4">
                            Solicitar Demo
                        </Link>
                        <Link href="/productos" className="goxt-btn-secondary text-lg px-8 py-4">
                            Explorar Productos
                        </Link>
                    </motion.div>
                </div>

                {/* Stats integradas en el Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="text-center"
                        >
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-3 ${stat.color}`}>
                                <stat.Icon className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-[var(--goxt-gray-900)] mb-1">
                                {stat.value}
                            </div>
                            <div className="font-semibold text-[var(--goxt-gray-700)]">
                                {stat.label}
                            </div>
                            <div className="text-sm text-[var(--goxt-gray-500)]">
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
