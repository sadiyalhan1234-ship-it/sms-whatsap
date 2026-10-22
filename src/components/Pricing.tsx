import { useState } from "react";
import Tilt3D from "./Tilt3D";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 24 },
    desc: "For small teams getting started.",
    features: ["5,000 SMS/month", "1,000 WhatsApp/month", "1 user", "Basic analytics", "Email support"],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: { monthly: 99, yearly: 79 },
    desc: "For growing businesses scaling outreach.",
    features: ["50,000 SMS/month", "25,000 WhatsApp/month", "5 users", "Advanced analytics", "Automation & drip", "Priority support"],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 299, yearly: 249 },
    desc: "For large organizations with custom needs.",
    features: ["Unlimited SMS", "Unlimited WhatsApp", "Unlimited users", "Custom integrations", "Dedicated manager", "SLA & SSO"],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-white via-indigo-50/50 to-white">
      <div className="absolute left-1/4 top-10 -z-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl animate-drift" />
      <div className="absolute right-1/4 bottom-10 -z-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl animate-drift [animation-delay:-6s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal from="down">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Pricing</span>
          </Reveal>
          <Reveal from="up" delay={80}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
          </Reveal>
          <Reveal from="up" delay={140}>
            <p className="mt-4 text-lg text-slate-600">Choose the plan that fits your messaging volume. Cancel anytime.</p>
          </Reveal>

          <Reveal from="up" delay={200}>
            <div className="mt-8 inline-flex items-center rounded-full bg-white p-1 shadow-soft ring-1 ring-slate-200/80">
              <button
                onClick={() => setYearly(false)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  !yearly ? "bg-emerald-600 text-white shadow-primary" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  yearly ? "bg-emerald-600 text-white shadow-primary" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Yearly <span className="ml-1 text-xs opacity-80">-20%</span>
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} from="up">
              <Tilt3D intensity={p.highlighted ? 12 : 8} perspective={1200} depth={p.highlighted ? 45 : 25} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    p.highlighted
                      ? "border-indigo-300/70 bg-white text-slate-900 shadow-lift lg:scale-105"
                      : "border-slate-200/80 bg-white text-slate-900 shadow-card hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lift"
                  }`}
                >
                  {p.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-glow">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">${yearly ? p.price.yearly : p.price.monthly}</span>
                    <span className="text-sm text-slate-500">/month</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <svg className={`h-5 w-5 flex-shrink-0 ${p.highlighted ? "text-indigo-500" : "text-emerald-500"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary ${
                      p.highlighted
                        ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 text-white hover:shadow-glow"
                        : "bg-slate-900 text-white hover:bg-emerald-700"
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}