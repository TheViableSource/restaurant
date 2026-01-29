import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use unoptimized images in development for placeholder compatibility
    unoptimized: process.env.NODE_ENV === 'development',
    // Define remote patterns for external image sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
    // Supported image formats for optimization
    formats: ['image/avif', 'image/webp'],
    // Configure device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Compress responses
  compress: true,
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
