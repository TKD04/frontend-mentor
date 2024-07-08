import nextCofnig from "@/next.config.mjs";
import omelettePic from "@/public/recipe-page/image-omelette.jpeg";
import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";
import Image from "next/image";
import "./style.css";

const BASE_PATH = nextCofnig.basePath ?? "";
const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe page",
  icons: {
    icon: `${BASE_PATH}/recipe-page/favicon-32x32.png`,
  },
};

export default function Page() {
  return (
    <main
      className={`${outfit.className} min-h-screen bg-[var(--eggshell)] p-6 text-[var(--wengebrown)] md:grid md:place-items-center`}
    >
      <article className="mx-auto w-full bg-[var(--white)] md:max-w-[46rem] md:rounded-3xl md:p-10">
        <Image
          src={omelettePic}
          alt="Picture of omelette"
          loading="eager"
          placeholder="blur"
          priority
          className="h-auto w-full md:mb-10 md:rounded-xl"
        />
        <div className="flex flex-col gap-8 p-8 md:gap-7 md:p-0">
          <h1
            className={`${youngSerif.className} text-4xl text-[var(--darkcharcoal)]`}
          >
            Simple Omelette Recipe
          </h1>
          <p className="text-[16px]">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <section className="rounded-xl bg-[var(--rosewhite)] px-8 py-4 md:py-6">
            <h2 className="mb-4 text-xl font-semibold text-[var(--darkraspberry)]">
              Preparation time
            </h2>
            <ul className="ml-5 flex list-square flex-col gap-2">
              <li className="pl-5">
                <strong className="font-bold">Total</strong>: Approximately 10
                minutes
              </li>
              <li className="pl-5">
                <strong className="font-bold">Preparation</strong>: 5 minutes
              </li>
              <li className="pl-5">
                <strong className="font-bold">Cooking</strong>: 5 minutes
              </li>
            </ul>
          </section>
          <section>
            <h2
              className={`${youngSerif.className} mb-4 text-[1.75rem] text-[var(--nutmeg)]`}
            >
              Ingredients
            </h2>
            <ul className="ml-5 flex list-square flex-col gap-2">
              <li className="pl-5">2-3 large eggs</li>
              <li className="pl-5">Salt, to taste</li>
              <li className="pl-5">Pepper, to taste</li>
              <li className="pl-5">1 tablespoon of butter or oil</li>
              <li className="pl-5">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>
          <hr className="border-t-[var(--lightgrey)]" />
          <section>
            <h2
              className={`${youngSerif.className} mb-4 text-[1.75rem] text-[var(--nutmeg)]`}
            >
              Instructions
            </h2>
            <ol className="ml-5 flex list-decimal flex-col gap-2 marker:font-bold">
              <li className="pl-5">
                <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li className="pl-5">
                <strong>Heat the pan</strong>: Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li className="pl-5">
                <strong>Cook the omelette</strong>: Once the butter is melted
                and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li className="pl-5">
                <strong>Add fillings (optional)</strong> : When the eggs begin
                to set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li className="pl-5">
                <strong>Fold and serve</strong> : As the omelette continues to
                cook, carefully lift one edge and fold it over the fillings. Let
                it cook for another minute, then slide it onto a plate.
              </li>
              <li className="pl-5">
                <strong>Enjoy</strong>: Serve hot, with additional salt and
                pepper if needed.
              </li>
            </ol>
          </section>
          <hr className="border-t-[var(--lightgrey)]" />
          <section>
            <h2
              className={`${youngSerif.className} mb-4 text-[1.75rem] text-[var(--nutmeg)]`}
            >
              Nutrition
            </h2>
            <p className="text-[16px]">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="mt-4 w-full border-collapse text-left">
              <tbody>
                <tr className="border-b border-[var(--lightgrey)]">
                  <th className="px-8 py-2.5 font-normal">Calories</th>
                  <td className="px-8 py-2.5 font-bold">277kcal</td>
                </tr>
                <tr className="border-b border-[var(--lightgrey)]">
                  <th className="px-8 py-2.5 font-normal">Carbs</th>
                  <td className="px-8 py-2.5 font-bold">0g</td>
                </tr>
                <tr className="border-b border-[var(--lightgrey)]">
                  <th className="px-8 py-2.5 font-normal">Protein</th>
                  <td className="px-8 py-2.5 font-bold">20g</td>
                </tr>
                <tr>
                  <th className="px-8 py-2.5 font-normal">Fat</th>
                  <td className="px-8 py-2.5 font-bold">22g</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </article>
    </main>
  );
}
