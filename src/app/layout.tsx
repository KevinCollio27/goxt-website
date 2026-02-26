import type { Metadata } from "next";
import { Inter, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatProvider } from "@/context/ChatContext";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { GTMClickTracker } from "@/components/layout/GTMClickTracker";
import { CookieBanner } from "@/components/ui/CookieBanner";
import Script from "next/script";

// Fuente principal para body text
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Fuente elegante serif para headlines (estilo Odoo)
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Fuente handwritten para acentos decorativos
const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "GOxT | Tecnología al servicio de tu negocio.",
    template: "%s | GOxT",
  },
  description:
    "Impulsa tu empresa con tecnología de vanguardia. CRM, gestión logística y mucho más diseñados para atraer más clientes, optimizar procesos y tomar el control total de tu negocio.",
  keywords: [
    "CRM transporte",
    "logística",
    "gestión de flotas",
    "cotizaciones transporte",
    "software logística",
    "GOxT",
  ],
  authors: [{ name: "GOxT" }],
  creator: "GOxT",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://goxt.io",
    siteName: "GOxT",
    title: "GOxT | Tecnología al servicio de tu negocio.",
    description:
      "Impulsa tu empresa con tecnología de vanguardia. CRM, gestión logística y mucho más diseñados para atraer más clientes, optimizar procesos y tomar el control total de tu negocio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOxT | Tecnología al servicio de tu negocio.",
    description:
      "Impulsa tu empresa con tecnología de vanguardia. CRM, gestión logística y mucho más diseñados para atraer más clientes, optimizar procesos y tomar el control total de tu negocio.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/logo_central_negro.png",
    apple: "/assets/logo_central_negro.png",
    shortcut: "/assets/logo_central_negro.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Consent Mode v2 Default State */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { window.dataLayer.push(arguments); }
            
            // Check if there's an existing consent decision
            const savedConsent = typeof window !== 'undefined' ? localStorage.getItem('cookie-consent-choice') : null;
            
            if (savedConsent) {
              gtag('consent', 'default', JSON.parse(savedConsent));
            } else {
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
            }
          `}
        </Script>
      </head>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
      <body className={`${inter.variable} ${playfair.variable} ${caveat.variable} antialiased font-body`}>
        <ChatProvider>
          <GTMClickTracker />
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
          <CookieBanner />
        </ChatProvider>
      </body>
    </html>
  );
}

