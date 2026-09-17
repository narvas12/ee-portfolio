import { ArrowUpRight, Quote } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import { contracts, testimonialFor } from "@/lib/content";

export default function Contracts() {
  if (contracts.items.length === 0) return null;

  return (
    <section id="contracts" className="scroll-mt-24 border-t border-line-soft py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={contracts.eyebrow}
          heading={contracts.heading}
          highlight={contracts.headingHighlight}
          intro={contracts.intro}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {contracts.items.map((item, i) => {
            const testimonial = testimonialFor(item.testimonialId);

            return (
              <Reveal key={item.id} delay={(i % 2) * 80}>
                <article className="flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors hover:border-accent/25 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <TechBadge label={item.engagement} tone="accent" />
                    <TechBadge label={item.duration} />
                    <span className="ml-auto font-mono text-xs text-faint">
                      {item.start} to {item.end}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">
                    {item.project}
                  </h3>

                  <p className="mt-1.5 text-sm text-muted">
                    {item.role} ·{" "}
                    {item.clientUrl ? (
                      <a
                        href={item.clientUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-fg transition-colors hover:text-accent"
                      >
                        {item.client}
                        <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="text-fg">{item.client}</span>
                    )}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">
                    {item.summary}
                  </p>

                  {item.outcomes.length > 0 ? (
                    <div className="mt-5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
                        Outcome
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {item.outcomes.map((outcome, o) => (
                          <li
                            key={o}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted text-pretty"
                          >
                            <span className="mt-[0.45rem] h-1 w-3 shrink-0 rounded-full bg-accent/50" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {testimonial ? (
                    <figure className="mt-6 rounded-xl border border-line-soft bg-raised/60 p-4">
                      <Quote size={14} className="text-accent" aria-hidden />
                      <blockquote className="mt-2.5 text-sm leading-relaxed text-muted text-pretty">
                        {testimonial.quote}
                      </blockquote>
                      <figcaption className="mt-3 text-xs text-faint">
                        {testimonial.name}, {testimonial.role} at {testimonial.company}
                      </figcaption>
                    </figure>
                  ) : null}

                  {item.tech.length > 0 ? (
                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {item.tech.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
