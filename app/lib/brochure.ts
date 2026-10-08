import fs from 'node:fs'
import path from 'node:path'

/**
 * The printed festival brochure, read straight from `public/assets/Brochure/`.
 *
 * Pages are discovered from the folder at build time and sorted by the number
 * in the file name, so updating the brochure is a file operation, not a code
 * change: drop in `1.png … 9.png`, delete one, or add a tenth, and the site
 * follows. Nothing here needs editing to add or remove a page.
 *
 * The only reason to touch this file is to improve the caption and alt text for
 * a page — see `details` below.
 */

const BROCHURE_DIR = path.join(process.cwd(), 'public', 'assets', 'Brochure')
const PUBLIC_PATH = '/assets/Brochure'

/** Brochure artwork is exported at 1366 x 768 (16:9). */
export const PAGE_WIDTH = 1366
export const PAGE_HEIGHT = 768

/**
 * The file name used for the festival site map. When this page is present it is
 * also shown on its own at the top of /festival-map, so a scanned QR code puts
 * the map on screen with no tapping.
 */
const MAP_FILE = '9.png'

/**
 * Captions and alt text, keyed by file name. A file with no entry here still
 * appears in the gallery — it just gets a plain "Page N" caption, so adding
 * artwork never breaks the page.
 */
const details: Record<string, { label: string; alt: string }> = {
  '1.png': {
    label: 'Cover',
    alt: 'Korean Festival Houston 2026 brochure cover, presented by Kroger, with the festival sponsor logos',
  },
  '2.png': {
    label: 'Letter from the Consulate',
    alt: 'Welcome letter from Kyung-eun Lee, Consul General of the Republic of Korea in Houston',
  },
  '3.png': {
    label: 'Letter from KASH',
    alt: 'Welcome letter from Janet Hong, President of the Korean-American Society of Houston',
  },
  '4.png': {
    label: 'Kroger Stage · Saturday',
    alt: 'Kroger Stage schedule for Saturday, October 10, 2026, including the headliner schedule with RE:WIND at 6:30 PM and Big Ocean at 7:30 PM',
  },
  '5.png': {
    label: 'K-Showcase · Saturday',
    alt: 'Kroger Stage K-Showcase line-up for Saturday, October 10, 2026, 5 PM to 6 PM',
  },
  '6.png': {
    label: 'Hyundai Stage · Saturday',
    alt: 'Hyundai Stage schedule and K-Showcase line-up for Saturday, October 10, 2026',
  },
  '7.png': {
    label: 'Kroger Stage · Sunday',
    alt: 'Kroger Stage schedule for Sunday, October 11, 2026, with the Big Ocean and RE:WIND fan meeting and the K-Pop Dance Competition line-up',
  },
  '8.png': {
    label: 'Hyundai Stage · Sunday',
    alt: 'Hyundai Stage schedule and K-Showcase line-up for Sunday, October 11, 2026',
  },
  [MAP_FILE]: {
    label: 'Festival Map',
    alt: 'Map of the Korean Festival Houston grounds showing food vendors, merchandise vendors, both stages, K-Village, the VIP tent, restrooms, and the information booth',
  },
}

export type BrochurePage = {
  /** File name, e.g. "4.png" — also the key used in `details`. */
  file: string
  src: string
  label: string
  alt: string
}

/** Sorts "2.png" before "10.png" rather than alphabetically. */
function pageNumber(file: string): number {
  const match = file.match(/\d+/)
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER
}

export function getBrochurePages(): BrochurePage[] {
  let files: string[]
  try {
    files = fs.readdirSync(BROCHURE_DIR)
  } catch {
    // Folder missing entirely — the gallery simply doesn't render.
    return []
  }

  return files
    .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    .sort((a, b) => pageNumber(a) - pageNumber(b) || a.localeCompare(b))
    .map((file, i) => ({
      file,
      src: `${PUBLIC_PATH}/${file}`,
      label: details[file]?.label ?? `Page ${i + 1}`,
      alt:
        details[file]?.alt ??
        `Page ${i + 1} of the Korean Festival Houston 2026 program`,
    }))
}

/**
 * The festival site map, or null when that artwork isn't in the folder — in
 * which case /festival-map falls back to a "map coming soon" card instead of
 * linking a missing image.
 */
export function getFestivalMapPage(): BrochurePage | null {
  return getBrochurePages().find((p) => p.file === MAP_FILE) ?? null
}
