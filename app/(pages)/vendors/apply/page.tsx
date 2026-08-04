import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vendor Applications Closed · Korean Festival Houston',
  alternates: { canonical: '/vendors/apply' },
  description:
    'Vendor applications for Korean Festival Houston 2026 are now closed. See the confirmed food and non-food vendor lineup for October 10–11 at Discovery Green.',
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
            Applications Closed
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            🛍️ Vendor Application
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto">
            Vendor applications for Korean Festival Houston 2026 are now closed —
            our lineup for October 10–11 at Discovery Green is set.
          </p>
        </div>
      </section>

      {/* ── CLOSED NOTICE ────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl bg-linear-to-br from-[#10C9AC] to-[#1FAEDB] px-8 py-10 text-center shadow-sm">
            <div className="text-3xl mb-3">📋</div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-3">
              Vendor Applications Closed for 2026
            </h2>
            <p className="text-white/85 text-sm leading-relaxed tracking-wide max-w-xl mx-auto mb-7">
              Thank you to everyone who applied! Follow us for news on 2027
              applications, or reach out at{' '}
              <a href="mailto:info@kashouston.org" className="underline hover:text-white">
                info@kashouston.org
              </a>{' '}
              with any questions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/vendors/food"
                className="inline-block bg-white text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Food Vendors →
              </Link>
              <Link
                href="/vendors/non-food"
                className="inline-block bg-white/15 text-white text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-3.5 rounded-full border border-white/40 hover:bg-white/25 transition-colors"
              >
                Non-Food Vendors →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2026 PRICING (REFERENCE) ─────────────────────────────────────── */}
      <section className="bg-[#faf8f5] pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1a1a1a]">
              2026 Booth Rates
            </h2>
            <p className="text-[#1a1a1a]/55 text-sm tracking-wide mt-2">
              For reference only — 2027 rates will be announced with next year’s
              application.
            </p>
          </div>
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
    </>
  )
}
