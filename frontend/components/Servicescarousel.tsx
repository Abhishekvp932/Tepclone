'use client'
import { useEffect, useState, useRef } from 'react'
import { api } from '@/service/api'

interface Service {
  _id: string
  title: string
  description: string
  icon: string
  order: number
}

const iconMap: Record<string, React.ReactNode> = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  cog: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M7 9H4M7 12H4M7 15H4M17 9h3M17 12h3M17 15h3M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3" />
    </svg>
  ),
  pipe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 9h18M3 15h18M9 9v6M15 9v6" />
      <rect x="1" y="7" width="6" height="10" rx="1" />
      <rect x="17" y="7" width="6" height="10" rx="1" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
}

export default function ServicesCarousel() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    api.get('/api/services')
      .then(({ data }) => {
        if (data.success) setServices(data.data)
      })
      .catch(() => {
        setServices([
          {
            _id: 'fallback-1',
            title: 'Global Trading & Export',
            description: 'End-to-end export, sourcing, and logistics support for international markets.',
            icon: 'globe',
            order: 1,
          },
          {
            _id: 'fallback-2',
            title: 'Technical Consultation',
            description: 'Engineering-led advisory for infrastructure, energy, and technology programs.',
            icon: 'cog',
            order: 2,
          },
          {
            _id: 'fallback-3',
            title: 'Engineering Delivery',
            description: 'Project delivery support across planning, procurement, execution, and handover.',
            icon: 'chip',
            order: 3,
          },
          {
            _id: 'fallback-4',
            title: 'Gas Duct Delivery',
            description: 'Specialized supply and delivery services for industrial gas duct requirements.',
            icon: 'pipe',
            order: 4,
          },
        ])
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (services.length > 1) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(i => (i + 1) % services.length)
      }, 4000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [services.length])

  const goTo = (index: number) => {
    if (services.length === 0) return
    setActiveIndex(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex(i => (i + 1) % services.length)
    }, 4000)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return
    const diff = startX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo((activeIndex + 1) % services.length)
      else goTo((activeIndex - 1 + services.length) % services.length)
    }
    setIsDragging(false)
  }

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-surface/50 to-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="section-label mb-3">◈ What We Offer</div>
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-2">YOUR SINGLE-WINDOW PARTNER FOR</p>
          <h2 className="section-title">
            <span className="text-primary">GLOBAL SOLUTIONS</span>
          </h2>
        </div>

        <div className="mt-4 text-center">
          <div className="inline-block font-bold text-lg tracking-[0.2em] text-white border-b border-primary/40 pb-1 mb-12">
            OUR SERVICES
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="service-card p-6 h-64 animate-pulse">
                <div className="w-12 h-12 rounded bg-dark-border mb-4" />
                <div className="h-4 bg-dark-border rounded mb-2 w-3/4" />
                <div className="h-3 bg-dark-border rounded mb-1" />
                <div className="h-3 bg-dark-border rounded w-4/5" />
              </div>
            ))}
          </div>
        ) : services.length === 0 ? (
          <div className="text-center text-gray-400 border border-dark-border py-10">
            Services will appear here once they are added from the admin panel.
          </div>
        ) : (
          <>
            {/* Desktop: Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <ServiceCard key={service._id} service={service} delay={idx * 100} />
              ))}
            </div>

            {/* Mobile: Carousel */}
            <div className="md:hidden relative"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}>
              <div ref={trackRef} className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                  {services.map((service) => (
                    <div key={service._id} className="w-full flex-shrink-0 px-2">
                      <ServiceCard service={service} delay={0} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              {services.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {services.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)}
                      className={`transition-all duration-300 h-2 rounded-full ${i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-dark-border'}`} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  return (
    <div className="service-card p-6 flex flex-col gap-4 group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}>
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors" />

      <div className="w-14 h-14 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
        {iconMap[service.icon] || iconMap.default}
      </div>

      <h3 className="font-bold text-white text-base leading-tight group-hover:text-primary transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      <button className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mt-2 group/btn">
        <span>Learn More</span>
        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
