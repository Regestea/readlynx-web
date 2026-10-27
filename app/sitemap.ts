import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const en = siteUrl("/en/");
  const fa = siteUrl("/fa/");
  return [
    {
      url: en,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en, fa } },
    },
    {
      url: fa,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en, fa } },
    },
  ];
}
