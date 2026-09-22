import { whereYouAre as c } from "@/lib/content";
import { Container, Eyebrow } from "./Section";

export default function WhereYouAre() {
  return (
    <section id="about-you" className="relative overflow-hidden py-28 md:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <h2 className="display-md mt-8 text-bone" data-reveal>
                {c.title}
              </h2>
              <p className="mt-8 max-w-md leading-[1.85] text-bone-70" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
                {c.body}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-line border-y border-line">
              {c.truths.map((t, i) => (
                <li
                  key={t}
                  className="group flex items-baseline gap-6 py-7 md:gap-10 md:py-9"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                >
                  <span className="roman w-8 shrink-0 text-xl transition-colors duration-500 group-hover:text-gold-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-2xl font-light leading-snug text-bone/90 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-2 md:text-[1.9rem]">
                    {t}
                  </p>
                </li>
              ))}
            </ol>

            <figure className="relative mt-20 pl-8 md:pl-12" data-reveal>
              <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
              <blockquote className="font-display text-[1.7rem] font-light italic leading-[1.25] text-bone md:text-4xl">
                “{c.quote}”
              </blockquote>
              <figcaption className="mt-6 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                {c.quoteBy}
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
