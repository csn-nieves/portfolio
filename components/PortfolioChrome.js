import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
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
    const applyTheme = () => {
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

    if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(applyTheme);
      return;
    }

    applyTheme();
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-label="Dark mode"
      aria-checked={theme === "dark"}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb">
          <svg className="theme-icon theme-icon-sun" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.23 3.23l1.06 1.06M11.71 11.71l1.06 1.06M12.77 3.23l-1.06 1.06M4.29 11.71l-1.06 1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg className="theme-icon theme-icon-moon" viewBox="0 0 16 16" fill="none">
            <path d="M13.2 10.35A5.6 5.6 0 0 1 5.65 2.8 5.6 5.6 0 1 0 13.2 10.35Z" fill="currentColor" />
          </svg>
        </span>
      </span>
    </button>
  );
}

export function ViewTransitionLink({ href, onClick, ...props }) {
  const router = useRouter();

  const handleClick = (event) => {
    onClick?.(event);
    const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const opensElsewhere = props.target && props.target !== "_self";

    if (
      event.defaultPrevented
      || event.button !== 0
      || isModifiedClick
      || opensElsewhere
      || !document.startViewTransition
      || window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    event.preventDefault();
    document.startViewTransition(() => router.push(href));
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}

export function SiteHeader({ home = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButton = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const handleMenuKeyDown = (event) => {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      menuButton.current?.focus();
    }
  };
  const prefix = home ? "" : "/";

  useEffect(() => {
    if (!home) return undefined;

    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter(({ isIntersecting }) => isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) setActiveSection(`#${visibleSection.target.id}`);
    }, {
      rootMargin: "-18% 0px -35% 0px",
      threshold: [0, .2, .5, .8],
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [home]);

  return (
    <header className="site-header page-width" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Link className="site-mark" href={home ? "#top" : "/"} onClick={closeMenu} aria-label={`${person.fullName}, back to top`} data-text={person.initials}>{person.initials}</Link>
      <div className="header-actions">
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} id="site-navigation" aria-label="Main navigation" onKeyDown={handleMenuKeyDown}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`${prefix}${item.href}`}
              onClick={closeMenu}
              aria-current={home && activeSection === item.href ? "location" : undefined}
            >
              {item.label}
            </Link>
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
      <span className="scroll-progress" aria-hidden="true" />
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
