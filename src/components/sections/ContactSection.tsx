"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Check } from "lucide-react";

export function ContactSection() {
    return (
        <section className="goxt-section bg-[var(--goxt-gray-50)]">
            <div className="goxt-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        ¿Listo para <span className="goxt-gradient-accent-text">transformar</span> tu operación?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[var(--goxt-gray-600)] max-w-2xl mx-auto"
                    >
                        Agenda una demo personalizada y descubre cómo GOxT puede ayudarte
                        a gestionar mejor tus clientes y operaciones.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-[var(--goxt-gray-50)] rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-6" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                Información de contacto
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-[var(--goxt-gray-700)]">
                                    <div className="w-10 h-10 bg-[var(--goxt-accent)]/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-[var(--goxt-accent)]" strokeWidth={1.5} />
                                    </div>
                                    <a
                                        href="mailto:contacto@goxt.io"
                                        className="hover:text-[var(--goxt-accent)] transition-colors"
                                    >
                                        contacto@goxt.io
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-[var(--goxt-gray-700)]">
                                    <div className="w-10 h-10 bg-[var(--goxt-accent)]/10 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-[var(--goxt-accent)]" strokeWidth={1.5} />
                                    </div>
                                    <span>Santiago, Chile</span>
                                </div>
                            </div>
                        </div>

                        {/* Why choose us */}
                        <div className="bg-[var(--goxt-gray-50)] rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                ¿Por qué agendar una demo?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-[var(--goxt-gray-600)]">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                                    <span>Conoce todas las funcionalidades en vivo</span>
                                </li>
                                <li className="flex items-start gap-3 text-[var(--goxt-gray-600)]">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                                    <span>Resuelve tus dudas con nuestro equipo</span>
                                </li>
                                <li className="flex items-start gap-3 text-[var(--goxt-gray-600)]">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                                    <span>Sin compromiso, totalmente gratuita</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form - Iframe CRM Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="overflow-hidden"
                    >
                        <iframe
                            src="https://dev.goxt.io/widget?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsImlhdCI6MTc2OTYzNTM0NywiZXhwIjo0OTIzMjM1MzQ3fQ.lv7_oKXdg8-UusHL6psoxyq3YcVKlbyB3CmxULjcc1A&flow=22"
                            width="100%"
                            height="650"
                            style={{ border: 0 }}
                            title="Formulario de Contacto GOxT CRM"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
