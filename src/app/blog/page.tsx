"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: {
        name: string;
        role: string;
    };
    tags: string[];
    featured?: boolean;
}

const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Cómo la digitalización está transformando el transporte de carga en América Latina",
        excerpt: "Descubre las últimas tendencias tecnológicas que están revolucionando la industria del transporte y la logística en la región.",
        category: "Tendencias",
        date: "2026-01-10",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        author: {
            name: "María González",
            role: "Especialista en Logística",
        },
        tags: ["Digitalización", "Tecnología", "Logística"],
        featured: true,
    },
    {
        id: "2",
        title: "5 estrategias para optimizar la gestión de flotas en 2026",
        excerpt: "Aprende técnicas probadas para reducir costos operativos y mejorar la eficiencia de tu flota de transporte.",
        category: "Gestión",
        date: "2026-01-08",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
        author: {
            name: "Carlos Rodríguez",
            role: "Gerente de Operaciones",
        },
        tags: ["Flotas", "Eficiencia", "Costos"],
    },
    {
        id: "3",
        title: "La importancia del CRM en empresas de transporte",
        excerpt: "Por qué un sistema CRM especializado puede marcar la diferencia en la retención de clientes y el crecimiento del negocio.",
        category: "CRM",
        date: "2026-01-05",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        author: {
            name: "Ana Martínez",
            role: "Consultora de Negocios",
        },
        tags: ["CRM", "Clientes", "Ventas"],
    },
    {
        id: "4",
        title: "Automatización de cotizaciones: Ahorra tiempo y gana más contratos",
        excerpt: "Cómo la automatización de procesos puede acelerar tu ciclo de ventas y mejorar la precisión de tus cotizaciones.",
        category: "Automatización",
        date: "2026-01-03",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        author: {
            name: "Luis Fernández",
            role: "Director Comercial",
        },
        tags: ["Automatización", "Ventas", "Productividad"],
    },
    {
        id: "5",
        title: "Seguridad de datos en el sector transporte: Lo que necesitas saber",
        excerpt: "Guía completa sobre cómo proteger la información sensible de tu empresa y cumplir con las regulaciones vigentes.",
        category: "Seguridad",
        date: "2025-12-28",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        author: {
            name: "Patricia Silva",
            role: "Especialista en Seguridad",
        },
        tags: ["Seguridad", "Datos", "Compliance"],
    },
    {
        id: "6",
        title: "Tendencias del e-commerce y su impacto en la logística",
        excerpt: "El crecimiento del comercio electrónico está transformando las expectativas de entrega. ¿Está tu empresa preparada?",
        category: "Tendencias",
        date: "2025-12-25",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
        author: {
            name: "Roberto Díaz",
            role: "Analista de Mercado",
        },
        tags: ["E-commerce", "Logística", "Tendencias"],
    },
];

const categories = [
    { name: "Todos", count: blogPosts.length },
    { name: "Tendencias", count: blogPosts.filter(p => p.category === "Tendencias").length },
    { name: "Gestión", count: blogPosts.filter(p => p.category === "Gestión").length },
    { name: "CRM", count: blogPosts.filter(p => p.category === "CRM").length },
    { name: "Automatización", count: blogPosts.filter(p => p.category === "Automatización").length },
    { name: "Seguridad", count: blogPosts.filter(p => p.category === "Seguridad").length },
];

const featuredTopics = [
    {
        icon: TrendingUp,
        title: "Innovación",
        description: "Las últimas tendencias en tecnología para transporte.",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
    },
    {
        icon: Users,
        title: "Mejores Prácticas",
        description: "Estrategias probadas por líderes del sector.",
        color: "text-green-500",
        bgColor: "bg-green-50",
    },
    {
        icon: Shield,
        title: "Seguridad",
        description: "Protege tu operación y cumple regulaciones.",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
    },
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

    // Filtrar posts según la categoría seleccionada
    const filteredPosts = selectedCategory === "Todos"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const featuredPost = filteredPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-[var(--goxt-primary)] to-blue-600">
                <div className="goxt-container">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            <span className="text-sm font-medium">
                                Insights y conocimiento del sector
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Blog de GOxT
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                            Descubre las últimas tendencias, mejores prácticas y perspectivas
                            del futuro del transporte y la logística.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Topics */}
            <section className="goxt-section">
                <div className="goxt-container">
                    <div className="grid md:grid-cols-3 gap-6">
                        {featuredTopics.map((topic) => (
                            <div
                                key={topic.title}
                                className="goxt-card hover:shadow-xl"
                            >
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${topic.bgColor} mb-4`}>
                                    <topic.icon className={`w-6 h-6 ${topic.color}`} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-2">
                                    {topic.title}
                                </h3>
                                <p className="text-[var(--goxt-gray-600)]">
                                    {topic.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8">
                <div className="goxt-container">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md ${selectedCategory === category.name
                                        ? 'bg-[var(--goxt-primary)] text-white border-2 border-[var(--goxt-primary)]'
                                        : 'bg-white border-2 border-gray-200 text-[var(--goxt-gray-700)] hover:border-[var(--goxt-primary)] hover:text-[var(--goxt-primary)]'
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="goxt-section">
                    <div className="goxt-container">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-gradient-to-r from-[var(--goxt-primary)] to-blue-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-[var(--goxt-gray-900)]">
                                    Artículo Destacado
                                </h2>
                            </div>

                            <Link
                                href={`/blog/${featuredPost.id}`}
                                className="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="relative h-64 md:h-auto overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                            style={{ backgroundImage: `url(${featuredPost.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <span className="absolute top-6 left-6 px-4 py-2 bg-[var(--goxt-primary)] text-white text-sm font-semibold rounded-full">
                                            {featuredPost.category}
                                        </span>
                                    </div>

                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 text-sm text-[var(--goxt-gray-500)] mb-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(featuredPost.date).toLocaleDateString('es-ES', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--goxt-gray-900)] mb-4 group-hover:text-[var(--goxt-primary)] transition-colors">
                                            {featuredPost.title}
                                        </h3>

                                        <p className="text-[var(--goxt-gray-600)] mb-6 leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--goxt-primary)] to-blue-600 flex items-center justify-center text-white font-semibold">
                                                    {featuredPost.author.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-[var(--goxt-gray-900)]">
                                                        {featuredPost.author.name}
                                                    </div>
                                                    <div className="text-sm text-[var(--goxt-gray-500)]">
                                                        {featuredPost.author.role}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-[var(--goxt-primary)] font-semibold group-hover:gap-4 transition-all">
                                                Leer más
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Regular Posts Grid */}
            <section className="goxt-section">
                <div className="goxt-container">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-1 w-12 bg-gradient-to-r from-[var(--goxt-primary)] to-blue-600 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-[var(--goxt-gray-900)]">
                            Últimos Artículos
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <div key={post.id}>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                            style={{ backgroundImage: `url(${post.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--goxt-primary)] text-xs font-semibold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-xs text-[var(--goxt-gray-500)] mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString('es-ES', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-[var(--goxt-gray-900)] mb-3 group-hover:text-[var(--goxt-primary)] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-[var(--goxt-gray-600)] mb-4 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--goxt-primary)] to-blue-600 flex items-center justify-center text-white text-xs font-semibold">
                                                {post.author.name.charAt(0)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-sm text-[var(--goxt-gray-900)] truncate">
                                                    {post.author.name}
                                                </div>
                                                <div className="text-xs text-[var(--goxt-gray-500)] truncate">
                                                    {post.author.role}
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-[var(--goxt-primary)] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-gradient-to-br from-[var(--goxt-primary)] to-blue-600">
                <div className="goxt-container">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            No te pierdas nuestras últimas actualizaciones
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Recibe artículos, tendencias y consejos directamente en tu bandeja de entrada
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-white text-[var(--goxt-primary)] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Suscribirme
                            </button>
                        </form>

                        <p className="text-sm text-blue-100 mt-4">
                            Sin spam. Solo contenido de valor. Cancela cuando quieras.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
