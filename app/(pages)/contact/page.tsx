import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us · Korean Festival Houston',
  description:
    'Get in touch with Korean Festival Houston and the Korean-American Society of Houston (KASH). Questions, partnerships, and general inquiries welcome.',
}

const CONTACT_EMAIL = 'info@kashouston.org'

const infoCards = [
  { emoji: '✉️', label: 'Email Us', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, accent: '#FB4E6D' },
  { emoji: '📍', label: 'Location', value: 'Discovery Green · Downtown Houston', href: 'https://maps.google.com/?q=Discovery+Green+Houston+TX', accent: '#10C9AC' },
  { emoji: '📸', label: 'Follow Along', value: '@kfesthtx', href: 'https://instagram.com/kfesthtx', accent: '#8B6FFB' },
]

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-kf-pastel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <span className="inline-block bg-[#FB4E6D] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            Get in Touch
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            💬 Contact Us
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto">
            Questions about the festival, partnerships, or volunteering? We’d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* ── INFO CARDS ───────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] pt-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {infoCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl border-t-4 shadow-sm px-5 py-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ borderTopColor: c.accent }}
              >
                <div className="text-3xl mb-2">{c.emoji}</div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1a1a1a]/45 mb-1">
                  {c.label}
                </div>
                <div className="text-sm font-semibold break-words" style={{ color: c.accent }}>
                  {c.value}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-14 md:py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1a1a1a]">
              Send Us a Message
            </h2>
            <p className="text-[#1a1a1a]/55 text-sm tracking-wide mt-2">
              Fill out the form below and we’ll get back to you as soon as we can.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
