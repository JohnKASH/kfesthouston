import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance Schedule · Korean Festival Houston',
  description:
    'The 2026 Korean Festival Houston performance schedule — two days of K-pop headliners, traditional performances, dance competitions, and more across two stages at Discovery Green.',
}

const STAGE_EMAIL = 'stage@kashouston.org'

// ─── Data ─────────────────────────────────────────────────────────────────────
const expect = [
  { emoji: '🎤', title: 'K-pop Headliners', desc: 'World-class artists on the main stage', accent: '#FB4E6D' },
  { emoji: '💃', title: 'K-showcase & K-Pop Dance Competition', desc: 'Local & regional exhibitionand competitive crews', accent: '#8B6FFB' },
  { emoji: '🥁', title: 'Traditional Performances', desc: 'Drumming, fan dance, taekwondo', accent: '#10C9AC' },
  { emoji: '🌶️', title: 'Kimchi Eating Contest', desc: 'A K-Fest crowd favorite!', accent: '#FBBF24' },
]

export default function Page() {
  return (
    <>
      {/* ── HERO (pastel festival gradient) ──────────────────────────────── */}
      <section className="bg-linear-to-br from-[#e0fff8] via-[#fff8e0] to-[#fce8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <span className="inline-block bg-[#1FAEDB] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            2026 Program
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-semibold text-[#1a1a1a] leading-[1.02] mb-5">
            🏮 Performance Schedule
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto">
            A vibrant celebration of traditional and contemporary Korean culture,
            featuring captivating performances across two stages in the heart of
            Downtown Houston.
          </p>
        </div>
      </section>

      {/* ── DATE STRIP ───────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-[#1FAEDB] text-center py-7 px-6">
          <div className="text-white/75 text-[11px] font-bold tracking-[0.25em] uppercase mb-1.5">
            Saturday
          </div>
          <div className="text-white text-xl font-bold tracking-wide">October 10, 2026</div>
          <div className="text-white/75 text-sm mt-1">10:00 AM – 9:00 PM</div>
        </div>
        <div className="bg-[#0E7AAA] text-center py-7 px-6">
          <div className="text-white/75 text-[11px] font-bold tracking-[0.25em] uppercase mb-1.5">
            Sunday
          </div>
          <div className="text-white text-xl font-bold tracking-wide">October 11, 2026</div>
          <div className="text-white/75 text-sm mt-1">11:00 AM – 8:00 PM</div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Coming-soon notice */}
          <div className="bg-white rounded-2xl border-l-4 border-[#FBBF24] shadow-sm px-6 py-5 mb-14">
            <div className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1a1a1a] mb-1">
              Full schedule coming soon!
            </div>
            <p className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide">
              The complete 2026 performance lineup is being finalized. Stay tuned
              to our social media pages for important announcements about
              Performance Auditions and Dance Competition Applications!
            </p>
          </div>

          {/* What to expect */}
          <div className="mb-5">
            <span className="inline-block bg-[#10C9AC] text-[#0a4f40] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">
              What to Expect
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1a1a1a] mb-7">
            Entertainment for Everyone
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {expect.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white rounded-2xl border-t-4 shadow-sm px-5 py-5"
                style={{ borderTopColor: item.accent }}
              >
                <span className="text-3xl leading-none">{item.emoji}</span>
                <div>
                  <div className="font-semibold text-[#1a1a1a] text-[15px]">{item.title}</div>
                  <div className="text-[#1a1a1a]/55 text-sm mt-1 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Two stages */}
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1a1a1a] mb-7">
            Two Stages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <div className="rounded-2xl p-6 bg-linear-to-br from-[#8B6FFB]/12 to-[#FB4E6D]/10 border-2 border-[#8B6FFB]/25">
              <div className="text-2xl mb-2">🎶</div>
              <div className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1a1a1a] mb-2">
                Main Stage
              </div>
              <p className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide mb-4">
                Headliner performances, K-pop showcase, and major cultural acts for
                the full festival crowd.
              </p>
              <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full bg-[#8B6FFB]/15 text-[#6A4FE0]">
                K-pop · Headliners
              </span>
            </div>
            <div className="rounded-2xl p-6 bg-linear-to-br from-[#10C9AC]/12 to-[#1FAEDB]/10 border-2 border-[#10C9AC]/25">
              <div className="text-2xl mb-2">🪭</div>
              <div className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1a1a1a] mb-2">
                Community Stage
              </div>
              <p className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide mb-4">
                Traditional Korean arts, community performances, dance exhibitions, and interactive programs.
              </p>
              <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full bg-[#10C9AC]/15 text-[#048A6E]">
                Culture · Dance · Kids
              </span>
            </div>
          </div>

          {/* Audition CTA */}
          <div className="rounded-3xl bg-linear-to-br from-[#FB4E6D] to-[#FF7E5F] px-8 py-10 text-center shadow-sm mb-10">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-white mb-2">
              Want to perform at K-Fest 2026?
            </h3>
            <p className="text-white/85 text-sm leading-relaxed tracking-wide max-w-md mx-auto mb-7">
              Performance Auditions and Dance Competition Applications are opening
              soon — follow along so you don’t miss the announcement!
            </p>
            <a
              href="https://instagram.com/kfesthtx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#FB4E6D] text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Follow for Updates
            </a>
          </div>

          {/* Contact */}
          <p className="text-center text-[#1a1a1a]/55 text-sm">
            Questions? Contact{' '}
            <a
              href={`mailto:${STAGE_EMAIL}`}
              className="text-[#1FAEDB] font-semibold hover:underline"
            >
              {STAGE_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
