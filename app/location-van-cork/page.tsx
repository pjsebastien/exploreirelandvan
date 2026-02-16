import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata: Metadata = {
  title: 'Location Van Cork | Loueurs et Conseils',
  description: 'Louez votre van à Cork : accès direct au Ring of Kerry, meilleurs loueurs, conseils pratiques et itinéraires au départ du sud-ouest irlandais.',
  alternates: {
    canonical: 'https://www.exploreIrelandvan.com/location-van-cork/',
  },
}

export default function LocationCorkPage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Location Van Cork' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Location Van Cork',
            description: 'Guide pour louer un van à Cork.',
            author: { '@type': 'Organization', name: 'ExploreIrelandVan' },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative py-20 gradient-ocean">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} variant="light" />
          <div className="max-w-3xl mt-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-sand-400 text-emerald-900 px-4 py-1 rounded-full text-sm font-semibold">Porte du Sud-Ouest</span>
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm">Ring of Kerry à 1h30</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Location Van Cork
            </h1>
            <p className="text-xl text-ocean-100 leading-relaxed">
              Cork est le point de départ idéal pour explorer le sud-ouest irlandais : Ring of Kerry, péninsule de Dingle et début de la Wild Atlantic Way à portée de main.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Pourquoi partir de Cork ?"
            subtitle="Les avantages de louer votre van dans la deuxième ville d'Irlande."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Position stratégique</h3>
              <p className="text-gray-600 text-sm">Accès direct au Ring of Kerry et à la Wild Atlantic Way</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Moins d'affluence</h3>
              <p className="text-gray-600 text-sm">Alternative à Dublin avec une atmosphère plus locale</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Ambiance authentique</h3>
              <p className="text-gray-600 text-sm">Découvrez le charme de la "vraie capitale" selon les Corkoniens</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Vols directs</h3>
              <p className="text-gray-600 text-sm">Aéroport international avec connexions européennes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-8 text-center">
              Distances depuis Cork
            </h2>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-ocean-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Destination</th>
                    <th className="px-6 py-4 text-center">Distance</th>
                    <th className="px-6 py-4 text-center">Temps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Killarney (Ring of Kerry)</td>
                    <td className="px-6 py-4 text-center">85 km</td>
                    <td className="px-6 py-4 text-center">1h15</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Dingle</td>
                    <td className="px-6 py-4 text-center">140 km</td>
                    <td className="px-6 py-4 text-center">2h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Falaises de Moher</td>
                    <td className="px-6 py-4 text-center">250 km</td>
                    <td className="px-6 py-4 text-center">3h</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Galway</td>
                    <td className="px-6 py-4 text-center">210 km</td>
                    <td className="px-6 py-4 text-center">2h30</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Dublin</td>
                    <td className="px-6 py-4 text-center">260 km</td>
                    <td className="px-6 py-4 text-center">3h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cork City */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <h2>Découvrir Cork avant de partir</h2>
            <p>
              Avant de prendre la route, prenez le temps d'explorer <strong>Cork</strong>, la deuxième ville d'Irlande. Les Corkoniens la considèrent comme la "vraie capitale" avec une fierté assumée et un accent bien particulier.
            </p>
            <p>
              Le centre-ville est construit sur une île entre deux bras de la rivière Lee. Flânez dans le <strong>English Market</strong>, un marché couvert historique où vous pourrez acheter des produits locaux pour votre road trip. Visitez la <strong>cathédrale St. Fin Barre</strong> et montez au clocher de <strong>Shandon</strong> pour sonner les cloches et profiter de la vue.
            </p>
            <p>
              La scène culinaire de Cork est réputée comme l'une des meilleures d'Irlande. Profitez d'un dernier repas au restaurant avant de partir sur les routes : les produits de la mer y sont exceptionnels.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Trouvez votre van à Cork"
            description="Comparez les offres des loueurs de Cork et partez à la découverte du sud-ouest irlandais."
          />
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Préparez votre itinéraire" />
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/wild-atlantic-way-van/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Wild Atlantic Way
                </h3>
                <p className="text-gray-600 text-sm">
                  La route mythique qui commence à quelques km de Cork.
                </p>
              </div>
            </Link>
            <Link href="/location-van-dublin/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Location van Dublin
                </h3>
                <p className="text-gray-600 text-sm">
                  Alternative si vous arrivez par la capitale.
                </p>
              </div>
            </Link>
            <Link href="/prix-location-van-irlande/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Prix et budget
                </h3>
                <p className="text-gray-600 text-sm">
                  Comparez les tarifs et estimez votre budget.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
