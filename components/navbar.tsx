import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link href="/" className="site-brand">
          <span className="site-brand__eyebrow">Wahyu Afrizal</span>
          <span className="site-brand__title">SEO & growth systems</span>
        </Link>

        <div className="site-header__actions">
          <nav aria-label="Primary">
            <ul className="site-nav">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="site-nav__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/projects" className="site-header__cta">
            View work
          </Link>
        </div>
      </div>
    </header>
  );
}
