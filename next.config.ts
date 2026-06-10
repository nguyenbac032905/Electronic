import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.cellphones.com.vn",
      },
    ],
  },
};

export default nextConfig;
