export const CASE_PROFILES = [
  "Clan Minority",
  "Al-Shabaab",
  "FGM/GBV",
  "Failed Asylum Seeker",
  "Diaspora/No Clan Support",
  "Former Official",
  "Women/Discriminatory Practices",
  "Other",
] as const;

export const REGIONS = [
  "Mogadishu",
  "Somaliland",
  "Puntland",
  "South/Central",
  "Multiple / Not Sure",
] as const;

export const FUNDING_OPTIONS = ["Legal Aid", "Private", "Unsure"] as const;

export const PROCEEDINGS = [
  "First-tier Tribunal (FTT)",
  "Upper Tribunal (UT)",
  "Fresh Claim",
  "Deportation/Removal",
  "Judicial Review",
  "Pre-hearing / Not Yet Listed",
] as const;

export const URGENCY_OPTIONS = [
  "Standard (7+ days)",
  "Urgent (3-7 days)",
  "Emergency (within 72 hours)",
] as const;
