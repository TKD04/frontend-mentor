import "./qr-code-component.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";

import nextCofnig from "@/next.config";
import qrCodePic from "@/public/qr-code-component/image-qr-code.png";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

const BASE_PATH = nextCofnig.basePath ?? "";

export const metadata: Metadata = {
  title: "Frontend Mentor | QR Code component",
  icons: {
    icon: `${BASE_PATH}/qr-code-component/favicon-32x32.png`,
  },
};

export default function QrCodeComponent() {
  return (
    <main
      className={`${outfit.className} grid min-h-screen place-items-center bg-[var(--light-gray)] p-4 text-gray-800`}
    >
      <div className="flex w-full max-w-80 flex-col gap-6 rounded-3xl bg-[var(--white)] p-4 shadow-[0_28px_32px_0_rgba(0,0,0,0.04)]">
        <Image
          src={qrCodePic}
          alt="QR Code"
          loading="eager"
          placeholder="blur"
          priority
          className="h-auto w-full rounded-xl"
        />
        <div className="mb-6 flex flex-col gap-3 px-3 text-center">
          <h1 className="text-[1.4rem] leading-7 font-bold text-[var(--dark-blue)]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[15px] leading-5 font-normal text-[var(--grayish-blue)]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
