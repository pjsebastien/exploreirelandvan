import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.exploreIrelandvan.com'),
  title: {
    default: 'Location Van Irlande | Road Trip en Van',
    template: '%s | ExploreIrelandVan',
  },
  description: 'Découvrez l\'Irlande en van aménagé. Guide expert pour votre location de van en Irlande : itinéraires, prix, conseils et meilleurs spots pour un road trip inoubliable.',
  keywords: ['location van irlande', 'road trip irlande', 'van aménagé irlande', 'camping car irlande', 'wild atlantic way van'],
  authors: [{ name: 'ExploreIrelandVan' }],
  creator: 'ExploreIrelandVan',
  publisher: 'ExploreIrelandVan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.exploreIrelandvan.com',
    siteName: 'ExploreIrelandVan',
    title: 'Location Van Irlande | Road Trip en Van',
    description: 'Découvrez l\'Irlande en van aménagé. Guide expert pour votre location de van en Irlande.',
    images: [
      {
        url: '/images/van-nature-irlande.jpg',
        width: 1200,
        height: 630,
        alt: 'Van aménagé sur la Wild Atlantic Way en Irlande',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location Van Irlande | ExploreIrelandVan',
    description: 'Découvrez l\'Irlande en van aménagé. Guide expert pour votre road trip.',
    images: ['/images/van-nature-irlande.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.exploreIrelandvan.com',
  },
  verification: {
    google: 'votre-code-verification-google',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <FloatingCTA />
      </body>
    </html>
  )
}
