const projects = [
  {
    title: "SEO Audit Systems",
    problem:
      "A fast-growing website had recurring technical SEO issues, but audits were inconsistent across teams and difficult to repeat at scale.",
    approach:
      "Built a standardized audit framework covering crawlability, indexation, internal linking, log analysis, and prioritization so issues could be documented and actioned in a repeatable way.",
    impact:
      "Created a clearer workflow for technical reviews, reduced overlap between stakeholders, and improved the speed of identifying high-impact SEO fixes.",
  },
  {
    title: "Structured Data Implementation",
    problem:
      "Key templates lacked structured data coverage, limiting search engines' understanding of page entities and reducing eligibility for rich results.",
    approach:
      "Mapped schema opportunities across core templates, aligned markup with on-page content, and introduced validation checkpoints to support cleaner implementation with engineering teams.",
    impact:
      "Improved consistency across structured data deployments, strengthened technical quality control, and increased readiness for richer search result presentation.",
  },
  {
    title: "Content Architecture and Search Intent",
    problem:
      "Content had grown without a clear information structure, creating overlap between pages and making it harder for users and search engines to understand topical depth.",
    approach:
      "Restructured the content architecture around intent-based clusters, clearer taxonomy, and stronger internal linking paths to support discoverability and reduce cannibalization.",
    impact:
      "Established a more scalable publishing foundation, clarified content ownership by topic, and supported stronger alignment between content strategy and organic growth goals.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white px-6 py-24 text-zinc-900 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Projects
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          A selection of case-study style project summaries focused on technical
          SEO operations, implementation quality, and scalable search growth
          systems.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl space-y-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              {project.title}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Problem
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Approach
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  {project.approach}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Impact
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  {project.impact}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
