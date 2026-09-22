import { whereYouAre as c } from "@/lib/content";
import { Container, SectionHeader, headerGap, sectionPad } from "./Section";

export default function WhereYouAre() {
  return (
    <section id="about-you" className={`relative overflow-hidden ${sectionPad}`}>
      <Container>
        <SectionHeader eyebrow={c.eyebrow} title={c.title} body={c.body} size="md" />

        <div className={`grid gap-10 lg:grid-cols-12 lg:gap-8 ${headerGap}`}>
          <ol className="divide-y divide-line border-y border-line lg:col-span-7">
            {c.truths.map((t, i) => (
              <li
                key={t}
                className="group flex items-baseline gap-6 py-5 md:py-6"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              >
                <span className="roman w-8 shrink-0 text-lg transition-colors duration-500 group-hover:text-gold-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl font-light leading-snug text-bone/90 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-2 md:text-[1.6rem]">
                  {t}
                </p>
              </li>
            ))}
          </ol>

          <figure className="relative self-end pl-6 lg:col-span-4 lg:col-start-9" data-reveal>
            <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
            <blockquote className="font-display text-2xl font-light italic leading-[1.25] text-bone md:text-[1.75rem]">
              “{c.quote}”
            </blockquote>
            <figcaption className="mt-4 text-[0.62rem] uppercase tracking-[0.3em] text-gold">{c.quoteBy}</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
