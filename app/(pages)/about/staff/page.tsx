import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet the Team · Korean Festival Houston',
  alternates: { canonical: '/about/staff' },
  description:
    'Meet the volunteer leaders and committee directors of the Korean-American Society of Houston (KASH) who bring Korean Festival Houston to life each year.',
}

type Person = {
  name: string
  role: string
  slug: string
  bio: string[]
  funFact?: string
  freeTime?: string
  quote?: string
  quoteLabel?: string
}

// ─── Team data ────────────────────────────────────────────────────────────────
// Headshots live in /public/assets/staff/<slug>.jpg
const leadership: Person[] = [
  {
    name: 'Yang Nam',
    role: 'Executive Director & Festival Founding Member',
    slug: 'yang-nam',
    bio: [
      'Yang has been part of KASH since its earliest days, when the Korean Festival was still just a dream on paper. As a longtime board member and festival director, he’s stayed committed to empowering young leaders—helping them grow both professionally and personally.',
      'With over 18 years in HR and recruiting, Yang is the Founder and Managing Partner of WeHire Group, a Houston-based boutique firm that partners with HR teams across energy, healthcare, manufacturing, and corporate sectors to make hiring more human and effective.',
      'His passion for community runs deep. In 2009, Yang joined forces with fellow young professionals to launch the Korean Festival Houston, now one of the city’s most beloved cultural events. Whether he’s building teams or building community, Yang is driven by connection and purpose.',
    ],
    funFact:
      '👖 He loves jiu jitsu, but isn’t great at it. Yang once dreamt of starting a streetwear brand called “Seoul Side” — he has since moved on to a new dream…',
    freeTime:
      '🍜 Eating, plotting his next move, and spending time with his favorite people — his wife, Tina, and kiddos Adam and Alex.',
    quote:
      'Seeing how much the festival has grown and how beloved K-Fest has become in the community!',
    quoteLabel: 'What K-Fest means to him',
  },
  {
    name: 'Janet Hong',
    role: 'President & Festival Director',
    slug: 'janet-hong',
    bio: [
      'With over 19 years in nonprofit leadership and eight years of service with KASH, Janet Hong is the heart behind Korean Festival Houston’s growing impact. As President, she supports team leads and helps oversee operations with the same energy she’s poured into youth programs across Texas—from academic support to university partnerships.',
      'A proud Houston native and Korean-American, Janet believes in sharing heritage and modern culture in one of the country’s most diverse cities. Her leadership is rooted in community-building, mentorship, and a love for people—both on and off the stage.',
    ],
    funFact: '🥋 Janet’s a first-degree black belt in taekwondo.',
    freeTime: '🎶 Traveling, cooking, concerts, and exploring new eats.',
    quote:
      'There’s still so much room to get creative—and we welcome anyone who wants to be a part of it!',
    quoteLabel: 'Her encouragement',
  },
]

const directors: Person[] = [
  {
    name: 'Crystal Ching',
    role: 'Stage Director',
    slug: 'crystal-ching',
    bio: [
      'Since joining KASH in 2021, Crystal Ching has poured her passion for theatre and community into Korean Festival Houston. As Stage Committee Lead, she helps craft engaging programming that highlights local talent and celebrates Korean culture.',
      'A mother, caretaker, and part-time trading card business worker, Crystal’s adaptability and creative energy shine through—whether she’s producing stage events or hosting K-Pop fan projects. Her favorite part? Empowering volunteers to grow and take bold steps outside their comfort zones.',
    ],
    funFact:
      '📚 Crystal has uncanny luck picking blind boxes—for her friends, not herself!',
    quote:
      'Please do it! I’ve met lots of my friends through volunteering for KASH.',
    quoteLabel: 'To future volunteers',
  },
  {
    name: 'Heather Gaskins',
    role: 'Korean Village & Cultural Activities Director',
    slug: 'heather-gaskins',
    bio: [
      'Heather joined KASH in 2018 after her little sister invited her to a casual K-BBQ picnic—and from that moment on, she knew she’d found her community. As the daughter of a retired U.S. Air Force Master Sergeant, Heather grew up experiencing life across the globe, from living in Turkey and Germany to her early college days in Hawaii. Those adventures sparked a lifelong love for exploring cultures and a deep passion for building community wherever she goes.',
      'Today, she brings that same energy to Korean Village, Korean Festival’s interactive learning space designed for curious minds from ages 8 to 80.',
    ],
    funFact: '👩‍🍳 Heather holds a degree in culinary arts.',
    freeTime:
      '⭐ Cooking, hanging out with her dog Mr. Darcy, and shopping trips with her mom and sisters.',
    quote:
      'Find the sweetness in life. There’s always something good to be found—even on the worst day!',
    quoteLabel: 'Her personal motto',
  },
  {
    name: 'Kimmy Nunley',
    role: 'Marketing Director',
    slug: 'kimmy-nunley',
    bio: [
      'Since 2018, Kimmy Nunley (formerly Gaskins) has been the creative voice behind Korean Festival Houston’s expanding reach. Raised in a globe-trotting Air Force family, Kimmy brings her vibrant spirit and deep cultural appreciation to every marketing campaign and conversation.',
      'With a background in administrative support and a knack for connecting with people, she’s helped KASH grow while building community across all walks of life. Her artistry and writing infuse the festival’s messaging with authenticity and warmth, inviting everyone to experience Korean culture.',
    ],
    funFact: '🍦 Kimmy mastered the perfect soft-serve swirl at Chick-fil-A!',
    freeTime:
      '📚 Curling up with a book, gaming, watching K-Dramas, and quality time with her cats, Penny and Moon, and her husband.',
    quote:
      'It only takes one small “yes” to change your future and pursue something new. Our goal is to change our community, and guess what — you’re invited!',
    quoteLabel: 'Her advice',
  },
  {
    name: 'Patricia Han',
    role: 'Vendors Director',
    slug: 'patricia-han',
    bio: [
      'Patricia Han joined KASH in 2018 and quickly became a familiar face—and heart—within the community. Since 2021, she’s been a key part of the Vendors team, bringing her signature mix of organization, kindness, and can-do spirit to every festival.',
      'By day, Patricia is a Physical Therapist at CHI St. Luke’s Health – Baylor St. Luke’s Medical Center, where she puts her Doctor of Physical Therapy degree to work helping people heal and thrive. Her passion for care doesn’t stop at the clinic—she also travels to underserved areas through medical missions, partnering with Villa de las Niñas in Chalco, Mexico to bring healing where it’s needed most.',
      'Whether she’s coordinating vendors or lending a hand abroad, Patricia is all about building community, one meaningful connection at a time.',
    ],
    funFact:
      '👟 Patricia can tie her shoes with one hand. Don’t ask her to show you—she can’t share her trade secrets.',
    freeTime: '🎤 Trying new restaurants, karaoke, and time with friends.',
    quote: 'Don’t give up! There’s something good coming around the bend!',
    quoteLabel: 'Her encouragement',
  },
  {
    name: 'Jeong-min Park',
    role: 'VIP Hospitality Director',
    slug: 'jeong-min-park',
    bio: [
      'Jeong-Min moved to Houston from Korea six years ago and has been serving with KASH for the past two. As a researcher at the Texas Medical Center and cultural ambassador at heart, she’s passionate about sharing her heritage with the Houston community.',
      'Whether she’s organizing VIP experiences or leading outreach during Lunar New Year, her attention to detail and love for Korean culture shine through. She’s excited about the festival’s future growth and committed to passing on her experience to future leaders.',
    ],
    funFact: '👩‍🔬 All the famous Koreans named Jeong-Min are men—except her!',
    freeTime: '📺 Watching shows, reading webtoons, and working out.',
    quote:
      'We warmly welcome everyone who wants to be part of KASH. Just take the first step!',
    quoteLabel: 'Her advice',
  },
  {
    name: 'John Nam',
    role: 'Volunteer and Staff Director',
    slug: 'john-nam',
    bio: [
      'John has been involved in KASH activites after being forced to participate by his brother but finally became an officer in 2023, bringing tech-savvy skills, teaching experience, and a whole lot of enthusiasm to the Korean Festival Houston. Whether he’s recruiting volunteers, building websites, or translating for performers, John’s all in—driven by a love for Korean culture and a legacy started by his brother, one of the festival’s original organizers.',
      'With a background in electrical engineering and a job supporting schools through edtech, John is all about growth and community. He’s proud of helping KASH spread joy year-round through events and wants to see more young members and networking opportunities in the future.',
    ],
    funFact: '🃏 John’s a jack of all trades and recently dove into trading cards.',
    freeTime: '🕹 Watching shows, gaming with friends, and learning something new.',
    quote:
      'Join! You won’t regret it! If you enjoy Korean dramas, foods, music, or just want to hang out with friends, this is a great organization to do just that. You’ll find people with similar interests and build great relationships within the org.',
    quoteLabel: 'His advice',
  },
]

// ─── Staff member row ───────────────────────────────────────────────────────
function StaffMember({ person, flip }: { person: Person; flip: boolean }) {
  const initials = person.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
        {/* Headshot */}
        <div className={`lg:col-span-2 ${flip ? 'lg:order-2' : ''}`}>
          <div className="relative aspect-square overflow-hidden border border-[#1a1a1a]/8 bg-linear-to-br from-[#2E4057] to-[#1a1a1a]">
            <span className="absolute inset-0 flex items-center justify-center font-['Cormorant_Garamond'] text-7xl font-semibold text-[#c9a96e]/30 select-none">
              {initials}
            </span>
            <Image
              src={`/assets/staff/${person.slug}.jpg`}
              alt={`${person.name} — ${person.role}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="lg:col-span-3">
          <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] font-['Montserrat'] mb-3">
            {person.role}
          </div>
          <h3 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1a1a1a] leading-none mb-5">
            {person.name}
          </h3>
          <div className="w-12 h-px bg-[#c9a96e] mb-6" />

          <div className="space-y-4 text-[#1a1a1a]/70 text-[15px] leading-relaxed tracking-wide">
            {person.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {(person.funFact || person.freeTime) && (
            <div className="mt-6 space-y-1.5 text-[14px] text-[#1a1a1a]/55 leading-relaxed">
              {person.funFact && <p>{person.funFact}</p>}
              {person.freeTime && <p>{person.freeTime}</p>}
            </div>
          )}

          {person.quote && (
            <blockquote className="mt-6 border-l-2 border-[#c9a96e] pl-5">
              <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl italic text-[#1a1a1a]/80 leading-snug">
                “{person.quote}”
              </p>
              {person.quoteLabel && (
                <cite className="not-italic block mt-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c9a96e]">
                  {person.quoteLabel}
                </cite>
              )}
            </blockquote>
          )}
        </div>
      </div>
  )
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="w-8 h-px bg-[#c9a96e]" />
      <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#1a1a1a]/60 font-['Montserrat']">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#1a1a1a]/10" />
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#1a1a1a] overflow-hidden flex items-center min-h-[340px] md:min-h-[460px]">
        <div className="absolute inset-0">
          <Image
            src="/assets/staff/team.jpg"
            alt="The Korean Festival Houston volunteer team"
            fill
            preload
            sizes="100vw"
            className="object-cover object-[50%_50%]"
          />
          {/* Left-anchored gradient keeps the heading readable */}
          <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] via-[#1a1a1a]/30 to-[#1a1a1a]/10" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
              About · Our Team
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white leading-[1.05] tracking-tight">
            Meet the <em className="not-italic text-[#c9a96e]">Team</em>
          </h1>
          <p className="text-white/60 text-[14px] leading-relaxed tracking-wide max-w-2xl mt-4">
            Korean Festival Houston is powered by the volunteers of the
            Korean-American Society of Houston (KASH) — a group of friends and
            neighbors who give their time year-round to celebrate Korean culture
            in our city.
          </p>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <GroupLabel>Leadership</GroupLabel>
          <div className="space-y-20 lg:space-y-28">
            {leadership.map((person, i) => (
              <StaffMember key={person.slug} person={person} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTORS ────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-24 border-t border-[#1a1a1a]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <GroupLabel>Committee Directors</GroupLabel>
          <div className="space-y-20 lg:space-y-28">
            {directors.map((person, i) => (
              <StaffMember key={person.slug} person={person} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
      <section className="bg-linear-to-br from-[#10C9AC] via-[#1FAEDB] to-[#8B6FFB] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-3xl mb-3">🎉</div>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white mb-4">
            Want to Join the Team?
          </h2>
          <p className="text-white/85 text-[15px] leading-relaxed tracking-wide max-w-2xl mx-auto mb-8">
            Whether you love K-dramas, Korean food, music, or simply want to meet
            great people, there’s a place for you at KASH. It only takes one small
            “yes.”
          </p>
          <Link
            href="/about/volunteer"
            className="inline-block bg-white text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            Volunteer With Us
          </Link>
        </div>
      </section>
    </>
  )
}
