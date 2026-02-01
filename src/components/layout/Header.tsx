"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AIChat } from "../ui/AIChat";

const navigation = [
    { name: "Inicio", href: "/" },
    {
        name: "Productos",
        href: "/productos",
        submenu: [
            {
                name: "GOxT CRM",
                href: "/productos/crm",
                description: "Gestión comercial y cotizaciones",
                icon: "🎯",
            },
            {
                name: "GOxT Cargo",
                href: "/productos/cargo",
                description: "Control de flotas y operaciones",
                icon: "🚛",
            },
        ],
    },
    { name: "Precios", href: "/precios" },
    { name: "Blog", href: "/blog" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 goxt-glass">
            <nav className="goxt-container flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/Logo.png"
                        alt="GOxT - Moving Forward"
                        width={160}
                        height={54}
                        className="h-12 md:h-14 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                        >
                            <Link
                                href={item.href}
                                className="text-gray-700 hover:text-[var(--goxt-primary)] transition-colors font-medium flex items-center gap-1"
                            >
                                {item.name}
                                {item.submenu && (
                                    <svg
                                        className={`w-4 h-4 transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </Link>

                            {/* Submenu */}
                            <AnimatePresence>
                                {item.submenu && activeSubmenu === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                                    >
                                        <div className="p-2">
                                            {item.submenu.map((subitem) => (
                                                <Link
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                                >
                                                    <span className="text-2xl">{subitem.icon}</span>
                                                    <div>
                                                        <div className="font-semibold text-gray-900 group-hover:text-[var(--goxt-primary)]">
                                                            {subitem.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {subitem.description}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        onClick={() => setChatOpen(true)}
                        className="px-6 py-2.5 border-2 border-[var(--goxt-primary)] text-[var(--goxt-primary)] rounded-full font-semibold hover:bg-[var(--goxt-primary)] hover:text-white transition-all duration-300"
                    >
                        Chat IA
                    </button>
                    <Link href="/contacto" className="goxt-btn-primary">
                        Solicitar Demo
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="lg:hidden p-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="sr-only">Abrir menú</span>
                    {mobileMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100"
                    >
                        <div className="goxt-container py-4 space-y-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="block py-3 text-gray-700 hover:text-[var(--goxt-primary)] font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.submenu && (
                                        <div className="pl-4 space-y-2">
                                            {item.submenu.map((subitem) => (
                                                <Link
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-[var(--goxt-primary)]"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <span>{subitem.icon}</span>
                                                    <span>{subitem.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 space-y-3 border-t border-gray-100">
                                <Link
                                    href="https://crm.goxt.io"
                                    target="_blank"
                                    className="block py-3 text-center text-gray-700 font-medium"
                                >
                                    Iniciar Sesión
                                </Link>
                                {/* Botón de Chat IA en móvil - AGREGADO */}
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setChatOpen(true);
                                    }}
                                    className="block w-full py-3 px-4 border-2 border-[var(--goxt-primary)] text-[var(--goxt-primary)] rounded-full font-semibold hover:bg-[var(--goxt-primary)] hover:text-white transition-all duration-300 text-center"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                        </svg>
                                        <span>Chat IA</span>
                                    </div>
                                </button>
                                <Link
                                    href="/contacto"
                                    className="block goxt-btn-accent text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Solicitar Demo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI Chat */}
            <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
        </header>
    );
}
