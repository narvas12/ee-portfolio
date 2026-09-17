import { ArrowUpRight } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact, profile } from "@/lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-line-soft py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="accent-glow absolute -bottom-72 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 opacity-60" />
      </div>

      <div className="container-page">
        <SectionHeading
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          highlight={contact.headingHighlight}
          intro={contact.intro}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="rounded-card border border-line bg-surface p-6">
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
                  Direct lines
                </h3>

                <ul className="mt-5 space-y-1">
                  {contact.channels.map((channel) => (
                    <li key={channel.label}>
                      <a
                        href={channel.url}
                        target={channel.url.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer noopener"
                        className="group -mx-3 flex items-center gap-3.5 rounded-xl px-3 py-3 transition-colors hover:bg-raised"
                      >
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-colors ${
                            channel.primary
                              ? "border-accent/30 bg-accent/10 text-accent"
                              : "border-line bg-raised text-muted group-hover:text-accent"
                          }`}
                        >
                          <Icon name={channel.icon} className="h-4 w-4" />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] uppercase tracking-[0.14em] text-faint">
                            {channel.label}
                          </span>
                          <span className="block truncate text-sm text-fg">
                            {channel.value}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-faint transition-colors group-hover:text-accent"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {profile.availability.open ? (
                <div className="rounded-card border border-accent/25 bg-accent/[0.06] p-6">
                  <div className="flex items-center gap-2.5 text-sm font-medium text-accent">
                    <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-accent" />
                    {profile.availability.label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {profile.availability.detail}
                  </p>
                  <p className="mt-3 text-xs text-faint">{contact.footerNote}</p>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
