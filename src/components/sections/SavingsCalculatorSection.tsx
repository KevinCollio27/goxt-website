"use client";

import Link from "next/link";
import { useState } from "react";

interface SoftwareOption {
    name: string;
    category: string;
    price: number;
}

interface PricingData {
    crm: {
        professional: {
            monthlyPrice: number;
        };
    };
}

interface BundlePricing {
    monthlyPrice: number;
}

interface SavingsCalculatorProps {
    pricingData: PricingData;
    bundlePricing: BundlePricing;
}

export function SavingsCalculator({ pricingData, bundlePricing }: SavingsCalculatorProps) {
    const [selectedSoftware, setSelectedSoftware] = useState<string[]>([]);
    const [userCount, setUserCount] = useState(20);

    const softwareOptions: SoftwareOption[] = [
        { name: "Pipedrive/HubSpot", category: "CRM", price: 29 },
        { name: "QuickBooks", category: "Contabilidad", price: 30 },
        { name: "Sistema TMS", category: "Gestión Transporte", price: 50 },
        { name: "Power BI/Metabase", category: "Analytics", price: 20 },
        { name: "Google Workspace", category: "Productividad", price: 6 },
        { name: "Slack/Microsoft Teams", category: "Comunicación", price: 8 }
    ];

    const toggleSoftware = (software: string) => {
        setSelectedSoftware(prev =>
            prev.includes(software)
                ? prev.filter(s => s !== software)
                : [...prev, software]
        );
    };

    const calculateSavings = () => {
        // Calculata el costo mensual total del software competidor seleccionado
        const totalCompetitorMonthly = selectedSoftware.reduce((sum, software) => {
            const soft = softwareOptions.find(s => s.name === software);
            return sum + (soft ? soft.price * userCount : 0);
        }, 0);

        // Calculata el costo anual total
        const totalCompetitor = totalCompetitorMonthly * 12;

        // Calculata el costo de GOxT basado en el producto seleccionado
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

        // Logica para el precio de GOxT
        if (selectedSoftware.length === 1) {
            // Si solo se selecciona 1 software, usar CRM Professional
            goxtCostMonthly = pricingData.crm.professional.monthlyPrice * userCount;
        } else if (selectedSoftware.length >= 2) {
            // Si se seleccionan 2 o más, usar Bundle Suite
            goxtCostMonthly = bundlePricing.monthlyPrice * userCount;
        }

        // Aplicar descuento por volumen
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
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Software Selection */}
                <div>
                    <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-6">
                        ¿Qué software utilizas actualmente?
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {softwareOptions.map((software, index) => (
                            <div
                                key={index}
                                onClick={() => toggleSoftware(software.name)}
                                className={`relative p-4 bg-white rounded-lg border-2 cursor-pointer transition-all ${selectedSoftware.includes(software.name)
                                    ? "border-[var(--goxt-accent)] shadow-md"
                                    : "border-gray-200 hover:border-gray-300"
                                    }`}
                            >
                                {selectedSoftware.includes(software.name) && (
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--goxt-accent)] rounded-full flex items-center justify-center text-white text-sm">
                                        ✓
                                    </div>
                                )}
                                <div className="text-center">
                                    <div className="text-2xl mb-2">📦</div>
                                    <p className="text-xs font-semibold text-[var(--goxt-gray-700)]">
                                        {software.name}
                                    </p>
                                    <p className="text-xs text-[var(--goxt-gray-500)] mt-1">
                                        ${software.price}/usuario
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* User Count */}
                    <div>
                        <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-4">
                            ¿Cuántos usuarios?
                        </h3>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setUserCount(Math.max(1, userCount - 1))}
                                className="w-10 h-10 bg-white border-2 border-gray-300 rounded-md font-bold text-xl hover:bg-gray-50"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={userCount}
                                onChange={(e) => setUserCount(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-20 text-center border-2 border-gray-300 rounded-md py-2 font-semibold"
                            />
                            <button
                                onClick={() => setUserCount(userCount + 1)}
                                className="w-10 h-10 bg-white border-2 border-gray-300 rounded-md font-bold text-xl hover:bg-gray-50"
                            >
                                +
                            </button>
                        </div>
                        {userCount >= 10 && (
                            <p className="text-sm text-[var(--goxt-accent)] mt-2 font-semibold">
                                ✓ Aplicable descuento por volumen: {savings.discountPercentage}% de descuento
                            </p>
                        )}
                    </div>
                </div>

                {/* Savings Calculation */}
                <div>
                    <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-6">
                        Costo actual vs GOxT
                    </h3>

                    {/* Competitor Software Cost */}
                    <div className="bg-white rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-[var(--goxt-gray-900)] mb-4">
                            Software actual ({selectedSoftware.length} seleccionados)
                        </h4>
                        {selectedSoftware.length > 0 ? (
                            <div className="space-y-3">
                                {selectedSoftware.map((software, index) => {
                                    const soft = softwareOptions.find(s => s.name === software);
                                    const monthlyCost = soft ? soft.price * userCount : 0;
                                    return (
                                        <div key={index} className="flex justify-between text-sm">
                                            <span className="text-[var(--goxt-gray-700)]">{software}</span>
                                            <div className="text-right">
                                                <div className="font-semibold">
                                                    USD {monthlyCost.toFixed(2)} /mes
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="border-t pt-3 mt-3">
                                    <div className="flex justify-between font-bold">
                                        <span>TOTAL MENSUAL</span>
                                        <div className="text-right">
                                            <div>USD {savings.totalCompetitorMonthly.toFixed(2)}</div>
                                            <div className="text-xs font-normal text-[var(--goxt-gray-500)]">
                                                USD {savings.totalCompetitor.toFixed(2)} /año
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-[var(--goxt-gray-500)]">
                                Selecciona el software que utilizas actualmente
                            </p>
                        )}
                    </div>

                    {/* GOxT Cost */}
                    <div className="bg-white rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-[var(--goxt-gray-900)] mb-4">
                            Solución GOxT {selectedSoftware.length > 1 ? "Suite Bundle" : "Profesional"}
                        </h4>
                        <p className="text-sm text-[var(--goxt-gray-600)] mb-4">
                            {userCount} usuarios
                        </p>
                        {savings.discountPercentage > 0 && (
                            <p className="text-sm text-[var(--goxt-accent)] mb-2 font-semibold">
                                Descuento aplicado: {savings.discountPercentage}%
                            </p>
                        )}
                        <div className="border-t pt-3">
                            <div className="flex justify-between font-bold">
                                <span>TOTAL MENSUAL</span>
                                <div className="text-right">
                                    <div className="text-[var(--goxt-primary)]">USD {savings.goxtCostMonthly.toFixed(2)}</div>
                                    <div className="text-xs font-normal text-[var(--goxt-gray-500)]">
                                        USD {savings.goxtCost.toFixed(2)} /año
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {savings.savings > 0 && (
                        <div className="mt-6 text-center">
                            <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                Ahorrarías
                            </p>
                            <p className="text-4xl font-bold goxt-gradient-accent-text" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                USD {savings.savingsMonthly.toFixed(2)} al mes
                            </p>
                            <div className="text-sm text-[var(--goxt-gray-600)] mt-2">
                                <div>USD {savings.savings.toFixed(2)} al año</div>
                                <div className="mt-1">
                                    por gestionar toda tu empresa con una solución integrada.
                                </div>
                            </div>
                            <button className="goxt-btn-accent mt-6 px-8 py-3">
                                COMENZAR AHORRO
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}