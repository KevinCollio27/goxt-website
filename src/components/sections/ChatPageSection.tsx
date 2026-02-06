"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Bot, User, Trash2 } from "lucide-react";
import Image from "next/image";
import { useChatPersistence } from "@/hooks/useChatPersistence";

interface Message {
    role: "user" | "assistant";
    content: string;
}
const features = [
    {
        name: "Pregunta sobre GOxT CRM",
        icon: "/assets/Logo_CRM_Blanco.png",
    },
    {
        name: "Conoce GOxT Cargo",
        icon: "/assets/Logo_cargo_Blanco.png",
    },
    {
        name: "Solicita información personalizada",
        icon: "/assets/Logo_FondoBlanco.png",
    },
];
export function ChatPage() {
    // Usar hook personalizado para persistencia
    const { messages, sessionId, setMessages, setSessionId, clearChat } = useChatPersistence();
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    // Control para saber si debemos hacer scroll
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

    // Función para hacer scroll solo si es necesario
    const scrollToBottomIfNeeded = () => {
        if (!shouldScrollToBottom) return;

        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
        }, 100);
    };

    // Solo hacer scroll cuando se agregan nuevos mensajes
    useEffect(() => {
        scrollToBottomIfNeeded();
    }, [messages]); // Se ejecuta cuando cambian los mensajes

    // Detectar si el usuario está scrolleando manualmente
    const handleScroll = () => {
        if (!messagesContainerRef.current) return;

        const container = messagesContainerRef.current;
        const isAtBottom =
            container.scrollHeight - container.scrollTop - container.clientHeight < 50;

        // Solo hacer scroll automático si está cerca del fondo
        setShouldScrollToBottom(isAtBottom);
    };

    // Inicializar el listener de scroll
    useEffect(() => {
        const container = messagesContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        // Forzar scroll cuando el usuario envía un mensaje
        setShouldScrollToBottom(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                    sessionId: sessionId || undefined,
                }),
            });

            if (!response.ok) {
                throw new Error("Error en la respuesta");
            }

            const data = await response.json();

            // Guardar sessionId si es nuevo
            if (data.sessionId && !sessionId) {
                setSessionId(data.sessionId);
            }

            const assistantMessage: Message = {
                role: "assistant",
                content: data.message,
            };
            setMessages((prev) => [...prev, assistantMessage]);

            // Forzar scroll cuando llega respuesta
            setShouldScrollToBottom(true);

        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Lo siento, hubo un error. Por favor intenta de nuevo.",
                },
            ]);
            setShouldScrollToBottom(true);
        } finally {
            setIsLoading(false);
        }
    };

    // Función para manejar Enter en el input
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e as any);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12">
            <div className="goxt-container max-w-5xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 mb-4"
                    >
                        <div className="w-16 h-16 bg-[var(--goxt-primary)] rounded-2xl flex items-center justify-center p-3">
                            <Image
                                src="/assets/logo_central.png"
                                alt="AI Assistant"
                                width={100}
                                height={100}
                                className="w-full h-full object-cover brightness-0 invert"
                            />
                        </div>
                    </motion.div>
                    {/* Headline con animaciones*/}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        <span
                            className="font-bold"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Chat con
                        </span>{" "}
                        <span
                            className="goxt-gradient-accent-text font-bold"
                        >
                            Asistente IA.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        Pregúntame sobre los productos y servicios de GOxT.
                    </motion.p>
                </div>

                {/* Chat Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
                    style={{ height: "calc(100vh - 400px)", minHeight: "500px" }}
                >
                    {/* Messages Container con ref para scroll */}
                    <div
                        ref={messagesContainerRef}
                        className="h-[calc(100%-80px)] overflow-y-auto p-6 space-y-6"
                    >
                        {messages.map((message, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"
                                    }`}
                            >
                                {/* Avatar */}
                                <div
                                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${message.role === "user"
                                        ? "bg-gray-200"
                                        : "bg-[var(--goxt-primary)]"
                                        }`}
                                >
                                    {message.role === "user" ? (
                                        <User className="w-5 h-5 text-gray-700" />
                                    ) : (
                                        <div className="w-6 h-6 relative flex items-center justify-center">
                                            <Image
                                                src="/assets/logo_central.png"
                                                alt="AI"
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-cover brightness-0 invert"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Message Bubble */}
                                <div
                                    className={`max-w-[75%] p-4 rounded-2xl ${message.role === "user"
                                        ? "bg-[var(--goxt-primary)] text-white rounded-tr-none"
                                        : "bg-gray-100 text-gray-800 rounded-tl-none"
                                        }`}
                                >
                                    <p className="whitespace-pre-wrap leading-relaxed">
                                        {message.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex gap-4"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[var(--goxt-primary)] to-[var(--goxt-secondary)] flex items-center justify-center">
                                    <div className="w-6 h-6 relative flex items-center justify-center">
                                        <Image
                                            src="/assets/logo_central.png"
                                            alt="Thinking"
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-contain brightness-0 invert"
                                        />
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none">
                                    <Loader2 className="w-5 h-5 animate-spin text-[var(--goxt-primary)]" />
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={handleSubmit}
                        className="h-20 border-t border-gray-200 bg-gray-50 px-6 py-4"
                    >
                        <div className="flex gap-3 h-full">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Escribe tu mensaje aquí..."
                                className="flex-1 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent bg-white"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="px-8 py-3 bg-[var(--goxt-primary)] text-white rounded-2xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                <span className="hidden sm:inline">Enviar</span>
                            </button>
                            <button
                                onClick={clearChat}
                                className="ml-4 p-3 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                title="Limpiar conversación"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                >
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                            <div className="flex justify-center mb-2">
                                <Image
                                    src={feature.icon}
                                    alt={feature.name}
                                    width={60}
                                    height={60}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <p className="text-sm text-gray-600">{feature.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}