"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

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
        { id: 'goxt', name: 'GOxT', color: 'bg-blue-50', textColor: 'text-[var(--goxt-primary)]', accentColor: 'border-[var(--goxt-primary)]' },
        { id: 'genericCrm', name: 'CRM Genérico', color: 'bg-gray-50', textColor: 'text-gray-600', accentColor: 'border-gray-300' },
        { id: 'excel', name: 'Excel/Sheets', color: 'bg-gray-50', textColor: 'text-gray-600', accentColor: 'border-gray-300' }
    ];

    const renderValue = (value: boolean | string) => {
        if (value === true) {
            return (
                <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                    <Check className="w-5 h-5 text-green-600" strokeWidth={2.5} />
                </div>
            );
        }

        if (value === false) {
            return (
                <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                    <X className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                </div>
            );
        }

        return (
            <span className="text-sm font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded">
                {value}
            </span>
        );
    };

    return (
        <section className="goxt-section bg-[var(--goxt-gray-50)]">
            <div className="goxt-container">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 bg-[var(--goxt-primary-100)] text-[var(--goxt-primary)] rounded-full text-sm font-medium mb-4"
                    >
                        Diferenciación competitiva
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-[var(--goxt-gray-900)]"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        ¿Por qué{" "}
                        <span className="goxt-gradient-accent-text font-bold">elegir GOxT</span> sobre otras opciones?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[var(--goxt-gray-600)] max-w-3xl mx-auto"
                    >
                        Especializado para transporte vs. soluciones genéricas. Compara y decide.
                    </motion.p>
                </div>

                {/* Comparison Table - Mobile */}
                <div className="lg:hidden space-y-6">
                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                        >
                            <h3 className="font-bold text-[var(--goxt-gray-900)] mb-4 text-lg">
                                {item.feature}
                            </h3>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-600">GOxT</span>
                                    <div>{renderValue(item.goxt)}</div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-600">CRM Genérico</span>
                                    <div>{renderValue(item.genericCrm)}</div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-600">Excel/Sheets</span>
                                    <div>{renderValue(item.excel)}</div>
                                </div>
                            </div>

                            <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                                {item.explanation}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table - Desktop */}
                <div className="hidden lg:block overflow-x-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-6 px-8 font-semibold text-[var(--goxt-gray-700)] bg-gray-50 min-w-[300px]">
                                        Característica
                                    </th>
                                    {columns.map((col) => (
                                        <th
                                            key={col.id}
                                            className={`text-center py-6 px-4 font-semibold ${col.textColor} border-l ${col.accentColor} min-w-[200px]`}
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <span className="text-xl font-bold">{col.name}</span>
                                                {col.id === 'goxt' && (
                                                    <span className="text-xs px-2 py-1 bg-[var(--goxt-primary)] text-white rounded-full">
                                                        RECOMENDADO
                                                    </span>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                    <th className="text-left py-6 px-8 font-semibold text-[var(--goxt-gray-700)] bg-gray-50 min-w-[250px]">
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
                                        className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-gray-50/50' : ''}`}
                                    >
                                        <td className="py-5 px-8 font-medium text-[var(--goxt-gray-900)]">
                                            {item.feature}
                                        </td>

                                        <td className="text-center py-5 px-4 border-l border-[var(--goxt-primary)]">
                                            <div className="flex justify-center">
                                                {renderValue(item.goxt)}
                                            </div>
                                        </td>

                                        <td className="text-center py-5 px-4 border-l border-gray-200">
                                            <div className="flex justify-center">
                                                {renderValue(item.genericCrm)}
                                            </div>
                                        </td>

                                        <td className="text-center py-5 px-4 border-l border-gray-200">
                                            <div className="flex justify-center">
                                                {renderValue(item.excel)}
                                            </div>
                                        </td>

                                        <td className="py-5 px-8 text-gray-500 text-sm">
                                            {item.explanation}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <div className="inline-block bg-gradient-to-r from-[var(--goxt-primary)] to-blue-700 text-white px-6 py-4 rounded-xl mb-6">
                        <div className="text-lg font-bold">¿Sigues usando soluciones genéricas?</div>
                        <div className="text-sm opacity-90">Descubre la diferencia de una solución especializada</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contacto"
                            className="goxt-btn-primary text-lg px-8 py-3"
                        >
                            Agendar demo comparativa
                        </a>
                        <a
                            href="/precios"
                            className="goxt-btn-secondary text-lg px-8 py-3"
                        >
                            Ver precios competitivos
                        </a>
                    </div>

                    <p className="text-sm text-gray-500 mt-6">
                        Compara características, no solo precios. Solicita un análisis personalizado de tus procesos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}