import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | ExploreIrelandVan',
  description: 'Politique de confidentialité du site ExploreIrelandVan.com - Informations sur la collecte et le traitement de vos données personnelles.',
  alternates: {
    canonical: 'https://www.exploreIrelandvan.com/politique-confidentialite/',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PolitiqueConfidentialitePage() {
  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Politique de confidentialité' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 gradient-emerald">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} variant="light" />
          <div className="max-w-3xl mt-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-emerald-100">
              Comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg text-gray-600">

            <h2>1. Introduction</h2>
            <p>
              Chez <strong>ExploreIrelandVan.com</strong>, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site.
            </p>

            <h2>2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est :
            </p>
            <ul>
              <li><strong>Nom :</strong> Clément Jolie</li>
              <li><strong>Email :</strong> contact@exploreirelandvan.com</li>
            </ul>

            <h2>3. Données collectées</h2>
            <p>
              Nous pouvons collecter les types de données suivants :
            </p>

            <h3>3.1 Données de navigation</h3>
            <ul>
              <li>Adresse IP (anonymisée)</li>
              <li>Type de navigateur et système d'exploitation</li>
              <li>Pages visitées et durée de visite</li>
              <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
            </ul>

            <h3>3.2 Cookies</h3>
            <p>
              Notre site utilise des cookies pour :
            </p>
            <ul>
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> pour comprendre comment les visiteurs utilisent le site (Google Analytics)</li>
              <li><strong>Cookies de préférence :</strong> pour mémoriser vos choix (acceptation des cookies)</li>
            </ul>

            <h2>4. Finalités du traitement</h2>
            <p>
              Vos données sont collectées pour les finalités suivantes :
            </p>
            <ul>
              <li>Améliorer l'expérience utilisateur sur notre site</li>
              <li>Analyser le trafic et les performances du site</li>
              <li>Personnaliser le contenu affiché</li>
              <li>Assurer la sécurité du site</li>
            </ul>

            <h2>5. Base légale du traitement</h2>
            <p>
              Le traitement de vos données repose sur :
            </p>
            <ul>
              <li><strong>Votre consentement</strong> pour les cookies non essentiels</li>
              <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services et la sécurité du site</li>
            </ul>

            <h2>6. Partage des données</h2>
            <p>
              Nous ne vendons pas vos données personnelles. Vos données peuvent être partagées avec :
            </p>
            <ul>
              <li><strong>Google Analytics :</strong> pour l'analyse du trafic (données anonymisées)</li>
              <li><strong>Vercel :</strong> notre hébergeur, pour le fonctionnement technique du site</li>
              <li><strong>Partenaires affiliés :</strong> uniquement lorsque vous cliquez sur un lien d'affiliation (redirection vers leur site)</li>
            </ul>

            <h2>7. Durée de conservation</h2>
            <p>
              Les données de navigation sont conservées pendant une durée maximale de 26 mois. Les cookies ont une durée de vie variable selon leur type, généralement de 13 mois maximum.
            </p>

            <h2>8. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>contact@exploreirelandvan.com</strong>
            </p>

            <h2>9. Gestion des cookies</h2>
            <p>
              Vous pouvez gérer vos préférences en matière de cookies :
            </p>
            <ul>
              <li>Via la bannière de cookies lors de votre première visite</li>
              <li>Via les paramètres de votre navigateur</li>
              <li>En utilisant des outils de blocage de cookies</li>
            </ul>
            <p>
              La désactivation de certains cookies peut affecter votre expérience de navigation sur le site.
            </p>

            <h2>10. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
            </p>

            <h2>11. Transfert de données hors UE</h2>
            <p>
              Certaines données peuvent être transférées vers des pays situés en dehors de l'Union Européenne (notamment les États-Unis via nos prestataires techniques). Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types, certifications).
            </p>

            <h2>12. Modifications de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.
            </p>

            <h2>13. Contact et réclamation</h2>
            <p>
              Pour toute question concernant cette politique ou pour exercer vos droits, contactez-nous : <strong>contact@exploreirelandvan.com</strong>
            </p>
            <p>
              En cas de litige non résolu, vous pouvez déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
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
