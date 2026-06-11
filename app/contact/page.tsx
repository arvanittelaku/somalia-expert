import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct a Somalia Expert Witness | SomaliaExpert UK",
  description:
    "Submit your case details to instruct a qualified Somalia expert witness. Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Instruct a Somalia Expert Witness"
      subtitle="Confidential case submission. Response within one business day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="grid min-w-0 gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="min-w-0 lg:col-span-2">
          <ContactForm />
        </div>
        <aside className="h-fit rounded-[8px] border border-[#C8D8E4] bg-[#F4F8FB] p-5 sm:p-6">
          <h2 className="font-bold text-[#0B2D4E]">Why instruct through SomaliaExpert</h2>
          <ul className="mt-4 space-y-4 text-sm text-[#374151]">
            <li>All major Somali asylum profiles covered</li>
            <li>MOJ framework and regional analysis specialists</li>
            <li>Legal Aid rates available</li>
            <li>Immigration Tribunal Practice Direction compliant</li>
            <li>Response within 1 business day</li>
          </ul>
        </aside>
      </div>
    </PageShell>
  );
}
