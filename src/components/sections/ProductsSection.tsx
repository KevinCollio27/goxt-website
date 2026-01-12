"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Truck, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    href: string;
    appUrl: string;
    Icon: LucideIcon;
    iconColor: string;
    iconBg: string;
    gradient: string;
    features: string[];
    screenshot: string;
}

const products: Product[] = [
    {
        id: "crm",
        name: "GOxT CRM",
        tagline: "De leads a clientes: gestiona todo el ciclo de ventas",
        description:
            "El CRM que habla el idioma de tu operación. Cotizaciones en minutos, seguimiento visual de oportunidades e integración con tu sistema operativo.",
        href: "/productos/crm",
        appUrl: "https://crm.goxt.io",
        Icon: Target,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-100",
        gradient: "from-blue-500 to-blue-700",
        features: [
            "Pipeline visual Kanban",
            "Cotizaciones dinámicas",
            "Productos 100% configurables",
            "Integración con Cargo",
            "Reportes y dashboards",
            "Multi-workspace",
        ],
        screenshot: "/screenshots/crm-kanban.png",
    },
    {
        id: "cargo",
        name: "GOxT Cargo",
        tagline: "Control total de tu flota y operaciones logísticas",
        description:
            "Sistema operativo para transporte terrestre y marítimo. Gestiona flotas, rutas, conductores y toda tu operación en una sola plataforma.",
        href: "/productos/cargo",
        appUrl: "https://cargo.goxt.io",
        Icon: Truck,
        iconColor: "text-orange-600",
        iconBg: "bg-orange-100",
        gradient: "from-orange-500 to-orange-700",
        features: [
            "Gestión de flotas",
            "Tracking GPS en tiempo real",
            "Órdenes de transporte",
            "Control de combustible",
            "Mantenimiento programado",
            "Documentación digital",
        ],
        screenshot: "/screenshots/cargo-map.png",
    },
];

export function ProductsSection() {
    return (
        <section className="goxt-section bg-[var(--goxt-gray-50)]">
            <div className="goxt-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 bg-[var(--goxt-primary-100)] text-[var(--goxt-primary)] rounded-full text-sm font-medium mb-4"
                    >
                        Nuestros Productos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-[var(--goxt-primary)]"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        <span className="goxt-gradient-accent-text font-bold">Soluciones</span> diseñadas para tu operación
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto"
                    >
                        Dos productos potentes que trabajan mejor juntos. Desde la
                        captación del cliente hasta la operación final.
                    </motion.p>
                </div>

                {/* Products */}
                <div className="space-y-24">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Content - va a la derecha en índice impar */}
                            <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 ${product.iconBg} rounded-xl flex items-center justify-center`}>
                                        <product.Icon className={`w-6 h-6 ${product.iconColor}`} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--goxt-gray-900)]">
                                        {product.name}
                                    </h3>
                                </div>
                                <p className="text-lg font-medium text-[var(--goxt-primary)] mb-4">
                                    {product.tagline}
                                </p>
                                <p className="text-[var(--goxt-gray-600)] mb-6">
                                    {product.description}
                                </p>

                                {/* Features grid */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {product.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-2 text-sm text-[var(--goxt-gray-700)]"
                                        >
                                            <Check
                                                className="w-5 h-5 text-green-500 flex-shrink-0"
                                                strokeWidth={2}
                                            />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={product.href}
                                        className="goxt-btn-primary"
                                    >
                                        Conocer más
                                    </Link>
                                    <a
                                        href={product.appUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="goxt-btn-secondary"
                                    >
                                        Ir a {product.name.split(" ")[1]}
                                    </a>
                                </div>
                            </div>

                            {/* Screenshot/Visual - va a la izquierda en índice impar */}
                            <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                                <div className="relative">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 rounded-2xl blur-2xl`}
                                    />
                                    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                        {/* Browser mockup header */}
                                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                            </div>
                                            <div className="flex-1 mx-4">
                                                <div className="bg-white rounded px-3 py-1 text-xs text-gray-400 border border-gray-200">
                                                    {product.appUrl.replace("https://", "")}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Screenshot placeholder */}
                                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className={`w-20 h-20 ${product.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                                    <product.Icon className={`w-10 h-10 ${product.iconColor}`} strokeWidth={1.5} />
                                                </div>
                                                <span className="text-gray-400 text-sm">
                                                    Screenshot de {product.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
