import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from any hostname for flexibility during development
  images: {
    remotePatterns: [],
    // Optimize local images
    formats: ["image/avif", "image/webp"],
  },
  // Enable React strict mode for best practices
  reactStrictMode: true,
};

export default nextConfig;