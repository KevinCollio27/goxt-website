"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, Trash2, Paperclip, Image as ImageIcon } from "lucide-react";
import { useChat } from "@/context/ChatContext";
import Image from "next/image";
import { LeadForm } from "./chat/LeadForm";

interface Message {
    role: "user" | "assistant";
    content: string;
    image?: string;
}

interface AIChatProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AIChat({ isOpen, onClose }: AIChatProps) {
    // Usar contexto global
    const { messages, isLoading, sendMessage, clearChat } = useChat();
    const [input, setInput] = useState("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validar tamaño inicial (evitar procesar archivos ridículamente grandes)
        if (file.size > 10 * 1024 * 1024) {
            alert("La imagen está demasiado pesada (máx 10MB).");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = document.createElement("img");
            img.onload = () => {
                // Configurar canvas para redimensionar
                const canvas = document.createElement("canvas");
                let width = img.width;
                let height = img.height;
                const MAX_DIM = 1200;

                if (width > height && width > MAX_DIM) {
                    height *= MAX_DIM / width;
                    width = MAX_DIM;
                } else if (height > MAX_DIM) {
                    width *= MAX_DIM / height;
                    height = MAX_DIM;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx?.drawImage(img, 0, 0, width, height);

                // Convertir a base64 con calidad reducida
                const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
                setSelectedImage(compressedBase64);
            };
            img.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if ((!input.trim() && !selectedImage) || isLoading) return;

        const currentInput = input;
        const currentImage = selectedImage;

        setInput(""); // Limpiar input inmediatamente
        setSelectedImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";

        await sendMessage(currentInput, currentImage || undefined);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 w-full h-full md:w-[400px] md:h-[700px] md:max-h-[calc(100vh-100px)] bg-white md:rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden"
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
                                <h3
                                    className="goxt-gradient-accent-text font-bold text-lg"
                                    style={{ fontFamily: "var(--font-handwritten), cursive" }}
                                >
                                    Agente GOxT
                                </h3>
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
                                    {message.type === 'lead_form' ? (
                                        <div className="space-y-4">
                                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                            <LeadForm
                                                initialData={message.data}
                                                onSuccess={() => {
                                                    sendMessage("He completado el formulario.");
                                                }}
                                                onSkip={() => {
                                                    sendMessage("Prefiero continuar conversando por ahora.");
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            {message.image && (
                                                <div className="mb-2 overflow-hidden rounded-lg border border-white/20">
                                                    <img
                                                        src={message.image}
                                                        alt="Usuario adjunto"
                                                        className="w-full h-auto max-h-60 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                                        onClick={() => window.open(message.image, '_blank')}
                                                    />
                                                </div>
                                            )}
                                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                        </>
                                    )}
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
                        {/* Preview de imagen seleccionada */}
                        <AnimatePresence>
                            {selectedImage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="mb-3 relative inline-block group"
                                >
                                    <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-[var(--goxt-primary)] shadow-lg">
                                        <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-md hover:bg-red-600 transition-colors"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex gap-2 items-center">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isLoading}
                                className={`p-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors ${selectedImage ? 'text-[var(--goxt-primary)] border-[var(--goxt-primary)]' : 'text-gray-500'}`}
                                title="Subir imagen o screenshot"
                            >
                                <Paperclip className="w-5 h-5" />
                            </button>

                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={selectedImage ? "Describe la imagen..." : "Escribe tu mensaje..."}
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--goxt-primary)] focus:border-transparent"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || (!input.trim() && !selectedImage)}
                                className="p-3 bg-[var(--goxt-primary)] text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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
