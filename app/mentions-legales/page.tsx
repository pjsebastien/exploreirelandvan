import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Mentions Légales | ExploreIrelandVan',
  description: 'Mentions légales du site ExploreIrelandVan.com - Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
  alternates: {
    canonical: 'https://www.exploreIrelandvan.com/mentions-legales/',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Mentions légales' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 gradient-emerald">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} variant="light" />
          <div className="max-w-3xl mt-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Mentions Légales
            </h1>
            <p className="text-emerald-100">
              Informations légales concernant le site ExploreIrelandVan.com
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg text-gray-600">

            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>ExploreIrelandVan.com</strong> est édité par :
            </p>
            <ul>
              <li><strong>Nom :</strong> Clément Jolie</li>
              <li><strong>Statut :</strong> Entrepreneur individuel</li>
              <li><strong>Adresse email :</strong> contact@exploreirelandvan.com</li>
            </ul>

            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul>
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
            </ul>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Clément Jolie ou de ses partenaires, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Clément Jolie.
            </p>

            <h2>4. Liens d'affiliation</h2>
            <p>
              Ce site contient des <strong>liens d'affiliation</strong> vers des services de location de van. Lorsque vous effectuez une réservation via ces liens, nous pouvons percevoir une commission de la part du partenaire, sans surcoût pour vous.
            </p>
            <p>
              Cette rémunération nous permet de maintenir ce site et de vous proposer du contenu gratuit et de qualité. Les recommandations présentes sur ce site sont basées sur notre expérience et nos recherches, indépendamment des partenariats commerciaux.
            </p>

            <h2>5. Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et régulièrement mises à jour. Toutefois, elles peuvent contenir des inexactitudes ou des omissions.
            </p>
            <p>
              ExploreIrelandVan.com ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site, ni des dommages résultant de l'utilisation des informations fournies.
            </p>
            <p>
              Les prix, tarifs et disponibilités mentionnés sur ce site sont donnés à titre indicatif et peuvent varier selon les loueurs et les périodes.
            </p>

            <h2>6. Données personnelles</h2>
            <p>
              Pour toute information concernant la collecte et le traitement de vos données personnelles, veuillez consulter notre <Link href="/politique-confidentialite/" className="text-emerald-600 hover:text-emerald-800">Politique de Confidentialité</Link>.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>

            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse suivante : <strong>contact@exploreirelandvan.com</strong>
            </p>

            <p className="text-sm text-gray-500 mt-12">
              Dernière mise à jour : Février 2025
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
