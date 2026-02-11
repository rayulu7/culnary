import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Workshops', href: '#workshops' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Why Us', href: '#features' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-primary-100/50 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className="flex items-center gap-2 group"
                >
                    <span className="text-3xl group-hover:animate-wiggle transition-transform">👨‍🍳</span>
                    <div>
                        <h1 className="text-xl md:text-2xl font-heading font-bold text-primary-400 leading-tight">
                            Little Chefs
                        </h1>
                        <p className="text-[10px] md:text-xs font-body font-medium text-secondary-400 tracking-widest uppercase -mt-1">
                            Academy
                        </p>
                    </div>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-0.5">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="px-3 py-2 rounded-full text-sm font-medium font-body text-gray-600 hover:text-primary-400 hover:bg-primary-50 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="ml-3">
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 text-white text-sm font-semibold font-body shadow-lg shadow-primary-400/30 hover:shadow-xl hover:shadow-primary-400/40 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Enroll Now 🎉
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-primary-50 text-primary-400"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col gap-1.5">
                        <span
                            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="bg-white/95 backdrop-blur-md mx-4 mt-3 rounded-2xl shadow-xl p-4 space-y-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="block px-4 py-3 rounded-xl text-gray-600 font-medium font-body hover:bg-primary-50 hover:text-primary-400 transition-all"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2">
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-primary-400 to-accent-400 text-white font-semibold font-body shadow-lg"
                        >
                            Enroll Now 🎉
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
