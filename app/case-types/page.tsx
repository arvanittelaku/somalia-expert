import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Somalia Asylum Case Types | Expert Witness UK",
  description:
    "Somalia expert witness evidence for FTT asylum appeals, Upper Tribunal, Article 15(c), FGM, Somaliland, clan minority, deportation, and fresh claims.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Somalia Asylum Case Types"
        subtitle="Expert witness evidence for all major UK immigration tribunal proceedings involving Somali nationals."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          SomaliaExpert provides qualified country expert witnesses for First-tier Tribunal appeals, Upper Tribunal
          proceedings, Article 15(c) south/central Somalia claims, FGM asylum, Somaliland analysis, clan minority
          claims, deportation and removal, and fresh claims with updated country guidance.
        </p>
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.content[0].slice(0, 140) + "...",
            href: `/case-types/${c.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          See also our{" "}
          <Link href="/asylum-profiles" className="font-semibold text-[#C8922A] hover:underline">
            asylum profiles hub
          </Link>{" "}
          and{" "}
          <Link href="/regions" className="font-semibold text-[#C8922A] hover:underline">
            regional analysis pages
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
