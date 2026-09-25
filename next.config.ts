import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 is the default for every image; 90 is reserved for the full-bleed campaign hero
    qualities: [75, 90],
  },
};

export default nextConfig;
