import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Non-Food Vendors · Korean Festival Houston',
  alternates: { canonical: '/vendors/non-food' },
  description:
    'Korean crafts, beauty, fashion, and cultural goods at Korean Festival Houston 2026 — from hanbok and K-beauty to art and collectibles. Vendor applications opening soon.',
}

const categories = [
  { emoji: '👘', name: 'Hanbok & Fashion', desc: 'Traditional Korean dress', accent: '#FB4E6D' },
  { emoji: '🎨', name: 'Fine Art & Prints', desc: 'Korean-inspired artwork', accent: '#FBBF24' },
  { emoji: '💄', name: 'K-Beauty', desc: 'Skincare & cosmetics', accent: '#10C9AC' },
  { emoji: '📿', name: 'Jewelry & Accessories', desc: 'Handmade & boutique', accent: '#8B6FFB' },
  { emoji: '🧸', name: 'Gifts & Collectibles', desc: 'K-pop merch & novelties', accent: '#1FAEDB' },
  { emoji: '📚', name: 'Books & Media', desc: 'Korean culture resources', accent: '#FB4E6D' },
]

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-kf-pastel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <span className="inline-block bg-[#8B6FFB] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            Shop & Explore
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            🛍️ Non-Food Vendors
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto">
            Korean crafts, beauty, fashion, and cultural goods from local artisans
            and international brands.
          </p>
        </div>
      </section>

      {/* ── APPLY BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl bg-linear-to-br from-[#8B6FFB] to-[#FB4E6D] px-8 py-10 text-center shadow-sm">
            <div className="text-3xl mb-3">🪧</div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-3">
              Vendor Applications Opening Soon!
            </h2>
            <p className="text-white/85 text-sm leading-relaxed tracking-wide max-w-xl mx-auto mb-7">
              We’re accepting interest from non-food vendors for KFest 2026 — join
              us at Discovery Green on October 10–11 and share your work with tens
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

      {/* ── CATEGORY GRID ────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1a1a1a]">
              Shop & Explore
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((c) => (
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

      {/* ── CROSS-LINK ───────────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-12 border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#1a1a1a]/60 text-sm tracking-wide">
            Hungry? Check out the lineup of{' '}
            <Link href="/vendors/food" className="text-[#10C9AC] font-semibold hover:underline">
              Korean Food Vendors →
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
