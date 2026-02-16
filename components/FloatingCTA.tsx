'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('floatingCtaDismissed')
    if (dismissed) {
      setIsMinimized(true)
    }

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClose = () => {
    setIsMinimized(true)
    sessionStorage.setItem('floatingCtaDismissed', 'true')
  }

  const handleReopen = () => {
    setIsMinimized(false)
    sessionStorage.removeItem('floatingCtaDismissed')
  }

  if (!hasScrolled) return null

  const affiliateLink = 'https://www.yescapa.fr/campervan-hire/irlande?ae=620&aev=vanecosse'

  // Minimized version - small button to reopen
  if (isMinimized) {
    return (
      <button
        onClick={handleReopen}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in"
        aria-label="Voir les offres de location de van"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </button>
    )
  }

  // Full version
  return (
    <div className="fixed bottom-4 right-4 z-40 animate-slide-up">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-2xl p-4 max-w-xs relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-500 rounded-full shadow-md hover:text-gray-700 transition-colors flex items-center justify-center"
          aria-label="Fermer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Louez votre van</p>
            <p className="text-emerald-100 text-xs">À partir de 65€/jour</p>
          </div>
        </div>

        <a
          href={affiliateLink}
          target="_blank"
          rel="sponsored noopener"
          className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-sand-400 text-emerald-900 font-semibold rounded-lg hover:bg-sand-300 transition-all duration-300 text-sm"
        >
          Voir les offres
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
