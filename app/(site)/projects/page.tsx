import { getProjects } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

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
        {projects.length > 0 ? (
          projects.map((project) => (
            <article
              key={project._id}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10"
            >
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  {project.title}
                </h2>
                {project.shortDescription ? (
                  <p className="mt-4 text-base leading-7 text-zinc-700">
                    {project.shortDescription}
                  </p>
                ) : null}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Problem
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    {project.problem || "Details will be added soon."}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Approach
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    {project.approach || "Details will be added soon."}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Impact
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    {project.impact || "Details will be added soon."}
                  </p>
                </div>
              </div>
            </article>
          ))
        ) : (
          <article className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              No projects published yet
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
              Project case studies will appear here once they are published from
              Sanity Studio.
            </p>
          </article>
        )}
      </section>
    </main>
  );
}
