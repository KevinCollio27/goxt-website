"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, DollarSign, Clock, HeadphonesIcon, Send, Loader2, Bot, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import InteractiveParticles from "@/components/ui/InteractiveParticles";
import { useState } from "react";
import { useChat } from "@/context/ChatContext";

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

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function HeroSection() {
    // Usar contexto global solo para enviar y abrir
    const { sendMessage, setChatOpen } = useChat();
    const [input, setInput] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // 1. Guardar input y limpiar
        const currentInput = input;
        setInput("");

        // 2. Abrir el chat global (modal)
        setChatOpen(true);

        // 3. Enviar mensaje a través del contexto
        // Esto añadirá el mensaje al store compartido y disparará la API
        await sendMessage(currentInput);
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
                            background: 'rgba(224, 242, 254, 0.5)', // light cyan/blue bg
                            border: '1px solid rgba(14, 165, 233, 0.2)', // light border
                            boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.1)'
                        }}
                    >
                        <span
                            className="w-2.5 h-2.5 rounded-full animate-pulse"
                            style={{ background: 'var(--goxt-cream)' }} // Cyan/Blue dot
                        />
                        <span
                            className="text-sm font-bold tracking-wide uppercase"
                            style={{ color: '#0059B3' }} // Darker blue text
                        >
                            LA SUITE PARA TRANSPORTE Y LOGÍSTICA
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
                            className="font-bold"
                            style={{ color: 'var(--goxt-midnight)' }}
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
                            className="font-extrabold"
                            style={{ color: 'var(--goxt-midnight)' }}
                        >
                            Menos problemas.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Potencia tu empresa de tecnología con herramientas de IA diseñadas para dominar el mercado logístico B2B y terrestre.
                    </motion.p>

                    {/* AI Chat Widget - Updated Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-16 max-w-3xl mx-auto relative group"
                    >
                        {/* Glow Effect behind */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-gradient-to-b from-[#E0F7FA] to-[#E3E8EF] rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#011627] flex items-center justify-center shadow-lg">
                                    <Bot className="w-5 h-5 text-[var(--goxt-cream)]" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800 text-lg">Asistente Virtual GOxT</div>
                                    <div className="text-slate-500 text-sm">¿En qué puedo ayudarte hoy?</div>
                                </div>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Escribe tu consulta sobre tu flota o ventas..."
                                    className="w-full pl-6 pr-32 py-4 bg-white rounded-xl shadow-inner border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--goxt-cream)] focus:border-transparent text-slate-700 placeholder-slate-400 text-lg transition-all"
                                />
                                <div className="absolute right-2 top-2 bottom-2">
                                    <button
                                        type="submit"
                                        className="h-full px-6 bg-slate-400 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                                    >
                                        Enviar <Send className="w-4 h-4" />
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
                            href="/contacto"
                            className="goxt-btn-primary text-lg px-8 py-4 bg-[#011627] hover:bg-[#022030] shadow-xl shadow-blue-900/20 text-white"
                        >
                            Solicitar Demo
                        </Link>
                        <Link
                            href="/productos"
                            className="goxt-btn-secondary text-lg px-8 py-4 bg-white border-slate-200 hover:bg-slate-50"
                        >
                            Explorar Productos
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
                            className="bg-white rounded-2xl p-8 py-10 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-slate-100"
                        >
                            {/* Icon Square */}
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                                style={{
                                    background: 'var(--goxt-midnight)',
                                    color: 'white'
                                }}
                            >
                                <stat.Icon className="w-7 h-7" strokeWidth={1.5} />
                            </div>

                            {/* Value */}
                            <div
                                className="text-4xl font-extrabold mb-3 tracking-tight"
                                style={{ color: 'var(--goxt-midnight)' }}
                            >
                                {stat.value}
                            </div>

                            {/* Label - Uppercase small */}
                            <div className="flex flex-col gap-1">
                                <div
                                    className="font-bold text-sm uppercase tracking-wider"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {stat.label}
                                </div>
                                <div
                                    className="text-xs font-semibold uppercase tracking-wider text-slate-400"
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
