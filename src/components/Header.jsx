import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMobileOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header
            id="header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-warm-200/40'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                        <div className="w-10 h-10 bg-warm-gradient rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                            <span className="text-white font-heading font-bold text-lg">EF</span>
                        </div>
                        <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-warm-800' : 'text-white'}`}>
                            Elite Floors
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-warm-100/60 ${scrolled ? 'text-warm-800 hover:text-warm-600' : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button
                            asChild
                            className="ml-4 bg-warm-gradient hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6"
                        >
                            <a href="tel:+15551234567">
                                <Phone className="w-4 h-4 mr-2" />
                                (555) 123-4567
                            </a>
                        </Button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-warm-800' : 'text-white'
                            }`}
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 bg-white/95 backdrop-blur-lg ${mobileOpen ? 'max-h-80 border-b border-warm-200/40' : 'max-h-0'
                    }`}
            >
                <nav className="flex flex-col px-4 py-4 gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="px-4 py-3 rounded-lg text-warm-800 font-medium hover:bg-warm-100 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        asChild
                        className="mt-2 bg-warm-gradient hover:opacity-90 text-white shadow-lg rounded-full"
                    >
                        <a href="tel:+15551234567">
                            <Phone className="w-4 h-4 mr-2" />
                            Call (555) 123-4567
                        </a>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
