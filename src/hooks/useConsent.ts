"use client";

import { useState, useEffect } from "react";

type ConsentType = "granted" | "denied";

interface ConsentState {
    ad_storage: ConsentType;
    analytics_storage: ConsentType;
    ad_user_data: ConsentType;
    ad_personalization: ConsentType;
}

const STORAGE_KEY = "cookie-consent-choice";

const DEFAULT_CONSENT: ConsentState = {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
};

export function useConsent() {
    const [consent, setConsent] = useState<ConsentState | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setConsent(parsed);
                // Important: Update gtag on load if preference exists
                updateGtag(parsed);
            } catch (e) {
                console.error("Error parsing consent choice", e);
                setConsent(null);
            }
        } else {
            // No saved preference, use defaults (already set in layout, but state needs it)
            setConsent(null);
        }
    }, []);

    const updateConsent = (newState: Partial<ConsentState>) => {
        const updated = { ...DEFAULT_CONSENT, ...consent, ...newState };
        setConsent(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        updateGtag(updated);
    };

    const updateGtag = (state: ConsentState) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", state);
        }
    };

    return { consent, updateConsent };
}
