import Image from "next/image";
import { mechanism as c } from "@/lib/content";
import { Container, Eyebrow } from "./Section";
import desk from "@/public/images/marta-desk.jpg";

export default function Mechanism() {
  return (
    <section id="mechanism" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="absolute inset-x-0 top-0 gold-rule" />
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Sticky portrait */}
          <div className="order-last lg:order-first lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="arch-frame" data-reveal="left">
                <div className="arch relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={desk}
                    alt="Marta Szkudlarek at her desk"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 90vw, 30vw"
                    className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                  <p className="absolute bottom-6 left-6 right-6 font-display text-xl italic leading-tight text-bone">
                    “{c.closer}”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-8 text-bone" data-reveal>
              {c.titleA}
              <br />
              <span className="italic text-gold">{c.titleB}</span>
            </h2>
            <p className="mt-8 max-w-2xl leading-[1.85] text-bone-70" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
              {c.body}
            </p>

            <div className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {c.areas.map((a, i) => (
                <article
                  key={a.n}
                  className="card-luxe group !border-0 bg-ink-900 p-8 md:p-10"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${(i % 2) * 90 + Math.floor(i / 2) * 60}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="roman text-3xl">{a.n}</span>
                    <span className="h-px w-10 bg-line-strong transition-all duration-700 group-hover:w-16 group-hover:bg-gold" />
                  </div>
                  <h3 className="mt-8 font-display text-[1.7rem] font-normal leading-tight text-bone">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-[0.92rem] leading-[1.8] text-bone-50 transition-colors duration-500 group-hover:text-bone-70">
                    {a.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
