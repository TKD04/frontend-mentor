import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TKD 04's Frontend Mentor Solutions",
  description:
    "Journey of what solutions TKD04 made to solve Frontend Mentor Challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
