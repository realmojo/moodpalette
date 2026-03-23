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
  ]
}
