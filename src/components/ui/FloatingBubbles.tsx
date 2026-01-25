"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingBubblesProps {
    count?: number;
    colors?: string[];
    sizeRange?: [number, number];
    speedRange?: [number, number];
    children?: ReactNode;
}

export default function FloatingBubbles({
    count = 15,
    colors = ['#fff700ff', '#00ff00', '#0000ff'],
    sizeRange = [20, 60],
    speedRange = [10, 30],
    children
}: FloatingBubblesProps) {
    const bubbles = Array.from({ length: count });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {bubbles.map((_, i) => {
                const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
                const color = colors[Math.floor(Math.random() * colors.length)];
                const duration = Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
                const delay = Math.random() * 5;
                const xStart = Math.random() * 100;
                const yStart = Math.random() * 100;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full opacity-20"
                        style={{
                            width: size,
                            height: size,
                            background: color,
                            left: `${xStart}%`,
                            top: `${yStart}%`,
                            filter: 'blur(10px)',
                        }}
                        animate={{
                            y: [0, -100, -200, -100, 0],
                            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                            scale: [1, 1.2, 1, 0.8, 1],
                            opacity: [0.1, 0.3, 0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: duration,
                            delay: delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
}