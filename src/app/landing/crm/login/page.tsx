"use client";

import {
    Zap,
    Shield,
    MousePointer2,
    LineChart,
    Cpu,
    Network,
    Globe,
    ArrowRight,
    CheckCircle2,
    Users,
    FileSearch,
    Layout,
    Activity,
    Lock,
    Package
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Constantes de Datos ---

const CRM_FEATURES = [
    {
        icon: Users,
        title: "Crea tu Cuenta",
        desc: "Inicia en segundos y configura tu primer espacio de trabajo para centralizar toda tu operación."
    },
    {
        icon: FileSearch,
        title: "Carga tus Contactos",
        desc: "Importa tu base de datos o deja que la IA capture automáticamente tus leads desde LinkedIn y Email."
    },
    {
        icon: MousePointer2,
        title: "Define tu Producto",
        desc: "Configura tus rutas, tipos de contenedores y servicios específicos de logística en un clic."
    },
    {
        icon: CheckCircle2,
        title: "Cierra Negocios",
        desc: "Genera propuestas profesionales y sincroniza tus ventas con la operación real sin fricción."
    }
];

const METRICS = [
    { label: "Cierres de Ventas", value: "+42%", delay: 0.4 },
    { label: "Ahorro en Operación", value: "3.5h", delay: 0.5 },
    { label: "RoI Mensual", value: "12x", delay: 0.6 }
];

const TECH_BADGES = [
    { icon: Shield, text: "ISO 27001 SECURE" },
    { icon: Globe, text: "99.9% UPTIME" },
    { icon: Network, text: "REST API V2" },
    { icon: LineChart, text: "REAL-TIME BI" }
];

const INDUSTRY_SOLUTIONS = [
    {
        title: "Pipeline de Ventas B2B",
        desc: "Visualiza y gestiona todo tu embudo comercial en un tablero Kanban especializado para ciclos logísticos complejos y seguimiento de organizaciones.",
        icon: Users
    },
    {
        title: "Catálogo de Productos Dinámicos",
        desc: "Configura productos con campos ilimitados (Origen, Destino, Nave, Contenedor) que se adaptan exactamente a la terminología de tu negocio.",
        icon: Layout
    },
    {
        title: "Integración y Sincronización",
        desc: "Conecta tus ventas con el sistema operativo TMS Cargo de forma nativa, sincronizando clientes, actividades y órdenes sin duplicar trabajo.",
        icon: Network
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
        className="bg-white/90 backdrop-blur-md rounded-3xl border border-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="text-3xl font-bold goxt-gradient-accent-text mb-1">{value}</div>
        <div className="text-sm text-slate-500 font-bold tracking-wider uppercase">{label}</div>
    </motion.div>
);

const FeatureStep = ({ title, desc, icon: Icon, active }: { title: string, desc: string, icon: any, active: boolean }) => (
    <div className={`flex items-start gap-6 transition-all duration-500 ${active ? 'opacity-100 scale-105' : 'opacity-40 grayscale-[0.5]'}`}>
        <div className={`relative p-4 rounded-2xl transition-all duration-500 ${active ? 'bg-[var(--goxt-midnight)] shadow-[0_0_20px_rgba(212,185,150,0.4)]' : 'bg-slate-200'}`}>
            <Icon className={`w-6 h-6 ${active ? 'text-[var(--goxt-accent)]' : 'text-slate-500'}`} />
            {active && (
                <motion.div
                    layoutId="glow"
                    className="absolute inset-0 rounded-2xl bg-[var(--goxt-accent)]/20 blur-xl -z-10"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 transition-colors" style={{ fontFamily: "var(--font-handwritten), cursive", color: active ? "var(--goxt-midnight)" : "rgba(1, 22, 39, 0.6)" }}>{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-sm">{desc}</p>
        </div>
    </div>
);

const FlowMonitor = ({ activeStep }: { activeStep: number }) => {
    const renderContent = () => {
        switch (activeStep) {
            case 0:
                return (
                    <div className="space-y-8 py-10">
                        <div className="relative w-32 h-32 mx-auto">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-[var(--goxt-accent)]/40 rounded-full"
                            />
                            <div className="absolute inset-2 bg-gradient-to-br from-[var(--goxt-midnight)] to-slate-800 rounded-full flex items-center justify-center shadow-2xl">
                                <Layout className="w-12 h-12 text-[var(--goxt-accent)]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-2xl font-black text-white tracking-widest uppercase">ESPACIO DE TRABAJO</div>
                            <div className="text-[var(--goxt-accent)] font-mono text-xs animate-pulse font-bold">CONFIGURANDO ENTORNO...</div>
                        </div>
                        <div className="flex justify-center gap-3">
                            {['ADMIN', 'VENTAS', 'LOGÍSTICA'].map((t) => (
                                <div key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400 font-bold">{t}</div>
                            ))}
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="px-8 py-8 space-y-6 text-left">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Contactos Identificados</div>
                                <div className="text-4xl font-black text-white">124</div>
                            </div>
                            <div className="w-14 h-14 bg-[var(--goxt-accent)]/10 rounded-2xl flex items-center justify-center border border-[var(--goxt-accent)]/20">
                                <Users className="w-7 h-7 text-[var(--goxt-accent)]" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            {[
                                { name: "LinkedIn Sales Nav", status: "SINCRO ACTIVA", color: "bg-blue-500", progress: "80%" },
                                { name: "Website Leads", status: "COMPLETADO", color: "bg-green-500", progress: "100%" },
                                { name: "Excel Database", status: "PROCESANDO", color: "bg-yellow-500", progress: "45%" }
                            ].map((source, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                                    <div className="flex justify-between items-center relative z-10">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${source.color} animate-pulse`} />
                                            <span className="text-[10px] text-white font-black tracking-widest uppercase">{source.name}</span>
                                        </div>
                                        <span className="text-[8px] text-slate-500 font-bold">{source.status}</span>
                                    </div>
                                    <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: source.progress }}
                                            transition={{ duration: 1, delay: i * 0.2 }}
                                            className={`h-full ${source.color} opacity-50`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2 flex items-center gap-2 text-[9px] text-[var(--goxt-accent)] font-bold animate-pulse">
                            <Activity className="w-3 h-3" />
                            IA ENGINE: ANALIZANDO PERFILES...
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="px-8 py-6 space-y-6 text-left">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Configurador de Producto</div>
                                <div className="text-2xl font-black text-white">SERVICIO LOGÍSTICO</div>
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map((n) => (
                                    <div key={n} className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold ${n === 2 ? 'bg-[var(--goxt-accent)] text-[var(--goxt-midnight)]' : 'bg-white/10 text-slate-500'}`}>
                                        {n === 1 ? '✓' : n}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 space-y-5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--goxt-accent)]/5 blur-2xl" />
                            
                            <div className="flex justify-between items-center">
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Añade campos dinámicos</div>
                                <Activity className="w-3 h-3 text-[var(--goxt-accent)] animate-pulse" />
                            </div>

                            <div className="space-y-3">
                                {[
                                    { label: "Origen de Carga", type: "DIRECCIÓN (GOOGLE)", icon: Globe },
                                    { label: "Tipo Contenedor", type: "SELECTOR", icon: Layout },
                                    { label: "Peso Estimado", type: "NÚMERO", icon: Cpu }
                                ].map((attr, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-2 items-center"
                                    >
                                        <div className="flex-[1.5] bg-[var(--goxt-midnight)] border border-white/5 rounded-xl p-3 text-[10px] text-white font-medium">
                                            {attr.label}
                                        </div>
                                        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-[8px] text-[var(--goxt-accent)] font-black flex items-center justify-between group-hover:border-[var(--goxt-accent)]/30 transition-colors">
                                            <span className="truncate mr-2">{attr.type}</span>
                                            <attr.icon className="w-2.5 h-2.5 opacity-50 shrink-0" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="pt-2"
                            >
                                <div className="w-full py-4 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center gap-3 text-[10px] text-slate-500 font-bold hover:border-[var(--goxt-accent)]/30 hover:text-slate-300 transition-all cursor-default">
                                    <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center text-xs">+</div>
                                    <span>AGREGAR ATRIBUTO PERSONALIZADO</span>
                                </div>
                            </motion.div>
                        </div>
                        
                        <div className="text-[9px] text-slate-600 font-medium italic">
                            * Los campos se adaptarán automáticamente a tus PDFs de cotización.
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="px-10 py-4">
                        <div className="bg-slate-900 rounded-[2rem] p-6 border border-white/10 shadow-2xl relative overflow-hidden text-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--goxt-accent)]/10 blur-3xl" />
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-white font-black text-lg">PROPUESTA COMERCIAL</h4>
                                    <p className="text-[10px] text-slate-500">CLIENTE: IMPORTADORA GLOBAL S.A.</p>
                                </div>
                                <div className="bg-[var(--goxt-accent)] text-[var(--goxt-midnight)] px-2 py-1 rounded text-[9px] font-black">NEGOCIO GANADO</div>
                            </div>
                            <div className="space-y-3 mb-8">
                                <div className="h-2 bg-green-500/20 rounded w-full" />
                                <div className="h-2 bg-green-500/20 rounded w-full" />
                                <div className="h-2 bg-green-500/40 rounded w-2/3" />
                            </div>
                            <button className="w-full py-3 bg-[var(--goxt-accent)] text-[var(--goxt-midnight)] font-black text-xs rounded-xl shadow-[0_0_20px_rgba(212,185,150,0.5)]">
                                SINCRONIZAR CON OPERACIONES (TMS)
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative bg-[var(--goxt-midnight)] rounded-[3rem] border border-white/5 p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] group overflow-hidden">
            <div className="relative bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden h-[540px] flex flex-col">
                <div className="px-6 py-4 border-bottom border-white/5 flex justify-between items-center bg-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono font-bold tracking-widest">GOXT_CORE_OS_v2.0</div>
                    <Lock className="w-3 h-3 text-slate-600" />
                </div>

                <div className="flex-1 flex items-center justify-center relative">
                    <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--goxt-accent)]/20 to-transparent z-20 pointer-events-none"
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
                        <span>SYSTEM STATUS: OPERATIONAL</span>
                        <span className="text-[var(--goxt-accent)]">PASO {activeStep + 1}/4</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {[0, 1, 2, 3].map((s) => (
                            <div key={s} className={`h-1 rounded-full transition-all duration-500 ${s <= activeStep ? 'bg-[var(--goxt-accent)] shadow-[0_0_10px_var(--goxt-accent)]' : 'bg-white/10'}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,var(--goxt-accent)_0%,transparent_70%)] opacity-10 pointer-events-none blur-3xl" />
        </div>
    );
};

// --- Componente de Fondo Decorativo ---

const BackgroundDecor = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Fondo Base: Un crema ultra suave con profundidad */}
        <div className="absolute inset-0 bg-[#FDFBF7]" />

        {/* Gradientes Mesh Dinámicos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,185,150,0.25)_0%,transparent_45%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06)_0%,transparent_50%),radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_60%)]" />

        {/* Orbes de Luz Animados */}
        <motion.div
            animate={{
                scale: [1, 1.1, 1],
                x: [0, 40, 0],
                y: [0, 20, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] bg-[var(--goxt-accent-light)] rounded-full blur-[130px] opacity-25"
        />

        <motion.div
            animate={{
                scale: [1.1, 1, 1.1],
                x: [0, -30, 0],
                y: [0, 50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[5%] right-[10%] w-[50vw] h-[50vw] bg-[var(--goxt-accent)] rounded-full blur-[150px] opacity-20"
        />

        {/* Patrón de Red Tecnológica (Puntos) */}
        <div className="absolute inset-0 opacity-[0.15]"
            style={{
                backgroundImage: `radial-gradient(var(--goxt-midnight) 0.5px, transparent 0.5px)`,
                backgroundSize: '48px 48px'
            }}
        />

        {/* Elementos de Cristal (Glassmorphism) Flotantes */}
        <motion.div
            animate={{
                y: [-25, 25, -25],
                rotate: [0, 8, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[12%] w-72 h-72 rounded-[3rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl mix-blend-overlay opacity-50"
        />

        <motion.div
            animate={{
                y: [20, -20, 20],
                rotate: [0, -5, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[8%] w-56 h-56 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl mix-blend-overlay opacity-30"
        />

        {/* Escaneo de Datos - Línea de barrido sutil */}
        <motion.div
            animate={{
                top: ['-10%', '110%'],
                opacity: [0, 0.4, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--goxt-accent)] to-transparent z-10"
        />

        {/* Textura de Grano Premium */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
);

// --- Componente Principal ---

export default function CRMLanding() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % CRM_FEATURES.length);
        }, 5000); // 5 segundos para lectura profunda
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="theme-legacy-crm min-h-screen selection:bg-[var(--goxt-accent)] selection:text-white relative">
            <BackgroundDecor />

            {/* --- Hero Section --- */}
            <section className="relative min-h-screen flex items-center pt-30 pb-20 overflow-hidden">
                <div className="goxt-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm shadow-sm border border-white/80 mb-8">
                            <Cpu className="w-4 h-4 text-[var(--goxt-accent)] animate-pulse" />
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">IA-Powered Logistics CRM</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight pr-12 overflow-visible" style={{ color: "var(--goxt-midnight)", fontFamily: "var(--font-handwritten), cursive" }}>
                            Ventas con <br />
                            <span className="block goxt-gradient-accent-text pb-4 pr-16 overflow-visible">Precisión Digital&nbsp;</span>
                        </h1>

                        <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                            No es solo gestión de clientes. Es un motor de crecimiento que conecta tus procesos de venta con la operación logística en tiempo real.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <a
                                href="https://crm.goxt.io"
                                target="_blank"
                                rel="noopener"
                                className="px-8 py-5 bg-[var(--goxt-midnight)] text-[var(--goxt-accent)] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3"
                            >
                                <Zap className="w-5 h-5 fill-current" /> Empezar Gratis Ahora
                            </a>
                            <Link href="/acceder" className="px-8 py-5 bg-white border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all text-slate-900 shadow-sm">
                                Iniciar Sesión
                            </Link>
                        </div>

                        <div className="mt-16 grid grid-cols-3 gap-6">
                            {METRICS.map((metric, i) => <MetricCard key={i} {...metric} />)}
                        </div>
                    </motion.div>

                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--goxt-accent)_0%,transparent_70%)] scale-150 opacity-20" />
                        <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-full max-w-[500px]">
                            <div className="bg-white/40 backdrop-blur-sm p-2 rounded-[3.5rem] shadow-[var(--goxt-shadow-xl)] border-[6px] border-white/60 relative group overflow-hidden">
                                <Image src="/assets/Flujo CRM.png" alt="CRM Tech" width={1000} height={700} className="w-full h-auto rounded-[3rem]" priority />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Process Section --- */}
            <section className="py-32 relative rounded-[4rem] shadow-sm">
                <div className="goxt-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-10 leading-relaxed pr-12 overflow-visible" style={{ color: "var(--goxt-midnight)", fontFamily: "var(--font-handwritten), cursive" }}>
                                Configura tu éxito en <br /> <span className="goxt-gradient-accent-text pb-2 pr-10 overflow-visible">pocos minutos&nbsp;</span>
                            </h2>
                            <div className="space-y-12 relative">
                                <div className="absolute left-[30px] top-6 bottom-6 w-[2px] bg-slate-200" />
                                <motion.div
                                    className="absolute left-[30px] top-6 w-[2px] bg-[var(--goxt-accent)] transition-all duration-500 shadow-[0_0_10px_var(--goxt-accent)]"
                                    style={{ height: `${(activeStep / (CRM_FEATURES.length - 1)) * 100}%` }}
                                />
                                {CRM_FEATURES.map((feature, i) => (
                                    <FeatureStep key={i} active={activeStep === i} {...feature} />
                                ))}
                            </div>
                        </div>
                        <FlowMonitor activeStep={activeStep} />
                    </div>
                </div>
            </section>

            {/* --- Solutions by Industry Section --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="goxt-container relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            {...fadeInUp}
                            className="text-4xl lg:text-6xl font-bold mb-6"
                            style={{ color: "var(--goxt-midnight)", fontFamily: "var(--font-handwritten), cursive" }}
                        >
                            Soluciones diseñadas por <br />
                            <span className="goxt-gradient-accent-text pb-2 pr-10 overflow-visible">expertos en logística&nbsp;</span>
                        </motion.h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                            Aunque es adaptable a cualquier B2B, GOxT nace con el ADN del transporte en su núcleo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {INDUSTRY_SOLUTIONS.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white border-b-[6px] border-b-[var(--goxt-accent)]/20 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-[var(--goxt-midnight)] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-[var(--goxt-accent)]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--goxt-midnight)", fontFamily: "var(--font-handwritten), cursive" }}>{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Product Versatility Section (The "Secret Sauce") --- */}
            <section className="py-24 bg-[var(--goxt-midnight)] relative overflow-hidden rounded-[5rem] mx-4 lg:mx-8">
                <div className="absolute inset-0 opacity-10 bg-grid-white" />
                <div className="goxt-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--goxt-accent)]/20 border border-[var(--goxt-accent)]/30 text-[var(--goxt-accent)] text-xs font-bold uppercase tracking-widest mb-6">
                                <Zap className="w-3 h-3" /> 100% Configurable
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight" style={{ fontFamily: "var(--font-handwritten), cursive", color: "white" }}>
                                El CRM que se <br />
                                <span className="text-[var(--goxt-accent)]">adapta a tu producto</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                                A diferencia de otros sistemas rígidos, GOxT te permite definir tus propios productos con campos dinámicos: origen, destino, tipo de contenedor, peso o cualquier dato que tu negocio necesite.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Campos dinámicos ilimitados (Origen, Destino, Naves, etc.)",
                                    "Integración con TMS Cargo, Google Calendar y n8n automation",
                                    "Generación de PDF profesional en un solo clic",
                                    "Soporte Multi-Workspace para empresas globales"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 text-white font-bold"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[var(--goxt-accent)]" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                            {/* Una visualización abstracta de "Configuración de Producto" */}
                            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-md relative">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--goxt-accent)]/20 blur-3xl" />
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/5">
                                        <div className="text-slate-400 text-xs font-bold uppercase">Nombre del Producto</div>
                                        <div className="text-white font-black text-sm">FLETE MARÍTIMO</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2">
                                            <div className="text-slate-500 text-[10px] font-bold">ETIQUETA</div>
                                            <div className="text-[var(--goxt-accent)] text-xs font-black">ORIGEN</div>
                                            <div className="px-2 py-1 bg-white/10 rounded text-[9px] text-white">CARGO_ADDRESS</div>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2">
                                            <div className="text-slate-500 text-[10px] font-bold">ETIQUETA</div>
                                            <div className="text-[var(--goxt-accent)] text-xs font-black">CONTENEDOR</div>
                                            <div className="px-2 py-1 bg-white/10 rounded text-[9px] text-white">SELECT (20ft, 40ft)</div>
                                        </div>
                                    </div>
                                    <div className="bg-[var(--goxt-accent)]/10 p-6 rounded-3xl border border-[var(--goxt-accent)]/20 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <FileSearch className="text-[var(--goxt-accent)]" />
                                            <div className="text-white text-xs font-bold uppercase tracking-widest">Vista Previa Cotización</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-[var(--goxt-accent)] flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4 text-[var(--goxt-midnight)]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Tech Stack Section --- */}
            <section className="py-24 bg-white/20 backdrop-blur-md border-y border-white/10">
                <div className="goxt-container flex flex-wrap items-center justify-center gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                    {TECH_BADGES.map((badge, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <badge.icon className="w-6 h-6 text-[var(--goxt-midnight)]" />
                            <span className="font-bold text-lg text-slate-800">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-32 overflow-hidden relative">
                <div className="goxt-container relative z-10 text-center">
                    <motion.div {...fadeInUp} className="bg-white/40 backdrop-blur-xl p-16 md:p-24 rounded-[4rem] shadow-[var(--goxt-shadow-xl)] border border-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--goxt-accent)]/10 rounded-full blur-3xl -z-0" />

                        <h2 className="text-5xl lg:text-7xl font-bold mb-10 relative z-10 leading-snug pr-12 overflow-visible" style={{ color: "var(--goxt-midnight)", fontFamily: "var(--font-handwritten), cursive" }}>
                            Construye tu ventaja <br /> <span className="goxt-gradient-accent-text pb-2 pr-10 overflow-visible">competitiva&nbsp;</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed font-medium relative z-10">
                            Únete a las empresas que ya están transformando su gestión comercial con GOxT Digital Ecosystem.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <a
                                href="https://crm.goxt.io"
                                target="_blank"
                                rel="noopener"
                                className="px-12 py-6 bg-[var(--goxt-midnight)] text-[var(--goxt-accent)] rounded-full font-bold text-2xl shadow-xl hover:shadow-2xl transition-all"
                            >
                                Crear Mi Cuenta Gratis
                            </a>
                            <Link href="/acceder" className="px-12 py-6 border-2 border-slate-200 bg-white rounded-full font-bold text-2xl hover:bg-slate-50 transition-all text-slate-900 shadow-sm">
                                Acceder al Sistema
                            </Link>
                        </div>
                        <div className="mt-20 flex items-center justify-center gap-2 text-slate-400 relative z-10">
                            <Shield className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em]">GOxT DIGITAL ECOSYSTEM // CORE ENGINE V2.0</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
