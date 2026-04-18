import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Breadcrumbs from "@/components/breadcrumbs";
import PageIntro from "@/components/page-intro";
import { createPageBreadcrumbs } from "@/lib/breadcrumbs";
import { createCanonicalMetadata } from "@/lib/metadata";
import { urlFor } from "@/sanity/lib/image";
import { getPosts } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createCanonicalMetadata("/blog", {
  title: "Blog",
  description:
    "SEO insights, practical experiments, and technical learnings across search, content planning, and organic growth.",
  openGraph: {
    title: "Blog",
    description:
      "SEO insights, practical experiments, and technical learnings across search, content planning, and organic growth.",
    url: "/blog",
  },
});

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
  const breadcrumbs = createPageBreadcrumbs("Blog");

  return (
    <main className="px-6 pb-20 pt-10 sm:px-10 sm:pt-14 lg:px-16">
      <div className="site-shell">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <PageIntro
        eyebrow="Writing"
        title="Notes on technical SEO, experiments, and structured growth work."
        description="A writing-led space for practical lessons, technical observations, and ideas worth documenting clearly."
        aside={
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Content reality
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
              Writing-heavy pages with strong readability and restrained visual
              noise.
            </p>
          </div>
        }
      />

      <section className="mx-auto mt-14 max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <article
                key={post._id}
                className="section-card flex h-full flex-col overflow-hidden rounded-[1.75rem]"
              >
                {post.featuredImage?.asset ? (
                  <div className="relative aspect-[16/10] w-full bg-[var(--color-surface-strong)]">
                    <Image
                      src={urlFor(post.featuredImage).width(960).height(600).url()}
                      alt={post.featuredImage.alt || post.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                ) : null}
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <p className="text-sm text-[var(--color-muted)]">
                    {formatPostMeta(post.publishedAt, post.tags)}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-copy)] sm:text-[0.96rem]">
                    {post.excerpt || "A full article summary will be added soon."}
                  </p>
                  {post.slug ? (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-auto pt-7 text-sm font-medium text-[var(--color-ink)]"
                    >
                      Read article
                    </Link>
                  ) : (
                    <p className="mt-auto pt-7 text-sm font-medium text-[var(--color-muted)]">
                      Slug required to publish this article page
                    </p>
                  )}
                </div>
              </article>
            ))
          ) : (
            <article className="rounded-[1.75rem] border border-dashed border-[color:var(--color-border-strong)] bg-[var(--color-surface)] p-6 md:col-span-3">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                No blog posts published yet
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-copy)] sm:text-[0.96rem]">
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
