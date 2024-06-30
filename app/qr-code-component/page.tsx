import qrCodePic from "@/public/qr-code-component/image-qr-code.png";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import "./style.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | QR Code component",
  icons: {
    icon: "/qr-code-component/favicon-32x32.png",
  },
};

export default function Page() {
  return (
    <main
      className={`${outfit.className} wrapper grid min-h-screen place-items-center p-4 text-gray-800`}
    >
      <div className="card w-80 space-y-2 rounded-2xl p-4 shadow">
        <figure>
          <Image
            src={qrCodePic}
            alt="QR Code"
            placeholder="blur"
            priority
            className="w-full rounded-lg object-contain"
          />
        </figure>
        <div className="card__body space-y-4 p-3 pb-5 text-center">
          <h1 className="text-xl font-bold">
            Improve your front-end skills by building projects
          </h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
