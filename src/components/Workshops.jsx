import { useEffect, useRef } from 'react'

const workshops = [
    {
        emoji: '🧁',
        title: 'Baking Basics',
        age: '5-8 years',
        duration: '2 hours',
        description: 'Learn to bake delicious cupcakes, cookies, and muffins from scratch! Kids discover measuring, mixing, and decorating fundamentals.',
        color: 'from-pink-400 to-rose-400',
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-200',
    },
    {
        emoji: '🍕',
        title: 'Pizza Party',
        age: '6-12 years',
        duration: '2.5 hours',
        description: 'From kneading dough to choosing toppings — kids create their own perfect pizza masterpiece in this hands-on workshop!',
        color: 'from-primary-400 to-accent-400',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
    },
    {
        emoji: '🥤',
        title: 'Smoothie Lab',
        age: '5-10 years',
        duration: '1.5 hours',
        description: 'A fruity adventure! Kids learn to blend healthy, colorful smoothies and discover nutrition in a fun, tasty way.',
        color: 'from-green-400 to-emerald-400',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
    },
    {
        emoji: '🍝',
        title: 'Pasta Masters',
        age: '8-14 years',
        duration: '3 hours',
        description: 'Roll, cut, and cook fresh pasta from scratch. From fettuccine to ravioli, kids master authentic Italian techniques!',
        color: 'from-amber-400 to-yellow-400',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
    },
    {
        emoji: '🍫',
        title: 'Chocolate Magic',
        age: '7-12 years',
        duration: '2 hours',
        description: 'Tempering, molding, and creating chocolate treats! Kids explore the science & art behind everyone\'s favorite sweet.',
        color: 'from-amber-700 to-amber-500',
        bgColor: 'bg-orange-50',
        borderColor: 'border-amber-300',
    },
    {
        emoji: '🥗',
        title: 'Junior Chef',
        age: '10-14 years',
        duration: '3 hours',
        description: 'Our advanced workshop teaches knife skills, plating techniques, and full meal preparation for aspiring young chefs!',
        color: 'from-secondary-400 to-teal-400',
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-200',
    },
]

export default function Workshops() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const els = sectionRef.current?.querySelectorAll('.reveal')
        els?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="workshops" ref={sectionRef} className="bg-white section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-400 text-sm font-semibold font-body mb-4">
                        🍴 Our Workshops
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                        Discover Our{' '}
                        <span className="text-gradient bg-gradient-to-r from-primary-400 to-accent-400">
                            Cooking Adventures
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body max-w-2xl mx-auto text-lg">
                        Choose from our exciting range of workshops designed to inspire creativity,
                        build confidence, and teach real culinary skills.
                    </p>
                </div>

                {/* Workshop Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workshops.map((ws, i) => (
                        <div
                            key={i}
                            className={`reveal group relative rounded-3xl border ${ws.borderColor} ${ws.bgColor} p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                            <div className="relative z-10">
                                {/* Emoji */}
                                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:animate-wiggle transition-transform duration-300">
                                    {ws.emoji}
                                </div>

                                {/* Tags */}
                                <div className="flex gap-2 mb-3">
                                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${ws.color} text-white text-xs font-semibold font-body`}>
                                        {ws.age}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/80 text-gray-500 text-xs font-medium font-body">
                                        ⏱ {ws.duration}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">
                                    {ws.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">
                                    {ws.description}
                                </p>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${ws.color} text-white text-sm font-semibold font-body shadow-lg hover:shadow-xl hover:gap-3 transition-all duration-300`}
                                >
                                    Book Now
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
