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
      className={`${outfit.className} grid min-h-screen place-items-center bg-[var(--lightgray)] p-4 text-gray-800`}
    >
      <div className="flex w-full max-w-80 flex-col gap-6 rounded-2xl bg-[var(--white)] p-4 shadow-[0_28px_32px_0_rgba(0,0,0,0.08)]">
        <Image
          src={qrCodePic}
          alt="QR Code"
          loading="eager"
          placeholder="blur"
          priority
          className="h-auto w-full rounded-lg"
        />
        <div className="mb-6 flex flex-col gap-3 px-3 text-center">
          <h1 className="text-[1.4rem] font-bold leading-7 text-[var(--darkblue)]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[15px] font-normal text-[var(--grayishblue)]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
