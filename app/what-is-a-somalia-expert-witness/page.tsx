import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is a Somalia Expert Witness? | UK Immigration Tribunal Role",
  description:
    "A Somalia expert witness provides independent country condition reports for UK immigration tribunals: clan structure, Al-Shabaab, MOJ framework, FGM, and Mogadishu return analysis.",
  path: "/what-is-a-somalia-expert-witness",
});

export default function WhatIsSomaliaExpertWitnessPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "What Is a Somalia Expert Witness?" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is a Somalia Expert Witness?"
        subtitle="The role, duties, and value of independent country expert evidence in UK Somali asylum appeals."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          A Somalia expert witness is an independent specialist who provides objective country condition reports for UK
          immigration tribunals. Unlike advocates for either party, the expert&apos;s paramount duty is to the tribunal:
          to assist it in reaching a decision by providing unbiased opinion on matters within their expertise.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">What Somalia Experts Assess</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Clan structure, membership plausibility, and minority group vulnerability</li>
          <li>Al-Shabaab targeting risk and territorial control in 2025-2026</li>
          <li>MOJ country guidance framework and diaspora/remittances test</li>
          <li>FGM prevalence, daughter-at-risk claims, and gender-based persecution</li>
          <li>Mogadishu return viability and Article 3 destitution risk</li>
          <li>Regional conditions in Somaliland, Puntland, and south/central Somalia</li>
          <li>Article 15(c) indiscriminate violence analysis</li>
          <li>Internal relocation viability and state protection availability</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">When to Instruct a Somalia Expert</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Instruct a Somalia expert witness when the Home Office refusal relies on generic CPIN positions that do not
          address the appellant&apos;s specific clan profile, region of origin, or personal risk factors. Expert evidence
          is particularly valuable in MOJ diaspora test cases, clan minority claims, Al-Shabaab targeting, FGM claims,
          and Article 15(c) south/central Somalia appeals.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">Report Standards</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Somalia expert reports comply with CPR Part 35 and Immigration Tribunal Practice Direction paragraph 10.
          Reports cite verifiable sources including July 2025 CPINs, EUAA October 2025 country guidance, MOJ and OA
          country guidance decisions, UN reports, and field research. Experts distinguish fact from opinion and do not
          express views on the appellant&apos;s credibility or ultimate refugee status.
        </p>

        <p className="mt-8">
          <Link href="/qualifications" className="font-semibold text-[#C8922A] hover:underline">
            View expert qualifications
          </Link>
          {" · "}
          <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
            How to instruct
          </Link>
          {" · "}
          <Link href="/contact" className="font-semibold text-[#C8922A] hover:underline">
            Contact us
          </Link>
        </p>
      </PageShell>
    </>
  );
}
