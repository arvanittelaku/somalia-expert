import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Somalia Asylum Solicitor Guides | Expert Evidence Resources",
  description:
    "Solicitor guides on MOJ framework, clan structure, Al-Shabaab, FGM, Somaliland/Puntland, and instructing Somalia expert witnesses for UK tribunals.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Solicitor Guides: Somalia Expert Evidence"
        subtitle="Practical guides for UK immigration solicitors instructing Somalia country expert witnesses."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          These guides cover MOJ country guidance, clan structure analysis, Al-Shabaab risk assessment, FGM claims,
          regional analysis for Somaliland and Puntland, and the instruction process for Legal Aid and privately funded
          cases.
        </p>
        <CardGrid
          items={guides.map((g) => ({
            title: g.h1,
            description: g.metaDescription.slice(0, 120) + "...",
            href: `/guides/${g.slug}`,
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
