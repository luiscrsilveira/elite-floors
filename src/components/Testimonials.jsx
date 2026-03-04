import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Sarah M.',
        role: 'Homeowner — Kitchen Renovation',
        rating: 5,
        text: "Elite Floors completely transformed our kitchen with gorgeous luxury vinyl plank. The team was punctual, professional, and left the place spotless. We couldn't be happier with the results!",
        initials: 'SM',
    },
    {
        name: 'James R.',
        role: 'Homeowner — Hardwood Installation',
        rating: 5,
        text: "Incredible craftsmanship! They installed herringbone walnut floors throughout our living and dining rooms. The attention to detail was remarkable. Everyone who visits comments on how beautiful the floors look.",
        initials: 'JR',
    },
    {
        name: 'Maria L.',
        role: 'Real Estate Developer',
        rating: 5,
        text: "We use Elite Floors for all our new construction projects. Consistently high quality, on-time delivery, and competitive pricing. They handle everything from tile to hardwood with equal expertise.",
        initials: 'ML',
    },
    {
        name: 'David K.',
        role: 'Homeowner — Floor Refinishing',
        rating: 5,
        text: "Our 80-year-old oak floors were in rough shape. The team at Elite Floors brought them back to life — they look brand new! The sanding, staining, and finishing were all perfectly executed.",
        initials: 'DK',
    },
    {
        name: 'Amanda T.',
        role: 'Homeowner — Bathroom Tile',
        rating: 5,
        text: "The marble-look porcelain tile in our master bath is absolutely stunning. The installers were meticulous with every cut and grout line. Professional from the estimate to the final walk-through.",
        initials: 'AT',
    },
]

export default function Testimonials() {
    const [current, setCurrent] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const goTo = (index) => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrent(index)
        setTimeout(() => setIsAnimating(false), 500)
    }

    const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length)
    const next = () => goTo((current + 1) % testimonials.length)

    useEffect(() => {
        const timer = setInterval(() => next(), 6000)
        return () => clearInterval(timer)
    }, [current])

    return (
        <section id="testimonials" className="py-16 sm:py-20 bg-[#1a1310] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-500/8 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-warm-500/20 rounded-full text-warm-200 text-sm font-medium mb-4 tracking-wide">
                        Customer Love
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-50 mb-4">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="text-warm-300 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it — hear from homeowners and professionals who trust us with their flooring projects.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <Card className="bg-[#241c16]/80 backdrop-blur-sm border-warm-700/30 shadow-xl overflow-hidden">
                        <CardContent className="p-8 sm:p-10">
                            <Quote className="w-10 h-10 text-warm-500/40 mb-4" />

                            <div
                                key={current}
                                className="transition-all duration-500 ease-in-out"
                                style={{ animation: 'fadeIn 0.5s ease-out' }}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                                        <Star key={j} className="w-5 h-5 fill-warm-400 text-warm-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-warm-200 text-lg sm:text-xl leading-relaxed mb-6 italic">
                                    "{testimonials[current].text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-warm-gradient rounded-full flex items-center justify-center text-white font-bold font-heading shadow-md">
                                        {testimonials[current].initials}
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-warm-50">
                                            {testimonials[current].name}
                                        </p>
                                        <p className="text-warm-400 text-sm">
                                            {testimonials[current].role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-11 h-11 bg-[#241c16] border border-warm-700/30 rounded-full shadow-lg flex items-center justify-center text-warm-300 hover:text-white hover:bg-warm-600 hover:shadow-xl transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-11 h-11 bg-[#241c16] border border-warm-700/30 rounded-full shadow-lg flex items-center justify-center text-warm-300 hover:text-white hover:bg-warm-600 hover:shadow-xl transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`rounded-full transition-all duration-300 ${i === current
                                    ? 'w-8 h-3 bg-warm-500'
                                    : 'w-3 h-3 bg-warm-300/50 hover:bg-warm-400/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    )
}
