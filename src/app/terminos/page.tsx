import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Términos de Servicio",
    description: "Términos de servicio y condiciones generales de uso de la suite tecnológica GOxT.",
};

export default function TerminosPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-grid-white"></div>
                <div className="goxt-container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "white" }}>
                        Términos de servicio
                    </h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Condiciones generales de uso de nuestra Suite Tecnológica para Empresas.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="goxt-container max-w-4xl">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                        {/* Logo Central */}
                        <div className="flex justify-center mb-12">
                            <div className="relative w-24 h-24 p-4 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm overflow-hidden">
                                <Image
                                    src="/assets/logo_central_negro.png"
                                    alt="GOxT"
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="prose prose-blue max-w-none text-gray-700 space-y-10">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-handwritten), cursive" }}>
                                    Condiciones de uso GOxT
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <p>
                                    El presente documento establece los términos de uso y condiciones generales aplicables al acceso y utilización de la suite tecnológica (SaaS) ofrecida por <strong>GOxT SPA</strong>, disponible a través de <a href="https://goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">goxt.io</a> y sus subdominios asociados (el &quot;Sistema&quot;).
                                </p>
                                <p>
                                    GOxT es un proveedor de herramientas digitales de gestión para empresas de transporte y logística. El uso del Sistema implica la aceptación de estas condiciones por parte del Cliente.
                                </p>
                            </div>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    1. Definiciones
                                </h3>
                                <ul className="space-y-3 pl-4 border-l-2 border-blue-100 italic font-medium">
                                    <li><strong>Cliente / Licenciatario:</strong> La persona natural o jurídica que contrata el acceso a la Suite Tecnológica GOxT para uso profesional.</li>
                                    <li><strong>Sistema / Suite:</strong> El conjunto de módulos de software (CRM, Gestión, Cargo, etc.) desarrollados y mantenidos por GOxT.</li>
                                    <li><strong>Usuarios:</strong> Personal administrativo u operativo autorizado por el Cliente para operar las herramientas bajo su cuenta corporativa.</li>
                                    <li><strong>Datos del Cliente:</strong> Toda la información, clientes internos, documentos y registros operativos ingresados por el Cliente en el Sistema.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    2. Naturaleza del Servicio
                                </h3>
                                <p>
                                    GOxT suministra una plataforma de software en la nube bajo la modalidad de **Software as a Service (SaaS)**. El propósito del software es facilitar la gestión operativa, comercial y administrativa de empresas ligadas al transporte y la logística.
                                </p>
                                <p>
                                    GOxT no realiza servicios de transporte ni actúa como intermediario de fletes. Las relaciones comerciales que el Cliente mantenga con sus propios proveedores o clientes finales son ajenas a GOxT.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    3. Licencia de Uso
                                </h3>
                                <p>
                                    GOxT otorga una licencia de uso limitada, no exclusiva e intransferible para operar el Sistema durante el periodo de vigencia del servicio contratado. Está prohibida la reventa de la licencia, la ingeniería inversa del software o cualquier uso que pretenda copiar la lógica funcional de la suite.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    4. Propiedad y Confidencialidad de Datos
                                </h3>
                                <p>
                                    El Cliente es el único dueño de la información que ingresa al Sistema. GOxT se compromete a mantener la confidencialidad de dichos datos y a no compartirlos con terceros, salvo por requerimiento legal o para el funcionamiento técnico habilitado por el Cliente.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    5. Soporte y Disponibilidad
                                </h3>
                                <p>
                                    GOxT trabaja para garantizar una disponibilidad del sistema del 99% y ofrece soporte técnico local para los Clientes suscritos. GOxT no se responsabiliza por fallos de infraestructura de red ajenos a sus propios servidores o por el mal uso de las herramientas por parte del personal del Cliente.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-gray-100 italic text-sm text-gray-500 space-y-2">
                                <p><strong>Legislación:</strong> Estos términos se rigen por las leyes de la República de Chile.</p>
                                <p><strong>Acuerdo Completo:</strong> Estos términos, junto con el contrato de servicio específico firmado por el Cliente, constituyen el acuerdo total entre las partes.</p>
                                <p className="text-right">Última actualización: Febrero 2026 • GOxT Logística Digital</p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
