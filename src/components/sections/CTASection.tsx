"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
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
                            <a
                                href="https://crm.goxt.io"
                                className="goxt-btn-primary text-xl px-10 py-5"
                                style={{ background: 'var(--goxt-cream)', color: 'var(--goxt-midnight)' }}
                            >
                                Empieza gratis CRM
                            </a>
                            <Link
                                href="/contacto"
                                className="goxt-btn-secondary text-xl px-10 py-5 border-white text-white hover:bg-white/10"
                                style={{ color: 'white' }}
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
