import "./product-preview-card-component.css";

import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import Image from "next/image";
import type { JSX } from "react";

import nextCofnig from "@/next.config";
import perfumePicDesktop from "@/public/product-preview-card-component/image-product-desktop.jpg";
import perfumePicMobile from "@/public/product-preview-card-component/image-product-mobile.jpg";

const BASE_PATH = nextCofnig.basePath ?? "";
const BREAK_POINT_TAILWIND_MD = 768;
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  icons: {
    icon: `${BASE_PATH}/product-preview-card-component/favicon-32x32.png`,
  },
  title: "Frontend Mentor | Product preview card component",
};

const Page = (): JSX.Element => (
  <main
    className={`${montserrat.className} grid min-h-screen place-items-center bg-(--cream) px-4 py-8 font-medium text-(--dark-grayish-blue)`}
  >
    <article className="flex w-full flex-col rounded-lg bg-(--white) shadow-[0_0_8px_0_rgba(0,0,0,0.04)] md:max-w-150 md:flex-row">
      {/* Not working: https://nextjs.org/docs/pages/api-reference/components/image#art-direction */}
      <picture>
        <source
          height={perfumePicMobile.height}
          media={`(max-width: ${(BREAK_POINT_TAILWIND_MD - 1).toString()}px)`}
          srcSet={perfumePicMobile.src}
          width={perfumePicMobile.width}
        />
        <source
          height={perfumePicDesktop.height}
          media={`(min-width: ${BREAK_POINT_TAILWIND_MD.toString()}px)`}
          srcSet={perfumePicDesktop.src}
          width={perfumePicDesktop.width}
        />
        <img
          alt="Product perfume"
          className="h-auto w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
          height={perfumePicMobile.height}
          src={perfumePicMobile.src}
          width={perfumePicMobile.width}
        />
      </picture>
      <section className="flex flex-col gap-4 p-6 md:max-w-[50%] md:gap-6 md:p-8">
        <span className="text-xs tracking-[0.3rem] uppercase">Perfume</span>
        <h1
          className={`${fraunces.className} -mt-1 text-[1.95rem] leading-8 font-bold text-(--very-dark-blue)`}
        >
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-[14px] leading-[1.45rem]">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <section className="-mt-1 flex items-center justify-start gap-5">
          <span
            className={`${fraunces.className} text-[2rem] font-bold text-(--dark-cyan)`}
          >
            $149.99
          </span>
          <span className="text-[0.8rem] line-through">$169.99</span>
        </section>
        <button
          className="-mt-0.5 flex cursor-pointer appearance-none items-center justify-center gap-3 rounded-lg bg-(--dark-cyan) py-[0.87rem] text-(--white) transition-colors hover:bg-(--dark-cyan-hover)"
          type="button"
        >
          <Image
            alt="Shopping cart"
            className="inline"
            height={16}
            loading="eager"
            src={`${BASE_PATH}/product-preview-card-component/icon-cart.svg`}
            width={15}
          />
          <span className="text-[0.85rem] font-bold">Add to Cart</span>
        </button>
      </section>
    </article>
  </main>
);

export default Page;
