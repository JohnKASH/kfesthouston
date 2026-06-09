import type { Metadata } from 'next'
import PagePlaceholder from '@/app/components/PagePlaceholder'

export const metadata: Metadata = {
  title: 'Non-Food Vendors · Korean Festival Houston',
}

export default function Page() {
  return (
    <PagePlaceholder eyebrow="Vendors" title="Food Vendors" description='Vendor applications are opening soon! 
    For vendor related inquiries, please contact vendors@kashouston.org' />
  )
}
