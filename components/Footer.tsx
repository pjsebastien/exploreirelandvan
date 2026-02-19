import Link from 'next/link'

const footerLinks = {
  guides: [
    { name: 'Road Trip Irlande', href: '/road-trip-irlande-van/' },
    { name: 'Itinéraire 10 jours', href: '/itineraire-irlande-10-jours-van/' },
    { name: 'Wild Atlantic Way', href: '/wild-atlantic-way-van/' },
    { name: 'Dormir en van', href: '/dormir-en-van-irlande/' },
    { name: 'Camping sauvage', href: '/camping-sauvage-irlande-van/' },
  ],
  locations: [
    { name: 'Location van Dublin', href: '/location-van-dublin/' },
    { name: 'Location van Cork', href: '/location-van-cork/' },
    { name: 'Prix location van', href: '/prix-location-van-irlande/' },
  ],
  infos: [
    { name: 'FAQ', href: '/faq-location-van-irlande/' },
    { name: 'Mentions légales', href: '/mentions-legales/' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-4 4v-4m-8 8h16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-serif font-bold text-white">ExploreIrelandVan</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Votre guide expert pour découvrir l'Irlande en van aménagé. Itinéraires, conseils et astuces pour un road trip réussi sur l'île d'émeraude.
            </p>
            {/* Social links - à remplacer par vos vrais profils */}
          </div>

          {/* Guides */}
          <nav aria-label="Guides de voyage">
            <h3 className="text-white font-semibold mb-4">Guides de voyage</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations */}
          <nav aria-label="Location de van">
            <h3 className="text-white font-semibold mb-4">Location de van</h3>
            <ul className="space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Infos */}
          <nav aria-label="Informations">
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              {footerLinks.infos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ExploreIrelandVan.com - Tous droits réservés
            </p>
            <p className="text-xs text-gray-600">
              Ce site contient des liens affiliés. En réservant via ces liens, vous soutenez notre travail sans frais supplémentaires.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
