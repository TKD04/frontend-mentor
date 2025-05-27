import "./social-links-profile.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import nextCofnig from "@/next.config";
import userAvatarPic from "@/public/social-links-profile/avatar-jessica.jpeg";

import socialSiteLinks from "./social-site-links";

const BASE_PATH = nextCofnig.basePath ?? "";
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Social links profile",
  icons: {
    icon: `${BASE_PATH}/social-links-profile/favicon-32x32.png`,
  },
};

export default function SocialLinksProfile() {
  return (
    <main
      className={`${inter.className} grid min-h-screen place-items-center bg-[var(--off-black)] p-4 text-[var(--white)]`}
    >
      <div className="flex w-full max-w-[20.5rem] flex-col gap-6 rounded-xl bg-[var(--dark-grey)] p-6 md:max-w-96 md:p-10">
        <div className="flex flex-col items-center text-center">
          <Image
            src={userAvatarPic}
            alt="Avatar"
            loading="eager"
            placeholder="blur"
            priority
            className="mb-6 size-[5.5rem] rounded-full"
          />
          <h1 className="mb-2 text-2xl font-semibold">Jessica Randall</h1>
          <span className="mb-6 text-sm font-semibold text-[var(--green)]">
            London, United Kingdom
          </span>
          <p className="text-[14px] font-normal">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>
        <ul className="flex flex-col gap-4 text-center">
          {socialSiteLinks.map((socialSiteLink) => (
            <li key={socialSiteLink.siteName}>
              <Link href={socialSiteLink.url} rel="noopener noreferrer">
                <div className="rounded-lg bg-[var(--grey)] py-3 text-sm font-semibold transition-colors hover:bg-[var(--green)] hover:text-[var(--dark-grey)]">
                  {socialSiteLink.siteName}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
