"use client";

import Script from "next/script";

export function ChatWidget() {
    return (
        <Script
            src="https://api-crm.goxt.io/api/widget/embed.js"
            strategy="afterInteractive"
            data-api-key="wk_0ac4fed868da91973c3916dfa0f4a7c4d3a9ead19b97772a"
        />
    );
}
