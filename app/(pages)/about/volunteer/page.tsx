import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Volunteer with K-Fest · Korean Festival Houston',
  description:
    'Volunteer applications for Korean Festival Houston 2026 are now closed. See what volunteering with K-Fest is like — make new friends, get behind-the-scenes festival access, and join us for 2027.',
  alternates: { canonical: '/about/volunteer' },
}

// ─── Content data ───────────────────────────────────────────────────────────
const perks = [
  {
    emoji: '🤝',
    title: 'Make New Friends',
    desc: 'Join a welcoming community of people who love Korean culture, food, and music — many volunteers say this is where they made lifelong friends.',
    accent: '#FB4E6D',
  },
  {
    emoji: '🎎',
    title: 'Experience Korean Culture',
    desc: 'Get hands-on with Korean culture firsthand — from the hanbok booth and crafts in K-Village to live performances on stage.',
    accent: '#8B6FFB',
  },
  {
    emoji: '🎤',
    title: 'Behind-the-Scenes Access',
    desc: 'Get an insider view of how one of Houston’s largest cultural festivals comes together — and meet performers, vendors, and organizers.',
    accent: '#10C9AC',
  },
  {
    emoji: '👥',
    title: 'Volunteer Together',
    desc: 'Bring your friends, classmates, or group — volunteering alongside people you know makes the whole experience even more fun.',
    accent: '#1FAEDB',
  },
  {
    emoji: '💼',
    title: 'Gain Experience',
    desc: 'Build real-world experience in events, hospitality, and teamwork while working alongside a friendly, dependable crew.',
    accent: '#FBBF24',
  },
  {
    emoji: '❤️',
    title: 'Be the Heart of the Festival',
    desc: 'Volunteers are the heart of K-Fest — you’ll help create a fun, safe, and welcoming experience for tens of thousands of guests.',
    accent: '#FB4E6D',
  },
]

const roles = [
  { emoji: '🏘️', title: 'K-Village', desc: 'Help set up and run our vibrant cultural village — crafts, activities, and the hanbok booth.' },
  { emoji: '🎤', title: 'Stage Team', desc: 'Assist with performances and stage management throughout the festival.' },
  { emoji: '🛍️', title: 'Vendors', desc: 'Support vendors, answer attendee questions, help with crowd control, and keep things running smoothly.' },
  { emoji: '📦', title: 'Loading', desc: 'Help with the setup and breakdown of festival equipment.' },
  { emoji: '🎟️', title: 'VIP Area', desc: 'Provide excellent service to our VIP guests.' },
  { emoji: '🙋', title: 'Information Booth', desc: 'Welcome guests, handle merch sales, and check in fellow volunteers.' },
]

export default function Page() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#1a1a1a] overflow-hidden flex items-center min-h-[340px] md:min-h-[460px]">
        <div className="absolute inset-0">
          <Image
            src="/assets/staff/team.jpg"
            alt="Korean Festival Houston volunteers at Discovery Green"
            fill
            preload
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] via-[#1a1a1a]/40 to-[#1a1a1a]/10" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
              About · Get Involved
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight">
            Volunteer with <em className="not-italic text-[#c9a96e]">K-Fest</em>
          </h1>
          <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed tracking-wide max-w-2xl mt-4">
            Korean Festival Houston runs on the energy of its volunteers. Give a
            few hours, make new friends, and help bring one of Houston’s biggest
            cultural celebrations to life — no experience needed.
          </p>
          <div className="mt-7">
            <span className="inline-block bg-white/10 border border-white/25 text-white text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full">
              Applications Closed for 2026
            </span>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS CLOSED BANNER ───────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl bg-linear-to-br from-[#FB4E6D] to-[#8B6FFB] px-8 py-10 text-center shadow-sm">
            <div className="text-3xl mb-3">🙌</div>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white mb-3">
              Volunteer Applications Closed for 2026
            </h2>
            <p className="text-white/85 text-sm leading-relaxed tracking-wide max-w-xl mx-auto">
              Thank you to everyone who signed up! Our volunteer team for KFest
              2026 is now set, and assignments are going out by email. Follow us
              for news on 2027 sign-ups, or reach out at{' '}
              <a href="mailto:John@kashouston.org" className="underline hover:text-white">
                John@kashouston.org
              </a>{' '}
              with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY VOLUNTEER ────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#8B6FFB] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
              Why Volunteer
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4">
              What You’ll Get Out of It
            </h2>
            <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed tracking-wide">
              Volunteering with K-Fest is about more than lending a hand — it’s a
              chance to grow, connect, and be part of something special.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border-t-4 shadow-sm px-6 py-7"
                style={{ borderTopColor: p.accent }}
              >
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="font-semibold text-[#1a1a1a] text-[16px] mb-2">{p.title}</h3>
                <p className="text-[#1a1a1a]/55 text-sm leading-relaxed tracking-wide">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE YOU CAN HELP ───────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-20 md:py-24 border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#10C9AC] text-[#0a4f40] text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
              Volunteer Roles
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4">
              Where You Can Help
            </h2>
            <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed tracking-wide">
              There’s a spot for every interest and skill set. Tell us your
              preferences on the application and we’ll match you to a team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((r) => (
              <div key={r.title} className="flex items-start gap-4 bg-white rounded-2xl border border-[#1a1a1a]/8 shadow-sm px-5 py-5">
                <span className="text-3xl leading-none">{r.emoji}</span>
                <div>
                  <div className="font-semibold text-[#1a1a1a] text-[15px]">{r.title}</div>
                  <div className="text-[#1a1a1a]/55 text-sm mt-1 leading-relaxed">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO CAN VOLUNTEER ────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-16 border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl bg-white border-l-4 border-[#FBBF24] shadow-sm px-6 py-6">
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#1a1a1a] mb-2">
              Who Can Volunteer?
            </h3>
            <p className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide">
              We look for friendly, dependable volunteers{' '}
              <strong className="text-[#1a1a1a]/75">aged 16 and up</strong> who are
              ready to be part of something exciting. You can sign up on your own or bring
              friends, classmates, or a whole group for an even more enjoyable
              experience. <strong className="text-[#1a1a1a]/75">Morning,
                afternoon, and evening</strong> shifts are available, so there’s
              a time that works for just about everyone.
            </p>
            <p className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide mt-4">
              <strong className="text-[#1a1a1a]/75">Applications for 2026 are now
                closed.</strong> The form shut on September 18 so our team could
              process assignments and finalize the schedule. Keep an eye on this
              page and our social media — sign-ups for 2027 will open here first.
            </p>
          </div>
        </div>
      </section>

      {/* ── NEXT YEAR CTA ────────────────────────────────────────────────── */}
      <section className="bg-linear-to-br from-[#FB4E6D] via-[#FB5C8A] to-[#8B6FFB] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-3xl mb-4">💌</div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white mb-4">
            Want to Join Us in 2027?
          </h2>
          <p className="text-white/85 text-[15px] leading-relaxed tracking-wide max-w-xl mx-auto mb-9">
            Applications for K-Fest 2026 have closed, but we’d still love to hear
            from you. Follow{' '}
            <a
              href="https://instagram.com/kfesthtx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-white transition-colors"
            >
              @kfesthtx
            </a>{' '}
            and watch this page — next year’s volunteer sign-ups will be posted
            here as soon as they open.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            Get in Touch →
          </Link>
          <p className="text-white/70 text-[13px] tracking-wide mt-6">
            Already signed up? Watch your email for your shift assignment.
          </p>
        </div>
      </section>
    </>
  )
}
