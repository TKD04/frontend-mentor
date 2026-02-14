import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";
import type { JSX } from "react";

import nextCofnig from "@/next.config";

import style from "./four-card-feature-section.module.css";

const BASE_PATH = nextCofnig.basePath ?? "";
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Four card feature section",
};

const Page = (): JSX.Element => (
  <main
    className={`${style["colors"]} ${poppins.className} flex min-h-screen justify-center bg-(--very-light-gray) p-8 pt-20 pb-[4.8rem] text-(--grayish-blue) md:pb-20`}
  >
    <article className="flex w-full max-w-276 flex-col items-center">
      <h1 className="mb-4 text-center text-[1.5rem] font-extralight text-(--very-dark-blue) md:text-4xl md:leading-[3.2rem]">
        Reliable, efficient delivery
        <br />
        <span className="font-semibold">Powered by Technology</span>
      </h1>
      <p className="max-w-xs text-center text-[15px] leading-6 md:max-w-lg">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <div className="mt-20 flex max-w-xs flex-col gap-[1.6rem] md:mt-[4.1rem] md:max-w-none md:flex-row md:items-center md:gap-[1.85rem]">
        <section className="grid basis-1/3 rounded-md border-t-4 border-t-(--cyan) bg-white p-7 shadow-[0_12px_12px_0_rgba(16,16,148,0.11)] md:px-8 md:pb-8">
          <h2 className="mb-[0.2rem] text-xl font-semibold text-(--very-dark-blue) md:mb-[0.55rem]">
            Supervisor
          </h2>
          <p className="text-[0.8rem] leading-[1.4rem]">
            Monitors activity to identify project roadblocks
          </p>
          <Image
            alt="Supervisor"
            className="mt-8 h-auto w-14.5 self-end justify-self-end md:mt-[2.55rem] md:w-16"
            height={64}
            src={`${BASE_PATH}/four-card-feature-section/icon-supervisor.svg`}
            width={64}
          />
        </section>
        <div className="flex basis-1/3 flex-col gap-[1.6rem] md:gap-[1.85rem]">
          <section className="grid rounded-md border-t-4 border-t-(--red) bg-white p-7 shadow-[0_12px_12px_0_rgba(16,16,148,0.11)] md:px-8 md:pb-8">
            <h2 className="mb-[0.2rem] text-xl font-semibold text-(--very-dark-blue) md:mb-[0.55rem]">
              Team Builder
            </h2>
            <p className="text-[0.8rem] leading-[1.4rem]">
              Scans our talent network to create the optimal team for your
              project
            </p>
            <Image
              alt="Team builder"
              className="mt-8 h-auto w-14.5 self-end justify-self-end md:mt-[2.55rem] md:w-16"
              height={64}
              src={`${BASE_PATH}/four-card-feature-section/icon-team-builder.svg`}
              width={64}
            />
          </section>
          <section className="grid rounded-md border-t-4 border-t-(--orange) bg-white p-7 shadow-[0_12px_12px_0_rgba(16,16,148,0.11)] md:px-8 md:pb-8">
            <h2 className="mb-[0.2rem] text-xl font-semibold text-(--very-dark-blue) md:mb-[0.55rem]">
              Karma
            </h2>
            <p className="text-[0.8rem] leading-[1.4rem]">
              Regularly evaluates our talent to ensure quality
            </p>
            <Image
              alt="Karma"
              className="mt-8 h-auto w-14.5 self-end justify-self-end md:mt-[2.55rem] md:w-16"
              height={64}
              src={`${BASE_PATH}/four-card-feature-section/icon-karma.svg`}
              width={64}
            />
          </section>
        </div>
        <section className="grid basis-1/3 rounded-md border-t-4 border-t-(--blue) bg-white p-7 shadow-[0_12px_12px_0_rgba(16,16,148,0.11)] md:px-8 md:pb-8">
          <h2 className="mb-[0.2rem] text-xl font-semibold text-(--very-dark-blue) md:mb-[0.55rem]">
            Calculator
          </h2>
          <p className="text-[0.8rem] leading-[1.4rem]">
            Uses data from past projects to provide better delivery estimates
          </p>
          <Image
            alt="Calculator"
            className="mt-8 h-auto w-14.5 self-end justify-self-end md:mt-[2.55rem] md:w-16"
            height={64}
            src={`${BASE_PATH}/four-card-feature-section/icon-calculator.svg`}
            width={64}
          />
        </section>
      </div>
    </article>
  </main>
);

export default Page;
