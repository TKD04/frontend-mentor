"use client";

import nextCofnig from "@/next.config.mjs";
import Aos from "aos";
import "aos/dist/aos.css";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import "./style.css";

const BASE_PATH = nextCofnig.basePath ?? "";
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"] });

export default function Page() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <main
      className={`${poppins.className} flex min-h-screen justify-center bg-[var(--very-light-gray)] p-8 pb-[4.8rem] pt-20 text-[var(--grayish-blue)] md:pt-[5.1rem]`}
    >
      <article
        className="flex w-full max-w-[68rem] flex-col items-center"
        data-aos="fade-up"
      >
        <h1 className="mb-4 text-center text-[1.5rem] font-extralight text-[var(--very-dark-blue)] md:mb-[1.2rem] md:text-4xl md:leading-[3.1rem]">
          Reliable, efficient delivery
          <br />
          <span className="font-semibold">Powered by Technology</span>
        </h1>
        <p className="max-w-xs text-center text-[15px] leading-6 md:max-w-lg">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div className="mt-20 flex max-w-xs flex-col gap-[1.6rem] md:mt-16 md:max-w-none md:flex-row md:items-center">
          <section className="grid basis-1/3 rounded-md border-t-4 border-t-[var(--cyan)] bg-white p-7 shadow-[0_12px_12px_0_rgba(16,16,148,0.11)]">
            <h2 className="mb-[0.2rem] text-xl font-semibold text-[var(--very-dark-blue)]">
              Supervisor
            </h2>
            <p className="text-[0.8rem] leading-[1.4rem]">
              Monitors activity to identify project roadblocks
            </p>
            <Image
              width={64}
              height={64}
              src={`${BASE_PATH}/four-card-feature-section/icon-supervisor.svg`}
              alt="Supervisor"
              className="mt-8 h-auto w-[58px] self-end justify-self-end md:mt-14"
            />
          </section>
          <div className="flex basis-1/3 flex-col gap-[1.6rem]">
            <section className="grid rounded-md border-t-4 border-t-[var(--red)] bg-white p-7 shadow-[0_12px_12px_0_rgba(16,16,148,0.11)]">
              <h2 className="mb-[0.2rem] text-xl font-semibold text-[var(--very-dark-blue)]">
                Team Builder
              </h2>
              <p className="text-[0.8rem] leading-[1.4rem]">
                Scans our talent network to create the optimal team for your
                project
              </p>
              <Image
                width={64}
                height={64}
                src={`${BASE_PATH}/four-card-feature-section/icon-team-builder.svg`}
                alt="Team builder"
                className="mt-8 h-auto w-[58px] self-end justify-self-end md:mt-14"
              />
            </section>
            <section className="grid rounded-md border-t-4 border-t-[var(--orange)] bg-white p-7 shadow-[0_12px_12px_0_rgba(16,16,148,0.11)]">
              <h2 className="mb-[0.2rem] text-xl font-semibold text-[var(--very-dark-blue)]">
                Karma
              </h2>
              <p className="text-[0.8rem] leading-[1.4rem]">
                Regularly evaluates our talent to ensure quality
              </p>
              <Image
                width={64}
                height={64}
                src={`${BASE_PATH}/four-card-feature-section/icon-karma.svg`}
                alt="Karma"
                className="mt-8 h-auto w-[58px] self-end justify-self-end md:mt-14"
              />
            </section>
          </div>
          <section className="grid basis-1/3 rounded-md border-t-4 border-t-[var(--blue)] bg-white p-7 shadow-[0_12px_12px_0_rgba(16,16,148,0.11)]">
            <h2 className="mb-[0.2rem] text-xl font-semibold text-[var(--very-dark-blue)]">
              Calculator
            </h2>
            <p className="text-[0.8rem] leading-[1.4rem]">
              Uses data from past projects to provide better delivery estimates
            </p>
            <Image
              width={64}
              height={64}
              src={`${BASE_PATH}/four-card-feature-section/icon-calculator.svg`}
              alt="Calculator"
              className="mt-8 h-auto w-[58px] self-end justify-self-end md:mt-14"
            />
          </section>
        </div>
      </article>
    </main>
  );
}
