import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  highlight?: string;
  intro?: string;
  align?: "left" | "center";
}

/**
 * The eyebrow + two-tone heading pattern used at the top of every section.
 * The highlighted half is the accent colour; the rest stays foreground.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  highlight,
  intro,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border border-line bg-raised/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted ${
            centered ? "" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {heading}{" "}
          {highlight ? <span className="text-accent">{highlight}</span> : null}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={140}>
          <p className="mt-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
