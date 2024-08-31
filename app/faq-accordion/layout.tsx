import nextCofnig from "@/next.config.mjs";
import type { Metadata } from "next";

const BASE_PATH = nextCofnig.basePath ?? "";

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ accordion",
  icons: {
    icon: `${BASE_PATH}/faq-accordion/favicon-32x32.png`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
