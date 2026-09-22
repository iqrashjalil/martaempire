import Image from "next/image";
import { oneWoman as c } from "@/lib/content";
import { Container, Ornament } from "./Section";
import bed from "@/public/images/marta-bed.jpg";

export default function OneWoman() {
  return (
    <section id="one-woman" className="relative isolate overflow-hidden py-40 md:py-56">
      <div className="absolute inset-0 -z-10">
        <Image
          src={bed}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[50%_30%] opacity-40 grayscale-[35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/55 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent,rgba(11,10,9,0.85))]" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Ornament />
          <h2 className="mt-10 font-display text-[clamp(2.4rem,7vw,6.5rem)] font-light leading-[0.95] tracking-tight text-bone">
            {c.words.map((w, i) => (
              <span
                key={w}
                className="mr-[0.25em] inline-block"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 140}ms` }}
              >
                {w}
              </span>
            ))}
            <span
              className="mt-2 block italic"
              data-reveal
              style={{ ["--reveal-delay" as string]: "460ms" }}
            >
              <span className="gold-text">{c.title}</span>
            </span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-[1.85] text-bone-70" data-reveal>
            {c.body}
          </p>
          <p className="mt-10 text-[0.68rem] uppercase tracking-[0.34em] text-gold" data-reveal>
            {c.closer}
          </p>
        </div>
      </Container>
    </section>
  );
}
