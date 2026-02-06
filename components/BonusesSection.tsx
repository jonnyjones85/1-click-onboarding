import CTAButton from "./CTAButton";

const bonuses = [
  {
    number: 1,
    title: "Client Feedback Pack",
    description:
      "The same feedback system that has been employed by all the 6 & 7 figure businesses we\u2019ve been working closely with.",
  },
  {
    number: 2,
    title: "Client CRM Tracker & Dashboard",
    description:
      "The central place to manage all clients with powerful tracking tools and metrics.",
  },
  {
    number: 3,
    title: "Onboarding Templates",
    description:
      "The exact documents you will use to manage client communication and streamline project management.",
  },
  {
    number: 4,
    title: "Client Check-In System",
    description:
      "The accountability system that maximizes client commitment and retention.",
  },
  {
    number: 5,
    title: "Onboarding Mastery Training",
    description:
      "So that you get committed clients that succeed and stay with you long-term.",
  },
  {
    number: 6,
    title: "Client Performance Tracking",
    description:
      "Step-by-step process to track client success so that satisfaction rates increase immensely.",
  },
  {
    number: 7,
    title: "7-Figure Analysis Framework",
    description:
      "Identify bottlenecks in your business with a video training showing the exact systems you need when scaling.",
  },
];

export default function BonusesSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="mb-2 text-center text-2xl font-bold text-white md:text-3xl">
        7 BONUSES INCLUDED TODAY
      </h2>
      <p className="mb-2 text-center text-lg text-gold">
        $3,929 of Actionable Value!
      </p>
      <p className="mb-10 text-center text-sm text-gray-400">
        (Yours For FREE When You Get The 1 Click Client Onboarding Install Pack)
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {bonuses.map((bonus) => (
          <div
            key={bonus.number}
            className="rounded-lg border border-gold/20 bg-navy-light/40 p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                {bonus.number}
              </span>
              <h3 className="text-lg font-bold text-white">{bonus.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{bonus.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <CTAButton
          main="Click Here To Get 1 Click Client Onboarding"
          sub="Install Now For Only $47.00 And Get Instant Access"
        />
      </div>
    </section>
  );
}
