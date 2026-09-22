import { stories as c } from "@/lib/content";
import { Container, SectionHeader, headerGap, sectionPad } from "./Section";

export default function Stories() {
  return (
    <section id="stories" className={`relative scroll-mt-24 overflow-hidden ${sectionPad}`}>
      <Container>
        <SectionHeader
          eyebrow={c.eyebrow}
          title={
            <>
              {c.titleA}
              <br />
              <span className="italic text-gold">{c.titleB}</span>
            </>
          }
          body={c.body}
        />

        <div className={`grid gap-4 md:grid-cols-2 ${headerGap}`}>
          {c.items.map((s, i) => (
            <article
              key={s.who}
              className="card-luxe group p-6 md:p-7"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-bone-30">
                  Case {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-gold/60 transition-colors duration-500 group-hover:text-gold">✦</span>
              </div>
              <h3 className="mt-4 font-display text-[1.4rem] font-light leading-tight text-bone md:text-2xl">{s.who}</h3>

              <dl className="mt-5 space-y-3.5 border-t border-line pt-5">
                {[
                  ["What it cost", s.cost],
                  ["The decision", s.decision],
                  ["What changed", s.change],
                ].map(([k, v], j) => (
                  <div key={k} className="grid gap-1.5 sm:grid-cols-[7.5rem_1fr] sm:gap-5">
                    <dt className={`text-[0.6rem] uppercase tracking-[0.26em] ${j === 2 ? "text-gold" : "text-bone-30"}`}>
                      {k}
                    </dt>
                    <dd className={`text-[0.9rem] leading-[1.65] ${j === 2 ? "text-bone" : "text-bone-70"}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
