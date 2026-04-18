import type { Metadata } from "next";

import PageIntro from "@/components/page-intro";
import { createCanonicalMetadata } from "@/lib/metadata";
import { getProjects } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createCanonicalMetadata("/projects", {
  title: "Projects",
  description:
    "Case-study style SEO project summaries covering technical SEO operations, implementation quality, and scalable search growth systems.",
  openGraph: {
    title: "Projects",
    description:
      "Case-study style SEO project summaries covering technical SEO operations, implementation quality, and scalable search growth systems.",
    url: "/projects",
  },
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="px-6 pb-20 pt-10 sm:px-10 sm:pt-14 lg:px-16">
      <PageIntro
        eyebrow="Projects"
        title="Case-study style SEO work with strong narrative structure."
        description="A selection of project summaries focused on technical SEO operations, implementation quality, and scalable growth systems that stay grounded in real execution."
        aside={
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Must-have emphasis
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
              Structured thinking, technical credibility, professional delivery,
              and visible project outcomes.
            </p>
          </div>
        }
      />

      <section className="mx-auto mt-16 max-w-6xl space-y-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <article
              key={project._id}
              className="section-card rounded-[2rem] p-8 sm:p-10"
            >
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                  {project.title}
                </h2>
                {project.shortDescription ? (
                  <p className="mt-5 text-base leading-8 text-[var(--color-copy)]">
                    {project.shortDescription}
                  </p>
                ) : null}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Problem
                  </p>
                  <p className="mt-3 rounded-[1.4rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] p-5 text-sm leading-7 text-[var(--color-copy)]">
                    {project.problem || "Details will be added soon."}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Approach
                  </p>
                  <p className="mt-3 rounded-[1.4rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] p-5 text-sm leading-7 text-[var(--color-copy)]">
                    {project.approach || "Details will be added soon."}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Impact
                  </p>
                  <p className="mt-3 rounded-[1.4rem] border border-[color:var(--color-border)] bg-[var(--color-panel)] p-5 text-sm leading-7 text-[var(--color-copy)]">
                    {project.impact || "Details will be added soon."}
                  </p>
                </div>
              </div>
            </article>
          ))
        ) : (
          <article className="rounded-[2rem] border border-dashed border-[color:var(--color-border-strong)] bg-[var(--color-surface)] p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              No projects published yet
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-copy)]">
              Project case studies will appear here once they are published from
              Sanity Studio.
            </p>
          </article>
        )}
      </section>
    </main>
  );
}
