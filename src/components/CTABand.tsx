import Reveal from "./Reveal";
import Ring3D from "./Ring3D";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/60 to-violet-50/50 py-20 lg:py-24">
      {/* elegant light base with blue + lavender ambience */}
      <div className="absolute inset-0 bg-white/40" />
      {/* 3D floating orbs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-200/50 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl animate-drift [animation-delay:-7s]" />

      {/* 3D ring decorations */}
      <Ring3D className="absolute -right-16 top-1/2 h-80 w-80 -translate-y-1/2" border="border-violet-300/60" duration={30} reverse />
      <Ring3D className="absolute -left-24 top-10 h-56 w-56" border="border-sky-300/60" duration={38} />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal from="down">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Start blasting in the next 5 minutes
          </h2>
        </Reveal>
        <Reveal from="up" delay={100}>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Join 12,000+ businesses already using BlastWave to reach millions of customers on SMS and WhatsApp.
          </p>
        </Reveal>
        <Reveal from="up" delay={180}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Start Free Trial
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card"
            >
              Contact Sales
            </a>
          </div>
        </Reveal>
        <Reveal from="up" delay={260}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600">
            {["No credit card required", "14-day free trial", "Cancel anytime"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
