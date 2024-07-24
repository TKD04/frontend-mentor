import nextCofnig from "@/next.config.mjs";
import type { Metadata } from "next";

const BASE_PATH = nextCofnig.basePath ?? "";

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe page",
  icons: {
    icon: `${BASE_PATH}/recipe-page/favicon-32x32.png`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
