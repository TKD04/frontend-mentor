import nextCofnig from "@/next.config.mjs";
import perfumePicDesktop from "@/public/product-preview-card-component/image-product-desktop.jpg";
import perfumePicMobile from "@/public/product-preview-card-component/image-product-mobile.jpg";
import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import Image from "next/image";
import ArtDirectionPicture from "./ArtDirectionPicture";
import "./style.css";

const BASE_PATH = nextCofnig.basePath ?? "";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });
const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Product preview card component",
  icons: {
    icon: `${BASE_PATH}/product-preview-card-component/favicon-32x32.png`,
  },
};

export default function Page() {
  return (
    <main
      className={`${montserrat.className} grid min-h-screen place-items-center bg-[var(--cream)] px-4 py-8 font-medium text-[var(--darkgrayishblue)]`}
    >
      <article className="flex w-full flex-col rounded-lg bg-[var(--white)] shadow-[0_0_8px_0_rgba(0,0,0,0.04)] md:max-w-[37.5rem] md:flex-row">
        <ArtDirectionPicture
          src={{ mobile: perfumePicMobile, desktop: perfumePicDesktop }}
          minWidthForDesktop={768}
          alt="Picture of perfume"
          loading="eager"
          placeholder="blur"
          className="h-auto w-full rounded-t-lg md:rounded-bl-lg md:rounded-tr-none"
        />
        <section className="flex flex-col gap-4 p-6 md:max-w-[50%] md:gap-[1.35rem] md:p-8">
          <span className="text-xs uppercase tracking-[0.25rem]">Perfume</span>
          <h1
            className={`${fraunces.className} text-[2rem] font-bold leading-8 text-[var(--verydarkblue)]`}
          >
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-[14px] md:leading-[1.45rem]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <section className="flex items-center justify-start gap-4">
            <span
              className={`${fraunces.className} text-[2rem] font-bold text-[var(--darkcyan)]`}
            >
              $149.99
            </span>
            <span className="text-[0.85rem] line-through">$169.99</span>
          </section>
          <button
            type="button"
            className="flex appearance-none items-center justify-center gap-3 rounded-lg bg-[var(--darkcyan)] py-[0.85rem] text-[var(--white)] transition-colors hover:bg-[hsl(156,42%,18%)]"
          >
            <Image
              width={15}
              height={16}
              src={`${BASE_PATH}/product-preview-card-component/icon-cart.svg`}
              alt="Icon of shopping cart"
              loading="eager"
              className="inline"
            />
            <span className="text-[0.85rem] font-bold">Add to Cart</span>
          </button>
        </section>
      </article>
    </main>
  );
}