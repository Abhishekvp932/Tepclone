export default function EngineeringSection() {
  const commitments = [
    { title: 'Independent & Engineering-Led', desc: 'We bring deep technical expertise to every project, maintaining independence to provide unbiased solutions.' },
    { title: 'Results Focused', desc: 'Every decision we make is tied to measurable outcomes and concrete deliverables for our clients.' },
    { title: 'Client-Centered', desc: 'Our clients sit at the heart of everything—our processes and team are built around your success.' },
    { title: 'Commercially Conscious', desc: 'We balance engineering excellence with commercial realities, delivering value without compromise.' },
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Philosophy */}
          <div>
            <div className="section-label mb-4">◈ Our Approach</div>
            <h2 className="section-title mb-6">
              ENGINEERING-FIRST
              <br />
              <span className="text-primary">PHILOSOPHY</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              At ABC Technologies, engineering is not just what we do — it&apos;s how we think. We approach every challenge with a first-principles mindset, combining technical depth with strategic vision to deliver solutions that stand the test of time and scale.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              From initial consultation through final delivery, our engineering-first philosophy ensures that quality, safety, and innovation remain non-negotiable at every stage of project execution.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🔬', label: 'Independent & Engineering-Led' },
                { icon: '🎯', label: 'Results Focused' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-px bg-primary" />
                  <span>{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Commitments */}
          <div>
            <div className="section-label mb-4">◈ Our Promise</div>
            <h2 className="section-title mb-8">
              OUR <span className="text-primary">COMMITMENT</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commitments.map((item, i) => (
                <div key={item.title}
                  className="group p-5 border border-dark-border hover:border-primary/50 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #0e1a0e 0%, #080d08 100%)' }}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1 flex-shrink-0 group-hover:shadow-md transition-shadow"
                      style={{ boxShadow: 'none' }} />
                    <h4 className="font-semibold text-white text-sm group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed pl-5 group-hover:text-gray-400 transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}