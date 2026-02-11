import { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400)
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-8 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 text-white shadow-2xl shadow-primary-400/40 flex items-center justify-center transition-all duration-500 hover:shadow-primary-400/60 hover:-translate-y-1 hover:scale-110 group ${isVisible
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
        >
            {/* Arrow icon */}
            <svg
                className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 15l7-7 7 7"
                />
            </svg>

            {/* Ripple ring effect */}
            <span className="absolute inset-0 rounded-full border-2 border-primary-400/50 animate-ping opacity-20" />
        </button>
    )
}
