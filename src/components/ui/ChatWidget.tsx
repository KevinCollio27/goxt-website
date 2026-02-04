"use client";

import Image from "next/image";
import { useChat } from "@/context/ChatContext";
import { AIChat } from "./AIChat";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
    const { isChatOpen, setChatOpen } = useChat();

    return (
        <>
            <AnimatePresence>
                {!isChatOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setChatOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden"
                    >
                        <div className="w-10 h-10 relative">
                            <Image
                                src="/assets/logo_central_negro.png"
                                alt="Chat"
                                fill
                                className="object-contain"
                            />
                        </div>
                        {/* Optional: Add a notification badge or pulse effect if needed later */}
                    </motion.button>
                )}
            </AnimatePresence>

            <AIChat isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
        </>
    );
}
