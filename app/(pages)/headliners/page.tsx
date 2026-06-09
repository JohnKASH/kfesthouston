import type { Metadata } from 'next'
import PagePlaceholder from '@/app/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Headliners · Korean Festival Houston',
}

export default function Page() {
  return <PagePlaceholder eyebrow="Lineup" title="Headliners" />
}
