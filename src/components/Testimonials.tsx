import { Quote } from "lucide-react";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  if (testimonials.items.length === 0) return null;

  // Avoid a lone card stranded on the last row: 4 quotes read better as 2x2
  // than as 3+1. Counts divisible by 3 (or odd) keep three columns.
  const count = testimonials.items.length;
  const columns =
    count % 3 !== 0 && count % 2 === 0 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="border-t border-line-soft py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          highlight={testimonials.headingHighlight}
          align="center"
        />

        <div className={`mt-14 grid gap-4 ${columns}`}>
          {testimonials.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-card border border-line bg-surface p-6 sm:p-7">
                <Quote size={18} className="text-accent" aria-hidden />

                <blockquote className="mt-4 flex-1 text-sm leading-[1.7] text-muted text-pretty">
                  {item.quote}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line-soft pt-5">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-raised">
                    <Media
                      src={item.avatar}
                      alt={item.name}
                      sizes="40px"
                      className="[&_svg]:h-4 [&_svg]:w-4 [&_span]:hidden"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-fg">
                      {item.name}
                    </span>
                    <span className="block text-xs leading-snug text-faint text-pretty">
                      {item.role}, {item.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
