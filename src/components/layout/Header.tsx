"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AIChat } from "../ui/AIChat";

const navigation = [
    {
        name: "Inicio",
        href: "/",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke="var(--goxt-cream)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        )
    },
    {
        name: "Chat IA",
        href: "/chat-ia",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke="var(--goxt-cream)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
            </svg>
        )
    },
    {
        name: "Contacto",
        href: "/contacto",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    stroke="var(--goxt-cream)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        )
    },
];

export function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <>
            {/* Botón de toggle fijo*/}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed top-6 left-6 z-50 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-100"
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {sidebarOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Overlay oscuro cuando el sidebar está abierto */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar lateral izquierdo */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: -320 }}
                        animate={{ x: 0 }}
                        exit={{ x: -320 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
                    >
                        {/* Header del Sidebar */}
                        <div className="p-6 border-b border-gray-100">
                            <Link
                                href="/"
                                className="flex items-center justify-center"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <Image
                                    src="/assets/Logo-FondoBlanco.png"
                                    alt="GOxT - Moving Forward"
                                    width={200}
                                    height={55}
                                    className="h-12 md:h-14 w-auto"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Navegación vertical */}
                        <nav className="p-4 space-y-2">
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setSidebarOpen(false)}
                                        className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[var(--goxt-primary)] transition-all duration-300 group"
                                    >
                                        <span className="text-2xl group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </span>
                                        <span className="font-semibold text-lg">
                                            {item.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Separador */}
                        <div className="mx-4 my-6 border-t border-gray-200" />

                        {/* Botones de acción */}
                        <div className="px-4 space-y-3">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => {
                                    setSidebarOpen(false);
                                    setChatOpen(true);
                                }}
                                className="w-full px-6 py-3 border-2 border-[var(--goxt-primary)] text-[var(--goxt-primary)] rounded-full font-semibold hover:bg-[var(--goxt-primary)] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
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
                                ChatBot IA
                            </motion.button>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/contacto"
                                    onClick={() => setSidebarOpen(false)}
                                    className="block w-full goxt-btn-primary text-center"
                                >
                                    Solicitar Demo
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="https://crm.goxt.io"
                                    target="_blank"
                                    onClick={() => setSidebarOpen(false)}
                                    className="block w-full px-6 py-3 text-center text-gray-700 font-medium hover:text-[var(--goxt-primary)] transition-colors"
                                >
                                    Iniciar Sesión
                                </Link>
                            </motion.div>
                        </div>

                        {/* Footer del sidebar */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
                            <p className="text-sm text-gray-500 text-center">
                                © 2026 GOxT - Moving Forward
                            </p>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* AI Chat */}
            <AIChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
        </>
    );
}