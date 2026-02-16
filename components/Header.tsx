'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-irlande-van/' },
  { name: 'Itinéraire 10 jours', href: '/itineraire-irlande-10-jours-van/' },
  { name: 'Wild Atlantic Way', href: '/wild-atlantic-way-van/' },
  { name: 'Dormir en van', href: '/dormir-en-van-irlande/' },
  { name: 'Prix', href: '/prix-location-van-irlande/' },
  { name: 'FAQ', href: '/faq-location-van-irlande/' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/images/favicon.png"
                alt="ExploreIrelandVan"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-serif font-bold text-emerald-800">Explore</span>
              <span className="text-lg md:text-xl font-serif font-bold text-sand-500">Ireland</span>
              <span className="text-lg md:text-xl font-serif font-bold text-emerald-800">Van</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/prix-location-van-irlande/"
              className="ml-4 btn-primary text-sm py-2"
            >
              Voir les offres
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-emerald-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/prix-location-van-irlande/"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Voir les offres
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
