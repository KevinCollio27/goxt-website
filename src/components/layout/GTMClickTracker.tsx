"use client";

import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

export function GTMClickTracker() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // Find the closest anchor or button that was clicked
            const target = (e.target as HTMLElement).closest("a, button");
            if (!target) return;

            const href = target.getAttribute("href") || "";
            const dataLocation =
                target.getAttribute("data-location") ||
                target.closest("[data-location]")?.getAttribute("data-location");
            const buttonText = target.textContent?.trim() || "Icon/Element";

            // Identify the type of action
            const isCRM = href.includes("crm.goxt.io") || href.includes("api-crm.goxt.io");
            const isDemo = href.includes("/contacto");

            if (isCRM || isDemo || dataLocation) {
                const eventData = {
                    event: "cta_click",
                    cta_type: isCRM ? "crm_login" : isDemo ? "request_demo" : "other",
                    location: dataLocation || "unknown",
                    button_text: buttonText,
                    link_url: href,
                };

                // Debug para ver qué estamos enviando
                console.log("🟢 [GTMClickTracker] Enviando evento a GTM:", eventData);

                // Send a custom explicit event to GTM dataLayer
                sendGTMEvent(eventData);
            }
        };

        // Attach listener globally to document
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return null;
}
