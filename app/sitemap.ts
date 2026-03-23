import type { MetadataRoute } from "next"

const SITE_URL = "https://moodpalette.ssdown.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL,
          ko: SITE_URL,
        },
      },
    },
    {
      url: `${SITE_URL}/blog/how-to-extract-colors-from-image`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/color-palette-for-branding`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/color-theory-for-designers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
