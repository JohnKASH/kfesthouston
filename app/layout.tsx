import type { Metadata } from 'next'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'

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
  title: 'Korean Festival Houston',
  description:
    'The annual Korean Festival Houston at Discovery Green — celebrating Korean culture, food, and performance in the heart of Houston.',
  keywords: ['Korean Festival', 'Houston', 'Discovery Green', 'K-culture', 'Korean food', 'Korean music'],
  openGraph: {
    title: 'Korean Festival Houston',
    description: 'October 10–11, 2026 · Discovery Green · Free Admission',
    url: 'https://kfesthouston.org',
    siteName: 'Korean Festival Houston',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="font-['Montserrat'] bg-[#f5f0eb] text-[#1a1a1a] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
