import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About Us', href: '#about' },
]

export default function Footer() {
    const handleNavClick = (e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="bg-warm-900 text-white relative overflow-hidden">
            {/* CTA Banner */}
            <div className="bg-warm-gradient">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                                Ready to Transform Your Floors?
                            </h3>
                            <p className="text-white/80">
                                Get a free estimate today. No obligation, no pressure.
                            </p>
                        </div>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-warm-800 hover:bg-warm-50 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex-shrink-0 group"
                        >
                            <a href="tel:+15551234567">
                                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                Call (555) 123-4567
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-warm-gradient rounded-lg flex items-center justify-center shadow-md">
                                <span className="text-white font-heading font-bold text-lg">EF</span>
                            </div>
                            <span className="font-heading font-bold text-xl text-white">Elite Floors</span>
                        </div>
                        <p className="text-warm-300 leading-relaxed text-sm mb-6">
                            Premium flooring installation services for homes and businesses.
                            Over 15 years of trusted craftsmanship.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Instagram, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-white/10 hover:bg-warm-500 rounded-lg flex items-center justify-center transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-warm-300 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
                        <ul className="space-y-3">
                            {['Hardwood', 'Laminate', 'Vinyl & LVP', 'Tile', 'Carpet', 'Refinishing'].map((s) => (
                                <li key={s}>
                                    <a
                                        href="#services"
                                        onClick={(e) => handleNavClick(e, '#services')}
                                        className="text-warm-300 hover:text-white transition-colors text-sm"
                                    >
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-warm-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <a href="tel:+15551234567" className="text-white hover:text-warm-300 transition-colors font-medium">
                                        (555) 123-4567
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-warm-400 flex-shrink-0 mt-0.5" />
                                <a href="mailto:info@elitefloors.com" className="text-warm-300 hover:text-white transition-colors text-sm">
                                    info@elitefloors.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-warm-400 flex-shrink-0 mt-0.5" />
                                <span className="text-warm-300 text-sm">
                                    123 Main Street, Suite 100<br />
                                    Tampa, FL 33602
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-warm-400 flex-shrink-0 mt-0.5" />
                                <span className="text-warm-300 text-sm">
                                    Mon – Fri: 7AM – 6PM<br />
                                    Sat: 8AM – 2PM
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-warm-400 text-sm">
                        © {new Date().getFullYear()} Elite Floors. All rights reserved.
                    </p>
                    <p className="text-warm-500 text-xs">
                        Licensed & Insured · FL License #CRC123456
                    </p>
                </div>
            </div>
        </footer>
    )
}
