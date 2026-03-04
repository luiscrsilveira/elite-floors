import { Shield, Award, Users, Clock } from 'lucide-react'

const stats = [
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '2,500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Shield, value: '100%', label: 'Licensed & Insured' },
]

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 bg-[#0f0c09] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-warm-gradient rounded-3xl opacity-10 blur-2xl" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                                alt="Our flooring installation team at work"
                                className="w-full h-[400px] sm:h-[500px] object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-warm-gradient rounded-lg flex items-center justify-center">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-warm-900 text-lg">A+ Rated</p>
                                        <p className="text-warm-500 text-sm">Better Business Bureau</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-warm-500/20 rounded-full text-warm-200 text-sm font-medium mb-4 tracking-wide">
                            About Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-50 mb-5 leading-tight">
                            Crafting Beautiful Floors{' '}
                            <span className="text-gradient">Since 2010</span>
                        </h2>
                        <p className="text-warm-300 text-lg leading-relaxed mb-5">
                            At Elite Floors, we believe that every floor tells a story. Founded by master craftsmen
                            with a passion for woodworking and design, we've grown into one of the region's most
                            trusted flooring companies.
                        </p>
                        <p className="text-warm-300 leading-relaxed mb-6">
                            Our team of licensed professionals brings decades of combined experience to every project —
                            from cozy bedrooms to sprawling commercial spaces. We use only premium materials from
                            top manufacturers and back every installation with our satisfaction guarantee.
                        </p>

                        {/* Values */}
                        <div className="space-y-3 mb-8">
                            {[
                                'Free in-home consultations & estimates',
                                'Premium materials from trusted manufacturers',
                                'Satisfaction guarantee on every project',
                                'Clean, respectful, and on-time crews',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-warm-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-warm-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5">
                    {stats.map((stat) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={stat.label}
                                className="bg-[#1a1310] rounded-2xl p-5 text-center group hover:shadow-lg transition-all duration-300 border border-warm-700/20"
                            >
                                <Icon className="w-7 h-7 text-warm-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                <p className="text-3xl sm:text-4xl font-heading font-bold text-warm-100 mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-warm-400 text-sm font-medium">{stat.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
