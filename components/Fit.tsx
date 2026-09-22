import { fit as c } from "@/lib/content";
import { Container, SectionHeader, headerGap, sectionPad } from "./Section";

export default function Fit() {
  return (
    <section id="for-you" className={`relative scroll-mt-24 overflow-hidden bg-ink-950 ${sectionPad}`}>
      <Container>
        <SectionHeader
          eyebrow={c.eyebrow}
          title={
            <>
              {c.titleA} <span className="italic text-gold">{c.titleB}</span>
            </>
          }
        />

        <div className={`grid overflow-hidden border border-line lg:grid-cols-2 ${headerGap}`}>
          <div className="relative p-7 md:p-10" data-reveal="left">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/[0.07] to-transparent" />
            <h3 className="font-display text-2xl font-light text-bone md:text-3xl">
              {c.forTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-gold">{c.forTitle.split(" ").slice(-1)}</span>
            </h3>
            <ul className="mt-6 space-y-4">
              {c.forItems.map((t) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1 text-sm text-gold">✦</span>
                  <p className="font-display text-lg font-light leading-snug text-bone/90 md:text-xl">{t}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative border-t border-line p-7 md:p-10 lg:border-l lg:border-t-0" data-reveal="right">
            <h3 className="font-display text-2xl font-light text-bone-50 md:text-3xl">
              {c.notTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic">{c.notTitle.split(" ").slice(-1)}</span>
            </h3>
            <ul className="mt-6 space-y-4">
              {c.notItems.map((t) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1 text-sm text-bone-30">✕</span>
                  <p className="font-display text-lg font-light leading-snug text-bone-50 md:text-xl">{t}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
