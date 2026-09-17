import { ArrowUpRight, GraduationCap } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import { experience } from "@/lib/content";

export default function Experience() {
  if (experience.items.length === 0) return null;

  return (
    <section id="experience" className="scroll-mt-24 border-t border-line-soft py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={experience.eyebrow}
          heading={experience.heading}
          highlight={experience.headingHighlight}
        />

        <ol className="mt-14 space-y-4">
          {experience.items.map((job, i) => (
            <Reveal key={job.id} delay={i * 70} as="li">
              <article className="group relative rounded-card border border-line bg-surface p-6 transition-colors hover:border-fg/15 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
                  {/* Left rail: when and where */}
                  <div className="lg:border-r lg:border-line-soft lg:pr-8">
                    <div className="flex items-center gap-2 font-mono text-sm text-accent">
                      {job.start} to {job.end}
                      {job.current ? (
                        <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-accent" />
                      ) : null}
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-faint">
                      {job.type}
                    </p>
                    <p className="mt-1 text-xs text-faint">{job.location}</p>
                  </div>

                  {/* Right: what I did */}
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {job.role}
                    </h3>

                    <p className="mt-1.5 text-sm text-muted">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 text-fg transition-colors hover:text-accent"
                        >
                          {job.company}
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="text-fg">{job.company}</span>
                      )}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">
                      {job.summary}
                    </p>

                    {job.highlights.length > 0 ? (
                      <ul className="mt-5 space-y-2.5">
                        {job.highlights.map((highlight, h) => (
                          <li
                            key={h}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted text-pretty"
                          >
                            <span className="mt-[0.45rem] h-1 w-3 shrink-0 rounded-full bg-accent/50" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {job.tech.length > 0 ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.tech.map((tech) => (
                          <TechBadge key={tech} label={tech} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        {experience.education.length > 0 ? (
          <Reveal delay={120}>
            <div className="mt-8 rounded-card border border-line bg-surface/60 p-6 sm:p-7">
              <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faint">
                <GraduationCap size={15} />
                {experience.educationHeading ?? "Education"}
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {experience.education.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <div>
                      <p className="text-sm font-medium text-fg">{item.credential}</p>
                      <p className="text-sm text-muted">
                        {item.school}
                        {item.detail ? ` · ${item.detail}` : ""}
                      </p>
                    </div>
                    {item.start || item.end ? (
                      <span className="shrink-0 font-mono text-xs text-faint">
                        {[item.start, item.end].filter(Boolean).join(" to ")}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
