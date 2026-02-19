import Link from 'next/link'

interface AffiliateCTAProps {
  title?: string
  description?: string
  buttonText?: string
  variant?: 'default' | 'compact' | 'banner'
}

export default function AffiliateCTA({
  title = 'Trouvez votre van idéal en Irlande',
  description = 'Comparez les meilleures offres de location de van auprès de loueurs vérifiés. Réservation flexible et annulation gratuite.',
  buttonText = 'Voir les disponibilités',
  variant = 'default',
}: AffiliateCTAProps) {
  const affiliateLink = 'https://www.yescapa.fr/campervan-hire/irlande?ae=620&aev=vanecosse'

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-4 4v-4m-8 8h16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">{title}</p>
              <p className="text-sm text-white/80">Dès 65€/jour - Annulation gratuite</p>
            </div>
          </div>
          <a
            href={affiliateLink}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="btn-cta whitespace-nowrap"
          >
            {buttonText}
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-emerald-800 mb-1">{title}</p>
            <p className="text-sm text-emerald-700 mb-3">{description}</p>
            <a
              href={affiliateLink}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              {buttonText}
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-sand-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-4 4v-4m-8 8h16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-white/80 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={affiliateLink}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="btn-cta"
          >
            {buttonText}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <Link
            href="/prix-location-van-irlande/"
            className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            Comparer les prix
          </Link>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Annulation gratuite • Assurance incluse • Support 24/7
        </p>
      </div>
    </div>
  )
}
