import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata: Metadata = {
  title: 'Location Van Dublin | Loueurs et Conseils',
  description: 'Louez votre van à Dublin : meilleurs loueurs, récupération à l\'aéroport, conseils pratiques et itinéraires au départ de la capitale irlandaise.',
  alternates: {
    canonical: 'https://www.exploreIrelandvan.com/location-van-dublin/',
  },
}

export default function LocationDublinPage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Location Van Dublin' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Location Van Dublin',
            description: 'Guide pour louer un van à Dublin.',
            author: { '@type': 'Organization', name: 'ExploreIrelandVan' },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative py-20 gradient-emerald">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} variant="light" />
          <div className="max-w-3xl mt-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-sand-400 text-emerald-900 px-4 py-1 rounded-full text-sm font-semibold">15+ loueurs</span>
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm">Aéroport à 10km</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Location Van Dublin
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Dublin est le principal point de départ pour votre road trip en van. Découvrez les meilleurs loueurs, les options de récupération à l'aéroport et les itinéraires possibles.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Pourquoi partir de Dublin ?"
            subtitle="Les avantages de louer votre van dans la capitale irlandaise."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Plus grand choix</h3>
              <p className="text-gray-600 text-sm">15+ loueurs avec une large gamme de véhicules disponibles</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Meilleurs prix</h3>
              <p className="text-gray-600 text-sm">La concurrence entre loueurs garantit des tarifs compétitifs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Flexibilité</h3>
              <p className="text-gray-600 text-sm">Partez vers le nord ou le sud selon vos envies</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Accès aéroport</h3>
              <p className="text-gray-600 text-sm">Navettes gratuites et récupération simplifiée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-8 text-center">
              Récupération à l'aéroport de Dublin
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="prose prose-lg text-gray-600">
                <p>
                  L'<strong>aéroport de Dublin</strong> (DUB) est situé à environ 10 km au nord du centre-ville. La plupart des loueurs de vans proposent une récupération à proximité de l'aéroport, avec des navettes gratuites depuis les terminaux.
                </p>

                <h3>Options de récupération</h3>
                <ul>
                  <li><strong>Navette loueur</strong> : La plupart offrent un service de navette gratuit depuis l'aéroport. Prévoyez 20-30 minutes pour rejoindre leur dépôt.</li>
                  <li><strong>Livraison au terminal</strong> : Certains loueurs premium proposent de vous livrer le van directement à l'aéroport (supplément 30-50€).</li>
                  <li><strong>Dépôt en ville</strong> : Quelques agences sont situées dans Dublin même, accessibles en bus ou taxi.</li>
                </ul>

                <h3>Conseils pratiques</h3>
                <ul>
                  <li>Réservez un créneau de récupération qui laisse une marge après votre atterrissage (comptez 2h minimum)</li>
                  <li>Vérifiez les horaires d'ouverture du loueur, certains ferment tôt le soir</li>
                  <li>Profitez de votre première nuit en camping près de Dublin pour vous familiariser avec le van</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Itinéraires au départ de Dublin"
            subtitle="Les différentes directions possibles pour votre road trip."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-100">
              <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Vers le Sud-Ouest</h3>
              <p className="text-gray-600 mb-4">
                Direction Galway, les falaises de Moher et le Ring of Kerry. L'itinéraire classique pour découvrir les incontournables de l'ouest irlandais.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Dublin → Galway : 2h30
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Galway → Cliffs of Moher : 1h30
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Cliffs of Moher → Killarney : 3h
                </li>
              </ul>
              <Link href="/itineraire-irlande-10-jours-van/" className="btn-primary">
                Voir l'itinéraire 10 jours
              </Link>
            </div>

            <div className="bg-ocean-50 rounded-2xl p-6 md:p-8 border border-ocean-100">
              <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Vers le Nord</h3>
              <p className="text-gray-600 mb-4">
                Direction la Chaussée des Géants, la côte du Donegal et l'Irlande du Nord. Un itinéraire plus sauvage et moins fréquenté.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                  Dublin → Belfast : 2h
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                  Belfast → Giant's Causeway : 1h30
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                  Giant's Causeway → Donegal : 2h
                </li>
              </ul>
              <Link href="/road-trip-irlande-van/" className="btn-secondary">
                Découvrir nos circuits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les vans disponibles à Dublin"
            description="Trouvez le van idéal parmi les 15+ loueurs dublinois. Réservation simple, annulation flexible."
          />
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Autres points de départ" />
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/location-van-cork/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Location van Cork
                </h3>
                <p className="text-gray-600 text-sm">
                  Idéal pour accéder directement au Ring of Kerry et au sud-ouest.
                </p>
              </div>
            </Link>
            <Link href="/prix-location-van-irlande/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Prix et comparatifs
                </h3>
                <p className="text-gray-600 text-sm">
                  Comparez les tarifs selon la saison et le type de véhicule.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
