import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Política de Privacidad",
    description: "Conoce nuestra política de privacidad con relación al tratamiento y protección de los datos en GOxT.",
};

export default function PrivacidadPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
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

            <section className="py-16">
                <div className="goxt-container max-w-4xl">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                        <div className="prose prose-blue max-w-none text-gray-700 space-y-10">

                            <div className="space-y-4 text-gray-600">
                                <p>
                                    <strong>GOxT SpA</strong> le informa sobre su Política de Privacidad en relación al tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través de los sitios web{" "}
                                    <a href="https://goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">goxt.io</a>,{" "}
                                    <a href="https://crm.goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">crm.goxt.io</a>,{" "}
                                    <a href="https://cargo.goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">cargo.goxt.io</a> y{" "}
                                    <a href="https://bi.goxt.io" className="text-[var(--goxt-accent)] font-semibold hover:underline">bi.goxt.io</a> (en adelante, &quot;la Plataforma&quot;).
                                </p>
                                <p>
                                    El Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales en la República de Chile, en particular la <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong> y sus modificaciones.
                                </p>
                                <p>
                                    El uso de la Plataforma implica la aceptación de esta Política de Privacidad, así como las condiciones incluidas en los Términos y Condiciones de Uso.
                                </p>
                            </div>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    1. Principios aplicados en el tratamiento de datos
                                </h3>
                                <p className="mb-3">En el tratamiento de sus datos personales, GOxT SpA aplicará los siguientes principios:</p>
                                <ul className="space-y-3 pl-4 border-l-2 border-blue-100">
                                    <li><strong>Licitud, lealtad y transparencia:</strong> Siempre se requerirá el consentimiento para el tratamiento de datos personales, informando previamente sobre el fin específico de dicho tratamiento.</li>
                                    <li><strong>Minimización de datos:</strong> Se solicitarán únicamente los datos estrictamente necesarios para los fines declarados.</li>
                                    <li><strong>Limitación del plazo de conservación:</strong> Los datos se mantendrán durante el tiempo estrictamente necesario. Se revisarán periódicamente los registros inactivos.</li>
                                    <li><strong>Integridad y confidencialidad:</strong> Los datos serán tratados garantizando su seguridad, confidencialidad e integridad, adoptando medidas para evitar accesos no autorizados o uso indebido por parte de terceros.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    2. Obtención de datos personales
                                </h3>
                                <p className="mb-3">Para navegar por la Plataforma no es necesario facilitar datos personales. Los casos en que sí debe proporcionarlos son:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Al registrarse como usuario en cualquiera de los productos de GOxT (CRM, Cargo o BI).</li>
                                    <li>Al crear o configurar un workspace en la Plataforma.</li>
                                    <li>Al invitar a miembros del equipo o colaboradores a un workspace.</li>
                                    <li>Al completar formularios de contacto o solicitudes de información.</li>
                                    <li>Al suscribirse a comunicaciones y boletines informativos de GOxT.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    3. Sus derechos
                                </h3>
                                <p className="mb-3">GOxT SpA le informa que sobre sus datos personales tiene derecho a:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Solicitar el acceso a los datos almacenados.</li>
                                    <li>Solicitar la rectificación o cancelación de esos datos.</li>
                                    <li>Solicitar la limitación del tratamiento de sus datos.</li>
                                    <li>Oponerse al tratamiento de sus datos.</li>
                                    <li>Solicitar la portabilidad de sus datos.</li>
                                </ul>
                                <p className="mt-4">
                                    El ejercicio de estos derechos es personal y debe ser ejercido directamente por el interesado, enviando una solicitud a{" "}
                                    <a href="mailto:contacto@goxt.io" className="text-[var(--goxt-accent)] font-semibold">contacto@goxt.io</a>{" "}
                                    junto con una prueba válida de identidad (copia de cédula de identidad o equivalente).
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    4. Finalidad del tratamiento de datos personales
                                </h3>
                                <p className="mb-3">Al registrarse en la Plataforma, el usuario facilita información de carácter personal de la que es responsable GOxT SpA. Esta información puede incluir:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Dirección IP</li>
                                    <li>Nombre completo</li>
                                    <li>Dirección de correo electrónico</li>
                                    <li>Número de teléfono</li>
                                    <li>Nombre de la empresa u organización</li>
                                    <li>Información del perfil de usuario</li>
                                    <li>Datos ingresados en el uso de los módulos del CRM, Cargo y BI (contactos, organizaciones, oportunidades, cotizaciones, actividades, operaciones logísticas, etc.)</li>
                                </ul>
                                <p className="mb-4">Al facilitar esta información, el usuario da su consentimiento para que sea recopilada, utilizada, gestionada y almacenada por GOxT SpA, conforme a lo descrito en la presente Política de Privacidad.</p>
                                <div className="space-y-3">
                                    <p><strong>Formularios de contacto:</strong> Los datos se utilizan exclusivamente para responder consultas, dudas, solicitudes o comentarios del usuario.</p>
                                    <p><strong>Registro en la Plataforma:</strong> Los datos se utilizan para gestionar la cuenta del usuario, habilitar el acceso a los productos contratados y prestar correctamente los servicios de la Plataforma.</p>
                                    <p><strong>Suscripciones y comunicaciones:</strong> Los datos se utilizan para gestionar el envío de comunicaciones, actualizaciones del producto y materiales informativos relevantes para el uso de GOxT.</p>
                                </div>
                                <p className="mt-4 mb-3">Los datos del usuario se almacenan en dos infraestructuras según su tipo:</p>
                                <ul className="space-y-3 pl-4 border-l-2 border-blue-100">
                                    <li><strong>Datos estructurados</strong> (información de cuenta, contactos, oportunidades, cotizaciones, actividades y demás registros de la Plataforma): almacenados en una base de datos <strong>PostgreSQL</strong> desplegada en <strong>Railway</strong> (Railway Corp.).</li>
                                    <li><strong>Archivos, imágenes y documentos</strong> subidos por el usuario a la Plataforma: almacenados en <strong>Amazon Web Services (AWS)</strong>, mediante servicios de almacenamiento de objetos en la nube.</li>
                                </ul>
                                <p className="mt-4 mb-2">Otras finalidades del tratamiento de datos:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Garantizar el cumplimiento de las condiciones de esta política.</li>
                                    <li>Mejorar y optimizar los servicios ofrecidos por la Plataforma.</li>
                                    <li>Analizar el comportamiento de navegación y uso de la Plataforma mediante herramientas de analítica (ver sección de Cookies).</li>
                                    <li>Gestionar la presencia en redes sociales de GOxT.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    5. Datos de terceros gestionados por el usuario
                                </h3>
                                <p className="mb-3">GOxT opera como una plataforma SaaS donde cada workspace puede contener datos personales de terceros (contactos, clientes, prospectos u otras personas) ingresados por el propio usuario. En estos casos:</p>
                                <ul className="space-y-3 pl-4 border-l-2 border-blue-100">
                                    <li><strong>El usuario es el responsable del tratamiento</strong> de los datos de sus propios contactos dentro del workspace.</li>
                                    <li>GOxT actúa como <strong>encargado del tratamiento</strong> en su calidad de proveedor de software.</li>
                                    <li>GOxT no accede, modifica ni comercializa los datos de los contactos gestionados por los usuarios dentro de sus workspaces.</li>
                                    <li>Cada workspace está aislado: los datos de una empresa nunca son visibles para otra.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    6. Seguridad de los datos personales
                                </h3>
                                <p>
                                    Para proteger los datos personales, GOxT SpA toma todas las precauciones razonables y aplica las mejores prácticas de la industria para evitar su pérdida, mal uso, acceso indebido, divulgación, alteración o destrucción.
                                </p>
                                <p className="mt-3">
                                    La Plataforma y su base de datos principal están alojadas en <strong>Railway</strong>. Los archivos y documentos subidos por los usuarios se almacenan en <strong>Amazon Web Services (AWS)</strong>. Ambos proveedores aplican estándares de seguridad de nivel empresarial.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    7. Política de Cookies
                                </h3>
                                <p className="mb-3">Para que la Plataforma funcione correctamente, utiliza cookies almacenadas en el navegador del usuario. Los tipos de cookies utilizadas son:</p>
                                <ul className="space-y-3 pl-4 border-l-2 border-blue-100">
                                    <li><strong>Cookies propias:</strong> Enviadas desde dominios gestionados por GOxT para prestar el servicio solicitado.</li>
                                    <li><strong>Cookies de terceros:</strong> Enviadas desde dominios de terceros para funcionalidades complementarias.</li>
                                    <li><strong>Cookies de análisis:</strong> Permiten el seguimiento del comportamiento de uso de la Plataforma con fines estadísticos y de mejora del servicio.</li>
                                </ul>
                                <p className="mt-4">
                                    El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de su navegador. Al desactivar ciertas cookies, algunos servicios de la Plataforma podrían dejar de estar operativos.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    8. Destinatarios de datos personales
                                </h3>
                                <p className="mb-3">GOxT SpA puede compartir datos con los siguientes proveedores de servicios, exclusivamente para las finalidades descritas en esta política:</p>
                                <ul className="space-y-3 pl-4 border-l-2 border-blue-100">
                                    <li><strong>Railway (Railway Corp.):</strong> Infraestructura principal de alojamiento, base de datos y servicios internos de GOxT.</li>
                                    <li><strong>SendGrid (Twilio Inc.):</strong> Plataforma de envío de correos electrónicos transaccionales y notificaciones.</li>
                                    <li><strong>Google Analytics (Google LLC):</strong> Herramienta de analítica web para análisis de comportamiento y uso de la Plataforma. La información generada puede ser almacenada en servidores de Google en Estados Unidos.</li>
                                    <li><strong>Amazon Web Services (AWS):</strong> Utilizado para almacenamiento de archivos, imágenes y documentos subidos por los usuarios, e infraestructura del sistema de soporte. Los datos almacenados en AWS pueden residir en servidores ubicados fuera de Chile.</li>
                                </ul>
                                <p className="mt-4 italic bg-gray-50 p-4 rounded-lg text-sm">
                                    En ningún caso GOxT SpA venderá los datos personales de sus usuarios a terceros.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    9. Navegación Web
                                </h3>
                                <p className="mb-3">Al navegar por la Plataforma, GOxT SpA puede recoger datos no identificativos, tales como:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Dirección IP</li>
                                    <li>Geolocalización aproximada</li>
                                    <li>Registro de uso de funcionalidades</li>
                                    <li>Hábitos de navegación dentro de la Plataforma</li>
                                </ul>
                                <p className="mt-3">Estos datos son utilizados exclusivamente con fines estadísticos, para mejorar la experiencia del usuario y optimizar el servicio.</p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    10. Exactitud y veracidad de los datos
                                </h3>
                                <p>
                                    El usuario se compromete a que los datos facilitados a GOxT SpA sean correctos, completos, exactos y vigentes, y a mantenerlos debidamente actualizados. El usuario es el único responsable de la veracidad de los datos que proporcione, eximiendo a GOxT SpA de cualquier responsabilidad al respecto.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    11. Aceptación y consentimiento
                                </h3>
                                <p>
                                    Como usuario de la Plataforma, declara haber sido informado de las condiciones sobre protección de datos de carácter personal, y acepta y consiente el tratamiento de los mismos por parte de GOxT SpA en la forma y para las finalidades indicadas en esta Política de Privacidad.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    12. Revocabilidad
                                </h3>
                                <p>
                                    El usuario puede ejercitar en cualquier momento sus derechos de acceso, rectificación, cancelación, portabilidad y oposición enviando un correo electrónico a{" "}
                                    <a href="mailto:contacto@goxt.io" className="text-[var(--goxt-accent)] font-semibold">contacto@goxt.io</a>{" "}
                                    junto con una prueba válida de identidad.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-handwritten), cursive", color: "var(--goxt-midnight)" }}>
                                    13. Cambios en la Política de Privacidad
                                </h3>
                                <p>
                                    GOxT SpA se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a cambios legislativos, jurisprudenciales o de las prácticas del sector. Las modificaciones serán publicadas en esta página y su vigencia comenzará desde la fecha de publicación.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-gray-100 text-sm text-gray-500 space-y-1">
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
