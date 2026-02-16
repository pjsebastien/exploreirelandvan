'use client'

import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  images?: Array<{ src: string; alt: string }>
  stats?: Array<{ value: string; label: string; icon?: React.ReactNode }>
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  images,
  stats,
  backgroundImage = '/images/van-nature-irlande.jpg',
}: HeroProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[650px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Paysage irlandais"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/90 to-emerald-900/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sand-400 text-emerald-900 mb-4 animate-fade-in">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              Explorez l'île d'émeraude
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight animate-slide-up">
              {title}
            </h1>

            <p className="text-base md:text-lg text-emerald-100 mb-6 leading-relaxed animate-slide-up animation-delay-100">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 animate-slide-up animation-delay-200">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sand-400 text-emerald-900 font-semibold rounded-lg hover:bg-sand-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                >
                  {ctaText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-slide-up animation-delay-300">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default"
                  >
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-emerald-200">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Images Grid */}
          {images && images.length > 0 && (
            <div className="hidden lg:block animate-slide-in-right animation-delay-200">
              <div className="grid grid-cols-2 gap-3">
                {images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className={`relative rounded-xl overflow-hidden shadow-xl group ${
                      index === 0 ? 'h-36' : index === 1 ? 'h-48' : index === 2 ? 'h-48' : 'h-36'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
