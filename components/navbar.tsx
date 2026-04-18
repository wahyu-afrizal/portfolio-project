"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.dataset.menuOpen = "true";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      delete document.body.dataset.menuOpen;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link href="/" className="site-brand">
          <span className="site-brand__eyebrow">Wahyu Afrizal</span>
          <span className="site-brand__title">SEO & growth systems</span>
        </Link>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-primary-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className="site-header__menu-toggle-line" />
            <span className="site-header__menu-toggle-line" />
            <span className="site-header__menu-toggle-line" />
          </button>

          <nav
            id="site-primary-nav"
            aria-label="Primary"
            className="site-header__nav"
            data-open={isMenuOpen ? "true" : "false"}
          >
            <ul className="site-nav">
              {links.map((link) => {
                const isActive = isActiveLink(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="site-nav__link"
                      aria-current={isActive ? "page" : undefined}
                      data-active={isActive ? "true" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/projects"
              className="site-header__cta"
              onClick={() => setIsMenuOpen(false)}
            >
              View work
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
