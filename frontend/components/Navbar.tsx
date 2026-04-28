'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur border-b border-dark-border' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div className="absolute inset-0 bg-primary rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#00C853" strokeWidth="1.5" />
                  <path d="M10 20 C10 14 14 10 20 10 C26 10 30 14 30 20" stroke="#00C853" strokeWidth="1.5" fill="none" />
                  <path d="M10 20 C10 26 14 30 20 30 C26 30 30 26 30 20" stroke="#00C853" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                  <circle cx="20" cy="20" r="3" fill="#00C853" />
                  <line x1="10" y1="20" x2="30" y2="20" stroke="#00C853" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-lg md:text-xl leading-none">ABC</div>
              <div className="font-display text-primary text-[9px] tracking-widest uppercase">Technologies</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                className="font-display text-sm font-medium tracking-wider text-gray-300 hover:text-primary transition-colors uppercase relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:flex btn-primary text-xs">
              Get A Quote
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-300 hover:text-primary transition-colors">
              <div className="w-5 h-px bg-current mb-1 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
              <div className="w-5 h-px bg-current mb-1 transition-opacity" style={{ opacity: menuOpen ? 0 : 1 }} />
              <div className="w-5 h-px bg-current transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-dark-border">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                className="font-display text-sm font-medium tracking-wider text-gray-300 hover:text-primary transition-colors uppercase">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-xs w-fit">Get A Quote</a>
          </div>
        </div>
      )}
    </nav>
  )
}