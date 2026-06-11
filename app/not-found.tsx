import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#0B2D4E] py-14 text-center md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-7xl font-bold text-[#C8922A] sm:text-8xl" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-lg text-white/80">
          This page does not exist or may have moved.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#C8922A] px-6 py-3 font-semibold text-white transition hover:bg-[#b07f22] sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Instruct an Expert
          </Link>
        </div>

        <nav
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60"
          aria-label="Quick links"
        >
          <Link href="/asylum-profiles" className="inline-flex min-h-[44px] items-center hover:text-white">
            Asylum Profiles
          </Link>
          <Link href="/regions" className="inline-flex min-h-[44px] items-center hover:text-white">
            Regions
          </Link>
          <Link href="/moj-country-guidance" className="inline-flex min-h-[44px] items-center hover:text-white">
            MOJ Guidance
          </Link>
          <Link href="/case-types" className="inline-flex min-h-[44px] items-center hover:text-white">
            Case Types
          </Link>
          <Link href="/contact" className="inline-flex min-h-[44px] items-center hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </section>
  );
}
