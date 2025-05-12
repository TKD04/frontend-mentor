import nextCofnig from "@/next.config.mjs";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import type { AccordionItemData } from "./Accordion";
import Accordion from "./Accordion";
import "./faq-accordion.css";
import FAQS from "./faqs";

const BASE_PATH = nextCofnig.basePath ?? "";
const FAQS_ACCORDION_ITEMS: AccordionItemData[] = FAQS.map((faq) => ({
  title: faq.question,
  content: faq.answer,
}));
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ accordion",
  icons: {
    icon: `${BASE_PATH}/faq-accordion/favicon-32x32.png`,
  },
};

export default function FaqAccordion() {
  return (
    <div className="relative">
      <div
        className="fixed left-0 top-0 -z-10 h-screen w-full bg-[var(--light-pink)]"
        aria-hidden
      >
        <Image
          width={375}
          height={232}
          src={`${BASE_PATH}/faq-accordion/background-pattern-mobile.svg`}
          alt="Background pattern"
          loading="eager"
          priority
          className="h-auto w-full lg:hidden"
        />
        <Image
          width={1440}
          height={320}
          src={`${BASE_PATH}/faq-accordion/background-pattern-desktop.svg`}
          alt="Background pattern"
          loading="eager"
          priority
          className="hidden h-auto w-full lg:inline-block"
        />
      </div>
      <main
        className={`${workSans.className} grid min-h-screen place-items-center p-6 text-[var(--dark-purple)]`}
      >
        <article className="flex w-full max-w-[37.5rem] flex-col gap-4 rounded-lg bg-[var(--white)] p-6 shadow-[0_8px_24px_0_rgba(0,0,0,0.04)] lg:rounded-2xl lg:p-10 lg:shadow-[0_16px_24px_2px_rgba(0,0,0,0.06)]">
          <div className="-mt-2 mb-1.5 flex gap-6">
            <Image
              width={40}
              height={41}
              src={`${BASE_PATH}/faq-accordion/icon-star.svg`}
              alt="Star"
              className="h-auto w-[24px] lg:w-[36px]"
              aria-hidden
            />
            <h1 className="text-[2rem] font-bold lg:text-[3.6rem]">FAQs</h1>
          </div>
          <Accordion items={FAQS_ACCORDION_ITEMS} />
        </article>
      </main>
    </div>
  );
}
