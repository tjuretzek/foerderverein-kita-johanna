import type { MetadataRoute } from 'next'
import { siteUrl } from 'constants/pageMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/mitglied-werden', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/spenden', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/kontakt', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/datenschutz-bestimmungen', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
