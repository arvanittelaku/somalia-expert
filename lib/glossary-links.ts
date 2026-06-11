import type { RelatedLink } from "@/data/related-links";

/** SEO-critical glossary term → internal links (Appendix C anchor mappings) */
export const GLOSSARY_TERM_LINKS: Record<string, RelatedLink[]> = {
  "moj-and-others-2014": [
    { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
    { label: "MOJ Framework Guide", href: "/guides/moj-framework-guide" },
  ],
  "oa-and-others-2022": [
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    { label: "Fresh Claims Case Type", href: "/case-types/fresh-claims-somalia" },
  ],
  "amm-and-others-2011": [
    { label: "FGM & GBV Profile", href: "/asylum-profiles/fgm-gender-based-violence" },
    { label: "FGM Expert Guide", href: "/guides/fgm-somalia-guide" },
  ],
  atmis: [
    { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
  ],
  "al-shabaab": [
    { label: "Al-Shabaab Targeting Profile", href: "/asylum-profiles/al-shabaab-targeting" },
    { label: "Al-Shabaab Asylum Guide", href: "/guides/al-shabaab-asylum-guide" },
  ],
  "article-15c": [
    { label: "Article 15(c) Case Type", href: "/case-types/article-15c-south-central" },
    { label: "South/Central Somalia", href: "/regions/south-central-somalia" },
  ],
  clan: [
    { label: "Clan Minority Groups", href: "/asylum-profiles/clan-minority-groups" },
    { label: "Clan Structure Guide", href: "/guides/clan-structure-somalia-guide" },
  ],
  benadiri: [
    { label: "Clan Minority Groups", href: "/asylum-profiles/clan-minority-groups" },
    { label: "Mogadishu Return", href: "/regions/mogadishu-return" },
  ],
  fgm: [
    { label: "FGM & GBV Profile", href: "/asylum-profiles/fgm-gender-based-violence" },
    { label: "FGM Asylum Case Type", href: "/case-types/fgm-somalia-asylum" },
  ],
  "euaa-country-guidance": [
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
  ],
  cpin: [
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    { label: "Upper Tribunal Case Type", href: "/case-types/upper-tribunal-somalia" },
  ],
};

export function getGlossaryTermLinks(slug: string): RelatedLink[] {
  return GLOSSARY_TERM_LINKS[slug] ?? [];
}
