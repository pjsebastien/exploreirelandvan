import Link from 'next/link'

export interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  variant?: 'light' | 'dark'
}

export default function Breadcrumb({ items, variant = 'dark' }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href ? `https://www.exploreIrelandvan.com${item.href}` : undefined,
    })),
  }

  const isLight = variant === 'light'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Fil d'Ariane" className="py-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className={`w-4 h-4 mx-2 ${isLight ? 'text-white/60' : 'text-gray-400'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isLight
                      ? 'text-white/80 hover:text-white'
                      : 'text-emerald-600 hover:text-emerald-800'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <span className={isLight ? 'text-white' : 'text-gray-600'}>
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
