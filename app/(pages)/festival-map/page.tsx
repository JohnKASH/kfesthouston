import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Festival Map · Korean Festival Houston',
  alternates: { canonical: '/festival-map' },
  description:
    'Find your way around Korean Festival Houston 2026 at Discovery Green — festival map, stage and vendor locations, parking, and directions.',
}

/**
 * The 2026 festival site map.
 *
 * This route exists because printed signage from previous years carries QR
 * codes pointing at kfesthouston.com/festival-map — keep the path stable even
 * when the artwork changes from year to year.
 *
 * To publish the map: drop the artwork in `public/assets/map/`, then replace
 * `null` below with its path and real pixel dimensions. Until then the page
 * shows a "map coming soon" card with the venue info underneath, so a scanned
 * QR code still lands somewhere useful instead of a 404.
 */
const festivalMap: { src: string; width: number; height: number; alt: string } | null = null
// Example once the artwork is ready:
// const festivalMap = {
//   src: '/assets/map/festival-map-2026.png',
//   width: 2000,
//   height: 1400,
//   alt: 'Map of the Korean Festival Houston 2026 grounds at Discovery Green',
// }

const quickFacts = [
  { emoji: '📍', label: 'Location', value: 'Discovery Green', accent: '#FB4E6D' },
  { emoji: '📅', label: 'Dates', value: 'Oct 10–11, 2026', accent: '#8B6FFB' },
  { emoji: '🕙', label: 'Saturday', value: '10 AM – 9 PM', accent: '#1FAEDB' },
  { emoji: '🕚', label: 'Sunday', value: '11 AM – 8 PM', accent: '#10C9AC' },
  { emoji: '🎟️', label: 'Admission', value: 'Free', accent: '#FBBF24' },
]

const findYourWay = [
  {
    emoji: '🎤',
    title: 'Performance Schedule',
    desc: 'See who’s on stage right now and what’s coming up next.',
    href: '/schedule',
    accent: '#8B6FFB',
  },
  {
    emoji: '🍴',
    title: 'Food Vendors',
    desc: 'Every food, dessert, and drink vendor at the festival this year.',
    href: '/vendors/food',
    accent: '#10C9AC',
  },
  {
    emoji: '🛍️',
    title: 'Merch & Craft Vendors',
    desc: 'Skincare, K-pop merch, crochet, jewelry, and more.',
    href: '/vendors/non-food',
    accent: '#FB4E6D',
  },
  {
    emoji: '❓',
    title: 'FAQs',
    desc: 'Parking, pets, payment, accessibility, and other visitor questions.',
    href: '/faqs',
    accent: '#1FAEDB',
  },
]

const VENUE_ADDRESS = '1500 McKinney St, Houston, TX 77010'
const DIRECTIONS_URL = 'https://maps.google.com/?q=Discovery+Green+Houston+TX'

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-kf-pastel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20 text-center">
          <span className="inline-block bg-[#8B6FFB] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            Find Your Way
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            🗺️ Festival Map
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto">
            Korean Festival Houston takes over Discovery Green in Downtown
            Houston on October 10 &amp; 11, 2026 — here’s where everything is.
          </p>
        </div>
      </section>

      {/* ── QUICK FACTS ──────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] border-y border-[#1a1a1a]/8 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickFacts.map((f) => (
              <div
                key={f.label}
                className="bg-white rounded-2xl border-t-4 shadow-sm px-4 py-5 text-center"
                style={{ borderTopColor: f.accent }}
              >
                <div className="text-2xl mb-2">{f.emoji}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/45">
                  {f.label}
                </div>
                <div className="font-semibold text-[#1a1a1a] text-[15px] mt-1">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SITE MAP ─────────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1a1a1a]">
              Festival Grounds
            </h2>
            <p className="text-[#1a1a1a]/55 text-sm tracking-wide mt-2">
              Stages, food, vendors, and K-Village across Discovery Green.
            </p>
          </div>

          {festivalMap ? (
            <>
              <div className="rounded-3xl overflow-hidden border border-[#1a1a1a]/8 shadow-sm bg-white">
                <Image
                  src={festivalMap.src}
                  alt={festivalMap.alt}
                  width={festivalMap.width}
                  height={festivalMap.height}
                  preload
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-6">
                <a
                  href={festivalMap.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#8B6FFB] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-[#7559e0] transition-colors"
                >
                  Open Full-Size Map
                </a>
                <p className="text-[#1a1a1a]/45 text-[13px] tracking-wide mt-3">
                  Tip: open the full-size map to pinch and zoom on your phone.
                </p>
              </div>
            </>
          ) : (
            <div className="rounded-3xl bg-white border border-[#1a1a1a]/8 shadow-sm px-8 py-12 text-center">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-3">
                The 2026 Map Is On Its Way
              </h3>
              <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide max-w-xl mx-auto">
                We’re still finalizing the layout for this year’s festival. The
                full map of stages, food, and vendor booths will be posted here
                before festival weekend — check back closer to October 10, or
                follow{' '}
                <a
                  href="https://instagram.com/kfesthtx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FB4E6D] font-semibold hover:underline"
                >
                  @kfesthtx
                </a>{' '}
                for the announcement.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── FIND YOUR WAY ────────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-16 md:py-20 border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#FBBF24] text-[#1a1a1a] text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
              At the Festival
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4">
              What You’re Looking For
            </h2>
            <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed tracking-wide">
              Already on the grounds? These are the pages worth having open on
              your phone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {findYourWay.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="flex items-start gap-4 bg-white rounded-2xl border-l-4 shadow-sm px-6 py-6 hover:shadow-md transition-shadow"
                style={{ borderLeftColor: c.accent }}
              >
                <span className="text-3xl leading-none">{c.emoji}</span>
                <div>
                  <div className="font-semibold text-[#1a1a1a] text-[16px]">{c.title} →</div>
                  <div className="text-[#1a1a1a]/55 text-sm mt-1 leading-relaxed tracking-wide">
                    {c.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GETTING HERE ─────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16 border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-2">
            Getting Here
          </h2>
          <p className="text-[#1a1a1a]/55 text-sm tracking-wide mb-7">
            Discovery Green · {VENUE_ADDRESS}
          </p>
          <div className="rounded-2xl overflow-hidden border border-[#1a1a1a]/8 shadow-sm">
            <iframe
              title="Map to Discovery Green, Houston"
              src="https://www.google.com/maps?q=Discovery+Green,+1500+McKinney+St,+Houston,+TX+77010&output=embed"
              className="w-full h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#1FAEDB] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-[#1896bd] transition-colors"
          >
            Get Directions
          </a>
          <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide mt-7 max-w-xl mx-auto">
            Discovery Green sits in the heart of Downtown Houston with several
            parking garages nearby, plus convenient rideshare drop-off and public
            transit. We recommend planning your route before festival weekend —
            see the{' '}
            <Link href="/faqs" className="text-[#1FAEDB] font-semibold hover:underline">
              FAQs
            </Link>{' '}
            for more on parking and getting around.
          </p>
        </div>
      </section>

      {/* ── HELP CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-linear-to-br from-[#8B6FFB] via-[#FB5C8A] to-[#FB4E6D] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-3xl mb-4">🙋</div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-4">
            Lost? Visit the Information Booth
          </h2>
          <p className="text-white/85 text-[15px] leading-relaxed tracking-wide max-w-xl mx-auto mb-8">
            Our volunteers at the Information Booth can point you toward stages,
            food, restrooms, and first aid — just ask. Can’t find us? Reach out
            and we’ll help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  )
}
