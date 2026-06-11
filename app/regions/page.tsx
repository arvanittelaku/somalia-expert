import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { regions } from "@/data/regions";

export const metadata = createMetadata({
  title: "Somalia Regions Expert Witness UK | Mogadishu, Somaliland, Puntland",
  description:
    "Regional expert witness analysis for Somalia asylum claims. Mogadishu MOJ framework, Somaliland, Puntland, and south/central Article 15(c) analysis for UK tribunals.",
  path: "/regions",
});

export default function RegionsHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Regions" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Somalia Regional Expert Witness Analysis"
        subtitle="Somalia's legal framework differs radically by region. Dedicated expert analysis for each jurisdiction."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          UK asylum tribunals assess Somalia claims differently depending on the appellant&apos;s region of origin.
          Mogadishu is governed by the MOJ country guidance framework. South and central Somalia outside Mogadishu
          falls under Article 15(c) indiscriminate violence analysis. Somaliland and Puntland require separate regional
          analysis with distinct security profiles and clan dynamics.
        </p>
        <CardGrid
          items={regions.map((r) => ({
            title: r.h1.replace(/ \| .+$/, ""),
            description: r.metaDescription,
            href: `/regions/${r.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          For the MOJ framework governing Mogadishu return, see our{" "}
          <Link href="/moj-country-guidance" className="font-semibold text-[#C8922A] hover:underline">
            MOJ country guidance pillar page
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
