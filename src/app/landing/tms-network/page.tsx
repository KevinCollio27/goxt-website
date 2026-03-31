"use client";

import {
    Zap,
    Shield,
    Network,
    Globe,
    ArrowRight,
    CheckCircle2,
    Users,
    Mail,
    Layout,
    Activity,
    Lock,
    Truck,
    MapPin,
    FileCheck,
    Cpu,
    Database,
    Share2,
    Layers,
    ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Constantes de Datos ---

const TMS_FEATURES = [
    {
        icon: Network,
        title: "Integración de Red",
        desc: "Conecta transportistas y generadores de carga en un ecosistema digital único para la administración de activos."
    },
    {
        icon: ShieldCheck,
        title: "Validación 24/7",
        desc: "Verificación automática de documentos de conductores y camiones con alertas de vencimiento en tiempo real."
    },
    {
        icon: MapPin,
        title: "Geolocalización Inteligente",
        desc: "Crea puntos de interés con alias personalizados y geocercas para una asignación de carga ultra-precisa."
    },
    {
        icon: Share2,
        title: "Solicitudes y Mercado",
        desc: "Crea requerimientos con un clic, asígnalos a tu red de confianza o lánzalos al mercado global para asegurar la continuidad operativa."
    }
];

const METRICS = [
    { label: "Validación de Activos", value: "99.9%", delay: 0.4 },
    { label: "Reducción de Tiempos", value: "-35%", delay: 0.5 },
    { label: "Alertas de Vencimiento", value: "100%", delay: 0.6 }
];

const TECH_BADGES = [
    { icon: Shield, text: "COMPLIANCE VERIFIED" },
    { icon: Globe, text: "REGIONAL NETWORK" },
    { icon: Database, text: "ASSET INTELLIGENCE" },
    { icon: Activity, text: "LIVE TRACKING" }
];

const NETWORK_ROLES = [
    {
        title: "Para Transportistas",
        desc: "Administra tu flota, conductores y documentos. Publica tus tarifas y accede a nuevas oportunidades de carga.",
        icon: Truck,
        features: ["Gestión de Activos Online", "Alertas de Vencimientos", "Publicación de Tarifas"]
    },
    {
        title: "Para Generadores de Carga",
        desc: "Accede a una red validada de proveedores. Crea solicitudes de transporte con geolocalización y seguimiento.",
        icon: Users,
        features: ["Creación de Requerimientos", "Pre-facturación Digital", "Red de Proveedores Elite"]
    }
];

// Animaciones

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
} as const;

// Sub-Componentes

const MetricCard = ({ label, value, delay }: { label: string, value: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border border-[var(--network-border)] p-6 shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="text-3xl font-bold text-[var(--network-dark)] mb-1">{value}</div>
        <div className="text-sm text-slate-500 font-bold tracking-wider uppercase">{label}</div>
    </motion.div>
);

const FeatureStep = ({ title, desc, icon: Icon, active }: { title: string, desc: string, icon: any, active: boolean }) => (
    <div className={`flex items-start gap-6 transition-all duration-500 ${active ? 'opacity-100 scale-105' : 'opacity-40 grayscale-[0.5]'}`}>
        <div className={`relative p-4 rounded-2xl transition-all duration-500 ${active ? 'bg-[var(--network-dark)] shadow-[0_0_20px_var(--network-shadow)]' : 'bg-slate-200'}`}>
            <Icon className={`w-6 h-6 ${active ? 'text-[var(--network-primary)]' : 'text-slate-500'}`} />
            {active && (
                <motion.div
                    layoutId="glow-tms"
                    className="absolute inset-0 rounded-2xl bg-[var(--network-primary)]/20 blur-xl -z-10"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 transition-colors" style={{ fontFamily: "var(--font-handwritten), cursive", color: active ? "var(--network-dark)" : "rgba(6, 78, 87, 0.6)" }}>{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-sm">{desc}</p>
        </div>
    </div>
);

const NetworkMonitor = ({ activeStep }: { activeStep: number }) => {
    const renderContent = () => {
        switch (activeStep) {
            case 0:
                return (
                    <div className="space-y-8 py-10">
                        <div className="relative w-32 h-32 mx-auto">
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-[var(--network-primary)]/40 rounded-full"
                            />
                            <div className="absolute inset-2 bg-gradient-to-br from-[var(--network-deep)] to-[var(--network-dark)] rounded-full flex items-center justify-center shadow-2xl">
                                <Users className="w-12 h-12 text-[var(--network-primary)]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-black text-white tracking-widest uppercase">REGISTRO DE RED</div>
                            <div className="text-[var(--network-primary)] font-mono text-xs animate-pulse font-bold">VINCULANDO ACTIVOS...</div>
                        </div>
                        <div className="flex justify-center gap-3">
                            {['CHOFERES', 'CAMIONES', 'REMOLQUES'].map((t) => (
                                <div key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400 font-bold">{t}</div>
                            ))}
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center px-10">
                            <div className="text-left">
                                <div className="text-[10px] text-slate-400 font-bold uppercase">Estado Documental</div>
                                <div className="text-xl font-black text-white">98.5% OK</div>
                            </div>
                            <ShieldCheck className="w-10 h-10 text-[var(--network-primary)] animate-bounce" />
                        </div>
                        <div className="px-10">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-[9px] text-[var(--network-primary)] font-bold">LICENCIA PROFESIONAL</div>
                                    <div className="text-[9px] text-green-400 font-bold uppercase">Validado</div>
                                </div>
                                <div className="w-full bg-slate-700 h-1 rounded-full">
                                    <div className="bg-[var(--network-primary)] h-full w-full rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="px-10 py-4">
                        <div className="bg-slate-900 rounded-[2rem] p-6 border border-white/10 shadow-2xl relative overflow-hidden text-left">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-[var(--network-primary)]/20 rounded-xl flex items-center justify-center">
                                    <MapPin className="text-[var(--network-primary)]" />
                                </div>
                                <div>
                                    <div className="text-white font-black text-xs uppercase">Nuevo Requerimiento</div>
                                    <div className="text-[var(--network-primary)] text-[10px] font-bold">Planta Santiago → Puerto Valparaíso</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                    <div className="text-[8px] text-slate-500 uppercase">Tarifa Sugerida</div>
                                    <div className="text-white font-bold text-xs">$450.00</div>
                                </div>
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                    <div className="text-[8px] text-slate-500 uppercase">Prioridad</div>
                                    <div className="text-[var(--network-primary)] font-bold text-xs uppercase">Alta</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="flex flex-col items-center py-10 px-6">
                        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-left relative overflow-hidden">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <Share2 className="text-[var(--network-primary)] w-4 h-4" />
                                    <span className="text-[10px] text-white font-bold">DISTRIBUCIÓN DE CARGA</span>
                                </div>
                                <span className="text-[8px] text-slate-500 font-mono">ID: TMS-992-G</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[10px] font-bold">P1</div>
                                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2 }} className="h-full bg-[var(--network-primary)]" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 opacity-50">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-400">P2</div>
                                    <div className="flex-1 h-2 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative bg-[var(--network-deep)] rounded-[3rem] border border-white/5 p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] group overflow-hidden">
            <div className="relative bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden h-[540px] flex flex-col">
                <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                        <div className="w-2 h-2 rounded-full bg-teal-500/50" />
                        <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase">TMS_NETWORK_OS_v4.0</div>
                    <Lock className="w-3 h-3 text-slate-600" />
                </div>

                <div className="flex-1 flex items-center justify-center relative">
                    <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--network-primary)]/20 to-transparent z-20 pointer-events-none"
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full text-center"
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="px-8 py-6 bg-white/2 border-t border-white/5">
                    <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 mb-2">
                        <span>NETWORK STATUS: ACTIVE</span>
                        <span className="text-[var(--network-primary)]">MODULO {activeStep + 1}/4</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {[0, 1, 2, 3].map((s) => (
                            <div key={s} className={`h-1 rounded-full transition-all duration-500 ${s <= activeStep ? 'bg-[var(--network-primary)] shadow-[0_0_10px_var(--network-primary)]' : 'bg-white/10'}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,var(--network-primary)_0%,transparent_70%)] opacity-10 pointer-events-none blur-3xl" />
        </div>
    );
};

// --- Componente de Fondo Decorativo ---

const BackgroundDecor = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Fondo Base Ultra Limpio */}
        <div className="absolute inset-0 bg-[#F0FDF4]" />

        {/* Gradientes Mesh Cinéticos - Fusión de Esmeralda y Naval */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08)_0%,transparent_60%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.6)_0%,transparent_70%)]" />

        {/* Orbes de Vidrio Esmeralda Animados */}
        <motion.div
            animate={{
                scale: [1, 1.3, 1],
                x: [0, -100, 0],
                y: [0, 50, 0],
                rotate: [0, 90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] bg-gradient-to-br from-[var(--network-primary)]/15 via-transparent to-transparent rounded-full blur-[160px] opacity-40 capitalize"
        />

        <motion.div
            animate={{
                scale: [1.2, 0.8, 1.2],
                x: [0, 80, 0],
                y: [0, -40, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-teal-500/10 via-blue-400/5 to-transparent rounded-full blur-[140px] opacity-25"
        />

        {/* Cuadrícula Digital de Alta Definición */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
            style={{
                backgroundImage: `linear-gradient(var(--network-dark) 1px, transparent 1px), linear-gradient(90deg, var(--network-dark) 1px, transparent 1px)`,
                backgroundSize: '100px 100px'
            }}
        />
        <div className="absolute inset-0 opacity-[0.02]"
            style={{
                backgroundImage: `linear-gradient(var(--network-primary) 1px, transparent 1px), linear-gradient(90deg, var(--network-primary) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }}
        />

        {/* Rayo de Datos Transversal */}
        <motion.div
            animate={{
                left: ['-50%', '150%'],
                opacity: [0, 0.4, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[var(--network-primary)] to-transparent rotate-[-45deg] z-10"
        />

        {/* Partículas de Red (Nodos Flotantes) */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 5 + i * 2,
                    repeat: Infinity,
                    delay: i * 1.5
                }}
                className="absolute w-2 h-2 bg-[var(--network-primary)] rounded-full blur-[1px]"
                style={{
                    top: `${15 + i * 15}%`,
                    left: `${10 + (i * 17) % 80}%`
                }}
            />
        ))}

        {/* Textura de Grano Premium */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
);

// --- Componente Principal ---

export default function TMSNetworkLanding() {
    const router = useRouter();
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % TMS_FEATURES.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="theme-tms-network min-h-screen selection:bg-[var(--network-primary)] selection:text-white relative">
            <BackgroundDecor />

            {/* --- Hero Section --- */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
                <div className="goxt-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm shadow-sm border border-white/80 mb-8">
                            <Network className="w-4 h-4 text-[var(--network-primary)] animate-pulse" />
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Infraestructura Logística 4.0</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight pr-12 overflow-visible" style={{ color: "var(--network-dark)", fontFamily: "var(--font-handwritten), cursive" }}>
                            Conecta tu <br />
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--network-primary)] to-[var(--network-teal)] pb-4 pr-16 overflow-visible">Red de Carga&nbsp;</span>
                        </h1>

                        <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                            TMS GONetwork integra a transportistas y generadores de carga en una red inteligente para la administración total de activos y cumplimiento documental.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open("https://network.goxt.io", "_blank")}
                                className="px-8 py-5 bg-[var(--network-dark)] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3"
                            >
                                <Zap className="w-5 h-5 fill-[var(--network-primary)] text-[var(--network-primary)]" /> Unirse a la Red
                            </motion.button>
                            <Link href="/contacto" className="px-8 py-5 bg-white border border-[var(--network-border)] rounded-full font-bold text-lg hover:bg-[var(--network-light)] transition-all text-slate-900 shadow-sm">
                                Agendar Demo
                            </Link>
                        </div>

                        <div className="mt-16 grid grid-cols-3 gap-6">
                            {METRICS.map((metric, i) => <MetricCard key={i} {...metric} />)}
                        </div>
                    </motion.div>

                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--network-primary)_0%,transparent_70%)] scale-150 opacity-10" />
                        <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-full max-w-[500px]">
                            <div className="bg-[var(--network-deep)] p-2 rounded-[3.5rem] shadow-2xl border-[6px] border-white/60 relative group overflow-hidden">
                                <Image src="/assets/Login-network.png" alt="TMS Network Control" width={1000} height={700} className="w-full h-auto rounded-[3rem] brightness-110" priority />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Integration Monitoring Section --- */}
            <section className="py-32 relative rounded-[4rem] shadow-sm bg-white/30 backdrop-blur-md">
                <div className="goxt-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-10 leading-relaxed pr-12 overflow-visible" style={{ color: "var(--network-dark)", fontFamily: "var(--font-handwritten), cursive" }}>
                                Gestión de activos <br /> <span className="text-[var(--network-secondary)] pb-2 pr-10 overflow-visible">bajo control&nbsp;</span>
                            </h2>
                            <div className="space-y-12 relative">
                                <div className="absolute left-[30px] top-6 bottom-6 w-[2px] bg-slate-200" />
                                <motion.div
                                    className="absolute left-[30px] top-6 w-[2px] bg-[var(--network-primary)] transition-all duration-500 shadow-[0_0_10px_var(--network-primary)]"
                                    style={{ height: `${(activeStep / (TMS_FEATURES.length - 1)) * 100}%` }}
                                />
                                {TMS_FEATURES.map((feature, i) => (
                                    <FeatureStep key={i} active={activeStep === i} {...feature} />
                                ))}
                            </div>
                        </div>
                        <NetworkMonitor activeStep={activeStep} />
                    </div>
                </div>
            </section>

            {/* --- Network Roles Section --- */}
            <section className="py-24 relative">
                <div className="goxt-container">
                    <div className="text-center mb-20">
                        <motion.h2
                            {...fadeInUp}
                            className="text-4xl lg:text-5xl font-bold mb-6"
                            style={{ color: "var(--network-dark)", fontFamily: "var(--font-handwritten), cursive" }}
                        >
                            Un sistema diseñado para <br />
                            <span className="text-[var(--network-secondary)] pb-2 pr-10 overflow-visible">cada rol de la red&nbsp;</span>
                        </motion.h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                            TMS Go Network integra a proveedores y clientes en una infraestructura digital compartida.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {NETWORK_ROLES.map((role, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white/60 backdrop-blur-xl p-12 rounded-[4rem] border border-[var(--network-border)] shadow-xl hover:shadow-2xl transition-all group"
                            >
                                <div className="w-20 h-20 bg-[var(--network-dark)] rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform">
                                    <role.icon className="w-10 h-10 text-[var(--network-primary)]" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--network-primary)" }}>{role.title}</h3>
                                <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">{role.desc}</p>
                                <div className="space-y-4">
                                    {role.features.map((feature, j) => (
                                        <div key={j} className="flex items-center gap-3 text-[var(--network-dark)] font-bold">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--network-primary)]" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Platform Capabilities Section --- */}
            <section className="py-24 bg-[var(--network-dark)] relative overflow-hidden rounded-[5rem] mx-4 lg:mx-8">
                <div className="absolute inset-0 opacity-10 bg-grid-white" />
                <div className="goxt-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--network-primary)]/20 border border-[var(--network-primary)]/30 text-[var(--network-primary)] text-xs font-bold uppercase tracking-widest mb-6">
                                <Cpu className="w-3 h-3" /> Configuración Avanzada
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                Personalización <br />
                                <span className="text-[var(--network-primary)]">sin límites</span>
                            </h2>
                            <p className="text-emerald-100/60 text-lg mb-10 leading-relaxed font-medium">
                                Renombra campos, gestiona zonas horarias y crea requerimientos geolocalizados con apodos personalizados para una operatividad fluida.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Creación de flujos de activación documental",
                                    "Geolocalización de direcciones con apodos",
                                    "Formularios externos para clientes no registrados",
                                    "Validación automática de vencimientos online"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 text-white font-bold"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[var(--network-primary)]" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-md relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--network-primary)]/20 blur-3xl" />
                                <div className="space-y-6 relative z-10">
                                    <div className="flex justify-between items-center bg-white/10 p-5 rounded-2xl border border-white/5">
                                        <div className="text-[var(--network-primary)] text-[10px] font-black uppercase tracking-widest">Identificador de Punto</div>
                                        <div className="text-white font-black text-sm">PLANTA SANTIAGO</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2">
                                            <div className="text-slate-500 text-[10px] font-bold">LATITUD</div>
                                            <div className="text-white text-xs font-bold font-mono">-33.4489</div>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2">
                                            <div className="text-slate-500 text-[10px] font-bold">LONGITUD</div>
                                            <div className="text-white text-xs font-bold font-mono">-70.6693</div>
                                        </div>
                                    </div>
                                    <div className="bg-[var(--network-primary)]/20 p-6 rounded-3xl border border-[var(--network-primary)]/40 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck className="text-[var(--network-primary)]" />
                                            <div className="text-white text-xs font-bold uppercase">Estado de Activación: OK</div>
                                        </div>
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-[var(--network-primary)] shadow-[0_0_10px_var(--network-primary)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Tech Stack Section --- */}
            <section className="py-24 bg-white/20 backdrop-blur-md border-y border-[var(--network-border)]">
                <div className="goxt-container flex flex-wrap items-center justify-center gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                    {TECH_BADGES.map((badge, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <badge.icon className="w-6 h-6 text-[var(--network-dark)]" />
                            <span className="font-bold text-lg text-slate-800">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Final CTA Section --- */}
            <section className="py-32 overflow-hidden relative">
                <div className="goxt-container relative z-10 text-center">
                    <motion.div {...fadeInUp} className="bg-white/40 backdrop-blur-xl p-16 md:p-24 rounded-[4rem] shadow-2xl border border-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--network-primary)]/10 rounded-full blur-3xl -z-0" />

                        <h2 className="text-5xl lg:text-7xl font-bold mb-10 relative z-10 leading-snug pr-12 overflow-visible" style={{ color: "var(--network-dark)", fontFamily: "var(--font-handwritten), cursive" }}>
                            Únete a la nueva <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--network-primary)] to-[var(--network-teal)] pb-2 pr-10 overflow-visible">Red Logística&nbsp;</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed font-medium relative z-10">
                            Centraliza tu operación, valida tu flota y conecta con los mejores generadores de carga de la región.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push("/contacto")}
                                className="px-12 py-6 bg-[var(--network-dark)] text-white rounded-full font-bold text-2xl shadow-xl hover:shadow-2xl transition-all"
                            >
                                Registrar mi Empresa
                            </motion.button>
                            <a href="https://network.goxt.io" target="_blank" rel="noopener" className="px-12 py-6 border-2 border-[var(--network-border)] bg-white rounded-full font-bold text-2xl hover:bg-[var(--network-light)] transition-all text-slate-900 shadow-sm">
                                Abrir Plataforma
                            </a>
                        </div>
                        <div className="mt-20 flex items-center justify-center gap-2 text-slate-400 relative z-10">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em]">GOxT DIGITAL ECOSYSTEM // TMS GO NETWORK v4.0</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
