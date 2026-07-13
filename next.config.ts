// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp'], // WebP format for better performance
  },
  // Enable an explicit (possibly empty) Turbopack config to silence
  // the warning when a custom webpack config is present.
  turbopack: {},
  // Optimize bundle size
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias.canvas = false
    }
    return config
  },
}

export default nextConfig