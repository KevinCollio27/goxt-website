"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, DollarSign, Clock, HeadphonesIcon, Send, Loader2, Bot, User, ArrowUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import InteractiveParticles from "@/components/ui/InteractiveParticles";
import { useState, useRef, useEffect } from "react";

interface Stat {
    value: string;
    label: string;
    description: string;
    Icon: any;
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
        Icon: () => (
            <div className="relative w-7 h-7">
                <Image
                    src="/assets/logo_central.png"
                    alt="AI Icon"
                    fill
                    className="object-contain"
                />
            </div>
        ),
    },
];

export function HeroSection() {
    const [input, setInput] = useState("");

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);

        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            const scrollHeight = textareaRef.current.scrollHeight;
            const maxHeight = 140;
            const newHeight = Math.min(scrollHeight, maxHeight);
            textareaRef.current.style.height = `${newHeight}px`;

            textareaRef.current.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const currentInput = input;
        setInput("");

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
                        className="mb-16 max-w-3xl mx-auto w-full"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 tracking-tight text-center" style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-midnight)' }}>
                            <span className="relative inline-block">
                                ¿En qué puedo ayudarte?
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50"
                                />
                            </span>
                        </h3>

                        <div className="relative group">
                            {/* Subtle Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-[32px] blur-lg opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                            <form
                                onSubmit={handleSubmit}
                                className="relative"
                            >
                                <textarea
                                    ref={textareaRef}
                                    value={input}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Cuéntame, ¿qué desafío tiene tu negocio?"
                                    rows={1}
                                    className="w-full px-8 py-6 bg-[#F8FAFC]/80 backdrop-blur-xl rounded-[32px] border border-slate-200/60 focus:outline-none focus:ring-4 focus:ring-slate-200/30 focus:border-slate-300 text-slate-700 placeholder-slate-400 text-base md:text-xl transition-all shadow-sm min-h-[80px] max-h-[140px] resize-none overflow-hidden leading-relaxed pr-16"
                                />
                                <div className="absolute right-3 bottom-6">
                                    <button
                                        type="submit"
                                        disabled={!input.trim()}
                                        className={`p-3 rounded-full transition-all flex items-center justify-center ${input.trim()
                                            ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
                                            : "bg-slate-100 text-slate-400"
                                            }`}
                                    >
                                        <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
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
