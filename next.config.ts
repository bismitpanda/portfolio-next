import { withContentCollections } from "@content-collections/next";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "eb5loan.com",
      },
      {
        hostname: "openadmits.com",
      },
      {
        hostname: "openventure.com",
      },
      {
        hostname: "shoutstart.com",
      },
      {
        hostname: "bismitpanda.com",
      },
    ],
  },
  // typedRoutes: true,
};

export default withBundleAnalyzer(withContentCollections(nextConfig));
