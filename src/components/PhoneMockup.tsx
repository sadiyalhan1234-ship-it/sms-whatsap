type Bubble = {
  text: string;
  time: string;
  mine?: boolean;
  delay: number;
};

const bubbles: Bubble[] = [
  { text: "Hi Rahul! Your order #RW4821 is out for delivery 🚚", time: "10:02 AM", mine: false, delay: 0 },
  { text: "Great! Please keep me posted on the ETA.", time: "10:03 AM", mine: true, delay: 600 },
  { text: "You'll receive a live tracking link in a moment.", time: "10:03 AM", mine: false, delay: 1200 },
  { text: "Thanks! And here's 10% off your next order 🎁", time: "10:04 AM", mine: true, delay: 1800 },
];

export default function PhoneMockup() {
  return (
    <div className="perspective-3d relative mx-auto" style={{ perspective: "1400px" }}>
      <div
        className="preserve-3d relative mx-auto w-[270px] sm:w-[300px]"
        style={{
          transform: "rotateX(10deg) rotateY(-16deg) rotateZ(2deg)",
        }}
      >
        {/* glow behind phone */}
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-emerald-400/25 blur-3xl animate-pulse-glow" />

        {/* phone body */}
        <div className="preserve-3d relative rounded-[2.6rem] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 p-[10px] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.65)] ring-1 ring-white/10">
          {/* side buttons */}
          <span className="absolute -right-[3px] top-28 h-14 w-[3px] rounded-r bg-slate-600" />
          <span className="absolute -left-[3px] top-24 h-9 w-[3px] rounded-l bg-slate-600" />

          <div className="relative overflow-hidden rounded-[2.1rem] bg-slate-950">
            {/* notch */}
            <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" />

            {/* app header */}
            <div className="flex items-center gap-2 bg-emerald-600 px-4 pb-3 pt-8 text-white">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                B
              </span>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold">BlastWave</p>
                <p className="text-[10px] text-emerald-50/80">online</p>
              </div>
              <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            {/* chat area */}
            <div className="relative h-[400px] space-y-2 overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.16),transparent_45%),#0b1220] px-3 py-4">
              {bubbles.map((b) => (
                <div
                  key={b.text.slice(0, 12)}
                  className={`animate-bubble-in flex ${b.mine ? "justify-end" : "justify-start"}`}
                  style={{ animationDelay: `${b.delay}ms` }}
                >
                  <div
                    className={`max-w-[78%] rounded-2xl px-3 py-2 text-[11px] leading-snug shadow-lg ${
                      b.mine
                        ? "rounded-br-md bg-emerald-500 text-white"
                        : "rounded-bl-md bg-slate-800 text-slate-100"
                    }`}
                  >
                    {b.text}
                    <span className={`ml-2 text-[8px] ${b.mine ? "text-emerald-100" : "text-slate-400"}`}>
                      {b.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* input bar */}
            <div className="flex items-center gap-2 border-t border-white/5 bg-slate-900 px-3 py-3">
              <span className="h-8 flex-1 rounded-full bg-slate-800" />
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                </svg>
              </span>
            </div>

            {/* screen glare */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />
          </div>
        </div>

        {/* floating 3D layer 1 */}
        <div
          className="preserve-3d absolute -left-8 top-16 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 shadow-card backdrop-blur sm:-left-14"
          style={{ transform: "translateZ(70px)", animation: "floatFast 6s ease-in-out infinite" }}
        >
          <p className="text-[10px] font-semibold text-slate-500">Delivered</p>
          <p className="text-sm font-bold text-emerald-600">99.9%</p>
        </div>

        {/* floating 3D layer 2 */}
        <div
          className="preserve-3d absolute -right-6 top-52 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 shadow-card backdrop-blur sm:-right-12"
          style={{ transform: "translateZ(110px)", animation: "floatSlow 9s ease-in-out infinite" }}
        >
          <p className="text-[10px] font-semibold text-slate-500">Messages sent</p>
          <p className="text-sm font-bold text-slate-900">10,000</p>
        </div>

        {/* floating 3D layer 3 */}
        <div
          className="preserve-3d absolute -bottom-6 left-2 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 shadow-card backdrop-blur sm:left-10"
          style={{ transform: "translateZ(90px)", animation: "floatFast 7.5s ease-in-out infinite reverse" }}
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <p className="text-[11px] font-semibold text-slate-700">Sent in 4.2s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
