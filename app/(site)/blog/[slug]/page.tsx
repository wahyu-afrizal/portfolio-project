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
      className="ml-6 space-y-3 text-base leading-8 text-zinc-700 marker:text-zinc-500"
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
          className="mt-12 text-2xl font-semibold tracking-tight text-zinc-950"
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
          className="mt-10 text-xl font-semibold tracking-tight text-zinc-950"
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
          className="border-l-2 border-zinc-300 pl-6 text-lg leading-8 text-zinc-700"
        >
          {text}
        </blockquote>,
      );
      key += 1;
      continue;
    }

    nodes.push(
      <p key={`block-${key}`} className="text-base leading-8 text-zinc-700">
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
    <main className="bg-white px-6 py-24 text-zinc-900 sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
        >
          Back to blog
        </Link>

        <header className="mt-8 border-b border-zinc-200 pb-10">
          <p className="text-sm text-zinc-500">
            {formatPublishedDate(post.publishedAt)}
            {post.tags && post.tags.length > 0 ? ` · ${post.tags.join(" · ")}` : null}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              {post.excerpt}
            </p>
          ) : null}
          {post.featuredImage?.asset ? (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl bg-zinc-100">
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

        <div className="mt-10 space-y-6">{renderBody(post.body)}</div>
      </article>
    </main>
  );
}
