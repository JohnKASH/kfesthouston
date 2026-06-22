import type { MetadataRoute } from 'next'
import { SITE_URL } from './lib/links'

// Static list of routes. When you add a new page, add it here so search engines
// discover it. Higher priority = more important relative to other pages.
const routes: {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/schedule', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/headliners', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/vendors/food', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/vendors/non-food', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/vendors/apply', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sponsors', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/history', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/about/staff', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/about/volunteer', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faqs', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
