// components/animations/ConcentricCircles.tsx
"use client";

import { motion } from "framer-motion";

export default function ConcentricCircles() {
    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            {[1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border rounded-full"
                    style={{
                        width: `${i * 100}%`,
                        height: `${i * 100}%`,
                        borderColor: `rgba(${i % 2 === 0 ? '255, 107, 53' : '25, 34, 109'}, 0.1)`,
                        borderWidth: 1,
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: i % 2 === 0 ? [0, 180] : [180, 0],
                    }}
                    transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                        rotate: {
                            duration: 40 + i * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }}
                />
            ))}
        </div>
    );
}