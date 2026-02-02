"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, DollarSign, Clock, HeadphonesIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import UnderlinedText from "@/components/ui/UnderlinedText";
import InteractiveParticles from "@/components/ui/InteractiveParticles";

interface Stat {
    value: string;
    label: string;
    description: string;
    Icon: LucideIcon;
}

const stats: Stat[] = [
    {
        value: "+500",
        label: "Empresas",
        description: "confían en GOxT",
        Icon: Building2,
    },
    {
        value: "$2M+",
        label: "Gestionados",
        description: "en cotizaciones",
        Icon: DollarSign,
    },
    {
        value: "30%",
        label: "Ahorro",
        description: "en tiempo de cotización",
        Icon: Clock,
    },
    {
        value: "24/7",
        label: "Soporte",
        description: "disponible siempre",
        Icon: HeadphonesIcon,
    },
];

export function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex flex-col justify-center pt-20 pb-16"
            style={{
                background: 'var(--goxt-gradient-hero)'
            }}
        >
            <InteractiveParticles />
            <div className="goxt-container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
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
                            La suite para transporte y logística
                        </span>
                    </motion.div>

                    {/* Headline con animaciones*/}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        <span
                            className="font-bold"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Más clientes.
                        </span>{" "}
                        <span
                            className="goxt-gradient-accent-text font-bold"
                        >
                            Mejor control.
                        </span>
                        <br />
                        <span
                            className="font-bold"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Menos problemas.
                        </span>
                    </motion.h1>

                    {/* AI Chat Teaser - Clickable */}
                    <Link href="/chat-ia">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-8 max-w-2xl mx-auto cursor-pointer group"
                        >
                            <div
                                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="flex items-start gap-4">
                                    {/* AI Avatar */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[var(--goxt-primary)] to-[var(--goxt-secondary)] rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                            />
                                        </svg>
                                    </div>

                                    {/* Message */}
                                    <div className="flex-1 text-left">
                                        <div className="text-sm font-semibold text-[var(--goxt-primary)] mb-1">
                                            GOXY - Asistente Virtual
                                        </div>
                                        <p className="text-base text-gray-700 leading-relaxed">
                                            ¡Hola! Soy GOXY, el asistente virtual de GOxT. ¿En qué puedo ayudarte hoy?
                                            <span className="text-[var(--goxt-primary)] font-medium ml-2 group-hover:underline">
                                                Haz clic para chatear →
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Link
                            href="/contacto"
                            className="goxt-btn-primary text-lg px-8 py-4"
                        >
                            Solicitar Demo
                        </Link>
                        <Link
                            href="/productos"
                            className="goxt-btn-secondary text-lg px-8 py-4"
                        >
                            Explorar Productos
                        </Link>
                    </motion.div>
                </div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            style={{
                                boxShadow: 'var(--goxt-shadow-md)',
                            }}
                        >
                            {/* Icon con fondo Midnight */}
                            <div
                                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                                style={{
                                    background: 'var(--goxt-midnight)',
                                    color: 'var(--goxt-cream)'
                                }}
                            >
                                <stat.Icon className="w-7 h-7" strokeWidth={1.5} />
                            </div>

                            {/* Value */}
                            <div
                                className="text-3xl md:text-4xl font-bold mb-2"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div
                                className="font-semibold text-base mb-1"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {stat.label}
                            </div>

                            {/* Description */}
                            <div
                                className="text-sm"
                                style={{ color: 'var(--text-muted)' }}
                            >
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
