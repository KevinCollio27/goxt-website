"use client";

import { motion } from "framer-motion";
import { Calendar, Settings, Users, Rocket, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ImplementationStep {
    step: number;
    title: string;
    description: string;
    Icon: LucideIcon;
    tasks: string[];
    deliverables: string[];
}

const implementationSteps: ImplementationStep[] = [
    {
        step: 1,
        title: "Conexión y Configuración",
        description: "Configurar la base de GOxT para tu operación específica de transporte.",
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
        step: 2,
        title: "Importación de Datos",
        description: "Migrar tu información actual a GOxT sin pérdida de datos.",
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
        step: 3,
        title: "Equipos y Permisos",
        description: "Configurar acceso seguro para cada rol en tu operación.",
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
        step: 4,
        title: "Go Live Inmediato",
        description: "Operar al 100% con GOxT desde el primer día.",
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
        <section className="goxt-section" style={{ background: 'var(--goxt-surface-alt)' }}>
            <div className="goxt-container">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6"
                        style={{
                            background: 'var(--goxt-surface-card)',
                            color: 'var(--goxt-primary)',
                            border: '1px solid var(--goxt-gray-200)',
                        }}
                    >
                        Implementación sin dolor
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{
                            fontFamily: "var(--font-display), serif",
                            color: 'var(--text-primary)'
                        }}
                    >
                        Implementación en <span className="goxt-gradient-accent-text" style={{ fontFamily: "var(--font-handwritten), cursive" }}>4 pasos</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Un proceso completado con tan solo unos "clics", sin retrasos y con total transparencia.
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Linea Central de Tiempo */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full opacity-20 hidden lg:block"
                        style={{ background: 'var(--goxt-midnight)' }}
                    />

                    {implementationSteps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={step.step} className="relative mb-24 last:mb-0">
                                {/* Desktop Layout */}
                                <div className={`hidden lg:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                    {/* Contenido (lado izquierdo o derecho) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, ease: "circOut" }}
                                        className="w-1/2"
                                    >
                                        <div className={`${isEven ? 'pr-20 text-right' : 'pl-20'}`}>
                                            <div className={`flex items-center gap-4 mb-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                                <span
                                                    className="text-3xl font-bold"
                                                    style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-accent)' }}
                                                >
                                                    Paso {step.step}
                                                </span>
                                                <h3 className="text-3xl font-bold text-slate-800">{step.title}</h3>
                                            </div>

                                            <p className="text-slate-500 mb-8 max-w-md ml-auto mr-0">
                                                {step.description}
                                            </p>

                                            <div className="grid grid-cols-2 gap-6">
                                                {/* Card Tareas */}
                                                <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-50 text-left">
                                                    <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Tareas Principales</div>
                                                    <ul className="space-y-3">
                                                        {step.tasks.map((task, idx) => (
                                                            <li key={idx} className="flex items-start gap-3">
                                                                <div
                                                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                                    style={{ background: 'var(--goxt-midnight)', color: 'var(--goxt-cream)' }}
                                                                >
                                                                    <Check className="w-3 h-3" strokeWidth={4} />
                                                                </div>
                                                                <span className="text-xs font-medium text-slate-600 leading-tight">{task}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Card Entregables */}
                                                <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-50 text-left">
                                                    <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Entregables</div>
                                                    <ul className="space-y-3">
                                                        {step.deliverables.map((deliverable, idx) => (
                                                            <li key={idx} className="flex items-start gap-3">
                                                                <div
                                                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                                    style={{ background: 'var(--goxt-midnight)', color: 'var(--goxt-cream)' }}
                                                                >
                                                                    <Check className="w-3 h-3" strokeWidth={4} />
                                                                </div>
                                                                <span className="text-xs font-medium text-slate-600 leading-tight">{deliverable}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Icono Central */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                                            className="w-16 h-16 rounded-full flex items-center justify-center border-[8px] border-white shadow-xl"
                                            style={{ background: 'var(--goxt-midnight)', color: 'var(--goxt-cream)' }}
                                        >
                                            <step.Icon className="w-6 h-6" strokeWidth={1.5} />
                                        </motion.div>
                                    </div>

                                    <div className="w-1/2"></div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="lg:hidden">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-50"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{ background: 'var(--goxt-midnight)', color: 'var(--goxt-cream)' }}
                                            >
                                                <step.Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold block" style={{ fontFamily: "var(--font-handwritten), cursive", color: 'var(--goxt-accent)' }}>Paso {step.step}</span>
                                                <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                                            </div>
                                        </div>

                                        <div className="grid gap-6">
                                            <div className="space-y-4">
                                                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Tareas Principales</div>
                                                <ul className="space-y-3">
                                                    {step.tasks.map((task, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'var(--goxt-midnight)', color: 'var(--goxt-cream)' }}>
                                                                <Check className="w-3 h-3" strokeWidth={4} />
                                                            </div>
                                                            <span className="text-sm text-slate-600">{task}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Entregables</div>
                                                <ul className="space-y-3">
                                                    {step.deliverables.map((deliverable, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'var(--goxt-midnight)', color: 'var(--goxt-cream)' }}>
                                                                <Check className="w-3 h-3" strokeWidth={4} />
                                                            </div>
                                                            <span className="text-sm text-slate-600">{deliverable}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Footer Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 rounded-[3.5rem] p-1 shadow-2xl"
                    style={{ background: 'white' }}
                >
                    <div
                        className="rounded-[3.4rem] p-12 md:p-16 text-center relative overflow-hidden"
                        style={{ background: 'var(--goxt-midnight)' }}
                    >
                        {/* Stats Grids */}
                        <div className="grid md:grid-cols-3 gap-12 mb-16 max-w-4xl mx-auto">
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--goxt-cream)' }}>100%</div>
                                <div className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-slate-300 transition-colors">Confiabilidad</div>
                            </div>
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--goxt-cream)' }}>4</div>
                                <div className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-slate-300 transition-colors">Pasos Ágiles</div>
                            </div>
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--goxt-cream)' }}>24/7</div>
                                <div className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-slate-300 transition-colors">Soporte Operativo</div>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                ¿Te preocupa el tiempo de transición?
                            </h3>
                            <p className="text-slate-300 mb-10 text-lg md:text-xl">
                                Nuestro equipo experto te acompaña en cada paso para asegurar un lanzamiento impecable.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href="/contacto"
                                    className="goxt-btn-primary text-xl px-12 py-5"
                                    style={{ background: 'var(--goxt-cream)', color: 'var(--goxt-midnight)' }}
                                >
                                    Agendar consulta gratuita
                                </a>
                                <a
                                    href="/nosotros"
                                    className="goxt-btn-secondary text-xl px-12 py-5 border-white/20 text-white hover:border-cream hover:text-cream"
                                    style={{ background: 'transparent' }}
                                >
                                    Conocer equipo
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}