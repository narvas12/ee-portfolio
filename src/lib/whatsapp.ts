import { contact } from "./content";

/**
 * Builds a wa.me deep link from the number in contact.json.
 *
 * wa.me wants digits only, so anything a human might type into the JSON
 * (`+234 812 934 1700`) gets stripped here rather than in every caller.
 */
export function whatsappUrl(message?: string) {
  const digits = contact.whatsapp.number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
