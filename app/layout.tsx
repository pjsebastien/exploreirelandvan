import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import FloatingCTA from '@/components/FloatingCTA'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.exploreirelandvan.com'),
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
    url: 'https://www.exploreirelandvan.com',
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
    canonical: 'https://www.exploreirelandvan.com',
    languages: {
      'fr': 'https://www.exploreirelandvan.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <FloatingCTA />
      </body>
    </html>
  )
}
