import type { Metadata } from 'next'
import PagePlaceholder from '@/app/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'News & Blog · Korean Festival Houston',
  description:
    'The latest news, announcements, and updates from Korean Festival Houston — headliner reveals, vendor news, and festival highlights.',
  alternates: { canonical: '/news' },
}

export default function Page() {
  return <PagePlaceholder eyebrow="Updates" title="News & Blog" />
}
