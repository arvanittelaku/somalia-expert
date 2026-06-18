import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { regions } from "@/data/regions";
import {
  LEGAL_AID_ENGLAND_WALES_SUMMARY,
  LEGAL_AID_SCOTLAND_SUMMARY,
  SITE_SCOPE,
} from "@/lib/constants";

const featuredProfileSlugs = [
  "clan-minority-groups",
  "al-shabaab-targeting",
  "fgm-gender-based-violence",
  "failed-asylum-seekers-return",
] as const;

const featuredProfiles = featuredProfileSlugs
  .map((slug) => asylumProfiles.find((p) => p.slug === slug))
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#0B2D4E] py-14 md:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#C8922A] sm:text-sm">
            UK Immigration & Asylum Tribunals
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Somalia Expert Witness UK: Country Reports for Asylum & Immigration Tribunals
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            SomaliaExpert connects UK immigration solicitors, law firms, and Legal Aid practitioners with qualified
            Somalia country expert witnesses for First-tier Tribunal and Upper Tribunal asylum appeals in England,
            Wales, Scotland, and Northern Ireland.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#C8922A] px-6 py-3 font-semibold text-white hover:bg-[#b07f22] sm:w-auto sm:px-8"
            >
              Instruct an Expert
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              How to Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FB] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0B2D4E] sm:text-2xl md:text-3xl">Why Somalia Expert Evidence Matters</h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            Somalia is one of the most complex and legally dense asylum jurisdictions in the UK system, with multiple
            layers of country guidance, a rapidly evolving security situation, and high volumes of appeals. Home Office
            refusals often rely on generic CPIN positions that do not reflect the appellant&apos;s specific clan profile,
            region of origin, or personal risk factors. Independent expert evidence is essential for UK tribunals,
            including hearings listed in Glasgow, Edinburgh, Birmingham, London, and other Immigration and Asylum
            Chamber venues.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-[#374151] leading-relaxed">{SITE_SCOPE}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "CPR Part 35 Compliant",
                desc: "Reports comply with Immigration Tribunal Practice Direction paragraph 10 and current expert evidence standards for asylum proceedings.",
              },
              {
                title: "Current CPIN Knowledge",
                desc: "Experts cite July 2025 Mogadishu CPINs, EUAA October 2025 country guidance, MOJ [2014], OA [2022], and 2025-2026 Al-Shabaab developments.",
              },
              {
                title: "Legal Aid: Scotland (SLAB) & England/Wales (LAA)",
                desc: "Compatible with SLAB prior approval for Scottish solicitors and LAA prior authority for England and Wales. See our instruction guide for funding routes.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-[#C8D8E4] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#0B2D4E]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0B2D4E] sm:text-2xl">
            Legal Aid in Scotland and the United Kingdom
          </h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            Somali asylum appeals are frequently litigated by Scottish solicitors, particularly in Glasgow and Edinburgh
            where there is a substantial Somali diaspora. Country expert reports in those cases are commonly funded
            through Scottish Legal Aid Board (SLAB) civil legal aid, not the Legal Aid Agency (LAA) used in England and
            Wales. SomaliaExpert is set up for both funding routes across the UK.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-[#0B2D4E]">Scottish Legal Aid Board (SLAB)</h3>
          <p className="mt-3 max-w-3xl text-[#374151] leading-relaxed">{LEGAL_AID_SCOTLAND_SUMMARY}</p>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            When instructing for a Scottish FTT or Upper Tribunal hearing, provide SLAB with the expert&apos;s CV,
            proposed scope of work, estimated hours, and fee quote before the expert begins chargeable work. Include the
            hearing date, appellant profile (clan minority, Al-Shabaab, FGM, MOJ return, etc.), and why country expert
            evidence is necessary to the appeal. Our{" "}
            <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
              how to instruct guide
            </Link>{" "}
            sets out the documents SLAB and Scottish solicitors typically require.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-[#0B2D4E]">England and Wales (LAA)</h3>
          <p className="mt-3 max-w-3xl text-[#374151] leading-relaxed">{LEGAL_AID_ENGLAND_WALES_SUMMARY}</p>
          <p className="mt-4 max-w-3xl text-sm text-[#374151] leading-relaxed">
            Northern Ireland legal aid is administered separately by the Legal Services Agency Northern Ireland (LSANI).
            Solicitors in Belfast and other NI venues should confirm prior approval under the applicable NI legal aid
            scheme before instruction.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0B2D4E] sm:text-2xl">Key Somali Asylum Profiles</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Expert witness pages for the highest-volume Somali asylum profiles in UK tribunals.
          </p>
          <div className="mt-8">
            <CardGrid
              items={featuredProfiles.map((p) => ({
                title: p!.title,
                description: p!.metaDescription.slice(0, 120) + "...",
                href: `/asylum-profiles/${p!.slug}`,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/asylum-profiles" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              View all asylum profiles
            </Link>
            <Link href="/moj-country-guidance" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              MOJ Country Guidance
            </Link>
            <Link href="/regions" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Regional analysis
            </Link>
            <Link href="/guides" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Solicitor guides
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8FB] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0B2D4E] sm:text-2xl">Somalia by Region</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Somalia&apos;s legal framework differs radically by region. Dedicated region pages for Mogadishu, Somaliland,
            Puntland, and south/central Somalia.
          </p>
          <div className="mt-8">
            <CardGrid
              items={regions.map((r) => ({
                title: r.title,
                description: r.metaDescription.slice(0, 120) + "...",
                href: `/regions/${r.slug}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0B2D4E] sm:text-2xl">Expert Witness Services</h2>
          <CardGrid
            items={services.map((s) => ({
              title: s.title,
              description: s.description,
              href: "/services",
            }))}
          />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0B2D4E] sm:text-2xl">Case Types</h2>
          <CardGrid
            items={caseTypes.slice(0, 6).map((c) => ({
              title: c.title,
              description: c.metaDescription.slice(0, 100) + "...",
              href: `/case-types/${c.slug}`,
            }))}
          />
          <Link href="/case-types" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
            View all case types
          </Link>
        </div>
      </section>

      <section className="bg-[#F4F8FB] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0B2D4E] sm:text-2xl">MOJ & CPIN Country Guidance</h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            Stay current with MOJ and Others [2014], OA and Others [2022], July 2025 Mogadishu CPINs, and EUAA October
            2025 country guidance. Our pillar guide explains the MOJ framework for UK asylum practitioners, with expert
            analysis beyond generic CPIN positions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/moj-country-guidance"
              className="inline-flex min-h-[44px] items-center rounded-[8px] bg-[#0B2D4E] px-6 py-3 font-semibold text-white hover:bg-[#082340]"
            >
              MOJ Country Guidance Guide
            </Link>
            <Link
              href="/cpin-country-guidance"
              className="inline-flex min-h-[44px] items-center rounded-[8px] border-2 border-[#0B2D4E] px-6 py-3 font-semibold text-[#0B2D4E] hover:bg-[#F4F8FB]"
            >
              CPIN & Country Guidance
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
