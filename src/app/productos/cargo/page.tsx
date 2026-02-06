"use client";

import { BarChart, FileText, Fuel, ListTodo, MapPin, Truck, User, Wrench, Check, BarChart3 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import ConnectingLines from "@/components/ui/ConnectingLines";
import Image from 'next/image';

const floatingAnimation: Variants = {
    initial: { y: 0 },
    animate: {
        y: [10, -10, 10],
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
        y: [-10, 10, -10],
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
        title: "Gestión de Flotas",
        description:
            "Administra todos tus vehículos, documentación, vencimientos y estado operativo en un solo lugar.",
        Icon: Truck,
        color: "text-[var(--goxt-primary)]",
        bg: "bg-blue-50",
    },
    {
        title: "Tracking en Tiempo Real",
        description:
            "Monitorea la ubicación de tu flota en tiempo real. Geocercas, alertas y historial de recorridos.",
        Icon: MapPin,
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        title: "Órdenes de Transporte",
        description:
            "Crea, asigna y da seguimiento a órdenes de transporte. Desde la solicitud hasta la entrega.",
        Icon: ListTodo,
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        title: "Control de Combustible",
        description:
            "Registra consumos, analiza rendimientos y detecta anomalías. Reduce costos de operación.",
        Icon: Fuel,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        title: "Mantenimiento Programado",
        description:
            "Alertas de mantenimiento preventivo. Historial de reparaciones y control de costos por vehículo.",
        Icon: Wrench,
        color: "text-slate-600",
        bg: "bg-slate-100",
    },
    {
        title: "Gestión de Conductores",
        description:
            "Documentación, licencias, asignación de vehículos y evaluación de desempeño.",
        Icon: User,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    },
    {
        title: "Documentación Digital",
        description:
            "Guías de despacho, manifiestos y toda la documentación necesaria en formato digital.",
        Icon: FileText,
        color: "text-rose-600",
        bg: "bg-rose-50",
    },
    {
        title: "Reportes Operativos",
        description:
            "KPIs de eficiencia, utilización de flota, costos por km y análisis de rentabilidad.",
        Icon: BarChart,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
];

export default function CargoPage() {
    return (
        <div className="pt-24">
            {/* <ConnectingLines /> */}

            {/* Hero Section */}
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
                        style={{ background: 'radial-gradient(circle, var(--goxt-primary-200) 0%, transparent 70%)' }}
                    />
                </div>

                <div className="goxt-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: 3D Composition */}
                        <div className="relative perspective-1000 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                                className="relative z-10"
                            >
                                <div className="relative bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden border-[6px] border-white ring-1 ring-slate-900/5">
                                    <Image
                                        src="/assets/DashboardCargo.png"
                                        alt="Dashboard GOxT Cargo"
                                        width={1000}
                                        height={700}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>

                                {/* Floating Element 1: Dashboard Info */}
                                <motion.div
                                    variants={floatingAnimation}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute -right-8 top-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-white/50 max-w-[200px] hidden md:block"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Check className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">Operación Activa</div>
                                            <div className="text-xs text-slate-500">Tiempo Real</div>
                                        </div>
                                    </div>
                                    <div className="text-lg font-bold text-blue-600">Monitoreo Vivo</div>
                                </motion.div>

                                {/* Floating Element 2: Efficiency Graph */}
                                <motion.div
                                    variants={floatingAnimationDelayed}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute -left-12 bottom-20 bg-[var(--goxt-midnight)] p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(15,23,42,0.4)] border border-slate-700 max-w-[220px] hidden md:block"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <Fuel className="w-5 h-5 text-[var(--goxt-primary-100)]" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-medium text-slate-400">Eficiencia Flota</div>
                                            <div className="text-lg font-bold text-white">+24%</div>
                                        </div>
                                    </div>
                                    <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "85%" }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-[var(--goxt-primary-100)]"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Decorative Elements behind image */}
                            <div className="absolute top-10 -right-20 w-72 h-72 bg-[var(--goxt-primary)]/10 rounded-full blur-[60px] -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-[50px] -z-10" />
                        </div>

                        {/* Right Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                                <span className="text-sm font-medium text-slate-600">Control de Flota Inteligente v3.0</span>
                            </div>

                            <h1
                                className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
                                style={{ color: 'var(--goxt-midnight)' }}
                            >
                                Control Total de tu <br />
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-blue-600">Operación</span>
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--goxt-primary-100)] opacity-60 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                                Gestiona vehículos, conductores y rutas con la plataforma líder que <span className="text-[var(--goxt-primary)] font-bold">mueve tu negocio</span>. Eficiencia real en cada kilómetro.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href="https://cargo.goxt.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="goxt-btn-primary text-xl px-10 py-5 shadow-xl shadow-[var(--goxt-primary)]/20 hover:shadow-2xl hover:shadow-[var(--goxt-primary)]/30 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Empezar Ahora
                                </a>
                                <Link
                                    href="/contacto"
                                    className="goxt-btn-secondary text-xl px-10 py-5 bg-white hover:bg-slate-50 border-2"
                                >
                                    Ver Demo
                                </Link>
                            </div>

                            {/* Trust Stats Cards */}
                            <div className="grid grid-cols-2 gap-4 max-w-sm">
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="text-3xl font-bold mb-1 text-blue-600">+24%</div>
                                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Eficiencia Flota</div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="text-3xl font-bold mb-1 text-blue-600">100%</div>
                                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Tracking Vivo</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="goxt-section bg-[var(--goxt-gray-50)]">
                <div className="goxt-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            Funcionalidades <span className="text-blue-600">Principales</span>
                        </h2>
                        <p className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto">
                            Todo lo que necesitas para controlar tu operación logística de
                            principio a fin.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
                                    <feature.Icon className={`w-7 h-7 ${feature.color}`} strokeWidth={1.8} />
                                </div>
                                <h3 className="text-lg font-bold text-[var(--goxt-gray-900)] mb-2" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[var(--goxt-gray-600)]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration with CRM */}
            <section className="goxt-section bg-white">
                <div className="goxt-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1 bg-[var(--goxt-primary-100)] text-[var(--goxt-primary)] rounded-full text-sm font-medium mb-4">
                                Integración
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-6" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                Mejor cuando trabajan <span className="text-blue-600">juntos</span>
                            </h2>
                            <p className="text-lg text-[var(--goxt-gray-600)] mb-6">
                                GOxT Cargo se integra nativamente con GOxT CRM. Las
                                cotizaciones aprobadas se convierten automáticamente en órdenes
                                de transporte.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-[var(--goxt-gray-700)]">
                                        Datos sincronizados: clientes, direcciones, rutas
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-[var(--goxt-gray-700)]">
                                        Sin doble digitación entre ventas y operaciones
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-[var(--goxt-gray-700)]">
                                        Visibilidad completa del cliente al operador
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link href="/productos/crm" className="goxt-btn-primary">
                                    Conocer GOxT CRM →
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 opacity-20 rounded-2xl blur-2xl" />
                            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                                <div className="flex justify-center gap-8 items-center">
                                    {/* Logo CRM */}
                                    <div className="text-center theme-legacy-crm">
                                        <div className="w-20 h-20 mx-auto mb-3 bg-[var(--goxt-cream)] rounded-2xl flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                                                <Image
                                                    src="/assets/Logo_CRM_Blanco.png"
                                                    alt="Logo"
                                                    width={50}
                                                    height={50} />
                                            </div>
                                        </div>
                                        <span className="font-semibold text-[var(--goxt-gray-900)]">
                                            GOxT CRM
                                        </span>
                                    </div>

                                    {/* Símbolo de integración */}
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                {/* Icono de integración/circular */}
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                                {/* Círculo alrededor */}
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="11"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-xs text-white font-bold">✓</span>
                                        </div>
                                    </div>

                                    {/* Logo Cargo */}
                                    <div className="text-center">
                                        <div className="w-20 h-20 mx-auto mb-3 bg-blue-600 rounded-2xl flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                                                <div className="text-2xl font-bold text-orange-600">
                                                    <Image
                                                        src="/assets/Logo_cargo_Blanco.png"
                                                        alt="Logo"
                                                        width={50}
                                                        height={50} />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="font-semibold text-[var(--goxt-gray-900)]">
                                            GOxT Cargo
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg border border-blue-100">
                                    <p className="text-sm text-center text-[var(--goxt-gray-700)] font-medium">
                                        <span className="theme-legacy-crm"><span className="text-[var(--goxt-cream)] font-semibold">Cotización aprobada</span></span>
                                        <span className="mx-2">↔</span>
                                        <span className="text-blue-600 font-semibold">Orden de transporte automática</span>
                                    </p>
                                    <p className="text-xs text-center text-[var(--goxt-gray-500)] mt-1">
                                        Integración perfecta entre plataformas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="goxt-section">
                <div className="goxt-container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-6" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                        ¿Listo para tomar el <span className="text-blue-600">control de tu operación</span>?
                    </h2>
                    <p className="text-lg text-[var(--goxt-gray-600)] mb-8 max-w-2xl mx-auto">
                        Agenda una demo personalizada y descubre cómo GOxT Cargo puede
                        ayudarte a optimizar tu flota.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contacto"
                            className="goxt-btn-primary text-lg px-8 py-4"
                        >
                            Solicitar Demo
                        </Link>
                        <Link
                            href="/productos/crm"
                            className="goxt-btn-secondary text-lg px-8 py-4"
                        >
                            Conocer GOxT CRM →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
