import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/cv",
        permanent: true, // 301 — tells search engines /cv is canonical
      },
    ];
  },
};

export default nextConfig;
