import { TICKETS_URL } from '../lib/links'

/**
 * Reusable "get your tickets" call-to-action band.
 *
 * Admission to K-Fest is free, so the pitch is always two-part: reserve a free
 * ticket, or upgrade to the VIP Tent. Pass `title`/`body` to tune the copy for
 * the page it sits on; the button and link stay consistent everywhere.
 */
export default function TicketsBand({
  title = 'Free Admission — Reserve Your Spot',
  body = 'K-Fest is free and open to everyone. Grab a free ticket so we can plan for you, or upgrade to the VIP Tent for reserved seating with the best view of the main stage.',
  label = 'Get Your Tickets →',
}: {
  title?: string
  body?: string
  label?: string
}) {
  return (
    <section className="bg-linear-to-br from-[#1a1a1a] via-[#2E4057] to-[#1a1a1a] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block bg-[#c9a96e] text-[#1a1a1a] text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
          🎟️ Tickets
        </span>
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/70 text-[15px] leading-relaxed tracking-wide max-w-xl mx-auto mb-9">
          {body}
        </p>
        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#c9a96e] text-[#1a1a1a] text-[12px] font-bold tracking-[0.15em] uppercase px-10 py-5 rounded-full hover:bg-[#e2c080] transition-colors"
        >
          {label}
        </a>
        <p className="text-white/40 text-[12px] tracking-wide mt-5">
          Tickets are handled by Humanitix — opens in a new tab.
        </p>
      </div>
    </section>
  )
}
