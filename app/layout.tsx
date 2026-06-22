import type { Metadata, Viewport } from 'next'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import { SITE_URL } from './lib/links'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Korean Festival Houston',
  description:
    'The annual Korean Festival Houston at Discovery Green — celebrating Korean culture, food, and performance in the heart of Houston. October 10–11, 2026. Free admission.',
  applicationName: 'Korean Festival Houston',
  keywords: [
    'Korean Festival',
    'Korean Festival Houston',
    'KFest Houston',
    'Houston Korean Festival',
    'Discovery Green',
    'K-culture',
    'K-pop',
    'Korean food',
    'Korean music',
    'KASH',
    'Houston events',
    'October 2026',
  ],
  authors: [{ name: 'Korean American Society of Houston' }],
  creator: 'Korean American Society of Houston',
  publisher: 'Korean American Society of Houston',
  category: 'events',
  alternates: { canonical: '/' },
  // No title/description here on purpose — each page derives its og:/twitter:
  // title + description from its own `title` and `description` fields, while
  // still inheriting the shared image, url, and siteName below.
  openGraph: {
    url: SITE_URL,
    siteName: 'Korean Festival Houston',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/HomepageImages/Drummers.png',
        width: 2500,
        height: 1667,
        alt: 'Traditional Korean drummers performing at Korean Festival Houston',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/HomepageImages/Drummers.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#FB4E6D',
}

// Organization-level structured data (helps Google understand who runs the site
// and connect it to our social profiles + parent organization, KASH).
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Korean Festival Houston',
  alternateName: 'KFest Houston',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logos/KASHLogo.png`,
  description:
    'The annual Korean Festival Houston at Discovery Green — celebrating Korean culture, food, and performance in the heart of Houston.',
  sameAs: [
    'https://www.instagram.com/kfesthtx/',
    'https://www.facebook.com/kfesthouston/',
    'https://www.tiktok.com/@kfesthtx',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Korean American Society of Houston',
    alternateName: 'KASH',
    url: 'https://www.kashouston.org/',
    sameAs: ['https://www.kashouston.org/'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="font-['Montserrat'] bg-[#f5f0eb] text-[#1a1a1a] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
