interface SeasonCardProps {
  title: string
  months: string
  priceRange: string
  recommended?: boolean
  icon: 'sun' | 'leaf' | 'snowflake'
  color: 'red' | 'green' | 'blue'
  advantages: string[]
}

export default function SeasonCard({
  title,
  months,
  priceRange,
  recommended = false,
  icon,
  color,
  advantages,
}: SeasonCardProps) {
  const colorClasses = {
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      iconBg: 'bg-red-100',
      iconText: 'text-red-500',
      badge: 'bg-red-500',
    },
    green: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      iconBg: 'bg-emerald-100',
      iconText: 'text-emerald-500',
      badge: 'bg-emerald-500',
    },
    blue: {
      bg: 'bg-ocean-50',
      border: 'border-ocean-200',
      iconBg: 'bg-ocean-100',
      iconText: 'text-ocean-500',
      badge: 'bg-ocean-500',
    },
  }

  const colors = colorClasses[color]

  const icons = {
    sun: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    leaf: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    snowflake: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  }

  return (
    <div className={`relative rounded-xl ${colors.bg} border ${colors.border} p-6 transition-transform duration-300 hover:-translate-y-1`}>
      {recommended && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${colors.badge} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
          Recommandé
        </div>
      )}

      <div className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <div className={colors.iconText}>
          {icons[icon]}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-center text-emerald-900 mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-500 text-center mb-4">
        {months}
      </p>

      <div className="text-center mb-4">
        <span className="text-2xl font-bold text-emerald-700">{priceRange}</span>
        <span className="text-gray-500 text-sm">/jour</span>
      </div>

      <ul className="space-y-2">
        {advantages.map((advantage, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{advantage}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
