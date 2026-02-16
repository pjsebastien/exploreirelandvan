import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata: Metadata = {
  title: 'Wild Atlantic Way en van | 2500 km de côte sauvage à explorer',
  description: 'Explorez la Wild Atlantic Way en van aménagé : 2500 km de côte sauvage, meilleurs arrêts, étapes recommandées et conseils pour cette route mythique irlandaise.',
  alternates: {
    canonical: 'https://www.exploreIrelandvan.com/wild-atlantic-way-van/',
  },
}

const highlights = [
  {
    name: 'Falaises de Moher',
    region: 'Clare',
    description: 'Les falaises les plus célèbres d\'Irlande, plongeant à 214 mètres dans l\'Atlantique.',
    mustSee: true,
  },
  {
    name: 'Connemara',
    region: 'Galway',
    description: 'Landes sauvages, lacs miroitants et montagnes des Twelve Bens.',
    mustSee: true,
  },
  {
    name: 'Îles d\'Aran',
    region: 'Galway',
    description: 'Trois îles où le temps semble s\'être arrêté, culture gaélique préservée.',
    mustSee: true,
  },
  {
    name: 'Slieve League',
    region: 'Donegal',
    description: 'Falaises parmi les plus hautes d\'Europe, moins touristiques que Moher.',
    mustSee: false,
  },
  {
    name: 'Péninsule de Dingle',
    region: 'Kerry',
    description: 'Slea Head Drive, villages gaéliques et paysages à couper le souffle.',
    mustSee: true,
  },
  {
    name: 'Ring of Kerry',
    region: 'Kerry',
    description: 'Le circuit classique du sud-ouest : lacs, montagnes et côtes sauvages.',
    mustSee: true,
  },
  {
    name: 'Skellig Michael',
    region: 'Kerry',
    description: 'Île monastique classée UNESCO, décor de Star Wars.',
    mustSee: false,
  },
  {
    name: 'Achill Island',
    region: 'Mayo',
    description: 'La plus grande île d\'Irlande reliée par un pont, plages spectaculaires.',
    mustSee: false,
  },
]

export default function WildAtlanticWayPage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Road Trip', href: '/road-trip-irlande-van/' },
    { name: 'Wild Atlantic Way' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Wild Atlantic Way en Van',
            description: 'Guide complet de la Wild Atlantic Way en van aménagé.',
            author: { '@type': 'Organization', name: 'ExploreIrelandVan' },
          }),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Wild Atlantic Way en van : 2500 km de liberté"
        subtitle="La plus longue route côtière balisée au monde : 2500 km de falaises vertigineuses, plages désertes et villages pittoresques le long de la côte atlantique irlandaise."
        breadcrumbItems={breadcrumbItems}
        image="/images/cote-rocheuse.jpg"
        imageAlt="Côte rocheuse battue par l'océan sur la Wild Atlantic Way"
        badge="Route mythique"
        stats={[
          {
            value: '2500',
            label: 'Kilomètres',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            ),
          },
          {
            value: '9',
            label: 'Comtés traversés',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
          {
            value: '150+',
            label: 'Points de découverte',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
          },
          {
            value: '14-21',
            label: 'Jours recommandés',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ),
          },
        ]}
        ctaText="Planifier mon road trip"
        ctaLink="/prix-location-van-irlande/"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p className="lead text-xl">
              La <strong>Wild Atlantic Way</strong> est une route mythique qui serpente le long de la côte ouest irlandaise, de Kinsale au sud jusqu'à Malin Head au nord du Donegal. C'est sans conteste l'une des plus belles routes du monde pour un <strong>road trip en van</strong>.
            </p>
            <p>
              Cette route côtière traverse <strong>neuf comtés</strong> et offre une diversité de paysages extraordinaire : des plages de sable blanc aux falaises noires, des villages de pêcheurs colorés aux landes sauvages battues par les vents. Chaque virage révèle un nouveau panorama à couper le souffle.
            </p>
            <p>
              Pour les voyageurs en van, la Wild Atlantic Way est un paradis. Les possibilités de stationnement avec vue sur l'océan sont innombrables, et l'hospitalité irlandaise rend chaque étape mémorable. Prévoyez au minimum <strong>14 jours</strong> pour en profiter sans vous presser, 3 semaines étant l'idéal.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-emerald-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">2500</div>
              <div className="text-emerald-100">Kilomètres</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">9</div>
              <div className="text-emerald-100">Comtés traversés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-emerald-100">Points de découverte</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">14-21</div>
              <div className="text-emerald-100">Jours recommandés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Les incontournables de la Wild Atlantic Way"
            subtitle="Les étapes à ne pas manquer lors de votre traversée de la côte ouest irlandaise."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
                {highlight.mustSee && (
                  <span className="absolute -top-2 -right-2 bg-sand-400 text-emerald-900 text-xs font-semibold px-2 py-1 rounded-full">
                    Incontournable
                  </span>
                )}
                <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider">
                  {highlight.region}
                </span>
                <h3 className="text-lg font-semibold text-emerald-900 mt-1 mb-2">
                  {highlight.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Les grandes régions de la Wild Atlantic Way"
            subtitle="Du sud au nord, découvrez les différentes ambiances de cette route mythique."
          />

          <div className="space-y-12">
            {/* Kerry */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="badge-emerald mb-4">Sud</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Kerry - Le joyau du sud</h3>
                <p className="text-gray-600 mb-4">
                  Le comté de Kerry abrite certains des paysages les plus emblématiques d'Irlande : le <strong>Ring of Kerry</strong>, la <strong>péninsule de Dingle</strong> et les <strong>îles Skellig</strong>. C'est souvent le point de départ des road trips venant de Cork.
                </p>
                <p className="text-gray-600">
                  Les routes y sont parfois étroites mais praticables en van. Privilégiez le sens anti-horaire pour le Ring of Kerry afin d'éviter les bus touristiques qui roulent dans le sens inverse.
                </p>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/collines-vertes.jpg"
                  alt="Collines vertes et nature préservée en Irlande"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Clare */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src="/images/falaises-cote.jpg"
                  alt="Falaises impressionnantes sur la côte irlandaise"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="badge-ocean mb-4">Centre</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Clare - Falaises et Burren</h3>
                <p className="text-gray-600 mb-4">
                  Le comté de Clare est dominé par les mythiques <strong>falaises de Moher</strong> et le paysage lunaire du <strong>Burren</strong>. Le village de <strong>Doolin</strong> est le point de départ idéal pour les îles d'Aran.
                </p>
                <p className="text-gray-600">
                  C'est une région très prisée des vanlifers avec de nombreux spots de stationnement le long de la côte. Les campings de Doolin sont particulièrement recommandés.
                </p>
              </div>
            </div>

            {/* Galway / Connemara */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="badge-sand mb-4">Ouest</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Galway & Connemara</h3>
                <p className="text-gray-600 mb-4">
                  La ville de <strong>Galway</strong> est le cœur battant de l'ouest irlandais, avec ses pubs musicaux et son ambiance bohème. Le <strong>Connemara</strong> qui s'étend au nord offre des paysages parmi les plus sauvages d'Irlande.
                </p>
                <p className="text-gray-600">
                  La <strong>Sky Road</strong> près de Clifden et l'<strong>abbaye de Kylemore</strong> sont des incontournables. Les spots de camping sauvage avec vue sur les lacs sont nombreux.
                </p>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/paysage-sauvage.jpg"
                  alt="Paysage sauvage et verdoyant en Irlande"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Donegal */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src="/images/cote-rocheuse.jpg"
                  alt="Côte rocheuse battue par l'océan en Irlande"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="badge-emerald mb-4">Nord</span>
                <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Donegal - Le nord sauvage</h3>
                <p className="text-gray-600 mb-4">
                  Le <strong>Donegal</strong> est la région la plus sauvage et la moins fréquentée de la Wild Atlantic Way. Les <strong>falaises de Slieve League</strong> rivalisent avec Moher, et <strong>Malin Head</strong> marque le point le plus septentrional de l'île.
                </p>
                <p className="text-gray-600">
                  C'est le paradis des vanlifers en quête de solitude. Les plages désertes et les spots isolés sont légion. Attention : la météo y est plus rude qu'au sud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Conseils pratiques pour la Wild Atlantic Way
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Direction du parcours</h3>
              <p className="text-emerald-100">
                Commencez par le sud (Cork/Kerry) et remontez vers le nord. Vous garderez l'océan à votre gauche, facilitant les arrêts sur les points de vue.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Durée recommandée</h3>
              <p className="text-emerald-100">
                Minimum 14 jours pour l'essentiel, 3 semaines pour explorer en profondeur. Ne sous-estimez pas les distances sur ces routes sinueuses.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Carburant</h3>
              <p className="text-emerald-100">
                Les stations-service peuvent être espacées dans le Connemara et le Donegal. Faites le plein régulièrement et ne laissez jamais le réservoir descendre sous le quart.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Météo</h3>
              <p className="text-emerald-100">
                La côte ouest reçoit plus de pluie que l'est. Mais c'est aussi cette météo qui crée les arcs-en-ciel et les lumières spectaculaires !
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Réseau mobile</h3>
              <p className="text-emerald-100">
                La couverture 4G peut être limitée dans les zones reculées. Téléchargez vos cartes hors ligne et ne comptez pas sur le GPS en temps réel partout.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Signalisation</h3>
              <p className="text-emerald-100">
                Suivez les panneaux bleus avec le symbole WAW. Il y a 188 points de découverte officiels, mais les plus beaux spots sont souvent entre ces points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AffiliateCTA
            title="Partez à la découverte de la Wild Atlantic Way"
            description="Trouvez le van idéal pour parcourir cette route mythique. Comparez les offres des loueurs irlandais."
          />
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Continuez votre préparation" />
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/itineraire-irlande-10-jours-van/" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Itinéraire 10 jours
                </h3>
                <p className="text-gray-600 text-sm">
                  Circuit incluant les highlights de la Wild Atlantic Way.
                </p>
              </div>
            </Link>
            <Link href="/dormir-en-van-irlande/" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Où dormir en van
                </h3>
                <p className="text-gray-600 text-sm">
                  Spots de nuit le long de la côte atlantique.
                </p>
              </div>
            </Link>
            <Link href="/prix-location-van-irlande/" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Prix et budget
                </h3>
                <p className="text-gray-600 text-sm">
                  Estimez le coût de votre road trip côtier.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
