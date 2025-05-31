import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

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
};

export default withContentCollections(nextConfig);
