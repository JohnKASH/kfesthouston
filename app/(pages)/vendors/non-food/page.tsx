import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Non-Food Vendors · Korean Festival Houston',
  alternates: { canonical: '/vendors/non-food' },
  description:
    'Korean crafts, beauty, fashion, and cultural goods at Korean Festival Houston 2026 — from hanbok and K-beauty to art and collectibles. Vendor applications opening soon.',
}

const typeStyles: Record<string, { bg: string; text: string }> = {
  Merch: { bg: '#8B6FFB', text: '#ffffff' },
  Promo: { bg: '#FBBF24', text: '#5a3d00' },
}

const nonFoodVendors = [
  {
    name: 'AHAcraft',
    type: 'Merch',
    items: [
      'Handcrafted crochet and knitted designs — keychains, hair clips, bags, hats, and art toys',
      'A dedicated collection inspired by Korean culture — hanbok, Korean foods, and K-pop',
    ],
  },
  {
    name: 'Blooming Cosmetics',
    type: 'Merch',
    items: [
      'Korean skincare from Anua, Beauty of Joseon, Skin 1004, Medicube & more — $2–$50',
    ],
  },
  {
    name: 'iKoree',
    type: 'Merch',
    items: [
      'Korean games & knick knacks — $3–$25',
      'Korean textbooks — $25',
      'Hair accessories — $15–$45',
    ],
  },
  {
    name: 'Kawaii Shopaholic',
    type: 'Merch',
    items: [
      'Plushies $20–$30 · jewelry $15–$20 · clothing $30',
      'Accessories $5–$10 · toys $10–$20 · hats $15–$20',
      'Samurai $15–$80 · parasols $20 · keychains $8–$25',
    ],
  },
  {
    name: 'Mya Accessories',
    type: 'Merch',
    items: [
      'Stationery — $4–$20',
      'Hats & umbrellas — $15–$25',
      'Cups, tumblers & water bottles — $15–$35',
      'Plush, bags & tote bags — $15–$50',
    ],
  },
  {
    name: 'Riman',
    type: 'Merch',
    items: ['Korean skincare'],
  },
  {
    name: "The T's Creations",
    type: 'Merch',
    items: [
      'Crochet flowers, keychains, dolls, coasters, slates & hair clips — $5–$60',
    ],
  },
  {
    name: 'The YCM Group, LLC',
    type: 'Merch',
    items: [
      'Lighting toys — $15–$25',
      'Anime t-shirts, figurines, keychains, handbags, purses & crystal statues — $10–$35',
      'Jewelry — necklaces, crystal bracelets, rings, earrings — $10–$20',
      'Dolls $25 · bubble wands $15–$20',
      'Japanese-pattern umbrellas & hand fans — $20–$25',
      'Animation wall cloths — $30',
      'Press-on nails — $10–$20',
      'Asian-style lucky cats & lucky charms — $10–$15',
    ],
  },
  {
    name: 'Violet Kpop',
    type: 'Merch',
    items: ['K-pop merch, stationery & character goods — $2–$30'],
  },
  {
    name: 'Kroger',
    type: 'Promo',
    items: ['Title Sponsor'],
  },
]

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

      {/* ── APPLICATIONS CLOSED BANNER ───────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl bg-linear-to-br from-[#8B6FFB] to-[#FB4E6D] px-8 py-10 text-center shadow-sm">
            <div className="text-3xl mb-3">📋</div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-3">
              Vendor Applications Closed for 2026
            </h2>
            <p className="text-white/85 text-sm leading-relaxed tracking-wide max-w-xl mx-auto">
              Thank you to everyone who applied! Our non-food vendor lineup for
              KFest 2026 is now set. Follow us for news on 2027 applications, or
              reach out at{' '}
              <a href="mailto:info@kashouston.org" className="underline hover:text-white">
                info@kashouston.org
              </a>{' '}
              with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* ── VENDOR LINEUP ────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1a1a1a]">
              2026 Non-Food Vendor Lineup
            </h2>
            <p className="text-[#1a1a1a]/55 text-sm tracking-wide mt-2">
              Confirmed so far — more vendors announced as they’re added.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 items-start">
            {nonFoodVendors.map((v) => {
              const style = typeStyles[v.type]
              return (
                <div
                  key={v.name}
                  className="bg-white rounded-2xl shadow-sm px-6 py-5 border border-[#1a1a1a]/6"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-[#1a1a1a] text-[17px] leading-tight">
                      {v.name}
                    </h3>
                    <span
                      className="shrink-0 text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      {v.type}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {v.items.map((item) => (
                      <li
                        key={item}
                        className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-[#8B6FFB]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
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
