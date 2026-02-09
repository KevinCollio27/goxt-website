"use client";

import { motion } from "framer-motion";
import { Zap, Link as LinkIcon, BarChart3, Settings2, Sparkles } from "lucide-react";
import Image from "next/image";

interface Reason {
    icon: React.ReactNode;
    title: string;
    tag: string;
    description: string;
    delay: number;
}

const reasons: Reason[] = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Cotizaciones en",
        tag: "Minutos",
        description: "Configura tus productos una vez y genera cotizaciones profesionales en segundos. Responde antes que la competencia.",
        delay: 0.1
    },
    {
        icon: <LinkIcon className="w-6 h-6" />,
        title: "Conectado a tu",
        tag: "Operación",
        description: "Integración nativa entre ventas y operaciones. De la cotización al viaje, sin doble digitación.",
        delay: 0.2
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Inteligente",
        tag: "Pipeline Visual",
        description: "Tablero Kanban para visualizar todo tu embudo de ventas. Nunca pierdas de vista una oportunidad.",
        delay: 0.3
    },
    {
        icon: <Settings2 className="w-6 h-6" />,
        title: "100%",
        tag: "Personalizable",
        description: "Crea productos con los campos exactos que necesitas. Sin desarrolladores, sin esperas, sin código.",
        delay: 0.4
    }
];

export function BenefitsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Tech Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#011627 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex justify-center items-center gap-4 mb-6"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold flex items-center gap-3"
                            style={{ color: 'var(--goxt-midnight)' }}
                        >
                            ¿Por qué elegir a
                            <div className="relative inline-flex items-center px-4 py-1 border-2 rounded-full group" style={{ borderColor: 'var(--goxt-accent)' }}>
                                <Image
                                    src="/assets/Logo_FondoBlanco.png"
                                    alt="GOXT"
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain"
                                />
                                <div className="absolute -inset-1 opacity-10 blur-sm rounded-full group-hover:opacity-25 transition-opacity" style={{ backgroundColor: 'var(--goxt-accent)' }}></div>
                            </div>
                            ?
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-lg md:text-xl text-slate-600 font-medium"
                    >
                        Diseñado específicamente para empresas de transporte y logística.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600"
                    >
                        Resolvemos los problemas que <span className="px-2 rounded font-bold" style={{ backgroundColor: 'rgba(0, 181, 216, 0.2)', color: 'var(--goxt-accent-dark)' }}>otras solcuiones tecnológicas</span> no entienden.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: reason.delay, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            style={{
                                boxShadow: '0 20px 25px -5px rgb(203 213 225 / 0.5)' // approximating shadow-slate-200/50
                            }}
                        >
                            {/* Animated Corner Accent */}
                            <div
                                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(to bottom left, rgba(0, 181, 216, 0.1), transparent)'
                                }}
                            ></div>

                            {/* Icon Core */}
                            <div className="relative mb-10">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg"
                                    style={{
                                        backgroundColor: 'var(--goxt-midnight)',
                                        color: 'var(--goxt-accent)',
                                        boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.2)' // shadow-blue-900/20
                                    }}
                                >
                                    {reason.icon}
                                </div>
                                {/* Radial Glow */}
                                <div
                                    className="absolute inset-0 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundColor: 'rgba(0, 181, 216, 0.2)' }}
                                ></div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-4">
                                <h3
                                    className="text-2xl font-bold leading-tight"
                                    style={{ color: 'var(--goxt-midnight)' }}
                                >
                                    {reason.title} <br />
                                    <span className="italic font-medium" style={{ color: 'var(--goxt-accent)' }}>{reason.tag}</span>
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>

                            {/* Bottom Interactive Bar */}
                            <div
                                className="mt-8 h-1 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                                style={{ backgroundColor: 'var(--goxt-accent)' }}
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}