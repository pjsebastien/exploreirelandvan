import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'
import LinkCard from '@/components/LinkCard'

export const metadata: Metadata = {
  title: 'Location van Cork : guide complet',
  description: 'Louez votre van à Cork : accès direct au Ring of Kerry, meilleurs loueurs, conseils pratiques et itinéraires au départ du sud-ouest irlandais.',
  alternates: {
    canonical: 'https://www.exploreirelandvan.com/location-van-cork/',
  },
  openGraph: {
    title: 'Location van Cork : guide complet',
    description: 'Louez votre van à Cork : accès direct au Ring of Kerry, meilleurs loueurs, conseils pratiques et itinéraires au départ du sud-ouest irlandais.',
    url: 'https://www.exploreirelandvan.com/location-van-cork/',
    type: 'article',
    images: [
      {
        url: 'https://www.exploreirelandvan.com/images/collines-vertes.jpg',
        width: 1200,
        height: 630,
        alt: 'Collines vertes du sud-ouest irlandais près de Cork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location van Cork : guide complet',
    description: 'Louez votre van à Cork : accès direct au Ring of Kerry, meilleurs loueurs, conseils pratiques et itinéraires au départ du sud-ouest irlandais.',
    images: ['https://www.exploreirelandvan.com/images/collines-vertes.jpg'],
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
            headline: "Location van Cork : porte d'entrée du sud-ouest irlandais",
            description: 'Louez votre van à Cork : accès direct au Ring of Kerry, meilleurs loueurs, conseils pratiques et itinéraires au départ du sud-ouest irlandais.',
            image: 'https://www.exploreirelandvan.com/images/collines-vertes.jpg',
            author: { '@type': 'Organization', name: 'ExploreIrelandVan' },
            publisher: {
              '@type': 'Organization',
              name: 'ExploreIrelandVan',
              logo: { '@type': 'ImageObject', url: 'https://www.exploreirelandvan.com/images/favicon.png' },
            },
            datePublished: '2025-01-15',
            dateModified: '2026-02-19',
            inLanguage: 'fr',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.exploreirelandvan.com/location-van-cork/' },
          }),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Location Van Cork : porte d'entrée du sud-ouest"
        subtitle="Cork est le point de départ idéal pour explorer le sud-ouest irlandais en van. Ring of Kerry, péninsule de Dingle et Wild Atlantic Way sont à portée de main depuis la deuxième ville d'Irlande."
        breadcrumbItems={breadcrumbItems}
        image="/images/cote-rocheuse.jpg"
        imageAlt="Côte rocheuse du sud-ouest irlandais près de Cork"
        badge="Porte du Sud-Ouest"
        overlay="gradient"
        stats={[
          {
            value: '1h15',
            label: 'Ring of Kerry',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
          },
          {
            value: '8+',
            label: 'Loueurs locaux',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
          },
          {
            value: '70€',
            label: 'Par jour dès',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
          {
            value: '2h',
            label: 'Péninsule de Dingle',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
        ]}
        ctaText="Comparer les vans à Cork"
        ctaLink="/prix-location-van-irlande/"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p className="lead text-xl">
              La <strong>location de van à Cork</strong> est une alternative judicieuse à Dublin pour les voyageurs qui souhaitent plonger directement dans les paysages les plus spectaculaires d'Irlande. Deuxième ville du pays, Cork est la porte d'entrée naturelle vers le sud-ouest irlandais et ses trésors.
            </p>
            <p>
              Depuis Cork, le <strong>Ring of Kerry</strong> n'est qu'à 1h15 de route, la <strong>péninsule de Dingle</strong> à 2h, et le point de départ sud de la <strong><Link href="/wild-atlantic-way-van/" className="text-emerald-600 hover:text-emerald-800">Wild Atlantic Way</Link></strong> se trouve à Kinsale, à seulement 30 minutes. Cette proximité avec les incontournables vous fait gagner une journée entière de conduite par rapport à un départ de Dublin.
            </p>
            <p>
              L'<strong>aéroport de Cork</strong> (ORK) accueille des vols directs depuis plusieurs villes européennes, dont Paris, Londres, Amsterdam et Barcelone. Moins fréquenté que Dublin, il offre une expérience d'arrivée plus détendue. Les Corkoniens, fiers de leur ville qu'ils appellent volontiers la "vraie capitale", vous réserveront un accueil chaleureux avant le début de votre aventure sur les routes irlandaises.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Pourquoi partir de Cork ?"
            subtitle="Les avantages de louer votre van dans la deuxième ville d'Irlande."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Position stratégique</h3>
              <p className="text-gray-600 text-sm">Accès direct au Ring of Kerry, à Dingle et au début de la Wild Atlantic Way depuis Kinsale.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Moins d'affluence</h3>
              <p className="text-gray-600 text-sm">Aéroport plus calme, récupération du van plus rapide et routes moins encombrées qu'au départ de Dublin.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Ambiance authentique</h3>
              <p className="text-gray-600 text-sm">Découvrez le charme de la "vraie capitale" selon les Corkoniens : pubs, marchés et gastronomie locale.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-900 mb-2">Vols directs</h3>
              <p className="text-gray-600 text-sm">Aéroport international avec connexions directes depuis Paris, Londres, Amsterdam et d'autres villes européennes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Rental Companies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Les meilleurs loueurs de van à Cork"
            subtitle="Notre sélection de loueurs fiables pour démarrer votre aventure depuis le sud-ouest irlandais."
          />

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="space-y-6">
                <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ocean-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Loueurs spécialisés campervans</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Plusieurs entreprises spécialisées dans la <strong>location de van à Cork</strong> proposent des véhicules parfaitement équipés. <strong>Bunk Campers</strong> dispose d'un dépôt à Cork avec une gamme complète de campervans. <strong>Cork Campervan Hire</strong> est un loueur local réputé pour la qualité de ses véhicules et son service personnalisé.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Prix indicatif :</strong> 85 à 160 euros/jour selon la saison et le modèle choisi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Location entre particuliers</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Les plateformes comme <strong>Yescapa</strong> proposent des vans de particuliers basés à Cork et dans sa région. L'avantage : un accueil local avec des conseils de première main sur les meilleurs itinéraires du sud-ouest, et souvent des prix plus accessibles que les loueurs professionnels.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Prix indicatif :</strong> 70 à 130 euros/jour, souvent avec kilométrage illimité inclus.
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
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Loueurs internationaux avec dépôt Cork</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        <strong>Indie Campers</strong> et <strong>McRent</strong> disposent de points de retrait à Cork ou à proximité. Ces enseignes offrent des flottes récentes, un service client multilingue et la possibilité de faire un <strong>trajet en aller simple</strong> (one-way) : récupérer à Cork et restituer à Dublin, ou inversement.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Prix indicatif :</strong> 95 à 175 euros/jour. Supplément de 100 à 200 euros pour le one-way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-900 mb-3">Récupération à l'aéroport de Cork</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>L'aéroport est à seulement <strong>8 km du centre-ville</strong>, ce qui rend la récupération très rapide.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>La plupart des loueurs proposent un <strong>transfert gratuit</strong> depuis le terminal vers leur dépôt (10-15 minutes).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Prévoyez <strong>1h30 après l'atterrissage</strong> pour les formalités : c'est plus rapide qu'à Dublin.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Certains loueurs locaux peuvent <strong>livrer le van directement</strong> sur le parking de l'aéroport.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/van-ocean.jpg"
                  alt="Van aménagé garé près de l'océan sur la côte sud-ouest irlandaise"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-ocean-600 text-white px-6 py-3">
                  <h3 className="font-semibold">Distances depuis Cork</h3>
                </div>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700">Killarney (Ring of Kerry)</td>
                      <td className="px-6 py-3 text-center text-gray-600">85 km</td>
                      <td className="px-6 py-3 text-center font-semibold text-ocean-700">1h15</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700">Kinsale (Wild Atlantic Way)</td>
                      <td className="px-6 py-3 text-center text-gray-600">25 km</td>
                      <td className="px-6 py-3 text-center font-semibold text-ocean-700">30min</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700">Dingle</td>
                      <td className="px-6 py-3 text-center text-gray-600">140 km</td>
                      <td className="px-6 py-3 text-center font-semibold text-ocean-700">2h</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700">Falaises de Moher</td>
                      <td className="px-6 py-3 text-center text-gray-600">250 km</td>
                      <td className="px-6 py-3 text-center font-semibold text-ocean-700">3h</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-gray-700">Galway</td>
                      <td className="px-6 py-3 text-center text-gray-600">210 km</td>
                      <td className="px-6 py-3 text-center font-semibold text-ocean-700">2h30</td>
                    </tr>
                  </tbody>
                </table>
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
            title="Comparez les vans disponibles à Cork"
            buttonText="Voir les disponibilités"
          />
        </div>
      </section>

      {/* Itineraries */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Itinéraires au départ de Cork"
            subtitle="Trois circuits emblématiques à explorer en van depuis Cork et le sud-ouest irlandais."
          />

          <div className="space-y-12">
            {/* Ring of Kerry */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Incontournable</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Le Ring of Kerry</h3>
                <p className="text-gray-600 mb-4">
                  Le <strong>Ring of Kerry</strong> est sans doute le circuit le plus célèbre d'Irlande, et Cork est le point de départ idéal pour l'explorer. Cette boucle de 180 km autour de la péninsule d'Iveragh offre des panoramas époustouflants : côtes sauvages, lacs de montagne, villages colorés et les mystérieuses <strong>îles Skellig</strong> en arrière-plan.
                </p>
                <p className="text-gray-600 mb-4">
                  Depuis Cork, rejoignez <strong>Killarney</strong> en 1h15 et commencez le circuit dans le sens anti-horaire pour éviter les bus touristiques. Prévoyez 2 à 3 jours pour en profiter pleinement, avec des arrêts à Ladies View, Moll's Gap et le Skellig Ring.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Cork - Killarney : 1h15 (85 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Boucle Ring of Kerry : 180 km (1 à 3 jours)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Points forts : Ladies View, Skellig Ring, Sneem
                  </li>
                </ul>
                <Link href="/itineraire-irlande-10-jours-van/" className="btn-primary">
                  Voir l'itinéraire complet
                </Link>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/paysage-sauvage.jpg"
                  alt="Paysage sauvage du Ring of Kerry, accessible depuis Cork en van"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Dingle Peninsula */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src="/images/falaises-cote.jpg"
                  alt="Falaises spectaculaires de la péninsule de Dingle vues depuis la route côtière"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block bg-ocean-100 text-ocean-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Coup de coeur</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">La péninsule de Dingle</h3>
                <p className="text-gray-600 mb-4">
                  Moins fréquentée que le Ring of Kerry mais tout aussi spectaculaire, la <strong>péninsule de Dingle</strong> est un joyau du sud-ouest irlandais. Le <strong>Slea Head Drive</strong>, route côtière vertigineuse, offre des vues imprenables sur les Blasket Islands et l'Atlantique.
                </p>
                <p className="text-gray-600 mb-4">
                  Le village de <strong>Dingle</strong> (An Daingean en gaélique) est un port de pêche animé avec d'excellents restaurants de fruits de mer et des pubs où résonne la musique traditionnelle. Ne manquez pas l'<strong>oratoire de Gallarus</strong>, édifice paléochrétien vieux de 1300 ans, et le col de Conor Pass avec ses panoramas à couper le souffle.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                    Cork - Dingle : 2h (140 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                    Slea Head Drive : 50 km (demi-journée)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-ocean-500 rounded-full"></span>
                    Points forts : Slea Head, Gallarus, Conor Pass
                  </li>
                </ul>
              </div>
            </div>

            {/* Wild Atlantic Way South */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-sand-200 text-sand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Aventure</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">La Wild Atlantic Way (section sud)</h3>
                <p className="text-gray-600 mb-4">
                  La <strong>Wild Atlantic Way</strong> débute officiellement à <strong>Kinsale</strong>, charmant port à seulement 30 minutes de Cork. De là, vous pouvez remonter toute la côte ouest irlandaise sur 2500 km jusqu'à Malin Head au nord du Donegal.
                </p>
                <p className="text-gray-600 mb-4">
                  La section sud, de Kinsale à la péninsule de Beara puis au Ring of Kerry, est l'une des plus belles. La <strong>péninsule de Beara</strong>, souvent oubliée des guides touristiques, offre des paysages sauvages et préservés avec très peu de touristes. C'est le secret le mieux gardé du sud-ouest irlandais pour les voyageurs en van.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sand-500 rounded-full"></span>
                    Cork - Kinsale : 30 min (25 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sand-500 rounded-full"></span>
                    Kinsale - Beara Peninsula : 2h (120 km)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sand-500 rounded-full"></span>
                    Points forts : Kinsale, Beara, Dursey Island
                  </li>
                </ul>
                <Link href="/wild-atlantic-way-van/" className="btn-secondary">
                  Découvrir la Wild Atlantic Way
                </Link>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/van-ocean.jpg"
                  alt="Van garé face à l'océan Atlantique sur la Wild Atlantic Way"
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

      {/* Cork vs Dublin */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Pourquoi choisir Cork plutôt que Dublin ?"
              subtitle="Comparaison des deux points de départ pour votre road trip en van."
            />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-t-4 border-ocean-500">
                <h3 className="text-xl font-serif font-bold text-emerald-900 mb-4">Choisissez Cork si...</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ocean-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Votre priorité est le <strong>sud-ouest</strong> (Ring of Kerry, Dingle, Beara)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ocean-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous avez <strong>moins de 10 jours</strong> et voulez optimiser votre temps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ocean-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous préférez une <strong>ambiance plus locale</strong> et moins touristique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ocean-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous trouvez un <strong>vol direct</strong> vers Cork depuis votre ville</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ocean-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous voulez commencer la <strong>Wild Atlantic Way</strong> par le sud</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-t-4 border-emerald-500">
                <h3 className="text-xl font-serif font-bold text-emerald-900 mb-4">Choisissez Dublin si...</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous voulez explorer <strong>toute l'Irlande</strong> (nord, ouest et sud)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous cherchez le <strong>meilleur prix</strong> grâce à une concurrence plus forte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous avez <strong>2 semaines ou plus</strong> pour votre road trip</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous voulez visiter la <strong>capitale</strong> et ses environs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vous souhaitez un <strong>plus grand choix</strong> de loueurs et de véhicules</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/location-van-dublin/" className="text-sm font-medium text-emerald-600 hover:text-emerald-800 inline-flex items-center gap-1">
                    Voir le guide Dublin
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-gray-600">
              <strong>Astuce :</strong> Certains loueurs permettent le <strong>trajet en aller simple</strong> (one-way). Récupérez votre van à Dublin et restituez-le à Cork, ou inversement, pour un road trip sans retour au point de départ. Comptez un supplément de 100 à 200 euros selon le loueur.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Conseils pratiques pour Cork en van
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Découvrir Cork avant de partir</h3>
              <p className="text-emerald-100">
                Prenez une demi-journée pour explorer la ville. Le <strong>English Market</strong> est un marché couvert incontournable pour faire le plein de produits locaux. Montez au clocher de <strong>Shandon</strong> pour la vue panoramique.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Stationnement à Cork</h3>
              <p className="text-emerald-100">
                Le centre-ville est compact et les rues étroites. Garez-vous au parking Mahon Point (gratuit, en périphérie) et prenez le bus pour le centre. Pour la nuit, le camping Blarney Caravan Park est à 15 minutes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Routes du sud-ouest</h3>
              <p className="text-emerald-100">
                Les routes du Kerry et de Dingle sont étroites et sinueuses. Un van compact (moins de 6m) est fortement recommandé. Sur le Ring of Kerry, privilégiez le sens anti-horaire pour éviter les bus touristiques.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Météo locale</h3>
              <p className="text-emerald-100">
                Le sud-ouest reçoit plus de pluie que Dublin, mais bénéficie aussi d'un microclimat plus doux grâce au Gulf Stream. Les jardins subtropicaux de Garnish Island en témoignent. Prévoyez des vêtements imperméables.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Approvisionnement</h3>
              <p className="text-emerald-100">
                Faites vos courses à Cork avant de partir vers le Kerry. Les supermarchés Lidl et Aldi de la banlieue sont les plus accessibles en van. Une fois dans le Kerry, les épiceries de village sont plus chères et moins fournies.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Spots de nuit</h3>
              <p className="text-emerald-100">
                Le sud-ouest est bien doté en campings et aires pour vans. Les spots côtiers entre Kinsale et Kenmare offrent des emplacements avec vue sur l'océan. Consultez Park4Night pour les meilleurs spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AffiliateCTA
            title="Trouvez votre van idéal à Cork"
            description="Comparez les offres des loueurs de Cork et partez à la découverte du sud-ouest irlandais. Réservation flexible et annulation gratuite."
          />
        </div>
      </section>

      {/* Related Guides */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Guides associés"
            subtitle="Poursuivez la préparation de votre road trip au départ de Cork."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <LinkCard
              href="/location-van-dublin/"
              title="Location van Dublin"
              description="L'alternative depuis la capitale : plus grand choix de loueurs, accès à toute l'Irlande et meilleurs tarifs grâce à la concurrence."
              imageSrc="/images/collines-vertes.jpg"
              imageAlt="Collines vertes irlandaises au départ de Dublin"
              badge="Alternative"
            />
            <LinkCard
              href="/wild-atlantic-way-van/"
              title="Wild Atlantic Way en van"
              description="2500 km de côte sauvage à explorer : la route mythique qui débute à Kinsale, à 30 minutes de Cork."
              imageSrc="/images/cote-rocheuse.jpg"
              imageAlt="Côte rocheuse sur la Wild Atlantic Way"
              badge="Route mythique"
            />
            <LinkCard
              href="/prix-location-van-irlande/"
              title="Prix location van Irlande"
              description="Comparez les tarifs par saison et par loueur. Estimez le budget total de votre road trip irlandais en van."
              imageSrc="/images/van-campagne.jpg"
              imageAlt="Van aménagé dans la campagne irlandaise"
              badge="Budget"
            />
          </div>
        </div>
      </section>
    </>
  )
}
