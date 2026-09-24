import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account", "/cart"],
    },
    sitemap: "https://nava-atelier.com/sitemap.xml",
  };
}
