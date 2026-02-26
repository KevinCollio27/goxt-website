"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X, Settings2 } from "lucide-react";

const STORAGE_KEY = "cookie-consent-choice";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(STORAGE_KEY);
        if (!consent) {
            // Delay slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const consent = {
            ad_storage: "granted",
            analytics_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
        };
        saveConsent(consent);
    };

    const handleDeclineAll = () => {
        const consent = {
            ad_storage: "denied",
            analytics_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
        };
        saveConsent(consent);
    };

    const saveConsent = (consent: any) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
        if (window.gtag) {
            window.gtag("consent", "update", consent);
        }
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50"
                >
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden relative">
                        {/* Background Accent */}
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />

                        <div className="flex items-start gap-4 relative">
                            <div className="bg-blue-100 dark:bg-blue-900/40 p-2.5 rounded-xl text-blue-600 dark:text-blue-400">
                                <ShieldCheck size={24} />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    Privacidad y Cookies
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar anuncios. Al aceptar, nos ayudas a ofrecerte un mejor servicio.
                                </p>

                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-3">
                                        <button
                                            onClick={handleAcceptAll}
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                                        >
                                            Aceptar todo
                                        </button>
                                        <button
                                            onClick={handleDeclineAll}
                                            className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium py-2.5 px-4 rounded-xl transition-all active:scale-95 border border-slate-200 dark:border-slate-700"
                                        >
                                            Rechazar
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setShowSettings(!showSettings)}
                                        className="text-xs text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center gap-1.5 transition-colors pt-1"
                                    >
                                        <Settings2 size={12} />
                                        Personalizar preferencias
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {showSettings && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Necesarias</p>
                                            <p className="text-[11px] text-slate-500">Esenciales para el funcionamiento.</p>
                                        </div>
                                        <div className="h-5 w-9 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center px-1">
                                            <div className="h-3.5 w-3.5 bg-blue-600 rounded-full translate-x-3.5" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Analíticas</p>
                                            <p className="text-[11px] text-slate-500">Mejoran nuestra comprensión del uso.</p>
                                        </div>
                                        <div className="h-5 w-9 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center px-1">
                                            <div className="h-3.5 w-3.5 bg-slate-400 dark:bg-slate-600 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-400 italic text-center">
                                    Pronto podrás gestionar cada categoría individualmente.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
