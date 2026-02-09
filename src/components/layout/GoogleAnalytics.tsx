"use client";

import Script from "next/script";

export const GoogleAnalytics = () => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    return (
        <>
            {/* Script principal - EXACTAMENTE como Google lo proporciona */}
            <Script
                id="google-tag-manager"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics-config" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                    
                    // Log para debugging
                    console.log('✅ Google Analytics configurado con ID: ${GA_ID}');
                    
                    // Enviar pageview adicional después de carga
                    setTimeout(() => {
                        if (typeof gtag === 'function') {
                            gtag('event', 'page_view', {
                                page_title: document.title,
                                page_location: window.location.href,
                                page_path: window.location.pathname
                            });
                            console.log('🎯 Pageview adicional enviado');
                        }
                    }, 1000);
                `}
            </Script>
        </>
    );
};