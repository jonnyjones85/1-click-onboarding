export default function WhatYouGet() {
  const features = [
    "Client Feedback Pack \u2014 the same feedback system employed by all the 6 & 7 figure businesses I\u2019ve been working closely with on a DFY basis.",
    "Client CRM Tracker and Dashboard \u2014 your central place to manage all clients with powerful tools.",
    "Onboarding Templates \u2014 the exact documents you will use to manage client communication and streamline project management.",
    "Client Check-In System \u2014 the accountability system that maximizes client commitment.",
    "Onboarding Mastery \u2014 so that you get committed clients that succeed.",
    "The Step-By-Step Process to Tracking Clients\u2019 Performance \u2014 so that client success rate increases immensely.",
  ];

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
        Here&apos;s What Else You&apos;re Going To Discover In The 1 Click
        Client Onboarding Install Pack
      </h2>

      <div className="space-y-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-lg border border-navy-light bg-navy-light/30 p-4"
          >
            <span className="mt-1 text-green">&#10003;</span>
            <p className="text-gray-300">{feature}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-gray-300">
        I will also show you how to fully automate the onboarding process and
        create the client materials automatically and in a personalized way for
        every client!
      </p>

      {/* 7-Figure Analysis Framework */}
      <div className="mt-10 rounded-lg border border-gold/30 bg-navy-light/40 p-6 text-center">
        <h3 className="mb-3 text-xl font-bold text-gold">
          Plus I&apos;m Going To Give You The Plug &amp; Play &ldquo;7-Figure
          Analysis&rdquo; Framework
        </h3>
        <p className="text-gray-300">
          This is the same framework my team &amp; I analyze our 7 figure
          clients without paying 5 figures for an agency audit that has never
          built a single system themselves&hellip;
        </p>
      </div>
    </section>
  );
}
