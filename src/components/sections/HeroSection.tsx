"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, DollarSign, Clock, HeadphonesIcon, Send, Loader2, Bot, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import UnderlinedText from "@/components/ui/UnderlinedText";
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

    // Mensajes locales estáticos para el "teaser"
    const teaserMessages: Message[] = [
        {
            role: "assistant",
            content: "¡Hola! Soy el asistente virtual de GOxT. ¿En qué puedo ayudarte hoy?",
        },
    ];



    // No necesitamos isLoading ni shouldScrollToBottom del contexto para este teaser

    // Eliminamos efectos de scroll ya que es estático


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

                    {/* AI Chat Container - Funcional */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8 max-w-2xl mx-auto"
                    >
                        <div className="mb-4 px-4 w-full">
                            {teaserMessages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex gap-3 items-end ${message.role === "user" ? "flex-row-reverse" : "flex-row"
                                        }`}
                                >
                                    {/* Avatar */}
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.role === "user"
                                            ? "bg-gray-200"
                                            : "bg-[var(--goxt-primary)]"
                                            }`}
                                    >
                                        {message.role === "user" ? (
                                            <User className="w-4 h-4 text-gray-700" />
                                        ) : (
                                            <div className="w-5 h-5 relative flex items-center justify-center">
                                                <Image
                                                    src="/assets/logo_central.png"
                                                    alt="AI"
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-cover brightness-0 invert"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Message Bubble */}
                                    <div
                                        className={`max-w-[75%] p-3 rounded-2xl text-sm shadow-sm ${message.role === "user"
                                            ? "bg-[var(--goxt-primary)] text-white rounded-tr-none"
                                            : "bg-white text-gray-800 rounded-tl-none"
                                            }`}
                                    >
                                        <p className="whitespace-pre-wrap leading-relaxed">
                                            {message.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div
                            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                        >
                            {/* Input */}
                            <form
                                onSubmit={handleSubmit}
                                className="bg-gray-50 px-4 py-3"
                            >
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Escribe tu mensaje aquí..."
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent bg-white text-sm"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim()}
                                        className="px-6 py-2 bg-[var(--goxt-primary)] text-white rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2 text-sm"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span className="hidden sm:inline">Enviar</span>
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
