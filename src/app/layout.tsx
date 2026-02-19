import type { Metadata } from "next";
import { Inter, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";
import { ChatProvider } from "@/context/ChatContext";
import { ChatWidget } from "@/components/ui/ChatWidget";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${caveat.variable} antialiased`}>
        <ChatProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </ChatProvider>
      </body>
    </html>
  );
}
