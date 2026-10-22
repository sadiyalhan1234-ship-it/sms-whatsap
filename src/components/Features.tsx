import Tilt3D from "./Tilt3D";
import Reveal from "./Reveal";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Bulk SMS & WhatsApp",
    desc: "Send thousands of personalized messages in seconds across SMS and WhatsApp with one click.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Contact Management",
    desc: "Import, segment, and organize contacts with tags, lists, and custom fields.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Campaign Automation",
    desc: "Schedule recurring campaigns, drip sequences, and trigger-based automated flows.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Real-time Analytics",
    desc: "Track delivery, opens, clicks, and conversions with live dashboards and reports.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Enterprise Security",
    desc: "End-to-end encryption, GDPR compliance, and role-based access control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Reach",
    desc: "Deliver to 190+ countries with local sender IDs and carrier-grade routing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "Two-way Messaging",
    desc: "Receive replies, run chatbots, and manage conversations from a unified inbox.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "API & Integrations",
    desc: "REST API, webhooks, and native integrations with CRM, e-commerce, and Zapier.",
  },
];

export default function Features() {
  const iconTones = [
    "bg-emerald-50 text-emerald-700 ring-emerald-200/70 group-hover:bg-emerald-100",
    "bg-sky-50 text-sky-700 ring-sky-200/70 group-hover:bg-sky-100",
    "bg-violet-50 text-violet-700 ring-violet-200/70 group-hover:bg-violet-100",
    "bg-amber-50 text-amber-700 ring-amber-200/70 group-hover:bg-amber-100",
    "bg-teal-50 text-teal-700 ring-teal-200/70 group-hover:bg-teal-100",
    "bg-blue-50 text-blue-700 ring-blue-200/70 group-hover:bg-blue-100",
    "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200/70 group-hover:bg-fuchsia-100",
    "bg-orange-50 text-orange-700 ring-orange-200/70 group-hover:bg-orange-100",
  ];
  const hoverBorders = [
    "hover:border-emerald-200",
    "hover:border-sky-200",
    "hover:border-violet-200",
    "hover:border-amber-200",
    "hover:border-teal-200",
    "hover:border-blue-200",
    "hover:border-fuchsia-200",
    "hover:border-orange-200",
  ];

  return (
    <section id="features" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/50 to-white">
      <div className="absolute left-1/2 top-0 -z-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-violet-200/30 blur-3xl animate-drift" />
      <div className="absolute right-10 bottom-10 -z-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl animate-drift [animation-delay:-6s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal from="down">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Features</span>
          </Reveal>
          <Reveal from="up" delay={80}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to run powerful messaging campaigns
            </h2>
          </Reveal>
          <Reveal from="up" delay={140}>
            <p className="mt-4 text-lg text-slate-600">
              From bulk sending to advanced automation, BlastWave gives you the tools to connect with customers
              wherever they are.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70} from="up">
              <Tilt3D intensity={10} perspective={900} depth={34} className="h-full">
                <div className={`group h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${hoverBorders[i % hoverBorders.length]}`}>
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-soft ${iconTones[i % iconTones.length]}`}>
                    {f.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  <span className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${i % 2 === 0 ? "text-indigo-600" : "text-sky-600"}`}>
                    Learn more
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>

        {/* stats strip */}
        <div className="mt-16 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { v: "12,000+", l: "Active customers" },
            { v: "2.4B", l: "Messages delivered" },
            { v: "99.9%", l: "Uptime SLA" },
            { v: "190+", l: "Countries" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 90} from="up">
              <Tilt3D intensity={12} perspective={800} depth={35} className="h-full">
                <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-6 shadow-soft backdrop-blur transition-shadow duration-300 hover:shadow-card">
                  <p className="text-3xl font-extrabold text-slate-900">{s.v}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.l}</p>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}