import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sponsors · Korean Festival Houston',
  alternates: { canonical: '/sponsors' },
  description:
    'Korean Festival Houston is made possible by our generous 2026 sponsors, media partners, and community supporters. Thank you for your partnership.',
}

const SPONSOR_EMAIL = 'sponsors@kashouston.org'

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

const platinumSponsors: Sponsor[] = [
  {
    name: 'Hyundai',
    slug: 'hyundai',
    designation: 'Platinum Sponsor',
    description:
      'Hyundai has grown from a single Korean automaker into one of the world’s most recognized mobility brands — and its commitment to the communities it serves runs just as deep. We’re proud to have Hyundai alongside us as we celebrate Korean culture in the heart of Houston.',
  },
  {
    name: 'Consulate General of the Republic of Korea',
    slug: 'consulate-general-korea',
    designation: 'Platinum Sponsor',
    description:
      'Our festival’s success greatly relies on the support from the Consulate General of the Republic of Korea. Their contribution to our festival and the Korean-American community has played a crucial role in creating a significant impact.',
  },
]

const goldSponsors: Sponsor[] = [
  {
    name: 'Ben & Jerry’s',
    slug: 'ben-and-jerrys',
    designation: 'Gold Sponsor',
    description:
      'Ben & Jerry’s has been making euphoric ice cream — and standing up for the communities it serves — since 1978. We’re thrilled to have them join the festival and bring a few scoops of joy to Discovery Green.',
  },
  {
    name: 'JINRO',
    slug: 'jinro',
    designation: 'Gold Sponsor',
    description:
      'JINRO is a world No.1 selling spirit brand. According to the International Wine and Spirits Research (IWSR), JINRO has topped Drinks International’s Millionaire Club as the world’s largest spirit brand by volume for 20 consecutive years.',
  },
  {
    name: 'aT America',
    slug: 'at-america',
    designation: 'Gold Sponsor',
    description:
      'aT America is the U.S. regional headquarters of Korea Agro-Fisheries & Food Trade Corporation, with branch offices in New York and Los Angeles. Founded in 1967, the government agency is entrusted with promoting the trade, exportation, and marketing of Korean foods and beverages around the world.',
  },
  {
    name: 'Seoulside Wings',
    slug: 'seoulside-wings',
    designation: 'Gold Sponsor',
    description:
      'Seoulside Wings is a vibrant Korean street food spot in Houston known for bold flavors and crispy double-fried chicken wings. Founded by Jane Lim and her brothers, it blends Korean culinary traditions with Houston’s diverse food scene — from spicy Hotbokki wings to loaded Kimchi Fries and Bulgogi Cupbap bowls — now serving dine-in at the Conservatory Galleria.',
  },
]

const silverSponsors: Sponsor[] = [
  {
    name: 'Southwestern National Bank',
    slug: 'swnb',
    designation: 'Silver Sponsor',
    description:
      'Southwestern National Bank strives to be the premier business bank through innovative financial solutions, dedicated relationship management, cutting-edge technology, and a deep understanding of its customers’ evolving needs.',
  },
]

const scholarshipSponsors: Sponsor[] = [
  {
    name: 'SNOWFOX',
    slug: 'snowfox',
    designation: 'Scholarship Sponsor',
    description:
      'SNOWFOX sushi products can be found in grocery stores across the country — convenient choices like cooked and raw sushi, as well as party platters. These ready-to-eat items are ideal for quick meals, social gatherings, and dining on the go, guaranteeing quality and freshness in every bite.',
  },
  {
    name: 'Retail Sports Management',
    slug: 'retail-sports-management',
    designation: 'Scholarship Sponsor',
    description:
      'Retail Sports Management backs our scholarship program, helping us invest directly in the next generation of Korean-American students in the Houston area. Their support turns a weekend celebration into something that lasts well beyond October.',
  },
]

const communitySponsors: Sponsor[] = [
  {
    name: 'American First National Bank',
    slug: 'american-first-national-bank',
    designation: 'Community Sponsor',
    description:
      'American First National Bank aspires to become the leading Asian-American owned financial institution in the United States — committed to the highest ethical standards, operating safely and soundly, and complying with laws and regulations.',
  },
  {
    name: 'Publicom Graphics Printing',
    slug: 'publicom-graphics-printing',
    designation: 'In-Kind Partner',
    description:
      'Publicom Graphics Printing produces the signage, banners, and printed materials that guide tens of thousands of visitors through the festival grounds. If you can find your way around K-Fest, you have Publicom to thank.',
  },
  {
    name: 'American Furniture Warehouse',
    slug: 'american-furniture-warehouse',
    designation: 'In-Kind Partner',
    description:
      'We’re excited to partner with American Furniture Warehouse as the official furniture store of our festival! VIP festival-goers will get to enjoy their comfortable, luxurious furniture in our VIP tent.',
  },
]

const entertainmentPartners: Sponsor[] = [
  {
    name: 'KorUS Entertainment',
    slug: 'korus-entertainment',
    designation: 'Entertainment Partner',
    description:
      'KorUS Entertainment brings Korean artists to stages across the United States. They’re the team behind our headline programming, working year-round to put world-class talent on the K-Fest main stage.',
  },
  {
    name: 'Parastar Entertainment',
    slug: 'parastar-entertainment',
    designation: 'Entertainment Partner',
    description:
      'Parastar Entertainment is a Seoul-based agency dedicated to artists with disabilities — building a world, in their words, where disability is no longer a barrier to the stage. We’re honored to feature their artists at K-Fest.',
  },
]

const pastSupporters: Sponsor[] = [
  { name: 'Chariot Energy', slug: 'chariot-energy' },
  { name: 'Big Star Honda', slug: 'big-star-honda' },
  { name: 'BUBBL’R', slug: 'bubblr' },
  { name: 'AARP', slug: 'aarp' },
  { name: 'Capital Vacations', slug: 'capital-vacations' },
  { name: 'PromiseOne Bank', slug: 'promiseone-bank' },
  { name: 'Golden Minds Insurance Group', slug: 'golden-minds-insurance' },
  { name: 'Houston Public Library', slug: 'houston-public-library' },
  { name: 'Soundbox', slug: 'soundbox' },
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
            Partners · 2026
          </span>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1a1a1a] leading-[1.05] tracking-tight">
            To Our Generous <em className="not-italic text-[#FB4E6D]">2026 Sponsors</em>
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
      <section className="bg-[#faf8f5] py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-5 mb-5">
              <div className="w-12 md:w-20 h-px bg-[#c9a96e]" />
              <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#c9a96e] font-['Montserrat']">
                Presented By
              </span>
              <div className="w-12 md:w-20 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-[1.05] tracking-tight">
              Our <em className="not-italic text-[#c9a96e]">{titleSponsor.designation}</em>
            </h2>
          </div>
          <div className="bg-white border-2 border-[#c9a96e]/40 shadow-xl p-12 md:p-16 flex flex-col items-center text-center">
            <SponsorLogo sponsor={titleSponsor} className="h-28 md:h-36 w-full max-w-lg mb-10" />
            <p className="text-[#1a1a1a]/65 text-[16px] md:text-[17px] leading-relaxed tracking-wide max-w-2xl">
              {titleSponsor.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── PLATINUM SPONSORS ────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-24 border-t border-[#1a1a1a]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="With Support From" title="Platinum Sponsors" accent="#FB4E6D" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platinumSponsors.map((s) => (
              <SponsorCard key={s.slug} sponsor={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD SPONSORS ────────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Proudly Partnered With" title="Gold Sponsors" accent="#c9a96e" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {goldSponsors.map((s) => (
              <SponsorCard key={s.slug} sponsor={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SILVER SPONSORS ──────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-24 border-t border-[#1a1a1a]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Proudly Partnered With" title="Silver Sponsors" accent="#10C9AC" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {silverSponsors.map((s) => (
              <SponsorCard key={s.slug} sponsor={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOLARSHIP SPONSORS ─────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Investing in Our Students" title="Scholarship Sponsors" accent="#8B6FFB" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {scholarshipSponsors.map((s) => (
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

      {/* ── COMMUNITY & IN-KIND ──────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-24 border-t border-[#1a1a1a]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Rooted in Community"
            title="Community & In-Kind Partners"
            accent="#FBBF24"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {communitySponsors.map((s) => (
              <SponsorCard key={s.slug} sponsor={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERTAINMENT PARTNERS ───────────────────────────────────────── */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Bringing the Stage to Life" title="Entertainment Partners" accent="#FB4E6D" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {entertainmentPartners.map((s) => (
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

      {/* ── PAST SUPPORTERS ──────────────────────────────────────────────── */}
      <section className="bg-[#f5f0eb] py-20 border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#1a1a1a]/40 font-['Montserrat']">
              With Gratitude
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1a1a1a] mt-3">
              Past Festival Supporters
            </h2>
            <p className="text-[#1a1a1a]/50 text-[14px] leading-relaxed tracking-wide max-w-xl mx-auto mt-4">
              K-Fest is built on years of partnership. We’re grateful to every
              organization that has helped bring the festival to Houston.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pastSupporters.map((s) => (
              <div
                key={s.slug}
                className="bg-white/70 border border-[#1a1a1a]/8 p-5 hover:bg-white transition-colors duration-300"
              >
                <SponsorLogo sponsor={s} className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-300" />
              </div>
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
