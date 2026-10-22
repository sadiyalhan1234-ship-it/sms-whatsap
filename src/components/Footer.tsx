export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-indigo-50/60 text-slate-600 border-t border-indigo-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="BlastWave logo"
                className="h-12 w-auto rounded-lg object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-slate-900">BlastWave</span>
            </div>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              The all-in-one SMS &amp; WhatsApp blasting platform for modern businesses.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Integrations", "API Docs"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security", "GDPR"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold tracking-wide text-slate-900">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-500 transition-colors hover:text-indigo-600">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2026 BlastWave. All rights reserved.</p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <a key={s} href="#" className="text-xs text-slate-500 transition-colors hover:text-indigo-600">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}