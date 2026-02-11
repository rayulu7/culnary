import { useEffect, useRef, useState } from 'react'

export default function CTA() {
    const sectionRef = useRef(null)
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        email: '',
        phone: '',
        workshop: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setFormData({
            parentName: '',
            childName: '',
            email: '',
            phone: '',
            workshop: '',
            message: '',
        })
    }

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="section-padding relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-accent-400 to-secondary-400" />
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Floating decorations */}
            <div className="absolute top-10 left-10 text-5xl opacity-20 animate-float">🎉</div>
            <div className="absolute bottom-10 right-10 text-5xl opacity-20 animate-float-delayed">🧑‍🍳</div>
            <div className="absolute top-1/3 right-[15%] text-4xl opacity-15 animate-float-slow">⭐</div>
            <div className="absolute bottom-1/4 left-[10%] text-4xl opacity-15 animate-float">🎨</div>

            <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-12 reveal">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Ready to Start the
                        <br />
                        <span className="text-accent-100">Cooking Adventure?</span>
                    </h2>
                    <p className="text-lg text-white/80 font-body max-w-2xl mx-auto">
                        Enroll your little chef today! Fill out the form below and we'll get back
                        to you within 24 hours to confirm your spot.
                    </p>
                </div>

                {/* Form */}
                <div className="reveal bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                    {submitted ? (
                        <div className="text-center py-12">
                            <span className="text-6xl mb-4 block animate-bounce-slow">🎉</span>
                            <h3 className="text-3xl font-heading font-bold text-white mb-3">
                                Awesome! We Got It!
                            </h3>
                            <p className="text-white/80 font-body text-lg">
                                We'll reach out soon to confirm your little chef's spot. Get those aprons ready! 👨‍🍳
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white/90 font-body text-sm font-medium mb-2">
                                    Parent's Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.parentName}
                                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-white/40 font-body focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-white/90 font-body text-sm font-medium mb-2">
                                    Child's Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.childName}
                                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-white/40 font-body focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all"
                                    placeholder="Your child's name"
                                />
                            </div>

                            <div>
                                <label className="block text-white/90 font-body text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-white/40 font-body focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-white/90 font-body text-sm font-medium mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-white/40 font-body focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-white/90 font-body text-sm font-medium mb-2">
                                    Select Workshop
                                </label>
                                <select
                                    required
                                    value={formData.workshop}
                                    onChange={(e) => setFormData({ ...formData, workshop: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/15 border border-white/20 text-white font-body focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" className="text-gray-800">Choose a workshop...</option>
                                    <option value="baking" className="text-gray-800">🧁 Baking Basics (5-8 yrs)</option>
                                    <option value="pizza" className="text-gray-800">🍕 Pizza Party (6-12 yrs)</option>
                                    <option value="smoothie" className="text-gray-800">🥤 Smoothie Lab (5-10 yrs)</option>
                                    <option value="pasta" className="text-gray-800">🍝 Pasta Masters (8-14 yrs)</option>
                                    <option value="chocolate" className="text-gray-800">🍫 Chocolate Magic (7-12 yrs)</option>
                                    <option value="junior" className="text-gray-800">🥗 Junior Chef (10-14 yrs)</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-white/90 font-body text-sm font-medium mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    rows={3}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-white/40 font-body focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all resize-none"
                                    placeholder="Any allergies, special requirements, or questions?"
                                />
                            </div>

                            <div className="md:col-span-2 text-center">
                                <button
                                    type="submit"
                                    className="px-10 py-4 rounded-full bg-white text-primary-500 text-lg font-heading font-bold shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-1 hover:bg-accent-50 transition-all duration-300"
                                >
                                    Enroll My Little Chef! 🎉
                                </button>
                                <p className="text-white/50 text-sm font-body mt-4">
                                    🔒 Your information is safe with us. We never share your data.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}
