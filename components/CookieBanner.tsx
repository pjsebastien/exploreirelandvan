'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Delay showing the banner for a better UX
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'refused')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 md:p-5 max-w-2xl mx-auto md:mx-0">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-gray-900 text-sm">Cookies</span>
              </div>
              <p className="text-gray-600 text-sm">
                Nous utilisons des cookies pour améliorer votre expérience.{' '}
                <Link href="/politique-confidentialite/" className="text-emerald-600 hover:underline">
                  En savoir plus
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={refuseCookies}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
