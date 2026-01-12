import { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
    title: "Contacto",
    description:
        "Contáctanos para solicitar una demo gratuita de GOxT CRM o Cargo. Estamos aquí para ayudarte.",
};

export default function ContactoPage() {
    return (
        <div className="pt-24">
            <ContactSection />
        </div>
    );
}
