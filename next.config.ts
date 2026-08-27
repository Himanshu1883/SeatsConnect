import type { NextConfig } from "next";
import path from "path";

const isDev = process.argv.includes("dev");

const nextConfig: NextConfig = {
  // Keep `next dev` and `next build` caches apart. Sharing `.next` is what
  // causes "Cannot find module './124.js'" and forces a server restart.
  distDir: isDev ? ".next-dev" : ".next",
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/terms", destination: "/legal", permanent: true },
      { source: "/privacy", destination: "/legal", permanent: true },
      { source: "/cookies", destination: "/legal", permanent: true },
      { source: "/compliance", destination: "/legal", permanent: true },
    ];
  },
};

export default nextConfig;
