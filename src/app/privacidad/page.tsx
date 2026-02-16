import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: "Conoce nuestra política de privacidad con relación al tratamiento y protección de los datos en GOxT.",
};

export default function PrivacidadPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-grid-white"></div>
                <div className="goxt-container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "white" }}>
                        Política de privacidad
                    </h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Seguridad y confidencialidad en el tratamiento de la información corporativa.
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
                                    Política de privacidad
                                </h2>
                                <p className="text-lg text-gray-600">
                                    <strong>GOxT SPA</strong> le informa sobre su Política de Privacidad con relación al tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web <a href="https://goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">goxt.io</a>.
                                </p>
                            </div>

                            <p>
                                El Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley N° 19.628 sobre Protección de la Vida Privada en Chile, asegurando la máxima reserva de la información corporativa y personal gestionada en el Sistema.
                            </p>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    1. Principios de Tratamiento
                                </h3>
                                <div className="space-y-4">
                                    <p>En el tratamiento de sus datos corporativos y personales, aplicamos los siguientes pilares:</p>
                                    <ul className="space-y-3 pl-4 border-l-2 border-blue-100">
                                        <li><strong>Confidencialidad Absoluta:</strong> La información ingresada por el Cliente al CRM o módulos operativos es de su exclusiva propiedad y responsabilidad.</li>
                                        <li><strong>Minimización:</strong> Solo almacenamos los datos necesarios para la correcta prestación de la suite tecnológica.</li>
                                        <li><strong>Seguridad:</strong> Implementamos cifrado y protocolos de seguridad de nivel bancario a través de nuestra infraestructura en la nube.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    2. Datos Recabados
                                </h3>
                                <p>La información que procesamos es proporcionada directamente por el Cliente al contratar el servicio y utilizar los módulos de gestión:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Datos de contacto corporativos (Nombre, Rut, Email, Teléfono empresarial).</li>
                                    <li>Información de facturación coordinada directamente con GOxT.</li>
                                    <li>Registros operativos (viajes, clientes, documentos) ingresados voluntariamente por el Cliente en el Sistema para su propia gestión.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    3. Finalidad
                                </h3>
                                <p>GOxT utiliza los datos exclusivamente para:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Habilitar las funciones de la Suite Tecnológica (CRM, seguimiento, analítica).</li>
                                    <li>Brindar soporte técnico presencial o remoto.</li>
                                    <li>Gestionar la relación comercial y facturación del servicio SaaS.</li>
                                </ul>
                                <p className="italic bg-gray-50 p-4 rounded-lg mt-4 text-sm">
                                    Importante: GOxT no vende ni arrienda bases de datos de sus clientes. No utilizamos los datos operativos del Cliente para fines comerciales de terceros.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    4. Seguridad y Almacenamiento
                                </h3>
                                <p>
                                    Toda la información reside en servidores de alta disponibilidad de <strong>Amazon Web Services (AWS)</strong>. GOxT realiza copias de seguridad periódicas y mantiene registros de auditoría para prevenir accesos no autorizados a la infraestructura.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    5. Sus Derechos
                                </h3>
                                <p>
                                    Como titular del servicio contratado, el Cliente puede solicitar la exportación, rectificación o eliminación total de sus datos alojados en el sistema enviando un correo a <a href="mailto:privacidad@goxt.io" className="text-[var(--goxt-accent)] font-semibold">privacidad@goxt.io</a>.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-gray-100 italic text-sm text-gray-500 space-y-2">
                                <p><strong>Compromiso GOxT:</strong> Nos esforzamos por ser el socio tecnológico más confiable para su operación logística.</p>
                                <p className="text-right">Última actualización: Febrero 2026 • Chile</p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
