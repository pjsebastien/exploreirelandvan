import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.exploreirelandvan.com'

  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/road-trip-irlande-van/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/itineraire-irlande-10-jours-van/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prix-location-van-irlande/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dormir-en-van-irlande/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/camping-sauvage-irlande-van/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/wild-atlantic-way-van/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-van-dublin/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location-van-cork/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq-location-van-irlande/`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return routes
}
