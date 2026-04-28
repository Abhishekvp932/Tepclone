'use client'

export default function WorldwideSection() {
  const locations = [
    { name: 'UAE', x: '62%', y: '43%', delay: '0s' },
    { name: 'Saudi Arabia', x: '60%', y: '48%', delay: '0.3s' },
    { name: 'UK', x: '47%', y: '25%', delay: '0.6s' },
    { name: 'India', x: '68%', y: '48%', delay: '0.9s' },
    { name: 'China', x: '76%', y: '38%', delay: '1.2s' },
    { name: 'USA', x: '18%', y: '35%', delay: '1.5s' },
    { name: 'Germany', x: '50%', y: '26%', delay: '1.8s' },
    { name: 'Singapore', x: '76%', y: '56%', delay: '2.1s' },
  ]

  const stats = [
    { value: '15+', label: 'International Trade', sublabel: 'Markets Covered' },
    { value: '8+', label: 'Trade Country Partners', sublabel: 'Active Partnerships' },
    { value: '200+', label: 'GNV Partnerships', sublabel: 'Global Network' },
  ]

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-surface" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-label mb-4">◈ Global Reach</div>
          <h2 className="section-title">
            WORLDWIDE <span className="text-primary">OPERATIONS</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto">
            Operating from a global network, we facilitate trade, deliver technology, and execute engineering projects across continents.
          </p>
        </div>

        {/* World Map */}
        <div className="relative w-full h-64 md:h-96 mb-12 overflow-hidden rounded-lg border border-dark-border"
          style={{ background: 'linear-gradient(135deg, #0a130a 0%, #080d08 100%)' }}>

          {/* Grid overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,200,83,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,83,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

          {/* Simplified world map SVG */}
          <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full opacity-20" fill="none">
            {/* Rough continent outlines */}
            {/* North America */}
            <path d="M80 80 L180 70 L220 100 L230 150 L200 200 L180 250 L150 280 L120 260 L100 220 L80 180 L60 140Z" fill="#00C853" opacity="0.3" />
            {/* South America */}
            <path d="M150 290 L200 280 L220 320 L210 380 L190 420 L160 440 L140 420 L130 380 L135 340Z" fill="#00C853" opacity="0.3" />
            {/* Europe */}
            <path d="M420 60 L480 55 L510 70 L520 100 L500 120 L470 130 L440 120 L420 100Z" fill="#00C853" opacity="0.3" />
            {/* Africa */}
            <path d="M440 140 L510 130 L540 160 L550 220 L540 300 L510 360 L480 380 L450 360 L430 300 L420 240 L430 180Z" fill="#00C853" opacity="0.3" />
            {/* Middle East */}
            <path d="M530 130 L590 120 L620 140 L630 170 L600 190 L560 185 L535 165Z" fill="#00C853" opacity="0.3" />
            {/* Asia */}
            <path d="M590 60 L750 50 L820 80 L840 120 L820 160 L780 180 L720 170 L660 160 L620 140 L600 120Z" fill="#00C853" opacity="0.3" />
            {/* South/SE Asia */}
            <path d="M660 170 L730 160 L780 180 L790 220 L760 250 L720 260 L680 240 L650 210Z" fill="#00C853" opacity="0.3" />
            {/* Australia */}
            <path d="M730 300 L820 290 L850 320 L850 380 L820 400 L760 410 L720 390 L710 350Z" fill="#00C853" opacity="0.3" />
          </svg>

          {/* Location dots */}
          {locations.map(loc => (
            <div key={loc.name} className="absolute flex flex-col items-center"
              style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-primary map-dot"
                  style={{ animationDelay: loc.delay, boxShadow: '0 0 10px rgba(0,200,83,0.6)' }} />
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDelay: loc.delay }} />
              </div>
              <span className="mt-1 text-[8px] md:text-[10px] text-primary font-semibold whitespace-nowrap">{loc.name}</span>
            </div>
          ))}

          {/* Connection lines - SVG overlay */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
            <line x1="62" y1="43" x2="47" y2="25" stroke="#00C853" strokeWidth="0.3" strokeDasharray="1 2" />
            <line x1="62" y1="43" x2="68" y2="48" stroke="#00C853" strokeWidth="0.3" strokeDasharray="1 2" />
            <line x1="62" y1="43" x2="76" y2="38" stroke="#00C853" strokeWidth="0.3" strokeDasharray="1 2" />
            <line x1="62" y1="43" x2="18" y2="35" stroke="#00C853" strokeWidth="0.3" strokeDasharray="1 2" />
            <line x1="47" y1="25" x2="50" y2="26" stroke="#00C853" strokeWidth="0.3" strokeDasharray="1 2" />
            <line x1="76" y1="38" x2="76" y2="56" stroke="#00C853" strokeWidth="0.3" strokeDasharray="1 2" />
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center p-6 border border-dark-border relative group"
              style={{ background: 'linear-gradient(135deg, #0e1a0e 0%, #080d08 100%)' }}>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="font-bold text-4xl text-primary mb-1 text-glow">{stat.value}</div>
              <div className="font-semibold text-white text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}