import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import userAvatarImg from "@/public/social-links-profile/avatar-jessica.jpeg";

import style from "./social-links-profile.module.css";
import SOCIAL_SITE_LINKS from "./social-site-links";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Social links profile",
};

const Page = (): JSX.Element => (
  <main
    className={`${style["colors"]} ${inter.className} grid min-h-screen place-items-center bg-(--off-black) p-4 text-(--white)`}
  >
    <div className="flex w-full max-w-82 flex-col gap-6 rounded-xl bg-(--dark-grey) p-6 md:max-w-96 md:p-10">
      <div className="flex flex-col items-center text-center">
        <Image
          alt="Avatar"
          className="mb-6 size-22 rounded-full"
          loading="eager"
          placeholder="blur"
          preload
          src={userAvatarImg}
        />
        <h1 className="mb-2 text-2xl font-semibold">Jessica Randall</h1>
        <span className="mb-6 text-sm font-semibold text-(--green)">
          London, United Kingdom
        </span>
        <p className="text-[14px] font-normal">
          &quot;Front-end developer and avid reader.&quot;
        </p>
      </div>
      <ul className="flex flex-col gap-4 text-center">
        {SOCIAL_SITE_LINKS.map((socialSiteLink) => (
          <li key={socialSiteLink.siteName}>
            <Link href={socialSiteLink.url} rel="noopener noreferrer">
              <div className="rounded-lg bg-(--grey) py-3 text-sm font-semibold transition-colors hover:bg-(--green) hover:text-(--dark-grey)">
                {socialSiteLink.siteName}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </main>
);

export default Page;
