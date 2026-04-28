import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border">
      <div className="absolute inset-0" style={{ background: '#050a05' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18" stroke="#00C853" strokeWidth="1.5" />
                  <path d="M10 20 C10 14 14 10 20 10 C26 10 30 14 30 20" stroke="#00C853" strokeWidth="1.5" fill="none" />
                  <path d="M10 20 C10 26 14 30 20 30 C26 30 30 26 30 20" stroke="#00C853" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                  <circle cx="20" cy="20" r="3" fill="#00C853" />
                  <line x1="10" y1="20" x2="30" y2="20" stroke="#00C853" strokeWidth="0.8" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-none">ABC</div>
                <div className="font-display text-primary text-[8px] tracking-widest uppercase">Technologies</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Your single-window partner for global trading, engineering consultation, and technology delivery solutions.
            </p>
            <div className="flex gap-3">
              {['linkedin', 'twitter', 'facebook'].map(social => (
                <a key={social} href="#" className="w-8 h-8 border border-dark-border hover:border-primary flex items-center justify-center text-gray-500 hover:text-primary transition-all text-xs">
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Sectors', href: '#sectors' },
                { label: 'Contact', href: '#contact' },
                { label: 'Admin Panel', href: '/admin/login' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-3 h-px bg-dark-border group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Global Trading & Export',
                'Technical Consultation',
                'Engineering Delivery',
                'Technology Delivery',
                'Gas Duct Delivery',
              ].map(service => (
                <li key={service}>
                  <a href="#services" className="text-gray-500 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-3 h-px bg-dark-border group-hover:bg-primary transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-500 text-sm">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.61 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-gray-500 text-sm">+971 4 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-gray-500 text-sm">info@abctech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} ABC Technologies LLC. All rights reserved.</p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Use'].map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-primary text-xs transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}