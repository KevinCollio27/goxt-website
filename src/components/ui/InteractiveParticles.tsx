"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
}

export default function InteractiveParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Crear partículas iniciales
        const initialParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 10 + 2,
            color: i % 3 === 0
                ? 'var(--goxt-accent)'
                : i % 3 === 1
                    ? 'var(--goxt-primary)'
                    : 'var(--goxt-cream)'
        }));
        setParticles(initialParticles);

        // Actualizar posición del mouse
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => {
                const distance = Math.sqrt(
                    Math.pow(mousePosition.x - particle.x, 2) +
                    Math.pow(mousePosition.y - particle.y, 2)
                );
                const repelForce = distance < 20 ? (20 - distance) * 0.5 : 0;

                return (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            background: particle.color,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            opacity: 0.3,
                        }}
                        animate={{
                            x: `calc(${particle.x}% + ${repelForce * (mousePosition.x > particle.x ? -1 : 1)}px)`,
                            y: `calc(${particle.y}% + ${repelForce * (mousePosition.y > particle.y ? -1 : 1)}px)`,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            x: { type: "spring", stiffness: 100 },
                            y: { type: "spring", stiffness: 100 },
                            scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    />
                );
            })}
        </div>
    );
}