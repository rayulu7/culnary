import { useEffect, useRef } from 'react'
import { FaAward, FaSeedling, FaGlobeAmericas } from 'react-icons/fa'
import { GiCookingPot } from 'react-icons/gi'

const milestones = [
    { year: '2018', text: 'Founded with a single kitchen and a big dream' },
    { year: '2019', text: 'Reached 500 happy young chefs' },
    { year: '2021', text: 'Expanded to 3 studio locations' },
    { year: '2023', text: 'Launched seasonal & holiday workshops' },
    { year: '2025', text: 'Crossed 2,000+ kids trained' },
]

const values = [
    {
        icon: <GiCookingPot className="text-2xl text-white" />,
        title: 'Passion for Cooking',
        description: 'We believe every child has an inner chef waiting to be discovered through fun, hands-on exploration.',
        color: 'from-primary-400 to-primary-300',
    },
    {
        icon: <FaSeedling className="text-2xl text-white" />,
        title: 'Healthy Living',
        description: 'Teaching kids to love real food, understand nutrition, and build lifelong healthy eating habits.',
        color: 'from-green-400 to-emerald-300',
    },
    {
        icon: <FaAward className="text-2xl text-white" />,
        title: 'Confidence Building',
        description: 'Cooking teaches patience, creativity, and problem-solving — skills that last a lifetime.',
        color: 'from-accent-400 to-accent-300',
    },
    {
        icon: <FaGlobeAmericas className="text-2xl text-white" />,
        title: 'Cultural Exploration',
        description: 'Our workshops take kids on a world tour of flavors — from Italian pasta to Indian curries.',
        color: 'from-secondary-400 to-secondary-300',
    },
]

export default function About() {
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
            id="about"
            ref={sectionRef}
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-50/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-sm font-semibold font-body mb-4">
                        🏠 About Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                        The Story Behind{' '}
                        <span className="text-gradient bg-gradient-to-r from-primary-400 to-secondary-400">
                            Little Chefs
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body max-w-2xl mx-auto text-lg">
                        Born from a love of food and a belief that every child deserves to learn the joy of cooking.
                    </p>
                </div>

                {/* Two Column Story + Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Story */}
                    <div className="reveal-left">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-5">
                            Our Mission
                        </h3>
                        <p className="text-gray-500 font-body leading-relaxed mb-4">
                            At <span className="text-primary-400 font-semibold">Little Chefs Academy</span>, we
                            believe the kitchen is the world's best classroom. Founded in 2018, we set out to make
                            cooking accessible, exciting, and educational for kids of all ages.
                        </p>
                        <p className="text-gray-500 font-body leading-relaxed mb-6">
                            Our team of professionally trained, child-friendly chefs designs every workshop to
                            spark creativity, teach real culinary skills, and foster a love for healthy eating.
                            From cracking their first egg to plating a full meal — we're with your little chef
                            every step of the way.
                        </p>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: '7+', label: 'Years' },
                                { value: '2000+', label: 'Kids Trained' },
                                { value: '3', label: 'Studios' },
                            ].map((s, i) => (
                                <div key={i} className="text-center p-3 rounded-2xl bg-primary-50/50">
                                    <p className="text-2xl font-heading font-bold text-primary-400">{s.value}</p>
                                    <p className="text-xs text-gray-400 font-body">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="reveal-right">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700&h=500&fit=crop"
                                alt="Chef teaching kids to cook in a bright kitchen"
                                className="w-full h-[280px] sm:h-[350px] lg:h-[400px] object-cover rounded-3xl shadow-2xl"
                                loading="lazy"
                            />
                            {/* Accent card overlay */}
                            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-100">
                                <p className="text-3xl font-heading font-bold text-primary-400 leading-none">Est. 2018</p>
                                <p className="text-gray-400 font-body text-sm mt-1">Making cooking fun!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="mb-20 reveal">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 text-center mb-10">
                        Our Core Values
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, i) => (
                            <div
                                key={i}
                                className="group bg-warmGray-50 rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${val.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                                >
                                    {val.icon}
                                </div>
                                <h4 className="font-heading font-bold text-gray-800 mb-2">{val.title}</h4>
                                <p className="text-gray-400 font-body text-sm leading-relaxed">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="reveal">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 text-center mb-10">
                        Our Journey
                    </h3>
                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-secondary-200 md:-translate-x-0.5" />

                        {milestones.map((m, i) => (
                            <div
                                key={i}
                                className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary-400 ring-4 ring-primary-100 md:-translate-x-1.5 z-10" />

                                {/* Card */}
                                <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? 'md:w-[45%] md:pr-8 md:text-right' : 'md:w-[45%] md:pl-8 md:ml-auto'}`}>
                                    <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                        <span className="text-sm font-heading font-bold text-primary-400">{m.year}</span>
                                        <p className="text-gray-600 font-body text-sm mt-1">{m.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
