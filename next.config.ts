import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },

  images: {
    // Modern formats (Next will auto-pick best)
    formats: ["image/avif", "image/webp"],

    // Device breakpoints for responsive images
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images aggressively
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days

    // Keep this true (default) for production
    unoptimized: false,
  },

  // Enable gzip + brotli
  compress: true,

  // Safer for prod builds
  poweredByHeader: false,
};

export default nextConfig;
