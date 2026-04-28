export default function SectorsSection() {
  const sectors = [
    {
      icon: '⚡',
      title: 'Power & Energy',
      desc: 'Infrastructure solutions for power generation and energy distribution systems.',
    },
    {
      icon: '🏗️',
      title: 'Real Estate & Construction',
      desc: 'End-to-end support for major construction and real estate development projects.',
    },
    {
      icon: '🏛️',
      title: 'Interior & Architecture',
      desc: 'Specialized materials and consultancy for architectural and interior projects.',
    },
    {
      icon: '🌾',
      title: 'Agriculture & Foodstuff',
      desc: 'Global trading in agricultural commodities and food supply chain management.',
    },
    {
      icon: '🏢',
      title: 'Institutional & Commercial',
      desc: 'Tailored solutions for government institutions and large commercial enterprises.',
    },
  ]

  return (
    <section id="sectors" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-surface" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mb-4">◈ Industries</div>
          <h2 className="section-title">
            SECTORS <span className="text-primary">WE SERVE</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Our expertise spans multiple industries, providing specialized solutions that drive efficiency and growth across sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {sectors.map((sector, i) => (
            <div key={sector.title}
              className="group relative p-6 border border-dark-border hover:border-primary/50 transition-all duration-400 text-center"
              style={{
                background: 'linear-gradient(160deg, #0e1a0e 0%, #080d08 100%)',
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              }}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'radial-gradient(ellipse at center, rgba(0,200,83,0.05) 0%, transparent 70%)' }} />

              {/* Diamond icon container */}
              <div className="relative mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 border border-primary/30 group-hover:border-primary/60 transition-colors"
                  style={{ transform: 'rotate(45deg)' }} />
                <span className="text-2xl relative z-10">{sector.icon}</span>
              </div>

              <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-primary transition-colors leading-tight">
                {sector.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}