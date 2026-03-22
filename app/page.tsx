export default function Home() {
  return (
    <main className="bg-white px-6 py-24 text-zinc-900 sm:px-10 lg:px-16">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center">
        <span className="mb-6 inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium tracking-wide text-zinc-600">
          SEO & Growth Systems
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
          Building scalable SEO systems with 3+ years of technical SEO
          experience.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          I design and optimize technical SEO frameworks that help teams improve
          crawl efficiency, strengthen site architecture, and grow organic
          visibility across large, complex websites.
        </p>
      </section>
      <section className="mx-auto mt-24 max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            A few representative projects focused on technical SEO execution,
            content systems, and sustainable organic growth.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-950">
              Enterprise Technical Audit
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Placeholder project for a full-site technical SEO audit covering
              crawl health, indexation, and site architecture improvements.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-950">
              Content Growth Framework
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Placeholder project for building a scalable content planning
              system aligned with search intent, topic clusters, and performance
              tracking.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-950">
              Programmatic SEO Rollout
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Placeholder project for launching repeatable landing page systems
              designed to support expansion at scale without sacrificing
              quality.
            </p>
          </article>
        </div>
      </section>
      <section className="mx-auto mt-24 max-w-5xl border-t border-zinc-200 pt-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Experience
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Over the past 3+ years, I have worked across technical SEO,
            content-driven growth, and search-focused systems that help teams
            move from one-off execution to repeatable, measurable performance.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 text-sm leading-6 text-zinc-700 sm:grid-cols-2">
          <li className="rounded-2xl border border-zinc-200 px-5 py-4">
            Technical SEO strategy for complex websites and scalable site
            structures
          </li>
          <li className="rounded-2xl border border-zinc-200 px-5 py-4">
            Content systems built around topic authority, search intent, and
            editorial workflows
          </li>
          <li className="rounded-2xl border border-zinc-200 px-5 py-4">
            Cross-functional collaboration with product, engineering, and
            content teams
          </li>
          <li className="rounded-2xl border border-zinc-200 px-5 py-4">
            Performance monitoring focused on visibility, crawl efficiency, and
            growth opportunities
          </li>
        </ul>
      </section>
    </main>
  );
}
