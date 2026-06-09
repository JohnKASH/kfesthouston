import type { Metadata } from 'next'
import PagePlaceholder from '@/app/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Contact Us · Korean Festival Houston',
}

export default function Page() {
  return <PagePlaceholder eyebrow="Get in Touch" title="Contact Us" />
}
