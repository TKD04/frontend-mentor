import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import type { JSX } from "react";

import bgPatternDesktop from "@/public/faq-accordion/background-pattern-desktop.svg";
import bgPatternMobile from "@/public/faq-accordion/background-pattern-mobile.svg";
import starIcon from "@/public/faq-accordion/icon-star.svg";

import type { AccordionItemData } from "./accordion";
import Accordion from "./accordion";
import style from "./faq-accordion.module.css";
import FAQS from "./faqs";

const FAQS_ACCORDION_ITEMS: AccordionItemData[] = FAQS.map((faq) => ({
  content: faq.answer,
  title: faq.question,
}));
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ accordion",
};

const Page = (): JSX.Element => (
  <div className="relative">
    <div
      aria-hidden
      className="fixed top-0 left-0 -z-10 h-screen w-full bg-(--light-pink)"
    >
      <Image
        alt="Background pattern"
        className="h-auto w-full lg:hidden"
        height={232}
        loading="eager"
        preload
        src={bgPatternMobile}
        width={375}
      />
      <Image
        alt="Background pattern"
        className="hidden h-auto w-full lg:inline-block"
        height={320}
        loading="eager"
        preload
        src={bgPatternDesktop}
        width={1440}
      />
    </div>
    <main
      className={`${style["colors"]} ${workSans.className} grid min-h-screen place-items-center p-6 text-(--dark-purple)`}
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
  </div>
);

export default Page;
