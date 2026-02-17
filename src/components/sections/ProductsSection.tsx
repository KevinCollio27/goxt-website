"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    href: string;
    appUrl: string;
    features: string[];
    screenshot: string;
}

const products: Product[] = [
    {
        id: "crm",
        name: "CRM",
        tagline: "De leads a clientes: gestiona todo tu negocio en un solo lugar.",
        description:
            "El CRM que habla el idioma de tu operación. Cotizaciones en minutos, seguimiento visual de oportunidades e integración con tu sistema operativo.",
        href: "/productos/crm",
        appUrl: "https://crm.goxt.io",
        features: [
            "Pipeline interactivo Kanban",
            "Cotizaciones dinámicas",
            "Productos 100% configurables",
            "Integración con TMS Cargo",
            "Reportes y dashboards",
            "Multi-workspace",
        ],
        screenshot: "/assets/LoginCRM.png",
    },
    {
        id: "cargo",
        name: "TMS CARGO",
        tagline: "Control total de tu flota y operaciones logísticas",
        description:
            "Sistema operativo para transporte terrestre y marítimo. Gestiona flotas, rutas, conductores y toda tu operación en una sola plataforma.",
        href: "/productos/cargo",
        appUrl: "https://cargo.goxt.io",
        features: [
            "Gestión de flotas",
            "Tracking GPS en tiempo real",
            "Órdenes de transporte",
            "Alertas automatizadas",
            "APP Móvil para comprobación de entregas",
            "Gestión de documentación digital",
        ],
        screenshot: "/assets/LoginCARGO.png",
    },
];

export function ProductsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const currentProduct = products[currentIndex];

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="goxt-section" style={{ background: 'var(--goxt-surface-light)' }}>
            <div className="goxt-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6"
                        style={{
                            background: 'var(--goxt-surface-card)',
                            color: 'var(--goxt-primary)',
                            border: '1px solid var(--goxt-gray-200)',
                        }}
                    >
                        Nuestros Productos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{
                            fontFamily: "var(--font-handwritten), cursive",
                            color: 'var(--text-primary)'
                        }}
                    >
                        <span className="goxt-gradient-accent-text">Soluciones</span> diseñadas para tu operación
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl max-w-3xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Dos productos potentes que trabajan mejor juntos. Desde la
                        captación del cliente hasta la operación final.
                    </motion.p>
                </div>

                {/* Carousel Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-7xl mx-auto"
                >
                    {/* Main Card Container */}
                    <div
                        className="bg-white rounded-3xl overflow-hidden"
                        style={{
                            boxShadow: 'var(--goxt-shadow-xl)',
                        }}
                    >
                        <div className="grid lg:grid-cols-2">
                            {/* Left Column - Content */}
                            <div className="p-8 md:p-12 flex flex-col justify-between">
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    <motion.div
                                        key={currentProduct.id}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                                    >
                                        {/* Icon + Title */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    background: 'var(--goxt-midnight)',
                                                    color: 'var(--goxt-cream)'
                                                }}
                                            >
                                                <Image src="/assets/logo_central.png" alt="GOxT" width={40} height={40} />
                                            </div>
                                            <h3
                                                className="text-3xl md:text-4xl font-bold flex items-center gap-2"
                                                style={{
                                                    fontFamily: "var(--font-handwritten), cursive",
                                                    color: 'var(--text-primary)'
                                                }}
                                            >
                                                <Image
                                                    src="/assets/Logo_FondoBlanco.png"
                                                    alt="GOxT"
                                                    width={100}
                                                    height={30}
                                                    className="object-contain"
                                                />
                                                <span className="mb-1">:</span>
                                                <span className="goxt-gradient-accent-text">{currentProduct.name}</span>
                                            </h3>
                                        </div>

                                        {/* Tagline */}
                                        <p
                                            className="text-xl font-semibold mb-4"
                                            style={{ color: 'var(--goxt-primary)' }}
                                        >
                                            {currentProduct.tagline}
                                        </p>

                                        {/* Description */}
                                        <p
                                            className="text-base mb-8 leading-relaxed"
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            {currentProduct.description}
                                        </p>

                                        {/* Features grid */}
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            {currentProduct.features.map((feature, idx) => (
                                                <motion.div
                                                    key={feature}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                        style={{
                                                            background: 'var(--goxt-midnight)',
                                                            color: 'var(--goxt-cream)'
                                                        }}
                                                    >
                                                        <Check className="w-4 h-4" strokeWidth={3} />
                                                    </div>
                                                    <span
                                                        className="text-sm font-medium"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-wrap gap-4">
                                            {currentProduct.id === "crm" && (
                                                <a
                                                    href={currentProduct.appUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="goxt-btn-primary"
                                                >
                                                    Empieza gratis
                                                </a>
                                            )}
                                            <Link
                                                href="/contacto"
                                                className={currentProduct.id === "crm" ? "goxt-btn-secondary" : "goxt-btn-primary"}
                                            >
                                                Solicitar Demo
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Right Column - Screenshot */}
                            <div
                                className="relative p-8 md:p-12 flex items-center justify-center"
                                style={{
                                    background: 'var(--goxt-surface-light)',
                                }}
                            >
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    <motion.div
                                        key={currentProduct.id}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                                        className="w-full"
                                    >
                                        {/* Browser mockup */}
                                        <div
                                            className="relative bg-white rounded-2xl overflow-hidden"
                                            style={{
                                                boxShadow: 'var(--goxt-shadow-lg)',
                                            }}
                                        >
                                            {/* Browser header */}
                                            <div
                                                className="flex items-center gap-2 px-4 py-3 border-b"
                                                style={{
                                                    background: 'var(--goxt-gray-50)',
                                                    borderColor: 'var(--goxt-gray-200)'
                                                }}
                                            >
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                                </div>
                                                <div className="flex-1 mx-3">
                                                    <div
                                                        className="bg-white rounded-lg px-3 py-1.5 text-xs border"
                                                        style={{
                                                            color: 'var(--text-muted)',
                                                            borderColor: 'var(--goxt-gray-200)'
                                                        }}
                                                    >
                                                        {currentProduct.appUrl.replace("https://", "")}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Screenshot */}
                                            <div className="relative w-full bg-white">
                                                <Image
                                                    src={currentProduct.screenshot}
                                                    alt={`Screenshot de GOxT ${currentProduct.name}`}
                                                    width={600}
                                                    height={450}
                                                    className="w-full h-auto object-contain"
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hidden lg:flex"
                        style={{
                            background: 'var(--goxt-midnight)',
                            color: 'var(--goxt-cream)',
                            boxShadow: 'var(--goxt-shadow-lg)',
                        }}
                        aria-label="Producto anterior"
                    >
                        <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hidden lg:flex"
                        style={{
                            background: 'var(--goxt-midnight)',
                            color: 'var(--goxt-cream)',
                            boxShadow: 'var(--goxt-shadow-lg)',
                        }}
                        aria-label="Producto siguiente"
                    >
                        <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
                    </button>

                    {/* Dots Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className="transition-all duration-300"
                                style={{
                                    width: currentIndex === index ? '32px' : '10px',
                                    height: '10px',
                                    borderRadius: '999px',
                                    background: currentIndex === index
                                        ? 'var(--goxt-midnight)'
                                        : 'var(--goxt-gray-300)',
                                }}
                                aria-label={`Ir a ${products[index].name}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
