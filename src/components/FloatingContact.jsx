import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

export default function FloatingContact() {
    const whatsappNumber = '919876543210' // Replace with actual number
    const phoneNumber = 'tel:+919876543210' // Replace with actual number

    return (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
            {/* Phone – visible on mobile & tablet only */}
            <a
                href={phoneNumber}
                aria-label="Call us"
                className="lg:hidden w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
            >
                <FaPhoneAlt className="text-base" />
            </a>

            {/* WhatsApp – visible on all screens */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=Hi!%20I%27m%20interested%20in%20Little%20Chefs%20Academy%20workshops.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300 group"
            >
                <FaWhatsapp className="text-xl group-hover:rotate-12 transition-transform duration-300" />
            </a>
        </div>
    )
}
