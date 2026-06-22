import type { Metadata } from 'next'
import VendorApplyForm from './VendorApplyForm'

export const metadata: Metadata = {
  title: 'Vendor Application · Korean Festival Houston',
  alternates: { canonical: '/vendors/apply' },
  description:
    'Apply to be a vendor at Korean Festival Houston 2026 — October 10–11 at Discovery Green. Food, merchandise, non-profit, and corporate vendor spots available.',
}

const pricing = [
  { type: 'Food / Dessert', amount: '$750 – $1,000', note: '+ 25% revenue share · Non-refundable', accent: '#FB4E6D' },
  { type: 'Merchandise', amount: '$1,500 – $2,000', note: '1 or 2 days · Non-refundable', accent: '#8B6FFB' },
  { type: 'Non-Profit', amount: '$500 – $750', note: '501(c)(3) required · Non-refundable', accent: '#10C9AC' },
  { type: 'Corporate / Promo', amount: 'Contact Us', note: 'sponsors@kashouston.org', accent: '#1FAEDB' },
]

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-kf-pastel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <span className="inline-block bg-[#10C9AC] text-[#0a4f40] text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            Limited Spots Available
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            🛍️ Vendor Application
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto">
            We’re looking for vendors to represent Korean culture at Korean Festival
            Houston 2026 — October 10–11 at Discovery Green. Apply below!
          </p>
        </div>
      </section>

      {/* ── PRICING STRIP ────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] pt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pricing.map((p) => (
              <div
                key={p.type}
                className="rounded-2xl px-5 py-6 text-center text-white shadow-sm"
                style={{ backgroundColor: p.accent }}
              >
                <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/80 mb-1.5">
                  {p.type}
                </div>
                <div className="font-['Cormorant_Garamond'] text-2xl font-bold leading-tight">
                  {p.amount}
                </div>
                <div className="text-[11px] text-white/75 mt-2 leading-snug">{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-6">
          <VendorApplyForm />
        </div>
      </section>
    </>
  )
}
