import { getPosts } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

function formatPostMeta(
  publishedAt: string | null,
  tags: string[] | null,
): string {
  if (publishedAt) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(publishedAt));
  }

  if (tags && tags.length > 0) {
    return tags[0];
  }

  return "Draft";
}

export default async function BlogPage() {
  const blogPosts = await getPosts();

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
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <article
                key={post._id}
                className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <p className="text-sm text-zinc-500">
                  {formatPostMeta(post.publishedAt, post.tags)}
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-[15px]">
                  {post.excerpt || "A full article summary will be added soon."}
                </p>
              </article>
            ))
          ) : (
            <article className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 md:col-span-3">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                No blog posts published yet
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-[15px]">
                Articles will appear here once posts are published from Sanity
                Studio.
              </p>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
