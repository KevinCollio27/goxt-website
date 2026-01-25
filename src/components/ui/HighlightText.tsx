// components/ui/HighlightText.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HighlightTextProps {
    children: ReactNode;
    color?: string;
    delay?: number;
    opacity?: number;
    verticalPosition?: "top" | "center" | "bottom";
}

const HighlightText = ({
    children,
    color = "#FFEB3B",
    delay = 0,
    opacity = 0.7,
    verticalPosition = "top" // Por defecto arriba
}: HighlightTextProps) => {
    const positionConfig = {
        top: {
            top: '20%', // Más cerca de la parte superior
            transform: 'translateY(0%)',
            height: '65%' // Un poco más alto para cubrir bien
        },
        center: {
            top: '50%',
            transform: 'translateY(-50%)',
            height: '50%'
        },
        bottom: {
            top: '80%',
            transform: 'translateY(-100%)',
            height: '50%'
        }
    };

    const { top, transform, height } = positionConfig[verticalPosition];

    return (
        <span style={{
            position: 'relative',
            display: 'inline-block',
            zIndex: 0
        }}>
            {/* El texto */}
            <span style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </span>

            {/* El fondo resaltado */}
            <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                    duration: 0.6,
                    delay,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: top,
                    left: '-2px',
                    right: '-2px',
                    height: height,
                    backgroundColor: color,
                    opacity: opacity,
                    transformOrigin: 'left',
                    transform: transform,
                    zIndex: 1,
                    borderRadius: '3px',
                }}
            />
        </span>
    );
};

export default HighlightText;