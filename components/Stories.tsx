import { stories as c } from "@/lib/content";
import { Container, Eyebrow } from "./Section";

export default function Stories() {
  return (
    <section id="stories" className="relative scroll-mt-24 overflow-hidden py-28 md:py-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-8 text-bone" data-reveal>
              {c.titleA}
              <br />
              <span className="italic text-gold">{c.titleB}</span>
            </h2>
          </div>
          <p className="self-end text-bone-70 lg:col-span-4 lg:col-start-9" data-reveal>
            {c.body}
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-24">
          {c.items.map((s, i) => (
            <article
              key={s.who}
              className="card-luxe group p-8 md:p-10"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.62rem] uppercase tracking-[0.3em] text-bone-30">Case {String(i + 1).padStart(2, "0")}</span>
                <span className="text-gold/60 transition-colors duration-500 group-hover:text-gold">✦</span>
              </div>
              <h3 className="mt-6 font-display text-[1.75rem] font-light leading-tight text-bone md:text-3xl">{s.who}</h3>

              <dl className="mt-8 space-y-6 border-t border-line pt-8">
                {[
                  ["What it was costing", s.cost],
                  ["The decision", s.decision],
                  ["What changed", s.change],
                ].map(([k, v], j) => (
                  <div key={k} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <dt className={`text-[0.62rem] uppercase tracking-[0.26em] ${j === 2 ? "text-gold" : "text-bone-30"}`}>
                      {k}
                    </dt>
                    <dd className={`text-[0.93rem] leading-[1.75] ${j === 2 ? "text-bone" : "text-bone-70"}`}>{v}</dd>
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
