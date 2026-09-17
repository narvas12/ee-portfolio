import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile, skills } from "@/lib/content";

export default function About() {
  const { about } = profile;

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={about.eyebrow}
          heading={about.heading}
          highlight={about.headingHighlight}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-base leading-[1.75] text-muted text-pretty sm:text-[1.0625rem]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {skills.practices.length > 0 ? (
            <Reveal delay={140}>
              <div className="rounded-card border border-line bg-surface p-6 sm:p-7">
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
                  How I work
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {skills.practices.map((practice) => (
                    <li key={practice} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
