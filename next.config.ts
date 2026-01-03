import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable styled-components support (SWC compiler for better performance)
  compiler: {
    styledComponents: true,
  },

  // Optimized image configuration
  images: {
    // Prioritize modern formats — Next.js will serve AVIF/WebP when supported
    formats: ["image/avif", "image/webp"],

    // Responsive breakpoints
    deviceSizes: [640, 768, 1080, 1200, 1920, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Aggressive caching for optimized images (60 days is good for static assets)
    minimumCacheTTL: 60 * 60 * 24 * 60, // 60 days

    // Allow images from common external domains (add yours as needed)
    // Example: remotePatterns: [{ protocol: "https", hostname: "**.example.com" }],
    remotePatterns: [
      // Uncomment and customize if you load images from external sources
      // {
      //   protocol: "https",
      //   hostname: "images.unsplash.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "your-cdn.com",
      // },
    ],

    // Keep unoptimized: false (default) — lets Next.js optimize images
    unoptimized: false,
  },

  // Enable compression (gzip & brotli) — already on by default in production
  compress: true,

  // Security: Remove X-Powered-By header
  poweredByHeader: false,

  // Improve build performance & reliability
  eslint: {
    // Skip ESLint during production builds (optional — remove if you want strict checks)
    // Recommended only if you have CI linting separately
    ignoreDuringBuilds: true,
  },

  typescript: {
    // Skip type