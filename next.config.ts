import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";
const isProd = true;

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  // assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: isProd ? "/mb-gallery-client/" : "",
  basePath: isProd ? "/mb-gallery-client" : "",
  output: "export",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
