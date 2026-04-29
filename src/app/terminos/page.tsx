import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Términos y Condiciones",
    description: "Términos de servicio y condiciones generales de uso de la suite tecnológica GOxT.",
};

export default function TerminosPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <section className="relative py-20 bg-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-grid-white"></div>
                <div className="goxt-container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "white" }}>
                        Términos y Condiciones
                    </h1>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Condiciones generales de uso de nuestra Suite Tecnológica para Empresas.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="goxt-container max-w-4xl">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                        <div className="prose prose-blue max-w-none text-gray-700 space-y-10">

                            <div className="space-y-4 text-gray-600">
                                <p>
                                    El presente documento establece los términos de uso y condiciones generales aplicables al acceso y uso de los servicios ofrecidos por <strong>GOxT SpA</strong>, a través de los sitios web{" "}
                                    <a href="https://goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">goxt.io</a>,{" "}
                                    <a href="https://crm.goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">crm.goxt.io</a>,{" "}
                                    <a href="https://cargo.goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">cargo.goxt.io</a> y{" "}
                                    <a href="https://bi.goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">bi.goxt.io</a> (en adelante, &quot;la Plataforma&quot;).
                                </p>
                                <p>
                                    Al registrarse y utilizar la Plataforma, el usuario declara que acepta todos los términos aquí establecidos. En caso de no estar de acuerdo, se ruega no utilizar ni registrarse en ninguno de los productos de GOxT.
                                </p>
                            </div>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    1. Definiciones
                                </h3>
                                <ul className="space-y-3 pl-4 border-l-2 border-blue-100">
                                    <li><strong>GOxT / Titular:</strong> GOxT SpA, empresa proveedora de la Plataforma y sus productos.</li>
                                    <li><strong>Usuario:</strong> Toda persona natural o jurídica que se registre y utilice cualquiera de los productos de GOxT (CRM, Cargo o BI).</li>
                                    <li><strong>Workspace:</strong> Espacio de trabajo virtual creado por un usuario dentro de la Plataforma, donde se gestionan datos, miembros y configuraciones propias de una organización.</li>
                                    <li><strong>Administrador del Workspace:</strong> Usuario con permisos de administración sobre un workspace específico.</li>
                                    <li><strong>Plataforma:</strong> El conjunto de sitios web y aplicaciones que conforman el ecosistema GOxT.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    2. Descripción del Servicio
                                </h3>
                                <p className="mb-3">GOxT es una suite de software SaaS (Software as a Service) que ofrece actualmente los siguientes productos:</p>
                                <ul className="space-y-3 pl-4 border-l-2 border-blue-100 mb-4">
                                    <li><strong>GOxT CRM:</strong> Plataforma de gestión comercial que cubre el ciclo completo de ventas, incluyendo contactos, organizaciones, oportunidades, cotizaciones, actividades y módulo de marketing.</li>
                                    <li><strong>GOxT Cargo:</strong> Sistema de gestión operacional de transporte (TMS) para empresas que gestionan operaciones logísticas terrestres o marítimas.</li>
                                    <li><strong>GOxT BI:</strong> Plataforma de Business Intelligence que centraliza datos de GOxT CRM y GOxT Cargo para análisis y visualización (actualmente en desarrollo y disponible de forma limitada).</li>
                                </ul>
                                <p>GOxT actúa exclusivamente como proveedor de software. No presta servicios de transporte, intermediación comercial ni consultoría. La relación contractual derivada del uso de la Plataforma existe únicamente entre GOxT y el usuario registrado.</p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    3. Registro de Usuarios
                                </h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>La creación de una cuenta de usuario es obligatoria para acceder a los servicios de la Plataforma.</li>
                                    <li>El usuario se obliga a proporcionar información veraz, completa y actualizada en el formulario de registro. GOxT no se hace responsable de la veracidad de los datos entregados por los usuarios.</li>
                                    <li>El usuario accederá a su cuenta mediante sus credenciales personales (correo electrónico y contraseña, o autenticación con Google). La cuenta es personal, única e intransferible.</li>
                                    <li>El usuario es el único responsable del uso de su cuenta y de todas las operaciones realizadas a través de ella. Deberá notificar de inmediato a GOxT ante cualquier acceso no autorizado.</li>
                                    <li>Solo las personas con capacidad legal vigente están autorizadas para registrarse. Las personas que no cuenten con dicha capacidad deberán ser asistidas por sus representantes legales.</li>
                                    <li>GOxT se reserva el derecho de suspender o cancelar cuentas en cualquier momento, por incumplimiento de estos términos, prácticas fraudulentas o por políticas internas, sin que ello genere derecho a indemnización.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    4. Uso de la Plataforma
                                </h3>
                                <p className="mb-3">El usuario se compromete a utilizar la Plataforma de manera lícita y conforme a estos Términos. Queda expresamente prohibido:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Utilizar la Plataforma para fines ilegales o fraudulentos.</li>
                                    <li>Intentar acceder a datos o funcionalidades de otros usuarios o workspaces.</li>
                                    <li>Introducir código malicioso, virus o cualquier elemento que pueda dañar la Plataforma o los sistemas de terceros.</li>
                                    <li>Reproducir, distribuir o modificar el software de GOxT sin autorización expresa.</li>
                                    <li>Utilizar la Plataforma para enviar comunicaciones no solicitadas (spam).</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    5. Workspaces y Datos del Usuario
                                </h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Cada workspace es un entorno aislado. Los datos de un workspace nunca son visibles para otros usuarios o workspaces ajenos.</li>
                                    <li>El Administrador del Workspace es responsable de la gestión de accesos y permisos dentro de su workspace.</li>
                                    <li>El usuario es responsable de los datos que ingresa a la Plataforma, incluyendo los datos de sus propios clientes, contactos y colaboradores.</li>
                                    <li>GOxT no accede, modifica, transfiere ni comercializa los datos almacenados por los usuarios en sus workspaces, salvo requerimiento legal o necesidad técnica para prestar el servicio.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    6. Planes y Condiciones de Acceso
                                </h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Actualmente, GOxT CRM y GOxT Cargo son de <strong>acceso gratuito por tiempo limitado</strong>, durante el período de lanzamiento y consolidación del producto.</li>
                                    <li>GOxT se reserva el derecho de establecer planes de suscripción de pago en el futuro. Los usuarios activos serán notificados con anticipación antes de cualquier cambio en las condiciones de acceso.</li>
                                    <li>El acceso gratuito no garantiza la continuidad indefinida del servicio en dichas condiciones. GOxT podrá modificar, limitar o discontinuar funcionalidades sin previo aviso, sin que ello genere derecho a indemnización.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    7. Limitaciones de Responsabilidad
                                </h3>
                                <p className="mb-3">GOxT no garantiza que la Plataforma esté disponible de manera ininterrumpida ni libre de errores. En consecuencia, GOxT no se responsabiliza por:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Daños causados por indisponibilidad, interrupciones o errores técnicos de la Plataforma.</li>
                                    <li>Pérdida de datos derivada de fallas en el sistema, en el servidor o en la infraestructura de terceros.</li>
                                    <li>Inconsistencias de información con sistemas externos o integraciones de terceros.</li>
                                    <li>Daños o pérdidas causadas en los equipos del usuario como resultado del uso de la Plataforma.</li>
                                    <li>Actuaciones de terceros que accedan de manera no autorizada a la cuenta del usuario.</li>
                                </ul>
                                <p>Los usuarios no podrán exigir indemnización alguna por perjuicios resultantes de dificultades técnicas o fallas que no sean directamente imputables a negligencia de GOxT.</p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    8. Indemnización
                                </h3>
                                <p>
                                    El usuario se obliga a mantener indemne a GOxT SpA, sus representantes, directivos y colaboradores, frente a cualquier reclamación, daño, pérdida, responsabilidad o gasto —incluyendo honorarios legales— derivados del incumplimiento de estos Términos o del uso indebido de la Plataforma.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    9. Propiedad Intelectual
                                </h3>
                                <p className="mb-3">
                                    El contenido, organización, diseño, código fuente, gráficas y demás elementos de la Plataforma son propiedad de GOxT SpA y están protegidos por las leyes de Propiedad Intelectual e Industrial vigentes en Chile.
                                </p>
                                <p>
                                    Queda prohibida su copia, redistribución, uso o publicación —total o parcial— sin autorización expresa y por escrito de GOxT SpA. El usuario recibe una licencia limitada, personal, no exclusiva, intransferible y revocable para utilizar la Plataforma exclusivamente conforme a estos Términos.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    10. Licencia de Uso
                                </h3>
                                <p>
                                    GOxT otorga al usuario una licencia limitada, personal, no exclusiva, intransferible y revocable para acceder y utilizar la Plataforma de acuerdo a los presentes Términos. GOxT se reserva todos los derechos sobre la Plataforma no expresamente otorgados en este documento.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    11. Sanciones y Cancelación de Cuenta
                                </h3>
                                <p className="mb-3">GOxT podrá notificar, suspender o cancelar —temporal o permanentemente— la cuenta de cualquier usuario si:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Viola cualquiera de las representaciones, garantías u obligaciones contenidas en estos Términos.</li>
                                    <li>Realiza prácticas engañosas, fraudulentas o que atenten contra la integridad de la Plataforma.</li>
                                    <li>Sus actividades causan o pueden causar daño a otros usuarios, a terceros o al equipo de GOxT.</li>
                                </ul>
                                <p>La cancelación de cuenta no generará derecho a indemnización o compensación alguna a favor del usuario.</p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    12. Violaciones al Sistema
                                </h3>
                                <p>
                                    Está prohibido cualquier acción o uso de dispositivos, software u otro medio destinado a alterar el funcionamiento de la Plataforma, modificar o sustraer información de sus bases de datos, o interferir con la experiencia de otros usuarios. Cualquier intromisión o actividad violatoria del sistema se considerará una infracción al ordenamiento jurídico chileno, reservándose GOxT SpA el ejercicio de todas las acciones legales que le correspondan.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    13. Modificaciones a los Términos
                                </h3>
                                <p>
                                    GOxT SpA se reserva el derecho de modificar total o parcialmente los presentes Términos en cualquier momento. Las modificaciones serán publicadas en esta página y entrarán en vigencia a los siete días siguientes a su publicación. El uso continuado de la Plataforma posterior a dicha publicación constituirá aceptación tácita de los nuevos Términos.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    14. Legislación Aplicable y Jurisdicción
                                </h3>
                                <p>
                                    El presente acuerdo se rige por el ordenamiento jurídico de la <strong>República de Chile</strong>. Cualquier controversia derivada del mismo será sometida a los tribunales de justicia competentes de la ciudad de <strong>Santiago de Chile</strong>, fijando las partes su domicilio en dicha ciudad para todos los efectos legales.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-gray-100 text-sm text-gray-500 space-y-1">
                                <p className="italic">Redactado en Santiago de Chile.</p>
                                <p className="text-right italic">Última actualización: abril de 2025</p>
                                <p className="text-right italic">GOxT SpA — Santiago, Chile</p>
                                <p className="text-right">
                                    <a href="mailto:contacto@goxt.io" className="text-[var(--goxt-accent)] hover:underline">contacto@goxt.io</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
