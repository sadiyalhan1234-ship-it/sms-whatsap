const items = [
  "WhatsApp Business API",
  "Twilio",
  "MessageBird",
  "Salesforce",
  "HubSpot",
  "Shopify",
  "Zapier",
  "Slack",
  "Google Sheets",
  "Klaviyo",
  "Segment",
  "HubSpot",
];

export default function Marquee() {
  const row = [...items, ...items];
  const accents = [
    "from-emerald-100 to-teal-100 text-emerald-700 ring-emerald-200/60",
    "from-sky-100 to-blue-100 text-sky-700 ring-sky-200/60",
    "from-violet-100 to-purple-100 text-violet-700 ring-violet-200/60",
    "from-amber-100 to-orange-100 text-amber-700 ring-amber-200/60",
  ];
  return (
    <div className="relative overflow-hidden border-y border-indigo-100/70 bg-gradient-to-r from-blue-50/70 via-white to-violet-50/70 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-2.5 whitespace-nowrap">
            <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-[11px] font-bold ring-1 ${accents[i % accents.length]}`}>
              {item.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-sm font-semibold text-slate-500">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}