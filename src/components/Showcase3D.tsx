import Tilt3D from "./Tilt3D";
import Ring3D from "./Ring3D";
import Reveal from "./Reveal";
import { useParallax } from "../hooks/useParallax";

const chips = [
  { label: "SMS Delivered", value: "99.9%", tone: "emerald" },
  { label: "Avg. Open Rate", value: "94%", tone: "sky" },
  { label: "Response Rate", value: "38%", tone: "violet" },
  { label: "Send Speed", value: "1.2M/min", tone: "amber" },
];

const toneMap: Record<string, string> = {
  emerald: "from-emerald-500 to-teal-500",
  sky: "from-sky-500 to-blue-500",
  violet: "from-violet-500 to-fuchsia-500",
  amber: "from-amber-400 to-orange-500",
};

export default function Showcase3D() {
  const { ref, progress } = useParallax<HTMLDivElement>();

  return (
    <section id="showcase" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/60 to-violet-50/40 text-slate-900">
      {/* 3D grid floor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[380px] opacity-25"
        style={{
          perspective: "700px",
          perspectiveOrigin: "50% 0%",
          backgroundImage:
            "linear-gradient(to right, rgba(100,116,139,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.16) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "rotateX(75deg)",
          transformOrigin: "top center",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-violet-200/50 blur-3xl animate-drift" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl animate-drift [animation-delay:-8s]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl animate-drift [animation-delay:-12s]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal from="down">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Live 3D Preview</span>
          </Reveal>
          <Reveal from="up" delay={80}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Watch your campaign come alive in real time
            </h2>
          </Reveal>
          <Reveal from="up" delay={140}>
            <p className="mt-4 text-lg text-slate-600">
              Interactive 3D dashboard with live delivery animations, engagement heatmaps and instant reporting.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* 3D stat chips with parallax */}
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            {chips.map((c, i) => (
              <Reveal key={c.label} delay={i * 90} from={i % 2 === 0 ? "left" : "right"}>
                <Tilt3D intensity={14} perspective={800} depth={45} className="h-full">
                  <div
                    className="h-full rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                    style={{
                      transform: `translateZ(${Math.round(progress * (i % 2 === 0 ? 30 : -30))}px)`,
                    }}
                  >
                    <div className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${toneMap[c.tone]}`} />
                    <p className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">{c.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">{c.label}</p>
                  </div>
                </Tilt3D>
              </Reveal>
            ))}
          </div>

          {/* 3D orbit visual */}
          <div className="order-1 lg:order-2">
            <Reveal from="up" delay={120}>
              <Tilt3D intensity={12} perspective={1600} depth={50} float className="relative mx-auto max-w-md">
                <div className="relative">
                  <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-violet-200/50 via-sky-200/40 to-emerald-200/40 blur-3xl animate-pulse-glow" />
                  <img
                    src="/images/hero-phone.png"
                    alt="3D render of a smartphone with SMS and WhatsApp blasts"
                    className="w-full rounded-3xl shadow-lift ring-1 ring-indigo-100/80"
                    loading="lazy"
                  />
                  <Ring3D className="absolute -inset-8" border="border-indigo-300/60" duration={34} />
                  {/* satellite 3D card */}
                  <div
                    className="preserve-3d absolute -bottom-8 -left-6 w-36 rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card backdrop-blur-md sm:-left-16"
                    style={{ transform: "translateZ(80px)", animation: "floatFast 7s ease-in-out infinite" }}
                  >
                    <img
                      src="/images/3d-orbit.png"
                      alt="3D orbiting message bubbles"
                      className="w-full rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Tilt3D>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}