import { ArrowUpRight, BookOpen, ExternalLink, FileText } from "lucide-react";

import Icon from "@/components/ui/Icon";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import { featuredProjects, otherProjects, projects } from "@/lib/content";
import type { ProjectItem, ProjectLinkType } from "@/lib/types";

/** Icon per link type. `repo` uses the GitHub mark from `Icon`, since
 *  lucide no longer ships brand logos. */
function LinkIcon({ type }: { type: ProjectLinkType }) {
  if (type === "repo") return <Icon name="github" className="h-3.5 w-3.5" />;
  const Glyph = { live: ExternalLink, case: FileText, article: BookOpen }[type] ?? ExternalLink;
  return <Glyph size={13} />;
}

function ProjectLinks({ project }: { project: ProjectItem }) {
  if (project.links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {project.links.map((link) => {
        return (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <LinkIcon type={link.type} />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

/** Large card: image, the problem/approach story, and hard numbers. */
function FeaturedProject({ project, index }: { project: ProjectItem; index: number }) {
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <article className="overflow-hidden rounded-card border border-line bg-surface">
        <div className="grid lg:grid-cols-2">
          <div
            className={`relative aspect-16/10 w-full lg:aspect-auto lg:min-h-[26rem] ${
              flip ? "lg:order-last" : ""
            }`}
          >
            <Media
              src={project.image}
              alt={`${project.title}: ${project.subtitle}`}
              fallbackLabel={project.title}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 p-6 sm:p-9 lg:p-10">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-faint">
              <span className="text-accent">{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span>{project.context}</span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span>{project.role}</span>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{project.subtitle}</p>
            </div>

            <p className="text-base leading-relaxed text-muted text-pretty">
              {project.summary}
            </p>

            <dl className="space-y-3 border-l-2 border-accent/30 pl-4 text-sm">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
                  Problem
                </dt>
                <dd className="mt-1 leading-relaxed text-muted text-pretty">
                  {project.problem}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
                  Approach
                </dt>
                <dd className="mt-1 leading-relaxed text-muted text-pretty">
                  {project.approach}
                </dd>
              </div>
            </dl>

            {project.metrics.length > 0 ? (
              <div className="grid grid-cols-3 gap-4 border-y border-line-soft py-5">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-xl font-semibold tracking-tight text-accent sm:text-2xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-faint">{metric.label}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {project.tech.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            ) : null}

            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/** Compact card for everything not marked `featured`. */
function SecondaryProject({ project, delay }: { project: ProjectItem; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-fg/15">
        <div className="relative aspect-16/10 w-full">
          <Media
            src={project.image}
            alt={`${project.title}: ${project.subtitle}`}
            fallbackLabel={project.title}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-accent">{project.year}</span>
          </div>

          <p className="text-sm leading-relaxed text-muted text-pretty">{project.summary}</p>

          {project.metrics.length > 0 ? (
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="font-semibold text-accent">{metric.value}</span>{" "}
                  <span className="text-xs text-faint">{metric.label}</span>
                </div>
              ))}
            </div>
          ) : null}

          {project.tech.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          ) : null}

          <div className="mt-auto pt-2">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  if (projects.items.length === 0) return null;

  return (
    <section id="projects" className="scroll-mt-24 border-t border-line-soft py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={projects.eyebrow}
          heading={projects.heading}
          highlight={projects.headingHighlight}
          intro={projects.intro}
        />

        <div className="mt-14 space-y-4">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.id} project={project} index={i} />
          ))}
        </div>

        {otherProjects.length > 0 ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {otherProjects.map((project, i) => (
              <SecondaryProject key={project.id} project={project} delay={(i % 2) * 80} />
            ))}
          </div>
        ) : null}

        <Reveal delay={120}>
          <p className="mt-10 text-sm text-faint">
            More work lives on{" "}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              request
              <ArrowUpRight size={13} />
            </a>
            , including private client work I can walk you through on a call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
