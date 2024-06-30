import nextCofnig from "@/next.config.mjs";
import authorAvatarPic from "@/public/blog-preview-card/image-avatar.webp";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Image from "next/image";
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
      className={`${figtree.className} wrapper grid min-h-screen place-items-center bg-[var(--yellow)] p-6 text-gray-800`}
    >
      <article className="pointer-events-none w-96 space-y-6 rounded-2xl border border-[var(--black)] bg-[var(--white)] p-5 shadow-[8px_8px_0_0_var(--black)] hover:shadow-[16px_16px_0_0_var(--black)]">
        <figure>
          <Image
            width={336}
            height={201}
            src={`${BASE_PATH}/blog-preview-card/illustration-article.svg`}
            alt="Picture of illustration article"
            className="w-full rounded-xl object-contain"
          />
        </figure>
        <div className="card__body space-y-4">
          <div className="space-y-3 text-sm">
            <span className="card__tag rounded bg-[var(--yellow)] px-3 py-1.5 font-bold">
              Learning
            </span>
            <div>Published 21 Dec 2023</div>
          </div>
          <h1 className="pointer-events-auto cursor-pointer text-2xl font-bold hover:text-[var(--yellow)]">
            HTML & CSS foundations
          </h1>
          <p className="text-base text-[var(--gray)]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="flex flex-row items-center gap-3 pb-1 text-sm">
            <figure>
              <Image
                src={authorAvatarPic}
                alt="Picture of author's avatar"
                placeholder="blur"
                className="aspect-square w-8"
              />
            </figure>
            <span className="font-bold">Greg Hooper</span>
          </div>
        </div>
      </article>
    </main>
  );
}
