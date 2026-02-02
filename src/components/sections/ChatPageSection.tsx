"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Bot, User } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "¡Hola! Soy GOXY, el asistente virtual de GOxT. ¿En qué puedo ayudarte hoy?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string>("");
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
                        <div className="w-16 h-16 bg-[var(--goxt-primary)] rounded-2xl flex items-center justify-center">
                            <Bot className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Chat con <span className="goxt-gradient-text">Asistente IA</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        Pregúntame sobre los productos y servicios de GOxT
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
                                        <Bot className="w-5 h-5 text-white" />
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
                                    <Bot className="w-5 h-5 text-white" />
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
                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                        <div className="text-2xl mb-2">🎯</div>
                        <p className="text-sm text-gray-600">Pregunta sobre GOxT CRM</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                        <div className="text-2xl mb-2">🚛</div>
                        <p className="text-sm text-gray-600">Conoce GOxT Cargo</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                        <div className="text-2xl mb-2">💡</div>
                        <p className="text-sm text-gray-600">Solicita información personalizada</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}