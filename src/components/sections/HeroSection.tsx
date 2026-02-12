"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, DollarSign, Clock, HeadphonesIcon, Send, Loader2, Bot, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import InteractiveParticles from "@/components/ui/InteractiveParticles";
import { useState } from "react";

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
        value: "+USD 2M",
        label: "Gestionados",
        description: "en cotizaciones",
        Icon: DollarSign,
    },
    {
        value: "30%",
        label: "Ahorro",
        description: "en tiempo de gestión",
        Icon: Clock,
    },
    {
        value: "AI",
        label: "Tecnología",
        description: "Potenciada por IA",
        Icon: Bot,
    },
];

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function HeroSection() {
    const [input, setInput] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const currentInput = input;
        setInput("");

        // Abrir y enviar en el widget de CRM
        const launcher = document.querySelector('.goxt-widget-launcher') as HTMLButtonElement;
        const container = document.querySelector('.goxt-widget-container');

        if (launcher && container) {
            if (!container.classList.contains('open')) {
                launcher.click();
            }

            setTimeout(() => {
                const widgetInput = document.getElementById('goxt-input') as HTMLInputElement;
                const sendBtn = document.getElementById('goxt-send-btn') as HTMLButtonElement;
                if (widgetInput && sendBtn) {
                    widgetInput.value = currentInput;
                    widgetInput.dispatchEvent(new Event('input', { bubbles: true }));
                    sendBtn.click();
                }
            }, 100);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e as any);
        }
    };

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center pt-20 pb-16"
            style={{
                background: 'var(--goxt-gradient-hero)'
            }}
        >
            <InteractiveParticles />
            <div className="goxt-container relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 relative group cursor-default"
                        style={{
                            background: 'rgba(224, 242, 254, 0.5)',
                            border: '1px solid rgba(14, 165, 233, 0.2)',
                            boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.1)'
                        }}
                    >
                        <span
                            className="w-2.5 h-2.5 rounded-full animate-pulse"
                            style={{ background: 'var(--goxt-cream)' }}
                        />
                        <span
                            className="text-sm font-bold tracking-wide uppercase"
                            style={{ color: '#0059B3' }}
                        >
                            TODA LA LOGÍSTICA EN UN SOLO LUGAR
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        <span
                            className="goxt-gradient-accent-text font-bold"
                        >
                            Tecnología
                        </span>
                        <br />
                        <span
                            className="font-extrabold"
                            style={{ color: 'var(--goxt-midnight)' }}
                        >
                            al servicio de tu negocio.
                        </span>
                    </motion.h1>

                    {/* AI Chat Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-16 max-w-3xl mx-auto relative group"
                    >
                        {/* Glow Effect behind */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-gradient-to-b from-[#E0F7FA] to-[#E3E8EF] rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 backdrop-blur-sm">
                            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">¿En qué puedo ayudarte?</p>
                            <form
                                onSubmit={handleSubmit}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Pregunta a GOxT lo que quieras..."
                                    className="w-full pl-6 pr-32 py-4 bg-white rounded-xl shadow-inner border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--goxt-cream)] focus:border-transparent text-slate-700 placeholder-slate-400 text-lg transition-all"
                                />
                                <div className="absolute right-2 top-2 bottom-2">
                                    <button
                                        type="submit"
                                        className="h-full px-6 bg-slate-400 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
                    >
                        <Link
                            href="https://crm.goxt.io"
                            className="goxt-btn-primary text-lg px-8 py-4 bg-[#011627] hover:bg-[#022030] shadow-xl shadow-blue-900/20 text-white"
                        >
                            Empieza gratis
                        </Link>
                        <Link
                            href="/contacto"
                            className="goxt-btn-secondary text-lg px-8 py-4 bg-white border-slate-200 hover:bg-slate-50"
                        >
                            Solicitar Demo
                        </Link>
                    </motion.div>
                </div>

                {/* Stats Cards - Updated Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 py-10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-slate-200/70 backdrop-blur-sm"
                        >
                            {/* Fondo sutil de patrón */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,178,133,0.03)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon Square */}
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
                                style={{
                                    background: 'linear-gradient(135deg, #011627 0%, #1f2933 100%)',
                                    color: 'white'
                                }}
                            >
                                <stat.Icon className="w-7 h-7" strokeWidth={1.5} />
                            </div>

                            {/* Value */}
                            <div
                                className="text-4xl font-extrabold mb-3 tracking-tight relative z-10"
                                style={{ color: 'var(--goxt-primary)' }}
                            >
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div className="flex flex-col gap-1 relative z-10">
                                <div
                                    className="font-bold text-sm uppercase tracking-wider"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {stat.label}
                                </div>
                                <div
                                    className="text-xs font-semibold uppercase tracking-wider text-slate-500"
                                >
                                    {stat.description.toUpperCase()}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
