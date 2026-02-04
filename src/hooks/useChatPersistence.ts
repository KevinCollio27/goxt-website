"use client";

import { useChat } from "@/context/ChatContext";

/**
 * Hook de compatibilidad que redirige al nuevo ChatContext.
 * Se recomienda usar useChat() directamente en el futuro.
 */
export function useChatPersistence() {
    const context = useChat();

    return {
        messages: context.messages,
        sessionId: context.sessionId,
        setMessages: context.setMessages,
        setSessionId: context.setSessionId,
        clearChat: context.clearChat
    };
}
