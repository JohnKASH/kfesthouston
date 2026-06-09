import type { Metadata } from 'next'
import PagePlaceholder from '@/app/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'News & Blog · Korean Festival Houston',
}

export default function Page() {
  return <PagePlaceholder eyebrow="Updates" title="News & Blog" />
}
