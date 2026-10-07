import Head from "next/head";
import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";
import { portfolioContent } from "../data";

const { navigation, person } = portfolioContent;
const themeStorageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";
const themeBootScript = `(function(){try{var theme=localStorage.getItem('${themeStorageKey}')==='dark'?'dark':'light';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(error){document.documentElement.dataset.theme='light';document.documentElement.style.colorScheme='light';}})();`;
const getThemeSnapshot = () => document.documentElement.dataset.theme === "dark" ? "dark" : "light";
const getServerThemeSnapshot = () => "light";
const subscribeToTheme = (onStoreChange) => {
  window.addEventListener(themeChangeEvent, onStoreChange);
  return () => window.removeEventListener(themeChangeEvent, onStoreChange);
};

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
      <meta id="portfolio-theme-color" name="theme-color" content="#f6f7f5" />
      <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
  );
}

function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    document.querySelector("#portfolio-theme-color")?.setAttribute("content", nextTheme === "dark" ? "#111719" : "#f6f7f5");

    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
      // The visual preference still applies for the current page when storage is unavailable.
    }

    window.dispatchEvent(new Event(themeChangeEvent));
  };

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-label="Dark mode"
      aria-checked={theme === "dark"}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-label">Dark mode</span>
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
    </button>
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
      <div className="header-actions">
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} id="site-navigation" aria-label="Main navigation" onKeyDown={handleMenuKeyDown}>
          {navigation.map((item) => (
            <Link key={item.href} href={`${prefix}${item.href}`} onClick={closeMenu}>{item.label}</Link>
          ))}
        </nav>
        <ThemeToggle />
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
      </div>
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
