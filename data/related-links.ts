export type RelatedLink = { label: string; href: string };

const INSTRUCTION_LINKS: RelatedLink[] = [
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Contact Us", href: "/contact" },
];

function mergeLinks(...groups: RelatedLink[][]): RelatedLink[] {
  const seen = new Set<string>();
  const out: RelatedLink[] = [];
  for (const group of groups) {
    for (const link of group) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      out.push(link);
    }
  }
  return out;
}

/** Appendix D: Profile Minimum Links Matrix + Rule A (how-to-instruct, contact) */
export function getProfileRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "clan-minority-groups": [
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
      { label: "Clan Minority Asylum", href: "/case-types/clan-minority-asylum" },
      { label: "Clan Structure Guide", href: "/guides/clan-structure-somalia-guide" },
      { label: "Mogadishu Return", href: "/regions/mogadishu-return" },
      { label: "Benadiri (Glossary)", href: "/glossary#benadiri" },
    ],
    "al-shabaab-targeting": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "Article 15(c) Claims", href: "/case-types/article-15c-south-central" },
      { label: "Al-Shabaab Asylum Guide", href: "/guides/al-shabaab-asylum-guide" },
      { label: "South/Central Somalia", href: "/regions/south-central-somalia" },
      { label: "Al-Shabaab (Glossary)", href: "/glossary#al-shabaab" },
    ],
    "fgm-gender-based-violence": [
      { label: "FGM Asylum Case Type", href: "/case-types/fgm-somalia-asylum" },
      { label: "FGM Expert Guide", href: "/guides/fgm-somalia-guide" },
      { label: "AMM [2011] (Glossary)", href: "/glossary#amm-and-others-2011" },
      { label: "Women Discriminatory Practices", href: "/asylum-profiles/women-discriminatory-practices" },
    ],
    "failed-asylum-seekers-return": [
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
      { label: "Deportation & Removal", href: "/case-types/deportation-removal-somalia" },
      { label: "Mogadishu Return", href: "/regions/mogadishu-return" },
      { label: "Diaspora Without Clan Support", href: "/asylum-profiles/diaspora-without-clan-support" },
    ],
    "diaspora-without-clan-support": [
      { label: "MOJ Framework Guide", href: "/guides/moj-framework-guide" },
      { label: "Mogadishu Return", href: "/regions/mogadishu-return" },
      { label: "Failed Asylum Seekers", href: "/asylum-profiles/failed-asylum-seekers-return" },
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
    ],
    "former-government-officials": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "Al-Shabaab Asylum Guide", href: "/guides/al-shabaab-asylum-guide" },
      { label: "Al-Shabaab Targeting", href: "/asylum-profiles/al-shabaab-targeting" },
      { label: "Mogadishu Return", href: "/regions/mogadishu-return" },
    ],
    "women-discriminatory-practices": [
      { label: "FGM & GBV Profile", href: "/asylum-profiles/fgm-gender-based-violence" },
      { label: "FGM Expert Guide", href: "/guides/fgm-somalia-guide" },
      { label: "FGM Asylum Case Type", href: "/case-types/fgm-somalia-asylum" },
      { label: "FGM (Glossary)", href: "/glossary#fgm" },
    ],
    "forced-recruitment-conscription": [
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
      { label: "Article 15(c) Claims", href: "/case-types/article-15c-south-central" },
      { label: "Al-Shabaab Asylum Guide", href: "/guides/al-shabaab-asylum-guide" },
      { label: "Al-Shabaab Targeting", href: "/asylum-profiles/al-shabaab-targeting" },
      { label: "South/Central Somalia", href: "/regions/south-central-somalia" },
    ],
  };

  return mergeLinks(map[slug] ?? [{ label: "MOJ Country Guidance", href: "/moj-country-guidance" }], INSTRUCTION_LINKS);
}

/** Rule B: Guide → profile, MOJ/CPIN, instruction, contact */
export function getGuideRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "moj-framework-guide": [
      { label: "Failed Asylum Seekers", href: "/asylum-profiles/failed-asylum-seekers-return" },
      { label: "Diaspora Without Clan Support", href: "/asylum-profiles/diaspora-without-clan-support" },
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
      { label: "Mogadishu Return", href: "/regions/mogadishu-return" },
    ],
    "clan-structure-somalia-guide": [
      { label: "Clan Minority Groups", href: "/asylum-profiles/clan-minority-groups" },
      { label: "Clan Minority Asylum", href: "/case-types/clan-minority-asylum" },
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
      { label: "Clan (Glossary)", href: "/glossary#clan" },
    ],
    "al-shabaab-asylum-guide": [
      { label: "Al-Shabaab Targeting", href: "/asylum-profiles/al-shabaab-targeting" },
      { label: "Forced Recruitment", href: "/asylum-profiles/forced-recruitment-conscription" },
      { label: "Article 15(c) Claims", href: "/case-types/article-15c-south-central" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "somaliland-puntland-guide": [
      { label: "Somaliland", href: "/regions/somaliland" },
      { label: "Puntland", href: "/regions/puntland" },
      { label: "Somaliland Asylum", href: "/case-types/somaliland-asylum" },
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
    ],
    "fgm-somalia-guide": [
      { label: "FGM & GBV Profile", href: "/asylum-profiles/fgm-gender-based-violence" },
      { label: "Women Discriminatory Practices", href: "/asylum-profiles/women-discriminatory-practices" },
      { label: "FGM Asylum Case Type", href: "/case-types/fgm-somalia-asylum" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "instructing-somalia-expert": [
      { label: "Clan Minority Groups", href: "/asylum-profiles/clan-minority-groups" },
      { label: "Al-Shabaab Targeting", href: "/asylum-profiles/al-shabaab-targeting" },
      { label: "FGM & GBV", href: "/asylum-profiles/fgm-gender-based-violence" },
      { label: "Failed Asylum Seekers", href: "/asylum-profiles/failed-asylum-seekers-return" },
      { label: "Qualifications", href: "/qualifications" },
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
    ],
  };

  return mergeLinks(map[slug] ?? [{ label: "MOJ Country Guidance", href: "/moj-country-guidance" }], INSTRUCTION_LINKS);
}

export function getRegionRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "mogadishu-return": [
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
      { label: "MOJ Framework Guide", href: "/guides/moj-framework-guide" },
      { label: "Failed Asylum Seekers", href: "/asylum-profiles/failed-asylum-seekers-return" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    somaliland: [
      { label: "Somaliland Asylum", href: "/case-types/somaliland-asylum" },
      { label: "Somaliland & Puntland Guide", href: "/guides/somaliland-puntland-guide" },
      { label: "Clan Minority Groups", href: "/asylum-profiles/clan-minority-groups" },
      { label: "Puntland", href: "/regions/puntland" },
    ],
    puntland: [
      { label: "Somaliland & Puntland Guide", href: "/guides/somaliland-puntland-guide" },
      { label: "Somaliland", href: "/regions/somaliland" },
      { label: "Al-Shabaab Targeting", href: "/asylum-profiles/al-shabaab-targeting" },
      { label: "South/Central Somalia", href: "/regions/south-central-somalia" },
    ],
    "south-central-somalia": [
      { label: "Article 15(c) Claims", href: "/case-types/article-15c-south-central" },
      { label: "Al-Shabaab Asylum Guide", href: "/guides/al-shabaab-asylum-guide" },
      { label: "Forced Recruitment", href: "/asylum-profiles/forced-recruitment-conscription" },
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
    ],
  };

  return mergeLinks(map[slug] ?? [{ label: "All Regions", href: "/regions" }], INSTRUCTION_LINKS);
}

export function getCaseTypeRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "ftt-asylum-appeal-somalia": [
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
      { label: "All Asylum Profiles", href: "/asylum-profiles" },
      { label: "Qualifications", href: "/qualifications" },
    ],
    "upper-tribunal-somalia": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "CPIN Challenge Service", href: "/services#cpin-challenge" },
      { label: "Al-Shabaab Targeting", href: "/asylum-profiles/al-shabaab-targeting" },
    ],
    "article-15c-south-central": [
      { label: "Al-Shabaab Targeting", href: "/asylum-profiles/al-shabaab-targeting" },
      { label: "Forced Recruitment", href: "/asylum-profiles/forced-recruitment-conscription" },
      { label: "South/Central Somalia", href: "/regions/south-central-somalia" },
      { label: "Article 15(c) (Glossary)", href: "/glossary#article-15c" },
    ],
    "deportation-removal-somalia": [
      { label: "Failed Asylum Seekers", href: "/asylum-profiles/failed-asylum-seekers-return" },
      { label: "Mogadishu Return", href: "/regions/mogadishu-return" },
      { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
    ],
    "fresh-claims-somalia": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "OA [2022] (Glossary)", href: "/glossary#oa-and-others-2022" },
      { label: "Al-Shabaab Targeting", href: "/asylum-profiles/al-shabaab-targeting" },
    ],
    "fgm-somalia-asylum": [
      { label: "FGM & GBV Profile", href: "/asylum-profiles/fgm-gender-based-violence" },
      { label: "Women Discriminatory Practices", href: "/asylum-profiles/women-discriminatory-practices" },
      { label: "FGM Expert Guide", href: "/guides/fgm-somalia-guide" },
    ],
    "somaliland-asylum": [
      { label: "Somaliland Region", href: "/regions/somaliland" },
      { label: "Somaliland & Puntland Guide", href: "/guides/somaliland-puntland-guide" },
      { label: "Clan Minority Groups", href: "/asylum-profiles/clan-minority-groups" },
    ],
    "clan-minority-asylum": [
      { label: "Clan Minority Groups", href: "/asylum-profiles/clan-minority-groups" },
      { label: "Clan Structure Guide", href: "/guides/clan-structure-somalia-guide" },
      { label: "Mogadishu Return", href: "/regions/mogadishu-return" },
    ],
  };

  return mergeLinks(map[slug] ?? [{ label: "MOJ Country Guidance", href: "/moj-country-guidance" }], INSTRUCTION_LINKS);
}

/** MOJ pillar must link to all hub spokes (Section 3 / Appendix C) */
export function getMojRelatedLinks(): RelatedLink[] {
  return [
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    { label: "All Asylum Profiles", href: "/asylum-profiles" },
    { label: "All Regions", href: "/regions" },
    { label: "All Guides", href: "/guides" },
    { label: "How to Instruct", href: "/how-to-instruct" },
    { label: "Contact Us", href: "/contact" },
  ];
}
