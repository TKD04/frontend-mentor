import nextCofnig from "@/next.config.mjs";
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
      className={`${figtree.className} wrapper grid min-h-screen place-items-center p-4 text-gray-800`}
    >
      <div className="card w-96 space-y-4 rounded-2xl border bg-white p-5">
        <figure>
          <Image
            width={336}
            height={201}
            src={`${BASE_PATH}/blog-preview-card/illustration-article.svg`}
            alt="Illustration article"
            className="w-fulll rounded-xl object-contain"
          />
        </figure>
        <div className="card__body space-y-4">
          <div className="space-y-3 text-sm">
            <span className="card__tag rounded px-2 py-1 font-bold">
              Learning
            </span>
            <div>Published 21 Dec 2023</div>
          </div>
          <h1 className="text-2xl font-bold">HTML & CSS foundations</h1>
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="flex flex-row items-center gap-3 pb-2 text-sm">
            <figure>
              <Image
                width={64}
                height={65}
                src={`${BASE_PATH}/blog-preview-card/image-avatar.webp`}
                alt="User's avatar"
                className="aspect-square w-8"
              />
            </figure>
            <span className="font-bold">Greg Hooper</span>
          </div>
        </div>
      </div>
    </main>
  );
}
