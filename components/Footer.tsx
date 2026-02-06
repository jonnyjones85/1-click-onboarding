export default function Footer() {
  return (
    <footer className="border-t border-navy-light bg-navy-dark px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Links */}
        <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            1CCO
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Terms &amp; Conditions
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mb-6 text-center text-[10px] leading-relaxed text-gray-500">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc. We can not and do not make
          any guarantees about your ability to get results or earn any money with
          our ideas, information, tools, or strategies. What we can guarantee is
          your satisfaction with our training. We give you a 30-day 100%
          satisfaction guarantee on the products we sell, so if you are not happy
          for any reason with the quality of our training, just ask for your
          money back. Please note that the 30-day satisfaction guarantee applies
          only to the 1 Click Onboarding product ($47) and does not extend to
          any other products. All upsells and downsells are non-refundable. You
          should know that all products and services by our company are for
          educational and informational purposes only. Nothing on this page, any
          of our websites, or any of our content or curriculum is a promise or
          guarantee of results or future earnings, and we do not offer any
          legal, medical, tax or other professional advice. Any financial numbers
          referenced here, or on any of our sites, are illustrative of concepts
          only and should not be considered average earnings, exact earnings, or
          promises for actual or future performance. Use caution and always
          consult your accountant, lawyer or professional advisor before acting
          on this or any information related to a lifestyle change or your
          business or finances. You alone are responsible and accountable for
          your decisions, actions and results in life, and by your registration
          here you agree not to attempt to hold us liable for your decisions,
          actions or results, at any time, under any circumstance.
        </p>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500">
          This product is brought to you and copyrighted by 7-Figure Systems
        </p>
        <p className="mt-1 text-center text-xs text-gray-600">
          All Rights Reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
