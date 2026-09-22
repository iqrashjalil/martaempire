import { mantras } from "@/lib/content";

export default function Marquee() {
  const items = [...mantras, ...mantras];
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-ink-950/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-900 to-transparent" />
      <div className="marquee-track gap-12">
        {items.map((m, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-12 whitespace-nowrap font-display text-xl font-light italic text-bone-70 md:text-2xl"
          >
            {m}
            <span className="text-xs text-gold not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
