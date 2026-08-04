import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQs · Korean Festival Houston',
  alternates: { canonical: '/faqs' },
  description:
    'Everything you need to plan your visit to Korean Festival Houston 2026 — dates, hours, parking, admission, accessibility, and how to get in touch.',
}

// ─── Quick facts ──────────────────────────────────────────────────────────────
const quickFacts = [
  { emoji: '📍', label: 'Location', value: 'Discovery Green', accent: '#FB4E6D' },
  { emoji: '📅', label: 'Dates', value: 'Oct 10–11, 2026', accent: '#8B6FFB' },
  { emoji: '🕙', label: 'Saturday', value: '10 AM – 9 PM', accent: '#1FAEDB' },
  { emoji: '🕚', label: 'Sunday', value: '11 AM – 8 PM', accent: '#10C9AC' },
  { emoji: '🎟️', label: 'Admission', value: 'Free', accent: '#FBBF24' },
]

// ─── FAQ data ─────────────────────────────────────────────────────────────────
type Faq = { q: string; a: ReactNode }
type Category = { label: string; accent: string; text: string; items: Faq[] }

const categories: Category[] = [
  {
    label: 'General',
    accent: '#FBBF24',
    text: '#1a1a1a',
    items: [
      {
        q: 'Do I need to purchase a ticket to enter the festival?',
        a: 'Nope — entry is completely free and open to the public. No ticket required!',
      },
      {
        q: 'Where will the Korean Festival be held?',
        a: 'KFest Houston returns to Discovery Green — 1500 McKinney St, Houston, TX 77010 — in the heart of Downtown Houston, for our first-ever TWO-DAY festival on October 10 & 11, 2026!',
      },
      {
        q: 'What time does the festival begin?',
        a: 'Saturday, October 10: 10 AM – 9 PM. Sunday, October 11: 11 AM – 8 PM.',
      },
      {
        q: 'Will the festival be cancelled if it rains?',
        a: 'Houston weather can be unpredictable! If anything changes regarding the festival schedule, we’ll notify everyone via our social media and website. Be sure to follow @kfesthtx before heading out.',
      },
    ],
  },
  {
    label: 'Planning Your Visit',
    accent: '#10C9AC',
    text: '#0a4f40',
    items: [
      {
        q: 'Is there parking nearby?',
        a: 'Discovery Green sits in Downtown Houston with several parking garages nearby, and rideshare drop-off and public transit are convenient options. We recommend planning your route ahead of festival weekend.',
      },
      {
        q: 'I’m coming from out of town — are there special hotel rates?',
        a: 'We highly recommend contacting the Hilton Americas-Houston for rates during festival weekend.',
      },
      {
        q: 'Is the Korean Festival kid-friendly?',
        a: 'Absolutely — yes! There’s something for all ages, with family-friendly activities throughout the festival.',
      },
      {
        q: 'Is the Korean Festival pet-friendly?',
        a: 'Yes! Discovery Green is a pet-friendly park in Downtown Houston. Leashed pets are welcome!',
      },
    ],
  },
  {
    label: 'Food & Payment',
    accent: '#FB4E6D',
    text: '#ffffff',
    items: [
      {
        q: 'Will vendors accept cards and cash?',
        a: 'Yes! Our vendors will be accepting both cash and cards for your convenience.',
      },
    ],
  },
  {
    label: 'Sponsorship & Partnerships',
    accent: '#1FAEDB',
    text: '#ffffff',
    items: [
      {
        q: 'My company would like to become a sponsor — who do I contact?',
        a: (
          <>
            If you’re interested in becoming a sponsor, please send an inquiry to{' '}
            <a
              href="mailto:sponsors@kashouston.org?subject=Korean%20Festival%20Houston%20Sponsorship%20Inquiry"
              className="text-[#1FAEDB] font-semibold hover:underline"
            >
              sponsors@kashouston.org
            </a>{' '}
            and our team will be in touch.
          </>
        ),
      },
    ],
  },
]

type Contact = {
  label: string
  accent: string
  email?: string
  href?: string
  value?: string
}

const contacts: Contact[] = [
  { label: 'General Inquiries', email: 'info@kashouston.org', accent: '#FB4E6D' },
  { label: 'Sponsorship', email: 'sponsors@kashouston.org', accent: '#FBBF24' },
  { label: 'Performances & Stage', email: 'stage@kashouston.org', accent: '#8B6FFB' },
  { label: 'Scholarship & Volunteers', email: 'John@kashouston.org', accent: '#1FAEDB' },
  { label: 'Vendor Applications', href: '/vendors/apply', value: 'Closed for 2026 →', accent: '#10C9AC' },
]

// ─── Components ───────────────────────────────────────────────────────────────
function FaqItem({ item }: { item: Faq }) {
  return (
    <details className="group bg-white rounded-xl border border-[#1a1a1a]/8 overflow-hidden">
      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-[#1a1a1a] text-[15px] hover:bg-[#1a1a1a]/[0.02] [&::-webkit-details-marker]:hidden">
        <span>{item.q}</span>
        <span className="text-xl text-[#FB4E6D] shrink-0 transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-5 pb-4 pt-3 border-t border-[#1a1a1a]/5 text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide">
        {item.a}
      </div>
    </details>
  )
}

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-kf-pastel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <span className="inline-block bg-[#FB4E6D] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            Need to Know
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-xl mx-auto">
            Everything you need to plan your visit to K-Fest 2026.
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
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1a1a1a]/45 mb-1">
                  {f.label}
                </div>
                <div className="font-semibold text-[15px]" style={{ color: f.accent }}>
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ CATEGORIES ───────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              <span
                className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: cat.accent, color: cat.text }}
              >
                {cat.label}
              </span>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <FaqItem key={item.q} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATION / MAP ───────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-16 border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-2">
            📍 Find Us at Discovery Green
          </h2>
          <p className="text-[#1a1a1a]/55 text-sm tracking-wide mb-8">
            1500 McKinney St, Houston, TX 77010
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
            href="https://maps.google.com/?q=Discovery+Green+Houston+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#1FAEDB] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-[#1896bd] transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ─────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16 border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1a1a1a] text-center mb-3">
            Still Have Questions?
          </h2>
          <p className="text-[#1a1a1a]/55 text-sm tracking-wide text-center mb-10">
            Reach out to the right team and we’ll get back to you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="bg-white rounded-2xl border-t-4 shadow-sm px-5 py-6 text-center"
                style={{ borderTopColor: c.accent }}
              >
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1a1a1a]/45 mb-2">
                  {c.label}
                </div>
                {c.href ? (
                  <Link
                    href={c.href}
                    className="text-sm font-semibold break-words hover:underline"
                    style={{ color: c.accent }}
                  >
                    {c.value}
                  </Link>
                ) : (
                  <a
                    href={`mailto:${c.email}`}
                    className="text-sm font-semibold break-words hover:underline"
                    style={{ color: c.accent }}
                  >
                    {c.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
