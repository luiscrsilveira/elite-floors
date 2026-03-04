import { Card, CardContent } from '@/components/ui/card'
import {
    TreePine,
    Layers,
    Droplets,
    Grid3X3,
    Sofa,
    Sparkles,
} from 'lucide-react'

const services = [
    {
        icon: TreePine,
        title: 'Hardwood Flooring',
        description:
            'Classic solid and engineered hardwood installation. Oak, maple, walnut, and exotic species in plank, herringbone, and chevron patterns.',
    },
    {
        icon: Layers,
        title: 'Laminate Flooring',
        description:
            'High-quality laminate that mimics natural wood and stone at a fraction of the cost. Durable, scratch-resistant, and easy to maintain.',
    },
    {
        icon: Droplets,
        title: 'Vinyl & LVP',
        description:
            'Waterproof luxury vinyl plank and tile for kitchens, bathrooms, and basements. Realistic textures with superior durability.',
    },
    {
        icon: Grid3X3,
        title: 'Tile Installation',
        description:
            'Porcelain, ceramic, marble, and natural stone tile for floors, backsplashes, and showers. Precision cuts and flawless grout lines.',
    },
    {
        icon: Sofa,
        title: 'Carpet Installation',
        description:
            'Premium carpet fitting for bedrooms, living areas, and commercial spaces. Wide selection of textures, colors, and padding options.',
    },
    {
        icon: Sparkles,
        title: 'Floor Refinishing',
        description:
            'Restore your existing hardwood floors to like-new condition. Sanding, staining, and finishing with top-grade polyurethane coatings.',
    },
]

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-20 bg-[#1a1310] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-warm-500/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-warm-400/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-warm-500/20 rounded-full text-warm-200 text-sm font-medium mb-4 tracking-wide">
                        What We Do
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-50 mb-4">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-warm-300 max-w-2xl mx-auto text-lg">
                        We offer a complete range of professional flooring solutions tailored to your style, budget, and lifestyle.
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <Card
                                key={service.title}
                                className="group bg-[#241c16]/80 backdrop-blur-sm border-warm-700/30 hover:border-warm-500/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <CardContent className="p-7">
                                    <div className="w-13 h-13 bg-warm-gradient rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-heading font-bold text-warm-50 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-warm-300 leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
