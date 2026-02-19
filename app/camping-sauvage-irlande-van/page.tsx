import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata: Metadata = {
  title: 'Camping sauvage Irlande en van | Est-ce autorisé ? Règles et spots',
  description: 'Tout savoir sur le camping sauvage en van en Irlande : réglementation, zones autorisées, bonnes pratiques et conseils pour bivouaquer en toute légalité.',
  alternates: {
    canonical: 'https://www.exploreirelandvan.com/camping-sauvage-irlande-van/',
  },
  openGraph: {
    title: 'Camping sauvage Irlande en van | Est-ce autorisé ? Règles et spots',
    description: 'Tout savoir sur le camping sauvage en van en Irlande : réglementation, zones autorisées, bonnes pratiques et conseils pour bivouaquer en toute légalité.',
    url: 'https://www.exploreirelandvan.com/camping-sauvage-irlande-van/',
    type: 'article',
    images: [
      {
        url: 'https://www.exploreirelandvan.com/images/van-nature-irlande.jpg',
        width: 1200,
        height: 630,
        alt: 'Van aménagé stationné au cœur de la nature en Irlande',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camping sauvage Irlande en van | Est-ce autorisé ? Règles et spots',
    description: 'Tout savoir sur le camping sauvage en van en Irlande : réglementation, zones autorisées, bonnes pratiques et conseils pour bivouaquer en toute légalité.',
    images: ['https://www.exploreirelandvan.com/images/van-nature-irlande.jpg'],
  },
}

export default function CampingSauvagePage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Dormir en van', href: '/dormir-en-van-irlande/' },
    { name: 'Camping sauvage' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Camping sauvage en Irlande en van : est-ce autorisé ?',
            description: 'Tout savoir sur le camping sauvage en van en Irlande : réglementation, zones autorisées, bonnes pratiques et conseils pour bivouaquer en toute légalité.',
            image: 'https://www.exploreirelandvan.com/images/van-nature-irlande.jpg',
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
              '@id': 'https://www.exploreirelandvan.com/camping-sauvage-irlande-van/',
            },
          }),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Camping sauvage en Irlande en van : est-ce autorisé ?"
        subtitle="Guide complet sur la réglementation du camping sauvage en Irlande, les bonnes pratiques et les endroits où bivouaquer en toute sérénité."
        breadcrumbItems={breadcrumbItems}
        image="/images/van-nature-irlande.jpg"
        imageAlt="Van aménagé stationné au cœur de la nature en Irlande"
        badge="Bivouac"
      />

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600">
              <h2>La réglementation en Irlande</h2>
              <p>
                En <strong>Irlande</strong>, le <strong>camping sauvage</strong> n'est pas officiellement autorisé sur les terres publiques sans permission. Cependant, la pratique est généralement <strong>tolérée</strong> tant que vous respectez certaines règles et que vous restez discret.
              </p>
              <p>
                La loi irlandaise distingue clairement le "parking" (stationner pour dormir dans son véhicule) du "camping" (installer des équipements extérieurs comme tables, chaises, auvent). Le premier est souvent toléré là où le stationnement n'est pas interdit, tandis que le second nécessite une autorisation explicite.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">Ce qu'il faut retenir</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Le stationnement nocturne discret est généralement toléré</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Le camping avec équipements extérieurs nécessite une autorisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sur terrain privé, demandez toujours la permission au propriétaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Zones protégées (parcs nationaux, réserves) : interdit sauf exception</span>
                  </li>
                </ul>
              </div>

              <h2>Zones à éviter</h2>
              <p>
                Certaines zones sont strictement interdites au camping sauvage en Irlande :
              </p>
              <ul>
                <li><strong>Parcs nationaux</strong> : Killarney, Connemara, Burren, Wicklow... Le camping y est interdit sauf sur les aires dédiées.</li>
                <li><strong>Centres-villes</strong> : Dublin, Galway, Cork et autres grandes villes n'autorisent pas le stationnement nocturne.</li>
                <li><strong>Propriétés privées sans autorisation</strong> : Respectez les panneaux "No Camping".</li>
                <li><strong>Zones côtières protégées</strong> : Certaines plages et falaises sont classées zones de conservation.</li>
              </ul>

              <h2>Zones généralement tolérées</h2>
              <p>
                En revanche, le stationnement nocturne est souvent possible dans ces endroits :
              </p>
              <ul>
                <li><strong>Parkings de plages</strong> hors saison et la nuit (vérifiez les panneaux)</li>
                <li><strong>Aires de pique-nique</strong> sans interdiction explicite</li>
                <li><strong>Parkings de randonnée</strong> en zone rurale</li>
                <li><strong>Zones industrielles</strong> et commerciales le weekend</li>
                <li><strong>Terrains agricoles</strong> avec l'accord du fermier</li>
              </ul>

              <h2>Bonnes pratiques essentielles</h2>

              <h3>Avant de vous installer</h3>
              <ul>
                <li>Arrivez tard (après 19h) et partez tôt (avant 9h)</li>
                <li>Vérifiez qu'il n'y a pas de panneau d'interdiction</li>
                <li>Consultez les avis récents sur Park4Night</li>
                <li>Repérez un plan B à proximité (camping ou autre spot)</li>
              </ul>

              <h3>Pendant la nuit</h3>
              <ul>
                <li>Restez dans votre véhicule, pas de table ni chaise dehors</li>
                <li>Évitez la musique et les lumières extérieures</li>
                <li>Ne faites pas de feu (interdit presque partout)</li>
                <li>Soyez prêt à partir si on vous le demande</li>
              </ul>

              <h3>En partant</h3>
              <ul>
                <li>Ne laissez aucune trace de votre passage</li>
                <li>Emportez tous vos déchets</li>
                <li>Utilisez les aires de vidange appropriées (jamais dans la nature)</li>
                <li>Laissez l'endroit plus propre que vous l'avez trouvé</li>
              </ul>

              <h2>Les Irlandais et les vanlifers</h2>
              <p>
                Les Irlandais sont généralement <strong>très accueillants</strong> envers les voyageurs respectueux. Il n'est pas rare qu'un habitant vous propose spontanément de stationner sur son terrain ou vous indique un bon spot. En cas de problème, restez poli et courtois : la plupart du temps, une simple explication suffit.
              </p>
              <p>
                Si un gardien, un propriétaire ou la police vous demande de partir, faites-le sans discuter. C'est la meilleure façon de préserver la tolérance dont bénéficient les voyageurs en van en Irlande.
              </p>

              <h2>Équipements pour l'autonomie</h2>
              <p>
                Pour pratiquer le camping sauvage confortablement, assurez-vous que votre van dispose de :
              </p>
              <ul>
                <li><strong>Batterie auxiliaire</strong> suffisante (ou panneau solaire)</li>
                <li><strong>Réservoir d'eau</strong> propre de bonne capacité</li>
                <li><strong>Toilettes portables</strong> ou sèches</li>
                <li><strong>Système de chauffage</strong> autonome (les nuits irlandaises sont fraîches)</li>
                <li><strong>Éclairage discret</strong> (LED basse consommation)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Trouvez un van équipé pour l'autonomie"
            description="Comparez les vans avec toilettes, douche et grande autonomie pour vos nuits en pleine nature."
          />
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Guides connexes"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/dormir-en-van-irlande/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Où dormir en van
                </h3>
                <p className="text-gray-600 text-sm">
                  Toutes les options : campings, aires, spots...
                </p>
              </div>
            </Link>
            <Link href="/itineraire-irlande-10-jours-van/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Itinéraire 10 jours
                </h3>
                <p className="text-gray-600 text-sm">
                  Circuit avec spots de nuit recommandés.
                </p>
              </div>
            </Link>
            <Link href="/wild-atlantic-way-van/" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="font-semibold text-emerald-900 mb-2 group-hover:text-emerald-600">
                  Wild Atlantic Way
                </h3>
                <p className="text-gray-600 text-sm">
                  Les meilleurs spots de la côte ouest.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
