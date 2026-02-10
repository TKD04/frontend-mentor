import "./blog-preview-card.css";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import nextCofnig from "@/next.config";
import authorAvatarPic from "@/public/blog-preview-card/image-avatar.webp";

const BASE_PATH = nextCofnig.basePath ?? "";
const figtree = Figtree({ subsets: ["latin"], weight: ["500", "800"] });

export const metadata: Metadata = {
  icons: {
    icon: `${BASE_PATH}/blog-preview-card/favicon-32x32.png`,
  },
  title: "Frontend Mentor | Blog preview card",
};

const BlogPreviewCard = (): JSX.Element => (
  <main
    className={`${figtree.className} grid min-h-screen place-items-center bg-(--yellow) p-6 text-gray-800`}
  >
    <article className="pointer-events-none flex w-full max-w-82 flex-col gap-6 rounded-3xl border border-(--black) bg-[var(--white)] p-6 shadow-[8px_8px_0_0_var(--black)] transition-shadow hover:shadow-[16px_16px_0_0_var(--black)] md:max-w-96">
      <Image
        alt="Illustration article"
        className="h-auto w-full rounded-xl"
        height={201}
        loading="eager"
        priority
        src={`${BASE_PATH}/blog-preview-card/illustration-article.svg`}
        width={336}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-3">
          <span className="rounded bg-(--yellow) px-3 py-1.5 text-xs font-extrabold md:text-sm">
            Learning
          </span>
          <span className="text-xs font-medium md:text-sm">
            Published 21 Dec 2023
          </span>
        </div>
        <h1 className="pointer-events-auto text-xl font-extrabold transition-colors hover:text-(--yellow) md:text-2xl">
          <Link href="/blog-preview-card">HTML & CSS foundations</Link>
        </h1>
        <p className="text-sm font-medium text-(--grey) md:text-base">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="mt-2 flex items-center gap-3">
          <Image
            alt="Author's avatar"
            className="size-8 rounded-full"
            loading="eager"
            placeholder="blur"
            src={authorAvatarPic}
          />
          <span className="text-xs font-extrabold md:text-sm">Greg Hooper</span>
        </div>
      </div>
    </article>
  </main>
);

export default BlogPreviewCard;
