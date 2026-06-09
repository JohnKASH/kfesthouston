import type { Metadata } from 'next'
import PagePlaceholder from '@/app/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Performance Schedule · Korean Festival Houston',
}

export default function Page() {
  return <PagePlaceholder eyebrow="Program" title="Performance Schedule" />
}
