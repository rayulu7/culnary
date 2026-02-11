import { useEffect, useRef } from 'react'

const testimonials = [
    {
        name: 'Sarah M.',
        role: 'Mother of Aiden, Age 7',
        rating: 5,
        text: 'My son has never been interested in food, but after the Baking Basics workshop, he now helps me in the kitchen every weekend! The chefs were so patient and caring.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
        color: 'border-pink-200 bg-pink-50/50',
    },
    {
        name: 'James R.',
        role: 'Father of Lily, Age 10',
        rating: 5,
        text: 'Lily attended the Pizza Party and Pasta Masters workshops. She was absolutely thrilled! The skills she learned are incredible — she made us fresh pasta at home!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        color: 'border-blue-200 bg-blue-50/50',
    },
    {
        name: 'Priya K.',
        role: 'Mother of twins, Age 6',
        rating: 5,
        text: 'Both my twins loved the Smoothie Lab! The small group sizes meant they got lots of attention. They now ask for healthy smoothies instead of sugary drinks!',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        color: 'border-green-200 bg-green-50/50',
    },
    {
        name: 'David L.',
        role: 'Father of Emma, Age 12',
        rating: 5,
        text: 'The Junior Chef workshop was phenomenal. Emma learned real knife skills and proper cooking techniques. She\'s now more confident in the kitchen than some adults I know!',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        color: 'border-purple-200 bg-purple-50/50',
    },
]

export default function Testimonials() {
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
        <section
            id="testimonials"
            ref={sectionRef}
            className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden"
        >
            {/* Background blobs */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-accent-100/40 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary-100/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 text-pink-500 text-sm font-semibold font-body mb-4">
                        💬 Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                        What Parents{' '}
                        <span className="text-gradient bg-gradient-to-r from-pink-400 to-primary-400">
                            Are Saying
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body max-w-2xl mx-auto text-lg">
                        Don't just take our word for it — hear from the families who've experienced our workshops!
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`reveal group relative rounded-3xl border ${t.color} p-8 hover:shadow-xl transition-all duration-500`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            {/* Quote mark */}
                            <div className="absolute top-4 right-6 text-6xl font-heading text-primary-200/50 leading-none">
                                "
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <span key={j} className="text-accent-400 text-lg">★</span>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-600 font-body leading-relaxed mb-6 relative z-10">
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover shadow-md ring-2 ring-white"
                                    loading="lazy"
                                />
                                <div>
                                    <p className="font-heading font-bold text-gray-800">{t.name}</p>
                                    <p className="text-sm text-gray-400 font-body">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
