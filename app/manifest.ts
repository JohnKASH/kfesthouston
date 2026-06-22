import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Korean Festival Houston',
    short_name: 'K-Fest Houston',
    description:
      'The annual Korean Festival Houston at Discovery Green — celebrating Korean culture, food, and performance in the heart of Houston.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f0eb',
    theme_color: '#FB4E6D',
    icons: [
      {
        src: '/assets/logos/KASHLogo.png',
        sizes: '612x396',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
