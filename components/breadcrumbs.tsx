import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({
  items,
  className,
}: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={["breadcrumbs", className].filter(Boolean).join(" ")}
    >
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1 || !item.href;
          const href = item.href;

          return (
            <li key={`${item.label}-${index}`} className="breadcrumbs__item">
              {isCurrentPage || !href ? (
                <span
                  aria-current="page"
                  className="breadcrumbs__current"
                >
                  {item.label}
                </span>
              ) : (
                <Link href={href} className="breadcrumbs__link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
