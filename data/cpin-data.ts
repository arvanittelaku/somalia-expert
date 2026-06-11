export type CpinEntry = {
  title: string;
  date: string;
  keyIssue: string;
};

export const currentCpins: CpinEntry[] = [
  {
    title: "Mogadishu: Al-Shabaab & Security",
    date: "July 2025",
    keyIssue: "State willing but unable to protect",
  },
  {
    title: "Humanitarian Situation in Mogadishu",
    date: "July 2025",
    keyIssue: "Overcrowding, IDPs, access to services",
  },
  {
    title: "Women Fearing GBV",
    date: "Updated",
    keyIssue: "FGM, forced marriage, domestic violence",
  },
  {
    title: "EUAA Country Guidance",
    date: "October 2025",
    keyIssue: "Actors of protection chapter updated",
  },
];

export const countryGuidanceCases = [
  {
    citation: "MOJ and Others [2014] UKUT 00442",
    summary: "Leading country guidance for Mogadishu return. Diaspora/clan support test.",
  },
  {
    citation: "OA and Others [2022] UKUT 00033",
    summary: "Updated country guidance on return to Somalia.",
  },
  {
    citation: "AMM and Others [2011] UKUT 445",
    summary: "FGM as persecution in Somalia. Humanitarian crisis and returnees.",
  },
];

export const mojFrameworkTable = [
  {
    issue: "Mogadishu return: ordinary civilian",
    mojFinding: "Generally no Article 3 risk for those with no particular profile",
    update: "Al-Shabaab offensive renewal undermines this in some areas",
  },
  {
    issue: "Clan support in Mogadishu",
    mojFinding: "Essential for viable return: diaspora financial support needed if no clan present",
    update: "Continues to apply",
  },
  {
    issue: "Al-Shabaab forced recruitment",
    mojFinding: "No real risk for ordinary Mogadishu civilians",
    update: "Disputed: recruitment pressure outside Mogadishu high",
  },
  {
    issue: "State protection",
    mojFinding: "Willing but not able to protect",
    update: "ATMIS withdrawal 2025 creates further capacity gap",
  },
  {
    issue: "Internal relocation to Mogadishu",
    mojFinding: "Possible for some profiles from other regions",
    update: "Less viable given renewed Al-Shabaab activity",
  },
  {
    issue: "Somaliland",
    mojFinding: "Safer than South/Central: separate analysis",
    update: "Ongoing",
  },
];
