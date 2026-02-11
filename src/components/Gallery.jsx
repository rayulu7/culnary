import { useEffect, useRef, useState } from 'react'

const galleryItems = [
    {
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
        title: 'Cake Decorating Fun',
        description: 'Little artists creating edible masterpieces',
        size: 'md:col-span-2 md:row-span-2',
    },
    {
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
        title: 'Pizza Making Day',
        description: 'Hands deep in dough!',
        size: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
        title: 'Salad Creations',
        description: 'Fresh & healthy bowls',
        size: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=400&fit=crop',
        title: 'Cookie Workshop',
        description: 'Baking holiday treats',
        size: 'md:col-span-2',
    },
    {
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=400&fit=crop',
        title: 'Cupcake Magic',
        description: 'Frosting and sprinkles galore',
        size: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
        title: 'Breakfast Champions',
        description: 'Pancake flipping masters',
        size: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=400&fit=crop',
        title: 'Pasta From Scratch',
        description: 'Rolling & cutting like pros',
        size: 'md:col-span-2',
    },
]

export default function Gallery() {
    const sectionRef = useRef(null)
    const [hoveredIndex, setHoveredIndex] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.05 }
        )
        const els = sectionRef.current?.querySelectorAll('.reveal')
        els?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section id="gallery" ref={sectionRef} className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-500 text-sm font-semibold font-body mb-4">
                        📸 Gallery
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                        Moments of{' '}
                        <span className="text-gradient bg-gradient-to-r from-accent-400 to-primary-400">
                            Pure Joy
                        </span>
                    </h2>
                    <p className="text-gray-500 font-body max-w-2xl mx-auto text-lg">
                        A peek into our vibrant kitchen where smiles are the secret ingredient! 📸
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
                    {galleryItems.map((item, i) => (
                        <div
                            key={i}
                            className={`reveal ${item.size} relative rounded-3xl overflow-hidden cursor-pointer group`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Real Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hoveredIndex === i ? 'scale-110' : 'scale-100'
                                    }`}
                                loading="lazy"
                            />

                            {/* Dark overlay on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-40'
                                    }`}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                <h3
                                    className={`text-xl md:text-2xl font-heading font-bold mb-1 transition-all duration-500 ${hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
                                        }`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-sm font-body transition-all duration-500 transform ${hoveredIndex === i ? 'translate-y-0 opacity-90' : 'translate-y-4 opacity-0'
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </div>

                            {/* Shine effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
