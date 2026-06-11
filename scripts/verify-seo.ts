#!/usr/bin/env npx tsx
/**
 * Verifies SEO architecture: sitemap inventory, slug redirects, internal linking matrix.
 * Run: npm run seo:verify
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { SEO_SLUG_REDIRECTS } from "../lib/seo/slug-redirects";
import { SITE_URL } from "../lib/constants";
import { asylumProfiles } from "../data/asylum-profiles";
import {
  getProfileRelatedLinks,
  getGuideRelatedLinks,
  getRegionRelatedLinks,
  getCaseTypeRelatedLinks,
} from "../data/related-links";

const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");
const ROBOTS_PATH = join(process.cwd(), "public", "robots.txt");

/** Appendix D minimum href requirements per profile slug */
const PROFILE_MATRIX: Record<string, string[]> = {
  "clan-minority-groups": [
    "/moj-country-guidance",
    "/case-types/clan-minority-asylum",
    "/guides/clan-structure-somalia-guide",
    "/regions/mogadishu-return",
  ],
  "al-shabaab-targeting": [
    "/cpin-country-guidance",
    "/case-types/article-15c-south-central",
    "/guides/al-shabaab-asylum-guide",
    "/regions/south-central-somalia",
  ],
  "fgm-gender-based-violence": ["/case-types/fgm-somalia-asylum", "/guides/fgm-somalia-guide"],
  "failed-asylum-seekers-return": [
    "/moj-country-guidance",
    "/case-types/deportation-removal-somalia",
    "/regions/mogadishu-return",
  ],
  "diaspora-without-clan-support": ["/guides/moj-framework-guide", "/regions/mogadishu-return"],
  "former-government-officials": ["/cpin-country-guidance", "/guides/al-shabaab-asylum-guide", "/regions/mogadishu-return"],
  "women-discriminatory-practices": [
    "/asylum-profiles/fgm-gender-based-violence",
    "/guides/fgm-somalia-guide",
    "/case-types/fgm-somalia-asylum",
  ],
  "forced-recruitment-conscription": [
    "/moj-country-guidance",
    "/case-types/article-15c-south-central",
    "/guides/al-shabaab-asylum-guide",
    "/regions/south-central-somalia",
  ],
};

const REQUIRED_BRIEF_REDIRECTS: Record<string, string> = {
  "/asylum-profiles/failed-asylum-seekers": "/asylum-profiles/failed-asylum-seekers-return",
  "/asylum-profiles/diaspora-no-clan": "/asylum-profiles/diaspora-without-clan-support",
  "/asylum-profiles/forced-recruitment": "/asylum-profiles/forced-recruitment-conscription",
  "/asylum-profiles/fgm-gbv": "/asylum-profiles/fgm-gender-based-violence",
  "/guides/clan-structure-guide": "/guides/clan-structure-somalia-guide",
  "/case-types/fgm-somalia": "/case-types/fgm-somalia-asylum",
};

function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs.sort();
}

function hrefs(links: { href: string }[]): string[] {
  return links.map((l) => l.href.split("#")[0]);
}

function verifyInternalLinking(): string[] {
  const errors: string[] = [];

  for (const profile of asylumProfiles) {
    const links = hrefs(getProfileRelatedLinks(profile.slug));
    const required = PROFILE_MATRIX[profile.slug] ?? [];
    for (const path of required) {
      if (!links.includes(path)) {
        errors.push(`Profile ${profile.slug} missing required link: ${path}`);
      }
    }
    if (!links.includes("/how-to-instruct")) {
      errors.push(`Profile ${profile.slug} missing /how-to-instruct`);
    }
    if (!links.includes("/contact")) {
      errors.push(`Profile ${profile.slug} missing /contact`);
    }
  }

  for (const slug of Object.keys(PROFILE_MATRIX)) {
    if (!asylumProfiles.some((p) => p.slug === slug)) {
      errors.push(`PROFILE_MATRIX references unknown profile slug: ${slug}`);
    }
  }

  // Smoke-test other link helpers resolve
  getGuideRelatedLinks("moj-framework-guide");
  getRegionRelatedLinks("mogadishu-return");
  getCaseTypeRelatedLinks("clan-minority-asylum");

  return errors;
}

function verifySlugRedirects(): string[] {
  const errors: string[] = [];
  for (const [from, to] of Object.entries(REQUIRED_BRIEF_REDIRECTS)) {
    if (SEO_SLUG_REDIRECTS[from] !== to) {
      errors.push(`Missing or incorrect redirect: ${from} → ${to}`);
    }
  }
  return errors;
}

function main() {
  let failed = false;

  if (!existsSync(SITEMAP_PATH)) {
    console.error(`Missing ${SITEMAP_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }
  if (!existsSync(ROBOTS_PATH)) {
    console.error(`Missing ${ROBOTS_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expected = [...inventory.allUrls].sort();
  const actual = extractLocs(readFileSync(SITEMAP_PATH, "utf-8"));

  const missing = expected.filter((u) => !actual.includes(u));
  const extra = actual.filter((u) => !expected.includes(u));

  if (missing.length > 0) {
    failed = true;
    console.error(`Sitemap missing ${missing.length} URL(s):`);
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    failed = true;
    console.error(`Sitemap has ${extra.length} unexpected URL(s):`);
    extra.forEach((u) => console.error(`  + ${u}`));
  }

  const robots = readFileSync(ROBOTS_PATH, "utf-8");
  if (!robots.includes(`Sitemap: ${inventory.siteUrl}/sitemap.xml`)) {
    failed = true;
    console.error(`robots.txt missing correct Sitemap line for ${inventory.siteUrl}`);
  }
  for (const path of ["/thank-you", "/api/"]) {
    if (!robots.includes(`Disallow: ${path}`)) {
      failed = true;
      console.error(`robots.txt missing Disallow: ${path}`);
    }
  }

  const linkErrors = verifyInternalLinking();
  if (linkErrors.length > 0) {
    failed = true;
    console.error("Internal linking matrix errors:");
    linkErrors.forEach((e) => console.error(`  - ${e}`));
  }

  const redirectErrors = verifySlugRedirects();
  if (redirectErrors.length > 0) {
    failed = true;
    console.error("Slug redirect errors:");
    redirectErrors.forEach((e) => console.error(`  - ${e}`));
  }

  if (failed) {
    console.error("\nSEO verification failed.");
    process.exit(1);
  }

  console.log(
    `SEO verify OK: ${actual.length} sitemap URLs, internal linking matrix, and slug redirects.`
  );
}

main();
