import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'
import LinkCard from '@/components/LinkCard'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Road trip Irlande en van aménagé',
  description: 'Planifiez votre road trip en Irlande en van aménagé. Circuits détaillés, conseils pratiques, étapes incontournables et astuces pour un voyage inoubliable sur les routes irlandaises.',
  alternates: {
    canonical: 'https://www.exploreirelandvan.com/road-trip-irlande-van/',
  },
  openGraph: {
    title: 'Road trip Irlande en van aménagé',
    description: 'Planifiez votre road trip en Irlande en van aménagé. Circuits détaillés, conseils pratiques, étapes incontournables et astuces pour un voyage inoubliable.',
    url: 'https://www.exploreirelandvan.com/road-trip-irlande-van/',
    type: 'article',
    images: [
      {
        url: 'https://www.exploreirelandvan.com/images/van-route-panoramique.jpg',
        width: 1200,
        height: 630,
        alt: 'Van sur une route panoramique irlandaise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Road trip Irlande en van aménagé',
    description: 'Planifiez votre road trip en Irlande en van aménagé. Circuits détaillés, conseils pratiques, étapes incontournables et astuces pour un voyage inoubliable sur les routes irlandaises.',
    images: ['https://www.exploreirelandvan.com/images/van-route-panoramique.jpg'],
  },
}

const circuits = [
  {
    title: 'Wild Atlantic Way complète',
    duration: '14-21 jours',
    distance: '2500 km',
    description: 'La route côtière mythique de Cork au Donegal, longeant l\'océan Atlantique à travers des paysages à couper le souffle.',
    highlights: ['Falaises de Moher', 'Connemara', 'Péninsule de Dingle', 'Slieve League'],
  },
  {
    title: 'Ring of Kerry & Sud-Ouest',
    duration: '5-7 jours',
    distance: '600 km',
    description: 'Le circuit emblématique du sud-ouest irlandais, entre lacs, montagnes et côtes sauvages.',
    highlights: ['Killarney', 'Gap of Dunloe', 'Skellig Michael', 'Kenmare'],
  },
  {
    title: 'Circuit Dublin - Galway',
    duration: '10 jours',
    distance: '1200 km',
    description: 'L\'itinéraire parfait pour une première découverte, combinant culture urbaine et nature sauvage.',
    highlights: ['Dublin', 'Cliffs of Moher', 'Galway', 'Connemara'],
  },
  {
    title: 'Nord sauvage & Causeway',
    duration: '7-10 jours',
    distance: '800 km',
    description: 'Explorez le nord mystique de l\'île, ses côtes déchiquetées et les orgues basaltiques de la Chaussée des Géants.',
    highlights: ['Giant\'s Causeway', 'Donegal', 'Malin Head', 'Dark Hedges'],
  },
]

const tips = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Réservez à l\'avance',
    description: 'En haute saison (juin-août), les vans partent vite. Réservez 2-3 mois avant pour avoir le choix du véhicule et les meilleurs tarifs.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Planifiez sans rigidité',
    description: 'Gardez de la flexibilité dans votre itinéraire. La météo irlandaise et les découvertes spontanées font partie du charme du voyage.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Prévoyez des étapes courtes',
    description: 'Les routes irlandaises sont sinueuses et les arrêts nombreux. Limitez-vous à 150-200 km par jour pour profiter sans stress.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Équipez-vous pour la pluie',
    description: 'La météo irlandaise est imprévisible. Vêtements imperméables, chaussures de randonnée et couches superposables sont essentiels.',
  },
]

export default function RoadTripPage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Road Trip Irlande en Van' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Road trip Irlande en van : préparez l\'aventure de votre vie',
            description: 'Planifiez votre road trip en Irlande en van aménagé. Circuits détaillés, conseils pratiques, étapes incontournables et astuces pour un voyage inoubliable sur les routes irlandaises.',
            image: 'https://www.exploreirelandvan.com/images/van-route-panoramique.jpg',
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
              '@id': 'https://www.exploreirelandvan.com/road-trip-irlande-van/',
            },
          }),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Road trip Irlande en van : préparez l'aventure de votre vie"
        subtitle="Préparez votre aventure sur les routes irlandaises. Circuits mythiques, conseils pratiques et étapes incontournables pour un voyage inoubliable en van aménagé."
        breadcrumbItems={breadcrumbItems}
        image="/images/van-route-panoramique.jpg"
        imageAlt="Van sur une route panoramique irlandaise"
        badge="Aventure irlandaise"
        stats={[
          {
            value: '4',
            label: 'Circuits proposés',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            ),
          },
          {
            value: '2500km',
            label: 'Wild Atlantic Way',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
          },
          {
            value: '10-21',
            label: 'Jours de voyage',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ),
          },
          {
            value: '100%',
            label: 'Liberté totale',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
        ]}
        ctaText="Circuit 10 jours recommandé"
        ctaLink="/itineraire-irlande-10-jours-van/"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p className="lead text-xl">
              L'<strong>Irlande</strong> est une destination de rêve pour les amateurs de <strong>road trip en van</strong>. Avec ses routes côtières spectaculaires, ses paysages changeants à chaque virage et son atmosphère unique mêlant nature sauvage et culture chaleureuse, l'île d'émeraude offre une expérience de voyage incomparable.
            </p>
            <p>
              Que vous rêviez de longer les falaises vertigineuses de la <strong>Wild Atlantic Way</strong>, d'explorer les landes mystiques du <strong>Connemara</strong> ou de découvrir les villages colorés du sud-ouest, voyager en <strong>van aménagé</strong> vous offre la liberté totale de vivre l'Irlande à votre rythme. Plus besoin de réserver des hôtels, de respecter des horaires stricts ou de porter vos bagages d'un hébergement à l'autre.
            </p>
            <p>
              Ce guide complet vous accompagne dans la préparation de votre <strong>road trip irlandais</strong> : choix du circuit adapté à votre durée de séjour, conseils pratiques pour la conduite à gauche, astuces pour le stationnement nocturne et bien plus encore. Laissez-vous inspirer par nos itinéraires et préparez-vous à vivre une aventure authentique sur les routes de l'île d'émeraude.
            </p>
          </div>
        </div>
      </section>

      {/* Circuits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Les circuits incontournables"
            subtitle="Choisissez l'itinéraire qui correspond à votre durée de séjour et vos envies d'exploration."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {circuits.map((circuit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="badge-emerald">{circuit.duration}</span>
                    <span className="badge-ocean">{circuit.distance}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-3">
                    {circuit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {circuit.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-emerald-800 mb-2">Points forts :</h4>
                    <div className="flex flex-wrap gap-2">
                      {circuit.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-sm bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/itineraire-irlande-10-jours-van/" className="btn-primary">
              Voir l'itinéraire détaillé 10 jours
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Wild Atlantic Way Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/route-panoramique.jpg"
                alt="Route panoramique à travers la campagne irlandaise"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="badge-emerald mb-4">Route mythique</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
                La Wild Atlantic Way
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  La <strong>Wild Atlantic Way</strong> est la plus longue route côtière balisée au monde avec ses <strong>2500 kilomètres</strong> de falaises, plages désertes et villages pittoresques. Elle serpente le long de la côte ouest irlandaise, de la péninsule de Kinsale au sud jusqu'au Donegal au nord.
                </p>
                <p>
                  Cette route mythique traverse certains des paysages les plus spectaculaires d'Europe : les <strong>falaises de Moher</strong> qui plongent à pic dans l'Atlantique, les <strong>îles d'Aran</strong> où le temps semble s'être arrêté, les <strong>plages de sable blanc</strong> du Connemara et les <strong>montagnes du Donegal</strong> battues par les vents.
                </p>
                <p>
                  Pour les voyageurs en van, la Wild Atlantic Way offre une infinité de spots de stationnement avec vue sur l'océan, des rencontres authentiques avec les habitants et une immersion totale dans la culture gaélique. Prévoyez au minimum <strong>14 jours</strong> pour la parcourir sans vous presser.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/wild-atlantic-way-van/" className="btn-primary">
                  Guide complet Wild Atlantic Way
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Conseils pour réussir votre road trip"
            subtitle="Nos recommandations pour préparer et vivre au mieux votre aventure irlandaise en van."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <FeatureCard
                key={index}
                icon={tip.icon}
                title={tip.title}
                description={tip.description}
                variant="centered"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AffiliateCTA
            title="Trouvez le van idéal pour votre road trip"
            description="Comparez les offres des meilleurs loueurs irlandais. Large choix de véhicules, annulation flexible et assistance 24/7."
          />
        </div>
      </section>

      {/* Planning */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Planifiez votre itinéraire étape par étape
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-sand-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-emerald-900">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Définissez votre durée de voyage</h3>
                  <p className="text-emerald-100">
                    Pour un premier voyage, 10 à 14 jours permettent de découvrir les incontournables sans courir. Si vous disposez de plus de temps, 3 semaines vous permettront d'explorer en profondeur et de vous imprégner de l'atmosphère locale.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-sand-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-emerald-900">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choisissez votre point de départ</h3>
                  <p className="text-emerald-100">
                    Dublin offre le plus grand choix de loueurs et un accès facile depuis toute l'Europe. Cork est idéal pour commencer par le sud-ouest. Shannon permet un accès direct à la région des falaises de Moher et du Connemara.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-sand-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-emerald-900">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sélectionnez vos étapes principales</h3>
                  <p className="text-emerald-100">
                    Identifiez les régions et sites que vous souhaitez absolument visiter, puis construisez votre itinéraire autour de ces points d'ancrage. Gardez de la flexibilité pour les découvertes spontanées.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-sand-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-emerald-900">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Réservez votre van et préparez l'équipement</h3>
                  <p className="text-emerald-100">
                    Réservez votre van plusieurs mois à l'avance en haute saison. Vérifiez les équipements inclus et préparez une check-list pour compléter avec vos affaires personnelles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Guides pour préparer votre voyage"
            subtitle="Tous nos conseils et ressources pour un road trip irlandais réussi."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <LinkCard
              href="/prix-location-van-irlande/"
              title="Budget et prix"
              description="Tarifs de location, coûts annexes et astuces pour optimiser votre budget voyage."
              imageSrc="/images/van-sunset.jpg"
              imageAlt="Van au coucher du soleil sur la côte irlandaise"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-900 mb-4">
            Prêt à partir à l'aventure ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            L'Irlande vous attend avec ses routes légendaires, ses paysages à couper le souffle et son hospitalité légendaire.
          </p>
          <Link href="/prix-location-van-irlande/" className="btn-primary">
            Comparer les vans disponibles
          </Link>
        </div>
      </section>
    </>
  )
}
