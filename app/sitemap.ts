import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://readlynx-books.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/en/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/fa/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
