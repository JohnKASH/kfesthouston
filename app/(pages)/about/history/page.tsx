import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Festival History · Korean Festival Houston',
  description:
    'The story of Korean Festival Houston — from its 2009 inaugural event organized by the Korean-American Society of Houston (KASH) to its home at Discovery Green.',
}

// ─── Purpose Card ─────────────────────────────────────────────────────────────
function PurposeCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-[#1a1a1a]/8 p-8 hover:border-[#c9a96e] hover:shadow-lg transition-all duration-300">
      <div className="text-[#c9a96e] mb-5">{icon}</div>
      <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1a1a1a] mb-3">
        {title}
      </h3>
      <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide">
        {children}
      </p>
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/HomepageImages/dancing.jpg"
            alt="Korean Festival Houston performer dancing in hanbok"
            fill
            preload
            className="object-cover object-center opacity-75"
          />
          {/* Gradient overlay — keeps left side readable, lets color show on the right */}
          <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a]/85 via-[#2E4057]/55 to-transparent" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-[#2E4057]/40 to-transparent hidden lg:block" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
              About · Our Story
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight max-w-3xl">
            The History of <em className="not-italic text-[#c9a96e]">Korean Festival</em> Houston
          </h1>
          <div className="w-16 h-px bg-[#c9a96e] mt-8" />
        </div>
      </section>

      {/* ── NARRATIVE ────────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Story */}
            <div className="lg:col-span-2 space-y-6 text-[#1a1a1a]/70 text-[16px] leading-relaxed tracking-wide">
              <p>
                Since the 1950s, Koreans have been an integral part of Houston’s
                history. Throughout the decades the Korean community quietly
                preserved its heritage and traditions through local events like
                small-scale festivals and parades. Prior to 2009, there had not
                been a unifying event that all of Houston could partake in and
                bring together the entire Korean-American community.
              </p>
              <p>
                The enterprising young professionals of the Korean-American
                Society of Houston (KASH) organized the very first Korean Festival
                Houston in the Houston Community College – Spring Branch parking
                lot with the support of local community and business
                organizations. The success of that inaugural event was clear
                evidence of the significant demand for the Korean cultural
                experiences in Houston.
              </p>
              <p>
                Bolstered by the enthusiastic support from the community, KASH
                made a bold decision in the very next year to move the Korean
                Festival to its current home at{' '}
                <span className="text-[#1a1a1a] font-medium">Discovery Green</span>.
              </p>
            </div>

            {/* Milestones */}
            <div className="lg:border-l lg:border-[#1a1a1a]/10 lg:pl-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-[#c9a96e]" />
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
                  Milestones
                </span>
              </div>

              <ol className="relative border-l border-[#c9a96e]/30 ml-1 space-y-9">
                <li className="relative pl-7">
                  <span className="absolute -left-1.25 top-2.5 w-2.5 h-2.5 rounded-full bg-[#c9a96e]" />
                  <div className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1a1a1a] leading-none mb-2">
                    2009
                  </div>
                  <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide">
                    The inaugural Korean Festival Houston is held in the Houston
                    Community College – Spring Branch parking lot.
                  </p>
                </li>
                <li className="relative pl-7">
                  <span className="absolute -left-1.25 top-2.5 w-2.5 h-2.5 rounded-full bg-[#c9a96e]" />
                  <div className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1a1a1a] leading-none mb-2">
                    2010
                  </div>
                  <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide">
                    The festival moves to its current home at Discovery Green in
                    Downtown Houston.
                  </p>
                </li>
                <li className="relative pl-7">
                  <span className="absolute -left-1.25 top-2.5 w-2.5 h-2.5 rounded-full bg-[#c9a96e]" />
                  <div className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1a1a1a] leading-none mb-2">
                    2012
                  </div>
                  <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide">
                    Beloved balladeer Kim Tae-woo — lead vocalist of the legendary
                    K-pop group g.o.d — headlines the festival.
                  </p>
                </li>
                <li className="relative pl-7">
                  <span className="absolute -left-1.25 top-2.5 w-2.5 h-2.5 rounded-full bg-[#c9a96e] ring-4 ring-[#c9a96e]/20" />
                  <div className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#c9a96e] leading-none mb-2">
                    Today
                  </div>
                  <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide">
                    Now one of Houston’s largest free cultural festivals, drawing
                    tens of thousands to Discovery Green each fall.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PURPOSE ──────────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-24 border-t border-[#1a1a1a]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
                Why We Gather
              </span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#1a1a1a]">
              Our Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PurposeCard
              title="Raise Cultural Awareness"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              }
            >
              Sharing the joys and delights of Korean culture with fellow
              Houstonians.
            </PurposeCard>

            <PurposeCard
              title="Promote Community Growth"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            >
              Encouraging community involvement and fostering leadership
              development for the next generation of our youth.
            </PurposeCard>

            <PurposeCard
              title="Bridge Our Communities"
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 17h20" /><path d="M2 17a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6" /><path d="M6 17v-3" /><path d="M18 17v-3" /><path d="M12 11V7" />
                </svg>
              }
            >
              Connecting the Korean community and Houston at-large by
              collaborating with local businesses, community organizations, and
              individuals who play an integral role in the Houston community.
            </PurposeCard>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2E4057] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-white/70 text-[15px] leading-relaxed tracking-wide max-w-2xl mx-auto mb-8">
            Korean Festival Houston is organized by the Korean-American Society of
            Houston (KASH), a volunteer-driven nonprofit dedicated to celebrating
            Korean culture in our city.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://kashouston.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c9a96e] text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#e2c080] transition-colors"
            >
              Learn About KASH
            </a>
            <Link
              href="/schedule"
              className="border border-white/30 text-white text-[11px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
