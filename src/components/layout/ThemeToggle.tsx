"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Evitar problemas de hidratación con SSR
    useEffect(() => {
        setMounted(true);
    }, []);

    // No renderizar nada durante SSR
    if (!mounted) {
        return (
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-200 animate-pulse" />
        );
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
                background: theme === 'dark'
                    ? 'linear-gradient(135deg, #D4B996 0%, #B89968 100%)'
                    : 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                boxShadow: theme === 'dark'
                    ? '0 4px 12px rgba(212, 185, 150, 0.3)'
                    : '0 4px 12px rgba(15, 23, 42, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'dark' ? 1 : 0,
                    opacity: theme === 'dark' ? 1 : 0,
                    rotate: theme === 'dark' ? 0 : 180,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Moon className="w-5 h-5 text-[#0F172A]" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'light' ? 1 : 0,
                    opacity: theme === 'light' ? 1 : 0,
                    rotate: theme === 'light' ? 0 : -180,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Sun className="w-5 h-5 text-white" />
            </motion.div>
        </motion.button>
    );
}
