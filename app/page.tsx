"use client";

import frontendMentorSolutionsLinks from "@/lib/frontendMentorSolutionsLinks";
import Aos from "aos";
import "aos/dist/aos.css";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="flex min-h-screen justify-center bg-gray-900 p-6 text-gray-100">
      <article className="w-full max-w-prose" data-aos="fade-up">
        <h1 className="mb-8 text-4xl font-extrabold">
          TKD04&apos;s Frontend Mentor Solutions
        </h1>
        <section className="mb-6 rounded-xl bg-gray-800 p-6 shadow">
          <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <li>
              <Link
                href="https://www.frontendmentor.io/profile/TKD04"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-md bg-gray-600 px-4 py-2 font-medium transition-colors hover:bg-gray-500">
                  Frontend Mentor Profile{" "}
                  <ExternalLink className="inline size-4" />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/TKD04/frontend-mentor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-md bg-gray-600 px-4 py-2 font-medium transition-colors hover:bg-gray-500">
                  GitHub Repository <ExternalLink className="inline size-4" />
                </div>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
            {[...frontendMentorSolutionsLinks].reverse().map((solution) => (
              <li
                key={solution.name}
                className="flex flex-col justify-between rounded-xl bg-gray-800 p-6 shadow"
              >
                <h2 className="mb-6 text-2xl font-bold">{solution.name}</h2>
                <ul className="flex list-none flex-col gap-4">
                  <li>
                    <Link href={solution.urls.demo} target="_blank">
                      <div className="rounded-md bg-green-600 px-4 py-2 font-medium transition-colors hover:bg-green-500">
                        Live Demo
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={solution.urls.frontendMentor}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-md bg-gray-600 px-4 py-2 font-medium transition-colors hover:bg-gray-500">
                        Frontend Mentor{" "}
                        <ExternalLink className="inline size-4" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={solution.urls.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-md bg-gray-600 px-4 py-2 font-medium transition-colors hover:bg-gray-500">
                        GitHub <ExternalLink className="inline size-4" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
