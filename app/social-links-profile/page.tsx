import nextCofnig from "@/next.config.mjs";
import userAvatarPic from "@/public/social-links-profile/avatar-jessica.jpeg";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

type SocialSiteLink = {
  siteName: string;
  url: string;
};

const BASE_PATH = nextCofnig.basePath ?? "";
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });
const socialSiteLinks: SocialSiteLink[] = [
  {
    siteName: "GitHub",
    url: "https://github.com/",
  },
  {
    siteName: "Frontend Mentor",
    url: "https://www.frontendmentor.io/",
  },
  {
    siteName: "LinkedIn",
    url: "https://www.linkedin.com/",
  },
  {
    siteName: "Twitter",
    url: "https://x.com/",
  },
  {
    siteName: "Instagram",
    url: "https://www.instagram.com/",
  },
];

export const metadata: Metadata = {
  title: "Frontend Mentor | Social links profile",
  icons: {
    icon: `${BASE_PATH}/social-links-profile/favicon-32x32.png`,
  },
};

export default function Page() {
  return (
    <main
      className={`${inter.className} grid min-h-screen place-items-center bg-[var(--offblack)] p-4 text-[var(--white)]`}
    >
      <div className="flex w-full max-w-[20.5rem] flex-col gap-6 rounded-xl bg-[var(--darkgrey)] p-6 md:max-w-96 md:p-10">
        <div className="flex flex-col items-center text-center">
          <Image
            src={userAvatarPic}
            alt="Picture of user's avatar"
            loading="eager"
            placeholder="blur"
            priority
            className="mb-6 h-[5.5rem] w-[5.5rem] rounded-full"
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
              <Link href={socialSiteLink.url}>
                <div className="rounded-lg bg-[var(--grey)] py-3 text-sm font-semibold transition-colors hover:bg-[var(--green)] hover:text-[var(--darkgrey)]">
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
