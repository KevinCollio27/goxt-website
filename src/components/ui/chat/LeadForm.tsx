"use client";

import { useState } from "react";
import { User, Mail, Phone, Building2, Send, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface LeadFormProps {
    initialData?: {
        name?: string;
        email?: string;
        phone?: string;
        company?: string;
    };
    onSuccess: (data: any) => void;
    onSkip: () => void;
}

export function LeadForm({ initialData = {}, onSuccess, onSkip }: LeadFormProps) {
    const [formData, setFormData] = useState({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        company: initialData.company || "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!formData.name || !formData.email) {
            setError("Por favor completa al menos nombre y email.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    productInterest: "Formulario Interactivo Chat",
                    collectedAt: new Date().toISOString(),
                }),
            });

            if (!response.ok) throw new Error("Error al enviar");

            setIsSuccess(true);
            setTimeout(() => {
                onSuccess(formData);
            }, 2000);
        } catch (err) {
            setError("Hubo un error al enviar. Por favor intenta de nuevo.");
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
            >
                <CheckCircle2 className="w-12 h-12 text-green-500" />
                <h4 className="font-bold text-green-800">¡Datos recibidos!</h4>
                <p className="text-sm text-green-700">Un experto se contactará contigo pronto.</p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
        >
            <div className="bg-gray-50 border-b border-gray-100 p-4">
                <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <span className="bg-[var(--goxt-primary)] text-white p-1 rounded-md text-[10px]">📋</span>
                    FORMULARIO RÁPIDO
                </h4>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-3">
                <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Nombre</label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu nombre completo"
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ejemplo@correo.com"
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="space-y-1 flex-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Teléfono</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+56 9..."
                                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-1 flex-1">
                        <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Empresa</label>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Nombre empresa"
                                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                {error && <p className="text-[10px] text-red-500 mt-1">{error}</p>}

                <div className="flex gap-2 pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[var(--goxt-primary)] text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
                    >
                        {isSubmitting ? "Enviando..." : (
                            <>
                                <Send className="w-4 h-4" />
                                ENVIAR
                            </>
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={onSkip}
                        className="px-4 py-2.5 bg-gray-100 text-gray-500 rounded-xl text-sm font-medium hover:bg-gray-200 active:scale-95 transition-all flex items-center gap-1"
                    >
                        Omitir
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
