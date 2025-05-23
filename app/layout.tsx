import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description:
    "Journey of what solutions TKD04 made to solve Frontend Mentor Challenges.",
  title: "TKD 04's Frontend Mentor Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
