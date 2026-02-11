import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Workshops', href: '#workshops' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Why Us', href: '#features' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
    ]

    const workshops = [
        'Baking Basics',
        'Pizza Party',
        'Smoothie Lab',
        'Pasta Masters',
        'Chocolate Magic',
        'Junior Chef',
    ]

    const socialLinks = [
        { icon: <FaFacebookF />, href: '#', label: 'Facebook', hoverColor: 'hover:bg-blue-500/20 hover:text-blue-400' },
        { icon: <FaInstagram />, href: '#', label: 'Instagram', hoverColor: 'hover:bg-pink-500/20 hover:text-pink-400' },
        { icon: <FaTwitter />, href: '#', label: 'Twitter', hoverColor: 'hover:bg-sky-500/20 hover:text-sky-400' },
        { icon: <FaYoutube />, href: '#', label: 'YouTube', hoverColor: 'hover:bg-red-500/20 hover:text-red-400' },
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Top wave */}
            <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="#111827" />
                </svg>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-400/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-3xl">👨‍🍳</span>
                            <div>
                                <h3 className="text-xl font-heading font-bold text-primary-400">Little Chefs</h3>
                                <p className="text-xs text-gray-400 tracking-widest uppercase">Academy</p>
                            </div>
                        </div>
                        <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                            Inspiring the next generation of chefs through fun, hands-on culinary workshops
                            designed especially for kids aged 5-14.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={`w-10 h-10 rounded-xl bg-gray-800 text-gray-400 flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1 ${social.hoverColor}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-gray-400 font-body text-sm hover:text-primary-400 hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Workshops */}
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-4 text-white">Our Workshops</h4>
                        <ul className="space-y-3">
                            {workshops.map((ws, i) => (
                                <li key={i}>
                                    <a
                                        href="#workshops"
                                        onClick={(e) => scrollToSection(e, '#workshops')}
                                        className="text-gray-400 font-body text-sm hover:text-accent-400 hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        {ws}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-bold mb-4 text-white">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-lg mt-0.5">📍</span>
                                <span className="text-gray-400 font-body text-sm">
                                    123 Culinary Street,<br />Kitchen District, Foodville 560001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-lg">📞</span>
                                <span className="text-gray-400 font-body text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-lg">✉️</span>
                                <span className="text-gray-400 font-body text-sm">hello@littlechefs.academy</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-lg">🕐</span>
                                <span className="text-gray-400 font-body text-sm">Mon-Sat: 9AM - 7PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h4 className="text-lg font-heading font-bold mb-2">Stay Updated! 📬</h4>
                        <p className="text-gray-400 font-body text-sm mb-4">
                            Subscribe for new workshop announcements and exclusive discounts.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                            />
                            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 text-white font-body font-semibold text-sm hover:shadow-lg hover:shadow-primary-400/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                                Subscribe ✨
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 font-body text-sm">
                        © {currentYear} Little Chefs Academy. Made with ❤️ for little chefs everywhere.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 font-body text-sm hover:text-gray-300 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 font-body text-sm hover:text-gray-300 transition-colors">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
