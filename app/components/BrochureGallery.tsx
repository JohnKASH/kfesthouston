'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

type Page = {
  src: string
  /** Short label shown under the image and on the thumbnail. */
  label: string
  alt: string
}

/**
 * The printed 2026 festival brochure, page by page.
 *
 * Deliberately does NOT wrap around: Previous is disabled on page 1 and Next is
 * disabled on page 9, so flipping through feels like a physical booklet rather
 * than an endless carousel.
 *
 * Page labels avoid repeating the year printed on the schedule pages — the
 * artwork reads "2025" on pages 4–8, which is a typo in the source file.
 */
const pages: Page[] = [
  {
    src: '/assets/Brochure/1.png',
    label: 'Cover',
    alt: 'Korean Festival Houston 2026 brochure cover, presented by Kroger, with the festival sponsor logos',
  },
  {
    src: '/assets/Brochure/2.png',
    label: 'Letter from the Consulate',
    alt: 'Welcome letter from Kyung-eun Lee, Consul General of the Republic of Korea in Houston',
  },
  {
    src: '/assets/Brochure/3.png',
    label: 'Letter from KASH',
    alt: 'Welcome letter from Janet Hong, President of the Korean-American Society of Houston',
  },
  {
    src: '/assets/Brochure/4.png',
    label: 'Kroger Stage · Saturday',
    alt: 'Kroger Stage Saturday performance schedule, including the headliner schedule with RE:WIND at 6:30 PM and Big Ocean at 7:30 PM',
  },
  {
    src: '/assets/Brochure/5.png',
    label: 'K-Showcase · Saturday',
    alt: 'Kroger Stage Saturday K-Showcase line-up, 5 PM to 6 PM',
  },
  {
    src: '/assets/Brochure/6.png',
    label: 'Hyundai Stage · Saturday',
    alt: 'Hyundai Stage Saturday performance schedule and K-Showcase line-up',
  },
  {
    src: '/assets/Brochure/7.png',
    label: 'Kroger Stage · Sunday',
    alt: 'Kroger Stage Sunday performance schedule and the K-Pop Dance Competition line-up',
  },
  {
    src: '/assets/Brochure/8.png',
    label: 'Hyundai Stage · Sunday',
    alt: 'Hyundai Stage Sunday performance schedule and K-Showcase line-up',
  },
  {
    src: '/assets/Brochure/9.png',
    label: 'Festival Map',
    alt: 'Map of the Korean Festival Houston grounds showing food vendors, merchandise vendors, both stages, K-Village, the VIP tent, restrooms, and the information booth',
  },
]

const PAGE_WIDTH = 1366
const PAGE_HEIGHT = 768

export default function BrochureGallery({
  /** Page to open on, 1-based. Defaults to the cover. */
  startPage = 1,
}: {
  startPage?: number
}) {
  const last = pages.length - 1
  const [index, setIndex] = useState(() =>
    Math.min(last, Math.max(0, startPage - 1)),
  )
  const touchStartX = useRef<number | null>(null)

  const atStart = index === 0
  const atEnd = index === last
  const current = pages[index]

  // Clamped on purpose — the gallery stops at both ends instead of looping.
  const go = (to: number) => setIndex(Math.min(last, Math.max(0, to)))

  // Keep the neighbouring pages mounted so Previous/Next feel instant without
  // pulling all nine full-size images on load.
  const isMounted = (i: number) => Math.abs(i - index) <= 1

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) go(delta < 0 ? index + 1 : index - 1)
    touchStartX.current = null
  }

  return (
    <div
      className="outline-none"
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Festival brochure pages"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          go(index + 1)
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault()
          go(index - 1)
        }
      }}
    >
      {/* ── Current page ─────────────────────────────────────────────────── */}
      <div
        className="relative rounded-2xl overflow-hidden border border-[#1a1a1a]/8 shadow-sm bg-white"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-video">
          {pages.map((p, i) =>
            isMounted(i) ? (
              <a
                key={p.src}
                href={p.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={i !== index}
                tabIndex={i === index ? 0 : -1}
                className={`absolute inset-0 transition-opacity duration-200 ${
                  i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                title="Open this page full size"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={PAGE_WIDTH}
                  height={PAGE_HEIGHT}
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="w-full h-full object-contain"
                />
              </a>
            ) : null,
          )}
        </div>

        {/* Previous / Next — disabled at the ends, never wrapping */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={atStart}
          aria-label="Previous page"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-[#1a1a1a] shadow-md flex items-center justify-center hover:bg-white disabled:opacity-0 disabled:pointer-events-none transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={atEnd}
          aria-label="Next page"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-[#1a1a1a] shadow-md flex items-center justify-center hover:bg-white disabled:opacity-0 disabled:pointer-events-none transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Page counter */}
        <div className="absolute bottom-3 right-3 bg-[#1a1a1a]/75 text-white text-[11px] font-semibold tracking-widest px-3 py-1.5 rounded-full">
          {index + 1} / {pages.length}
        </div>
      </div>

      {/* ── Caption + full-size link ─────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
        <div
          aria-live="polite"
          className="font-semibold text-[#1a1a1a] text-[15px]"
        >
          {current.label}
        </div>
        <a
          href={current.src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#8B6FFB] hover:text-[#1a1a1a] transition-colors"
        >
          ⤢ Open Full Size
        </a>
      </div>

      {/* ── Thumbnails ───────────────────────────────────────────────────── */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {pages.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Page ${i + 1}: ${p.label}`}
            aria-current={i === index ? 'true' : undefined}
            className={`relative shrink-0 w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              i === index
                ? 'border-[#8B6FFB] opacity-100'
                : 'border-transparent opacity-55 hover:opacity-90'
            }`}
          >
            <Image
              src={p.src}
              alt=""
              width={PAGE_WIDTH}
              height={PAGE_HEIGHT}
              sizes="80px"
              className="w-full h-full object-cover bg-white"
            />
          </button>
        ))}
      </div>

      <p className="text-[#1a1a1a]/45 text-[13px] tracking-wide mt-2">
        Swipe, use the arrows, or tap a thumbnail. Tap any page to open it full
        size for zooming.
      </p>
    </div>
  )
}
