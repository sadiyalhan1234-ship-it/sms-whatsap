import Tilt3D from "./Tilt3D";
import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Create your account",
    desc: "Sign up in seconds and verify your business. No credit card required to start.",
  },
  {
    num: "02",
    title: "Import your contacts",
    desc: "Upload CSV files or sync from your CRM. Segment audiences with tags and filters.",
  },
  {
    num: "03",
    title: "Compose your message",
    desc: "Write personalized SMS or WhatsApp templates with variables, media, and buttons.",
  },
  {
    num: "04",
    title: "Send & track",
    desc: "Launch your campaign and monitor delivery, engagement, and conversions in real time.",
  },
];

export default function HowItWorks() {
  const numTones = [
    "from-emerald-500 to-teal-600 shadow-primary ring-emerald-300/50",
    "from-sky-500 to-blue-600 shadow-glow ring-sky-300/50",
    "from-violet-500 to-purple-600 shadow-glow ring-violet-300/50",
    "from-amber-500 to-orange-600 shadow-primary ring-amber-300/50",
  ];
  return (
    <section id="how" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-white via-violet-50/50 to-white">
      <div className="absolute inset-0 -z-10 bg-white/40" />
      <div className="absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl animate-drift" />
      <div className="absolute left-0 bottom-10 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl animate-drift [animation-delay:-6s]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal from="down">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">How it works</span>
            </Reveal>
            <Reveal from="up" delay={70}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Launch your first campaign in under 5 minutes
              </h2>
            </Reveal>
            <Reveal from="up" delay={130}>
              <p className="mt-4 text-lg text-slate-600">
                BlastWave is built for speed. From signup to sending, our guided flow gets you messaging fast.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 110} from="left">
                  <Tilt3D intensity={8} perspective={800} depth={26} className="w-full">
                    <div className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                      <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 via-sky-400 to-emerald-400 opacity-70" />
                      <span className={`inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-bold text-white ring-1 transition-transform duration-300 group-hover:scale-105 ${numTones[i % numTones.length]}`}>
                        {s.num}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-slate-900">{s.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                      </div>
                    </div>
                  </Tilt3D>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal from="right" delay={120}>
            <Tilt3D intensity={14} perspective={1500} depth={60} float className="relative">
              <div className="relative">
                <div className="absolute -inset-8 -z-10 rounded-full bg-emerald-200/30 blur-3xl animate-pulse-glow" />
                <img
                  src="/images/dashboard.png"
                  alt="BlastWave 3D analytics dashboard"
                  className="w-full rounded-2xl shadow-lift ring-1 ring-slate-200/80"
                  loading="lazy"
                />
                <div className="absolute -bottom-5 -right-4 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-card ring-1 ring-slate-200/80">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Live analytics
                  </span>
                </div>
              </div>
            </Tilt3D>
          </Reveal>
        </div>
      </div>
    </section>
  );
}