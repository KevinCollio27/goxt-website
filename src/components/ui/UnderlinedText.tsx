// components/ui/UnderlinedText.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface UnderlinedTextProps {
    children: ReactNode;
    color?: string;
    delay?: number;
    width?: number | string;
}

const UnderlinedText = ({
    children,
    color = 'var(--goxt-cream)',
    delay = 0,
    width = 1
}: UnderlinedTextProps) => {
    return (
        <span style={{ position: 'relative', display: 'inline-block' }}>
            {children}
            <motion.span
                initial={{ scaleX: 0, scaleY: 0.3 }}
                animate={{ scaleX: width, scaleY: 1 }}
                transition={{
                    duration: 0.7,
                    delay,
                    ease: [0.2, 0.8, 0.3, 1],
                    scaleY: { duration: 0.3, delay: delay + 0.4 }
                }}
                style={{
                    position: 'absolute',
                    bottom: '-3px',
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: color,
                    transformOrigin: 'left',
                    zIndex: 1,
                    borderRadius: '3px',
                    opacity: 0.8,
                }}
            />
        </span>
    );
};

export default UnderlinedText;