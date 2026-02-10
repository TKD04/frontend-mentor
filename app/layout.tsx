import "./globals.css";

import type { Metadata } from "next";
import type { JSX } from "react";

export const metadata: Metadata = {
  description:
    "Journey of what solutions TKD04 made to solve Frontend Mentor Challenges.",
  title: "TKD 04's Frontend Mentor Solutions",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => (
  <html lang="en">
    <body className="font-sans">{children}</body>
  </html>
);

export default RootLayout;
