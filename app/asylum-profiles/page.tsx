import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { asylumProfiles } from "@/data/asylum-profiles";

export const metadata = createMetadata({
  title: "Somali Asylum Profiles | Expert Witness Evidence UK",
  description:
    "All major Somali asylum profiles covered by qualified expert witnesses: clan minorities, Al-Shabaab, FGM, failed asylum seekers, diaspora, former officials, and women.",
  path: "/asylum-profiles",
});

export default function AsylumProfilesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Asylum Profiles" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Somali Asylum Profiles"
        subtitle="Dedicated expert witness evidence for each major Somali asylum profile in UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Somalia is one of the most legally complex asylum jurisdictions in the UK system. Each profile below links to
          a dedicated page with country guidance analysis, CPIN references, and profile-specific expert evidence
          guidance for solicitors and Legal Aid practitioners.
        </p>
        <CardGrid
          items={asylumProfiles.map((p) => ({
            title: p.h1,
            description: p.content[0].slice(0, 150) + "...",
            href: `/asylum-profiles/${p.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          For MOJ country guidance analysis, see our{" "}
          <Link href="/moj-country-guidance" className="font-semibold text-[#C8922A] hover:underline">
            MOJ country guidance pillar page
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
