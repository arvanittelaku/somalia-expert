export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.somaliaexpert.com";
export const SITE_NAME = "SomaliaExpert";
export const SITE_EMAIL = "info@somaliaexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/SomaliaExpertWitness";

export const COLORS = {
  primary: "#0B2D4E",
  accent: "#C8922A",
  background: "#FFFFFF",
  sectionAlt: "#F4F8FB",
  border: "#C8D8E4",
  heading: "#0B2D4E",
  body: "#374151",
} as const;
