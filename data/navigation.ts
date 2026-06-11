import { asylumProfiles } from "./asylum-profiles";
import { caseTypes } from "./case-types";
import { guides } from "./guides";
import { regions } from "./regions";

export const asylumProfilesNavLinks = asylumProfiles.map((p) => ({
  label: p.title,
  href: `/asylum-profiles/${p.slug}`,
}));

export const regionsNavLinks = regions.map((r) => ({
  label: r.title,
  href: `/regions/${r.slug}`,
}));

export const caseTypesNavLinks = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const resourcesNavLinks = [
  { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
  { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
  { label: "Solicitor Guides", href: "/guides" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Glossary", href: "/glossary" },
] as const;

export const guidesNavLinks = guides.map((g) => ({
  label: g.h1.replace(/:.*$/, "").slice(0, 40),
  href: `/guides/${g.slug}`,
}));

export const mobileNavGroups = [
  {
    title: "Asylum Profiles",
    links: [{ label: "All Asylum Profiles", href: "/asylum-profiles" }, ...asylumProfilesNavLinks],
  },
  {
    title: "Regions",
    links: [{ label: "All Regions", href: "/regions" }, ...regionsNavLinks],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypesNavLinks],
  },
  {
    title: "Resources",
    links: [...resourcesNavLinks],
  },
] as const;
