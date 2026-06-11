import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";
import { asylumProfiles } from "@/data/asylum-profiles";
import { regions } from "@/data/regions";

export function Footer() {
  return (
    <footer className="border-t border-[#C8D8E4] bg-[#0B2D4E] text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Regions</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link href={`/regions/${r.slug}`} className="inline-flex min-h-[44px] items-center hover:text-white">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Asylum Profiles</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {asylumProfiles.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link href={`/asylum-profiles/${p.slug}`} className="inline-flex min-h-[44px] items-center hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/asylum-profiles" className="text-[#C8922A] hover:underline">
                  View all profiles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/moj-country-guidance" className="hover:text-white">MOJ Country Guidance</Link></li>
              <li><Link href="/cpin-country-guidance" className="hover:text-white">CPIN & Country Guidance</Link></li>
              <li><Link href="/guides" className="hover:text-white">Solicitor Guides</Link></li>
              <li><Link href="/how-to-instruct" className="hover:text-white">How to Instruct</Link></li>
              <li><Link href="/qualifications" className="hover:text-white">Qualifications</Link></li>
              <li><Link href="/glossary" className="hover:text-white">Glossary</Link></li>
              <li><Link href="/what-is-a-somalia-expert-witness" className="hover:text-white">What is a Somalia Expert Witness?</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
              <li><Link href="/contact" className="font-semibold text-[#C8922A] hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          SomaliaExpert.com connects UK solicitors with qualified Somalia expert witnesses. We are not a law firm and do not provide legal advice.
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookie Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <span aria-hidden="true">·</span>
          <CookieSettingsButton variant="footer" />
        </p>
      </div>
    </footer>
  );
}
