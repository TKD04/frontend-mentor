import nextCofnig from "@/next.config.mjs";
import authorAvatarPic from "@/public/blog-preview-card/image-avatar.webp";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const BASE_PATH = nextCofnig.basePath ?? "";
const figtree = Figtree({ subsets: ["latin"], weight: ["500", "800"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Blog preview card",
  icons: {
    icon: `${BASE_PATH}/blog-preview-card/favicon-32x32.png`,
  },
};

export default function Page() {
  return (
    <main
      className={`${figtree.className} grid min-h-screen place-items-center bg-[var(--yellow)] p-6 text-gray-800`}
    >
      <article className="pointer-events-none flex w-full max-w-[20.5rem] flex-col gap-6 rounded-3xl border border-[var(--black)] bg-[var(--white)] p-6 shadow-[8px_8px_0_0_var(--black)] transition-shadow hover:shadow-[16px_16px_0_0_var(--black)] md:max-w-96">
        <Image
          width={336}
          height={201}
          src={`${BASE_PATH}/blog-preview-card/illustration-article.svg`}
          alt="Illustration article"
          loading="eager"
          priority
          className="h-auto w-full rounded-xl"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-3">
            <span className="rounded bg-[var(--yellow)] px-3 py-1.5 text-xs font-extrabold md:text-sm">
              Learning
            </span>
            <span className="text-xs font-medium md:text-sm">
              Published 21 Dec 2023
            </span>
          </div>
          <h1 className="pointer-events-auto text-xl font-extrabold transition-colors hover:text-[var(--yellow)] md:text-2xl">
            <Link href="/blog-preview-card">HTML & CSS foundations</Link>
          </h1>
          <p className="text-sm font-medium text-[var(--grey)] md:text-base">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="mt-2 flex items-center gap-3">
            <Image
              src={authorAvatarPic}
              alt="Author's avatar"
              loading="eager"
              placeholder="blur"
              className="size-8 rounded-full"
            />
            <span className="text-xs font-extrabold md:text-sm">
              Greg Hooper
            </span>
          </div>
        </div>
      </article>
    </main>
  );
}
