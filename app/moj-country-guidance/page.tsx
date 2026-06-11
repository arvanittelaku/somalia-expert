import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { mojFrameworkTable } from "@/data/cpin-data";
import { asylumProfiles } from "@/data/asylum-profiles";
import { guides } from "@/data/guides";
import { regions } from "@/data/regions";
import { HubLinkGrid } from "@/components/ui/HubLinkGrid";
import { getMojRelatedLinks } from "@/data/related-links";

export const metadata = createMetadata({
  title: "MOJ Somalia Country Guidance [2014] | UK Asylum Solicitor Guide 2025-2026",
  description:
    "Complete guide to MOJ and Others (Return to Mogadishu) Somalia CG [2014] for UK solicitors: clan analysis, diaspora test, Mogadishu return, Al-Shabaab, and 2025-2026 security updates.",
  path: "/moj-country-guidance",
});

const mojFaqs = [
  {
    question: "What is MOJ and Others [2014]?",
    answer:
      "MOJ and Others (Return to Mogadishu) Somalia CG [2014] UKUT 004442 (IAC) is the leading country guidance case for Somalia asylum appeals. It established the diaspora/clan support test for Mogadishu return and the general finding that ordinary civilians with no particular profile generally face no Article 3 risk.",
  },
  {
    question: "How has Al-Shabaab's 2025-2026 offensive affected MOJ?",
    answer:
      "Al-Shabaab's renewed offensive has retaken previously liberated territory, making internal relocation to government-controlled areas less viable and undermining MOJ's general finding for some profiles and areas.",
  },
  {
    question: "What is the diaspora test under MOJ?",
    answer:
      "MOJ established that return to Mogadishu requires assessment of clan connections providing support or ability to obtain financial remittances from abroad. Without either, return may breach Article 3 through destitution.",
  },
];

export default function MojCountryGuidancePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "MOJ Country Guidance" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={mojFaqs} />
      <JsonLd
        data={articleSchema({
          title: "MOJ and Others (Return to Mogadishu) Somalia CG [2014]: A Complete Guide for UK Asylum Solicitors",
          description:
            "Complete guide to MOJ country guidance for Somalia asylum appeals including diaspora test, clan analysis, and 2025-2026 security updates.",
          path: "/moj-country-guidance",
        })}
      />
      <PageShell
        title="MOJ and Others (Return to Mogadishu) Somalia CG [2014]: A Complete Guide for UK Asylum Solicitors"
        subtitle="The primary country guidance framework for Mogadishu return claims, updated for 2025-2026 security conditions."
        breadcrumbs={crumbs}
      >
        <h2 className="text-xl font-bold text-[#0B2D4E]">What MOJ Established</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          MOJ and Others (Return to Mogadishu) Somalia CG [2014] UKUT 004442 (IAC) remains the leading country guidance
          case for Somalia asylum appeals in the UK. The Upper Tribunal held that, in general, there is no Article 3
          risk for ordinary civilians returning to Mogadishu with no particular profile. However, the tribunal also
          established that clan support or diaspora financial remittances are essential for viable return, and that
          specific profiles including former government officials face individual risk beyond the general finding.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          MOJ transformed Somali asylum practice in the UK by introducing a structured framework for assessing Mogadishu
          return claims. Before MOJ, tribunals applied inconsistent approaches to clan analysis and return viability.
          MOJ provided a coherent test that remains the starting point for all Mogadishu return analysis, though its
          application must be updated for current conditions in 2025-2026.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">The MOJ Framework: Key Findings Table</h2>
        <div className="mt-4">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <caption className="mb-3 text-left text-base font-semibold text-[#0B2D4E]">
                MOJ key findings and 2025-2026 updates for UK asylum practitioners
              </caption>
              <thead>
                <tr className="border-b border-[#C8D8E4] bg-[#F4F8FB]">
                  <th className="px-4 py-3 text-left font-semibold text-[#0B2D4E]">Issue</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#0B2D4E]">MOJ Finding</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#0B2D4E]">2025-2026 Update</th>
                </tr>
              </thead>
              <tbody>
                {mojFrameworkTable.map((row) => (
                  <tr key={row.issue} className="border-b border-[#C8D8E4]">
                    <td className="px-4 py-3 text-[#374151]">{row.issue}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.mojFinding}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.update}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">The Diaspora/Remittances Test</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          MOJ established that return to Mogadishu requires assessment of whether the individual has clan connections
          providing support or is able to obtain financial remittances from abroad. Without either, return may breach
          Article 3. In Mogadishu, clan membership provides access to housing, employment, security, and social
          networks. Diaspora remittances can partially substitute for direct clan presence, providing the financial
          means to survive even without immediate clan networks.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Expert witnesses assess whether claimed diaspora support is realistic given the appellant&apos;s specific
          circumstances: the existence and reliability of remittance sources, the cost of living in Mogadishu, and
          whether financial support alone is sufficient without any clan connection. Failed asylum seekers who have
          lost clan ties through long absence present particularly acute diaspora test issues.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">Clan Analysis in MOJ Claims</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The expert witness role in clan analysis is central to MOJ claims. Experts assess whether the appellant&apos;s
          claimed clan membership is consistent with their dialect, cultural knowledge, and geographic origin. Somalia
          has four major clan families (Hawiye, Darod, Dir, Rahanweyn) and numerous minority groups (Benadiri, Gosha,
          Bantu, Gaboye/Madhiban) who lack clan militia protection.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Clan analysis methodology examines: claimed clan and sub-clan affiliation; geographic origin and regional clan
          distribution; dialect and language (Somali, Maay, af-Tunni); cultural and genealogical knowledge; and
          consistency with known patterns of clan displacement. See our{" "}
          <Link href="/guides/clan-structure-somalia-guide" className="font-semibold text-[#C8922A] hover:underline">
            clan structure guide
          </Link>{" "}
          and{" "}
          <Link href="/asylum-profiles/clan-minority-groups" className="font-semibold text-[#C8922A] hover:underline">
            clan minority profile
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">OA and Others [2022]: Updated Country Guidance</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          OA and Others (Somalia) CG [2022] UKUT 00033 updated country guidance on return to Somalia, refining MOJ
          application to specific profiles and addressing changed conditions since 2014. Solicitors should cite both
          MOJ and OA in current appeals, with expert evidence addressing how 2025-2026 developments further affect the
          framework. OA confirmed that the MOJ diaspora test continues to apply while recognising that security
          conditions had deteriorated since the original MOJ decision.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">EUAA Country Guidance October 2025</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The European Union Agency for Asylum updated its Country Guidance on Somalia in October 2025, revising the
          actors of protection chapter. While primarily intended for EU member states, UK tribunals may consider EUAA
          guidance alongside Home Office CPINs. The October 2025 update confirms that state protection from Al-Shabaab
          is generally unavailable and addresses internal relocation viability in light of current territorial control.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">Al-Shabaab Renewed Offensive 2025-2026</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The Al-Shabaab renewed offensive through late 2025 has reversed earlier government gains. Territory previously
          considered liberated has been retaken, making internal relocation to government-controlled areas in the south
          less viable than before. This significantly affects how the MOJ framework applies in 2026, particularly for
          internal relocation arguments and for profiles at risk of Al-Shabaab targeting in previously safe areas.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The July 2025 Home Office CPIN on Mogadishu: Al-Shabaab and Security Situation confirms the Federal
          Government is willing but unable to protect citizens from Al-Shabaab. Expert witnesses must incorporate
          current territorial control data when applying MOJ to individual profiles. See our{" "}
          <Link href="/guides/al-shabaab-asylum-guide" className="font-semibold text-[#C8922A] hover:underline">
            Al-Shabaab asylum guide
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">ATMIS Withdrawal Impact</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The ATMIS (AU Transition Mission in Somalia) withdrawal creates additional uncertainty about the security
          situation. The government cannot protect its own citizens without AU support, clan violence continues, and
          even majority clan members face danger from generalised insecurity and Al-Shabaab attacks. ATMIS withdrawal
          must be addressed in any MOJ framework analysis for 2025-2026 claims, particularly on state protection
          availability and internal relocation viability. See{" "}
          <Link href="/glossary#atmis" className="font-semibold text-[#C8922A] hover:underline">
            ATMIS in our glossary
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#0B2D4E]">Expert Reports and MOJ Analysis</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Expert witnesses applying the MOJ framework must provide independent analysis beyond CPIN reproduction. Reports
          address: the appellant&apos;s clan background and Mogadishu connections; diaspora remittance viability; personal
          profile risk factors; current security conditions including Al-Shabaab territorial control; and internal
          relocation alternatives. Reports comply with CPR Part 35 and Immigration Tribunal Practice Direction
          paragraph 10.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          To instruct a Somalia expert for MOJ analysis, see our{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
            how to instruct page
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-[#C8922A] hover:underline">
            contact us
          </Link>
          .
        </p>

        <div className="mt-10 space-y-6">
          <HubLinkGrid
            title="All Somali Asylum Profiles"
            links={asylumProfiles.map((p) => ({ label: p.title, href: `/asylum-profiles/${p.slug}` }))}
          />
          <HubLinkGrid
            title="Regional Analysis"
            links={regions.map((r) => ({ label: r.title, href: `/regions/${r.slug}` }))}
          />
          <HubLinkGrid
            title="Solicitor Guides"
            links={guides.map((g) => ({ label: g.h1.replace(/:.*$/, ""), href: `/guides/${g.slug}` }))}
          />
        </div>

        <FAQSection faqs={mojFaqs} />
        <RelatedLinks links={getMojRelatedLinks()} />
      </PageShell>
    </>
  );
}
