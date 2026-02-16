'use client'

import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface Stat {
  value: string
  label: string
  icon?: React.ReactNode
}

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumbItems: BreadcrumbItem[]
  image: string
  imageAlt: string
  stats?: Stat[]
  ctaText?: string
  ctaLink?: string
  badge?: string
  overlay?: 'dark' | 'gradient' | 'emerald'
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbItems,
  image,
  imageAlt,
  stats,
  ctaText,
  ctaLink,
  badge,
  overlay = 'gradient',
}: PageHeroProps) {
  const overlayClasses = {
    dark: 'bg-black/60',
    gradient: 'bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-emerald-900/70',
    emerald: 'bg-emerald-900/80',
  }

  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-12 md:py-16">
        <Breadcrumb items={breadcrumbItems} variant="light" />

        <div className="mt-6 max-w-3xl">
          {badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sand-400 text-emerald-900 mb-4 animate-fade-in">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight animate-slide-up">
            {title}
          </h1>

          <p className="text-base md:text-lg text-emerald-100 leading-relaxed mb-6 animate-slide-up animation-delay-100">
            {subtitle}
          </p>

          {ctaText && ctaLink && (
            <div className="animate-slide-up animation-delay-200">
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-sand-400 text-emerald-900 font-semibold rounded-lg hover:bg-sand-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
              >
                {ctaText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-slide-up animation-delay-300">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <div className="flex items-center gap-2">
                  {stat.icon && (
                    <div className="w-8 h-8 bg-sand-400/20 rounded-lg flex items-center justify-center text-sand-400 group-hover:bg-sand-400 group-hover:text-emerald-900 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  )}
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-emerald-200">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
