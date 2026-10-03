import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const imageDomains = [
  "openadmits.com",
  "openventure.com",
  "shoutstart.com",
  "bismitpanda.com",
  "terrabridge.ai",
  "trymetis.email",
  "usephoebe.com",
  "athena-ctf.com",
  "lms.athena-ctf.com",
  "visarchitect.com",
  "www.morpheusvm.com",
  "agentichuman.io",
  "openinvests.com",
  "www.legallounge.ai",
  "openaxle.com",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: imageDomains.map((domain) => ({
      protocol: "https",
      hostname: domain,
    })),
  },
  typedRoutes: true,
};

export default withContentCollections(nextConfig);
