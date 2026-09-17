interface TechBadgeProps {
  label: string;
  tone?: "default" | "accent";
}

/** Small pill used for tech stacks, engagement types, and status labels. */
export default function TechBadge({ label, tone = "default" }: TechBadgeProps) {
  const styles =
    tone === "accent"
      ? "border-accent/30 bg-accent/10 text-accent"
      : "border-line bg-raised/70 text-muted";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none tracking-tight ${styles}`}
    >
      {label}
    </span>
  );
}
