import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'
import LinkCard from '@/components/LinkCard'

export const metadata: Metadata = {
  title: 'Location Van Dublin | Loueurs, prix et récupération aéroport',
  description: 'Louez votre van à Dublin : meilleurs loueurs, récupération à l\'aéroport, conseils pratiques et itinéraires au départ de la capitale irlandaise.',
  alternates: {
    canonical: 'https://www.exploreirelandvan.com/location-van-dublin/',
  },
  openGraph: {
    title: 'Location Van Dublin | Loueurs, prix et récupération aéroport',
    description: 'Louez votre van à Dublin : meilleurs loueurs, récupération à l\'aéroport, conseils pratiques et itinéraires au départ de la capitale irlandaise.',
    url: 'https://www.exploreirelandvan.com/location-van-dublin/',
    type: 'article',
    images: [
      {
        url: 'https://www.exploreirelandvan.com/images/van-paysage-vert.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location Van Dublin | Loueurs, prix et récupération aéroport',
    description: 'Louez votre van à Dublin : meilleurs loueurs, récupération à l\'aéroport, conseils pratiques et itinéraires au départ de la capitale irlandaise.',
    images: ['https://www.exploreirelandvan.com/images/van-paysage-vert.jpg'],
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
            headline: "Location van Dublin : loueurs et récupération à l'aéroport",
            description: "Louez votre van à Dublin : meilleurs loueurs, récupération à l'aéroport, conseils pratiques et itinéraires au départ de la capitale irlandaise.",
            image: 'https://www.exploreirelandvan.com/images/van-paysage-vert.jpg',
            author: { '@type': 'Organization', name: 'ExploreIrelandVan' },
            publisher: {
              '@type': 'Organization',
              name: 'ExploreIrelandVan',
              logo: { '@type': 'ImageObject', url: 'https://www.exploreirelandvan.com/images/favicon.png' },
            },
            datePublished: '2025-01-15',
            dateModified: '2025-02-16',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.exploreirelandvan.com/location-van-dublin/' },
          }),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Location Van Dublin : le guide complet"
        subtitle="Dublin est le principal point de départ pour votre road trip en van en Irlande. Découvrez les meilleurs loueurs, les options de récupération à l'aéroport et les itinéraires possibles depuis la capitale."
        breadcrumbItems={breadcrumbItems}
        image="/images/collines-vertes.jpg"
        imageAlt="Collines vertes irlandaises, paysage typique au départ de Dublin en van"
        badge="15+ loueurs"
        stats={[
          {
            value: '15+',
            label: 'Loueurs disponibles',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
          },
          {
            value: '10km',
            label: 'Aéroport-centre',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            ),
          },
          {
            value: '65€',
            label: 'Par jour dès',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
          {
            value: '360°',
            label: 'Accès toute l\'Irlande',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
        ]}
        ctaText="Comparer les vans"
        ctaLink="/prix-location-van-irlande/"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p className="lead text-xl">
              La <strong>location de van à Dublin</strong> est le choix le plus populaire pour les voyageurs qui souhaitent découvrir l'Irlande en toute liberté. Avec plus de quinze loueurs implantés dans la capitale et à proximité de l'aéroport, Dublin offre le plus grand choix de véhicules de toute l'île.
            </p>
            <p>
              Que vous arriviez en avion à l'<strong>aéroport de Dublin</strong> (DUB) ou par ferry depuis le Royaume-Uni, la capitale irlandaise constitue un point de départ stratégique. Située sur la côte est, elle permet de rejoindre aussi bien la <strong>côte nord sauvage</strong> et la Chaussée des Géants que l'ouest mythique avec Galway et les falaises de Moher, ou encore le sud-ouest avec le <strong>Ring of Kerry</strong> et la péninsule de Dingle.
            </p>
            <p>
              Dublin concentre également la majorité des <strong>vols low-cost européens</strong> vers l'Irlande, ce qui en fait le choix logistique le plus simple pour débuter votre <Link href="/road-trip-irlande-van/" className="text-emerald-600 hover:text-emerald-800">road trip en van</Link>. Prenez le temps de flâner dans le quartier de Temple Bar ou de visiter le Trinity College avant de prendre la route : vous ne le regretterez pas.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Pourquoi partir de Dublin ?"
            subtitle="Les avantages de louer votre van dans la capitale irlandaise."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Plus grand choix</h3>
              <p className="text-gray-600 text-sm">15+ loueurs avec une large gamme de véhicules : vans compacts, fourgons aménagés et camping-cars pour tous les budgets.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Meilleurs prix</h3>
              <p className="text-gray-600 text-sm">La concurrence entre loueurs garantit des tarifs compétitifs, souvent 10 à 20% moins chers que dans les villes secondaires.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Flexibilité totale</h3>
              <p className="text-gray-600 text-sm">Position centrale sur la côte est : partez vers le nord, le sud ou l'ouest selon vos envies et la durée de votre séjour.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Accès aéroport</h3>
              <p className="text-gray-600 text-sm">Navettes gratuites depuis les terminaux et récupération simplifiée à 10 minutes de l'aéroport international de Dublin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Rental Companies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Les meilleurs loueurs de van à Dublin"
            subtitle="Notre sélection de loueurs fiables pour votre road trip en Irlande au départ de Dublin."
          />

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="space-y-6">
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Loueurs spécialisés campervans</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Des entreprises comme <strong>Bunk Campers</strong>, <strong>Irish Camper Hire</strong> ou <strong>Campervan Ireland</strong> sont spécialisées dans la location de vans aménagés. Leurs véhicules sont équipés pour la vie nomade : lit, cuisine, eau, électricité. C'est le choix idéal pour un <strong>road trip en van en Irlande</strong> tout confort.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Prix indicatif :</strong> 80 à 150 euros/jour selon la saison et le modèle.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ocean-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Plateformes de location entre particuliers</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Des sites comme <strong>Yescapa</strong> ou <strong>Goboony</strong> permettent de louer des vans directement auprès de propriétaires irlandais. Les prix sont souvent plus attractifs et les véhicules plus personnalisés, avec un accueil chaleureux et des conseils locaux en prime.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Prix indicatif :</strong> 65 à 120 euros/jour, souvent avec kilométrage illimité.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Grands loueurs internationaux</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Des enseignes comme <strong>Indie Campers</strong> ou <strong>McRent</strong> proposent des flottes modernes et standardisées avec un service client multilingue. Pratique si vous souhaitez un processus de réservation et de restitution simplifié.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Prix indicatif :</strong> 90 à 170 euros/jour avec assurance complète incluse.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Location de van low-cost</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Pour les petits budgets, certains loueurs proposent des vans plus anciens mais fonctionnels. C'est une excellente option pour les voyageurs qui passent peu de temps dans le véhicule et privilégient l'exploration extérieure.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Prix indicatif :</strong> 50 à 80 euros/jour, vérifiez bien l'état du véhicule au départ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/van-route-panoramique.jpg"
                  alt="Van aménagé sur une route panoramique irlandaise au départ de Dublin"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="bg-sand-100 border border-sand-300 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-900 mb-3">Conseils pour la récupération à l'aéroport</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span><strong>Navette loueur :</strong> La plupart offrent un service gratuit depuis l'aéroport. Prévoyez 20-30 minutes pour rejoindre le dépôt.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span><strong>Livraison au terminal :</strong> Certains loueurs premium proposent de livrer le van directement (supplément 30-50 euros).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span><strong>Horaires :</strong> Réservez un créneau laissant au moins 2h après votre atterrissage pour les formalités douanières et bagages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span><strong>Documents :</strong> Permis de conduire valide, carte de crédit au nom du conducteur et bon de réservation imprimé.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <AffiliateCTA
            variant="compact"
            title="Comparez les vans disponibles à Dublin"
            buttonText="Voir les disponibilités"
          />
        </div>
      </section>

      {/* Itineraries */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Itinéraires au départ de Dublin"
            subtitle="Trois directions possibles pour votre road trip en van depuis la capitale irlandaise."
          />

          <div className="space-y-12">
            {/* North Coast */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-ocean-100 text-ocean-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Direction Nord</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">La côte nord et l'Irlande du Nord</h3>
                <p className="text-gray-600 mb-4">
                  Cap au nord pour découvrir la <strong>Chaussée des Géants</strong> (Giant's Causeway), l'une des merveilles naturelles de l'Europe. Cet itinéraire traverse l'Irlande du Nord avec ses paysages côtiers spectaculaires, le pont de corde de Carrick-a-Rede et les lieux de tournage de Game of Thrones.
                </p>
                <p className="text-gray-600 mb-4">
                  Continuez vers le <strong>Donegal</strong>, le comté le plus sauvage d'Irlande, avec les falaises de Slieve League et <strong>Malin Head</strong>, le point le plus septentrional de l'île. Un itinéraire idéal pour les voyageurs en quête de solitude et de paysages grandioses.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                    Dublin - Belfast : 2h (170 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                    Belfast - Giant's Causeway : 1h30 (100 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                    Giant's Causeway - Donegal : 2h (150 km)
                  </li>
                </ul>
                <Link href="/road-trip-irlande-van/" className="btn-secondary">
                  Voir nos circuits nord
                </Link>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/vue-panoramique.jpg"
                  alt="Vue panoramique sur la côte nord de l'Irlande depuis un van"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* West Coast */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src="/images/van-campagne.jpg"
                  alt="Van aménagé dans la campagne de l'ouest irlandais"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Direction Ouest</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">La côte ouest et la Wild Atlantic Way</h3>
                <p className="text-gray-600 mb-4">
                  L'itinéraire le plus populaire au départ de Dublin traverse le coeur de l'Irlande jusqu'à <strong>Galway</strong>, ville vibrante et bohème, avant de longer la <strong><Link href="/wild-atlantic-way-van/" className="text-emerald-600 hover:text-emerald-800">Wild Atlantic Way</Link></strong>. Les <strong>falaises de Moher</strong>, le Connemara sauvage et le Burren lunaire vous attendent.
                </p>
                <p className="text-gray-600 mb-4">
                  Prévoyez au minimum 7 jours pour cet itinéraire si vous souhaitez prendre le temps d'explorer. La route entre Dublin et Galway par la M6 se fait en 2h30, mais nous recommandons de faire un détour par <strong>Clonmacnoise</strong>, site monastique médiéval sur les rives du Shannon.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Dublin - Galway : 2h30 (210 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Galway - Cliffs of Moher : 1h30 (80 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Cliffs of Moher - Killarney : 3h (250 km)
                  </li>
                </ul>
                <Link href="/wild-atlantic-way-van/" className="btn-primary">
                  Découvrir la Wild Atlantic Way
                </Link>
              </div>
            </div>

            {/* South Coast */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-sand-200 text-sand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Direction Sud</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Le sud-est et la côte du sud</h3>
                <p className="text-gray-600 mb-4">
                  Moins connu mais tout aussi captivant, l'itinéraire sud vous emmène vers <strong>Kilkenny</strong> et son château médiéval, puis <strong>Waterford</strong>, la plus ancienne ville d'Irlande, avant de rejoindre <strong><Link href="/location-van-cork/" className="text-emerald-600 hover:text-emerald-800">Cork</Link></strong> et le sud-ouest. C'est l'option idéale si vous souhaitez combiner culture, histoire et paysages côtiers.
                </p>
                <p className="text-gray-600 mb-4">
                  En chemin, ne manquez pas le <strong>Rock of Cashel</strong>, impressionnant ensemble de ruines médiévales perché sur une colline, et les plages sauvages de la côte du Wexford. Depuis Cork, vous accéderez facilement au <strong>Ring of Kerry</strong> et à la péninsule de Dingle.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sand-500 rounded-full"></span>
                    Dublin - Kilkenny : 1h30 (130 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sand-500 rounded-full"></span>
                    Kilkenny - Cork : 2h (150 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sand-500 rounded-full"></span>
                    Cork - Ring of Kerry : 1h30 (110 km)
                  </li>
                </ul>
                <Link href="/itineraire-irlande-10-jours-van/" className="btn-secondary">
                  Voir l'itinéraire 10 jours
                </Link>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/van-route-panoramique.jpg"
                  alt="Route panoramique vers le sud de l'Irlande en van aménagé"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Conseils pratiques pour Dublin en van
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Stationnement en ville</h3>
              <p className="text-emerald-100">
                Évitez de vous garer en centre-ville avec un grand van. Privilégiez les parkings en périphérie (Luas Red/Green Line) et utilisez les transports en commun pour rejoindre le centre. Le parking du parc de Phoenix est gratuit et sûr.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Circulation à Dublin</h3>
              <p className="text-emerald-100">
                Le trafic dublinois peut être dense aux heures de pointe (7h-9h et 17h-19h). Récupérez votre van en milieu de journée et quittez Dublin en évitant la M50 Ring Road aux heures chargées. Le péage du M50 est automatique.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Conduite à gauche</h3>
              <p className="text-emerald-100">
                Première expérience de la conduite à gauche ? Dublin n'est pas l'endroit idéal pour s'y habituer. Familiarisez-vous en roulant vers Howth ou Bray, deux destinations côtières proches avec des routes tranquilles.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Première nuit</h3>
              <p className="text-emerald-100">
                Passez votre première nuit au camping Camac Valley (à 20 min de l'aéroport) pour vous familiariser avec le van en toute tranquillité. Vous pouvez aussi trouver des emplacements à Howth ou Malahide.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Approvisionnement</h3>
              <p className="text-emerald-100">
                Faites vos courses avant de quitter Dublin. Les supermarchés Lidl, Aldi et Tesco sont bien implantés et offrent un excellent rapport qualité-prix. Les épiceries en zone rurale sont plus limitées et plus chères.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Péages</h3>
              <p className="text-emerald-100">
                Les autoroutes irlandaises sont à péage (M1, M4, M6, M50). Le péage du M50 est automatique : enregistrez votre passage sur eflow.ie dans les 24h. Les autres péages se paient en espèces ou par carte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Budget location van Dublin"
              subtitle="Fourchettes de prix par saison pour la location d'un van aménagé à Dublin."
            />

            <div className="bg-emerald-50 rounded-2xl p-6 md:p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-emerald-200">
                      <th className="px-4 py-3 text-left text-emerald-900 font-semibold">Saison</th>
                      <th className="px-4 py-3 text-center text-emerald-900 font-semibold">Période</th>
                      <th className="px-4 py-3 text-center text-emerald-900 font-semibold">Prix/jour</th>
                      <th className="px-4 py-3 text-center text-emerald-900 font-semibold">10 jours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-200">
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-700">Basse saison</td>
                      <td className="px-4 py-3 text-center text-gray-600">Nov - Mars</td>
                      <td className="px-4 py-3 text-center font-semibold text-emerald-700">50 - 80 €</td>
                      <td className="px-4 py-3 text-center text-gray-600">500 - 800 €</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-700">Moyenne saison</td>
                      <td className="px-4 py-3 text-center text-gray-600">Avr - Mai / Sept - Oct</td>
                      <td className="px-4 py-3 text-center font-semibold text-emerald-700">80 - 120 €</td>
                      <td className="px-4 py-3 text-center text-gray-600">800 - 1 200 €</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-700">Haute saison</td>
                      <td className="px-4 py-3 text-center text-gray-600">Juin - Août</td>
                      <td className="px-4 py-3 text-center font-semibold text-emerald-700">120 - 180 €</td>
                      <td className="px-4 py-3 text-center text-gray-600">1 200 - 1 800 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                * Prix indicatifs pour un van aménagé 2 places. Les camping-cars plus grands (4-6 places) peuvent coûter 30 à 50% de plus. Réservez au moins 3 mois à l'avance en haute saison pour obtenir les meilleurs tarifs.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/prix-location-van-irlande/" className="btn-secondary">
                Guide complet des prix en Irlande
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Trouvez votre van idéal à Dublin"
            description="Comparez les offres des 15+ loueurs dublinois. Réservation simple, annulation flexible et assistance en français."
          />
        </div>
      </section>

      {/* Related Guides */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Guides associés"
            subtitle="Poursuivez la préparation de votre road trip irlandais avec nos guides détaillés."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <LinkCard
              href="/location-van-cork/"
              title="Location van Cork"
              description="Partez directement du sud-ouest : accès immédiat au Ring of Kerry, à la péninsule de Dingle et à la Wild Atlantic Way depuis Cork."
              imageSrc="/images/cote-rocheuse.jpg"
              imageAlt="Côte rocheuse près de Cork en Irlande"
              badge="Alternative"
            />
            <LinkCard
              href="/prix-location-van-irlande/"
              title="Prix location van Irlande"
              description="Comparez les tarifs par saison, type de véhicule et loueur. Tous nos conseils pour réduire le coût de votre location."
              imageSrc="/images/van-campagne.jpg"
              imageAlt="Van aménagé dans la campagne irlandaise"
              badge="Budget"
            />
            <LinkCard
              href="/itineraire-irlande-10-jours-van/"
              title="Itinéraire 10 jours en van"
              description="Le circuit idéal au départ de Dublin : Galway, Connemara, falaises de Moher et Ring of Kerry jour par jour avec spots de nuit."
              imageSrc="/images/route-panoramique.jpg"
              imageAlt="Route panoramique à travers la campagne irlandaise"
              badge="Populaire"
            />
          </div>
        </div>
      </section>
    </>
  )
}
