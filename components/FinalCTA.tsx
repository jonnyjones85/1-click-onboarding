import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
        HERE&apos;S EVERYTHING YOU&apos;RE GETTING INSTANT ACCESS TO TODAY FOR
        ONLY $47.00
      </h2>

      <div className="mb-6 inline-block rounded-lg bg-navy-light/60 px-6 py-4">
        <p className="text-sm text-gray-400 line-through">Only $297</p>
        <p className="text-3xl font-bold text-gold">$47.00 Today</p>
        <p className="text-sm text-gray-400">
          (Save $250.00 today) Install Now the 1 Click Client Onboarding
          Install Pack and 7 more BONUSES. Delivered instantly.
        </p>
      </div>

      <div className="mb-4">
        <CTAButton
          main="Click Here To Get Your Install Pack"
          sub="Install Now And Get Instant Access"
        />
      </div>

      <p className="text-xs text-gray-500">
        Backed by Our 30-Day 100% Money Back Guarantee
      </p>

      {/* Hormozi quote */}
      <div className="mt-10 rounded-lg border border-navy-light bg-navy-light/30 p-6">
        <p className="mb-2 text-lg italic text-gray-300">
          &ldquo;If your company isn&apos;t growing, it&apos;s dying.&rdquo;
        </p>
        <p className="text-sm font-semibold text-gold">&mdash; Alex Hormozi</p>
      </div>
    </section>
  );
}
