import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { createMetadata } from "@/lib/metadata";
import {
  LEGAL_AID_ENGLAND_WALES_SUMMARY,
  LEGAL_AID_SCOTLAND_SUMMARY,
  SITE_SCOPE,
} from "@/lib/constants";

export const metadata = createMetadata({
  title: "How to Instruct a Somalia Expert Witness UK | Step-by-Step Guide",
  description:
    "Step-by-step guide for UK solicitors on instructing a Somalia expert witness, including SLAB prior approval in Scotland and LAA prior authority in England and Wales.",
  path: "/how-to-instruct",
});

const steps = [
  {
    n: 1,
    title: "Identify the Profile and Region",
    body: "Determine the appellant's asylum profile (clan minority, Al-Shabaab, FGM, failed asylum seeker, etc.) and region of origin (Mogadishu, Somaliland, Puntland, south/central). This determines whether MOJ, Article 15(c), or regional analysis applies.",
  },
  {
    n: 2,
    title: "Confirm UK Jurisdiction and Funding Route",
    body: "SomaliaExpert accepts instructions from solicitors acting in UK Immigration and Asylum Chamber proceedings only. Most Somalia expert reports are Legal Aid funded. In Scotland, funding is administered by the Scottish Legal Aid Board (SLAB). In England and Wales, the Legal Aid Agency (LAA) applies. Northern Ireland uses the Legal Services Agency Northern Ireland (LSANI). Privately funded cases follow a separate fee agreement.",
  },
  {
    n: 3,
    title: "Scottish Legal Aid: SLAB Prior Approval",
    body: "Scottish solicitors must obtain SLAB prior approval of reasonable and necessary expert fees before the expert begins chargeable work. Submit the expert's CV, proposed scope, estimated hours, fee quote, hearing date, and explanation of why country expert evidence is required. SLAB assesses disbursements under Scottish civil legal aid regulations, separately from LAA processes in England and Wales.",
  },
  {
    n: 4,
    title: "England and Wales: LAA Prior Authority",
    body: "Apply for LAA prior authority before instructing the expert unless a valid exception applies. Include the expert's CV, proposed scope, estimated hours, and fee. Typical LAA-approved rates are £50 to £100 per hour for report preparation, subject to current LAA guidance.",
  },
  {
    n: 5,
    title: "Letter of Instruction",
    body: "Provide a detailed letter of instruction specifying the expert's role, questions to address, hearing date, tribunal venue (including Glasgow, Edinburgh, or other UK hearing centres), and funding arrangements. Reference relevant country guidance (MOJ [2014], OA [2022]) and CPINs (July 2025 Mogadishu security).",
  },
  {
    n: 6,
    title: "Provide All Relevant Materials",
    body: "Include the screening record, Asylum Interview Record (AIR), Home Office refusal letter (RFRL), client witness statement, any previous expert reports, and relevant CPINs and country guidance decisions.",
  },
  {
    n: 7,
    title: "Expert Analysis and Report",
    body: "The expert prepares an independent report addressing the letter of instruction. Standard reports take 2 to 3 weeks. Urgent reports available within 7 days.",
  },
  {
    n: 8,
    title: "Written Questions and Oral Evidence",
    body: "If required, respond to written questions from the opposing party. Oral evidence is common in MOJ country guidance cases or where the tribunal directs expert attendance at a UK hearing centre.",
  },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct a Somalia Expert Witness"
        subtitle="Eight steps for UK immigration solicitors, with Scottish Legal Aid (SLAB) and England/Wales (LAA) funding routes."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 max-w-3xl text-[#374151] leading-relaxed">{SITE_SCOPE}</p>

        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 rounded-[8px] border border-[#C8D8E4] bg-white p-4 sm:p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2D4E] font-bold text-white">
                {s.n}
              </span>
              <div className="min-w-0">
                <h2 className="break-words font-bold text-[#0B2D4E]">{s.title}</h2>
                <p className="prose-safe mt-2 text-sm text-[#374151] sm:text-base">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[8px] border border-[#C8D8E4] bg-[#F4F8FB] p-4 sm:p-6">
          <h2 className="text-lg font-bold text-[#0B2D4E]">Legal Aid summary: Scotland and England/Wales</h2>
          <h3 className="mt-4 font-semibold text-[#0B2D4E]">Scotland (SLAB)</h3>
          <p className="prose-safe mt-2 text-sm text-[#374151] sm:text-base">{LEGAL_AID_SCOTLAND_SUMMARY}</p>
          <h3 className="mt-4 font-semibold text-[#0B2D4E]">England and Wales (LAA)</h3>
          <p className="prose-safe mt-2 text-sm text-[#374151] sm:text-base">{LEGAL_AID_ENGLAND_WALES_SUMMARY}</p>
        </div>

        <RelatedLinks
          links={[
            { label: "Instructing guide", href: "/guides/instructing-somalia-expert" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "Contact us", href: "/contact" },
          ]}
        />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[8px] bg-[#C8922A] px-6 py-3 font-semibold text-white"
        >
          Contact Us
        </Link>
      </PageShell>
    </>
  );
}
