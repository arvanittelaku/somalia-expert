export type Service = {
  id: string;
  title: string;
  navLabel: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "country-condition-reports",
    title: "Country Condition Reports (Mogadishu and Regional)",
    navLabel: "Country Condition Reports",
    description:
      "Comprehensive country condition reports covering Mogadishu, Somaliland, Puntland, and south/central Somalia. Updated with July 2025 CPINs, MOJ country guidance, and 2025-2026 security developments including Al-Shabaab's renewed offensive.",
  },
  {
    id: "clan-analysis",
    title: "Clan Analysis Reports",
    navLabel: "Clan Analysis",
    description:
      "Independent assessment of claimed clan membership, sub-clan affiliation, dialect, geographic origin, and protection availability. Essential for MOJ diaspora test claims and minority clan vulnerability analysis.",
  },
  {
    id: "al-shabaab-risk",
    title: "Al-Shabaab Risk Assessment",
    navLabel: "Al-Shabaab Risk Assessment",
    description:
      "Case-specific analysis of Al-Shabaab targeting risk for government officials, community leaders, tax refusers, and those who have escaped forced recruitment. Incorporates July 2025 Mogadishu security CPIN and 2026 territorial developments.",
  },
  {
    id: "fgm-reports",
    title: "FGM Expert Reports",
    navLabel: "FGM Expert Reports",
    description:
      "Expert evidence on FGM prevalence, daughter-at-risk claims, and gender-based violence in Somalia. Grounded in AMM and Others [2011] country guidance and current regional enforcement patterns.",
  },
  {
    id: "internal-relocation",
    title: "Internal Relocation Analysis",
    navLabel: "Internal Relocation",
    description:
      "Assessment of internal relocation viability to Mogadishu, Somaliland, or Puntland. Addresses MOJ framework, clan connection requirements, Article 15(c) analysis for south/central Somalia, and Al-Shabaab territorial control.",
  },
  {
    id: "moj-framework",
    title: "MOJ Framework Application",
    navLabel: "MOJ Framework",
    description:
      "Specialist reports applying MOJ and Others (Return to Mogadishu) Somalia CG [2014] UKUT 004442 to individual appellant profiles, including diaspora test, clan support analysis, and 2025-2026 security updates.",
  },
  {
    id: "cpin-challenge",
    title: "CPIN Challenge Reports",
    navLabel: "CPIN Challenge Reports",
    description:
      "Independent expert analysis challenging Home Office CPIN positions on Somalia. Cites field research, ACLED data, UN reports, and EUAA October 2025 country guidance beyond generic CPIN conclusions.",
  },
  {
    id: "oral-evidence",
    title: "Oral Evidence at Tribunal",
    navLabel: "Oral Evidence",
    description:
      "Qualified Somalia experts available for oral evidence at First-tier Tribunal and Upper Tribunal hearings. CPR Part 35 compliant with Immigration Tribunal Practice Direction paragraph 10 requirements.",
  },
];
