"use client";

import {
    Calendar,
    ArrowRight,
    Users,
    Shield,
    Globe,
    Zap,
    MessageSquare,
    Target,
    TrendingUp,
    Activity
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// --- Constantes de Datos ---

const SALES_SOLUTIONS = [
    {
        title: "Estrategia de Crecimiento",
        desc: "No solo te damos software; diseñamos tu embudo de ventas basado en las mejores prácticas de la industria logística global.",
        icon: Target
    },
    {
        title: "Control Operativo Total",
        desc: "Visibilidad 360° de tus márgenes, cotizaciones y rendimiento comercial en tiempo real para decisiones basadas en datos.",
        icon: Shield
    },
    {
        title: "Escalate sin Límites",
        desc: "Infraestructura robusta que se adapta al volumen de tu empresa, integrando ventas con operaciones de forma fluida.",
        icon: TrendingUp
    }
];

const METHODOLOGY = [
    {
        step: "01",
        title: "Auditoría de Procesos",
        desc: "Analizamos tu flujo actual para identificar cuellos de botella y fugas de ingresos."
    },
    {
        step: "02",
        title: "Diseño Estratégico",
        desc: "Configuramos el ecosistema GOxT a la medida exacta de tus necesidades comerciales."
    },
    {
        step: "03",
        title: "Implementación y Éxito",
        desc: "Acompañamos a tu equipo en la transición para asegurar una adopción del 100%."
    }
];
// Animaciones

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
} as const;

// --- Componentes de Apoyo ---

const BackgroundDecor = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Fondo Base: Crema Sólido para evitar transparencias con el azul global */}
        <div className="absolute inset-0 bg-[#FDFBF7]" />

        {/* Gradientes Mesh: Tonos Tierra y Oro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,185,150,0.3)_0%,transparent_50%),radial-gradient(circle_at_bottom_right,rgba(201,169,97,0.1)_0%,transparent_50%)]" />

        {/* Orbes de Luz: Usando variables de la clase theme-legacy-crm */}
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] bg-[var(--goxt-accent)] rounded-full blur-[140px] opacity-[0.15]"
        />

        <motion.div
            animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -40, 0],
                y: [0, 60, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[5%] w-[60vw] h-[60vw] bg-[var(--goxt-accent-light)] rounded-full blur-[160px] opacity-[0.12]"
        />

        {/* Patrón de Red Tecnológica */}
        <div className="absolute inset-0 opacity-[0.08]"
            style={{
                backgroundImage: `radial-gradient(var(--goxt-midnight) 0.5px, transparent 0.5px)`,
                backgroundSize: '48px 48px'
            }}
        />

        {/* Escaneo de Datos */}
        <motion.div
            animate={{
                top: ['-10%', '110%'],
                opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--goxt-accent)] to-transparent z-10"
        />

        {/* Textura de Grano */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
);

// --- Componente Principal ---

export default function CRMDemoLanding() {
    return (
        <div className="theme-legacy-crm min-h-screen text-[var(--goxt-midnight)] selection:bg-[var(--goxt-accent)] selection:text-[var(--goxt-midnight)] relative bg-[#FDFBF7]">
            <BackgroundDecor />

            {/* --- Hero Section --- */}
            <section className="relative min-h-[80vh] flex items-center pt-16 pb-12 overflow-hidden">
                <div className="goxt-container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-[var(--goxt-accent)]/20 text-[var(--goxt-midnight)] text-[10px] font-bold uppercase tracking-[0.25em] mb-12"
                        >
                            <Target className="w-3.5 h-3.5 text-[var(--goxt-accent)]" />
                            <span>Consultoría Estratégica Logística</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--goxt-accent)]/40" />
                            <span className="text-[var(--goxt-accent)]">Enterprise Division</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-6xl md:text-[5.5rem] font-black text-[var(--goxt-midnight)] mb-8 leading-[1.02] tracking-tighter"
                            style={{ fontFamily: "var(--font-handwritten), cursive" }}
                        >
                            Deje de Administrar.<br />
                            <span className="goxt-gradient-accent-text pb-2 block">Empiece a Vencer.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-xl text-white mb-14 max-w-2xl mx-auto leading-relaxed font-semibold"
                        >
                            La ventaja tecnológica definitiva para líderes logísticos que buscan escalar operaciones y maximizar márgenes comerciales en un mercado global.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row justify-center gap-6"
                        >
                            <Link
                                href="/contacto"
                                className="px-12 py-6 bg-[var(--goxt-midnight)] text-[var(--goxt-accent)] rounded-full font-black text-[1.3rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-4 group"
                            >
                                <Calendar className="w-6 h-6" /> Agendar Reunión Estratégica
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Dashboard Visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 pointer-events-none"
                >
                    <div className="relative pt-20">
                        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10" />
                        <div className="bg-white/50 backdrop-blur-3xl border border-white rounded-t-[4rem] p-6 shadow-[0_-20px_80px_rgba(0,0,0,0.08)]">
                            <div className="bg-[var(--goxt-midnight)] rounded-t-[3.5rem] p-12 min-h-[550px] border border-[var(--goxt-accent)]/10 relative overflow-hidden group">
                                {/* Scanning Effect */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--goxt-accent)]/40 to-transparent z-20"
                                />

                                <div className="flex justify-between items-center mb-16 px-4">
                                    <div className="flex gap-6">
                                        <div className="w-20 h-20 rounded-3xl bg-[var(--goxt-accent)]/10 flex items-center justify-center border border-[var(--goxt-accent)]/20 shadow-inner">
                                            <Activity className="w-10 h-10 text-[var(--goxt-accent)]" />
                                        </div>
                                        <div className="space-y-4 pt-2">
                                            <div className="w-64 h-5 bg-white/10 rounded-full" />
                                            <div className="w-48 h-3 bg-white/5 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-12">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-80 bg-white/5 rounded-[3rem] border border-white/5 overflow-hidden relative shadow-2xl">
                                            <div className="p-10 space-y-8">
                                                <div className="w-full h-4 bg-white/10 rounded-full" />
                                                <div className="w-3/4 h-24 bg-[var(--goxt-accent)]/5 rounded-3xl border border-[var(--goxt-accent)]/10" />
                                                <div className="space-y-4">
                                                    <div className="w-full h-2.5 bg-white/5 rounded-full" />
                                                    <div className="w-5/6 h-2.5 bg-white/5 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[var(--goxt-accent)]/10 to-transparent" />
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--goxt-accent)_0%,transparent_70%)] opacity-15" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- Expertise Section --- */}
            <section className="py-16 relative z-10">
                <div className="goxt-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-4xl md:text-7xl font-black text-[var(--goxt-midnight)] mb-10 leading-tight tracking-tighter" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                Soluciones Para <br />
                                <span className="goxt-gradient-accent-text pb-2 block">Líderes Globales</span>
                            </h2>
                            <p className="text-xl text-[var(--goxt-midnight)]/60 mb-10 leading-relaxed font-bold">
                                Más que software, entregamos arquitectura comercial de alto rendimiento diseñada exclusivamente para el complejo sector logístico multimodal.
                            </p>
                            <div className="grid gap-6">
                                {SALES_SOLUTIONS.map((sol, i) => (
                                    <div key={i} className="flex gap-6 p-8 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white hover:shadow-2xl hover:-translate-y-1 transition-all group">
                                        <div className="w-16 h-16 bg-[var(--goxt-midnight)] rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                            <sol.icon className="w-8 h-8 text-[var(--goxt-accent)]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black mb-3" style={{ color: "var(--goxt-midnight)", fontFamily: "var(--font-handwritten), cursive" }}>{sol.title}</h3>
                                            <p className="text-[var(--goxt-midnight)]/50 leading-relaxed font-bold">{sol.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-[var(--goxt-midnight)] via-[var(--goxt-midnight-light)] to-black rounded-[5rem] p-16 aspect-square flex flex-col justify-between relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
                                <MessageSquare className="w-32 h-32 text-white/5 absolute -top-8 -right-8" />
                                <div className="space-y-12">
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--goxt-accent)]" />)}
                                    </div>
                                    <h3 className="font-bold text-white leading-[1.1] tracking-tight" style={{ fontFamily: "var(--font-handwritten), cursive", fontSize: '3rem' }}>
                                        "GOxT redefinió nuestra capacidad comercial en tiempo récord."
                                    </h3>
                                </div>
                                <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Users className="w-10 h-10 text-white/20" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-2xl mb-1 tracking-tight">Andrés Martínez</p>
                                        <p className="text-[var(--goxt-accent)] font-black tracking-[0.2em] text-xs uppercase">CEO de Global Trans Log</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Methodology Section --- */}
            <section className="py-16 relative z-10">
                <div className="goxt-container relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-[5rem] font-black text-[var(--goxt-midnight)] mb-8 leading-none tracking-tighter" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            El Camino al <br /> <span className="goxt-gradient-accent-text block mt-4">Éxito Absoluto</span>
                        </h2>
                        <p className="text-2xl text-[var(--goxt-midnight)]/50 max-w-2xl mx-auto font-bold leading-relaxed">
                            Construimos alianzas estratégicas centradas en KPI's comerciales medibles y escalables.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {METHODOLOGY.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative p-12 rounded-[4rem] bg-white/80 backdrop-blur-2xl border border-white shadow-xl hover:shadow-2xl transition-all group"
                            >
                                <span className="text-[10rem] font-black text-[var(--goxt-midnight)]/5 absolute -top-12 -right-6 select-none group-hover:text-[var(--goxt-accent)]/10 transition-colors leading-none tracking-tighter">{m.step}</span>
                                <div className="w-20 h-20 bg-[var(--goxt-midnight)] rounded-[2rem] flex items-center justify-center mb-10 shadow-xl relative z-10">
                                    <Zap className="w-10 h-10 text-[var(--goxt-accent)]" />
                                </div>
                                <h3 className="text-[2rem] font-black mb-6 relative z-10 leading-none tracking-tight" style={{ color: "var(--goxt-midnight)", fontFamily: "var(--font-handwritten), cursive" }}>{m.title}</h3>
                                <p className="text-[var(--goxt-midnight)]/50 leading-relaxed text-lg relative z-10 font-bold">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Final CTA --- */}
            <section className="py-24 relative overflow-hidden z-20">
                <div className="goxt-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[var(--goxt-midnight)] p-24 md:p-40 rounded-[7rem] shadow-[0_60px_150px_-30px_rgba(0,0,0,0.6)] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[var(--goxt-accent)]/10 rounded-full blur-[150px] -z-0 group-hover:scale-125 transition-transform duration-1000" />

                        <h2 className="font-black mb-14 leading-[0.9] relative z-10 tracking-tighter" style={{ fontFamily: "var(--font-handwritten), cursive", fontSize: 'clamp(4rem, 5vw, 9rem)', color: "white" }}>
                            Escale su <br /> <span className="text-[var(--goxt-accent)] block mt-6">Imperio Hoy.</span>
                        </h2>
                        <p className="text-3xl text-white/40 mb-24 max-w-3xl mx-auto leading-relaxed font-bold relative z-10">
                            Agenda un diagnóstico exclusivo sin costo y descubra por qué las empresas líderes eligen GOxT.
                        </p>
                        <div className="flex flex-col items-center gap-12 relative z-10">
                            <Link
                                href="/contacto"
                                className="px-24 py-10 bg-[var(--goxt-accent)] text-[var(--goxt-midnight)] rounded-full font-black text-[2.2rem] shadow-[0_20px_60px_rgba(212,185,150,0.4)] hover:scale-105 transition-all"
                            >
                                Agendar Mi Demo
                            </Link>
                            <div className="flex items-center gap-6 text-white/20 font-black tracking-[0.4em] text-[0.8rem] uppercase">
                                <Shield className="w-5 h-5" /> Authorized Strategic Center
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="py-16 border-t border-[var(--goxt-accent)]/10 relative z-10">
                <div className="goxt-container flex flex-col md:flex-row justify-between items-center gap-16">
                    <div className="flex items-center gap-8">
                        <Link href="/">
                            <Image
                                src="/assets/logo_goxt.png"
                                alt="GOxT"
                                width={120}
                                height={40}
                                className="h-10 w-auto hover:opacity-80 transition-opacity"
                            />
                        </Link>
                        <div className="w-px h-12 bg-[var(--goxt-accent)]/20" />
                        <div className="text-[var(--goxt-midnight)]/40 font-black tracking-[0.3em] text-[0.7rem] uppercase">Enterprise Strategic Division</div>
                    </div>
                    <div className="flex gap-20 text-[0.95rem] text-[var(--goxt-midnight)]/60 font-black uppercase tracking-widest">
                        <Link href="/productos/crm" className="hover:text-[var(--goxt-accent)] transition-all">Plataforma</Link>
                        <Link href="/landing/crm/login" className="hover:text-[var(--goxt-accent)] transition-all">Directo</Link>
                        <Link href="/contacto" className="hover:text-[var(--goxt-accent)] transition-all">Consultoría</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
