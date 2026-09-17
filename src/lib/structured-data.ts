import { contracts, experience, profile, projects, skills } from "./content";

/**
 * schema.org Person markup, built from the same JSON the page renders.
 *
 * This is what lets Google show a knowledge panel for your name and what many
 * recruiting tools parse when they crawl a personal site, so it is worth
 * keeping accurate. It updates itself whenever the data files change.
 */
export function buildPersonSchema() {
  const allSkills = skills.categories.flatMap((c) => c.items.map((s) => s.name));

  const employers = experience.items.map((job) => ({
    "@type": "OrganizationRole",
    roleName: job.role,
    startDate: job.start,
    ...(job.current ? {} : { endDate: job.end }),
    worksFor: {
      "@type": "Organization",
      name: job.company,
      ...(job.companyUrl ? { url: job.companyUrl } : {}),
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.seo.description,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: profile.siteUrl,
    image: `${profile.siteUrl}${profile.avatar}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: profile.socials
      .filter((s) => s.url.startsWith("http"))
      .map((s) => s.url),
    knowsAbout: allSkills,
    hasOccupation: {
      "@type": "Occupation",
      name: profile.role,
      occupationalCategory: "15-1252.00", // O*NET code for Software Developers
      skills: allSkills.join(", "),
    },
    alumniOf: experience.education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.school,
    })),
    ...(employers.length > 0 ? { worksFor: employers } : {}),
    subjectOf: [
      ...projects.items.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        dateCreated: project.year,
        keywords: project.tech.join(", "),
      })),
      ...contracts.items.map((item) => ({
        "@type": "CreativeWork",
        name: item.project,
        description: item.summary,
        keywords: item.tech.join(", "),
      })),
    ],
  };
}
