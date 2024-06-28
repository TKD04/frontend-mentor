import nextConfig from "@/next.config.mjs";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import "./style.css";

const BASE_PATH = nextConfig.basePath ?? "";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | QR Code component",
  icons: {
    icon: "/qrcode-component/favicon-32x32.png",
  },
};

export default function Page() {
  return (
    <main
      className={`${outfit.className} wrapper grid min-h-screen place-items-center text-gray-800`}
    >
      <div className="card w-80 space-y-4 rounded-lg p-4 shadow-md">
        <figure>
          <Image
            height={576}
            width={576}
            src={`${BASE_PATH}/qrcode-component/image-qr-code.png`}
            alt="QR Code"
            className="w-full rounded-lg object-contain"
          />
        </figure>
        <div className="card-body space-y-4 pb-4 text-center">
          <h2 className="text-xl font-bold">
            Improve your front-end skills by building projects
          </h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
