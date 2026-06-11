import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { currentCpins, countryGuidanceCases } from "@/data/cpin-data";
import { guides } from "@/data/guides";
import { asylumProfiles } from "@/data/asylum-profiles";
import { HubLinkGrid } from "@/components/ui/HubLinkGrid";
import { JsonLd } from "@/components/ui/JsonLd";

const cpinFaqs = [
  {
    question: "What is a CPIN in UK asylum law?",
    answer:
      "A Country Policy Information Note (CPIN) is a Home Office document setting out the UK government's position on country conditions for asylum decision-making. CPINs are not binding on immigration tribunals but carry significant weight. Somalia has multiple updated CPINs in 2025 covering Mogadishu security, humanitarian conditions, and gender-based violence.",
  },
  {
    question: "Which Somalia CPINs are current in 2025-2026?",
    answer:
      "Key current CPINs include Mogadishu: Al-Shabaab and Security Situation (July 2025), Humanitarian Situation in Mogadishu (July 2025), Women Fearing GBV (updated), and EUAA Country Guidance Somalia (October 2025, actors of protection chapter updated).",
  },
  {
    question: "Can expert evidence challenge Home Office CPIN findings on Somalia?",
    answer:
      "Yes. Expert witnesses provide independent analysis beyond CPIN reproduction. Where the CPIN does not reflect the appellant's profile, the expert may challenge findings with field research, UN reports, ACLED data, and profile-specific evidence on clan vulnerability, Al-Shabaab risk, and MOJ framework application.",
  },
];

export const metadata = createMetadata({
  title: "Somalia CPIN & Country Guidance 2025-2026 | UK Asylum Solicitor Guide",
  description:
    "Current Home Office CPINs and country guidance on Somalia for UK asylum practitioners: MOJ [2014], OA [2022], AMM [2011], Al-Shabaab, Mogadishu, and EUAA October 2025.",
  path: "/cpin-country-guidance",
});

export default function CpinCountryGuidancePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "CPIN & Country Guidance" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={cpinFaqs} />
      <JsonLd
        data={articleSchema({
          title: "Somalia CPIN & Country Guidance 2025-2026: A Guide for UK Asylum Solicitors",
          description:
            "Current Home Office CPINs and country guidance on Somalia for UK asylum practitioners.",
          path: "/cpin-country-guidance",
        })}
      />
      <PageShell
        title="Somalia CPIN & Country Guidance 2025-2026: A Guide for UK Asylum Solicitors"
        subtitle="Current Home Office CPINs, country guidance cases, and the expert witness role beyond generic country policy."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          Somalia is one of the most legally complex asylum jurisdictions in the UK system. Multiple layers of country
          guidance (MOJ [2014], OA [2022], AMM [2011]), updated CPINs, and rapidly evolving security conditions make
          current expert knowledge essential for both solicitors and expert witnesses.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">Current Somalia CPINs</h2>
        <div className="mt-4">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <caption className="mb-3 text-left text-base font-semibold text-[#0B2D4E]">
                Somalia CPIN quick reference for UK asylum practitioners (2025-2026)
              </caption>
              <thead>
                <tr className="border-b border-[#C8D8E4] bg-[#F4F8FB]">
                  <th className="px-4 py-3 text-left font-semibold text-[#0B2D4E]">CPIN</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#0B2D4E]">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#0B2D4E]">Key Issue</th>
                </tr>
              </thead>
              <tbody>
                {currentCpins.map((row) => (
                  <tr key={row.title} className="border-b border-[#C8D8E4]">
                    <td className="px-4 py-3 text-[#374151]">{row.title}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.date}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.keyIssue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">Country Guidance Cases</h2>
        <ul className="mt-4 space-y-4">
          {countryGuidanceCases.map((cg) => (
            <li key={cg.citation} className="rounded-[8px] border border-[#C8D8E4] bg-[#F4F8FB] p-4">
              <p className="font-semibold text-[#0B2D4E]">{cg.citation}</p>
              <p className="mt-1 text-sm text-[#374151]">{cg.summary}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[#374151]">
          For a detailed analysis of MOJ [2014], see our{" "}
          <Link href="/moj-country-guidance" className="font-semibold text-[#C8922A] hover:underline">
            MOJ country guidance pillar page
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">July 2025 Mogadishu Security CPIN</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The July 2025 CPIN on Mogadishu: Al-Shabaab and Security Situation confirms that the Federal Government of
          Somalia is willing but unable to provide effective protection from Al-Shabaab. Car bomb attacks and
          assassinations remain common. This CPIN is central to MOJ framework analysis and Al-Shabaab targeting claims.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">EUAA Country Guidance October 2025</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The EUAA updated its Country Guidance on Somalia in October 2025, revising the actors of protection chapter.
          UK tribunals may consider EUAA guidance alongside Home Office CPINs, particularly on state protection
          availability and internal relocation viability.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">How Expert Reports Relate to CPINs</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Expert witnesses do not simply reproduce CPIN content. The expert&apos;s role is to provide independent,
          objective analysis of whether the appellant&apos;s specific profile creates a real risk, applying current field
          research and source citations beyond the CPIN. Where the CPIN supports the appellant, the expert confirms and
          applies it to the individual profile. Where it does not, the expert challenges CPIN findings with verifiable
          evidence.
        </p>

        <div className="mt-10 space-y-6">
          <HubLinkGrid
            title="All Somali Asylum Profiles"
            links={asylumProfiles.map((p) => ({ label: p.title, href: `/asylum-profiles/${p.slug}` }))}
          />
          <HubLinkGrid
            title="Solicitor Guides"
            links={guides.map((g) => ({ label: g.h1.replace(/:.*$/, ""), href: `/guides/${g.slug}` }))}
          />
        </div>

        <FAQSection faqs={cpinFaqs} />
        <RelatedLinks
          links={[
            { label: "MOJ Country Guidance", href: "/moj-country-guidance" },
            { label: "Services", href: "/services" },
            { label: "How to Instruct", href: "/how-to-instruct" },
            { label: "Contact Us", href: "/contact" },
          ]}
        />
      </PageShell>
    </>
  );
}
