import type { BreadcrumbItem } from "@/components/breadcrumbs";

export function createPageBreadcrumbs(
  currentPage: string,
): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: currentPage },
  ];
}
