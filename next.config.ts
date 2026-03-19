import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.ytimg.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" }
    ],
  },
};

export default nextConfig;
