"use client";

import {
    Network,
    ShieldCheck,
    Activity,
    Users,
    MapPin,
    FileCheck,
    Zap,
    Globe,
    Truck,
    Link as LinkIcon,
    Layers,
    Check,
    Cpu,
    Database,
    Share2
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const floatingAnimation: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-12, 12, -12],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const pulseAnimation: Variants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.05, 1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const features = [
    {
        title: "Ecosistema de Red Logística",
        description: "Una red inteligente que integra a transportistas y generadores de carga en una plataforma única de administración.",
        Icon: Network,
    },
    {
        title: "Validación Documental Online",
        description: "Gestión automatizada de documentos y vencimientos para conductores, camiones y remolques en tiempo real.",
        Icon: ShieldCheck,
    },
    {
        title: "Geolocalización con Apodos",
        description: "Identifica tus puntos de interés con alias personalizados como 'Planta Santiago' para una asignación ultra-rápida.",
        Icon: MapPin,
    },
    {
        title: "Marketplace de Carga",
        description: "Asigna solicitudes a tu red interna de confianza o abre requerimientos al marketplace ampliado de Camión Go.",
        Icon: Activity,
    },
    {
        title: "Configuración Multizona",
        description: "Personalización avanzada de zonas horarias, campos dinámicos y documentos específicos por cada transportista.",
        Icon: Cpu,
    },
    {
        title: "Flujos de Activación Mobile",
        description: "Controle los flujos de activación y recepción de documentos desde la palma de su mano vía App.",
        Icon: Zap,
    },
    {
        title: "Formularios Externos Seguros",
        description: "Recibe requerimientos de clientes no registrados mediante enlaces compartidos con formularios simplificados.",
        Icon: Share2,
    },
    {
        title: "Administración de Activos",
        description: "Hoja de vida digital para cada activo de tu flota. Control total sobre disponibilidad y capacidad técnica.",
        Icon: Database,
    },
];

const capabilities = [
    {
        title: "Para Transportistas",
        items: [
            "Registro centralizado de conductores, camiones y remolques.",
            "Gestión de documentación con alertas de vencimiento automáticas.",
            "Publicación de tarifas y capacidad disponible en una red integrada.",
        ],
        Icon: Truck,
        color: "emerald"
    },
    {
        title: "Para Generadores de Carga",
        items: [
            "Acceso directo a una red de proveedores validados y activos.",
            "Creación y duplicación rápida de solicitudes de transporte terrestre.",
            "Seguimiento documental y de prefacturación en tiempo real.",
        ],
        Icon: Users,
        color: "teal"
    },
    {
        title: "Integración Tecnológica",
        items: [
            "Conexión nativa con sistemas GPS y validación en línea de activos.",
            "Asignación algorítmica por proximidad, tarifa o histórico de servicio.",
            "API abierta para conectar tus flujos logísticos existentes.",
        ],
        Icon: Layers,
        color: "blue"
    },
];

export default function TMSNetworkPage() {
    return (
        <div className="theme-tms-network pt-24 min-h-screen bg-white">
            {/* Hero Section - Technological & High Convergence */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden py-12">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

                {/* Moving Tech Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/4 -right-20 w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-20"
                        style={{ background: 'radial-gradient(circle, var(--network-primary) 0%, transparent 70%)' }}
                    />
                    <motion.div
                        animate={{
                            x: [0, -40, 0],
                            y: [0, 60, 0],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-20 -left-20 w-[50vw] h-[50vw] rounded-full blur-[80px] opacity-15"
                        style={{ background: 'radial-gradient(circle, var(--network-blue) 0%, transparent 70%)' }}
                    />
                </div>

                <div className="goxt-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--network-light)] border border-[var(--network-border)] mb-8 shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-[var(--network-primary)] animate-pulse"></span>
                                <span className="text-sm font-semibold text-[var(--network-dark)] uppercase tracking-wider">Ecosistema Logístico 4.0</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-[1.05] text-[var(--goxt-midnight)] tracking-tighter">
                                Conecta tu <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--network-primary)] to-[var(--network-teal)]">
                                    Red Logística
                                </span>
                            </h1>

                            <p className="text-xl text-slate-500 mb-10 max-w-xl leading-relaxed text-balance">
                                TMS Go Network es la red que integra transportistas y generadores de carga en un solo lugar. <span className="text-slate-800 font-semibold">Validación online, marketplace y control total de activos</span> para una operación sin fricciones.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 mb-12">
                                <Link
                                    href="/contacto"
                                    className="goxt-btn-primary bg-gradient-to-r from-[var(--network-secondary)] to-[var(--network-dark)] text-xl px-12 py-5 shadow-[var(--network-shadow)] hover:shadow-[var(--network-shadow)] transform hover:-translate-y-1"
                                >
                                    Solicitar Demo
                                </Link>
                                <a
                                    href="https://network.goxt.io/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="goxt-btn-secondary text-xl px-12 py-5 border-[var(--network-border)] text-[var(--network-secondary)] hover:bg-[var(--network-light)]"
                                >
                                    Acceder a la Red
                                </a>
                            </div>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-6 items-center opacity-70">
                                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400">
                                    <Globe className="w-4 h-4" /> Global Access
                                </div>
                                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400">
                                    <ShieldCheck className="w-4 h-4" /> Secure Validation
                                </div>
                                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400">
                                    <Zap className="w-4 h-4" /> Real-Time Sync
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual Visualizer */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative z-10"
                            >
                                {/* Abstract Network Visualization */}
                                <div className="relative group">
                                    {/* Parent with overflow-hidden for the image only */}
                                    <div className="bg-[var(--network-deep)] rounded-[3rem] p-1 shadow-2xl overflow-hidden aspect-[16/10] relative">
                                        <div className="absolute inset-0 bg-[var(--network-primary)]/10 pointer-events-none" />
                                        <Image
                                            src="/assets/Login-network.png"
                                            alt="Network Dashboard Preview"
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover rounded-[2.8rem] opacity-95 brightness-105 contrast-105"
                                        />
                                    </div>

                                    {/* Tech Overlays - OUTSIDE the overflow-hidden container */}
                                    <motion.div
                                        variants={floatingAnimation}
                                        animate="animate"
                                        className="absolute -top-10 -right-16 bg-white/90 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-2xl z-20 hidden md:block"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 rounded-2xl bg-[var(--network-primary)] shadow-lg shadow-[var(--network-shadow)]">
                                                <Activity className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="whitespace-nowrap">
                                                <div className="text-black font-bold">Marketplace Live</div>
                                                <div className="text-[var(--network-primary)] text-xs font-mono">+12 Solicitudes hoy</div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={pulseAnimation}
                                        animate="animate"
                                        className="absolute -bottom-8 -left-12 bg-[var(--network-primary)]/90 backdrop-blur-md p-4 rounded-2xl text-white shadow-xl flex items-center gap-3 z-20 min-w-[220px] hidden md:flex"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div className="whitespace-nowrap">
                                            <div className="text-xs uppercase font-mono tracking-tighter opacity-80">Documentación</div>
                                            <div className="text-sm font-bold">98% Activos validados</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Glow behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--network-primary)]/10 rounded-full blur-[80px] -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Core */}
            <section className="py-32 relative overflow-hidden bg-slate-50">
                <div className="goxt-container">
                    <div className="max-w-3xl mb-24">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[var(--network-secondary)] font-mono text-sm uppercase tracking-[0.3em] mb-4 block"
                        >
                            Core Infrastructure
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black !text-slate-900 mb-8 tracking-tight leading-[1.1]">
                            Potencia tu red con <br />
                            <span className="text-[var(--network-secondary)]">tecnología de punta</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="mb-8 relative">
                                    <div className="w-16 h-16 rounded-3xl bg-[var(--network-light)] flex items-center justify-center text-[var(--network-secondary)] relative z-10 transition-all duration-300 group-hover:bg-[var(--network-primary)] group-hover:text-white group-hover:shadow-2xl group-hover:shadow-[var(--network-shadow)] group-hover:-translate-y-2">
                                        <feature.Icon className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <div className="absolute top-2 left-2 w-16 h-16 bg-[var(--network-primary)]/20 rounded-3xl -z-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="text-xl font-bold !text-slate-900 mb-4 tracking-tight group-hover:!text-[var(--network-dark)] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Capabilities */}
            <section className="py-32 bg-[var(--goxt-midnight)] relative overflow-hidden">
                {/* Tech background items */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-px h-64 bg-[var(--network-primary)]" />
                    <div className="absolute top-[20%] right-[10%] w-64 h-px bg-[var(--network-primary)]" />
                    <div className="absolute bottom-[15%] left-[15%] w-32 h-32 rounded-full border border-[var(--network-primary)]" />
                </div>

                <div className="goxt-container relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black !text-white mb-8 tracking-tighter">
                            Un Sistema, <span className="text-[var(--network-primary)]">Múltiples Roles</span>
                        </h2>
                        <p className="text-[var(--network-light)]/60 text-xl max-w-2xl mx-auto font-light">
                            Conectamos a cada eslabón de la cadena logística mediante una infraestructura digital robusta y segura.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {capabilities.map((cap, idx) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group"
                            >
                                <div className="mb-10 inline-flex p-5 rounded-[2rem] bg-[var(--network-primary)]/10 text-[var(--network-primary)] group-hover:bg-[var(--network-primary)] group-hover:text-white transition-all duration-300">
                                    <cap.Icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-bold !text-white mb-8 tracking-tight">{cap.title}</h3>
                                <ul className="space-y-6">
                                    {cap.items.map((item) => (
                                        <li key={item} className="flex items-start gap-4">
                                            <div className="mt-1.5 w-5 h-5 rounded-full border border-[var(--network-primary)]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--network-primary)] transition-colors">
                                                <Check className="w-3 h-3 text-[var(--network-primary)]" strokeWidth={3} />
                                            </div>
                                            <span className="text-[var(--network-light)]/70 text-base leading-relaxed group-hover:text-white transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white">
                <div className="goxt-container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[var(--network-secondary)] rounded-[4rem] px-8 py-20 text-center relative overflow-hidden shadow-2xl shadow-[var(--network-shadow)]"
                    >
                        {/* Background flare */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-500/30 rounded-full blur-[60px]" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black !text-white mb-8 tracking-tight">
                                Lleva tu red al <br /> <span className="text-[var(--network-light)]">siguiente nivel</span>
                            </h2>
                            <p className="text-[var(--network-light)] text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Únete a las empresas que ya están transformando su logística operativa con GOxT TMS Network.
                            </p>
                            <div className="flex flex-wrap gap-6 justify-center">
                                <Link
                                    href="/contacto"
                                    className="px-12 py-6 bg-white text-[var(--network-dark)] rounded-full text-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    Agendar Demo
                                </Link>
                                <a
                                    href="https://network.goxt.io"
                                    className="px-12 py-6 bg-[var(--network-dark)]/30 backdrop-blur-md text-white border border-white/20 rounded-full text-2xl font-bold hover:bg-[var(--network-dark)]/50 transition-all duration-300"
                                >
                                    Explorar Red
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
