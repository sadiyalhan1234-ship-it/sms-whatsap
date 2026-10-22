import PhoneMockup from "./PhoneMockup";
import Tilt3D from "./Tilt3D";
import Ring3D from "./Ring3D";
import Reveal from "./Reveal";

export default function Hero() {
  const avatars = [
    "from-emerald-400 to-teal-600",
    "from-sky-400 to-blue-600",
    "from-violet-400 to-purple-600",
    "from-amber-400 to-orange-500",
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* background glows with 3D drift */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/90 via-white to-violet-50/40" />
      <div className="absolute -top-32 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-200/40 blur-3xl animate-drift" />
      <div className="absolute top-40 -left-32 -z-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl animate-drift [animation-delay:-6s]" />
      <div className="absolute bottom-0 right-1/3 -z-10 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl animate-drift [animation-delay:-11s]" />

      {/* 3D perspective floor grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] opacity-[0.35]"
        style={{
          perspective: "600px",
          perspectiveOrigin: "50% 0%",
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.16) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          transform: "rotateX(72deg)",
          transformOrigin: "top center",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal from="down" delay={40}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Trusted by 12,000+ businesses worldwide
              </span>
            </Reveal>

            <Reveal from="up" delay={120}>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.08] sm:text-5xl lg:text-6xl">
                Reach your audience instantly with{" "}
                <span className="text-gradient-emerald">SMS &amp; WhatsApp</span> blasts
              </h1>
            </Reveal>

            <Reveal from="up" delay={200}>
              <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
                Send bulk messages, automate campaigns, and engage customers at scale. BlastWave delivers your
                messages in seconds with 99.9% delivery rates across 190+ countries.
              </p>
            </Reveal>

            <Reveal from="up" delay={280}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-primary transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-700 hover:to-teal-700 hover:shadow-lift"
                >
                  Start Free Trial
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-6 py-3.5 text-base font-semibold text-slate-700 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-card"
                >
                  <svg className="mr-2 h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  Watch Demo
                </a>
              </div>
            </Reveal>

            <Reveal from="up" delay={360}>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["A", "B", "C", "D"].map((l, i) => (
                      <div
                        key={i}
                        className={`h-9 w-9 rounded-full bg-gradient-to-br ring-2 ring-white flex items-center justify-center text-xs font-bold text-white ${avatars[i % avatars.length]}`}
                        style={{ transform: `translateZ(${i * 6}px)` }}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-amber-400">
                      {"★★★★★".split("").map((s, i) => (
                        <span key={i}>{s}</span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">4.9/5 from 2,400+ reviews</p>
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div className="flex gap-6">
                  {[
                    { v: "2.4B", l: "Messages" },
                    { v: "190+", l: "Countries" },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="text-xl font-extrabold text-slate-900">{s.v}</p>
                      <p className="text-xs text-slate-500">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3D phone scene */}
          <div className="relative">
            <Tilt3D intensity={9} perspective={1500} depth={30} className="relative">
              <PhoneMockup />
            </Tilt3D>

            {/* orbiting 3D rings */}
            <Ring3D className="absolute -inset-16 -z-10" border="border-indigo-200/70" duration={30} />
          </div>
        </div>
      </div>
    </section>
  );
}
