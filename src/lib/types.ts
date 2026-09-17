/**
 * Shapes of the JSON files in `src/data`.
 *
 * These exist so that a typo in a data file shows up as a type error at build
 * time instead of a blank section on the live site. If you add a field to a
 * JSON file, add it here too.
 */

export type IconName =
  | "github"
  | "linkedin"
  | "x"
  | "mail"
  | "phone"
  | "calendar"
  | "dribbble"
  | "globe";

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface Social {
  label: string;
  icon: IconName;
  url: string;
  handle: string;
}

export interface Profile {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  specialty: string;
  location: string;
  timezone: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
  siteUrl: string;
  availability: {
    open: boolean;
    label: string;
    detail: string;
  };
  headline: {
    greeting: string;
    highlight: string;
    trailing: string;
  };
  subheadline: string;
  stats: Stat[];
  about: {
    eyebrow: string;
    heading: string;
    headingHighlight: string;
    paragraphs: string[];
  };
  socials: Social[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl: string | null;
  role: string;
  type: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  credential: string;
  detail: string;
  start: string;
  end: string;
}

export interface Experience {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  /** Label for the block under the timeline. Defaults to "Education". Set it
   *  to "Certifications" (or anything else) in experience.json. */
  educationHeading?: string;
  items: ExperienceItem[];
  education: EducationItem[];
}

export interface ContractItem {
  id: string;
  client: string;
  clientUrl: string | null;
  project: string;
  role: string;
  engagement: string;
  start: string;
  end: string;
  duration: string;
  status: string;
  summary: string;
  outcomes: string[];
  tech: string[];
  testimonialId: string | null;
}

export interface Contracts {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  intro: string;
  items: ContractItem[];
}

export type ProjectLinkType = "live" | "repo" | "case" | "article";

export interface ProjectLink {
  label: string;
  url: string;
  type: ProjectLinkType;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  context: string;
  featured: boolean;
  image: string;
  summary: string;
  problem: string;
  approach: string;
  metrics: Metric[];
  tech: string[];
  links: ProjectLink[];
}

export interface Projects {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  intro: string;
  items: ProjectItem[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface Skills {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  intro: string;
  categories: SkillCategory[];
  practices: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Testimonials {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  items: TestimonialItem[];
}

export interface ContactChannel {
  label: string;
  value: string;
  url: string;
  icon: IconName;
  primary: boolean;
}

export interface Contact {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  intro: string;
  formEndpoint: string;
  formNote: string;
  subjects: string[];
  channels: ContactChannel[];
  footerNote: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Navigation {
  links: NavLink[];
  cta: NavLink;
}
