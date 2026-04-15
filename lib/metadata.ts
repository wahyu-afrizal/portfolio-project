import type { Metadata } from "next";

export const siteName = "Wahyu Afrizal";
export const defaultTitle = "Wahyu Afrizal | SEO & Growth Systems";
export const defaultDescription =
  "Personal portfolio of Wahyu Afrizal, focused on SEO, scalable systems, and content strategy.";

export function createCanonicalMetadata(
  pathname: string,
  metadata: Pick<Metadata, "title" | "description" | "openGraph">,
): Metadata {
  return {
    ...metadata,
    alternates: {
      canonical: pathname,
    },
  };
}
