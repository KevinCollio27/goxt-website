"use client";

import { useState, useEffect, useCallback } from "react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface UseChatPersistenceReturn {
    messages: Message[];
    sessionId: string;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    setSessionId: React.Dispatch<React.SetStateAction<string>>;
    clearChat: () => void;
}

const STORAGE_KEYS = {
    MESSAGES: "goxt_chat_messages",
    SESSION_ID: "goxt_chat_session_id"
};

const DEFAULT_MESSAGE: Message = {
    role: "assistant",
    content: "¡Hola! Soy GOXY, el asistente virtual de GOxT. ¿En qué puedo ayudarte hoy?",
};

/**
 * Hook personalizado para manejar la persistencia del chat en localStorage
 * Permite mantener las conversaciones entre navegaciones de página
 */
export function useChatPersistence(): UseChatPersistenceReturn {
    const [messages, setMessages] = useState<Message[]>([DEFAULT_MESSAGE]);
    const [sessionId, setSessionId] = useState<string>("");
    const [isHydrated, setIsHydrated] = useState(false);

    // Cargar datos desde localStorage al montar el componente
    useEffect(() => {
        try {
            const savedMessages = localStorage.getItem(STORAGE_KEYS.MESSAGES);
            const savedSessionId = localStorage.getItem(STORAGE_KEYS.SESSION_ID);

            if (savedMessages) {
                const parsedMessages = JSON.parse(savedMessages);
                if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
                    setMessages(parsedMessages);
                }
            }

            if (savedSessionId) {
                setSessionId(savedSessionId);
            }
        } catch (error) {
            console.error("Error al cargar el chat desde localStorage:", error);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    // Guardar mensajes en localStorage cada vez que cambien (solo después de hidratar)
    useEffect(() => {
        if (isHydrated) {
            try {
                localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
            } catch (error) {
                console.error("Error al guardar mensajes en localStorage:", error);
            }
        }
    }, [messages, isHydrated]);

    // Guardar sessionId en localStorage cada vez que cambie (solo después de hidratar)
    useEffect(() => {
        if (isHydrated && sessionId) {
            try {
                localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
            } catch (error) {
                console.error("Error al guardar sessionId en localStorage:", error);
            }
        }
    }, [sessionId, isHydrated]);

    // Función para limpiar el chat y empezar de nuevo
    const clearChat = useCallback(() => {
        setMessages([DEFAULT_MESSAGE]);
        setSessionId("");
        try {
            localStorage.removeItem(STORAGE_KEYS.MESSAGES);
            localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
        } catch (error) {
            console.error("Error al limpiar localStorage:", error);
        }
    }, []);

    return {
        messages,
        sessionId,
        setMessages,
        setSessionId,
        clearChat
    };
}
