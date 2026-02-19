import Link from 'next/link'
import Image from 'next/image'

interface LinkCardProps {
  href: string
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  badge?: string
}

export default function LinkCard({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  badge,
}: LinkCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {badge && (
            <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {badge}
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-emerald-900 group-hover:text-emerald-600 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {description}
        </p>
        <span className="inline-flex items-center text-sm font-medium text-emerald-600 group-hover:text-emerald-800">
          En savoir plus
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
