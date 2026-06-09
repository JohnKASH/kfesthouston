import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#faf8f5] border-t border-[#1a1a1a]/8">
      {/* Festival rainbow accent strip */}
      <div className="flex h-1">
        <span className="flex-1 bg-[#FB4E6D]" />
        <span className="flex-1 bg-[#FBBF24]" />
        <span className="flex-1 bg-[#10C9AC]" />
        <span className="flex-1 bg-[#1FAEDB]" />
        <span className="flex-1 bg-[#8B6FFB]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-['Cormorant_Garamond'] text-[#1a1a1a] text-lg font-semibold tracking-[0.15em] mb-1">
              KOREAN FESTIVAL
            </div>
            <div className="text-[#FB4E6D] text-[10px] font-semibold tracking-[0.4em] font-['Montserrat'] mb-5">
              HOUSTON
            </div>
            <p className="text-[#1a1a1a]/50 text-xs leading-relaxed tracking-wide">
              Celebrating Korean culture in the heart of Houston since 2009.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { label: 'Instagram', href: 'https://instagram.com/kfesthtx', hover: 'hover:text-[#FB4E6D]' },
                { label: 'Facebook', href: 'https://facebook.com/kfesthouston', hover: 'hover:text-[#1FAEDB]' },
                { label: 'TikTok', href: 'https://tiktok.com/@kfesthtx', hover: 'hover:text-[#8B6FFB]' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#1a1a1a]/40 text-[10px] tracking-widest uppercase transition-colors ${s.hover}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Festival */}
          <div>
            <h4 className="text-[#FB4E6D] text-[10px] font-semibold tracking-[0.3em] uppercase mb-5 font-['Montserrat']">
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
                  <Link href={l.href} className="text-[#1a1a1a]/55 hover:text-[#FB4E6D] text-xs tracking-wide transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[#10C9AC] text-[10px] font-semibold tracking-[0.3em] uppercase mb-5 font-['Montserrat']">
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
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a]/55 hover:text-[#10C9AC] text-xs tracking-wide transition-colors">
                      {l.label} ↗
                    </a>
                  ) : (
                    <Link href={l.href} className="text-[#1a1a1a]/55 hover:text-[#10C9AC] text-xs tracking-wide transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-[#8B6FFB] text-[10px] font-semibold tracking-[0.3em] uppercase mb-5 font-['Montserrat']">
              Event Info
            </h4>
            <div className="space-y-4 text-xs text-[#1a1a1a]/55 leading-relaxed tracking-wide">
              <div>
                <div className="text-[#1a1a1a] font-semibold mb-1">October 10–11, 2026</div>
                <div>Sat 10am – 9pm</div>
                <div>Sun 11am – 8pm</div>
              </div>
              <div>
                <div className="text-[#1a1a1a] font-semibold mb-1">Discovery Green</div>
                <div>1500 McKinney St</div>
                <div>Houston, TX 77010</div>
              </div>
              <div className="pt-1">
                <span className="inline-block bg-[#10C9AC]/15 border border-[#10C9AC]/40 text-[#048a6e] text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  Free Admission
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a]/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#1a1a1a]/35 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Korean American Society of Houston. All rights reserved.
          </p>
          <p className="text-[#1a1a1a]/35 text-[11px] tracking-wide">
            A Korean American Society of Houston Production
          </p>
        </div>
      </div>
    </footer>
  )
}
