import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import type { JSX } from "react";

import starIcon from "@/public/faq-accordion/icon-star.svg";

import type { AccordionItemData } from "./accordion";
import Accordion from "./accordion";
import style from "./faq-accordion.module.css";
import FAQS from "./faqs";

const FAQS_ACCORDION_ITEMS = FAQS.map((faq, index) => ({
  content: faq.answer,
  index,
  title: faq.question,
})) satisfies readonly AccordionItemData[];

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ accordion",
};

const Page = (): JSX.Element => (
  <main
    className={`${style["colors"]} ${workSans.className} grid min-h-screen place-items-center bg-[url(/frontend-mentor/faq-accordion/background-pattern-mobile.svg)] bg-contain bg-fixed bg-top bg-no-repeat p-6 text-(--dark-purple) md:bg-[url(/frontend-mentor/faq-accordion/background-pattern-desktop.svg)]`}
  >
    <article className="flex w-full max-w-150 flex-col gap-4 rounded-lg bg-(--white) p-6 shadow-[0_8px_24px_0_rgba(0,0,0,0.04)] lg:rounded-2xl lg:p-10 lg:shadow-[0_16px_24px_2px_rgba(0,0,0,0.06)]">
      <div className="-mt-2 mb-1.5 flex gap-6">
        <Image
          alt="Star"
          aria-hidden
          className="h-auto w-6 lg:w-9"
          height={41}
          src={starIcon}
          width={40}
        />
        <h1 className="text-[2rem] font-bold lg:text-[3.6rem]">FAQs</h1>
      </div>
      <Accordion items={FAQS_ACCORDION_ITEMS} />
    </article>
  </main>
);

export default Page;
