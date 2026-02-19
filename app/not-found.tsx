import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Page introuvable
          </p>
          <p className="text-gray-500 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/road-trip-irlande-van/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              Découvrir nos guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
