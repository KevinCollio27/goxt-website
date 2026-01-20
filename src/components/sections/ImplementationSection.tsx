"use client";

import { motion } from "framer-motion";
import { Calendar, Settings, Users, Rocket, CheckCircle } from "lucide-react";

interface ImplementationStep {
    week: number;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    Icon: React.ComponentType<{ className?: string }>;
    tasks: string[];
    deliverables: string[];
}

const implementationSteps: ImplementationStep[] = [
    {
        week: 1,
        title: "Conexión y Configuración",
        description: "Configurar la base de GOxT para tu operación específica de transporte.",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        Icon: Calendar,
        tasks: [
            "Crear cuenta empresarial y configurar datos básicos",
            "Definir tipos de transporte y unidades de medida",
            "Configurar plantillas de cotización con logo empresarial",
            "Conectar correo corporativo para envíos automáticos"
        ],
        deliverables: [
            "Cuenta GOxT activa con dominio empresarial",
            "Catalogo inicial de servicios configurado",
            "Plantillas de cotización profesional listas",
            "Sistema de correo verificado y funcional"
        ]
    },
    {
        week: 2,
        title: "Importación de Datos",
        description: "Migrar tu información actual a GOxT sin pérdida de datos.",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        Icon: Settings,
        tasks: [
            "Importar clientes y contactos desde archivos Excel",
            "Cargar vehículos de flota con sus características",
            "Migrar servicios y tarifas actuales",
            "Validar integridad de datos migrados"
        ],
        deliverables: [
            "Base de clientes completa en GOxT CRM",
            "Flota vehicular cargada en GOxT Cargo",
            "Catalogo de servicios con precios migrado",
            "Reporte de migración exitosa"
        ]
    },
    {
        week: 3,
        title: "Equipos y Permisos",
        description: "Configurar acceso seguro para cada rol en tu operación.",
        color: "text-green-600",
        bgColor: "bg-green-50",
        Icon: Users,
        tasks: [
            "Crear perfiles por rol (Ventas, Operaciones, Gerencia)",
            "Invitar equipo comercial y operativo",
            "Configurar permisos de acceso específicos",
            "Realizar capacitación inicial por equipo"
        ],
        deliverables: [
            "Todos los usuarios con acceso activo",
            "Matriz de permisos configurada",
            "Capacitación básica completada",
            "Soporte inicial de 1 semana activo"
        ]
    },
    {
        week: 4,
        title: "Go Live Inmediato",
        description: "Operar al 100% con GOxT desde el primer día.",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        Icon: Rocket,
        tasks: [
            "Generar primera cotización oficial con GOxT CRM",
            "Crear órdenes de transporte desde cotizaciones aprobadas",
            "Operar rutas con seguimiento en tiempo real",
            "Generar facturación automática desde servicios"
        ],
        deliverables: [
            "Primera cotización generada y enviada",
            "Proceso cotización→operación validado",
            "Dashboard operativo en tiempo real",
            "Soporte premium activo para continuidad"
        ]
    }
];

export function ImplementationSection() {
    return (
        <section className="goxt-section bg-gradient-to-b from-white to-blue-50/20">
            <div className="goxt-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 bg-[var(--goxt-primary-100)] text-[var(--goxt-primary)] rounded-full text-sm font-medium mb-4"
                    >
                        Implementación sin dolor
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-[var(--goxt-gray-900)]"
                        style={{ fontFamily: "var(--font-handwritten), cursive" }}
                    >
                        Implementación en{" "}
                        <span className="goxt-gradient-accent-text font-bold">4 pasos</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[var(--goxt-gray-600)] max-w-3xl mx-auto"
                    >
                        Un proceso completado con tan solo unos "clics" sin sorpresas, sin
                        retrasos, sin estrés.
                    </motion.p>
                </div>

                {/* Timeline - Desktop */}
                <div className="hidden lg:block relative">
                    {/* Linea de tiempo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

                    {implementationSteps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={step.week}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className={`flex items-center mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Contenido */}
                                <div className={`w-1/2 ${isEven ? 'pr-16 text-right' : 'pl-16'}`}>
                                    <div className="inline-flex items-center gap-3 mb-3">
                                        <span className={`text-sm font-bold ${step.color} bg-white px-3 py-1 rounded-full border`}>
                                            Paso {step.week}
                                        </span>
                                        <h3 className="text-2xl font-bold text-[var(--goxt-gray-900)]">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className="text-[var(--goxt-gray-600)] mb-4">
                                        {step.description}
                                    </p>

                                    <div className={`grid grid-cols-2 gap-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                                            <div className="text-sm font-semibold text-gray-500 mb-2">TAREAS</div>
                                            <ul className="space-y-2">
                                                {step.tasks.map((task, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700">{task}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-white rounded-xl p-4 border border-gray-200">
                                            <div className="text-sm font-semibold text-gray-500 mb-2">ENTREGABLES</div>
                                            <ul className="space-y-2">
                                                {step.deliverables.map((deliverable, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700">{deliverable}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Icono en el centro */}
                                <div className="relative flex-shrink-0 w-16 h-16">
                                    <div className={`absolute inset-0 ${step.bgColor} rounded-full`}></div>
                                    <div className="relative w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                                        <step.Icon className={`w-8 h-8 ${step.color}`} />
                                    </div>
                                </div>

                                {/* Espacio vacío para alineación */}
                                <div className="w-1/2"></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Timeline - Mobile */}
                <div className="lg:hidden space-y-8">
                    {implementationSteps.map((step, index) => (
                        <motion.div
                            key={step.week}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`flex-shrink-0 w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center`}>
                                    <step.Icon className={`w-6 h-6 ${step.color}`} />
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-1">
                                        <span className={`text-xs font-bold ${step.color} bg-white px-2 py-1 rounded border`}>
                                            Paso {step.week}
                                        </span>
                                        <h3 className="text-xl font-bold text-[var(--goxt-gray-900)]">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-[var(--goxt-gray-600)] text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="text-sm font-semibold text-gray-500 mb-2">TAREAS PRINCIPALES</div>
                                    <ul className="space-y-2">
                                        {step.tasks.map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="text-sm font-semibold text-gray-500 mb-2">ENTREGABLES</div>
                                    <ul className="space-y-2">
                                        {step.deliverables.map((deliverable, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{deliverable}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats y CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16"
                >
                    <div className="bg-gradient-to-r from-[var(--goxt-primary)] to-blue-700 rounded-2xl p-8 text-white">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">100%</div>
                                <div className="text-sm opacity-90">De Confiabilidad</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">4</div>
                                <div className="text-sm opacity-90">Pasos de implementación</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">24/7</div>
                                <div className="text-sm opacity-90">Soporte durante implementación</div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">
                                ¿Preocupado por la transición?
                            </h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                Te guiamos paso a paso y garantizamos que estarás operando en tiempo récord.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contacto"
                                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[var(--goxt-primary)] px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Agendar consulta de implementación
                                </a>
                                <a
                                    href="/nosotros"
                                    className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                                >
                                    Conocer al equipo de implementación
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}