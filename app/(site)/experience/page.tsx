import type { Metadata } from "next";

import PageIntro from "@/components/page-intro";
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
    <main className="px-6 pb-20 pt-10 sm:px-10 sm:pt-14 lg:px-16">
      <PageIntro
        eyebrow="Experience"
        title="A track record built on practical SEO execution."
        description="Experience across technical SEO, search strategy, and content systems with an emphasis on implementation quality, team clarity, and measurable organic growth."
        aside={
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Positioning
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
              Strategic SEO consultant. Technical SEO specialist.
              Growth-focused operator.
            </p>
          </div>
        }
      />

      <section className="mx-auto mt-16 max-w-6xl space-y-8">
        {experienceEntries.length > 0 ? (
          experienceEntries.map((entry) => {
            const context = [entry.company, formatDateRange(entry.startDate, entry.endDate)]
              .filter(Boolean)
              .join(" · ");

            return (
              <article
                key={entry._id}
                className="section-card rounded-[2rem] p-8 sm:p-10"
              >
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                    {entry.role}
                  </h2>
                  {context ? (
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      {context}
                    </p>
                  ) : null}
                  <p className="mt-6 text-base leading-8 text-[var(--color-copy)]">
                    {entry.summary || "More experience details will be added soon."}
                  </p>
                </div>

                {entry.highlights && entry.highlights.length > 0 ? (
                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      Key Highlights
                    </p>
                    <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--color-copy)] sm:grid-cols-2">
                      {entry.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-[1.4rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] px-5 py-4"
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
          <article className="rounded-[2rem] border border-dashed border-[color:var(--color-border-strong)] bg-[var(--color-surface)] p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              No experience entries published yet
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-copy)]">
              Experience entries will appear here once they are published from
              Sanity Studio.
            </p>
          </article>
        )}
      </section>
    </main>
  );
}
