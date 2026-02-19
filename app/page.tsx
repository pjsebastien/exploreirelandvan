import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import AffiliateCTA from '@/components/AffiliateCTA'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'
import SectionTitle from '@/components/SectionTitle'
import FAQAccordion from '@/components/FAQAccordion'
import LinkCard from '@/components/LinkCard'

export const metadata: Metadata = {
  title: 'Location van Irlande | Comparez les meilleurs loueurs dès 65€/jour',
  description: 'Louez un van aménagé en Irlande et explorez l\'île d\'émeraude. Comparatif des meilleurs loueurs, itinéraires Wild Atlantic Way, prix et conseils pour votre road trip.',
  alternates: {
    canonical: 'https://www.exploreirelandvan.com/',
  },
  openGraph: {
    title: 'Location van Irlande | Comparez les meilleurs loueurs dès 65€/jour',
    description: 'Louez un van aménagé en Irlande. Comparatif des loueurs, prix et itinéraires pour votre road trip.',
    url: 'https://www.exploreirelandvan.com/',
    type: 'website',
    images: [{ url: '/images/van-nature-irlande.jpg', width: 1200, height: 630, alt: 'Van aménagé dans la nature irlandaise' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location van Irlande | Comparez les meilleurs loueurs dès 65€/jour',
    description: 'Louez un van aménagé en Irlande et explorez l\'île d\'émeraude. Comparatif des meilleurs loueurs, itinéraires et prix.',
    images: ['/images/van-nature-irlande.jpg'],
  },
}

const features = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Liberté totale',
    description: 'Parcourez l\'Irlande à votre rythme, sans contrainte d\'horaires ni de réservations d\'hôtels. Chaque jour est une nouvelle aventure.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Économies réelles',
    description: 'Combinez transport et hébergement en un seul budget. Cuisinez vos repas et profitez des aires gratuites pour optimiser vos dépenses.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Nature immersive',
    description: 'Réveillez-vous face aux falaises de Moher, au bord d\'un lac du Connemara ou dans un village de pêcheurs coloré.',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Sécurité garantie',
    description: 'L\'Irlande est l\'un des pays les plus sûrs d\'Europe. Les Irlandais sont réputés pour leur hospitalité légendaire.',
  },
]

const testimonials = [
  {
    quote: 'Notre road trip sur la Wild Atlantic Way restera gravé dans nos mémoires. La liberté de s\'arrêter où on veut, de prendre son temps... C\'est incomparable avec un voyage classique.',
    author: 'Marie & Thomas',
    location: 'France - Août 2024',
    rating: 5,
  },
  {
    quote: 'Conduire à gauche était ma seule appréhension, mais on s\'y fait très vite. Le van était parfaitement équipé et les paysages irlandais sont à couper le souffle.',
    author: 'Jean-Pierre',
    location: 'Belgique - Juin 2024',
    rating: 5,
  },
  {
    quote: 'Excellent rapport qualité-prix. En 10 jours, nous avons vu plus de choses qu\'avec n\'importe quel autre type de voyage. Les enfants ont adoré l\'aventure !',
    author: 'Sophie & famille',
    location: 'Suisse - Juillet 2024',
    rating: 5,
  },
]

const faqItems = [
  {
    question: 'Quel permis faut-il pour louer un van en Irlande ?',
    answer: 'Le permis B français ou européen suffit pour louer la plupart des vans aménagés en Irlande. Pour les véhicules de plus de 3,5 tonnes, un permis C peut être requis, mais la majorité des vans de location restent en dessous de cette limite.',
  },
  {
    question: 'Est-il difficile de conduire à gauche en Irlande ?',
    answer: 'La conduite à gauche peut sembler intimidante au début, mais la plupart des voyageurs s\'y habituent en quelques heures. Les routes irlandaises sont généralement moins fréquentées que sur le continent, ce qui facilite l\'adaptation. Commencez par des trajets courts le premier jour.',
  },
  {
    question: 'Peut-on dormir n\'importe où en van en Irlande ?',
    answer: 'Le stationnement nocturne est généralement toléré en Irlande, mais il est recommandé de privilégier les aires dédiées, les campings et les parkings autorisés. Le camping sauvage sur terrain privé nécessite l\'accord du propriétaire. Respectez toujours l\'environnement et les règles locales.',
  },
  {
    question: 'Quelle est la meilleure période pour un road trip en van en Irlande ?',
    answer: 'La période idéale s\'étend de mai à septembre, avec des journées longues et un climat plus clément. Juin et septembre offrent un bon compromis entre météo favorable et affluence modérée. L\'Irlande reste magnifique toute l\'année, mais prévoyez des vêtements adaptés à la pluie.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Schema.org WebSite + Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ExploreIrelandVan',
            url: 'https://www.exploreirelandvan.com',
            description: 'Guide expert pour la location de van en Irlande : itinéraires, prix, conseils pratiques et meilleurs spots pour votre road trip.',
            inLanguage: 'fr',
            publisher: {
              '@type': 'Organization',
              name: 'ExploreIrelandVan',
              url: 'https://www.exploreirelandvan.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.exploreirelandvan.com/images/favicon.png',
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <Hero
        title="Location van Irlande : l'île d'émeraude vous attend"
        subtitle="Explorez l'île d'émeraude en toute liberté. Des falaises majestueuses de Moher aux paysages sauvages du Connemara, vivez l'aventure irlandaise ultime à bord de votre van aménagé."
        ctaText="Trouver mon van"
        ctaLink="/prix-location-van-irlande/"
        secondaryCtaText="Voir les itinéraires"
        secondaryCtaLink="/road-trip-irlande-van/"
        backgroundImage="/images/route-panoramique.jpg"
        images={[
          { src: '/images/van-nature-irlande.jpg', alt: 'Van aménagé stationné au cœur de la nature en Irlande' },
          { src: '/images/falaises-cote.jpg', alt: 'Falaises impressionnantes sur la côte irlandaise' },
          { src: '/images/van-route-cotiere.jpg', alt: 'Road trip en van sur une route côtière irlandaise' },
          { src: '/images/paysage-sauvage.jpg', alt: 'Paysage sauvage et verdoyant en Irlande' },
        ]}
        stats={[
          { value: '2500 km', label: 'Wild Atlantic Way' },
          { value: '15+', label: 'Loueurs vérifiés' },
          { value: '65€', label: 'À partir de /jour' },
          { value: '4.8/5', label: 'Satisfaction' },
        ]}
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Pourquoi découvrir l'Irlande en van ?"
              subtitle="L'Irlande est une destination de rêve pour les amoureux de road trips. Ses routes côtières spectaculaires, ses paysages changeants et son atmosphère unique en font le terrain de jeu idéal pour une aventure en van aménagé."
            />

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                L'<strong>Irlande</strong> offre une diversité de paysages exceptionnelle sur un territoire compact. En seulement quelques heures de route, vous pouvez passer des <strong>falaises vertigineuses de la côte atlantique</strong> aux <strong>lacs paisibles du Connemara</strong>, puis aux <strong>pubs chaleureux de villages pittoresques</strong>. Cette concentration de merveilles naturelles fait de l'île d'émeraude une destination parfaite pour la <strong>location de van</strong>.
              </p>
              <p>
                Voyager en <strong>van aménagé en Irlande</strong> vous permet de vivre une expérience authentique, loin du tourisme de masse. Vous avez la liberté de vous arrêter devant un panorama qui vous saisit, de prolonger votre séjour dans un village qui vous charme, ou de changer vos plans selon la météo irlandaise, réputée pour ses surprises. Cette flexibilité est la clé d'un <strong>road trip réussi</strong> sur cette île aux mille visages.
              </p>
              <p>
                La <strong>Wild Atlantic Way</strong>, plus longue route côtière balisée au monde avec ses 2500 kilomètres, constitue l'épine dorsale de nombreux itinéraires en van. De Cork au nord du Donegal, cette route mythique vous fait découvrir des paysages à couper le souffle, des plages désertes, des villages colorés et une culture gaélique préservée. C'est l'aventure irlandaise par excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Les avantages du voyage en van"
            subtitle="Découvrez pourquoi de plus en plus de voyageurs choisissent le van aménagé pour explorer l'Irlande."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="centered"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
                Budget et prix moyens de location
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Le coût d'une <strong>location de van en Irlande</strong> varie selon la saison, le type de véhicule et la durée de votre séjour. En moyenne, comptez entre <strong>65€ et 150€ par jour</strong> pour un van aménagé confortable pour deux personnes.
                </p>
                <p>
                  La <strong>haute saison</strong> (juillet-août) affiche les tarifs les plus élevés et nécessite une réservation anticipée. Pour optimiser votre budget, privilégiez les mois de mai-juin ou septembre-octobre : les prix sont plus doux, la météo reste agréable et l'affluence touristique est moindre.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-5">
                  <div className="text-2xl font-bold text-emerald-700">65-90€</div>
                  <div className="text-sm text-gray-600">Van compact /jour</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <div className="text-2xl font-bold text-emerald-700">90-130€</div>
                  <div className="text-sm text-gray-600">Van familial /jour</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <div className="text-2xl font-bold text-emerald-700">130-180€</div>
                  <div className="text-sm text-gray-600">Van premium /jour</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-5">
                  <div className="text-2xl font-bold text-emerald-700">500-1500€</div>
                  <div className="text-sm text-gray-600">Budget caution</div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/prix-location-van-irlande/" className="btn-primary">
                  Voir le guide complet des prix
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/van-campagne.jpg"
                alt="Voyage en van à travers la campagne irlandaise"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA />
        </div>
      </section>

      {/* Itineraries Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Itinéraires emblématiques en Irlande"
            subtitle="Découvrez nos circuits incontournables pour votre road trip en van, soigneusement élaborés pour vous faire vivre le meilleur de l'île d'émeraude."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <LinkCard
              href="/wild-atlantic-way-van/"
              title="Wild Atlantic Way"
              description="La route côtière la plus spectaculaire d'Europe : 2500 km de falaises, plages et villages authentiques le long de la côte ouest irlandaise."
              imageSrc="/images/route-panoramique.jpg"
              imageAlt="Route panoramique à travers la campagne irlandaise"
              badge="Incontournable"
            />
            <LinkCard
              href="/itineraire-irlande-10-jours-van/"
              title="Circuit 10 jours"
              description="L'itinéraire parfait pour une première découverte complète de l'Irlande : Dublin, Galway, Connemara, falaises de Moher et Ring of Kerry."
              imageSrc="/images/falaises-cote.jpg"
              imageAlt="Falaises impressionnantes sur la côte irlandaise"
              badge="Recommandé"
            />
            <LinkCard
              href="/road-trip-irlande-van/"
              title="Tous nos road trips"
              description="Explorez notre collection complète d'itinéraires pour tous les goûts et durées : de 5 jours à 3 semaines d'aventure irlandaise."
              imageSrc="/images/collines-vertes.jpg"
              imageAlt="Collines vertes et nature préservée en Irlande"
            />
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <h3>Planifier votre itinéraire en van</h3>
            <p>
              L'<strong>Irlande</strong> se prête merveilleusement bien aux <strong>road trips en van</strong>. Sa taille modeste permet de couvrir les principales attractions en <strong>10 à 14 jours</strong>, tout en prenant le temps de s'imprégner de l'atmosphère locale. Pour un premier voyage, nous recommandons de ne pas surcharger votre planning : l'essence du voyage en van réside dans la spontanéité et les découvertes inattendues.
            </p>
            <p>
              Les <strong>routes irlandaises</strong> varient considérablement en taille et en état. Si les axes principaux sont excellents, les routes secondaires peuvent être étroites et sinueuses, bordées de murets de pierre caractéristiques. Prévoyez des étapes quotidiennes raisonnables (150-200 km maximum) pour profiter pleinement des paysages sans stress.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="section-padding bg-emerald-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Conseils pratiques pour votre aventure
            </h2>
            <p className="text-emerald-100 text-lg">
              Préparez votre road trip en Irlande avec nos recommandations d'experts pour une expérience réussie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-sand-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Météo irlandaise</h3>
              <p className="text-emerald-100">
                Préparez-vous à vivre quatre saisons en une journée. Emportez des vêtements imperméables et en couches. La pluie fait partie du charme irlandais et les arcs-en-ciel sont fréquents.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-sand-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conduite à gauche</h3>
              <p className="text-emerald-100">
                Prenez votre temps le premier jour. Les ronds-points et les intersections demandent une attention particulière. Les routes secondaires étroites nécessitent de croiser les véhicules prudemment.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-sand-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Stationnement nocturne</h3>
              <p className="text-emerald-100">
                Utilisez les applications Park4Night et Campercontact pour trouver les meilleurs spots. Les campings irlandais offrent souvent des emplacements avec vue et équipements de qualité.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-sand-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connectivité</h3>
              <p className="text-emerald-100">
                La couverture 4G est bonne sur les axes principaux mais peut être limitée dans les zones reculées. Téléchargez vos cartes hors ligne avant de partir pour ne jamais être perdu.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-sand-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Horaires locaux</h3>
              <p className="text-emerald-100">
                Les commerces ferment souvent tôt en zone rurale. Faites vos courses avant 18h. Les pubs servent généralement de la nourriture jusqu'à 21h et sont parfaits pour goûter à la cuisine locale.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-sand-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Monnaie et paiements</h3>
              <p className="text-emerald-100">
                L'Irlande utilise l'euro. Les cartes bancaires sont acceptées presque partout, mais gardez du liquide pour les petits commerces ruraux et les parkings.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/dormir-en-van-irlande/" className="btn-cta">
              Guide complet : Dormir en van
            </Link>
          </div>
        </div>
      </section>

      {/* Location Points */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Où louer votre van en Irlande ?"
            subtitle="Les principales villes de départ pour votre aventure en van, avec leurs avantages respectifs."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-emerald-900">Dublin</h3>
                  <p className="text-gray-500">Capitale et principal hub</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Dublin</strong> concentre le plus grand nombre de loueurs et offre les meilleures disponibilités. L'aéroport international facilite l'accès pour les voyageurs européens et internationaux. Idéal pour débuter un circuit vers le nord (Causeway Coastal Route) ou le sud (Ring of Kerry).
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>15+ loueurs disponibles</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Navettes aéroport gratuites</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Meilleurs prix garantis</span>
                </li>
              </ul>
              <Link href="/location-van-dublin/" className="btn-secondary w-full justify-center">
                Location van Dublin
              </Link>
            </div>

            <div className="bg-gradient-to-br from-ocean-50 to-white rounded-2xl p-8 border border-ocean-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-ocean-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-emerald-900">Cork</h3>
                  <p className="text-gray-500">Porte du Sud-Ouest</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Cork</strong> est le point de départ idéal pour explorer le sud de l'Irlande : Ring of Kerry, péninsule de Dingle et début de la Wild Atlantic Way. La ville possède son propre aéroport international et une ambiance résolument authentique.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-ocean-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Accès direct Ring of Kerry</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-ocean-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Moins d'affluence qu'à Dublin</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-ocean-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ambiance locale authentique</span>
                </li>
              </ul>
              <Link href="/location-van-cork/" className="btn-secondary w-full justify-center">
                Location van Cork
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Ils ont vécu l'aventure irlandaise"
            subtitle="Découvrez les retours d'expérience de voyageurs qui ont exploré l'Irlande en van aménagé."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Second Affiliate CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AffiliateCTA
            title="Prêt pour l'aventure irlandaise ?"
            description="Comparez les offres des meilleurs loueurs de vans en Irlande. Réservation simple, annulation flexible et assistance 24/7 pour un road trip en toute sérénité."
            buttonText="Comparer les vans disponibles"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Questions fréquentes"
            subtitle="Les réponses aux questions les plus courantes sur la location de van en Irlande."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
            <div className="mt-8 text-center">
              <Link href="/faq-location-van-irlande/" className="internal-link">
                Voir toutes les questions fréquentes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-emerald">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Commencez à planifier votre road trip
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            L'Irlande vous attend avec ses paysages époustouflants, sa culture chaleureuse et ses routes légendaires. Votre aventure en van commence ici.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/itineraire-irlande-10-jours-van/" className="btn-cta">
              Découvrir l'itinéraire 10 jours
            </Link>
            <Link href="/prix-location-van-irlande/" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300">
              Comparer les prix
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
