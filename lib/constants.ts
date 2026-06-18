export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.somaliaexpert.com";
export const SITE_NAME = "SomaliaExpert";
export const SITE_EMAIL = "cases@somaliaexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/SomaliaExpertWitness";

/** UK-only service scope — use in page copy and footer, not promotional banners. */
export const SITE_SCOPE =
  "SomaliaExpert is a UK-only service for immigration solicitors, law firms, and Legal Aid practitioners instructing Somalia country experts for First-tier Tribunal and Upper Tribunal proceedings in England, Wales, Scotland, and Northern Ireland. This service is not available outside the United Kingdom.";

/** Scottish Legal Aid Board — primary legal aid route for Scotland-based instructions. */
export const LEGAL_AID_SCOTLAND_SUMMARY =
  "In Scotland, legal aid for asylum and immigration tribunal work is administered by the Scottish Legal Aid Board (SLAB). Scottish solicitors must obtain SLAB prior approval of reasonable and necessary expert witness fees before country expert work begins. SLAB assesses disbursements under the Civil Legal Aid (Scotland) Regulations 2011 and related guidance, separately from the Legal Aid Agency (LAA) in England and Wales.";

/** Legal Aid Agency — England and Wales route (included for completeness across the UK). */
export const LEGAL_AID_ENGLAND_WALES_SUMMARY =
  "In England and Wales, Legal Aid Agency (LAA) prior authority is required for most expert witness disbursements in asylum proceedings, unless a valid exception applies. Solicitors should confirm funding before issuing a letter of instruction.";

export const COLORS = {
  primary: "#0B2D4E",
  accent: "#C8922A",
  background: "#FFFFFF",
  sectionAlt: "#F4F8FB",
  border: "#C8D8E4",
  heading: "#0B2D4E",
  body: "#374151",
} as const;
