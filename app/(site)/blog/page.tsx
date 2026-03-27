const blogPosts = [
  {
    title: "What I Look for in a Technical SEO Audit",
    excerpt:
      "A practical walkthrough of the issues I review first, from crawl paths and indexation signals to internal linking and template consistency.",
    meta: "Technical SEO",
  },
  {
    title: "Building Content Plans Around Search Intent",
    excerpt:
      "Notes on turning keyword research into a clearer content structure that supports both user needs and long-term topic coverage.",
    meta: "Content Strategy",
  },
  {
    title: "Measuring SEO Progress Beyond Ranking Reports",
    excerpt:
      "A simple way to think about visibility, crawl efficiency, and page-level performance without relying only on position changes.",
    meta: "March 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white px-6 py-24 text-zinc-900 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg">
            A place to share SEO insights, small experiments, and practical
            learnings from technical work, content planning, and organic growth
            projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-sm text-zinc-500">{post.meta}</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-[15px]">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
