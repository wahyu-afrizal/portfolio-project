import { groq } from "next-sanity";

import { client } from "./client";

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
  tags: string[] | null;
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
    tags
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

export function getExperienceEntries() {
  return client.fetch<ExperienceListItem[]>(experienceQuery);
}
