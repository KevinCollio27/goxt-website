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
const features_comparison = [
    {
        feature: "Gestión Integral de Flota",
        goxt: "✅ Completo",
        platformA: "❌ Limitado",
        platformB: "⚠️ Parcial",
    },
    {
        feature: "Integración con CRM",
        goxt: "✅ Nativa (GOxT)",
        platformA: "❌ No disponible",
        platformB: "⚠️ API adicional",
    },
    {
        feature: "Tracking en Tiempo Real",
        goxt: "✅ GPS + Geocercas",
        platformA: "✅ Solo GPS",
        platformB: "❌ No incluido",
    },
    {
        feature: "Control de Combustible",
        goxt: "✅ Análisis avanzado",
        platformA: "❌ No disponible",
        platformB: "⚠️ Básico",
    },
    {
        feature: "Mantenimiento Programado",
        goxt: "✅ Preventivo + Correctivo",
        platformA: "❌ No disponible",
        platformB: "⚠️ Solo preventivo",
    },
    {
        feature: "Documentación Digital",
        goxt: "✅ Guías, manifiestos",
        platformA: "❌ No disponible",
        platformB: "⚠️ Limitado",
    },
    {
        feature: "Reportes Personalizados",
        goxt: "✅ KPIs + Dashboards",
        platformA: "⚠️ Básicos",
        platformB: "✅ Complejos",
    },
    {
        feature: "Soporte 24/7",
        goxt: "✅ Incluido",
        platformA: "⚠️ Horario laboral",
        platformB: "⚠️ Horario laboral",
    },
]

export default function CargoPage() {
    return (
        <div className="pt-24">
            {/* <ConnectingLines /> */}

            {/* Hero */}
            <section className="py-20">
                <div className="goxt-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="text-6xl">🚛</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--goxt-gray-900)]" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                GOxT: <span className="goxt-gradient-accent-text">CARGO</span>
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl font-medium text-[var(--goxt-primary)] mb-4">
                            Control total de tu flota y operaciones logísticas
                        </p>
                        <p className="text-lg text-[var(--goxt-gray-600)] mb-8 max-w-2xl mx-auto">
                            Sistema operativo para transporte terrestre y marítimo. Gestiona
                            flotas, rutas, conductores y toda tu operación en una sola
                            plataforma.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contacto" className="goxt-btn-primary text-lg px-8 py-4">
                                Solicitar Demo
                            </Link>
                            <a
                                href="https://cargo.goxt.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="goxt-btn-secondary text-lg px-8 py-4"
                            >
                                Iniciar Sesión
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshot con animaciones flotantes */}
            <section className="py-16 bg-white">
                <div className="goxt-container">
                    <div className="relative max-w-5xl mx-auto">
                        {/* Fondo con blur */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 opacity-20 rounded-2xl blur-2xl" />
                        <motion.div
                            variants={floatingAnimation}
                            initial="initial"
                            animate="animate"
                            className="absolute -left-12 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-white/50 max-w-[200px] z-30 hidden lg:block"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-800">Dashboard</div>
                                </div>
                            </div>
                            <div className="text-lg font-bold text-green-600">Tiempo Real</div>
                            <div className="text-xs text-slate-500">Monitoreo en vivo</div>
                        </motion.div>
                        <motion.div
                            variants={floatingAnimationDelayed}
                            initial="initial"
                            animate="animate"
                            className="absolute -right-12 bottom-1/4 bg-[var(--goxt-midnight)] p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(15,23,42,0.4)] border border-slate-700 max-w-[220px] z-30 hidden lg:block"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Fuel className="w-5 h-5 text-[var(--goxt-cream)]" />
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
                                    className="h-full bg-[var(--goxt-cream)]"
                                />
                            </div>
                        </motion.div>

                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-20">
                            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-400 border border-gray-200">
                                        cargo.goxt.io
                                    </div>
                                </div>
                            </div>
                            <div className="aspect-video relative">
                                <Image
                                    src="/assets/DashboardCargo.png"
                                    alt="Dashboard GOxT Cargo - Mapa de tracking en tiempo real"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="goxt-section bg-[var(--goxt-gray-50)]">
                <div className="goxt-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            Funcionalidades <span className="goxt-gradient-accent-text">Principales</span>
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
            {/* Comparison Section */}
            <section className="goxt-section bg-[var(--goxt-gray-50)]">
                <div className="goxt-container">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 bg-[var(--goxt-primary-100)] text-[var(--goxt-primary)] rounded-full text-sm font-medium mb-4">
                            Por qué elegir GOxT Cargo
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--goxt-gray-900)] mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            Comparativa <span className="goxt-gradient-accent-text">Competitiva</span>
                        </h2>
                        <p className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto">
                            Descubre por qué GOxT Cargo es la solución más completa para la gestión de flotas
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-[900px]">
                            {/* Header */}
                            <div className="grid grid-cols-4 gap-4 mb-6">
                                <div className="p-4">
                                    <h3 className="font-bold text-[var(--goxt-gray-900)] text-lg">Característica</h3>
                                </div>
                                <div className="p-4 bg-white rounded-xl text-center shadow-sm">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <span className="text-2xl">🚛</span>
                                    </div>
                                    <h3 className="font-bold text-[var(--goxt-primary)]">GOxT Cargo</h3>
                                    <p className="text-sm text-[var(--goxt-gray-600)] mt-1">Solución integral</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl text-center shadow-sm">
                                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <span className="text-2xl">📱</span>
                                    </div>
                                    <h3 className="font-bold text-[var(--goxt-gray-700)]">Samsara</h3>
                                    <p className="text-sm text-[var(--goxt-gray-600)] mt-1">Solo tracking</p>
                                </div>
                                <div className="p-4 bg-white rounded-xl text-center shadow-sm">
                                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                                        <span className="text-2xl">💼</span>
                                    </div>
                                    <h3 className="font-bold text-[var(--goxt-gray-700)]">Oracle Logistics</h3>
                                    <p className="text-sm text-[var(--goxt-gray-600)] mt-1">ERP general</p>
                                </div>
                            </div>

                            {/* Comparison Rows */}
                            <div className="space-y-3">
                                {features_comparison.map((row, index) => (
                                    <div key={index} className="grid grid-cols-4 gap-4 p-4 bg-white rounded-xl hover:shadow-sm transition-shadow">
                                        <div className="flex items-center">
                                            <span className="font-medium text-[var(--goxt-gray-800)]">{row.feature}</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <span className={`font-bold ${row.goxt.includes('✅') ? 'text-green-600' : row.goxt.includes('$') ? 'text-[var(--goxt-primary)]' : 'text-[var(--goxt-gray-700)]'}`}>
                                                {row.goxt}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <span className={`font-medium ${row.platformA.includes('❌') ? 'text-red-500' : row.platformA.includes('⚠️') ? 'text-amber-500' : 'text-[var(--goxt-gray-600)]'}`}>
                                                {row.platformA}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <span className={`font-medium ${row.platformB.includes('❌') ? 'text-red-500' : row.platformB.includes('⚠️') ? 'text-amber-500' : 'text-[var(--goxt-gray-600)]'}`}>
                                                {row.platformB}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Value Proposition */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-[var(--goxt-primary-100)] to-blue-50 rounded-2xl border border-[var(--goxt-primary-200)]">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                            <span className="text-2xl">🏆</span>
                                        </div>
                                        <h4 className="font-bold text-[var(--goxt-gray-900)] mb-2">Mejor ROI</h4>
                                        <p className="text-sm text-[var(--goxt-gray-600)]">
                                            Más funciones por menor costo que soluciones empresariales
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                            <span className="text-2xl">⚡</span>
                                        </div>
                                        <h4 className="font-bold text-[var(--goxt-gray-900)] mb-2">Implementación Rápida</h4>
                                        <p className="text-sm text-[var(--goxt-gray-600)]">
                                            Operativo en días, no meses. Sin configuración compleja
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                            <span className="text-2xl">🔗</span>
                                        </div>
                                        <h4 className="font-bold text-[var(--goxt-gray-900)] mb-2">Ecosistema Integrado</h4>
                                        <p className="text-sm text-[var(--goxt-gray-600)]">
                                            CRM + Cargo + Finanzas en una sola plataforma
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 text-center">
                                <p className="text-lg text-[var(--goxt-gray-700)] mb-6">
                                    ¿No estás seguro si GOxT Cargo es para ti?
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link
                                        href="/contacto"
                                        className="goxt-btn-primary px-8 py-3"
                                    >
                                        Agenda una demo para demostrarlo 🫱🏻‍🫲🏼
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                                Mejor cuando trabajan <span className="goxt-gradient-accent-text">juntos</span>
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
                                    <div className="text-center">
                                        <span className="text-6xl block mb-2">🎯</span>
                                        <span className="font-semibold text-[var(--goxt-gray-900)]">
                                            CRM
                                        </span>
                                    </div>
                                    <svg
                                        className="w-8 h-8 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                    <div className="text-center">
                                        <span className="text-6xl block mb-2">🚛</span>
                                        <span className="font-semibold text-[var(--goxt-gray-900)]">
                                            Cargo
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-center text-[var(--goxt-gray-600)]">
                                        Cotización aprobada → Orden de transporte automática
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
                        ¿Listo para tomar el <span className="goxt-gradient-accent-text">control de tu operación</span>?
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
