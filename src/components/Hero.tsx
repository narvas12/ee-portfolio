import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";

import Icon from "@/components/ui/Icon";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-44">
      {/* Background treatment */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="backdrop-grid absolute inset-0 opacity-70" />
        <div className="accent-glow absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2" />
      </div>

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-16">
          {/* Left: the pitch */}
          <div>
            {profile.availability.open ? (
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs text-accent">
                  <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-accent" />
                  {profile.availability.label}
                </div>
              </Reveal>
            ) : null}

            <Reveal delay={90}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                {profile.headline.greeting}{" "}
                <span className="text-accent">{profile.headline.highlight}</span>,{" "}
                {profile.headline.trailing}
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
                {profile.subheadline}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-[1.03]"
                >
                  Hire me
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-raised/50 px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:border-fg/25"
                >
                  <Download size={16} />
                  Download résumé
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-2 py-3.5 text-sm text-muted transition-colors hover:text-fg"
                >
                  See the work
                  <ArrowDown size={15} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-faint">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} />
                  {profile.location} · {profile.timezone}
                </span>
                <span className="hidden h-3 w-px bg-line sm:block" />
                <div className="flex items-center gap-1">
                  {profile.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      aria-label={`${social.label}: ${social.handle}`}
                      title={social.handle}
                      className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      <Icon name={social.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: identity card */}
          <Reveal delay={200} className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-card border border-line bg-surface">
              <div className="relative aspect-square w-full bg-raised sm:aspect-4/5">
                <Media
                  src={profile.avatar}
                  alt={`${profile.name}, ${profile.role}`}
                  fallbackLabel="Add your photo"
                  priority
                  sizes="(max-width: 1024px) 100vw, 20rem"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <p className="text-base font-semibold tracking-tight">{profile.name}</p>
                  <p className="text-sm text-muted">{profile.specialty}</p>
                </div>

                <p className="border-t border-line-soft pt-4 text-sm leading-relaxed text-faint">
                  {profile.availability.detail}
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-raised px-4 py-3 text-sm transition-colors hover:border-accent/40"
                >
                  <span className="truncate text-muted">{profile.email}</span>
                  <ArrowUpRight size={15} className="shrink-0 text-accent" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        {profile.stats.length > 0 ? (
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:mt-24 lg:grid-cols-4">
            {profile.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="bg-surface p-6 sm:p-8">
                <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                  {stat.value}
                  {stat.suffix ? <span className="text-fg">{stat.suffix}</span> : null}
                </p>
                <p className="mt-2 text-xs leading-snug text-faint uppercase tracking-[0.12em]">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
