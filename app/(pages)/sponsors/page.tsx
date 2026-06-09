import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sponsors · Korean Festival Houston',
  description:
    'Korean Festival Houston is made possible by our generous 2025 sponsors, media partners, and community supporters. Thank you for your partnership.',
}

const SPONSOR_EMAIL = 'info@kashouston.org'

type Sponsor = {
  name: string
  slug: string // logo: /assets/sponsors/<slug>.png
  designation?: string
  description?: string
}

// ─── Sponsor data ─────────────────────────────────────────────────────────────
const titleSponsor: Sponsor = {
  name: 'Kroger',
  slug: 'kroger',
  designation: 'Title Sponsor',
  description:
    'As a leading grocery retailer, Kroger has a longstanding tradition of community involvement and philanthropy. This sponsorship underscores Kroger’s dedication to fostering inclusivity and celebrating cultural diversity within the Houston area.',
}

const globalSponsors: Sponsor[] = [
  {
    name: 'Consulate General of the Republic of Korea',
    slug: 'consulate-general-korea',
    designation: 'Global Sponsor',
    description:
      'Our festival’s success greatly relies on the support from the Consulate General of the Republic of Korea. Their contribution to our festival and the Korean-American community has played a crucial role in creating a significant impact.',
  },
  {
    name: 'aT America',
    slug: 'at-america',
    designation: 'Global Sponsor',
    description:
      'aT America is the U.S. regional headquarters of Korea Agro-Fisheries & Food Trade Corporation, with branch offices in New York and Los Angeles. Founded in 1967, the government agency is entrusted with promoting the trade, exportation, and marketing of Korean foods and beverages around the world.',
  },
]

const officialSponsors: Sponsor[] = [
  {
    name: 'Chariot Energy',
    slug: 'chariot-energy',
    designation: 'Official Sponsor',
    description:
      'Chariot Energy serves the residential, commercial, and industrial electricity market with a unique wholesale supply strategy that benefits its customers.',
  },
  {
    name: 'Big Star Honda',
    slug: 'big-star-honda',
    designation: 'Official Car Dealership',
    description:
      'Big Star Honda is known for its knowledgeable sales team and exceptional customer service. With an extensive inventory of Honda cars, trucks, SUVs, and vans, they offer competitive pricing and flexible financing to meet every driver’s needs — and proudly support the local community through initiatives like their sponsorship of the Korean Festival.',
  },
  {
    name: 'JINRO',
    slug: 'jinro',
    designation: 'Beverage Sponsor',
    description:
      'JINRO is a world No.1 selling spirit brand. According to the International Wine and Spirits Research (IWSR), JINRO has topped Drinks International’s Millionaire Club as the world’s largest spirit brand by volume for 20 consecutive years.',
  },
  {
    name: 'SNOWFOX',
    slug: 'snowfox',
    designation: 'Official Sponsor',
    description:
      'SNOWFOX sushi products can be found in grocery stores across the country — convenient choices like cooked and raw sushi, as well as party platters. These ready-to-eat items are ideal for quick meals, social gatherings, and dining on the go, guaranteeing quality and freshness in every bite.',
  },
  {
    name: 'Seoulside Wings',
    slug: 'seoulside-wings',
    designation: 'Official Pocha Sponsor',
    description:
      'Seoulside Wings is a vibrant Korean street food spot in Houston known for bold flavors and crispy double-fried chicken wings. Founded by Jane Lim and her brothers, it blends Korean culinary traditions with Houston’s diverse food scene — from spicy Hotbokki wings to loaded Kimchi Fries and Bulgogi Cupbap bowls — now serving dine-in at the Conservatory Galleria.',
  },
  {
    name: 'American Furniture Warehouse',
    slug: 'american-furniture-warehouse',
    designation: 'Official Furniture Store',
    description:
      'We’re excited to partner with American Furniture Warehouse as the official furniture store of our festival! VIP festival-goers will get to enjoy their comfortable, luxurious furniture in our VIP tent.',
  },
  {
    name: 'BUBBL’R',
    slug: 'bubblr',
    designation: 'Beverage Sponsor',
    description:
      'BUBBL’R makes delicious antioxidant sparkling water featuring natural flavors and colors, no artificial sweeteners, and naturally sourced caffeine. We’re excited for festival-goers to try these delightful, refreshing drinks!',
  },
  {
    name: 'SWNB',
    slug: 'swnb',
    designation: 'Official Sponsor',
    description:
      'SWNB strives to be the premier business bank through innovative financial solutions, dedicated relationship management, cutting-edge technology, and a deep understanding of its customers’ evolving needs.',
  },
  {
    name: 'AARP',
    slug: 'aarp',
    designation: 'Official Sponsor',
    description:
      'AARP is a nonprofit, nonpartisan organization that empowers people to choose how they live as they age.',
  },
  {
    name: 'Capital Vacations',
    slug: 'capital-vacations',
    designation: 'Official Sponsor',
    description:
      'Capital Vacations is reimagining the travel experience by connecting independent resorts with travelers through exclusive, value-add services, technology platforms, and vacation products. They service more than one million travelers a year with a hyperfocus on the owner, member, and guest experience.',
  },
  {
    name: 'American First National Bank',
    slug: 'american-first-national-bank',
    designation: 'Official Sponsor',
    description:
      'American First National Bank aspires to become the leading Asian-American owned financial institution in the United States — committed to the highest ethical standards, operating safely and soundly, and complying with laws and regulations.',
  },
  {
    name: 'PromiseOne Bank',
    slug: 'promiseone-bank',
    designation: 'Official Sponsor',
    description:
      'PromiseOne Bank was established by a group of individuals who shared a vision to create a true community bank serving our community and its diverse population — committed to products and services that meet the banking needs of their customers.',
  },
  {
    name: 'Golden Minds Insurance Group',
    slug: 'golden-minds-insurance',
    designation: 'Official Sponsor',
    description:
      'Golden Minds Insurance Group has built its reputation on exceptional coverage that protects what matters most. Their experienced agents serve Houston and surrounding communities with personalized solutions — because insurance isn’t just about policies, it’s about security, managing risk, and the right protection when the unexpected occurs.',
  },
]

const communitySponsors: Sponsor[] = [
  {
    name: 'Houston Public Library',
    slug: 'houston-public-library',
    designation: 'Community Sponsor',
    description:
      'Houston Public Library is a valued community partner who brings the beauty of Korean culture to life through books and reading. The magic they bring to our interactive Korean Village through Korean Story Readings is a treasured part of our festival — a tradition we hope to carry on for many years to come.',
  },
  {
    name: 'Soundbox',
    slug: 'soundbox',
    designation: 'Community & Performance Arts Sponsor',
    description:
      'Soundbox is a Houston-based dance studio offering classes in Hip-Hop, Jazz, Jazz Funk, Contemporary, and more. Their instructors emphasize foundational techniques, retention hacks, and musicality while empowering students to feel confident in their dance skills.',
  },
]

const individualSupporters = ['Sue & Randy Sim', 'Thuy & John Kim']

// ─── Components ───────────────────────────────────────────────────────────────
function SponsorLogo({ sponsor, className = '' }: { sponsor: Sponsor; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src={`/assets/sponsors/${sponsor.slug}.png`}
        alt={sponsor.name}
        fill
        sizes="(max-width: 768px) 80vw, 30vw"
        className="object-contain"
      />
    </div>
  )
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="flex flex-col bg-white border border-[#1a1a1a]/8 p-7 hover:border-[#c9a96e] hover:shadow-lg transition-all duration-300">
      <SponsorLogo sponsor={sponsor} className="h-20 mb-5" />
      {sponsor.designation && (
        <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c9a96e] mb-2.5">
          {sponsor.designation}
        </div>
      )}
      {sponsor.description && (
        <p className="text-[#1a1a1a]/55 text-[13.5px] leading-relaxed tracking-wide">
          {sponsor.description}
        </p>
      )}
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  accent = '#c9a96e',
}: {
  eyebrow: string
  title: string
  accent?: string
}) {
  return (
    <div className="text-center mb-14">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-8 h-px" style={{ backgroundColor: accent }} />
        <span
          className="text-[10px] font-semibold tracking-[0.3em] uppercase font-['Montserrat']"
          style={{ color: accent }}
        >
          {eyebrow}
        </span>
        <div className="w-8 h-px" style={{ backgroundColor: accent }} />
      </div>
      <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1a1a1a]">
        {title}
      </h2>
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="bg-kf-pastel">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-center">
          <span className="inline-block bg-[#FB4E6D] text-white text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-5">
            Partners · 2025
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1a1a1a] leading-[1.05] tracking-tight">
            To Our Generous <em className="not-italic text-[#FB4E6D]">2025 Sponsors</em>
          </h1>
          <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed tracking-wide max-w-2xl mx-auto mt-6">
            We’re grateful for the support we receive from our sponsors and media
            partners — both new and continuing! Every year, our festival has the
            chance to grow bigger because of your partnership. Our festival
            wouldn’t be possible without you.
          </p>
        </div>
      </section>

      {/* ── TITLE SPONSOR ────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
              {titleSponsor.designation}
            </span>
          </div>
          <div className="mt-8 bg-white border border-[#c9a96e]/30 shadow-sm p-10 md:p-14 flex flex-col items-center text-center">
            <SponsorLogo sponsor={titleSponsor} className="h-24 w-full max-w-md mb-8" />
            <p className="text-[#1a1a1a]/65 text-[16px] leading-relaxed tracking-wide max-w-2xl">
              {titleSponsor.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── GLOBAL SPONSORS ──────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-24 border-t border-[#1a1a1a]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="With Support From" title="Global Sponsors" accent="#FB4E6D" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {globalSponsors.map((s) => (
              <SponsorCard key={s.slug} sponsor={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICIAL SPONSORS ────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Proudly Partnered With" title="Official Sponsors" accent="#10C9AC" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {officialSponsors.map((s) => (
              <SponsorCard key={s.slug} sponsor={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLIC FUNDING (HAA / CITY OF HOUSTON) ───────────────────────── */}
      <section className="bg-[#2E4057] py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1">
              <SponsorLogo
                sponsor={{ name: 'Houston Arts Alliance', slug: 'houston-arts-alliance' }}
                className="h-24 bg-white border border-white/10 p-4"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-[#c9a96e] text-[15px] font-semibold tracking-wide mb-3">
                We are proud to be funded in part by the City of Houston through
                Houston Arts Alliance.
              </p>
              <p className="text-white/60 text-[14px] leading-relaxed tracking-wide">
                Houston Arts Alliance (HAA) is a local arts and culture nonprofit
                whose principal work is to implement the City of Houston’s vision,
                values, and goals for its arts grantmaking and civic art
                investments — overseen by the Mayor’s Office of Cultural Affairs.
                In short, HAA helps artists and nonprofits be bold, productive, and
                strong!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY SPONSORS ───────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-24 border-t border-[#1a1a1a]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Rooted in Community" title="Community Sponsors" accent="#8B6FFB" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communitySponsors.map((s) => (
              <SponsorCard key={s.slug} sponsor={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL SUPPORTERS ────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-20 border-t border-[#1a1a1a]/8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-2xl mb-3">❤️</div>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c9a96e] font-['Montserrat'] mb-8">
            A Special Thank You to Our Community Members for Their Financial Support
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-x-12 gap-y-3">
            {individualSupporters.map((name) => (
              <span
                key={name}
                className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-semibold text-[#1a1a1a]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BECOME A SPONSOR CTA ─────────────────────────────────────────── */}
      <section className="bg-linear-to-br from-[#FBBF24] via-[#FB4E6D] to-[#8B6FFB] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-3xl mb-4">🤝</div>
          <span className="inline-block text-[10px] font-semibold tracking-[0.3em] uppercase text-white/90 font-['Montserrat'] mb-4">
            Partner With Us
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-white mb-4">
            Interested in Sponsoring?
          </h2>
          <p className="text-white/85 text-[15px] leading-relaxed tracking-wide max-w-xl mx-auto mb-9">
            Join us in celebrating Korean culture in the heart of Houston. We’d
            love to explore a partnership that fits your organization — reach out
            and our team will be in touch.
          </p>
          <a
            href={`mailto:${SPONSOR_EMAIL}?subject=Korean%20Festival%20Houston%20Sponsorship%20Inquiry`}
            className="inline-block bg-white text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            Email {SPONSOR_EMAIL}
          </a>
        </div>
      </section>
    </>
  )
}
