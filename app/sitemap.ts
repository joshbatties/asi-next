import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asisteel.com.au'

  const routes = [
    '',
    '/about',
    '/contact',
    '/products',
    '/products/bar',
    '/products/fabrication',
    '/products/mesh',
    '/products/tools',
    '/projects',
    '/services',
    '/services/processing',
    '/services/support',
    '/services/delivery',
    '/services/planning',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
  }))
}