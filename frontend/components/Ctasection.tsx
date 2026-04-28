export default function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a130a 0%, #080d08 50%, #0a1a0a 100%)' }} />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #00C853 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="section-label mb-6">◈ Get Started</div>
        <h2 className="font-bold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          READY TO MOVE YOUR PROJECT
          <br />
          <span className="text-primary text-glow">FORWARD?</span>
        </h2>

        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Partner with ABC Technologies for end-to-end global trading, engineering consultancy, and technology delivery solutions tailored to your needs.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="mailto:info@abctech.com" className="btn-primary">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Contact Us</span>
          </a>
          <a href="#services" className="btn-outline">
            <span>View Services</span>
          </a>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-dark-border pt-10">
          {[
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.61 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              ),
              label: 'Phone',
              value: '+971 4 XXX XXXX',
            },
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: 'Email',
              value: 'info@abctech.com',
            },
            {
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: 'Location',
              value: 'Dubai, UAE',
            },
          ].map(item => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
              <div className="text-sm text-gray-300 font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}