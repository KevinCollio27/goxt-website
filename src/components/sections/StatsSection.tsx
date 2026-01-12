"use client";

import { motion } from "framer-motion";
import { Building2, DollarSign, Clock, HeadphonesIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
    value: string;
    label: string;
    description: string;
    Icon: LucideIcon;
    color: string;
}

const stats: Stat[] = [
    {
        value: "+500",
        label: "Empresas",
        description: "confían en GOxT",
        Icon: Building2,
        color: "text-blue-500",
    },
    {
        value: "$2M+",
        label: "Gestionados",
        description: "en cotizaciones",
        Icon: DollarSign,
        color: "text-green-500",
    },
    {
        value: "30%",
        label: "Ahorro",
        description: "en tiempo de cotización",
        Icon: Clock,
        color: "text-orange-500",
    },
    {
        value: "24/7",
        label: "Soporte",
        description: "disponible siempre",
        Icon: HeadphonesIcon,
        color: "text-purple-500",
    },
];

export function StatsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="goxt-container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 mb-3 ${stat.color}`}>
                                <stat.Icon className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold goxt-gradient-text mb-1">
                                {stat.value}
                            </div>
                            <div className="font-semibold text-[var(--goxt-gray-900)]">
                                {stat.label}
                            </div>
                            <div className="text-sm text-[var(--goxt-gray-500)]">
                                {stat.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
