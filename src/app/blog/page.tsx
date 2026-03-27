"use client";

import Script from "next/script";

export default function BlogPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            <div className="goxt-container">
                <Script
                    src="https://api-crm.goxt.io/api/blog-widget/blg_seENlOEbs58BmiwmIvQBujpz/embed.js"
                    strategy="afterInteractive"
                />
                <div id="goxt-blog-container" className="min-h-[600px]"></div>
            </div>
        </div>
    );
}
