import Image from 'next/image'
import Link from 'next/link'
import Lanterns from '@/app/components/Lanterns'

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ number, label, accent }: { number: string; label: string; accent: string }) {
  return (
    <div
      className="text-center px-6 py-8 bg-white rounded-2xl border-t-4 shadow-sm"
      style={{ borderTopColor: accent }}
    >
      <div
        className="font-['Cormorant_Garamond'] text-5xl font-semibold leading-none mb-2"
        style={{ color: accent }}
      >
        {number}
      </div>
      <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#1a1a1a]/50 font-['Montserrat']">
        {label}
      </div>
    </div>
  )
}

// ─── Section Label ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 h-px bg-[#c9a96e]" />
      <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
        {children}
      </span>
    </div>
  )
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  description,
  href,
  accent,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  accent: string
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl border border-[#1a1a1a]/8 border-t-4 p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
      style={{ borderTopColor: accent }}
    >
      <div
        className="mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ color: accent }}
      >
        {icon}
      </div>
      <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1a1a1a] mb-3">
        {title}
      </h3>
      <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide mb-5">
        {description}
      </p>
      <span
        className="text-[10px] font-semibold tracking-[0.2em] uppercase flex items-center gap-2"
        style={{ color: accent }}
      >
        Explore
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="group-hover:translate-x-1 transition-transform">
          <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1a1a1a]">
        {/* Swinging lanterns hanging from the top of the hero */}
        <Lanterns />

        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/HomepageImages/hero.jpg"
            alt="Korean Festival Houston performer dancing in hanbok"
            fill
            preload
            className="object-cover object-[50%_30%] opacity-95"
          />
          {/* Gradient overlay — keeps left side readable, lets color show on the right */}
          <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a]/85 via-[#2E4057]/55 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full">
          <div className="max-w-2xl">
            <SectionLabel>17th Annual · Free Admission</SectionLabel>

            <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.95] tracking-tight mb-6">
              KOREAN
              <br />
              <em className="not-italic text-[#c9a96e]">FESTIVAL</em>
              <br />
              HOUSTON
            </h1>

            <div className="w-16 h-px bg-[#c9a96e] mb-8" />

            <div className="space-y-2 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                <span className="text-white/80 text-sm tracking-widest uppercase font-['Montserrat'] font-medium">
                  Saturday, Oct 10, 2026 · 10am – 9pm
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                <span className="text-white/80 text-sm tracking-widest uppercase font-['Montserrat'] font-medium">
                  Sunday, Oct 11, 2026 · 11am – 8pm
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="text-white/50 text-sm tracking-widest uppercase font-['Montserrat']">
                  Discovery Green · 1500 McKinney, Houston TX
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/schedule"
                className="bg-[#c9a96e] text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#e2c080] transition-colors"
              >
                View Schedule
              </Link>
              <Link
                href="/about/history"
                className="border border-white/30 text-white text-[11px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all"
              >
                About The Festival
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[9px] tracking-[0.4em] uppercase font-['Montserrat']">Scroll</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────────────── */}
      <section className="bg-kf-pastel border-y border-[#1a1a1a]/8 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard number="85K+" label="Visitors Each Year" accent="#FB4E6D" />
            <StatCard number="17" label="Years Running" accent="#8B6FFB" />
            <StatCard number="2009" label="Est. in Houston" accent="#1FAEDB" />
            <StatCard number="Free" label="Admission Always" accent="#10C9AC" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Experience Korea in Houston</SectionLabel>
              <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-[#1a1a1a] leading-tight mb-6">
                One Weekend.
                <br />
                <span className="text-[#c9a96e]">85,000 Visitors.</span>
              </h2>
              <div className="w-12 h-px bg-[#c9a96e] mb-8" />
              <div className="space-y-5 text-[#1a1a1a]/65 text-[15px] leading-relaxed tracking-wide">
                <p>
                  Established in 2009, the Korean Festival Houston has become one of the
                  largest free cultural events hosted at Discovery Green in Downtown
                  Houston, drawing tens of thousands of visitors to its cultural
                  presentation and culinary experience.
                </p>
                <p>
                  Celebrating its seventeenth anniversary this October 2026, the festival
                  serves over 65,000 visitors in a single weekend. It is an honor to
                  partner with dozens of both global and local sponsors to bring a truly
                  exhilarating and spectacular experience to the heart of Houston.
                </p>
              </div>
              <Link
                href="/about/history"
                className="inline-flex items-center gap-3 mt-8 text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9a96e] hover:gap-5 transition-all"
              >
                Our Story
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M1 6h16M11 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-3/4 bg-[#1a1a1a]/8 overflow-hidden">
                <Image
                  src="/assets/HomepageImages/Drummers.png"
                  alt="Korean Festival traditional drummers performing"
                  width={2500}
                  height={1667}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-3/4 bg-[#1a1a1a]/8 mt-10 overflow-hidden">
                <Image
                  src="/assets/HomepageImages/Singer.png"
                  alt="Korean Festival singer performing on stage"
                  width={2500}
                  height={1667}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <SectionLabel>What to Expect</SectionLabel>
            <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#1a1a1a]">
              Festival Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              href="/headliners"
              accent="#FB4E6D"
              title="Headliners"
              description="World-class K-pop and Korean traditional performers take the main stage for unforgettable live performances."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                </svg>
              }
            />
            <FeatureCard
              href="/schedule"
              accent="#8B6FFB"
              title="Performance Schedule"
              description="Two full days of cultural performances, dance showcases, and traditional arts on multiple stages."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              }
            />
            <FeatureCard
              href="/vendors/food"
              accent="#10C9AC"
              title="Food Vendors"
              description="Authentic Korean street food and cuisine — from tteokbokki and bibimbap to Korean BBQ and beyond."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              }
            />
            <FeatureCard
              href="/vendors/non-food"
              accent="#1FAEDB"
              title="Non-Food Vendors"
              description="Korean crafts, beauty, fashion, and cultural goods from local artisans and international brands."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
                </svg>
              }
            />
            <FeatureCard
              href="/sponsors"
              accent="#FB4E6D"
              title="Our Sponsors"
              description="Proudly supported by Kroger and dozens of global and local partners who make this free event possible."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              }
            />
            <FeatureCard
              href="/faqs"
              accent="#8B6FFB"
              title="FAQs"
              description="Everything you need to know about parking, accessibility, sensory friendly hours, and getting the most out of your visit."
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ── SPONSOR BAND ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-y border-[#1a1a1a]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#1a1a1a]/35 font-['Montserrat'] mb-8">
            Proudly Presented by
          </p>
          {/* Kroger — presenting sponsor */}
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <Image
              src="/assets/HomepageImages/Kroger.png"
              alt="Kroger — Texas Proud for Over 70 Years"
              width={800}
              height={77}
              className="object-contain"
            />
          </div>
          <div className="mt-10">
            <Link
              href="/sponsors"
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] hover:text-[#1a1a1a] transition-colors border-b border-[#c9a96e]/40 pb-0.5"
            >
              View All Sponsors
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section className="bg-linear-to-br from-[#FB4E6D] via-[#FB5C8A] to-[#8B6FFB] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="inline-block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/90 font-['Montserrat'] mb-4">
            ✨ Stay in the Loop
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white mb-4">
            Don&apos;t Miss an Update
          </h2>
          <p className="text-white/75 text-sm leading-relaxed tracking-wide mb-10">
            Sign up to receive announcements, headliner reveals, vendor spotlights,
            and festival news directly in your inbox.
          </p>

          {/* Newsletter form — wire up to your preferred email service (Resend, Mailchimp, etc.) */}
          {/* <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/35 text-sm tracking-wide px-5 py-3.5 outline-none focus:border-[#c9a96e] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#c9a96e] text-[#1a1a1a] text-[10.5px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-[#e2c080] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form> */}
        </div>
      </section>
    </>
  )
}
