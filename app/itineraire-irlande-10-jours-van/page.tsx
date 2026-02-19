import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'
import ItineraryDay from '@/components/ItineraryDay'

export const metadata: Metadata = {
  title: 'Itinéraire Irlande 10 jours en van | Circuit jour par jour et spots de nuit',
  description: 'Circuit parfait de 10 jours en van en Irlande : Dublin, Galway, Connemara, falaises de Moher, Ring of Kerry. Étapes jour par jour, distances et spots de nuit inclus.',
  alternates: {
    canonical: 'https://www.exploreirelandvan.com/itineraire-irlande-10-jours-van/',
  },
  openGraph: {
    title: 'Itinéraire Irlande 10 jours en van | Circuit jour par jour et spots de nuit',
    description: 'Le circuit parfait de 10 jours en van en Irlande avec étapes jour par jour.',
    url: 'https://www.exploreirelandvan.com/itineraire-irlande-10-jours-van/',
    type: 'article',
    images: [
      {
        url: 'https://www.exploreirelandvan.com/images/route-panoramique.jpg',
        width: 1200,
        height: 630,
        alt: 'Route panoramique à travers la campagne irlandaise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itinéraire Irlande 10 jours en van | Circuit jour par jour et spots de nuit',
    description: 'Circuit parfait de 10 jours en van en Irlande : Dublin, Galway, Connemara, falaises de Moher, Ring of Kerry. Étapes jour par jour, distances et spots de nuit inclus.',
    images: ['https://www.exploreirelandvan.com/images/route-panoramique.jpg'],
  },
}

const itinerary = [
  {
    day: 1,
    title: 'Dublin - Récupération du van',
    route: 'Dublin → Howth',
    distance: '30 km',
    description: 'Arrivée à Dublin, récupération de votre van et première prise en main. Direction Howth, charmant village de pêcheurs au nord de Dublin, pour vous familiariser avec la conduite à gauche sur des routes tranquilles.',
    highlights: ['Prise en main du van', 'Village de Howth', 'Falaises de Howth Head', 'Fish & chips au port'],
    sleepSpot: 'Parking de Howth Harbour ou camping Camac Valley',
    imageSrc: '/images/van-route-panoramique.jpg',
    imageAlt: 'Aventure en van sur une route panoramique en Irlande',
  },
  {
    day: 2,
    title: 'Dublin → Galway',
    route: 'Dublin → Clonmacnoise → Galway',
    distance: '220 km',
    description: 'Traversée du cœur de l\'Irlande jusqu\'à Galway, la vibrante capitale de l\'ouest. Arrêt à Clonmacnoise, site monastique médiéval sur les rives du Shannon.',
    highlights: ['Monastère de Clonmacnoise', 'Traversée des Midlands', 'Centre historique de Galway', 'Quartier latin et pubs'],
    sleepSpot: 'Salthill Caravan Park ou parking Silverstrand Beach',
    imageSrc: '/images/collines-vertes.jpg',
    imageAlt: 'Collines vertes et nature préservée en Irlande',
  },
  {
    day: 3,
    title: 'Connemara sauvage',
    route: 'Galway → Connemara → Clifden',
    distance: '150 km',
    description: 'Journée dédiée à l\'exploration du Connemara, région sauvage aux landes de bruyère, lacs miroitants et montagnes majestueuses. Une des plus belles régions d\'Irlande.',
    highlights: ['Abbaye de Kylemore', 'Fjord de Killary', 'Sky Road à Clifden', 'Lacs du Connemara'],
    sleepSpot: 'Camping Clifden Eco Beach ou spot sauvage avec vue',
    imageSrc: '/images/paysage-sauvage.jpg',
    imageAlt: 'Paysage sauvage et verdoyant en Irlande',
  },
  {
    day: 4,
    title: 'Îles d\'Aran',
    route: 'Clifden → Rossaveel → Inis Mór',
    distance: '80 km + ferry',
    description: 'Excursion sur Inis Mór, la plus grande des îles d\'Aran. Paysages lunaires, fort préhistorique de Dún Aonghasa perché sur les falaises et culture gaélique préservée.',
    highlights: ['Ferry vers Inis Mór', 'Fort de Dún Aonghasa', 'Murs de pierre et villages', 'Trou du Diable'],
    sleepSpot: 'Camping Doolin ou parking falaises de Moher',
    imageSrc: '/images/vue-panoramique.jpg',
    imageAlt: 'Vue panoramique sur la nature irlandaise',
  },
  {
    day: 5,
    title: 'Falaises de Moher',
    route: 'Doolin → Cliffs of Moher → Burren',
    distance: '60 km',
    description: 'Les mythiques falaises de Moher, hautes de 214 mètres, plongeant dans l\'Atlantique. Puis découverte du Burren, paysage karstique unique fait de dalles calcaires.',
    highlights: ['Falaises de Moher', 'Paysage lunaire du Burren', 'Dolmen de Poulnabrone', 'Village de Doolin'],
    sleepSpot: 'Nagle\'s Camping Doolin ou aire de Lisdoonvarna',
    imageSrc: '/images/falaises-cote.jpg',
    imageAlt: 'Falaises impressionnantes sur la côte irlandaise',
  },
  {
    day: 6,
    title: 'Vers le Kerry',
    route: 'Burren → Limerick → Killarney',
    distance: '180 km',
    description: 'Route vers le sud à travers le comté de Limerick jusqu\'à Killarney, porte d\'entrée du Ring of Kerry. Installation au cœur du parc national.',
    highlights: ['King John\'s Castle (Limerick)', 'Adare, plus beau village', 'Parc national de Killarney', 'Lacs de Killarney'],
    sleepSpot: 'Camping Fossa ou parking Ross Castle',
    imageSrc: '/images/prairie-verdoyante.jpg',
    imageAlt: 'Prairie verdoyante sous un ciel nuageux en Irlande',
  },
  {
    day: 7,
    title: 'Ring of Kerry',
    route: 'Killarney → Ring of Kerry → Kenmare',
    distance: '180 km',
    description: 'Le circuit mythique du Ring of Kerry : côtes sauvages, plages désertes, villages colorés et points de vue spectaculaires sur l\'Atlantique et les îles Skellig.',
    highlights: ['Ladies View', 'Moll\'s Gap', 'Skellig Ring', 'Staigue Fort'],
    sleepSpot: 'Camping Kenmare ou spot côtier autorisé',
    imageSrc: '/images/route-panoramique.jpg',
    imageAlt: 'Route panoramique à travers la campagne irlandaise',
  },
  {
    day: 8,
    title: 'Péninsule de Dingle',
    route: 'Kenmare → Dingle Peninsula',
    distance: '120 km',
    description: 'La péninsule de Dingle, joyau moins fréquenté du sud-ouest. Route de Slea Head, oratoire de Gallarus et villages gaéliques authentiques.',
    highlights: ['Slea Head Drive', 'Oratoire de Gallarus', 'Village de Dingle', 'Great Blasket Centre'],
    sleepSpot: 'Camping Dingle ou spot Slea Head',
    imageSrc: '/images/van-ocean.jpg',
    imageAlt: 'Van garé près de l\'océan en Irlande',
  },
  {
    day: 9,
    title: 'Retour vers Dublin',
    route: 'Dingle → Rock of Cashel → Dublin',
    distance: '350 km',
    description: 'Route de retour vers Dublin avec arrêt au Rock of Cashel, impressionnant ensemble médiéval perché sur une colline. Arrivée tranquille dans la capitale.',
    highlights: ['Rock of Cashel', 'Kilkenny (optionnel)', 'Campagne du Tipperary', 'Retour sur Dublin'],
    sleepSpot: 'Camping proche Dublin ou parking autorisé',
    imageSrc: '/images/lumiere-doree.jpg',
    imageAlt: 'Lumière dorée sur les paysages naturels d\'Irlande',
  },
  {
    day: 10,
    title: 'Dublin et départ',
    route: 'Dublin centre → Aéroport',
    distance: '20 km',
    description: 'Matinée libre pour explorer Dublin : Trinity College, Temple Bar, St. Stephen\'s Green. Restitution du van et départ avec des souvenirs plein la tête.',
    highlights: ['Trinity College & Book of Kells', 'Temple Bar', 'Balade au centre', 'Restitution du van'],
    sleepSpot: 'Départ',
    imageSrc: '/images/van-sunset.jpg',
    imageAlt: 'Van aménagé au coucher du soleil en Irlande',
  },
]

const budgetEstimate = {
  vanRental: '700-1000€',
  fuel: '150-200€',
  camping: '100-150€',
  food: '200-300€',
  activities: '100-150€',
  total: '1250-1800€',
}

export default function ItinerairePage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Road Trip', href: '/road-trip-irlande-van/' },
    { name: 'Itinéraire 10 jours' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Itinéraire Irlande 10 jours en van : le circuit idéal',
            description: 'Circuit parfait de 10 jours en van en Irlande : Dublin, Galway, Connemara, falaises de Moher, Ring of Kerry. Étapes jour par jour, distances et spots de nuit inclus.',
            image: 'https://www.exploreirelandvan.com/images/route-panoramique.jpg',
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
            dateModified: '2025-02-16',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.exploreirelandvan.com/itineraire-irlande-10-jours-van/',
            },
          }),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Itinéraire Irlande 10 jours en van : le circuit idéal"
        subtitle="Le circuit idéal pour une première découverte de l'Irlande : Dublin, côte ouest sauvage, Connemara, falaises de Moher et Ring of Kerry. Jour par jour avec conseils de stationnement."
        breadcrumbItems={breadcrumbItems}
        image="/images/route-panoramique.jpg"
        imageAlt="Route panoramique à travers la campagne irlandaise"
        badge="Circuit recommandé"
        stats={[
          {
            value: '10',
            label: 'Jours',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ),
          },
          {
            value: '1400',
            label: 'Kilomètres',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            ),
          },
          {
            value: '15+',
            label: 'Sites majeurs',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
          },
          {
            value: '3',
            label: 'Régions',
            icon: (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
          },
        ]}
        ctaText="Réserver un van"
        ctaLink="/prix-location-van-irlande/"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p className="lead text-xl">
              Cet <strong>itinéraire de 10 jours en van en Irlande</strong> a été conçu pour vous faire découvrir les incontournables de l'île d'émeraude sans vous précipiter. Il combine la vibrante Dublin, les paysages sauvages de l'ouest et les trésors du sud-ouest irlandais.
            </p>
            <p>
              Ce circuit forme une boucle au départ de <strong>Dublin</strong>, ce qui simplifie la logistique de location de van. Les étapes quotidiennes sont volontairement courtes (100-200 km maximum) pour vous laisser le temps d'explorer, de vous arrêter devant les panoramas qui vous touchent et de profiter de l'atmosphère unique de chaque région.
            </p>
            <p>
              Chaque jour inclut des suggestions de spots pour passer la nuit, qu'il s'agisse de campings équipés ou d'emplacements plus sauvages autorisés. La flexibilité est la clé d'un <strong>road trip réussi</strong> : n'hésitez pas à adapter le programme selon vos envies et la météo irlandaise, parfois capricieuse mais toujours photogénique.
            </p>
          </div>
        </div>
      </section>

      {/* Map Preview */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-2/3 h-64 bg-emerald-100 rounded-xl flex items-center justify-center">
                <p className="text-emerald-600 text-center px-4">
                  Carte interactive de l'itinéraire<br />
                  <span className="text-sm">(Intégration Google Maps recommandée)</span>
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">Résumé du parcours</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs">D</span>
                    Dublin (Départ/Arrivée)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                    Galway & Connemara
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                    Falaises de Moher
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                    Ring of Kerry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">4</span>
                    Péninsule de Dingle
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day by Day */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Itinéraire jour par jour"
            subtitle="Découvrez chaque étape de ce circuit avec les distances, points d'intérêt et conseils de stationnement."
          />

          <div className="space-y-8">
            {itinerary.map((day) => (
              <ItineraryDay
                key={day.day}
                day={day.day}
                title={day.title}
                route={day.route}
                distance={day.distance}
                description={day.description}
                highlights={day.highlights}
                sleepSpot={day.sleepSpot}
                imageSrc={day.imageSrc}
                imageAlt={day.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Réservez votre van pour ce circuit"
            description="Comparez les vans disponibles à Dublin pour les dates de votre voyage. Annulation flexible et assistance 24/7 incluses."
          />
        </div>
      </section>

      {/* Budget */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Budget estimatif"
              subtitle="Estimation des coûts pour ce circuit de 10 jours pour 2 personnes."
            />

            <div className="bg-emerald-50 rounded-2xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                    <span className="text-gray-700">Location van (10 jours)</span>
                    <span className="font-semibold text-emerald-700">{budgetEstimate.vanRental}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                    <span className="text-gray-700">Carburant (~1400 km)</span>
                    <span className="font-semibold text-emerald-700">{budgetEstimate.fuel}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                    <span className="text-gray-700">Campings / Aires</span>
                    <span className="font-semibold text-emerald-700">{budgetEstimate.camping}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                    <span className="text-gray-700">Alimentation</span>
                    <span className="font-semibold text-emerald-700">{budgetEstimate.food}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                    <span className="text-gray-700">Activités / Visites</span>
                    <span className="font-semibold text-emerald-700">{budgetEstimate.activities}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-emerald-600 text-white rounded-lg px-4">
                    <span className="font-semibold">Total estimé (2 pers.)</span>
                    <span className="font-bold text-lg">{budgetEstimate.total}</span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                * Estimation basée sur les prix moyens en moyenne saison. Les coûts peuvent varier selon la période, le type de van choisi et vos habitudes de consommation.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/prix-location-van-irlande/" className="btn-secondary">
                Voir le guide complet des prix
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Conseils pour ce circuit
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Meilleure période</h3>
                <p className="text-emerald-100">
                  Ce circuit est idéal de mai à septembre. Juin et septembre offrent un bon compromis entre météo agréable et affluence modérée. En juillet-août, réservez le ferry pour Inis Mór à l'avance.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Sens du circuit</h3>
                <p className="text-emerald-100">
                  Nous recommandons ce sens (anti-horaire) pour éviter les flux touristiques qui font généralement le Ring of Kerry dans le sens horaire. Vous serez souvent à contre-courant des bus.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Flexibilité</h3>
                <p className="text-emerald-100">
                  Ce programme est indicatif. N'hésitez pas à passer plus de temps dans une région qui vous plaît ou à raccourcir une étape si la météo n'est pas favorable.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Applications utiles</h3>
                <p className="text-emerald-100">
                  Téléchargez Park4Night et Campercontact pour trouver les spots de nuit. Google Maps fonctionne bien mais téléchargez les cartes hors ligne pour les zones sans réseau.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Continuez votre préparation"
            subtitle="Tous nos guides pour organiser votre road trip irlandais."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/dormir-en-van-irlande/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Où dormir en van
                </h3>
                <p className="text-gray-600 text-sm">
                  Aires, campings et spots autorisés pour vos nuits irlandaises.
                </p>
              </div>
            </Link>
            <Link href="/wild-atlantic-way-van/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Wild Atlantic Way
                </h3>
                <p className="text-gray-600 text-sm">
                  La route mythique de la côte ouest en détail.
                </p>
              </div>
            </Link>
            <Link href="/camping-sauvage-irlande-van/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Camping sauvage
                </h3>
                <p className="text-gray-600 text-sm">
                  Réglementation et bonnes pratiques en Irlande.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
