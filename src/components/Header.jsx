import { useEffect, useRef, useState } from "react";
import mark from "../assets/images/krg-mark.png";
import { company, navLinks } from "../data/site";

const DESKTOP_QUERY = "(min-width: 1101px)";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const toggleRef = useRef(null);

  // Header shadow once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or when the layout returns to desktop.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event) => event.matches && setMenuOpen(false);
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled || menuOpen ? " is-raised" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img
            className="brand-mark"
            src={mark}
            alt=""
            width="240"
            height="125"
          />
          <span className="brand-text">
            <span className="brand-name">{company.name}</span>
            <span className="brand-sub">{company.values.join(" · ")}</span>
          </span>
        </a>

        <nav
          id="primary-nav"
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={activeId === id ? "true" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary nav-cta" href="#contact" onClick={closeMenu}>
            Request a Quote
          </a>
        </nav>

        <a className="btn btn--primary header-cta" href="#contact">
          Request a Quote
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-controls="primary-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>
    </header>
  );
}

export default Header;
