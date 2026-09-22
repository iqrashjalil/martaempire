import { transformation as c } from "@/lib/content";
import { Container, Eyebrow } from "./Section";

export default function Transformation() {
  return (
    <section id="transformation" className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-28 md:py-40">
      <div className="absolute right-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full glow-gold blur-3xl opacity-60" />
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow className="justify-center">{c.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-8 text-bone" data-reveal>
            <span className="block text-bone-50 line-through decoration-gold/40 decoration-1">{c.titleA}</span>
            <span className="block italic">
              <span className="gold-text">{c.titleB}</span>
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-6 pb-4 text-[0.62rem] uppercase tracking-[0.3em] text-bone-30 md:grid">
            <span>Before</span>
            <span className="w-16" />
            <span className="text-right text-gold">After</span>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {c.rows.map((r, i) => (
              <li
                key={r.from}
                className="group grid items-center gap-4 py-8 md:grid-cols-[1fr_auto_1fr] md:gap-6 md:py-10"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <p className="font-display text-xl font-light text-bone-50 transition-colors duration-500 group-hover:text-bone-30 md:text-2xl">
                  {r.from}
                </p>
                <span className="relative flex h-10 w-16 items-center justify-center">
                  <span className="h-px w-full bg-line-strong transition-colors duration-500 group-hover:bg-gold" />
                  <span className="absolute right-0 h-2 w-2 rotate-45 border-r border-t border-line-strong transition-all duration-500 group-hover:translate-x-1 group-hover:border-gold" />
                </span>
                <p className="font-display text-xl font-normal text-bone transition-all duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-2 group-hover:text-gold-bright md:text-right md:text-2xl">
                  {r.to}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center" data-reveal>
          <p className="font-display text-2xl font-light text-bone-70">{c.closerA}</p>
          <p className="mt-3 font-display text-3xl italic leading-tight text-gold md:text-4xl">{c.closerB}</p>
        </div>
      </Container>
    </section>
  );
}
