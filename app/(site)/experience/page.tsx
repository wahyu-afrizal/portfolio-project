import type { Metadata } from "next";

import { createCanonicalMetadata } from "@/lib/metadata";
import { getExperienceEntries } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createCanonicalMetadata("/experience", {
  title: "Experience",
  description:
    "Experience across technical SEO, search strategy, and content systems with a focus on scalable implementation and measurable growth.",
  openGraph: {
    title: "Experience",
    description:
      "Experience across technical SEO, search strategy, and content systems with a focus on scalable implementation and measurable growth.",
    url: "/experience",
  },
});

function formatDateRange(startDate: string | null, endDate: string | null) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  const start = startDate ? formatter.format(new Date(startDate)) : null;
  const end = endDate ? formatter.format(new Date(endDate)) : "Present";

  if (start && end) {
    return `${start} - ${end}`;
  }

  if (start) {
    return `${start} - Present`;
  }

  return endDate ? end : null;
}

export default async function ExperiencePage() {
  const experienceEntries = await getExperienceEntries();

  return (
    <main className="bg-white px-6 py-24 text-zinc-900 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Experience
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          Experience across technical SEO, search strategy, and content systems,
          with an emphasis on practical implementation, scalable processes, and
          measurable organic growth.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl space-y-8">
        {experienceEntries.length > 0 ? (
          experienceEntries.map((entry) => {
            const context = [entry.company, formatDateRange(entry.startDate, entry.endDate)]
              .filter(Boolean)
              .join(" · ");

            return (
              <article
                key={entry._id}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10"
              >
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                    {entry.role}
                  </h2>
                  {context ? (
                    <p className="mt-2 text-sm font-medium text-zinc-500">
                      {context}
                    </p>
                  ) : null}
                  <p className="mt-5 text-base leading-7 text-zinc-700">
                    {entry.summary || "More experience details will be added soon."}
                  </p>
                </div>

                {entry.highlights && entry.highlights.length > 0 ? (
                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      Key Highlights
                    </p>
                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-700 sm:grid-cols-2">
                      {entry.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-2xl border border-zinc-200 bg-white px-5 py-4"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            );
          })
        ) : (
          <article className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              No experience entries published yet
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
              Experience entries will appear here once they are published from
              Sanity Studio.
            </p>
          </article>
        )}
      </section>
    </main>
  );
}
