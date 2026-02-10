"use client";

import { Kanban, FileText, Settings, Link2, Users, Calendar, BarChart3, Building2, Truck, Ship, Package, Check, ShieldCheck, History } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ConnectingLines from "@/components/ui/ConnectingLines";

const floatingAnimation: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const floatingAnimationDelayed: Variants = {
    initial: { y: 0 },
    animate: {
        y: [10, -10, 10],
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
        }
    }
};

const features = [
    {
        title: "Pipeline Interactivo Kanban",
        description:
            "Visualiza todas tus oportunidades en un tablero intuitivo. Forecast automático de ingresos basado en probabilidades de cierre y conversiones.",
        Icon: Kanban,
    },
    {
        title: "Cotizaciones Dinámicas",
        description:
            "Generación automática de SKUs inteligentes basados en las características del servicio. PDF listo para enviar en segundos.",
        Icon: FileText,
    },
    {
        title: "Google Calendar Sync",
        description:
            "Sincronización bidireccional real. Programa llamadas y reuniones que se reflejan instantáneamente en tu calendario de Google.",
        Icon: Calendar,
    },
    {
        title: "Trazabilidad y Auditoría",
        description:
            "Historial completo de cambios y auditoría de negociaciones. No pierdas ningún detalle de lo que sucede en cada venta.",
        Icon: History,
    },
    {
        title: "Márgenes en Tiempo Real",
        description:
            "Gestión de márgenes comerciales y costos operativos desde la cotización. Control total de la rentabilidad esperada.",
        Icon: BarChart3,
    },
    {
        title: "Productos Configurables",
        description:
            "Crea productos con los campos exactos que necesitas: origen, destino, peso, volumen. Sin código, 100% adaptable.",
        Icon: Settings,
    },
    {
        title: "Seguridad y Roles",
        description:
            "Múltiples roles para proteger tu información. Control total sobre quién ve y edita qué.",
        Icon: ShieldCheck,
    },
    {
        title: "Integración Operativa",
        description:
            "Conexión nativa con TMS Cargo. Las cotizaciones aprobadas se transmiten a operaciones sin doble digitación.",
        Icon: Link2,
    },
];

const useCases = [
    {
        title: "Transporte Terrestre",
        items: [
            "Tarifarios dinámicos por zona, km o tonelada configurables al 100%.",
            "Integración nativa con TMS Cargo para evitar la doble digitación de órdenes.",
            "Control de márgenes comerciales y costos por ruta desde la cotización.",
        ],
        Icon: Truck,
    },
    {
        title: "Transporte Marítimo",
        items: [
            "Gestión de naves, contenedores y tracking de puertos integrado.",
            "Cotizaciones dinámicas multimodales con campos específicos por tipo de contenedor.",
            "Consolidación de servicios y trazabilidad de BL en un solo lugar.",
        ],
        Icon: Ship,
    },
    {
        title: "Operadores Logísticos",
        items: [
            "Gestión de oferta y demanda en capacidad de transporte.",
            "Visibilidad 360° de la relación comercial con múltiples clientes y ubicaciones.",
            "Sincronización automática de acuerdos comerciales con el sistema operativo.",
        ],
        Icon: Package,
    },
];

export default function CRMPage() {
    return (
        <div className="theme-legacy-crm pt-24 min-h-screen bg-[var(--goxt-surface-alt)]">
            {/* <ConnectingLines /> */}
            {/* Hero Section - Premium Living Design */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20">
                {/* Background Animated Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-30"
                        style={{ background: 'radial-gradient(circle, var(--goxt-primary-100) 0%, transparent 70%)' }}
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [0, -90, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-20"
                        style={{ background: 'radial-gradient(circle, var(--goxt-accent-200) 0%, transparent 70%)' }}
                    />
                </div>

                <div className="goxt-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-sm font-medium text-slate-600">Nuevo Motor de Cotizaciones v2.0</span>
                            </div>

                            <h1
                                className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
                                style={{ color: 'var(--goxt-midnight)', fontFamily: "var(--font-handwritten), cursive" }}
                            >
                                De Leads a <br />
                                <span className="relative inline-block">
                                    <span className="relative z-10 goxt-gradient-accent-text">Clientes</span>
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--goxt-cream)] opacity-60 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                                Gestiona todo tu ciclo comercial con el único CRM que <span className="text-[var(--goxt-primary)] font-bold">entiende de logística</span>. Cierra más ventas, menos, burocracia.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href="https://crm.goxt.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="goxt-btn-primary text-xl px-10 py-5 shadow-xl shadow-[var(--goxt-primary)]/20 hover:shadow-2xl hover:shadow-[var(--goxt-primary)]/30 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Empezar Gratis
                                </a>
                                <Link
                                    href="/contacto"
                                    className="goxt-btn-secondary text-xl px-10 py-5 bg-white hover:bg-slate-50 border-2"
                                >
                                    Solicitar Demo
                                </Link>
                            </div>

                            {/* Trust Stats Cards */}
                            {/*<div className="grid grid-cols-2 gap-4 max-w-sm">
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="text-3xl font-bold mb-1 goxt-gradient-accent-text">+35%</div>
                                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Tasa de Cierre</div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="text-3xl font-bold mb-1 goxt-gradient-accent-text">2x</div>
                                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Velocidad Cotización</div>
                                </div>
                            </div>*/}
                        </motion.div>

                        {/* Right Column: 3D Composition */}
                        <div className="relative perspective-1000">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                                className="relative z-10"
                            >
                                <div className="relative bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden border-[6px] border-white ring-1 ring-slate-900/5">
                                    <Image
                                        src="/assets/Flujo CRM.png"
                                        alt="Dashboard GOxT CRM"
                                        width={1000}
                                        height={700}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>

                                {/* Floating Element 1: Deal Won */}
                                <motion.div
                                    variants={floatingAnimation}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute -right-8 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-white/50 max-w-[200px] hidden md:block"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">Negocio Cerrado</div>
                                            <div className="text-xs text-slate-500">hace 2 min</div>
                                        </div>
                                    </div>
                                    <div className="text-lg font-bold text-green-600">+$4.500.000</div>
                                </motion.div>

                                {/* Floating Element 2: Revenue Graph */}
                                <motion.div
                                    variants={floatingAnimationDelayed}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute -left-12 bottom-20 bg-[var(--goxt-midnight)] p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(15,23,42,0.4)] border border-slate-700 max-w-[220px] hidden md:block"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <BarChart3 className="w-5 h-5 text-[var(--goxt-cream)]" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-medium text-slate-400">Proyección Mes</div>
                                            <div className="text-lg font-bold text-white">UP 124%</div>
                                        </div>
                                    </div>
                                    <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "80%" }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-[var(--goxt-cream)]"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Decorative Elements behind image */}
                            <div className="absolute top-10 -right-20 w-72 h-72 bg-[var(--goxt-primary)]/10 rounded-full blur-[60px] -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[var(--goxt-accent)]/10 rounded-full blur-[50px] -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Funcionalidades Principales */}
            <section className="goxt-section bg-white rounded-[4rem] shadow-sm">
                <div className="goxt-container">
                    <div className="text-center mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-midnight)' }}
                        >
                            Funcionalidades <span className="goxt-gradient-accent-text">Principales</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-500 max-w-2xl mx-auto"
                        >
                            Potencia tu equipo comercial con herramientas diseñadas exclusivamente para logística.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white rounded-[2.5rem] p-8 text-center border border-slate-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                style={{ boxShadow: 'var(--goxt-shadow-lg)' }}
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
                                    style={{ background: 'var(--goxt-midnight)', color: 'var(--goxt-cream)' }}
                                >
                                    <feature.Icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-4"
                                    style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--text-primary)' }}
                                >
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrias / Casos de Uso */}
            <section className="goxt-section overflow-hidden">
                <div className="goxt-container">
                    <div className="text-center mb-20">
                        <h2
                            className="text-4xl md:text-6xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-midnight)' }}
                        >
                            Adaptado a tu <span className="goxt-gradient-accent-text">Industria</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            No es un CRM genérico. Entendemos los desafíos únicos de cada transporte.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {useCases.map((useCase, idx) => (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, x: idx === 0 ? -30 : idx === 2 ? 30 : 0, y: idx === 1 ? 30 : 0 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[3rem] p-10 border border-slate-50 relative overflow-hidden group"
                                style={{ boxShadow: 'var(--goxt-shadow-xl)' }}
                            >
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -z-0 transition-transform group-hover:scale-110" />

                                <div className="relative z-10">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner"
                                        style={{ background: 'var(--goxt-surface-alt)', color: 'var(--goxt-primary)' }}
                                    >
                                        <useCase.Icon className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <h3
                                        className="text-3xl font-bold mb-8"
                                        style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-midnight)' }}
                                    >
                                        {useCase.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {useCase.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-3"
                                            >
                                                <div
                                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                                    style={{ background: 'var(--goxt-midnight)', color: 'var(--goxt-cream)' }}
                                                >
                                                    <Check className="w-3 h-3" strokeWidth={4} />
                                                </div>
                                                <span className="text-base text-slate-600 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Reforzado */}
            <section className="goxt-section pt-0">
                <div className="goxt-container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden border border-slate-50"
                        style={{ boxShadow: 'var(--goxt-shadow-xl)' }}
                    >
                        <div className="relative z-10">
                            <h2
                                className="text-4xl md:text-6xl font-bold mb-8"
                                style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-midnight)' }}
                            >
                                Deja de perder <span className="goxt-gradient-accent-text">oportunidades</span>
                            </h2>
                            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Únete a las empresas que ya optimizaron su proceso comercial con nosotros.
                                La eficiencia operativa empieza en la venta.
                            </p>
                            <div className="flex flex-wrap gap-6 justify-center">
                                <Link
                                    href="https://crm.goxt.io"
                                    className="goxt-btn-primary text-2xl px-12 py-6"
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    href="/contacto"
                                    className="goxt-btn-secondary text-2xl px-12 py-6"
                                >
                                    Solicitar Demo CRM
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
