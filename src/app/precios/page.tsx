"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SavingsCalculator, FAQSection } from "@/components/sections";
import ConcentricCircles from "@/components/ui/ConcentricCircles";

export default function PreciosPage() {
    const [productView, setProductView] = useState<"crm" | "cargo">("crm");
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
    const [selectedSoftware, setSelectedSoftware] = useState<string[]>([]);
    const [userCount, setUserCount] = useState(20);

    const applications = [
        { name: "Cargo", icon: "📊" },
        { name: "CRM", icon: "✍️" },
    ];

    const softwareOptions = [
        { name: "Pipedrive/HubSpot", category: "CRM", price: 29 },
        { name: "QuickBooks", category: "Contabilidad", price: 30 },
        { name: "Sistema TMS", category: "Gestión Transporte", price: 50 },
        { name: "Power BI/Metabase", category: "Analytics", price: 20 },
        { name: "Google Workspace", category: "Productividad", price: 6 },
        { name: "Slack/Microsoft Teams", category: "Comunicación", price: 8 }
    ];

    // Pricing data for CRM and Cargo
    const pricingData = {
        crm: {
            starter: {
                title: "Starter Gratis",
                price: "0",
                description: "Ideal para probar el sistema sin límites",
                features: [
                    "Hasta 3 usuarios",
                    "Gestión básica de contactos",
                    "1 pipeline personalizable",
                    "Generación de cotizaciones básicas",
                    "Soporte por email"
                ],
                borderColor: "var(--goxt-accent)"
            },
            professional: {
                title: "Profesional",
                price: "29",
                monthlyPrice: 29,
                annualPrice: 24.07, // ~17% descuento
                description: "Ideal para PyMEs en crecimiento",
                features: [
                    "Usuarios ilimitados",
                    "Campos dinámicos en productos",
                    "Pipelines personalizables",
                    "Integración con Google Calendar",
                    "Dashboards Metabase básicos",
                    "Soporte prioritario"
                ],
                borderColor: "var(--goxt-primary)"
            },
            enterprise: {
                title: "Enterprise",
                price: "Personalizado",
                description: "Ideal para empresas consolidadas con necesidades específicas",
                features: [
                    "Todo lo del plan Profesional",
                    "Workspaces múltiples",
                    "API avanzada e integraciones",
                    "Catálogos personalizados ilimitados",
                    "Dashboards Metabase premium",
                    "Soporte 24/7 y onboarding dedicado"
                ],
                borderColor: "var(--goxt-accent)"
            }
        },
        cargo: {
            starter: {
                title: "Starter Gratis",
                price: "0",
                description: "Para probar la integración básica",
                features: [
                    "Sincronización básica de datos",
                    "Hasta 50 órdenes/mes",
                    "1 conexión API",
                    "Soporte por documentación"
                ],
                borderColor: "var(--goxt-accent)"
            },
            professional: {
                title: "Profesional",
                price: billingPeriod === "monthly" ? "39" : "33",
                monthlyPrice: 39,
                annualPrice: 28.05, // ~15% descuento
                description: "Para empresas que requieren integración completa",
                features: [
                    "Sincronización en tiempo real",
                    "Órdenes ilimitadas",
                    "Múltiples conexiones API",
                    "Geocercas y rutas avanzadas",
                    "Dashboard de seguimiento logístico",
                    "Soporte técnico prioritario"
                ],
                borderColor: "var(--goxt-primary)"
            },
            enterprise: {
                title: "Enterprise",
                price: "Personalizado",
                description: "Solución integral para operaciones logísticas complejas",
                features: [
                    "Todo lo del plan Profesional",
                    "On-premise deployment opcional",
                    "SLA 99.9% de disponibilidad",
                    "Auditoría y reporting avanzado",
                    "Desarrollo de integraciones personalizadas",
                    "Gerente de cuenta dedicado"
                ],
                borderColor: "var(--goxt-accent)"
            }
        }
    };

    // Bundle pricing
    const bundlePricing = {
        title: "GOxT Suite Bundle",
        description: "CRM + Cargo - La combinación perfecta",
        monthlyPrice: 55,
        savingsPercentage: 19,
        features: [
            "Todo el plan Profesional de CRM",
            "Todo el plan Profesional de Cargo",
            "Sincronización automática entre sistemas",
            "Dashboard unificado de ventas y logística",
            "Soporte premium conjunto"
        ]
    };

    // Descuentos por volumen
    const volumeDiscounts = [
        { users: "10-25", discount: "5%" },
        { users: "26-50", discount: "10%" },
        { users: "51-100", discount: "15%" },
        { users: "101-250", discount: "20%" },
        { users: "251+", discount: "Contactar para precio especial" }
    ];

    const toggleSoftware = (software: string) => {
        setSelectedSoftware(prev =>
            prev.includes(software)
                ? prev.filter(s => s !== software)
                : [...prev, software]
        );
    };

    const calculateSavings = () => {
        // Calcula el total mensual de los software seleccionados competidores
        const totalCompetitorMonthly = selectedSoftware.reduce((sum, software) => {
            const soft = softwareOptions.find(s => s.name === software);
            return sum + (soft ? soft.price * userCount : 0);
        }, 0);

        // Calcula el costo total ANNUAL 
        const totalCompetitor = totalCompetitorMonthly * 12;

        // Calcula el costo total de GOxT basado en el producto seleccionado
        let goxtCostMonthly = 0;

        if (selectedSoftware.length === 0) {
            return {
                totalCompetitorMonthly: 0,
                totalCompetitor: 0,
                goxtCostMonthly: 0,
                goxtCost: 0,
                savingsMonthly: 0,
                savings: 0,
                discountPercentage: 0
            };
        }

        // Lógica actualizada con los nombres correctos
        if (selectedSoftware.length === 1) {
            // Si solo selecciona 1 software, usa CRM Professional
            goxtCostMonthly = pricingData.crm.professional.monthlyPrice * userCount;
        } else if (selectedSoftware.length >= 2) {
            // Si selecciona 2 o más, usa Bundle Suite
            goxtCostMonthly = bundlePricing.monthlyPrice * userCount;
        }

        // Aplica el descuento por volumen
        let discount = 0;
        if (userCount >= 10 && userCount <= 25) discount = 0.05;
        else if (userCount >= 26 && userCount <= 50) discount = 0.10;
        else if (userCount >= 51 && userCount <= 100) discount = 0.15;
        else if (userCount >= 101 && userCount <= 250) discount = 0.20;

        goxtCostMonthly = goxtCostMonthly * (1 - discount);
        const goxtCost = goxtCostMonthly * 12;

        const savingsMonthly = totalCompetitorMonthly - goxtCostMonthly;
        const savings = totalCompetitor - goxtCost;

        return {
            totalCompetitorMonthly,
            totalCompetitor,
            goxtCostMonthly,
            goxtCost,
            savingsMonthly: savingsMonthly > 0 ? savingsMonthly : 0,
            savings: savings > 0 ? savings : 0,
            discountPercentage: discount * 100
        };
    };

    const savings = calculateSavings();

    return (
        <div className="pt-24">
            <ConcentricCircles />
            {/* Header */}
            <section className="py-20">
                <div className="goxt-container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--goxt-gray-900)] mb-6" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                        ¡No te pierdas esta <span className="goxt-gradient-accent-text">Oportunidad</span>!
                    </h1>
                    <p className="text-xl text-[var(--goxt-gray-600)] mb-12 max-w-3xl mx-auto">
                        Soluciones especializadas para transporte, logística y ventas B2B
                    </p>

                    {/* Product Selection Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <button
                            onClick={() => setProductView("crm")}
                            className={`px-8 py-3 rounded-full transition-all ${productView === "crm"
                                ? "bg-[var(--goxt-primary)] text-white"
                                : "bg-gray-200 text-[var(--goxt-gray-600)] hover:bg-gray-300"
                                } font-semibold`}
                        >
                            GOxT CRM
                        </button>
                        <button
                            onClick={() => setProductView("cargo")}
                            className={`px-8 py-3 rounded-full transition-all ${productView === "cargo"
                                ? "bg-[var(--goxt-primary)] text-white"
                                : "bg-gray-200 text-[var(--goxt-gray-600)] hover:bg-gray-300"
                                } font-semibold`}
                        >
                            GOxT Cargo
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-20">
                <div className="goxt-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Free Plan */}
                        <div className="goxt-card border-t-4" style={{ borderTopColor: pricingData[productView].starter.borderColor }}>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-4">
                                    {pricingData[productView].starter.title}
                                </h3>
                                <div className="mb-6">
                                    <span className="text-[var(--goxt-accent)] text-2xl font-bold">$</span>
                                    <span className="text-[var(--goxt-accent)] text-5xl font-bold">{pricingData[productView].starter.price}</span>
                                </div>
                                <p className="text-sm text-[var(--goxt-gray-600)] mb-6">
                                    {pricingData[productView].starter.description}
                                </p>
                                <ul className="space-y-3 mb-8 text-sm text-[var(--goxt-gray-700)]">
                                    {pricingData[productView].starter.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-[var(--goxt-accent)] mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="goxt-btn-accent w-full mb-3">
                                    COMIENZA AHORA
                                </button>
                            </div>
                        </div>

                        {/* Professional Plan */}
                        <div className="goxt-card border-t-4 relative" style={{ borderTopColor: pricingData[productView].professional.borderColor }}>
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--goxt-accent)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                MÁS POPULAR
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-4">
                                    {pricingData[productView].professional.title}
                                </h3>
                                <div className="mb-2">
                                    <span className="text-[var(--goxt-primary)] text-2xl font-bold">$</span>
                                    <span className="text-[var(--goxt-primary)] text-5xl font-bold">{pricingData[productView].professional.price}</span>
                                    {productView === "crm" && billingPeriod === "annual" && (
                                        <span className="text-lg font-bold text-[var(--goxt-primary)]">/mes</span>
                                    )}
                                </div>
                                {productView === "cargo" ? (
                                    <div className="mb-6">
                                        <p className="text-xs text-[var(--goxt-gray-600)]">
                                            {billingPeriod === "monthly" ? "Facturación mensual" : "Facturación anual (ahorra $6/mes)"}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="mb-6">
                                        <p className="text-xs text-[var(--goxt-gray-600)]">
                                            por usuario al mes
                                        </p>
                                    </div>
                                )}
                                <p className="text-sm text-[var(--goxt-gray-600)] mb-6">
                                    {pricingData[productView].professional.description}
                                </p>
                                <ul className="space-y-3 mb-8 text-sm text-[var(--goxt-gray-700)]">
                                    {pricingData[productView].professional.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-[var(--goxt-primary)] mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="goxt-btn-accent w-full mb-3">
                                    COMPRA AHORA
                                </button>
                                <button className="w-full border-2 border-[var(--goxt-primary)] text-[var(--goxt-primary)] py-3 rounded-md font-semibold hover:bg-[var(--goxt-primary)] hover:text-white transition-colors">
                                    PRUÉBALO GRATIS
                                </button>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="goxt-card border-t-4" style={{ borderTopColor: pricingData[productView].enterprise.borderColor }}>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-4">
                                    {pricingData[productView].enterprise.title}
                                </h3>
                                <div className="mb-2">
                                    <span className="text-[var(--goxt-accent)] text-2xl font-bold">{pricingData[productView].enterprise.price}</span>
                                </div>
                                <p className="text-sm text-[var(--goxt-gray-600)] mb-6">
                                    {pricingData[productView].enterprise.description}
                                </p>
                                <ul className="space-y-3 mb-8 text-sm text-[var(--goxt-gray-700)]">
                                    {pricingData[productView].enterprise.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-[var(--goxt-accent)] mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="goxt-btn-accent w-full mb-3">
                                    COMPRAR AHORA
                                </button>
                                <button className="w-full border-2 border-[var(--goxt-primary)] text-[var(--goxt-primary)] py-3 rounded-md font-semibold hover:bg-[var(--goxt-primary)] hover:text-white transition-colors">
                                    PRUÉBALO GRATIS
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-sm text-[var(--goxt-gray-600)] mt-8 max-w-4xl mx-auto">
                        {productView === "crm"
                            ? "GOxT CRM es una solución especializada en gestión de relaciones con clientes para empresas de transporte, logística y ventas B2B."
                            : "GOxT Cargo es la plataforma de integración logística que sincroniza tu sistema operativo con el CRM para una gestión unificada."}
                    </p>
                </div>
            </section>

            {/* Bundles & Discounts Section */}
            <section className="py-20 bg-gray-50">
                <div className="goxt-container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--goxt-gray-900)]" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                        Paquetes y <span className="goxt-gradient-accent-text">Descuentos</span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        {/* Bundle Card */}
                        <div className="goxt-card border-2 border-[var(--goxt-accent)] mb-12">
                            <div className="p-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--goxt-gray-900)] mb-2">
                                            {bundlePricing.title}
                                        </h3>
                                        <p className="text-[var(--goxt-gray-600)]">
                                            {bundlePricing.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 md:mt-0 text-center">
                                        <div className="mb-2">
                                            <span className="text-[var(--goxt-accent)] text-3xl font-bold">$</span>
                                            <span className="text-[var(--goxt-accent)] text-5xl font-bold">{bundlePricing.monthlyPrice}</span>
                                            <span className="text-lg font-bold text-[var(--goxt-gray-700)]">/mes</span>
                                        </div>
                                        <div className="inline-block bg-[var(--goxt-accent)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            AHORRA {bundlePricing.savingsPercentage}%
                                        </div>
                                    </div>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-sm text-[var(--goxt-gray-700)]">
                                    {bundlePricing.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-[var(--goxt-accent)] mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="goxt-btn-accent w-full">
                                    CONTRATAR PAQUETE COMPLETO
                                </button>
                            </div>
                        </div>

                        {/* Volume Discounts */}
                        <div className="bg-white rounded-xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-[var(--goxt-gray-900)] mb-6 text-center">
                                Descuentos por Volumen
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="text-left py-3 px-4 font-semibold text-[var(--goxt-gray-700)]">Usuarios</th>
                                            <th className="text-left py-3 px-4 font-semibold text-[var(--goxt-gray-700)]">Descuento</th>
                                            <th className="text-left py-3 px-4 font-semibold text-[var(--goxt-gray-700)]">Precio por usuario/mes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {volumeDiscounts.map((discount, index) => {
                                            const basePrice = productView === "crm" ? 29 : 39;
                                            const discountedPrice = basePrice * (1 - parseInt(discount.discount) / 100);
                                            return (
                                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-medium">{discount.users}</td>
                                                    <td className="py-3 px-4">
                                                        <span className="text-[var(--goxt-accent)] font-semibold">{discount.discount}</span>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        {discount.discount === "Contactar para precio especial"
                                                            ? <span className="text-[var(--goxt-gray-600)]">Contactar para precio especial</span>
                                                            : `$${discountedPrice.toFixed(2)}`
                                                        }
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-[var(--goxt-gray-600)] mt-6 text-center">
                                Los descuentos aplican para planes Enterprise • Contacta para cotizaciones personalizadas
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Grid */}
            <section className="py-12 bg-gray-50">
                <div className="goxt-container">
                    <div className="grid grid-cols-2 gap-12 justify-center max-w-md mx-auto">
                        {applications.map((app, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center text-center 
                                        w-32 h-32 p-4 rounded-lg hover:bg-white hover:shadow-md 
                                        transition-all duration-300 cursor-pointer group"
                            >
                                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {app.icon}
                                </div>
                                <p className="text-sm font-semibold text-[var(--goxt-gray-800)]">
                                    {app.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="#" className="text-[var(--goxt-primary)] font-semibold hover:underline" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                            Pronto muchas más...
                        </Link>
                    </div>

                    <div className="max-w-4xl mx-auto mt-8 text-sm text-[var(--goxt-gray-600)]">
                        <p className="mb-2">
                            Todos nuestros planes incluyen <strong>soporte ilimitado</strong>, <strong>alojamiento</strong> y <strong>mantenimiento</strong>.
                        </p>
                        <p className="mb-1">
                            No hay costos ocultos ni límite en las funciones o datos. <strong>¡Transparencia total!</strong>
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/contacto" className="inline-block border-2 border-[var(--goxt-primary)] text-[var(--goxt-primary)] px-8 py-3 rounded-md font-semibold hover:bg-[var(--goxt-primary)] hover:text-white transition-colors">
                            Contacta a un consultor
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reduce Costs Section */}
            <section className="py-20">
                <div className="goxt-container">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[var(--goxt-gray-900)]" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                        <span className="goxt-gradient-accent-text">Reduce tus gastos</span> con GOxT
                    </h2>
                    <p className="text-center text-[var(--goxt-gray-600)] mb-16">
                        Compara el costo de software separado vs nuestra solución integrada
                    </p>

                    {/* Componente separado */}
                    <SavingsCalculator
                        pricingData={pricingData}
                        bundlePricing={bundlePricing}
                    />
                </div>
            </section>
            <FAQSection />
        </div>
    );
}