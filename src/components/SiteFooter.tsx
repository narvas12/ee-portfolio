import { ArrowUp } from "lucide-react";

import Icon from "@/components/ui/Icon";
import { activeNavLinks, profile } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft py-12">
      <div className="container-page">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-accent-ink">
                {profile.initials}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
                <span className="text-[11px] text-faint">{profile.role}</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-faint">
              {profile.specialty} · {profile.location}
            </p>
          </div>

          <nav className="no-print flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {activeNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-6 border-t border-line-soft pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {year} {profile.name}. Built with Next.js and Tailwind CSS.
          </p>

          <div className="flex items-center gap-2">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="no-print ml-1 grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
