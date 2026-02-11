import { FaSmileBeam, FaBookOpen, FaUserTie, FaHeart } from 'react-icons/fa'

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-cream to-accent-50"
        >
            {/* Animated Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating food emojis */}
                <span className="absolute text-6xl md:text-8xl top-[10%] left-[5%] animate-float opacity-20">🧁</span>
                <span className="absolute text-5xl md:text-7xl top-[15%] right-[10%] animate-float-delayed opacity-20">🍕</span>
                <span className="absolute text-4xl md:text-6xl bottom-[20%] left-[15%] animate-float-slow opacity-20">🍰</span>
                <span className="absolute text-5xl md:text-7xl bottom-[15%] right-[5%] animate-float opacity-15">🍪</span>
                <span className="absolute text-4xl md:text-5xl top-[40%] left-[80%] animate-float-delayed opacity-15">🥐</span>
                <span className="absolute text-3xl md:text-5xl top-[60%] left-[3%] animate-float-slow opacity-15">🍓</span>
                <span className="absolute text-4xl md:text-6xl top-[5%] left-[45%] animate-float opacity-10">🌮</span>
                <span className="absolute text-3xl md:text-4xl bottom-[30%] right-[30%] animate-float-delayed opacity-15">🧇</span>

                {/* Decorative circles */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent-200/20 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24 pb-16">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-primary-100/50 mb-8 animate-fade-in-up">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium font-body text-gray-600">
                        🔥 New workshops enrolling now!
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6">
                    <span className="block text-gray-800">Where Little</span>
                    <span className="block text-gradient bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400">
                        Chefs Shine!
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-500 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
                    Fun-filled culinary workshops designed for kids aged 5-14. From baking cupcakes to
                    crafting pizzas — we turn tiny hands into <span className="text-primary-400 font-semibold">big chefs</span>! 🎨🍳
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a
                        href="#workshops"
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#workshops')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 text-white text-lg font-semibold font-body shadow-2xl shadow-primary-400/30 hover:shadow-primary-400/50 hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore Workshops
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                    <a
                        href="#features"
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="px-8 py-4 rounded-full border-2 border-primary-200 text-primary-400 text-lg font-semibold font-body hover:bg-primary-50 hover:-translate-y-1 transition-all duration-300"
                    >
                        Why Choose Us? ✨
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    {[
                        { number: '2000+', label: 'Happy Kids', icon: <FaSmileBeam className="text-2xl text-amber-400" /> },
                        { number: '50+', label: 'Workshops', icon: <FaBookOpen className="text-2xl text-secondary-400" /> },
                        { number: '15+', label: 'Expert Chefs', icon: <FaUserTie className="text-2xl text-primary-400" /> },
                        { number: '98%', label: 'Parents Love Us', icon: <FaHeart className="text-2xl text-rose-400" /> },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-primary-100/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex justify-center">{stat.icon}</div>
                            <p className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mt-1">
                                {stat.number}
                            </p>
                            <p className="text-sm text-gray-500 font-body">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z"
                        fill="#FFFFFF"
                    />
                </svg>
            </div>
        </section>
    )
}
