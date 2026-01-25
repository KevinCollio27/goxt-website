"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Componente para texto encerrado
interface CircledTextProps {
    children: React.ReactNode;
    color?: string;
    delay?: number;
}

const CircledText = ({ children, color = "var(--goxt-accent)", delay = 0 }: CircledTextProps) => {
    return (
        <span style={{ position: 'relative', display: 'inline-block', padding: '0 8px' }}>
            {children}
            <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    width: 'calc(100% + 16px)',
                    height: 'calc(100% + 16px)',
                    pointerEvents: 'none',
                }}
                viewBox="0 0 200 80"
                preserveAspectRatio="none"
            >
                <motion.ellipse
                    cx="100"
                    cy="40"
                    rx="95"
                    ry="35"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </motion.svg>
        </span>
    );
};

export default CircledText;