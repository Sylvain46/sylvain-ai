import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? "/sylvain-ai" : "",
  },
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/sylvain-ai" : undefined,
  assetPrefix: isProduction ? "/sylvain-ai/" : undefined,
};

export default nextConfig;
