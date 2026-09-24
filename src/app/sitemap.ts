import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { COLLECTIONS } from "@/data/collections";
import { CRAFTS } from "@/data/crafts";
import { JOURNAL_STORIES } from "@/data/journal";

const BASE_URL = "https://nava-atelier.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/new",
    "/shop",
    "/shop/women",
    "/shop/men",
    "/shop/couture",
    "/shop/accessories",
    "/collections",
    "/craft",
    "/journal",
    "/about",
    "/contact",
    "/search",
    "/shipping",
    "/returns",
    "/size-guide",
    "/care",
    "/privacy",
    "/terms",
    "/accessibility",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/shop") ? 0.9 : 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${BASE_URL}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.85,
  }));

  const collectionRoutes: MetadataRoute.Sitemap = COLLECTIONS.map((c) => ({
    url: `${BASE_URL}/collections/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const craftRoutes: MetadataRoute.Sitemap = CRAFTS.map((c) => ({
    url: `${BASE_URL}/craft/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const journalRoutes: MetadataRoute.Sitemap = JOURNAL_STORIES.map((j) => ({
    url: `${BASE_URL}/journal/${j.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...collectionRoutes,
    ...craftRoutes,
    ...journalRoutes,
  ];
}
