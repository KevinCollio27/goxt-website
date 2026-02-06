"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import UnderlinedText from "@/components/ui/UnderlinedText";
import Image from "next/image";

interface ComparisonItem {
    feature: string;
    goxt: boolean | string;
    genericCrm: boolean | string;
    excel: boolean | string;
    explanation: string;
}

const comparisonData: ComparisonItem[] = [
    {
        feature: "Diseñado para transporte",
        goxt: true,
        genericCrm: false,
        excel: false,
        explanation: "GOxT entiende términos como 'fletes', 'toneladas', 'origen/destino' nativamente."
    },
    {
        feature: "Conversión Cotización -> Orden",
        goxt: true,
        genericCrm: false,
        excel: false,
        explanation: "Flujo automático ventas-operaciones sin doble digitación."
    },
    {
        feature: "Campos Logísticos Dinámicos",
        goxt: true,
        genericCrm: "Limitado",
        excel: false,
        explanation: "Configura peso, volumen, tipo de carga por cliente/producto."
    },
    {
        feature: "Gestión de Documentación Vial",
        goxt: true,
        genericCrm: false,
        excel: "Manual",
        explanation: "Guías, manifiestos y documentación de conductores centralizada."
    },
    {
        feature: "Alertas de Flota y Choferes",
        goxt: true,
        genericCrm: "Requiere desarrollo",
        excel: "Manual",
        explanation: "Vencimientos de licencias, revisiones y mantenimientos."
    },
    {
        feature: "Rentabilidad Real por Viaje.",
        goxt: true,
        genericCrm: "Genéricos",
        excel: "Complejo",
        explanation: "Cruce automático de ingresos (Ventas) vs. costos operativos (Cargo)."
    },
    {
        feature: "Integración con GPS y telemetría",
        goxt: true,
        genericCrm: false,
        excel: false,
        explanation: "Conexión nativa con sistemas de tracking (Geotab, Samsara)."
    },
    {
        feature: "Multimoneda y Tarifarios",
        goxt: true,
        genericCrm: "Premium",
        excel: "Manual",
        explanation: "Gestión de tarifas por zona, km o toneladas."
    }
];

export function ComparisonSection() {
    const columns = [
        {
            id: 'goxt', name: <Image
                src="/assets/Logo_fondonegro.png"
                alt="GOxT"
                width={100}
                height={100}
                className="inline-block"
            />, isFeatured: true
        },
        { id: 'genericCrm', name: 'CRM Genérico', isFeatured: false },
        { id: 'excel', name: 'Excel/Sheets', isFeatured: false }
    ];

    const renderValue = (value: boolean | string, isGoxt: boolean) => {
        if (value === true) {
            return (
                <div
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                    style={{
                        background: isGoxt ? 'var(--goxt-midnight)' : 'var(--goxt-gray-100)',
                        color: isGoxt ? 'var(--goxt-cream)' : 'var(--goxt-gray-400)'
                    }}
                >
                    <Check className="w-5 h-5" strokeWidth={3} />
                </div>
            );
        }

        if (value === false) {
            return (
                <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-50 rounded-full">
                    <X className="w-5 h-5 text-gray-300" strokeWidth={2.5} />
                </div>
            );
        }

        return (
            <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                style={{
                    color: 'var(--text-secondary)',
                    background: 'var(--goxt-surface-alt)',
                    borderColor: 'var(--goxt-gray-200)'
                }}
            >
                {value}
            </span>
        );
    };

    return (
        <section className="goxt-section" style={{ background: 'var(--goxt-surface-alt)' }}>
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
                        Diferenciación competitiva
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{
                            fontFamily: "var(--font-handwritten), cursive",
                            color: 'var(--text-primary)'
                        }}
                    >
                        ¿Por qué elegir <span className="goxt-gradient-accent-text">
                            <Image
                                src="/assets/Logo_FondoBlanco.png"
                                alt="GOxT"
                                width={150}
                                height={150}
                                className="inline-block"
                            />
                        </span> sobre otras opciones?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl max-w-3xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Especializado para transporte <UnderlinedText delay={1.2}>GOxT vs. soluciones genéricas</UnderlinedText>. Compara y decide.
                    </motion.p>
                </div>

                {/* Comparison Table Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100"
                    style={{ boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.1)' }}
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-left py-8 px-10 font-bold text-sm uppercase tracking-widest text-slate-400 bg-slate-50/50 min-w-[280px]">
                                        Característica
                                    </th>
                                    {columns.map((col) => (
                                        <th
                                            key={col.id}
                                            className={`text-center py-8 px-6 min-w-[180px] relative ${col.isFeatured ? 'z-10' : ''}`}
                                            style={{
                                                background: col.isFeatured ? 'var(--goxt-midnight)' : 'transparent',
                                                color: col.isFeatured ? 'var(--goxt-cream)' : 'var(--goxt-primary)'
                                            }}
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <span className={`text-xl font-bold ${col.isFeatured ? 'text-[var(--goxt-cream)]' : ''}`}>{col.name}</span>
                                                {col.isFeatured && (
                                                    <span
                                                        className="text-[10px] px-3 py-1 rounded-full font-bold tracking-tighter"
                                                        style={{ background: 'var(--goxt-cream)', color: 'white' }}
                                                    >
                                                        RECOMENDADO
                                                    </span>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                    <th className="text-left py-8 px-10 font-bold text-sm uppercase tracking-widest text-slate-400 bg-slate-50/50 min-w-[300px]">
                                        ¿Qué significa?
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {comparisonData.map((item, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group border-b border-gray-50 last:border-0 hover:bg-slate-50/50 transition-colors"
                                    >
                                        <td className="py-6 px-10 font-bold text-slate-700">
                                            {item.feature}
                                        </td>

                                        {/* Featured Column (GOxT) */}
                                        <td className="text-center py-6 px-6 bg-slate-50/20">
                                            <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                                {renderValue(item.goxt, true)}
                                            </div>
                                        </td>

                                        {/* Other Columns */}
                                        <td className="text-center py-6 px-6">
                                            <div className="flex justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                                                {renderValue(item.genericCrm, false)}
                                            </div>
                                        </td>

                                        <td className="text-center py-6 px-6">
                                            <div className="flex justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                                                {renderValue(item.excel, false)}
                                            </div>
                                        </td>

                                        <td className="py-6 px-10 text-sm italic leading-relaxed text-slate-400 group-hover:text-slate-600 transition-colors">
                                            {item.explanation}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* CTA / Summary Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-12 rounded-[2rem] text-center relative overflow-hidden"
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
                            No pierdas más tiempo navegando entre Excels y CRMs genéricos. Empieza hoy con la solución diseñada para tu éxito operativo.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contacto"
                                className="goxt-btn-primary text-xl px-10 py-5"
                                style={{ background: 'var(--goxt-cream)', color: 'var(--goxt-midnight)' }}
                            >
                                Agendar demo gratuita
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}