import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import type { JSX } from "react";

import qrCodeImg from "@/public/qr-code-component/image-qr-code.png";

import style from "./qr-code-component.module.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | QR Code component",
};

const Page = (): JSX.Element => (
  <main
    className={`${style["colors"]} ${outfit.className} grid min-h-screen place-items-center bg-(--light-gray) p-4 text-gray-800`}
  >
    <div className="flex w-full max-w-80 flex-col gap-6 rounded-3xl bg-(--white) p-4 shadow-[0_28px_32px_0_rgba(0,0,0,0.04)]">
      <Image
        alt="QR Code"
        className="h-auto w-full rounded-xl"
        loading="eager"
        placeholder="blur"
        preload
        src={qrCodeImg}
      />
      <div className="mb-6 flex flex-col gap-3 px-3 text-center">
        <h1 className="text-[1.4rem] leading-7 font-bold text-(--dark-blue)">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[15px] leading-5 font-normal text-(--grayish-blue)">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  </main>
);

export default Page;
