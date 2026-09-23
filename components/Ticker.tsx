import { mantras } from "@/lib/content";
import { Diamond } from "./Ornaments";

/** The mantras, passing slowly along a gold rule. */
export default function Ticker() {
  const items = [...mantras, ...mantras];
  return (
    <div className="marquee relative overflow-hidden border-y border-gold/20 bg-ink-950/60 py-6" aria-label="Mantras">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-ink-900 to-transparent" />
      <div className="marquee-track items-center gap-14">
        {items.map((m, i) => (
          <span key={i} className="flex shrink-0 items-center gap-14 whitespace-nowrap font-display text-xl italic text-bone-70 md:text-2xl">
            {m}
            <Diamond className="h-2 w-2 opacity-80" />
          </span>
        ))}
      </div>
    </div>
  );
}
