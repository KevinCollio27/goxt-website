// components/animations/ConnectingLines.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Point {
    id: number;
    x: number;
    y: number;
}

export default function ConnectingLines({ count = 8 }: { count?: number }) {
    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        const newPoints = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100
        }));
        setPoints(newPoints);

        const interval = setInterval(() => {
            setPoints(prev => prev.map(p => ({
                ...p,
                x: Math.max(0, Math.min(100, p.x + (Math.random() * 2 - 1))),
                y: Math.max(0, Math.min(100, p.y + (Math.random() * 2 - 1)))
            })));
        }, 3000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Puntos */}
            {points.map((point) => (
                <motion.div
                    key={point.id}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                        background: 'var(--goxt-accent)',
                        boxShadow: '0 0 10px var(--goxt-accent)',
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Líneas de conexión */}
            <svg className="absolute inset-0 w-full h-full">
                {points.map((pointA, i) =>
                    points.slice(i + 1).map((pointB, j) => {
                        const distance = Math.sqrt(
                            Math.pow(pointB.x - pointA.x, 2) +
                            Math.pow(pointB.y - pointA.y, 2)
                        );

                        if (distance < 30) {
                            return (
                                <motion.line
                                    key={`${i}-${j}`}
                                    x1={`${pointA.x}%`}
                                    y1={`${pointA.y}%`}
                                    x2={`${pointB.x}%`}
                                    y2={`${pointB.y}%`}
                                    stroke="var(--goxt-primary)"
                                    strokeWidth="0.5"
                                    strokeOpacity="0.3"
                                    animate={{
                                        strokeOpacity: [0.1, 0.3, 0.1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: Math.random() * 2
                                    }}
                                />
                            );
                        }
                        return null;
                    })
                )}
            </svg>
        </div>
    );
}