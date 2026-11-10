import type { MetadataRoute } from "next";

const base = "https://malin-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["ja", "en"].map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: { ja: `${base}/ja`, en: `${base}/en` },
    },
  }));
}
