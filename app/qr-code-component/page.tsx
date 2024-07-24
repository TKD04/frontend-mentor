"use client";

import qrCodePic from "@/public/qr-code-component/image-qr-code.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import "./style.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function Page() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main
      className={`${outfit.className} grid min-h-screen place-items-center bg-[var(--light-gray)] p-4 text-gray-800`}
    >
      <div
        className="flex w-full max-w-80 flex-col gap-6 rounded-3xl bg-[var(--white)] p-4 shadow-[0_28px_32px_0_rgba(0,0,0,0.04)]"
        data-aos="fade-up"
      >
        <Image
          src={qrCodePic}
          alt="QR Code"
          loading="eager"
          placeholder="blur"
          priority
          className="h-auto w-full rounded-xl"
        />
        <div className="mb-6 flex flex-col gap-3 px-3 text-center">
          <h1 className="text-[1.4rem] font-bold leading-7 text-[var(--dark-blue)]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[15px] font-normal leading-5 text-[var(--grayish-blue)]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
