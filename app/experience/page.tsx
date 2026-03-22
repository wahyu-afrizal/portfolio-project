const experienceEntries = [
  {
    role: "Technical SEO Specialist",
    context: "Growth-focused digital team supporting multi-page content websites",
    description:
      "Led technical SEO initiatives across content and platform improvements, with a focus on crawl efficiency, site structure, and implementation quality.",
    highlights: [
      "Built repeatable audit processes to prioritize technical fixes",
      "Worked with engineering and content teams to resolve indexation and internal linking issues",
      "Improved reporting clarity around search performance and technical health",
    ],
  },
  {
    role: "SEO Strategist",
    context: "Content-led projects focused on organic visibility and topic development",
    description:
      "Developed SEO strategies that connected keyword research, search intent, and content planning into more scalable editorial systems.",
    highlights: [
      "Created topic cluster frameworks for long-term content expansion",
      "Aligned content briefs with user intent and information architecture",
      "Supported teams in turning SEO priorities into practical publishing workflows",
    ],
  },
  {
    role: "Search Growth Consultant",
    context: "Project-based support for websites improving technical foundations",
    description:
      "Provided structured guidance for websites needing stronger search foundations, helping teams move from reactive fixes to more sustainable systems.",
    highlights: [
      "Reviewed site templates and structured data opportunities",
      "Recommended scalable improvements for navigation, taxonomy, and page hierarchy",
      "Helped define execution priorities based on technical impact and business context",
    ],
  },
];

export default function ExperiencePage() {
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
        {experienceEntries.map((entry) => (
          <article
            key={entry.role}
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10"
          >
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                {entry.role}
              </h2>
              <p className="mt-2 text-sm font-medium text-zinc-500">
                {entry.context}
              </p>
              <p className="mt-5 text-base leading-7 text-zinc-700">
                {entry.description}
              </p>
            </div>

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
          </article>
        ))}
      </section>
    </main>
  );
}
