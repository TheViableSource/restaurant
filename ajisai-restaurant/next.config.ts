import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use unoptimized images in development for placeholder compatibility
    unoptimized: process.env.NODE_ENV === 'development',
    // Define remote patterns if using external image sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Supported image formats
    formats: ['image/avif', 'image/webp'],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Compress responses
  compress: true,
};

export default nextConfig;
