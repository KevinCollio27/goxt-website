"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Share2, BarChart3, ArrowRight, Info, Box } from "lucide-react";
import Image from "next/image";

const platforms = [
  {
    id: "crm",
    name: "CRM",
    description: "Gestiona leads, cotizaciones e integra tu operación comercial en un solo lugar. Inicia sesión para potenciar tu seguimiento de ventas.",
    icon: Users,
    iconBg: "bg-amber-500/20 text-amber-300",
    loginUrl: "https://crm.goxt.io/",
    color: "blue",
    productUrl: "/productos/crm",
  },
  {
    id: "tms",
    name: "TMS GONetwork",
    description: "La red colaborativa que conecta transportistas y generadores de carga. Accede para optimizar tu red logística con visibilidad total.",
    icon: Share2,
    iconBg: "bg-emerald-500/20 text-emerald-400",
    loginUrl: "https://network.goxt.io/",
    color: "emerald",
    productUrl: "/productos/tms-network",
  },
  {
    id: "bi",
    name: "Business Intelligence",
    description: "Analítica avanzada y dashboards interactivos para decisiones basadas en datos.",
    icon: BarChart3,
    iconBg: "bg-purple-500/20 text-purple-400",
    loginUrl: "#",
    color: "purple",
    isComingSoon: true,
  },
  {
    id: "cargo",
    name: "TMS Cargo",
    description: "Software especializado para dadores de carga. Digitaliza y optimiza tu proceso de contratación de transporte.",
    icon: Box,
    iconBg: "bg-blue-500/20 text-blue-400",
    loginUrl: "#",
    color: "blue",
    isComingSoon: true,
  },
];

export default function AccederPage() {
  return (
    <div className="min-h-screen bg-[#010D17] text-white flex flex-col items-center pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background gradients for visual depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center justify-center mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-tight font-bold"
            style={{ fontFamily: "var(--font-handwritten), cursive", color: "white" }}
          >
            Accede a <span className="goxt-gradient-accent-text">tu ecosistema</span>
          </h1>
          <Image
            src="/assets/logo_goxt_blanco.png"
            alt="GOxT"
            width={180}
            height={60}
            className="h-10 md:h-16 w-auto object-contain"
            priority
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6"
        >
          Selecciona la plataforma en la que deseas trabajar hoy.
        </motion.p>
      </div>

      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="group"
          >
            <div className={`h-full relative bg-[#0A1A2B]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 flex flex-col transition-all duration-300 ${platform.isComingSoon ? 'opacity-80' : ''}`}>
              {/* Product Info Link */}
              {platform.productUrl && (
                <Link
                  href={platform.productUrl}
                  className="absolute top-8 right-8 p-2.5 rounded-xl bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-all border border-white/5 group/info"
                  title="Ver detalles del producto"
                >
                  <Info className="w-5 h-5 transition-transform group-hover/info:scale-110" />
                </Link>
              )}

              {/* Tag for Coming Soon */}
              {platform.isComingSoon && (
                <div className="absolute top-8 right-8">
                  <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-purple-500/20 uppercase tracking-wider backdrop-blur-md">
                    Próximamente
                  </span>
                </div>
              )}

              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${platform.iconBg}`}>
                <platform.icon className="w-7 h-7" />
              </div>


              {/* Content */}
              <h3
                className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-200 transition-colors"
                style={{ fontFamily: 'var(--font-body), sans-serif' }}
              >
                {platform.name}
              </h3>

              <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow">
                {platform.description}
              </p>

              {/* Action Buttons */}
              <div className="space-y-4">
                {platform.isComingSoon ? (
                  <Link
                    href="/contacto"
                    className="w-full flex items-center justify-center gap-2 bg-white/5 text-white/50 py-3.5 px-6 rounded-xl font-semibold border border-white/5 cursor-pointer hover:bg-white/10 hover:text-white transition-all"
                  >
                    Solicitar más información
                  </Link>
                ) : (
                  <>
                    <a
                      href={platform.loginUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 py-3.5 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all group/btn"
                    >
                      Iniciar Sesión
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
