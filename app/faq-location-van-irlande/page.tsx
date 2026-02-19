import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionTitle from '@/components/SectionTitle'
import FAQAccordion from '@/components/FAQAccordion'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata: Metadata = {
  title: 'FAQ location van Irlande',
  description: 'Toutes les réponses à vos questions sur la location de van en Irlande : permis, assurance, conduite à gauche, stationnement, budget et conseils pratiques.',
  alternates: {
    canonical: 'https://www.exploreirelandvan.com/faq-location-van-irlande/',
  },
  openGraph: {
    title: 'FAQ location van Irlande',
    description: 'Toutes les réponses à vos questions sur la location de van en Irlande : permis, assurance, conduite à gauche, stationnement, budget et conseils pratiques.',
    url: 'https://www.exploreirelandvan.com/faq-location-van-irlande/',
    type: 'article',
    images: [
      {
        url: 'https://www.exploreirelandvan.com/images/van-paysage-vert.jpg',
        width: 1200,
        height: 630,
        alt: 'Van aménagé dans un paysage vert en Irlande',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ location van Irlande',
    description: 'Toutes les réponses à vos questions sur la location de van en Irlande : permis, assurance, conduite à gauche, stationnement, budget et conseils pratiques.',
    images: ['https://www.exploreirelandvan.com/images/van-paysage-vert.jpg'],
  },
}

const faqItems = [
  {
    question: 'Quel permis faut-il pour louer un van en Irlande ?',
    answer: 'Le permis B français ou européen suffit pour louer la plupart des vans aménagés en Irlande. Les véhicules de location restent généralement en dessous de 3,5 tonnes, ce qui correspond à la catégorie B. Vérifiez toutefois les conditions du loueur, certains exigent un permis détenu depuis au moins 2 ans et un âge minimum de 23-25 ans. Pour les camping-cars de plus de 3,5 tonnes (rares en location), un permis C serait nécessaire.',
  },
  {
    question: 'Est-il difficile de conduire à gauche en Irlande ?',
    answer: 'La conduite à gauche est une appréhension courante mais la plupart des voyageurs s\'y adaptent en quelques heures. Les vans de location ont le volant à droite, ce qui facilite l\'adaptation. Les ronds-points (très fréquents en Irlande) et les intersections demandent une attention particulière les premiers jours. Conseil : commencez par des trajets courts et évitez de partir en ville le premier jour. Les routes irlandaises sont généralement moins fréquentées que sur le continent, ce qui facilite l\'apprentissage.',
  },
  {
    question: 'Quel budget prévoir pour un road trip en van de 10 jours ?',
    answer: 'Pour 2 personnes sur 10 jours, comptez environ 1500-2000€ tout compris (hors vols). Ce budget inclut : location du van (700-1000€), carburant (150-200€), campings/aires (100-150€), alimentation (250-350€) et activités (100-150€). En mode économique (van compact, camping sauvage, cuisine maison), vous pouvez descendre à 1200€. En haute saison (juillet-août), les tarifs de location sont 30-40% plus élevés.',
  },
  {
    question: 'Peut-on dormir n\'importe où en van en Irlande ?',
    answer: 'Le camping sauvage n\'est pas officiellement autorisé partout en Irlande, mais le stationnement nocturne est généralement toléré si vous restez discret et respectueux. Évitez les parcs nationaux, les centres-villes et les propriétés privées sans autorisation. Les parkings côtiers, aires de pique-nique rurales et terrains agricoles (avec accord) sont souvent possibles. Utilisez des applications comme Park4Night pour trouver des spots validés par la communauté. Les campings offrent plus de confort pour 20-35€/nuit.',
  },
  {
    question: 'Quelle est la meilleure période pour un road trip en Irlande ?',
    answer: 'La période idéale s\'étend de mai à septembre. Juin offre les journées les plus longues (jusqu\'à 22h de clarté) avec une météo généralement clémente. Juillet-août sont les mois les plus chauds mais aussi les plus touristiques et les plus chers. Mai et septembre offrent un excellent compromis : prix plus doux, moins de monde et météo souvent agréable. L\'Irlande reste belle toute l\'année, mais préparez-vous à la pluie quelle que soit la saison !',
  },
  {
    question: 'Faut-il réserver son van longtemps à l\'avance ?',
    answer: 'En haute saison (juin à août), réservez 2-3 mois à l\'avance pour avoir le choix du véhicule et les meilleurs tarifs. Les réservations anticipées bénéficient souvent de réductions. Pendant l\'intersaison (mai, septembre), 3-4 semaines suffisent généralement. En basse saison, vous pouvez parfois trouver des vans disponibles au dernier moment avec des offres intéressantes. Dans tous les cas, comparez les loueurs car les prix varient significativement.',
  },
  {
    question: 'L\'assurance est-elle incluse dans la location ?',
    answer: 'L\'assurance de base (responsabilité civile et vol) est généralement incluse dans le tarif de location. Cependant, une franchise élevée (500-1500€) s\'applique en cas de dommages. Il est fortement recommandé de souscrire une réduction de franchise (CDW - Collision Damage Waiver) pour 15-25€/jour. Certaines cartes bancaires premium offrent des assurances complémentaires, vérifiez vos garanties avant de partir. Lisez attentivement le contrat pour les exclusions (pneus, pare-brise, dessous de caisse).',
  },
  {
    question: 'Comment fonctionne la caution pour la location ?',
    answer: 'La caution (500-1500€ selon le véhicule) est bloquée sur votre carte bancaire au moment de la prise en charge. Elle n\'est pas débitée mais simplement pré-autorisée. Elle est libérée dans les 7-15 jours suivant la restitution si aucun dommage n\'est constaté. Assurez-vous que votre carte a un plafond suffisant. Certains loueurs acceptent les cartes de débit mais peuvent exiger un dépôt en espèces.',
  },
  {
    question: 'Les routes irlandaises sont-elles adaptées aux vans ?',
    answer: 'Les grands axes (N roads et M motorways) sont excellents et parfaitement adaptés aux vans. Les routes secondaires (R roads et L roads) peuvent être étroites et sinueuses, bordées de murets de pierre caractéristiques. Sur la Wild Atlantic Way et dans le Connemara, certains passages nécessitent de croiser prudemment les véhicules. Un van standard (6m max) passe partout, les camping-cars plus grands peuvent avoir des difficultés sur certaines routes de montagne.',
  },
  {
    question: 'Y a-t-il du réseau mobile partout en Irlande ?',
    answer: 'La couverture 4G est bonne sur les axes principaux et dans les villes, mais peut être limitée voire inexistante dans les zones reculées (Connemara, Donegal, certaines côtes). Téléchargez impérativement vos cartes hors ligne (Google Maps, Maps.me) avant de partir. Le WiFi est disponible dans la plupart des campings et pubs. Si vous avez besoin d\'une connexion fiable, envisagez un boîtier WiFi portable avec carte SIM locale.',
  },
  {
    question: 'Où faire le plein d\'eau et la vidange des eaux usées ?',
    answer: 'La plupart des campings disposent de bornes de services (eau propre, vidange eaux grises et cassette WC). Certaines stations-service offrent aussi ces services moyennant un petit supplément (2-5€). Des aires de services gratuites existent le long des routes principales. Planifiez vos arrêts en fonction de votre autonomie en eau (généralement 2-3 jours selon votre consommation). Les applications Park4Night et Campercontact indiquent les points de service.',
  },
  {
    question: 'Faut-il un adaptateur électrique en Irlande ?',
    answer: 'Oui, l\'Irlande utilise des prises de type G (trois broches rectangulaires), comme le Royaume-Uni. Apportez un adaptateur pour recharger vos appareils. Dans les campings, les branchements électriques pour les vans utilisent la norme européenne (prise bleue CEE), donc pas de souci de ce côté. Vérifiez que votre van dispose d\'un convertisseur 12V/220V si vous souhaitez utiliser des appareils électriques en autonomie.',
  },
]

export default function FAQPage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'FAQ Location Van Irlande' },
  ]

  return (
    <>
      {/* Hero */}
      <PageHero
        title="FAQ Location Van Irlande"
        subtitle="Toutes les réponses à vos questions sur la location de van en Irlande : permis, budget, conduite, stationnement et conseils pratiques."
        breadcrumbItems={breadcrumbItems}
        image="/images/van-paysage-vert.jpg"
        imageAlt="Van aménagé face aux paysages verdoyants d'Irlande"
        badge="Questions fréquentes"
      />

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} includeSchema={true} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AffiliateCTA
            title="Prêt à réserver votre van ?"
            description="Comparez les offres des meilleurs loueurs irlandais et trouvez le van parfait pour votre aventure."
          />
        </div>
      </section>

      {/* Additional Questions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-emerald-900 mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-gray-600 mb-8">
              Consultez nos guides détaillés pour plus d'informations sur la préparation de votre road trip en Irlande.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/prix-location-van-irlande/" className="bg-gray-50 rounded-xl p-4 hover:bg-emerald-50 transition-colors">
                <span className="font-semibold text-emerald-900 block mb-1">Prix et budget</span>
                <span className="text-sm text-gray-500">Guide complet des tarifs</span>
              </Link>
              <Link href="/dormir-en-van-irlande/" className="bg-gray-50 rounded-xl p-4 hover:bg-emerald-50 transition-colors">
                <span className="font-semibold text-emerald-900 block mb-1">Où dormir</span>
                <span className="text-sm text-gray-500">Aires et campings</span>
              </Link>
              <Link href="/itineraire-irlande-10-jours-van/" className="bg-gray-50 rounded-xl p-4 hover:bg-emerald-50 transition-colors">
                <span className="font-semibold text-emerald-900 block mb-1">Itinéraire</span>
                <span className="text-sm text-gray-500">Circuit 10 jours</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
