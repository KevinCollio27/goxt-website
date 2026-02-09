"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
        product: "general",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Conectar con api-crm.goxt.io/public/leads
        // Simular envío por ahora
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

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
                            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-midnight)' }}>
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

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                    >
                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8 text-green-600" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-2">
                                    ¡Mensaje enviado!
                                </h3>
                                <p className="text-[var(--goxt-gray-600)] mb-6">
                                    Nos pondremos en contacto contigo pronto.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({
                                            name: "",
                                            email: "",
                                            company: "",
                                            message: "",
                                            product: "general",
                                        });
                                    }}
                                    className="text-[var(--goxt-primary)] font-medium hover:underline"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label
                                            htmlFor="contact-name"
                                            className="block text-sm font-medium text-[var(--goxt-gray-700)] mb-2"
                                        >
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="contact-email"
                                            className="block text-sm font-medium text-[var(--goxt-gray-700)] mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all"
                                            placeholder="tu@empresa.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-company"
                                        className="block text-sm font-medium text-[var(--goxt-gray-700)] mb-2"
                                    >
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all"
                                        placeholder="Nombre de tu empresa"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-product"
                                        className="block text-sm font-medium text-[var(--goxt-gray-700)] mb-2"
                                    >
                                        Producto de interés
                                    </label>
                                    <select
                                        id="contact-product"
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="general">Información general</option>
                                        <option value="crm">GOxT CRM</option>
                                        <option value="cargo">GOxT Cargo</option>
                                        <option value="ambos">Ambos productos</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-message"
                                        className="block text-sm font-medium text-[var(--goxt-gray-700)] mb-2"
                                    >
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Cuéntanos sobre tu empresa y necesidades..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full goxt-btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Enviando...
                                        </span>
                                    ) : (
                                        "Solicitar Demo Gratuita"
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
