import frontendMentorSolutionsLinks from "@/lib/frontendMentorSolutionsLinks";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-gray-900 p-6 text-gray-100">
      <article className="w-full max-w-prose">
        <h1 className="mb-6 text-4xl font-extrabold">
          TKD04&apos;s Frontend Mentor Solutions
        </h1>
        <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
          {frontendMentorSolutionsLinks.map((solution) => (
            <li
              key={solution.name}
              className="rounded-xl bg-gray-800 p-6 shadow"
            >
              <h2 className="mb-6 text-2xl font-bold">{solution.name}</h2>
              <ul className="flex list-none flex-col gap-4">
                <li>
                  <Link href={solution.urls.demo} target="_blank">
                    <div className="rounded-md bg-blue-600 px-4 py-2 font-medium transition-colors hover:bg-blue-500">
                      Live Demo
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={solution.urls.frontendMentor} target="_blank">
                    <div className="rounded-md bg-blue-600 px-4 py-2 font-medium transition-colors hover:bg-blue-500">
                      Frontend Mentor{" "}
                      <ExternalLink className="inline h-4 w-4" />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={solution.urls.github} target="_blank">
                    <div className="rounded-md bg-blue-600 px-4 py-2 font-medium transition-colors hover:bg-blue-500">
                      GitHub <ExternalLink className="inline h-4 w-4" />
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
