import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Somalia Expert Witness Qualifications UK | Credentials & Standards",
  description:
    "What qualifications should a Somalia expert witness hold? Somali language expertise, field research, clan structure knowledge, UNHCR experience, and tribunal acceptance.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Somalia Expert Witness Qualifications UK" breadcrumbs={crumbs}>
        <h2 className="text-xl font-bold text-[#0B2D4E]">What Makes a Qualified Somalia Expert</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          A qualified Somalia expert witness holds academic credentials (PhD, MA, or equivalent research background) in
          African Studies, Political Science, Anthropology, International Relations, or a related discipline. Field
          research experience in Somalia, Somaliland, and Puntland is essential, not optional.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Language expertise in Somali, Maay, and af-Tunni demonstrates the ability to assess conditions beyond
          English-language sources. Current knowledge of country conditions, including MOJ and OA country guidance,
          July 2025 CPINs, and EUAA October 2025 guidance, is required. Prior tribunal acceptance in Somalia cases
          demonstrates evidential reliability.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">Key Qualifications for Somalia Experts</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Somali language expertise (Somali, Maay, af-Tunni)</li>
          <li>Field research experience in Somalia, Somaliland, and Puntland</li>
          <li>Clan structure and minority group knowledge</li>
          <li>UNHCR Somalia programme experience</li>
          <li>Prior tribunal acceptance in Somalia asylum cases</li>
          <li>Current CPIN and country guidance knowledge (MOJ, OA, AMM)</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">
          UK Tribunals and Legal Aid (Scotland)
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Somalia expert evidence is used in UK Immigration and Asylum Chamber proceedings across England, Wales,
          Scotland, and Northern Ireland. Scottish solicitors commonly instruct experts for hearings listed in Glasgow
          and Edinburgh under Scottish Legal Aid Board (SLAB) civil legal aid. Prior SLAB approval of expert fees is
          required before chargeable work begins.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">
          Immigration Tribunal Practice Direction: Expert Duties
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          An expert&apos;s paramount duty is to the tribunal: to assist it in reaching a decision by providing an
          objective, unbiased opinion on matters within their expertise, not to advocate for either the appellant or
          the Home Office. Expert evidence should be the independent product of the expert, uninfluenced by the
          pressures of litigation.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Reports must address matters within the expert&apos;s expertise, cite verifiable sources, and distinguish
          fact from opinion. The expert must not express views on the credibility of the appellant or the ultimate
          legal conclusion on refugee status.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">Red Flags</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Expert without current knowledge of Somalia</li>
          <li>Reports that simply reproduce CPIN without independent analysis</li>
          <li>No field research or in-country experience</li>
          <li>Cannot distinguish between regional conditions (Mogadishu, Somaliland, Puntland, south/central)</li>
          <li>No prior tribunal acceptance in Somalia cases</li>
        </ul>
      </PageShell>
    </>
  );
}
