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

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${headerGap}`}>
          {c.items.map((s, i) => (
            <article
              key={s.who}
              className="card-luxe group flex flex-col p-5 md:p-6"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-bone-30">
                  Case {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-gold/60 transition-colors duration-500 group-hover:text-gold">✦</span>
              </div>
              <h3 className="mt-3 font-display text-[1.3rem] font-light leading-tight text-bone">{s.who}</h3>

              <dl className="mt-4 space-y-3 border-t border-line pt-4">
                {[
                  ["What it cost", s.cost],
                  ["The decision", s.decision],
                  ["What changed", s.change],
                ].map(([k, v], j) => (
                  <div key={k}>
                    <dt className={`text-[0.58rem] uppercase tracking-[0.26em] ${j === 2 ? "text-gold" : "text-bone-30"}`}>
                      {k}
                    </dt>
                    <dd className={`mt-1 text-[0.86rem] leading-[1.6] ${j === 2 ? "text-bone" : "text-bone-70"}`}>{v}</dd>
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
