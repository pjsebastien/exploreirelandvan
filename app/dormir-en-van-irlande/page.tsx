import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Dormir en van en Irlande | Où passer la nuit ? Aires, spots et campings',
  description: 'Tout savoir pour dormir en van en Irlande : aires de camping-car, campings, spots sauvages autorisés, applications et conseils pour vos nuits irlandaises.',
  alternates: {
    canonical: 'https://www.exploreIrelandvan.com/dormir-en-van-irlande/',
  },
  openGraph: {
    title: 'Dormir en van en Irlande | Où passer la nuit ? Aires, spots et campings',
    description: 'Tout savoir pour dormir en van en Irlande : aires, campings et spots.',
    url: 'https://www.exploreIrelandvan.com/dormir-en-van-irlande/',
    type: 'article',
  },
}

const sleepOptions = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Campings traditionnels',
    description: 'Emplacements avec services complets : électricité, douches, vidange, WiFi. Prix : 20-35€/nuit. Idéal pour recharger batteries et profiter du confort.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Aires de services',
    description: 'Zones dédiées aux camping-cars avec services de base : eau, vidange. Souvent gratuites ou à petit prix (5-15€). Moins de confort mais pratique.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Spots nature',
    description: 'Emplacements isolés avec vue imprenable. Gratuits mais sans services. Vérifiez la légalité et respectez l\'environnement. Expérience authentique garantie.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Chez l\'habitant',
    description: 'Via des plateformes comme Homecamper. Stationnez chez des particuliers irlandais. Rencontres authentiques et souvent accès aux commodités.',
  },
]

const apps = [
  {
    name: 'Park4Night',
    description: 'La référence pour trouver des spots en Europe. Nombreux avis et photos de la communauté vanlife.',
    price: 'Gratuit / Premium 10€/an',
  },
  {
    name: 'Campercontact',
    description: 'Base de données complète des aires et campings avec filtres avancés et avis détaillés.',
    price: 'Gratuit / Premium 5€/an',
  },
  {
    name: 'iOverlander',
    description: 'Spécialisé dans les spots sauvages et hors des sentiers battus. Communauté de voyageurs au long cours.',
    price: 'Gratuit',
  },
  {
    name: 'CamperVan Ireland',
    description: 'Application locale recensant les aires spécifiques à l\'Irlande et les conseils locaux.',
    price: 'Gratuit',
  },
]

export default function DormirPage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Dormir en Van en Irlande' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Dormir en Van en Irlande',
            description: 'Guide complet pour dormir en van en Irlande.',
            author: { '@type': 'Organization', name: 'ExploreIrelandVan' },
            publisher: { '@type': 'Organization', name: 'ExploreIrelandVan' },
            datePublished: '2024-01-01',
            dateModified: '2025-01-15',
          }),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Dormir en van en Irlande : où passer la nuit ?"
        subtitle="Trouvez les meilleurs endroits pour passer la nuit en van : aires officielles, campings de charme, spots sauvages autorisés et conseils pratiques pour vos nuits irlandaises."
        breadcrumbItems={breadcrumbItems}
        image="/images/van-sunset.jpg"
        imageAlt="Van aménagé au coucher du soleil en Irlande"
        badge="Spots de nuit"
        stats={[
          {
            value: '100+',
            label: 'Aires en Irlande',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
          },
          {
            value: '0-35€',
            label: 'Par nuit',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
          {
            value: '4',
            label: 'Apps recommandées',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            ),
          },
          {
            value: '24/7',
            label: 'Accès libre',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
        ]}
        ctaText="Trouver un spot"
        ctaLink="/camping-sauvage-irlande-van/"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p className="lead text-xl">
              L'<strong>Irlande</strong> offre de nombreuses possibilités pour <strong>dormir en van</strong>, des campings bien équipés aux spots sauvages avec vue sur l'océan. Bien que le camping sauvage ne soit pas officiellement autorisé partout, la tolérance irlandaise et le respect mutuel permettent souvent de trouver des emplacements de rêve.
            </p>
            <p>
              Le secret d'un road trip réussi en Irlande réside dans la variété : alternez entre campings confortables pour vous ressourcer et spots nature pour vivre des moments uniques. Les Irlandais sont généralement accueillants envers les voyageurs respectueux, et il n'est pas rare qu'un fermier vous invite à stationner sur son terrain.
            </p>
            <p>
              Ce guide vous présente toutes les options disponibles, des applications indispensables aux bonnes pratiques pour stationner en toute sérénité.
            </p>
          </div>
        </div>
      </section>

      {/* Sleep Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Où passer la nuit ?"
            subtitle="Les différentes options pour dormir en van en Irlande, du camping confortable au spot sauvage."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sleepOptions.map((option, index) => (
              <FeatureCard
                key={index}
                icon={option.icon}
                title={option.title}
                description={option.description}
                variant="centered"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Campings Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-6">
                Campings irlandais
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Les <strong>campings en Irlande</strong> offrent généralement un excellent rapport qualité-prix avec des emplacements spacieux et des vues souvent spectaculaires. Beaucoup disposent de douches chaudes, WiFi, laverie et parfois même d'un bar-restaurant.
                </p>
                <p>
                  Comptez entre <strong>20€ et 35€ par nuit</strong> pour un emplacement standard. Les campings de la <strong>Wild Atlantic Way</strong> sont particulièrement recherchés en été, pensez à réserver à l'avance pendant la haute saison.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Électricité et eau incluses</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sanitaires propres et chauffés</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>WiFi souvent disponible</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Station de vidange</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/van-paysage-vert.jpg"
                alt="Van aménagé face aux paysages verdoyants d'Irlande"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Spots */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/van-ocean.jpg"
                alt="Van garé près de l'océan en Irlande"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-6">
                Spots gratuits et sauvages
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  L'Irlande regorge de spots magnifiques pour passer la nuit gratuitement : parkings côtiers, aires de pique-nique, terrains privés avec accord... La clé est de respecter les lieux et de rester discret.
                </p>
                <p>
                  Utilisez les applications comme <strong>Park4Night</strong> pour trouver des emplacements validés par la communauté. Lisez toujours les commentaires récents pour vérifier que le spot est toujours accessible et toléré.
                </p>
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-amber-800">Attention</h4>
                    <p className="text-sm text-amber-700">
                      Le camping sauvage n'est pas officiellement autorisé partout. Évitez les zones protégées et respectez les panneaux d'interdiction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/camping-sauvage-irlande-van/" className="btn-secondary">
                  Guide camping sauvage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Applications indispensables"
            subtitle="Les meilleures apps pour trouver où dormir en Irlande."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">{app.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{app.description}</p>
                <span className="text-sm font-medium text-emerald-600">{app.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">Conseil pro</h3>
                <p className="text-gray-600">
                  Téléchargez les cartes hors ligne avant votre voyage. La couverture réseau peut être limitée dans les zones reculées de l'ouest irlandais, là où se trouvent souvent les plus beaux spots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Bonnes pratiques pour vos nuits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Arrivez tard, partez tôt</h3>
              <p className="text-emerald-100">
                Sur les spots sauvages, installez-vous après 19h et partez avant 9h. Vous serez plus discret et éviterez les problèmes potentiels.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Restez discret</h3>
              <p className="text-emerald-100">
                Pas de table de camping dehors, pas de musique forte, pas de déchets. Comportez-vous comme si vous étiez invisible.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Respectez l'environnement</h3>
              <p className="text-emerald-100">
                Ne laissez aucune trace de votre passage. Emportez vos déchets et utilisez les aires de vidange appropriées.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Demandez si possible</h3>
              <p className="text-emerald-100">
                Sur un terrain privé, demandez toujours l'autorisation au propriétaire. Les Irlandais sont généralement très accueillants.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Ayez un plan B</h3>
              <p className="text-emerald-100">
                Repérez toujours un camping ou une aire à proximité en cas de problème sur un spot sauvage.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Faites confiance à votre instinct</h3>
              <p className="text-emerald-100">
                Si un endroit ne vous inspire pas confiance, partez. Il y a toujours un autre spot à quelques kilomètres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AffiliateCTA />
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Guides connexes"
            subtitle="Complétez votre préparation avec ces ressources."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/camping-sauvage-irlande-van/" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Camping sauvage en Irlande
                </h3>
                <p className="text-gray-600 text-sm">
                  Réglementation, bonnes pratiques et spots recommandés.
                </p>
              </div>
            </Link>
            <Link href="/itineraire-irlande-10-jours-van/" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Itinéraire 10 jours
                </h3>
                <p className="text-gray-600 text-sm">
                  Circuit jour par jour avec spots de nuit recommandés.
                </p>
              </div>
            </Link>
            <Link href="/prix-location-van-irlande/" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Budget et prix
                </h3>
                <p className="text-gray-600 text-sm">
                  Coût des campings, aires et astuces pour économiser.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
