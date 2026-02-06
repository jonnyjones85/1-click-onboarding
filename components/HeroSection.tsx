import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      {/* Top banner */}
      <div className="mb-6 text-center">
        <span className="inline-block rounded bg-navy-light px-4 py-2 text-sm font-medium text-gold">
          For Any Agency or Coaching Business Looking To Fully Streamline Their Client Onboarding Process&hellip;
        </span>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left column — copy */}
        <div className="lg:w-2/3">
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
            How To{" "}
            <span className="text-red-accent">
              Streamline Client Onboarding
            </span>{" "}
            For Your Coaching or Agency Business
          </h1>

          <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
            By <strong className="text-white">Installing An Automated &amp; FoolProof System</strong>{" "}
            Used by 7 Figure Businesses &mdash; Without hiring assistants or
            changing anything else in your business, even if you have no
            expertise in systems, while saving thousands of $$$ on unnecessary
            tasks.
          </p>

          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            What is the &ldquo;1 Click Client Onboarding Install Pack&rdquo;?
          </h2>

          <p className="mb-4 text-gray-300">
            The 1 Click Client Onboarding Install Pack is a counterintuitive
            client onboarding approach to onboard clients without complicated
            systems, expensive software, or managing assistants.
          </p>

          <p className="mb-4 text-gray-300">
            We achieve this by finding the onboarding steps that are repetitive
            for every client and leveraging automations that do the work for you.
          </p>

          <p className="mb-4 text-gray-300">
            And as a result&hellip;this frees you up to focus on working{" "}
            <strong>ON</strong> your business and NOT <strong>IN</strong> the
            business &mdash; this is the 1 Click Client Onboarding Install Pack.
          </p>

          <p className="mb-6 text-sm text-gray-400">
            This Install Pack works with all website &amp; funnel builders
            &mdash; WordPress, ClickFunnels, GoHighLevel, Webflow&hellip;
            without changing anything to your current setup!
          </p>
        </div>

        {/* Right column — pricing box */}
        <div className="lg:w-1/3">
          <div className="rounded-lg border-2 border-gray-border bg-white p-6 text-center text-black shadow-xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-green">
              Digital Download Now Available
            </p>

            <div className="mb-3">
              <p className="text-sm text-gray-500">
                Your Price: Only{" "}
                <span className="text-2xl font-bold text-black">$47.00</span>
              </p>
              <p className="text-sm text-gray-400 line-through">
                List Price $297
              </p>
              <p className="text-sm font-semibold text-red">
                You&apos;re Saving $250.00 Today
              </p>
            </div>

            <CTAButton
              main="Download The Install Pack and 7 Bonuses For Just $47.00!"
              sub="Now available for instant download"
              className="w-full text-sm"
            />

            <p className="mt-3 text-xs text-gray-500">
              Delivered instantly. Start installing the pack in the next 2
              minutes.
            </p>

            <div className="mt-4 border-t pt-3">
              <p className="text-[10px] text-gray-400">
                We securely process payments with 256-bit security encryption
              </p>
            </div>

            <div className="mt-3 rounded bg-navy px-3 py-2">
              <p className="text-xs font-bold uppercase text-gold">
                Backed By Our Unconditional 30 Day Money Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
