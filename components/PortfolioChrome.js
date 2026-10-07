import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { portfolioContent } from "../data";

const { navigation, person } = portfolioContent;

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="none">
      <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PortfolioHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={person.fullName} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
  );
}

export function SiteHeader({ home = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const handleMenuKeyDown = (event) => {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      menuButton.current?.focus();
    }
  };
  const prefix = home ? "" : "/";
  return (
    <header className="site-header page-width" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Link className="site-mark" href={home ? "#top" : "/"} onClick={closeMenu} aria-label={`${person.fullName}, back to top`}>{person.initials}</Link>
      <button
        ref={menuButton}
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <span className="menu-lines" aria-hidden="true"><span /><span /><span /></span>
      </button>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} id="site-navigation" aria-label="Main navigation" onKeyDown={handleMenuKeyDown}>
        {navigation.map((item) => (
          <Link key={item.href} href={`${prefix}${item.href}`} onClick={closeMenu}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter({ home = false }) {
  return (
    <footer className="site-footer page-width">
      <span>© {new Date().getFullYear()} {person.fullName}</span>
      <Link href={home ? "#top" : "/#top"}>Back to top ↑</Link>
    </footer>
  );
}
