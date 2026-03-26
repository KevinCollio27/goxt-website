"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function CTASection() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <section className="goxt-section pt-0" style={{ background: 'var(--goxt-surface-alt)' }}>
            <div className="goxt-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-12 rounded-[2rem] text-center relative overflow-hidden"
                    style={{ background: 'var(--goxt-midnight)' }}
                >
                    {/* Background decorativo sutil */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
                        style={{ background: 'var(--goxt-cream)', filter: 'blur(80px)', borderRadius: '100%' }}
                    />

                    <div className="relative z-10">
                        <h3
                            className="text-2xl md:text-3xl font-bold mb-4"
                            style={{ color: 'white' }}
                        >
                            ¿Sigues estancado en procesos manuales?
                        </h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
                            No pierdas más tiempo navegando entre Excel, CRM y TMS genéricos. Empieza hoy con la solución diseñada para tu éxito operativo.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div
                                className="relative"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button
                                    className="goxt-btn-primary text-xl px-10 py-5 flex items-center gap-2"
                                    style={{ background: 'var(--goxt-cream)', color: 'var(--goxt-midnight)' }}
                                    data-location="CTA Section CRM"
                                >
                                    Empieza gratis
                                    <ChevronDown className={`w-6 h-6 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-20"
                                        >
                                            <div className="p-2">
                                                <a
                                                    href="https://crm.goxt.io"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                                                    data-location="CTA Section Dropdown CRM"
                                                >
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-slate-900 group-hover:text-[var(--goxt-primary)] text-base font-sans">CRM</span>
                                                    </div>
                                                </a>
                                                <a
                                                    href="https://network.goxt.io/register"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                                                    data-location="CTA Section Dropdown TMS"
                                                >
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-slate-900 group-hover:text-[var(--goxt-primary)] text-base font-sans">TMS Network</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <Link
                                href="/contacto"
                                className="goxt-btn-secondary text-xl px-10 py-5 border-white text-white hover:bg-white/10"
                                style={{ color: 'white' }}
                                data-location="CTA Section"
                            >
                                Solicitar Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
