import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    productos: [
        { name: "GOxT CRM", href: "/productos/crm" },
        { name: "GOxT Cargo", href: "/productos/cargo" },
        { name: "Precios", href: "/precios" },
    ],
    empresa: [
        { name: "Nosotros", href: "/nosotros" },
        { name: "Contacto", href: "/contacto" },
        { name: "Blog", href: "/blog" }
    ],
    legal: [
        { name: "Política de privacidad", href: "/privacidad" },
        { name: "Términos de servicio", href: "/terminos" },
    ]
};

const aplicaciones = [
    { name: "CRM", href: "https://crm.goxt.io" },
    { name: "Cargo", href: "https://cargo.goxt.io" },
];

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com/company/goxt",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://twitter.com/goxt_io",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white">
            <div className="goxt-container py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/assets/Logo.png"
                                alt="GOxT"
                                width={140}
                                height={47}
                                className="h-12 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="mb-6 max-w-sm">
                            Soluciones tecnológicas especializadas para transporte y logística.
                            Transformamos tus operaciones con software intuitivo y poderoso.
                        </p>

                        {/* Redes Sociales */}
                        <div className="flex gap-4 mb-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-white transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Acceso rápido a aplicaciones */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {aplicaciones.map((app) => {
                                // Determinar el icono basado en el nombre de la app
                                const icon = app.name === "CRM" ? "✍️" : "📊";

                                return (
                                    <a
                                        key={app.name}
                                        href={app.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-lg transition-colors border border-white/10"
                                    >
                                        <span className="text-lg">{icon}</span>
                                        <div className="text-left">
                                            <div className="text-[10px] uppercase tracking-wider text-blue-200/50">Acceder a</div>
                                            <div className="font-semibold">GOxT {app.name}</div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="text-sm tracking-widest mb-6 text-white">Plataforma</h3>
                        <ul className="space-y-3">
                            {footerLinks.productos.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-sm tracking-widest mb-6 text-white">Compañía</h3>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-white/10 my-8"></div>

                {/* Footer inferior */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-100/40 text-sm">
                        © {new Date().getFullYear()} GOxT. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-blue-100/40 hover:text-white text-sm transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/cookies" className="text-blue-100/40 hover:text-white text-sm transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}