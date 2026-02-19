import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'
import SeasonCard from '@/components/SeasonCard'
import PriceTable from '@/components/PriceTable'
import LinkCard from '@/components/LinkCard'

export const metadata: Metadata = {
  title: 'Prix location van Irlande dès 65€/jour',
  description: 'Découvrez les prix de location de van en Irlande. Comparatif par saison, type de véhicule, astuces pour économiser et budget complet pour votre road trip.',
  alternates: {
    canonical: 'https://www.exploreirelandvan.com/prix-location-van-irlande/',
  },
  openGraph: {
    title: 'Prix location van Irlande dès 65€/jour',
    description: 'Découvrez les prix de location de van en Irlande. Comparatif par saison, type de véhicule et astuces pour économiser.',
    url: 'https://www.exploreirelandvan.com/prix-location-van-irlande/',
    type: 'article',
    images: [
      {
        url: 'https://www.exploreirelandvan.com/images/van-campagne.jpg',
        width: 1200,
        height: 630,
        alt: 'Van aménagé garé dans la campagne irlandaise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prix location van Irlande dès 65€/jour',
    description: 'Découvrez les prix de location de van en Irlande. Comparatif par saison, type de véhicule, astuces pour économiser et budget complet pour votre road trip.',
    images: ['https://www.exploreirelandvan.com/images/van-campagne.jpg'],
  },
}

const vehicleTypes = [
  {
    vehicle: 'Van compact (2 places)',
    capacity: '2 adultes',
    equipment: 'Lit, cuisine basique, eau',
    priceRange: '65-90€',
  },
  {
    vehicle: 'Van aménagé standard',
    capacity: '2-3 personnes',
    equipment: 'Lit, cuisine, douche option',
    priceRange: '90-120€',
  },
  {
    vehicle: 'Van familial',
    capacity: '4-5 personnes',
    equipment: 'Multi-couchages, cuisine équipée',
    priceRange: '120-160€',
  },
  {
    vehicle: 'Camping-car intégral',
    capacity: '4-6 personnes',
    equipment: 'Tout équipé, salle de bain',
    priceRange: '150-200€',
  },
]

const seasons = [
  {
    title: 'Haute saison',
    months: 'Juillet - Août',
    priceRange: '120-180€',
    icon: 'sun' as const,
    color: 'red' as const,
    advantages: [
      'Journées très longues (22h de clarté)',
      'Météo la plus clémente',
      'Tous les sites ouverts',
      'Ambiance festive (festivals)',
    ],
  },
  {
    title: 'Moyenne saison',
    months: 'Mai - Juin - Septembre',
    priceRange: '80-120€',
    icon: 'leaf' as const,
    color: 'green' as const,
    recommended: true,
    advantages: [
      'Meilleur rapport qualité-prix',
      'Moins de touristes',
      'Météo agréable',
      'Disponibilité des vans',
    ],
  },
  {
    title: 'Basse saison',
    months: 'Octobre - Avril',
    priceRange: '50-80€',
    icon: 'snowflake' as const,
    color: 'blue' as const,
    advantages: [
      'Tarifs les plus bas',
      'Irlande authentique',
      'Lumières hivernales',
      'Pubs sans la foule',
    ],
  },
]

export default function PrixPage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Prix Location Van Irlande' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Prix location van Irlande : combien ça coûte vraiment ?',
            description: 'Découvrez les prix de location de van en Irlande. Comparatif par saison, type de véhicule, astuces pour économiser et budget complet pour votre road trip.',
            image: 'https://www.exploreirelandvan.com/images/van-campagne.jpg',
            author: { '@type': 'Organization', name: 'ExploreIrelandVan' },
            publisher: {
              '@type': 'Organization',
              name: 'ExploreIrelandVan',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.exploreirelandvan.com/images/favicon.png',
              },
            },
            datePublished: '2025-01-15',
            dateModified: '2026-02-19',
            inLanguage: 'fr',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.exploreirelandvan.com/prix-location-van-irlande/',
            },
          }),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Prix location van Irlande : combien ça coûte vraiment ?"
        subtitle="Tous les tarifs de location de van en Irlande : comparatif par saison, type de véhicule et astuces pour optimiser votre budget road trip."
        breadcrumbItems={breadcrumbItems}
        image="/images/van-campagne.jpg"
        imageAlt="Van aménagé garé dans la campagne irlandaise"
        badge="Tarifs actualisés"
        stats={[
          {
            value: '65€',
            label: 'À partir de /jour',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
          {
            value: '500€',
            label: 'Caution moyenne',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
          },
          {
            value: '30%',
            label: 'Économie hors saison',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            ),
          },
          {
            value: '15+',
            label: 'Loueurs comparés',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
          },
        ]}
        ctaText="Comparer les offres"
        ctaLink="#tarifs"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p className="lead text-xl">
              Le <strong>prix d'une location de van en Irlande</strong> dépend principalement de trois facteurs : la saison de votre voyage, le type de véhicule choisi et la durée de location. En comprenant ces variables, vous pourrez optimiser votre budget et profiter pleinement de votre road trip.
            </p>
            <p>
              Les tarifs que nous présentons sont des moyennes observées sur le marché irlandais. Ils incluent généralement l'assurance de base, le kilométrage illimité et l'équipement standard du van. Les prix peuvent varier selon les loueurs et les offres promotionnelles disponibles.
            </p>
          </div>
        </div>
      </section>

      {/* Season Cards */}
      <section className="section-padding bg-gray-50" id="tarifs">
        <div className="container-custom">
          <SectionTitle
            title="Tarifs par saison"
            subtitle="Les prix varient significativement selon la période de votre voyage. Voici notre analyse des différentes saisons."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {seasons.map((season, index) => (
              <SeasonCard key={index} {...season} />
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 rounded-xl p-6 md:p-8 border border-emerald-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">Notre recommandation</h3>
                <p className="text-gray-600">
                  Pour un premier voyage en Irlande, privilégiez <strong>mai-juin ou septembre</strong>. Ces périodes offrent le meilleur équilibre entre prix attractifs, météo agréable et affluence modérée. Vous bénéficierez de journées longues tout en évitant la foule estivale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="section-padding bg-white" id="vehicules">
        <div className="container-custom">
          <SectionTitle
            title="Prix par type de véhicule"
            subtitle="Du van compact au camping-car familial, trouvez le véhicule adapté à vos besoins et votre budget."
          />

          <PriceTable
            title="Tarifs moyens par type de véhicule"
            rows={vehicleTypes}
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Van compact (2 places)</h3>
              <p className="text-gray-600 mb-4">
                Idéal pour les couples ou voyageurs solo. Facile à conduire sur les routes étroites irlandaises. Généralement équipé d'un lit convertible, d'un réchaud et d'un réservoir d'eau basique.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Maniabilité optimale</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Consommation réduite</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Stationnement facile</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Van aménagé standard</h3>
              <p className="text-gray-600 mb-4">
                Le choix le plus populaire. Offre un bon compromis entre confort et praticité. Cuisine équipée, lit fixe et souvent option douche. Convient aux couples et petites familles.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Meilleur rapport qualité-prix</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Confort suffisant</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Autonomie correcte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Comparez les offres de location"
            description="Trouvez le van idéal au meilleur prix. Notre partenaire regroupe les offres de plusieurs loueurs pour vous faciliter la comparaison."
          />
        </div>
      </section>

      {/* Additional Costs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Frais annexes à prévoir"
            subtitle="Au-delà du tarif de location, d'autres coûts sont à intégrer dans votre budget."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Assurance</h3>
              <p className="text-gray-600 text-sm mb-3">
                L'assurance de base est incluse mais une réduction de franchise (CDW) est recommandée.
              </p>
              <p className="font-semibold text-emerald-600">15-25€/jour</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Caution</h3>
              <p className="text-gray-600 text-sm mb-3">
                Bloquée sur votre carte bancaire au départ et restituée au retour sans dommages.
              </p>
              <p className="font-semibold text-emerald-600">500-1500€</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Carburant</h3>
              <p className="text-gray-600 text-sm mb-3">
                Le diesel en Irlande coûte environ 1,60€/L. Comptez 8-12L/100km selon le van.
              </p>
              <p className="font-semibold text-emerald-600">~15€/100km</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Kit camping</h3>
              <p className="text-gray-600 text-sm mb-3">
                Draps, oreillers, vaisselle... Souvent proposé en option par les loueurs.
              </p>
              <p className="font-semibold text-emerald-600">30-50€/location</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Conducteur additionnel</h3>
              <p className="text-gray-600 text-sm mb-3">
                Ajouter un second conducteur pour partager la conduite.
              </p>
              <p className="font-semibold text-emerald-600">5-10€/jour</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">GPS / WiFi</h3>
              <p className="text-gray-600 text-sm mb-3">
                Optionnel mais pratique. Utilisez plutôt Google Maps hors ligne.
              </p>
              <p className="font-semibold text-emerald-600">5-15€/jour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Example */}
      <section className="section-padding bg-emerald-900 text-white" id="budget">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Budget global pour 10 jours
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Estimation pour 2 personnes en moyenne saison</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Location van standard (10 jours x 90€)</span>
                  <span className="font-semibold">900€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Assurance complémentaire (10 jours x 15€)</span>
                  <span className="font-semibold">150€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Carburant (~1400 km)</span>
                  <span className="font-semibold">180€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Campings / Aires (10 nuits)</span>
                  <span className="font-semibold">150€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Alimentation (courses + restaurants)</span>
                  <span className="font-semibold">300€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span>Activités / Visites</span>
                  <span className="font-semibold">120€</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-sand-400 text-emerald-900 rounded-lg px-4 mt-4">
                  <span className="font-bold text-lg">TOTAL</span>
                  <span className="font-bold text-xl">~1800€ (900€/pers.)</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-emerald-100 text-center">
                Hors vols et caution (restituée). Budget économique possible à partir de 1300€ pour 2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips to Save */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Astuces pour économiser"
            subtitle="Nos conseils pour optimiser votre budget sans sacrifier la qualité de votre voyage."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-emerald-600">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Réservez tôt ou en dernière minute</h3>
                <p className="text-gray-600 text-sm">
                  Les réservations anticipées (3+ mois) bénéficient souvent de réductions. Sinon, les offres de dernière minute peuvent être intéressantes hors saison.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-emerald-600">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Privilégiez la moyenne saison</h3>
                <p className="text-gray-600 text-sm">
                  Mai-juin et septembre offrent des tarifs 30-40% inférieurs à juillet-août avec une météo souvent aussi bonne.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-emerald-600">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Alternez camping et spots gratuits</h3>
                <p className="text-gray-600 text-sm">
                  Les aires gratuites et spots sauvages autorisés permettent d'économiser sur l'hébergement tout en vivant des expériences uniques.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-emerald-600">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Cuisinez dans le van</h3>
                <p className="text-gray-600 text-sm">
                  Faire ses courses au supermarché et cuisiner la plupart des repas réduit considérablement le budget alimentation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-emerald-600">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Évitez les options inutiles</h3>
                <p className="text-gray-600 text-sm">
                  GPS, WiFi portable... Ces options s'additionnent vite. Utilisez votre smartphone avec des cartes téléchargées hors ligne.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-emerald-600">6</span>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Comparez les loueurs</h3>
                <p className="text-gray-600 text-sm">
                  Les tarifs varient significativement d'un loueur à l'autre. Utilisez notre comparateur pour trouver la meilleure offre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Trouvez votre van au meilleur prix"
            description="Comparez les offres de plusieurs loueurs irlandais en quelques clics. Réservation flexible et garantie meilleur prix."
            buttonText="Voir les disponibilités"
          />
        </div>
      </section>

      {/* Guides associés */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Guides associés"
            subtitle="Complétez votre préparation avec nos autres guides pratiques."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LinkCard
              href="/road-trip-irlande-van/"
              title="Road trip Irlande en van"
              description="Circuits détaillés, conseils pratiques et étapes incontournables pour votre aventure irlandaise."
              imageSrc="/images/van-route-panoramique.jpg"
              imageAlt="Van sur une route panoramique irlandaise"
            />
            <LinkCard
              href="/itineraire-irlande-10-jours-van/"
              title="Itinéraire 10 jours"
              description="Notre circuit recommandé jour par jour pour découvrir les incontournables de l'Irlande."
              imageSrc="/images/falaises-cote.jpg"
              imageAlt="Falaises impressionnantes sur la côte irlandaise"
              badge="Populaire"
            />
            <LinkCard
              href="/dormir-en-van-irlande/"
              title="Où dormir en van"
              description="Aires, campings, spots sauvages : tout savoir sur le stationnement nocturne en Irlande."
              imageSrc="/images/van-paysage-vert.jpg"
              imageAlt="Van aménagé face aux paysages verdoyants d'Irlande"
            />
          </div>
        </div>
      </section>
    </>
  )
}
