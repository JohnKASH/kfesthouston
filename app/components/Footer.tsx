import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#c9a96e]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-['Cormorant_Garamond'] text-white text-lg font-semibold tracking-[0.15em] mb-1">
              KOREAN FESTIVAL
            </div>
            <div className="text-[#c9a96e] text-[10px] font-medium tracking-[0.4em] font-['Montserrat'] mb-5">
              HOUSTON
            </div>
            <p className="text-white/40 text-xs leading-relaxed tracking-wide">
              Celebrating Korean culture in the heart of Houston since 2009.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Facebook', 'TikTok'].map((s) => (
                <a key={s} href="#" className="text-white/30 hover:text-[#c9a96e] text-[10px] tracking-widest uppercase transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Festival */}
          <div>
            <h4 className="text-[#c9a96e] text-[10px] font-semibold tracking-[0.3em] uppercase mb-5 font-['Montserrat']">
              Festival
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Headliners', href: '/headliners' },
                { label: 'Performance Schedule', href: '/schedule' },
                { label: 'Food Vendors', href: '/vendors/food' },
                { label: 'Non-Food Vendors', href: '/vendors/non-food' },
                { label: 'Sponsors', href: '/sponsors' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-xs tracking-wide transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[#c9a96e] text-[10px] font-semibold tracking-[0.3em] uppercase mb-5 font-['Montserrat']">
              About
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Festival History', href: '/about/history' },
                { label: 'Our Staff', href: '/about/staff' },
                { label: 'KASH', href: 'https://kashouston.org', external: true },
                { label: 'News & Blog', href: '/news' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'FAQs', href: '/faqs' },
              ].map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-xs tracking-wide transition-colors">
                      {l.label} ↗
                    </a>
                  ) : (
                    <Link href={l.href} className="text-white/50 hover:text-white text-xs tracking-wide transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-[#c9a96e] text-[10px] font-semibold tracking-[0.3em] uppercase mb-5 font-['Montserrat']">
              Event Info
            </h4>
            <div className="space-y-4 text-xs text-white/50 leading-relaxed tracking-wide">
              <div>
                <div className="text-white/80 font-medium mb-1">October 10–11, 2026</div>
                <div>Sat 10am – 9pm</div>
                <div>Sun 11am – 8pm</div>
              </div>
              <div>
                <div className="text-white/80 font-medium mb-1">Discovery Green</div>
                <div>1500 McKinney St</div>
                <div>Houston, TX 77010</div>
              </div>
              <div className="pt-1">
                <span className="inline-block bg-[#c9a96e]/15 border border-[#c9a96e]/30 text-[#c9a96e] text-[10px] tracking-widest uppercase px-3 py-1.5">
                  Free Admission
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Korean American Society of Houston. All rights reserved.
          </p>
          <p className="text-white/25 text-[11px] tracking-wide">
            A Korean American Society of Houston Production
          </p>
        </div>
      </div>
    </footer>
  )
}
