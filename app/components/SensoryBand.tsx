import { KULTURECITY_DONATE_URL } from '../lib/links'

/**
 * Reusable call-to-action band for the KultureCity sensory activation
 * fundraiser.
 *
 * K-Fest is sensory-inclusive certified through KultureCity, and the fundraiser
 * pays for the sensory activation at the festival. Donations are collected on
 * KultureCity's own page, so every link here points off-site.
 *
 * Pass `title`/`body`/`label` to tune the copy for the page it sits on. Keep
 * the amounts off the page — the fundraiser's own progress bar is the source of
 * truth for how much has been raised.
 */
export default function SensoryBand({
  title = 'A Festival Where Every Family Belongs',
  body = 'K-Fest is officially sensory-inclusive certified through KultureCity — so guests with autism, PTSD, and other sensory needs can take part comfortably. Our sensory activation is funded entirely by donations.',
  label = 'Donate to the Sensory Activation →',
}: {
  title?: string
  body?: string
  label?: string
}) {
  return (
    <section className="bg-linear-to-br from-[#10C9AC] via-[#1FAEDB] to-[#0E7AAA] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block bg-white/15 border border-white/30 text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
          💙 Sensory Inclusive
        </span>
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/85 text-[15px] leading-relaxed tracking-wide max-w-xl mx-auto mb-9">
          {body}
        </p>
        <a
          href={KULTURECITY_DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#0a4f40] text-[12px] font-bold tracking-[0.15em] uppercase px-10 py-5 rounded-full hover:bg-white/90 transition-colors"
        >
          {label}
        </a>
        <p className="text-white/65 text-[12px] tracking-wide mt-5">
          Donations are processed by KultureCity, a 501(c)(3) nonprofit — opens in
          a new tab.
        </p>
      </div>
    </section>
  )
}
