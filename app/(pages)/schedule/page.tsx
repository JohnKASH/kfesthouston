import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance Schedule · Korean Festival Houston',
  alternates: { canonical: '/schedule' },
  description:
    'The 2026 Korean Festival Houston performance schedule — two days of K-pop headliners, traditional performances, dance competitions, and more across two stages at Discovery Green.',
}

const STAGE_EMAIL = 'stage@kashouston.org'

// ─── Data ─────────────────────────────────────────────────────────────────────
const expect = [
  { emoji: '🎤', title: 'K-pop Headliners', desc: 'World-class artists on the main stage', accent: '#FB4E6D' },
  { emoji: '💃', title: 'K-Showcase & K-Pop Dance Competition', desc: 'Local & regional exhibition and competitive crews', accent: '#8B6FFB' },
  { emoji: '🥁', title: 'Traditional Performances', desc: 'Drumming, fan dance, taekwondo', accent: '#10C9AC' },
  { emoji: '🌶️', title: 'Kimchi Eating Contest', desc: 'A K-Fest crowd favorite!', accent: '#FBBF24' },
]

// ─── Stage programming ──────────────────────────────────────────────────────
type Program = {
  emoji: string
  title: string
  accent: string
  host?: string
  body: React.ReactNode[]
  when: string
  link?: string
  linkTBA?: boolean
  opens?: string
  closes?: string
}

const programs: Program[] = [
  {
    emoji: '🥁',
    title: 'Traditional Performances',
    accent: '#10C9AC',
    body: [
      "Experience the beauty and energy of Korea's traditional performing arts in the heart of Houston. Our mission is to showcase and promote Korea's rich cultural heritage through dynamic performances and community engagement. We welcome performance groups specializing in traditional Korean arts such as 사물놀이 (samulnori), pungmul, 부채춤 (fan dance), 탈춤 (talchum mask dance), taekwondo demonstrations, and other cultural performances.",
      <>
        Groups interested in performing on the Kroger Stage or Community Stage are
        invited to contact us at{' '}
        <a href={`mailto:${STAGE_EMAIL}`} className="text-[#1FAEDB] font-semibold hover:underline">
          {STAGE_EMAIL}
        </a>{' '}
        with the following information: group name, type of performance, and a
        video sample or performance link.
      </>,
      'Please note that submitting an inquiry does not guarantee participation. All submissions are reviewed by our programming team, and selected groups will receive an official invitation to perform.',
    ],
    when: 'October 10 & 11, before 4:00 PM',
  },
  {
    emoji: '🎭',
    title: 'K-Showcase',
    accent: '#8B6FFB',
    body: [
      'As part of our mission to share and celebrate Korean culture with the greater Houston community, the K-Showcase offers a platform for performers of all backgrounds to showcase their creativity and passion. Whether through music, dance, comedy, poetry, or other unique talents, this is your chance to take the stage and be part of something special.',
      'Join us in creating an unforgettable showcase that brings people together through art and performance — singing, dancing, instrumental, magic, and more. Dancers: we accept covers, non-competitive choreography, and exhibition performances for this showcase. Singers: we accept covers; original works are subject to approval.',
    ],
    when: 'Kroger Stage — Sat, Oct 10 · Community Stage — Sat, Oct 10 · Community Stage — Sun, Oct 11',
    link: 'https://forms.gle/uCzAeDCybSorq9Ez6',
    opens: 'June 15, 2026',
    closes: 'July 15, 2026 · 8:00 PM CST',
  },
  {
    emoji: '💃',
    title: 'K-Pop Dance Competition',
    accent: '#FB4E6D',
    host: 'Hosted by Soundbox Dance Studios and the Korean-American Society of Houston. Generously sponsored by the Consulate General of the Republic of Korea and Kroger, and funded in part by the City of Houston through Houston Arts Alliance.',
    body: [
      'Soundbox & KASH are teaming up to create a one-of-a-kind K-Pop Dance Competition on October 11, 2026, at Discovery Green Park during K-Fest. Those interested in participating must apply for the preliminary round of auditions via the Google form and submit a video audition.',
    ],
    when: '5:00 PM at the Kroger Stage',
    link: 'https://forms.gle/MdnQjo1gVDVMMnho9',
    opens: 'June 1, 2026',
    closes: 'July 20, 2026 · 8:00 PM CST',
  },
  {
    emoji: '🌶️',
    title: 'Kimchi Eating Contest',
    accent: '#FBBF24',
    body: [
      'The annual Kimchi Eating Contest is a crowd favorite! Get ready for some spicy fun as volunteers race to finish their bowl of this delicious Korean side dish. Stay tuned for more details.',
    ],
    when: 'October 10, Community Stage',
    linkTBA: true,
    opens: 'September 2026',
    closes: 'TBA',
  },
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
              The complete 2026 performance lineup is being finalized. In the
              meantime, applications to perform are now open — apply below, and
              follow our social media pages for the full schedule announcement!
            </p>
          </div>

          {/* About stage programming */}
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1a1a1a] mb-5">
            About Stage Programming
          </h2>
          <p className="text-[#1a1a1a]/65 text-sm leading-relaxed tracking-wide mb-16">
            Korean Festival Houston is a vibrant celebration of traditional and
            modern Korean culture. Our festival features captivating cultural
            performances and a wide array of entertaining programs on two stages
            located in the heart of Downtown Houston. This lively festival aims to
            embrace the essence of tradition and the excitement of new trends,
            drawing in a diverse crowd of all ages and ethnicities. Visitors can
            look forward to immersing themselves in Korea&apos;s rich cultural
            heritage while enjoying an eclectic mix of performances that
            beautifully reflect Korea&apos;s profound influence on the world.
          </p>

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
              <div className="text-2xl mb-2">💃</div>
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

          {/* Programs */}
          <div className="mb-5">
            <span className="inline-block bg-[#FB4E6D] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">
              Get Involved
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#1a1a1a] mb-2">
            Stage Programs
          </h2>
          <p className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide mb-8">
            Want to be part of K-Fest 2026? Explore the programs below — some take
            applications via the forms listed, while others are arranged by
            invitation. Apply before each deadline.
          </p>
          <div className="space-y-6 mb-10">
            {programs.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-2xl border-t-4 shadow-sm px-6 py-7 md:px-8 md:py-8"
                style={{ borderTopColor: p.accent }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl leading-none">{p.emoji}</span>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-semibold text-[#1a1a1a]">
                    {p.title}
                  </h3>
                </div>

                {p.host && (
                  <p className="text-[#1a1a1a]/50 text-[13px] italic leading-relaxed tracking-wide mb-4">
                    {p.host}
                  </p>
                )}

                <div className="space-y-3 text-[#1a1a1a]/65 text-sm leading-relaxed tracking-wide">
                  {p.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-[#1a1a1a]/8 grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/45 mb-1">
                      When
                    </div>
                    <div className="text-[#1a1a1a] text-sm font-medium leading-relaxed">{p.when}</div>
                  </div>
                  {(p.opens || p.closes) && (
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]/45 mb-1">
                        Application
                      </div>
                      <div className="space-y-0.5 text-sm text-[#1a1a1a]">
                        {p.opens && (
                          <div>
                            <span className="text-[#1a1a1a]/50">Opens:</span>{' '}
                            <span className="font-medium">{p.opens}</span>
                          </div>
                        )}
                        {p.closes && (
                          <div>
                            <span className="text-[#1a1a1a]/50">Closes:</span>{' '}
                            <span className="font-medium">{p.closes}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-center text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: p.accent }}
                  >
                    Apply Now
                  </a>
                )}
                {p.linkTBA && (
                  <span className="mt-5 inline-block bg-[#1a1a1a]/8 text-[#1a1a1a]/50 text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-full">
                    Application Link — Coming Soon
                  </span>
                )}
              </article>
            ))}
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
