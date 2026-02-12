"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

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
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-midnight)' }}>
                                No esperes más. Empieza gratis:
                            </h3>
                            <a
                                href="https://crm.goxt.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="goxt-btn-primary flex items-center justify-center gap-4 py-4 px-6 w-full group transform transition-all hover:scale-[1.02]"
                            >
                                <div className="p-1 rounded-md">
                                    <Image
                                        src="/assets/logo_central.png"
                                        alt="GOxT"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <span className="font-bold">GOxT CRM</span>
                            </a>
                        </div>

                        {/* Why choose us */}
                        <div className="bg-[var(--goxt-gray-50)] rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
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
                            src="https://crm.goxt.io/widget?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzY5NjA0NzAwLCJleHAiOjQ5MjMyMDQ3MDB9.cQ9GrwGdJoPO6Qfi3wpt75tP63ZCCV0h7yj1pSRmNi4&flow=9"
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
