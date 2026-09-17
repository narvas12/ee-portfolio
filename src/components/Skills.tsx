import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/content";

export default function Skills() {
  if (skills.categories.length === 0) return null;

  return (
    <section id="skills" className="scroll-mt-24 border-t border-line-soft py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={skills.eyebrow}
          heading={skills.heading}
          highlight={skills.headingHighlight}
          intro={skills.intro}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {skills.categories.map((category, i) => (
            <Reveal key={category.name} delay={(i % 2) * 80}>
              <div className="h-full rounded-card border border-line bg-surface p-6 sm:p-7">
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-faint">
                  {category.name}
                </h3>

                <ul className="mt-6 space-y-5">
                  {category.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-fg">{skill.name}</span>
                        <span className="font-mono text-xs text-faint">{skill.level}%</span>
                      </div>
                      <div
                        className="mt-2 h-1 w-full overflow-hidden rounded-full bg-line"
                        role="meter"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${Math.max(0, Math.min(100, skill.level))}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
