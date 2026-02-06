import CaseStudy from "./CaseStudy";
import CTAButton from "./CTAButton";

const caseStudies = [
  {
    name: "Meet Bastiaan Slot",
    tagline:
      "Using This Framework to Make 7M a Year Without Working \"In\" the Business",
    paragraphs: [
      "Bastiaan was already pretty successful even before implementing our systems, but was facing constant systems issues and things breaking inside of his business\u2026",
      "Bastiaan uses these systems to not only scale his business, he also gets to spend more time with his family, while taking more profits inside of his business\u2026",
      "The best part is that he doesn\u2019t have to do anything \u2013 it\u2019s ALL automated.",
      "These Systems Worked So Well For His Business He Taught The Same Systems To His Very Own Students\u2026",
    ],
  },
  {
    name: "Meet Serge",
    tagline: "Helping Agencies Acquire Clients at Scale",
    paragraphs: [
      "Serge ran his 7 figure business successfully\u2026 But his business was chaotic.",
      "Despite having all the keys to get to the next level, something was lacking\u2026 He actually had no control on his business\u2026 No automated onboarding process\u2026 Couldn\u2019t track client success\u2026 Or didn\u2019t have any data or metrics at all for that matter.",
      "And what\u2019s really cool, is as soon as that got fixed, Serge\u2019s business scaled right away to the point he offered Katie & her team to partner with him and help him run his operations\u2026",
    ],
  },
  {
    name: "Meet Splash (Parikichhit)",
    tagline: "Helping Businesses Drive Revenue Through Email",
    paragraphs: [
      "Splash lives a very busy life\u2026 From his travel around the world, to frequent meetings, everything around him was constant chaos.",
      "His business was unorganized, and living his lifestyle while running his business was getting tedious. Nothing was automated.",
      "We instantly built him proper systems\u2026 Taught him how to streamline & have a more efficient business\u2026 And helped him go from point A to point B as fast as possible.",
      "Splash now uses flawless systems every day in his business thanks to what he calls \u201Cthe best decision we\u2019ve made this year.\u201D",
    ],
  },
  {
    name: "Meet Megan",
    tagline: "Helping Women Work Remotely",
    paragraphs: [
      "Megan had some automations but they were constantly breaking\u2026 Resulting in her spending more time fixing everything than doing everything manually\u2026",
      "Worst of all, she had no automated onboarding process. She took her laptop with her everywhere she went, so she could onboard clients as soon as they paid, no matter where she was or what she was doing.",
      "We first started by building her a customized onboarding SOP\u2026 That already removed a lot of stress away.",
      "Then Megan\u2019s business saw pretty much everything get automated\u2026 She found out that she had a 99% satisfaction rate of her clients thanks to the implemented systems!",
    ],
  },
  {
    name: "Meet Franck",
    tagline: "Helping Closers & Setters Deliver More Results",
    paragraphs: [
      "Franck\u2019s journey started with a business bogged down by manual processes and a lack of comprehensive systems.",
      "With only a basic funnel in place and no structured HR or onboarding systems, scaling beyond his $50K monthly earnings seemed like a distant dream.",
      "We automated his operational processes, eliminating the need for tedious manual work. We also enhanced team communication and collaboration, leading to a more streamlined and efficient workflow.",
      "Now, Franck enjoys the freedom to focus on sales, marketing, and lead generation, while his business thrives autonomously.",
    ],
  },
  {
    name: "Meet Mehdi",
    tagline: "Helping Online Coaches Scale Past $100K/Month",
    paragraphs: [
      "As a successful 7-figure business coach, Mehdi faced a significant hurdle in scaling his business to 8 figures.",
      "The core issues lay in inefficient team training, micromanagement, and a lack of strategic focus. Mehdi\u2019s business was working on him, rather than for him.",
      "We implemented high-level systems that provided a clear overview of the business, allowing for precise identification and resolution of issues month-to-month.",
      "As a result, Mehdi\u2019s business is now more robust, agile, and poised for unprecedented growth.",
    ],
  },
  {
    name: "Meet Yoon",
    tagline: "COO of Dan Henry",
    paragraphs: [
      "Yoon\u2019s background as an ex-military individual provided a unique set of skills, yet he found himself grappling with a lack of operational and leadership knowledge in a civilian business environment.",
      "We focused on developing his operational mindset \u2013 shifting from a purely sales-oriented perspective to understanding the broader aspects of business operations.",
      "Our comprehensive guidance helped Yoon develop the skills necessary to operate his business successfully, leading to a positive return on investment and a more efficient, goal-oriented operation.",
    ],
  },
  {
    name: "Meet Ben",
    tagline: "Helping Coaches Scale with Setters",
    paragraphs: [
      "Ben\u2019s coaching business was in a challenging phase, stuck at a monthly revenue of $15,000 to $30,000, and unable to break through to higher figures.",
      "The root of the problem was a lack of systematic processes, leading to operational failures and a significant loss of $40,000 in clients.",
      "We introduced automation across various aspects of his business, significantly reducing the manual workload.",
      "These systematic changes laid the groundwork for scaling his business, now poised to reach monthly revenues of $250,000 to $1 million.",
    ],
  },
  {
    name: "Meet Dominic Speer",
    tagline: "Helping Men Reach Their Fitness Goals",
    paragraphs: [
      "Dominic\u2019s business was hindered by a lack of structure and dependency on manual processes.",
      "Our solution was to overhaul Dominic\u2019s onboarding system, transitioning it from a manual to an automated process.",
      "This shift allowed Dominic to extricate himself from the day-to-day operations, focusing instead on areas where he excels.",
      "The new system not only streamlined client onboarding but also enhanced the overall client experience, positioning his business for accelerated growth.",
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="mb-2 text-center text-2xl font-bold text-gold md:text-3xl">
        HERE&apos;S A FEW OF OUR CASE STUDIES
      </h2>
      <p className="mb-10 text-center text-lg text-gray-400">
        Using The 1 Click Client Onboarding System...
      </p>

      {caseStudies.map((cs, i) => (
        <CaseStudy key={i} {...cs} />
      ))}

      <div className="mt-8 text-center">
        <CTAButton />
      </div>
    </section>
  );
}
