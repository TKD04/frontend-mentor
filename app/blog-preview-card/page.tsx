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
    icon: "/blog-preview-card/favicon-32x32.png",
  },
};

export default function Page() {
  return (
    <main
      className={`${figtree.className} grid min-h-screen place-items-center bg-[var(--yellow)] p-6 font-medium text-gray-800`}
    >
      <article className="pointer-events-none flex w-full max-w-96 flex-col gap-6 rounded-2xl border border-[var(--black)] bg-[var(--white)] p-6 shadow-[8px_8px_0_0_var(--black)] hover:shadow-[16px_16px_0_0_var(--black)]">
        <Image
          width={336}
          height={201}
          src={`${BASE_PATH}/blog-preview-card/illustration-article.svg`}
          alt="Picture of illustration article"
          loading="eager"
          priority
          className="h-auto w-full rounded-xl"
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-start gap-3 text-sm">
            <span className="rounded bg-[var(--yellow)] px-3 py-1.5 font-extrabold">
              Learning
            </span>
            <span>Published 21 Dec 2023</span>
          </div>
          <h1 className="pointer-events-auto cursor-pointer text-2xl font-extrabold hover:text-[var(--yellow)]">
            <Link href="/blog-preview-card">HTML & CSS foundations</Link>
          </h1>
          <p className="text-base font-medium text-[var(--grey)]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="mt-3 flex flex-row items-center gap-3 text-sm">
            <Image
              src={authorAvatarPic}
              alt="Picture of author's avatar"
              loading="eager"
              placeholder="blur"
              className="aspect-square w-8 rounded-full"
            />
            <span className="font-extrabold">Greg Hooper</span>
          </div>
        </div>
      </article>
    </main>
  );
}
