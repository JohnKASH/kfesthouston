import { SURVEY_URL } from '../lib/links'

/**
 * Attendee survey call-to-action.
 *
 * Deliberately the loudest band on the page — bright amber against the cream
 * sections around it — because response rate is the whole point. Sits high on
 * the festival map page, right under the map, since that page is where the QR
 * codes on the festival signage land.
 */
export default function SurveyBand({
  title = 'How Was Your K-Fest?',
  body = 'Tell us what you loved and what we should do better next year. It takes about two minutes, and it genuinely shapes the 2027 festival.',
  label = 'Take the Survey →',
}: {
  title?: string
  body?: string
  label?: string
}) {
  return (
    <section className="bg-[#FBBF24] py-14 md:py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block bg-[#1a1a1a] text-[#FBBF24] text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
          📝 2 Minutes
        </span>
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4">
          {title}
        </h2>
        <p className="text-[#1a1a1a]/70 text-[15px] md:text-base leading-relaxed tracking-wide max-w-xl mx-auto mb-9">
          {body}
        </p>
        <a
          href={SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1a1a1a] text-white text-[13px] md:text-[14px] font-bold tracking-[0.15em] uppercase px-12 py-5 rounded-full shadow-lg hover:bg-[#333] hover:-translate-y-0.5 transition-all"
        >
          {label}
        </a>
      </div>
    </section>
  )
}
