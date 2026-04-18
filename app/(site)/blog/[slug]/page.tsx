import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { siteName } from "@/lib/metadata";
import { urlFor } from "@/sanity/lib/image";
import {
  type PortableTextBlock,
  getPostBySlug,
} from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatPublishedDate(publishedAt: string | null) {
  if (!publishedAt) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(publishedAt));
}

function getBlockText(block: PortableTextBlock) {
  return block.children?.map((child) => child.text).join("") ?? "";
}

function flushList(
  items: PortableTextBlock[],
  nodes: ReactNode[],
  key: number,
) {
  if (items.length === 0) {
    return key;
  }

  const isNumbered = items[0]?.listItem === "number";
  const ListTag = isNumbered ? "ol" : "ul";

  nodes.push(
    <ListTag
      key={`list-${key}`}
      className="ml-6 space-y-3 text-base leading-8 text-[var(--color-copy)] marker:text-[var(--color-muted)]"
    >
      {items.map((item) => (
        <li key={item._key}>{getBlockText(item)}</li>
      ))}
    </ListTag>,
  );

  items.length = 0;

  return key + 1;
}

function renderBody(blocks: PortableTextBlock[] | null) {
  if (!blocks || blocks.length === 0) {
    return (
      <p className="text-base leading-8 text-zinc-600">
        Full article content will be added soon.
      </p>
    );
  }

  const nodes: ReactNode[] = [];
  const listItems: PortableTextBlock[] = [];
  let key = 0;

  for (const block of blocks) {
    if (block._type !== "block") {
      continue;
    }

    if (block.listItem) {
      listItems.push(block);
      continue;
    }

    key = flushList(listItems, nodes, key);

    const text = getBlockText(block);
    if (!text) {
      continue;
    }

    if (block.style === "h2") {
      nodes.push(
        <h2
          key={`block-${key}`}
          className="mt-12 font-display text-4xl leading-none tracking-[-0.04em] text-[var(--color-ink)]"
        >
          {text}
        </h2>,
      );
      key += 1;
      continue;
    }

    if (block.style === "h3") {
      nodes.push(
        <h3
          key={`block-${key}`}
          className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
        >
          {text}
        </h3>,
      );
      key += 1;
      continue;
    }

    if (block.style === "blockquote") {
      nodes.push(
        <blockquote
          key={`block-${key}`}
          className="rounded-r-[1.5rem] border-l-2 border-[color:var(--color-border-strong)] bg-[var(--color-surface)] py-2 pl-6 pr-6 text-lg leading-8 text-[var(--color-copy)]"
        >
          {text}
        </blockquote>,
      );
      key += 1;
      continue;
    }

    nodes.push(
      <p key={`block-${key}`} className="text-base leading-8 text-[var(--color-copy)]">
        {text}
      </p>,
    );
    key += 1;
  }

  flushList(listItems, nodes, key);

  return nodes;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seoTitle || post.title,
    description:
      post.metaDescription ||
      post.excerpt ||
      "Technical SEO notes, experiments, and practical learnings.",
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: post.featuredImage?.asset
      ? {
          type: "article",
          url: `/blog/${slug}`,
          title: post.seoTitle || post.title,
          description:
            post.metaDescription ||
            post.excerpt ||
            "Technical SEO notes, experiments, and practical learnings.",
          siteName,
          images: [
            {
              url: urlFor(post.featuredImage).width(1200).height(630).url(),
              alt: post.featuredImage.alt || post.title,
            },
          ],
        }
      : {
          type: "article",
          url: `/blog/${slug}`,
          title: post.seoTitle || post.title,
          description:
            post.metaDescription ||
            post.excerpt ||
            "Technical SEO notes, experiments, and practical learnings.",
          siteName,
        },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="px-6 pb-20 pt-10 sm:px-10 sm:pt-14 lg:px-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--color-muted)]"
        >
          Back to blog
        </Link>

        <header className="mt-8 border-b border-[color:var(--color-border)] pb-10">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-muted)]">
            {formatPublishedDate(post.publishedAt)}
            {post.tags && post.tags.length > 0 ? ` · ${post.tags.join(" · ")}` : null}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-none tracking-[-0.05em] text-[var(--color-ink)] sm:text-6xl">
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
              {post.excerpt}
            </p>
          ) : null}
          {post.featuredImage?.asset ? (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[2rem] bg-[var(--color-surface-strong)] shadow-[var(--shadow-soft)]">
              <Image
                src={urlFor(post.featuredImage).width(1600).height(900).url()}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 768px, 100vw"
              />
            </div>
          ) : null}
        </header>

        <div className="mt-10 space-y-6 text-[var(--color-copy)]">
          {renderBody(post.body)}
        </div>
      </article>
    </main>
  );
}
