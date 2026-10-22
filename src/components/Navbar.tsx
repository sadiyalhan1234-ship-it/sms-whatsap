import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how" },
  { label: "Live 3D", href: "#showcase" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = ["home", "how", "showcase", "faq", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(`#${current}`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-soft backdrop-blur-xl border-b border-slate-200/70" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group flex items-center gap-2">
            <img
              src="/logo.png"
              alt="BlastWave logo"
              className="h-12 w-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg font-bold text-slate-900">BlastWave</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors ${
                  active === l.href ? "text-emerald-600" : "text-slate-600 hover:text-emerald-600"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-emerald-500 transition-all duration-300 ${
                    active === l.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600">
              Log in
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-primary"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-[420px] border-t border-slate-100 bg-white/95 backdrop-blur-xl" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-4 py-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-slate-900 px-3 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}