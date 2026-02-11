import { useEffect, useRef } from 'react'
import { GiCookingPot, GiOpenBook, GiShield, GiTrophy } from 'react-icons/gi'
import { FaHandsHelping, FaUsers, FaLeaf } from 'react-icons/fa'

const features = [
    {
        icon: <GiCookingPot className="text-2xl text-white" />,
        title: 'Expert Kid-Friendly Chefs',
        description: 'Our chefs are specially trained to work with children, making every lesson safe, fun, and educational.',
        color: 'from-primary-400 to-primary-300',
    },
    {
        icon: <FaHandsHelping className="text-2xl text-white" />,
        title: 'Hands-On Learning',
        description: 'Kids don\'t just watch — they chop, stir, mix, and create! Every child gets their own workstation and ingredients.',
        color: 'from-secondary-400 to-secondary-300',
    },
    {
        icon: <GiShield className="text-2xl text-white" />,
        title: 'Safe Environment',
        description: 'Child-proof equipment, allergen awareness, and small group sizes ensure every workshop is safe and supervised.',
        color: 'from-blue-400 to-blue-300',
    },
    {
        icon: <FaLeaf className="text-2xl text-white" />,
        title: 'Nutrition Education',
        description: 'We weave healthy eating habits into every recipe, helping kids understand the value of good nutrition.',
        color: 'from-green-400 to-green-300',
    },
    {
        icon: <GiTrophy className="text-2xl text-white" />,
        title: 'Achievement Certificates',
        description: 'Every little chef receives a certificate of completion, building confidence and pride in their culinary accomplishments.',
        color: 'from-accent-400 to-accent-300',
    },
    {
        icon: <FaUsers className="text-2xl text-white" />,
        title: 'Small Group Sizes',
        description: 'Maximum 10 kids per workshop ensures personalized attention and guidance from our team of chefs.',
        color: 'from-purple-400 to-purple-300',
    },
]

export default function Features() {
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

        const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        els?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="features"
            ref={sectionRef}
            className="section-padding bg-gradient-to-b from-white via-cream to-white relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-50 text-secondary-500 text-sm font-semibold font-body mb-4">
                        ✨ Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                        Why Parents{' '}
                        <span className="text-gradient bg-gradient-to-r from-secondary-400 to-primary-400">
                            Love Us
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body max-w-2xl mx-auto text-lg">
                        We create a magical learning experience that goes beyond just cooking.
                        Here's what makes Little Chefs Academy special.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="reveal group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {/* Icon Circle */}
                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                            >
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 font-body text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Bottom accent line */}
                            <div
                                className={`absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                            />
                        </div>
                    ))}
                </div>

                {/* Fun fact banner */}
                <div className="mt-16 reveal">
                    <div className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-4 left-8 text-4xl opacity-20 animate-float">🎂</div>
                        <div className="absolute bottom-4 right-8 text-4xl opacity-20 animate-float-delayed">🍳</div>
                        <div className="absolute top-8 right-1/4 text-3xl opacity-15 animate-float-slow">⭐</div>

                        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">
                            Did You Know?
                        </h3>
                        <p className="text-lg md:text-xl font-body opacity-90 max-w-3xl mx-auto relative z-10">
                            Kids who learn to cook are <strong>3x more likely</strong> to make healthy food
                            choices and develop a lifelong love for nutritious eating!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
