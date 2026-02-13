import type { NextConfig } from "next";

const GITHUB_PAGES_BASE = "/frontend-mentor";

export default {
  basePath: GITHUB_PAGES_BASE,
  images: {
    unoptimized: true,
  },
  output: "export",
} satisfies NextConfig;
