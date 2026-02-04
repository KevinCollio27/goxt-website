"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface ChatContextType {
    // Estado del chat
    messages: Message[];
    sessionId: string;
    isLoading: boolean;
    isChatOpen: boolean;

    // Acciones
    setMessages: (messages: Message[] | ((prev: Message[]) => Message[])) => void;
    setSessionId: (id: string) => void;
    setIsLoading: (loading: boolean) => void;
    setChatOpen: (open: boolean) => void;
    clearChat: () => void;

    // Funcionalidad
    sendMessage: (content: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const STORAGE_KEYS = {
    MESSAGES: "goxt_chat_messages_v2",
    SESSION_ID: "goxt_chat_session_id_v2"
};

const DEFAULT_MESSAGE: Message = {
    role: "assistant",
    content: "¡Hola! Soy el asistente virtual de GOxT. ¿En qué puedo ayudarte hoy?",
};

export function ChatProvider({ children }: { children: ReactNode }) {
    const [messages, setMessagesState] = useState<Message[]>([DEFAULT_MESSAGE]);
    const [sessionId, setSessionIdState] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [isChatOpen, setChatOpen] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    // Cargar desde localStorage
    useEffect(() => {
        try {
            const savedMessages = localStorage.getItem(STORAGE_KEYS.MESSAGES);
            const savedSessionId = localStorage.getItem(STORAGE_KEYS.SESSION_ID);

            if (savedMessages) {
                const parsedMessages = JSON.parse(savedMessages);
                if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
                    setMessagesState(parsedMessages);
                }
            }

            if (savedSessionId) {
                setSessionIdState(savedSessionId);
            }
        } catch (error) {
            console.error("Error cargando chat:", error);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    // Persistir cambios
    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
        }
    }, [messages, isHydrated]);

    useEffect(() => {
        if (isHydrated && sessionId) {
            localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
        } else if (isHydrated && !sessionId) {
            localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
        }
    }, [sessionId, isHydrated]);

    // Helpers para actualizar estado
    const setMessages = useCallback((messagesOrUpdater: Message[] | ((prev: Message[]) => Message[])) => {
        setMessagesState(messagesOrUpdater);
    }, []);

    const setSessionId = useCallback((id: string) => {
        setSessionIdState(id);
    }, []);

    const clearChat = useCallback(() => {
        setMessagesState([DEFAULT_MESSAGE]);
        setSessionIdState("");
        localStorage.removeItem(STORAGE_KEYS.MESSAGES);
        localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
    }, []);

    // Función centralizada para enviar mensajes
    const sendMessage = useCallback(async (content: string) => {
        if (!content.trim() || isLoading) return;

        // 1. Añadir mensaje de usuario
        const userMessage: Message = { role: "user", content };
        setMessagesState(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // 2. Llamada API
            // Nota: usamos el estado actual de messages + el nuevo mensaje
            // Como setMessagesState es asíncrono, usamos el callback para obtener el valor más reciente si fuera necesario,
            // pero aquí construimos el array para la petición manualmente.

            // IMPORTANTE: Necesitamos el valor actual de messages y sessionId. 
            // Como estamos dentro de un closure, 'messages' y 'sessionId' podrían ser viejos si no depedemos de ellos.
            // Para evitar problemas de dependencias complejas, usaremos una referencia funcional en el fetch o
            // aceptaremos que sendMessage se re-crea cuando messages cambia.

            const currentMessages = [...messages, userMessage];

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: currentMessages,
                    sessionId: sessionId || undefined,
                }),
            });

            if (!response.ok) throw new Error("Error en respuesta");

            const data = await response.json();

            if (data.sessionId && data.sessionId !== sessionId) {
                setSessionIdState(data.sessionId);
            }

            const assistantMessage: Message = {
                role: "assistant",
                content: data.message,
            };

            setMessagesState(prev => [...prev, assistantMessage]);

        } catch (error) {
            console.error("Error enviando mensaje:", error);
            setMessagesState(prev => [
                ...prev,
                { role: "assistant", content: "Lo siento, hubo un error. Intenta de nuevo." }
            ]);
        } finally {
            setIsLoading(false);
        }
    }, [messages, sessionId, isLoading]);

    return (
        <ChatContext.Provider value={{
            messages,
            sessionId,
            isLoading,
            isChatOpen,
            setMessages,
            setSessionId,
            setIsLoading,
            setChatOpen,
            clearChat,
            sendMessage
        }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error("useChat debe usarse dentro de un ChatProvider");
    }
    return context;
}
