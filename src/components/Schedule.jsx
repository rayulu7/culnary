import { useEffect, useRef } from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaArrowRight, FaStar } from 'react-icons/fa'

const upcomingEvents = [
    {
        title: 'Baking Basics – Cupcake Edition',
        date: 'Mar 8, 2026',
        day: 'Saturday',
        time: '10:00 AM – 12:00 PM',
        location: 'Main Kitchen Studio',
        ageGroup: '5-8 years',
        spotsLeft: 4,
        totalSpots: 10,
        price: '₹1,499',
        highlight: 'Most Popular',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=250&fit=crop',
        color: 'from-pink-400 to-rose-400',
        lightBg: 'bg-pink-50',
        lightText: 'text-pink-500',
    },
    {
        title: 'Pizza Party Extravaganza',
        date: 'Mar 15, 2026',
        day: 'Saturday',
        time: '11:00 AM – 1:30 PM',
        location: 'Main Kitchen Studio',
        ageGroup: '6-12 years',
        spotsLeft: 7,
        totalSpots: 10,
        price: '₹1,799',
        highlight: null,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop',
        color: 'from-primary-400 to-accent-400',
        lightBg: 'bg-orange-50',
        lightText: 'text-primary-400',
    },
    {
        title: 'Smoothie Science Lab',
        date: 'Mar 22, 2026',
        day: 'Saturday',
        time: '10:00 AM – 11:30 AM',
        location: 'Juice Bar Studio',
        ageGroup: '5-10 years',
        spotsLeft: 6,
        totalSpots: 10,
        price: '₹999',
        highlight: 'New!',
        image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=250&fit=crop',
        color: 'from-green-400 to-emerald-400',
        lightBg: 'bg-green-50',
        lightText: 'text-green-500',
    },
    {
        title: 'Pasta Masters Workshop',
        date: 'Mar 29, 2026',
        day: 'Saturday',
        time: '2:00 PM – 5:00 PM',
        location: 'Main Kitchen Studio',
        ageGroup: '8-14 years',
        spotsLeft: 3,
        totalSpots: 10,
        price: '₹2,199',
        highlight: 'Almost Full!',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=250&fit=crop',
        color: 'from-amber-400 to-yellow-400',
        lightBg: 'bg-amber-50',
        lightText: 'text-amber-500',
    },
]

export default function Schedule() {
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
            id="schedule"
            ref={sectionRef}
            className="section-padding bg-gradient-to-b from-white via-accent-50/30 to-white relative overflow-hidden"
        >
            {/* Background decorations (matching app theme) */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary-100/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-100/15 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 text-accent-600 text-sm font-semibold font-body mb-4">
                        <FaCalendarAlt className="text-xs" />
                        Upcoming Schedule
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                        Grab Your{' '}
                        <span className="text-gradient bg-gradient-to-r from-accent-400 to-primary-400">
                            Spot Now
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body max-w-2xl mx-auto text-lg">
                        Our workshops fill up fast! Browse upcoming sessions and book your little chef's seat today.
                    </p>
                </div>

                {/* Schedule Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {upcomingEvents.map((event, i) => (
                        <div
                            key={i}
                            className="reveal group bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-100/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-gray-100"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {/* Image Header */}
                            <div className="relative h-36 sm:h-44 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                {/* Highlight badge */}
                                {event.highlight && (
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${event.color} text-white text-xs font-bold font-body shadow-lg`}>
                                            <FaStar className="text-[10px]" />
                                            {event.highlight}
                                        </span>
                                    </div>
                                )}

                                {/* Price badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-heading font-bold shadow-md">
                                        {event.price}
                                    </span>
                                </div>

                                {/* Date overlay */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white rounded-xl px-3 py-2 text-center shadow-lg">
                                            <p className="text-[10px] font-body text-gray-400 leading-none uppercase">{event.date.split(' ')[0]}</p>
                                            <p className="text-2xl font-heading font-bold text-gray-800 leading-none">{event.date.split(' ')[1].replace(',', '')}</p>
                                        </div>
                                        <div>
                                            <p className="text-white font-heading font-bold text-sm">{event.day}</p>
                                            <p className="text-white/70 font-body text-xs">{event.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-4 sm:p-6">
                                {/* Title + Age */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-heading font-bold text-gray-800 pr-3">
                                        {event.title}
                                    </h3>
                                    <span className={`shrink-0 px-3 py-1 rounded-full ${event.lightBg} ${event.lightText} text-xs font-semibold font-body`}>
                                        {event.ageGroup}
                                    </span>
                                </div>

                                {/* Details Row */}
                                <div className="flex flex-wrap gap-4 mb-5">
                                    <div className="flex items-center gap-2 text-gray-500 font-body text-sm">
                                        <FaClock className="text-accent-400 text-xs" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 font-body text-sm">
                                        <FaMapMarkerAlt className="text-secondary-400 text-xs" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* Spots + CTA */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                    <div>
                                        <div className="flex items-center gap-1.5 text-sm font-body mb-1.5">
                                            <FaUsers className="text-gray-300 text-xs" />
                                            <span className={`font-semibold ${event.spotsLeft <= 4 ? 'text-rose-500' : 'text-gray-600'}`}>
                                                {event.spotsLeft} spots left
                                            </span>
                                            <span className="text-gray-300">/ {event.totalSpots}</span>
                                        </div>
                                        {/* Progress bar */}
                                        <div className="w-28 sm:w-36 h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full bg-gradient-to-r ${event.color} transition-all duration-1000`}
                                                style={{ width: `${((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                        className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r ${event.color} text-white text-sm font-semibold font-body shadow-md shadow-gray-200/50 hover:shadow-lg hover:gap-3 hover:-translate-y-0.5 transition-all duration-300`}
                                    >
                                        Book Now
                                        <FaArrowRight className="text-xs" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 reveal">
                    <p className="text-gray-400 font-body mb-4">
                        Can't find a time that works? We offer private workshops too!
                    </p>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-200 text-primary-400 font-body font-semibold hover:bg-primary-50 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Request Private Workshop
                        <FaArrowRight className="text-xs" />
                    </a>
                </div>
            </div>
        </section>
    )
}
