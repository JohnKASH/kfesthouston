import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Food Vendors · Korean Festival Houston',
  alternates: { canonical: '/vendors/food' },
  description:
    'Authentic Korean food and drinks at Korean Festival Houston 2026 — from Korean BBQ and tteokbokki to bingsu and boba. Vendor applications opening soon.',
}

const foodCategories = [
  { emoji: '🥩', name: 'Korean BBQ', desc: 'Galbi, bulgogi & more', accent: '#FB4E6D' },
  { emoji: '🍡', name: 'Tteokbokki', desc: 'Spicy rice cakes', accent: '#FBBF24' },
  { emoji: '🍜', name: 'Jjajangmyeon', desc: 'Black bean noodles', accent: '#10C9AC' },
  { emoji: '🍦', name: 'Bingsu', desc: 'Korean shaved ice', accent: '#8B6FFB' },
  { emoji: '🧋', name: 'Boba & Drinks', desc: 'Bubble tea & more', accent: '#1FAEDB' },
  { emoji: '🥘', name: 'Bibimbap', desc: 'Mixed rice bowls', accent: '#FB4E6D' },
  { emoji: '🍗', name: 'Korean Fried Chicken', desc: 'Crispy & saucy', accent: '#FBBF24' },
  { emoji: '🥟', name: 'Mandu', desc: 'Korean dumplings', accent: '#10C9AC' },
]

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-kf-pastel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <span className="inline-block bg-[#10C9AC] text-[#0a4f40] text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            Taste of Korea
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            🍴 Food Vendors
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto">
            Authentic Korean food and drinks from local and global vendors — a
            full weekend of flavor in the heart of Downtown Houston.
          </p>
        </div>
      </section>

      {/* ── APPLY BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl bg-linear-to-br from-[#10C9AC] to-[#1FAEDB] px-8 py-10 text-center shadow-sm">
            <div className="text-3xl mb-3">🪧</div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-3">
              Vendor Applications Opening Soon!
            </h2>
            <p className="text-white/85 text-sm leading-relaxed tracking-wide max-w-xl mx-auto mb-7">
              We’re accepting interest from food vendors for KFest 2026 — join us
              at Discovery Green on October 10–11 and share your business with tens
              of thousands of festival-goers!
            </p>
            <Link
              href="/vendors/apply"
              className="inline-block bg-white text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Apply to Vend →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOD GRID ────────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1a1a1a]">
              What to Expect at the Food Court
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {foodCategories.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl border-t-4 shadow-sm px-5 py-6 text-center"
                style={{ borderTopColor: c.accent }}
              >
                <div className="text-4xl mb-3">{c.emoji}</div>
                <div className="font-semibold text-[#1a1a1a] text-[15px] leading-tight">{c.name}</div>
                <div className="text-[#1a1a1a]/50 text-sm mt-1">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JINRO BEVERAGE SPONSOR ───────────────────────────────────────── */}
      <section className="bg-[#faf8f5] pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 rounded-2xl border-2 border-[#FBBF24]/30 bg-linear-to-br from-[#FBBF24]/12 to-[#10C9AC]/8 px-6 py-6">
            <div className="relative h-12 w-32 shrink-0">
              <Image src="/assets/sponsors/jinro.png" alt="JINRO" fill sizes="128px" className="object-contain" />
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-[#1a1a1a] mb-1">Official Beverage Sponsor: JINRO</div>
              <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide">
                The world’s #1 selling spirit brand — enjoy JINRO soju at the
                festival’s official beverage stations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CROSS-LINK ───────────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-12 border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#1a1a1a]/60 text-sm tracking-wide">
            Looking for crafts, beauty, and cultural goods?{' '}
            <Link href="/vendors/non-food" className="text-[#8B6FFB] font-semibold hover:underline">
              Explore Non-Food Vendors →
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
