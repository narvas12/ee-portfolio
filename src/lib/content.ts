/**
 * The single place the site reads content from.
 *
 * Every section imports from here, and everything here comes from a JSON file
 * in `src/data`. To change the site, edit the JSON. No component needs to be
 * touched. Sections whose JSON array is empty hide themselves automatically.
 */

import contactData from "@/data/contact.json";
import contractsData from "@/data/contracts.json";
import experienceData from "@/data/experience.json";
import navigationData from "@/data/navigation.json";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import testimonialsData from "@/data/testimonials.json";

import type {
  Contact,
  Contracts,
  Experience,
  Navigation,
  Profile,
  Projects,
  Skills,
  Testimonials,
} from "./types";

export const profile = profileData as Profile;
export const experience = experienceData as Experience;
export const contracts = contractsData as Contracts;
export const projects = projectsData as Projects;
export const skills = skillsData as Skills;
export const testimonials = testimonialsData as Testimonials;
export const contact = contactData as Contact;
export const navigation = navigationData as Navigation;

const hasFeatured = projects.items.some((p) => p.featured);

/** Projects marked `"featured": true`. If none are, every project gets the
 *  large treatment rather than the section rendering empty. */
export const featuredProjects = hasFeatured
  ? projects.items.filter((p) => p.featured)
  : projects.items;

/** Everything else, rendered in the compact grid below the featured cards. */
export const otherProjects = hasFeatured
  ? projects.items.filter((p) => !p.featured)
  : [];

/** Look up the testimonial a contract engagement points at, if any. */
export function testimonialFor(id: string | null) {
  if (!id) return null;
  return testimonials.items.find((t) => t.id === id) ?? null;
}

/** Nav links whose target section actually has content to show. */
export const activeNavLinks = navigation.links.filter((link) => {
  switch (link.href) {
    case "#experience":
      return experience.items.length > 0;
    case "#contracts":
      return contracts.items.length > 0;
    case "#projects":
      return projects.items.length > 0;
    case "#skills":
      return skills.categories.length > 0;
    default:
      return true;
  }
});
