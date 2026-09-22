import { fit as c } from "@/lib/content";
import { Container } from "./Section";

export default function Fit() {
  return (
    <section id="for-you" className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-28 md:py-36">
      <Container>
        <div className="grid overflow-hidden border border-line lg:grid-cols-2">
          <div className="relative p-8 md:p-14" data-reveal="left">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/[0.07] to-transparent" />
            <h3 className="font-display text-3xl font-light text-bone md:text-4xl">
              {c.forTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-gold">{c.forTitle.split(" ").slice(-1)}</span>
            </h3>
            <ul className="mt-10 space-y-5">
              {c.forItems.map((t) => (
                <li key={t} className="flex gap-5">
                  <span className="mt-1.5 text-sm text-gold">✦</span>
                  <p className="font-display text-xl font-light leading-snug text-bone/90">{t}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative border-t border-line p-8 md:p-14 lg:border-l lg:border-t-0" data-reveal="right">
            <h3 className="font-display text-3xl font-light text-bone-50 md:text-4xl">
              {c.notTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic">{c.notTitle.split(" ").slice(-1)}</span>
            </h3>
            <ul className="mt-10 space-y-5">
              {c.notItems.map((t) => (
                <li key={t} className="flex gap-5">
                  <span className="mt-1.5 text-sm text-bone-30">✕</span>
                  <p className="font-display text-xl font-light leading-snug text-bone-50">{t}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
