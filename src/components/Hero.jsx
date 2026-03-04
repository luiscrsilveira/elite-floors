import { Button } from '@/components/ui/button'
import { Phone, ChevronDown } from 'lucide-react'

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
                    alt="Beautiful hardwood floor in modern living room"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-warm-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-warm-400/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <div className="animate-[fadeInUp_0.8s_ease-out]">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-warm-200 text-sm font-medium mb-6 tracking-wide">
                        ✦ Premium Flooring Services
                    </span>
                </div>

                <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6"
                    style={{ animationDelay: '0.2s', animation: 'fadeInUp 0.8s ease-out both' }}
                >
                    Transform Your Space with{' '}
                    <span className="bg-gradient-to-r from-warm-300 to-warm-500 bg-clip-text text-transparent">
                        Expert Flooring
                    </span>
                </h1>

                <p
                    className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                    style={{ animationDelay: '0.4s', animation: 'fadeInUp 0.8s ease-out both' }}
                >
                    From hardwood to tile, our master craftsmen deliver flawless flooring installations
                    that elevate your home. Over 15 years of trusted excellence.
                </p>

                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    style={{ animationDelay: '0.6s', animation: 'fadeInUp 0.8s ease-out both' }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-warm-gradient hover:opacity-90 text-white shadow-2xl hover:shadow-warm-500/25 transition-all duration-300 rounded-full px-8 py-6 text-lg font-semibold group"
                    >
                        <a href="tel:+15551234567">
                            <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                            Call Now: (555) 123-4567
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/50 rounded-full px-8 py-6 text-lg transition-all duration-300"
                    >
                        <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}>
                            View Our Work
                        </a>
                    </Button>
                </div>

                {/* Trust Badges */}
                <div
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
                    style={{ animationDelay: '0.8s', animation: 'fadeInUp 0.8s ease-out both' }}
                >
                    <div className="flex items-center gap-2">
                        <span className="text-warm-400 font-bold text-2xl">15+</span>
                        <span>Years Experience</span>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="flex items-center gap-2">
                        <span className="text-warm-400 font-bold text-2xl">2,500+</span>
                        <span>Projects Done</span>
                    </div>
                    <div className="w-px h-8 bg-white/20 hidden sm:block" />
                    <div className="flex items-center gap-2">
                        <span className="text-warm-400 font-bold text-2xl">5★</span>
                        <span>Rated Service</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
            >
                <ChevronDown className="w-8 h-8" />
            </a>

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    )
}
