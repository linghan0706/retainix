import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  return [
    { url: `${base}/`, changeFrequency: "daily", priority: 1 },
    { url: `${base}/login`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/register`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/documents`, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/outlines`, changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/stats`, changeFrequency: "daily", priority: 0.7 },
  ];
}
