"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, Trash2 } from "lucide-react";
import { useChat } from "@/context/ChatContext";
import Image from "next/image";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface AIChatProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AIChat({ isOpen, onClose }: AIChatProps) {
    // Usar contexto global
    const { messages, isLoading, sendMessage, clearChat } = useChat();
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const currentInput = input;
        setInput(""); // Limpiar input inmediatamente

        await sendMessage(currentInput);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-6 right-6 w-[400px] h-[700px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden"
                    style={{ maxHeight: "calc(100vh - 100px)" }}
                >
                    {/* Header */}
                    <div className="bg-[var(--goxt-primary)] text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">
                                <Image
                                    src="/assets/logo_central.png"
                                    alt="AI"
                                    width={50}
                                    height={50}
                                    className="w-full h-full object-cover brightness-0 invert"
                                />
                            </span>
                            <div>
                                <h3 className="goxt-gradient-accent-text font-bold">Agente GOxT</h3>
                                <p className="text-xs text-white/80">Asistente Virtual</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={clearChat}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                title="Limpiar conversación"
                            >
                                <Trash2 className="w-5 h-5 text-white" />
                            </button>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((message, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${message.role === "user"
                                        ? "bg-[var(--goxt-primary)] text-white"
                                        : "bg-white text-gray-800 border border-gray-200"
                                        }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </motion.div>
                        ))}
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-start"
                            >
                                <div className="bg-white p-3 rounded-2xl border border-gray-200">
                                    <Loader2 className="w-5 h-5 animate-spin text-[var(--goxt-primary)]" />
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Escribe tu mensaje..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="px-4 py-3 bg-[var(--goxt-primary)] text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
