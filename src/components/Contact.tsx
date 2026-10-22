import { useState } from "react";
import Tilt3D from "./Tilt3D";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const field =
    "mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition-all duration-200 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 hover:border-indigo-200";

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-white via-violet-50/50 to-blue-50/40">
      <div className="absolute inset-0 -z-10 bg-white/40" />
      <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl animate-drift" />
      <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl animate-drift [animation-delay:-6s]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal from="down">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Get started</span>
            </Reveal>
            <Reveal from="up" delay={80}>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to reach more customers?
              </h2>
            </Reveal>
            <Reveal from="up" delay={140}>
              <p className="mt-4 text-lg text-slate-600">
                Start your free trial today or talk to our team about a custom plan. We'll get you sending in minutes.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {[
                { icon: "📧", label: "Email", value: "tech@kaalamithra-ai.com" },
                { icon: "📞", label: "Phone 1", value: "+91 88840 14055" },
                { icon: "📞", label: "Phone 2", value: "+91 99727 70266" },
                { icon: "📞", label: "Phone 3", value: "+91 63618 42299" },
                { icon: "📍", label: "Office", value: "Samruddhi Archade 2nd floor Prashanthnagara, Devarayapattana, main road, Batawadi, Tumakur, Karnataka 572104, India" },
                { icon: "🕘", label: "Support hours", value: "24/7 live chat" },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 70} from="left">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-soft ring-1 ring-slate-200/80">
                      {c.icon}
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">{c.label}</p>
                      <p className="text-sm font-medium text-slate-900">{c.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal from="right" delay={100}>
            <Tilt3D intensity={9} perspective={1400} depth={40} className="h-full">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 animate-pulse-glow">
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">Thanks! We'll be in touch.</h3>
                    <p className="mt-2 text-sm text-slate-600">Our team will reach out within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-medium text-emerald-600 hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Name</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={field}
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Email</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={field}
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Company</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={field}
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={field}
                        placeholder="Tell us about your messaging needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lift"
                    >
                      Send message
                    </button>
                  </form>
                )}
              </div>
            </Tilt3D>
          </Reveal>
        </div>
      </div>
    </section>
  );
}