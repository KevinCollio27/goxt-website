"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BarChart3,
    Users,
    FileText,
    Truck,
    Map,
    ShieldCheck,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ProductType = "crm" | "cargo";

const products = {
    crm: {
        id: "crm",
        name: "CRM",
        title: "Gestión Comercial Inteligente",
        tagline: "De leads a clientes leales: domina tu ciclo de ventas.",
        description: "GOxT CRM no es solo una base de datos, es tu copiloto comercial. Diseñado para equipos de alto rendimiento que necesitan velocidad y claridad.",
        features: [
            {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Pipeline Visual",
                desc: "Visualiza tus oportunidades en un tablero Kanban intuitivo. Arrastra, suelta y cierra tratos."
            },
            {
                icon: <FileText className="w-6 h-6" />,
                title: "Cotizaciones Rápidas",
                desc: "Genera propuestas profesionales en segundos, no horas. Plantillas personalizables y envío automático."
            },
            {
                icon: <Users className="w-6 h-6" />,
                title: "Seguimiento 360°",
                desc: "Todo el historial de tus clientes en un solo lugar. Llamadas, correos y notas al alcance de un clic."
            }
        ],
        color: "from-goxt-accent to-goxt-accent-dark",
        accent: "text-goxt-accent-dark",
        bgAccent: "bg-goxt-accent/10",
        href: "/productos/crm",
        image: "/assets/DashboardCRM.png"
    },
    cargo: {
        id: "cargo",
        name: "CARGO",
        title: "Control Total de Logística",
        tagline: "Tu flota, tus rutas y tu operación bajo control absoluto.",
        description: "GOxT Cargo es el sistema operativo para el transporte moderno. Optimiza cada kilometro y maximiza la rentabilidad de tu flota.",
        features: [
            {
                icon: <Truck className="w-6 h-6" />,
                title: "Gestión de Flotas",
                desc: "Hoja de vida de cada vehículo. Mantenimientos, seguros y documentación siempre al día."
            },
            {
                icon: <Map className="w-6 h-6" />,
                title: "Rutas Eficientes",
                desc: "Planificación inteligente de rutas para reducir combustible y mejorar tiempos de entrega."
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Seguridad y Control",
                desc: "Monitoreo de conductores y alertas preventivas para una operación más segura."
            }
        ],
        color: "from-blue-600 to-indigo-700",
        accent: "text-blue-600",
        bgAccent: "bg-blue-50",
        href: "/productos/cargo",
        image: "/assets/DashboardCargo.png"
    }
};

export default function ProductCarousel() {
    const [activeTab, setActiveTab] = useState<ProductType>("crm");

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* Tabs Switcher */}
            <div className="flex justify-center mb-16">
                <div className="bg-white p-1.5 rounded-full shadow-lg border border-gray-100 inline-flex relative">
                    <motion.div
                        className="absolute top-1.5 bottom-1.5 rounded-full bg-[var(--goxt-primary)] z-0"
                        initial={false}
                        animate={{
                            left: activeTab === "crm" ? "6px" : "50%",
                            width: "calc(50% - 9px)",
                            x: activeTab === "cargo" ? "3px" : "0px"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />

                    <button
                        onClick={() => setActiveTab("crm")}
                        className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-colors duration-200 flex items-center gap-2 ${activeTab === "crm" ? "text-white" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        <Users className="w-4 h-4" />
                        GOXT CRM
                    </button>

                    <button
                        onClick={() => setActiveTab("cargo")}
                        className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-colors duration-200 flex items-center gap-2 ${activeTab === "cargo" ? "text-white" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        <Truck className="w-4 h-4" />
                        GOXT CARGO
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="relative min-h-[600px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Left Column: Text Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${products[activeTab].bgAccent} ${products[activeTab].accent}`}
                                >
                                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                    Producto Destacado
                                </motion.div>

                                <motion.h2
                                    className="text-4xl md:text-5xl font-bold text-[var(--goxt-primary)]"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {products[activeTab].title}
                                </motion.h2>

                                <p className="text-xl text-gray-600 font-light leading-relaxed">
                                    {products[activeTab].tagline}
                                </p>

                                <p className="text-gray-500">
                                    {products[activeTab].description}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="grid gap-6">
                                {products[activeTab].features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                                    >
                                        <div className={`p-3 rounded-lg ${products[activeTab].bgAccent} ${products[activeTab].accent}`}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                            <p className="text-sm text-gray-500">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="pt-4"
                            >
                                <Link
                                    href={products[activeTab].href}
                                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-r ${products[activeTab].color}`}
                                >
                                    Explorar {products[activeTab].name}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Column: Visual/Mockup */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 overflow-hidden min-h-[500px] flex flex-col justify-between"
                            >
                                {/* Decorative Background Elements */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${products[activeTab].color} opacity-10 rounded-bl-full -mr-16 -mt-16`} />
                                <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${products[activeTab].color} opacity-10 rounded-tr-full -ml-12 -mb-12`} />

                                <div className="relative z-10 w-full flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                        <div className="text-xs font-mono text-gray-400">{activeTab === 'crm' ? 'crm.goxt.io' : 'cargo.goxt.io'}</div>
                                    </div>

                                    {/* Product Image */}
                                    <div className="relative flex-1 w-full min-h-[300px] rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
                                        <Image
                                            src={products[activeTab].image}
                                            alt={products[activeTab].name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 flex items-center gap-3"
                            >
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Estado</p>
                                    <p className="text-sm font-bold text-gray-900">100% Operativo</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
