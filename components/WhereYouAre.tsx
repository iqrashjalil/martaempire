import Image from "next/image";
import { whereYouAre as c } from "@/lib/content";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { Frame } from "./Ornaments";
import sofa from "@/public/images/marta-sofa.jpg";

const numerals = ["I", "II", "III", "IV", "V", "VI"];

export default function WhereYouAre() {
  return (
    <section id="about-you" className={`relative overflow-hidden ${sectionPad}`}>
      <span className="light left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <Container>
        <div data-reveal>
          <Heading title={c.title} lead={c.body} />
        </div>

        <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-12" data-reveal>
          <ol className="lg:col-span-7">
            {c.truths.map((t, i) => (
              <li
                key={t}
                className="reveal reveal-card group flex items-baseline gap-6 border-b border-line py-7 first:border-t md:py-8"
                style={stagger(i)}
              >
                <span className="numeral w-10 shrink-0 text-2xl transition-colors duration-500 group-hover:text-gold-bright">
                  {numerals[i]}
                </span>
                <p className="font-display text-2xl leading-snug text-bone md:text-[1.9rem]">{t}</p>
              </li>
            ))}
          </ol>

          <figure className="mx-auto w-[82%] max-w-[380px] self-center lg:col-span-4 lg:col-start-9 lg:w-full lg:max-w-none" data-reveal>
            <div className="drift-slow">
              <Frame offset="right">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={sofa}
                    alt="Marta Szkudlarek seated on a sofa with her laptop"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 82vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </Frame>
            </div>
            <blockquote className="reveal mt-10 font-display text-[1.5rem] italic leading-[1.3] text-bone md:text-[1.7rem]" style={stagger(4)}>
              “{c.quote}”
            </blockquote>
            <figcaption className="caption reveal mt-5 text-gold" style={stagger(5)}>
              {c.quoteBy}
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
