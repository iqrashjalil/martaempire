import Image from "next/image";
import { about as c } from "@/lib/content";
import { Container, Eyebrow } from "./Section";
import sofa from "@/public/images/marta-sofa.jpg";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-28 md:py-40">
      <div className="absolute inset-x-0 top-0 gold-rule" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-8 text-bone" data-reveal>
              {c.titleA}
              <br />
              <span className="italic text-gold">{c.titleB}</span>
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-[1.85] text-bone-70" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
              {c.body}
            </p>

            <dl className="mt-12 grid max-w-lg grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3" data-reveal>
              {c.facts.map((f) => (
                <div key={f.k} className="bg-ink-900 p-5">
                  <dt className="text-[0.6rem] uppercase tracking-[0.28em] text-bone-30">{f.k}</dt>
                  <dd className="mt-2 font-display text-lg leading-tight text-bone">{f.v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-12 font-display text-3xl font-light italic text-bone" data-reveal>
              — Marta Szkudlarek
            </p>
          </div>

          <div className="relative lg:col-span-5 lg:col-start-8">
            <div className="absolute -inset-10 -z-10 rounded-full glow-gold blur-3xl opacity-70" />
            <div className="arch-frame mx-auto w-[85%] max-w-[460px] lg:w-full" data-reveal="right">
              <div className="arch relative aspect-[3/4] overflow-hidden">
                <Image
                  src={sofa}
                  alt="Marta Szkudlarek seated on a sofa with her laptop"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 85vw, 34vw"
                  className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
