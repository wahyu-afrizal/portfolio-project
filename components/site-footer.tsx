import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Writing" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <div className="site-footer__intro">
          <p className="section-label">Wahyu Afrizal</p>
          <p className="site-footer__title font-display">
            Technical SEO clarity, built for teams that need structure and
            follow-through.
          </p>
          <p className="site-footer__copy">
            Personal brand portfolio focused on technical SEO, content systems,
            and sustainable organic growth.
          </p>
        </div>

        <div className="site-footer__meta">
          <nav aria-label="Footer">
            <ul className="site-footer__nav">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="site-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>Designed to feel calm, precise, and personal.</p>
        </div>
      </div>
    </footer>
  );
}
