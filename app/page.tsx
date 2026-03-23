export default function Home() {
  return (
    <main className="bg-white px-6 py-24 text-zinc-900 sm:px-10 lg:px-16">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center">
        <span className="mb-6 inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium tracking-wide text-zinc-600">
          SEO & Growth Systems
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
          Wahyu Afrizal is an SEO specialist with a focus on technical SEO,
          site structure, and content-led growth.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          I work on the practical side of SEO: improving technical foundations,
          making websites easier to crawl and organize, and building content
          processes that support steady organic visibility over time.
        </p>
      </section>
      <section className="mx-auto mt-24 max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Examples of work across technical SEO, content planning, and search
            processes designed to be clear, repeatable, and useful in practice.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-950">
              Enterprise Technical Audit
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A technical review of crawlability, indexation, internal linking,
              and site structure to identify issues affecting search
              performance on a large website.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-950">
              Content Growth Framework
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A content planning framework built around search intent, topic
              structure, and editorial workflows to support more consistent
              organic growth.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-950">
              Programmatic SEO Rollout
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A structured landing page rollout for expanding search coverage
              while keeping page quality, relevance, and site structure in
              place.
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
            Over the past 3+ years, I have worked across technical SEO, content
            strategy, and day-to-day search operations, helping teams turn SEO
            priorities into work that is easier to maintain and improve over
            time.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 text-sm leading-6 text-zinc-700 sm:grid-cols-2">
          <li className="rounded-2xl border border-zinc-200 px-5 py-4">
            Technical SEO work covering crawlability, indexation, and site
            architecture
          </li>
          <li className="rounded-2xl border border-zinc-200 px-5 py-4">
            Content planning informed by search intent, topic coverage, and
            editorial structure
          </li>
          <li className="rounded-2xl border border-zinc-200 px-5 py-4">
            Collaboration with product, engineering, and content teams on SEO
            implementation
          </li>
          <li className="rounded-2xl border border-zinc-200 px-5 py-4">
            Ongoing monitoring of visibility, technical health, and search
            opportunities
          </li>
        </ul>
      </section>
    </main>
  );
}
