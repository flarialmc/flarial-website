import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Cloudflare Pages — static export to ./out so wrangler can upload */
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  /* Tighten the workspace root inference Next 16 complains about
     when multiple lockfiles are present on the dev machine. */
  turbopack: { root: __dirname },
  experimental: {
    /* Tree-shake icon library imports — only ship the icons we actually use */
    optimizePackageImports: ["lucide-react", "framer-motion", "sonner"],
  },
};

export default nextConfig;
