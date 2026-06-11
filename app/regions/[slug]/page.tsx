import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { regions, getRegion } from "@/data/regions";
import { getRegionRelatedLinks } from "@/data/related-links";
import { getAsylumProfile } from "@/data/asylum-profiles";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) return {};
  return createMetadata({
    title: region.metaTitle,
    description: region.metaDescription,
    path: `/regions/${slug}`,
  });
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Regions", href: "/regions" },
    { label: region.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={region.faqs} />
      <PageShell title={region.h1} breadcrumbs={crumbs}>
        {region.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#374151] leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-xl font-bold text-[#0B2D4E]">Related Asylum Profiles</h2>
        <ul className="mt-4 space-y-2">
          {region.relatedProfiles.map((s) => {
            const profile = getAsylumProfile(s);
            return (
              <li key={s}>
                <Link href={`/asylum-profiles/${s}`} className="text-[#C8922A] hover:underline">
                  {profile?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <FAQSection faqs={region.faqs} />
        <RelatedLinks links={getRegionRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
