import { groq } from "next-sanity";

import { client } from "./client";

export type SanityImageWithAlt = {
  alt?: string;
  asset?: {
    _ref: string;
    _type: "reference";
  };
  crop?: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

export type ProjectListItem = {
  _id: string;
  title: string;
  slug: string | null;
  shortDescription: string | null;
  problem: string | null;
  approach: string | null;
  impact: string | null;
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: string | null;
  excerpt: string | null;
  publishedAt: string | null;
  updatedAt: string;
  tags: string[] | null;
  featuredImage: SanityImageWithAlt | null;
};

type PortableTextSpan = {
  _key: string;
  _type: "span";
  text: string;
};

export type PortableTextBlock = {
  _key: string;
  _type: "block";
  style?: string;
  listItem?: "bullet" | "number";
  level?: number;
  children?: PortableTextSpan[];
};

export type PostDetail = PostListItem & {
  body: PortableTextBlock[] | null;
  seoTitle: string | null;
  metaDescription: string | null;
};

export type SitemapPostItem = {
  slug: string;
  updatedAt: string;
  publishedAt: string | null;
};

export type ExperienceListItem = {
  _id: string;
  role: string;
  company: string | null;
  startDate: string | null;
  endDate: string | null;
  summary: string | null;
  highlights: string[] | null;
};

const projectsQuery = groq`
  *[_type == "project"] | order(featured desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    problem,
    approach,
    impact
  }
`;

const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "updatedAt": _updatedAt,
    tags,
    featuredImage{
      alt,
      asset,
      crop,
      hotspot
    }
  }
`;

const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "updatedAt": _updatedAt,
    tags,
    featuredImage{
      alt,
      asset,
      crop,
      hotspot
    },
    body[]{
      _key,
      _type,
      style,
      listItem,
      level,
      children[]{
        _key,
        _type,
        text
      }
    },
    seoTitle,
    metaDescription
  }
`;

const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

const sitemapPostsQuery = groq`
  *[
    _type == "post" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
  ] | order(publishedAt desc, _updatedAt desc) {
    "slug": slug.current,
    publishedAt,
    "updatedAt": _updatedAt
  }
`;

const experienceQuery = groq`
  *[_type == "experience"] | order(startDate desc, _createdAt desc) {
    _id,
    role,
    company,
    startDate,
    endDate,
    summary,
    highlights
  }
`;

export function getProjects() {
  return client.fetch<ProjectListItem[]>(projectsQuery);
}

export function getPosts() {
  return client.fetch<PostListItem[]>(postsQuery);
}

export function getPostBySlug(slug: string) {
  return client.fetch<PostDetail | null>(postBySlugQuery, { slug });
}

export function getPostSlugs() {
  return client.fetch<string[]>(postSlugsQuery);
}

export function getSitemapPosts() {
  return client.fetch<SitemapPostItem[]>(sitemapPostsQuery);
}

export function getExperienceEntries() {
  return client.fetch<ExperienceListItem[]>(experienceQuery);
}
