import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'

const projects = [
    {
        image: '/images/portfolio-hardwood.png',
        title: 'Heritage Walnut Herringbone',
        category: 'Hardwood',
        description: 'Elegant herringbone pattern installation in a modern living room. Hand-selected walnut planks with custom stain.',
    },
    {
        image: '/images/portfolio-tile.png',
        title: 'Marble Luxury Bathroom',
        category: 'Tile',
        description: 'Large-format Calacatta marble porcelain in a complete master bathroom renovation.',
    },
    {
        image: '/images/portfolio-vinyl.png',
        title: 'Modern Kitchen LVP',
        category: 'Vinyl / LVP',
        description: 'Waterproof luxury vinyl plank across an open-concept kitchen and dining area.',
    },
    {
        image: '/images/portfolio-laminate.png',
        title: 'Bedroom Retreat',
        category: 'Laminate',
        description: 'Light ash laminate flooring creating a serene, warm bedroom atmosphere.',
    },
    {
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        title: 'Commercial Office Space',
        category: 'Carpet',
        description: 'Premium carpet tile installation for a modern corporate office spanning 5,000 sq ft.',
    },
    {
        image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80',
        title: 'Antique Oak Restoration',
        category: 'Refinishing',
        description: 'Complete sand-and-refinish of century-old oak hardwood floors, restoring their original beauty.',
    },
]

export default function Portfolio() {
    const [selected, setSelected] = useState(null)

    return (
        <section id="portfolio" className="py-16 sm:py-20 bg-[#0f0c09] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-warm-500/20 rounded-full text-warm-200 text-sm font-medium mb-4 tracking-wide">
                        Our Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-warm-50 mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-warm-300 max-w-2xl mx-auto text-lg">
                        Browse our portfolio of completed flooring installations. Each project reflects our commitment to quality and craftsmanship.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 aspect-[4/3]"
                            onClick={() => setSelected(project)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <Badge className="bg-warm-500/80 text-white border-0 mb-2">
                                        {project.category}
                                    </Badge>
                                    <h3 className="text-white font-heading font-bold text-lg">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <img
                            src={selected.image}
                            alt={selected.title}
                            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        />
                        <div className="p-6 sm:p-8">
                            <Badge className="bg-warm-100 text-warm-700 border-warm-200 mb-3">
                                {selected.category}
                            </Badge>
                            <h3 className="text-2xl font-heading font-bold text-warm-900 mb-2">
                                {selected.title}
                            </h3>
                            <p className="text-warm-600">{selected.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
