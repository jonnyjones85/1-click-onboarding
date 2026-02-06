"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the 1 Click Client Onboarding Install Pack?",
    a: "The 1 Click Client Onboarding Install Pack is a counterintuitive client onboarding approach to onboard clients without complicated systems, expensive software, or managing assistants. We achieve this by finding the onboarding steps that are repetitive for every client and leveraging automations that do the work for you.",
  },
  {
    q: "Is everything included or is there more to buy?",
    a: "Yes. Nothing was held back while creating this install pack. For people who want further assistance, we do offer opportunities to \u201Cupgrade\u201D your order after purchasing. We also have our group of private clients (by application only) if you want us to help you implement everything.",
  },
  {
    q: "What tech stack do I need?",
    a: "In order to have the best experience you will need the following: Google Sheets, Google Form, Zapier Account Professional Plan, and (optional) PandaDoc Business Plan. If you are looking to build the same infrastructure using other tools, you are welcome to do so.",
  },
  {
    q: "Do you have any success stories?",
    a: "Yes. This didn\u2019t just work for us. We encourage you to watch the videos and read the case studies from Bastiaan Slot, Franck Koomen, Yoon Kim, Megan Wieske, Serge Gatari, and others to get their side of the story.",
  },
  {
    q: "Is there a guarantee?",
    a: "Yes, you get a 30-day money-back guarantee in case it\u2019s not for you. If you\u2019re not satisfied for any reason, simply let us know within 30 days and we\u2019ll refund every penny.",
  },
  {
    q: "Who is this for?",
    a: "This is perfect for coaching businesses, agencies, and service-based businesses looking to streamline their client onboarding process. If you\u2019re spending too much time on manual onboarding tasks, this is for you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-lg border border-navy-light bg-navy-light/30 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <span className="pr-4 font-semibold text-white">{faq.q}</span>
              <span className="shrink-0 text-gold text-xl">
                {open === i ? "\u2212" : "+"}
              </span>
            </button>
            {open === i && (
              <div className="border-t border-navy-light px-5 pb-5 pt-3">
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
