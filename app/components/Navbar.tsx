'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  {
    label: 'About',
    dropdown: [
      { label: 'Festival History', href: '/about/history' },
      { label: 'Our Staff', href: '/about/staff' },
      { label: 'KASH', href: 'https://kashouston.org', external: true },
      { label: 'News & Blog', href: '/news' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  { label: 'Headliners', href: '/headliners' },
  { label: 'Performance Schedule', href: '/schedule' },
  {
    label: 'Vendors',
    dropdown: [
      { label: 'Food Vendors', href: '/vendors/food' },
      { label: 'Non-Food Vendors', href: '/vendors/non-food' },
    ],
  },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'FAQs', href: '/faqs' },
]

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="relative z-50">
      {/* Announcement Bar */}
      <div className="bg-linear-to-r from-[#FB4E6D] via-[#FB5C8A] to-[#8B6FFB] text-white text-center py-2 px-4 text-xs tracking-widest font-medium">
        Follow{' '}
        <a
          href="https://instagram.com/kfesthtx"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-white/80 transition-colors"
        >
          @kfesthtx
        </a>{' '}
        on Instagram, Facebook and TikTok for exclusive announcements and festival news!
      </div>

      {/* Main Navbar */}
      <nav ref={navRef} className="bg-white shadow-sm px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex items-stretch justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 py-4 group">
            {/* KASH Logo */}
            <Image
              src="/assets/logos/KASHLogo.png"
              alt="Korean American Society of Houston (KASH) logo"
              width={612}
              height={396}
              preload
              className="h-10 w-auto shrink-0"
            />

            <div className="w-px h-9 bg-[#1a1a1a]/10" />

            <div className="leading-tight">
              <span className="block font-['Cormorant_Garamond'] text-[#1a1a1a] text-xl font-semibold tracking-[0.15em] group-hover:text-[#FB4E6D] transition-colors">
                KOREAN FESTIVAL
              </span>
              <span className="block font-['Montserrat'] text-[#FB4E6D] text-[10px] font-semibold tracking-[0.4em] mt-0.5">
                HOUSTON
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-stretch list-none gap-0">
            {navItems.map((item) => (
              <li key={item.label} className="relative flex items-stretch">
                {item.dropdown ? (
                  <>
                    <button
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1.5 px-4 whitespace-nowrap text-[11px] font-semibold tracking-[0.1em] uppercase transition-all border-b-2 cursor-pointer
                        ${openDropdown === item.label
                          ? 'text-[#FB4E6D] border-[#FB4E6D]'
                          : 'text-[#1a1a1a]/70 border-transparent hover:text-[#FB4E6D] hover:border-[#FB4E6D]'
                        }`}
                    >
                      {item.label}
                      <svg
                        width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                        className={`transition-transform duration-200 opacity-60 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      >
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`absolute top-full left-0 bg-white border-t-2 border-[#FB4E6D] rounded-b-xl min-w-[200px] py-2 shadow-xl
                        transition-all duration-200 origin-top
                        ${openDropdown === item.label ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
                    >
                      {item.dropdown.map((sub, i) => (
                        <div key={sub.label}>
                          {/* Divider before external links */}
                          {sub.external && i > 0 && (
                            <div className="h-px bg-[#1a1a1a]/10 my-1.5 mx-4" />
                          )}
                          {sub.external ? (
                            <a
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase font-medium text-[#1a1a1a]/65 hover:text-[#FB4E6D] hover:bg-[#FB4E6D]/8 border-l-2 border-transparent hover:border-[#FB4E6D] transition-all"
                            >
                              {sub.label}
                              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="opacity-50">
                                <path d="M1 8L8 1M8 1H3M8 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                              </svg>
                            </a>
                          ) : (
                            <Link
                              href={sub.href}
                              className="block px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase font-medium text-[#1a1a1a]/65 hover:text-[#FB4E6D] hover:bg-[#FB4E6D]/8 border-l-2 border-transparent hover:border-[#FB4E6D] transition-all"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sub.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="flex items-center px-4 whitespace-nowrap text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1a1a]/70 border-b-2 border-transparent hover:text-[#FB4E6D] hover:border-[#FB4E6D] transition-all"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* CTA */}
            <li className="flex items-center ml-3">
              <Link
                href="/faqs"
                className="bg-[#FB4E6D] text-white text-[10.5px] font-bold tracking-[0.12em] uppercase whitespace-nowrap px-5 py-2.5 rounded-full hover:bg-[#e23d5c] transition-colors"
              >
                Plan Your Visit
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2 ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden border-t border-[#1a1a1a]/10 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#FB4E6D] transition-colors"
                  >
                    {item.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                      className={`transition-transform duration-200 opacity-60 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === item.label ? 'max-h-60' : 'max-h-0'}`}>
                    {item.dropdown.map((sub) => (
                      sub.external ? (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 pl-8 pr-4 py-2.5 text-[11px] tracking-widest uppercase text-[#1a1a1a]/50 hover:text-[#FB4E6D] transition-colors"
                        >
                          {sub.label}
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="opacity-50">
                            <path d="M1 8L8 1M8 1H3M8 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block pl-8 pr-4 py-2.5 text-[11px] tracking-widest uppercase text-[#1a1a1a]/50 hover:text-[#FB4E6D] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      )
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href!}
                  className="block px-4 py-3.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1a1a]/70 hover:text-[#FB4E6D] transition-colors border-t border-[#1a1a1a]/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-4 pt-3">
            <Link
              href="/faqs"
              className="block text-center bg-[#FB4E6D] text-white text-[10.5px] font-bold tracking-[0.12em] uppercase py-3 rounded-full hover:bg-[#e23d5c] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </nav>

      {/* Festival rainbow accent strip */}
      <div className="flex h-1">
        <span className="flex-1 bg-[#FB4E6D]" />
        <span className="flex-1 bg-[#FBBF24]" />
        <span className="flex-1 bg-[#10C9AC]" />
        <span className="flex-1 bg-[#1FAEDB]" />
        <span className="flex-1 bg-[#8B6FFB]" />
      </div>
    </header>
  )
}
