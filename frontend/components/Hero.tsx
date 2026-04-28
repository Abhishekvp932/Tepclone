'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/60" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full border border-primary/10 opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full border border-primary/10 opacity-30"
        style={{ top: 'calc(25% + 48px)', right: 'calc(25% + 48px)' }} />

      {/* Person silhouette area */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full overflow-hidden hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark z-10" />
        <div className="absolute bottom-0 right-8 w-64 h-[500px]">
          {/* Stylized person silhouette using CSS */}
          <svg viewBox="0 0 200 480" className="w-full h-full opacity-20 fill-primary">
            <circle cx="100" cy="40" r="30" />
            <path d="M60 90 C60 90 40 200 50 300 L80 300 L90 200 L110 200 L120 300 L150 300 C160 200 140 90 140 90 C130 100 70 100 60 90Z" />
            <path d="M60 90 L30 180 L55 185 L70 130Z" />
            <path d="M140 90 L170 180 L145 185 L130 130Z" />
          </svg>
        </div>
      </div>

      {/* Animated radar/globe */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center">
        <div className="relative w-72 h-72 opacity-20">
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-primary/20" style={{ animationDuration: '15s' }} />
          <div className="absolute inset-8 rounded-full border border-primary/15" />
          {/* Grid lines on globe */}
          <svg viewBox="0 0 288 288" className="absolute inset-0 w-full h-full">
            <circle cx="144" cy="144" r="140" stroke="#00C853" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
            <ellipse cx="144" cy="144" rx="90" ry="140" stroke="#00C853" strokeWidth="0.5" fill="none" strokeOpacity="0.2" />
            <ellipse cx="144" cy="144" rx="40" ry="140" stroke="#00C853" strokeWidth="0.5" fill="none" strokeOpacity="0.2" />
            <line x1="4" y1="144" x2="284" y2="144" stroke="#00C853" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="144" y1="4" x2="144" y2="284" stroke="#00C853" strokeWidth="0.5" strokeOpacity="0.2" />
            <ellipse cx="144" cy="80" rx="140" ry="20" stroke="#00C853" strokeWidth="0.5" fill="none" strokeOpacity="0.2" />
            <ellipse cx="144" cy="200" rx="140" ry="20" stroke="#00C853" strokeWidth="0.5" fill="none" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="section-label mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            ◈ Global Infrastructure Leader
          </div>

          <h1 className="font-bold leading-none mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0, fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            <span className="text-white">GLOBAL TRADING &</span>
            <br />
            <span className="text-primary text-glow">INTELLIGENT</span>
            <br />
            <span className="text-white">INFRASTRUCTURE</span>
            <br />
            <span className="text-white">SOLUTIONS</span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mb-10 animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}>
            ABC Technologies delivers cutting-edge trading, engineering, and technology solutions across global markets.
            Your single-window partner for complex infrastructure and export operations worldwide.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <a href="#services" className="btn-primary">
              <span>Our Services</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              <span>Learn More</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '50+', label: 'Global Partners' },
              { value: '200+', label: 'Projects Delivered' },
            ].map(stat => (
              <div key={stat.label} className="border-l-2 border-primary pl-4">
                <div className="font-bold text-2xl text-primary">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  )
}