import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep product texture and campaign detail crisp across the whole site.
    qualities: [90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
