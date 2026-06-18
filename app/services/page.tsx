import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { servicesPageGraph } from "@/lib/schema";
import { services } from "@/data/services";
import {
  LEGAL_AID_ENGLAND_WALES_SUMMARY,
  LEGAL_AID_SCOTLAND_SUMMARY,
  SITE_SCOPE,
} from "@/lib/constants";

export const metadata = createMetadata({
  title: "Somalia Expert Witness Services | Asylum & Immigration Tribunals",
  description:
    "Somalia expert witness services: country condition reports, clan analysis, Al-Shabaab risk assessment, FGM reports, MOJ framework, CPIN challenge, and oral evidence.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={servicesPageGraph(
          services.map((s) => ({ id: s.id, name: s.title, description: s.description }))
        )}
      />
      <PageShell
        title="Somalia Expert Witness Services"
        subtitle="CPR Part 35 and Immigration Tribunal Practice Direction compliant reports for all major Somali asylum profiles."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          SomaliaExpert provides eight specialist expert witness services for UK immigration solicitors, law firms, and
          Legal Aid practitioners in England, Wales, Scotland, and Northern Ireland. All reports are prepared by
          qualified Somalia country experts with current CPIN knowledge, MOJ framework expertise, and field research
          experience in Somalia, Somaliland, and Puntland.
        </p>
        <p className="mb-8 text-sm text-[#374151] leading-relaxed">{SITE_SCOPE}</p>
        <CardGrid
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
          }))}
        />
        <h2 className="mt-12 text-xl font-bold text-[#0B2D4E]">Legal Aid: Scotland (SLAB) and England/Wales (LAA)</h2>
        <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">{LEGAL_AID_SCOTLAND_SUMMARY}</p>
        <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">{LEGAL_AID_ENGLAND_WALES_SUMMARY}</p>
        <p className="mt-8 text-[#374151]">
          Questions about instructing an expert? See{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
            how to instruct
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-[#C8922A] hover:underline">
            contact us
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
