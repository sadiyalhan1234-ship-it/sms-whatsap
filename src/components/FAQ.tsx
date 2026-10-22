import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How does SMS/WhatsApp blasting work?",
    a: "You upload your contact list, compose a message (with personalization variables), choose SMS or WhatsApp, and hit send. BlastWave routes messages through carrier-grade gateways for maximum deliverability.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! Every new account gets a 14-day free trial with 100 free SMS credits and 50 WhatsApp messages. No credit card required.",
  },
  {
    q: "Can I personalize messages?",
    a: "Absolutely. Use variables like {first_name}, {company}, or any custom field to personalize each message at scale.",
  },
  {
    q: "Do you support two-way messaging?",
    a: "Yes. Incoming replies appear in your unified inbox, and you can set up auto-replies and chatbot flows.",
  },
  {
    q: "Is my data secure?",
    a: "We use end-to-end encryption, are GDPR and SOC 2 compliant, and never share your contact data with third parties.",
  },
  {
    q: "Can I integrate with my CRM?",
    a: "BlastWave offers native integrations with Salesforce, HubSpot, Shopify, and Zapier, plus a full REST API.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50/50 to-white">
      <div className="absolute left-1/2 top-10 -z-0 h-72 w-[32rem] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl animate-drift" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal from="down">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">FAQ</span>
          </Reveal>
          <Reveal from="up" delay={80}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={i} delay={i * 60} from="up">
                <div className={`overflow-hidden rounded-xl border bg-white shadow-soft transition-all duration-300 hover:shadow-card ${open ? "border-indigo-200 shadow-card" : "border-slate-200/80 hover:border-indigo-200/70"}`}>
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300 ${
                        open
                          ? "rotate-180 bg-gradient-to-br from-indigo-500 to-violet-500 text-white ring-indigo-300 shadow-glow"
                          : "bg-indigo-50 text-indigo-700 ring-indigo-200/70"
                      }`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}