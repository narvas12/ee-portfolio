"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { activeNavLinks, navigation, profile } from "@/lib/content";

/**
 * Sticky header. Gains a background once you scroll past the hero, and
 * highlights whichever section is currently on screen.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section nearest the top of the viewport for the nav underline.
  useEffect(() => {
    const ids = activeNavLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const onScreen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (onScreen[0]) setActiveId(onScreen[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-18">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-accent-ink">
            {profile.initials}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
            <span className="text-[11px] text-faint">{profile.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
          {activeNavLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-raised text-fg"
                    : "text-muted hover:bg-raised/60 hover:text-fg"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            className="hidden rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-fg/25 hover:text-fg sm:inline-flex"
          >
            Résumé
          </a>
          <a
            href={navigation.cta.href}
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
          >
            {navigation.cta.label}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden"
      >
        <nav className="container-page flex flex-col py-4" aria-label="Sections">
          {activeNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line-soft py-3.5 text-base text-muted transition-colors last:border-0 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-full border border-line py-3 text-center text-sm text-fg"
          >
            Download résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
