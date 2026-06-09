import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Headliners · Korean Festival Houston',
  description:
    'Meet the 2026 Korean Festival Houston headliner and explore 17 years of incredible artists on the K-Fest main stage.',
}

// ─── Past headliners (compiled history) ───────────────────────────────────────
type Past = {
  year: string
  annual: string
  name: string | null
  tag?: string
  note?: string
  venue?: string
  unknown?: boolean
}

const pastHeadliners: Past[] = [
  { year: '2025', annual: '16th Annual', name: 'Withus & Hohyun', tag: '2 Artists' },
  { year: '2024', annual: '15th Annual', name: 'NCHIVE' },
  { year: '2023', annual: '14th Annual', name: 'June' },
  { year: '2022', annual: '13th Annual', name: 'Triger & Asome.D', tag: '2 Artists' },
  { year: '2021', annual: '12th Annual*', name: 'MUSTB + Vision Music', tag: 'COVID-modified', venue: 'White Oak Music Hall' },
  { year: '2019', annual: '11th Annual', name: 'Dabit, JC Park & David Oh', tag: '3 Artists' },
  { year: '2018', annual: '10th Annual', name: 'BAIKAL' },
  { year: '2017', annual: '9th Annual', name: 'DANakaDAN & PRISKA', tag: '2 Artists' },
  { year: '2016', annual: '8th Annual', name: null, unknown: true },
  { year: '2015', annual: '7th Annual', name: 'KRNFX' },
  { year: '2014', annual: '6th Annual', name: 'DANakaDAN with J.U. / Stephen Jung' },
  { year: '2013', annual: '5th Annual', name: 'Dumbfoundead', note: 'Korean-American rapper & artist' },
  { year: '2012', annual: '4th Annual', name: 'Kim Tae-woo (god / 김태우)' },
  { year: '2011', annual: '3rd Annual', name: 'Clara C & Dumbfoundead', tag: '2 Artists' },
  { year: '2010', annual: '2nd Annual', name: 'Clara C & The Blessing', tag: '2 Artists', note: 'First year at Discovery Green' },
  { year: '2009', annual: '1st Annual', name: 'Inaugural Community Festival', note: 'No headliner', venue: 'HCC Spring Branch' },
]

const ACCENTS = ['#FB4E6D', '#8B6FFB', '#1FAEDB', '#10C9AC', '#FBBF24']
const DARK_TEXT_ACCENTS = new Set(['#10C9AC', '#FBBF24'])

function PastCard({ item, accent }: { item: Past; accent: string }) {
  if (item.unknown) {
    return (
      <div className="flex items-start gap-4 bg-white/60 rounded-xl border border-[#1a1a1a]/8 border-l-4 border-l-[#ccc] border-dashed px-5 py-4">
        <span className="text-[12px] font-bold tracking-wide px-3 py-1.5 rounded-full shrink-0 bg-[#ccc] text-[#666]">
          {item.year}
        </span>
        <div className="min-w-0">
          <div className="text-[#1a1a1a]/45 text-[14px] italic">Headliner unknown — still researching</div>
          <div className="text-[#1a1a1a]/40 text-[13px] mt-1">{item.annual}</div>
        </div>
      </div>
    )
  }

  const badgeText = DARK_TEXT_ACCENTS.has(accent) ? '#1a1a1a' : '#ffffff'

  return (
    <div
      className="flex items-start gap-4 bg-white rounded-xl border border-[#1a1a1a]/8 border-l-4 px-5 py-4"
      style={{ borderLeftColor: accent }}
    >
      <span
        className="text-[12px] font-bold tracking-wide px-3 py-1.5 rounded-full shrink-0"
        style={{ backgroundColor: accent, color: badgeText }}
      >
        {item.year}
      </span>
      <div className="min-w-0">
        <div className="font-bold text-[#1a1a1a] text-[15px]">
          {item.name}
          {item.tag && (
            <span className="ml-2 inline-block text-[11px] font-semibold bg-[#1a1a1a]/[0.06] text-[#1a1a1a]/55 px-2 py-0.5 rounded-full align-middle">
              {item.tag}
            </span>
          )}
        </div>
        <div className="text-[#1a1a1a]/50 text-[13px] mt-1 leading-relaxed">
          {item.annual}
          {item.note && <> · {item.note}</>}
        </div>
        {item.venue && (
          <span className="inline-block mt-2 text-[11px] font-semibold bg-[#FBBF24]/20 text-[#a06800] px-2.5 py-0.5 rounded-full">
            📍 {item.venue}
          </span>
        )}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#f0e8ff] via-[#e8f4ff] to-[#fff0f4]">
        {/* Decorative blobs */}
        <div className="absolute -top-16 right-[8%] w-52 h-52 rounded-full bg-[#8B6FFB] opacity-15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 left-[10%] w-32 h-32 rounded-full bg-[#FBBF24] opacity-15 blur-2xl pointer-events-none" />
        <div className="absolute top-10 left-[18%] w-16 h-16 rounded-full bg-[#FB4E6D] opacity-15 blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <span className="inline-block bg-[#8B6FFB] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            Featured Artists
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            🎤 Headliners
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-xl mx-auto">
            17 years of incredible artists on the K-Fest main stage.
          </p>
        </div>
      </section>

      {/* ── 2026 HEADLINER ───────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] px-8 py-12 md:py-14 text-center shadow-sm">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#8B6FFB] opacity-20 blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#FBBF24] opacity-20 blur-xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block bg-[#FBBF24] text-[#1a1a1a] text-[12px] font-bold tracking-[0.12em] px-4 py-1.5 rounded-full mb-5">
                🎉 2026 · 17th Annual
              </span>
              <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-white mb-2">
                Big Ocean
              </h2>
              <p className="text-white/65 text-[15px] tracking-wide">
                This year’s headliner · October 10–11, 2026
              </p>
              <p className="text-white/40 text-sm tracking-wide mt-1">
                Discovery Green · Downtown Houston · Free Admission
              </p>
            </div>
          </div>

          {/* Stay in the loop */}
          <div className="mt-8 bg-white rounded-2xl border border-[#1a1a1a]/8 shadow-sm px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <div className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#1a1a1a]">
                Stay in the loop
              </div>
              <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide mt-1">
                Get updates on the full lineup, fan-meet info, and announcements.
              </p>
            </div>
            <a
              href="https://instagram.com/kfesthtx"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#8B6FFB] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-[#7857f0] transition-colors"
            >
              Follow for Updates
            </a>
          </div>
        </div>
      </section>

      {/* ── HEADLINER HISTORY ────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-16 md:py-20 border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#FBBF24] text-[#1a1a1a] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full mb-4">
              K-Fest Legacy
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1a1a1a]">
              Complete Headliner History
            </h2>
          </div>

          <div className="space-y-2.5">
            {pastHeadliners.map((item, i) => (
              <PastCard key={item.year} item={item} accent={ACCENTS[i % ACCENTS.length]} />
            ))}
          </div>

          <p className="mt-8 text-[13px] text-[#1a1a1a]/45 leading-relaxed bg-white/60 rounded-xl border border-[#1a1a1a]/8 px-5 py-4">
            * 2020 is not included in the annual count because the event was not held due to the COVID-19 pandemic.
          </p>
        </div>
      </section>

      {/* ── SOCIAL CTA ───────────────────────────────────────────────────── */}
      <section className="bg-linear-to-br from-[#8B6FFB] via-[#FB4E6D] to-[#1FAEDB] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-3xl mb-4">📣</div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-7">
            Follow Us for the Latest K-Fest 2026 Updates!
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://instagram.com/kfesthtx" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1a1a1a] text-[12px] font-bold tracking-[0.08em] px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
              📸 @kfesthtx
            </a>
            <a href="https://twitter.com/kfesthtx" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1a1a1a] text-[12px] font-bold tracking-[0.08em] px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
              𝕏 @kfesthtx
            </a>
            <a href="https://facebook.com/kfesthouston" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1a1a1a] text-[12px] font-bold tracking-[0.08em] px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
              f kfesthouston
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
