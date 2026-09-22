import Image from "next/image";
import { mechanism as c } from "@/lib/content";
import { Container, SectionHeader, headerGap, sectionPad } from "./Section";
import desk from "@/public/images/marta-desk.jpg";

export default function Mechanism() {
  return (
    <section id="mechanism" className={`relative scroll-mt-24 ${sectionPad}`}>
      <div className="absolute inset-x-0 top-0 gold-rule" />
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

        <div className={`grid gap-10 lg:grid-cols-12 lg:gap-8 ${headerGap}`}>
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {c.areas.map((a, i) => (
              <article
                key={a.n}
                className="card-luxe group !border-0 bg-ink-900 p-6 md:p-7"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 80 + Math.floor(i / 3) * 60}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="roman text-2xl">{a.n}</span>
                  <span className="h-px w-8 bg-line-strong transition-all duration-700 group-hover:w-12 group-hover:bg-gold" />
                </div>
                <h3 className="mt-5 font-display text-[1.35rem] font-normal leading-tight text-bone">{a.title}</h3>
                <p className="mt-3 text-[0.88rem] leading-[1.7] text-bone-50 transition-colors duration-500 group-hover:text-bone-70">
                  {a.body}
                </p>
              </article>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="arch-frame mx-auto w-[80%] max-w-[360px] lg:sticky lg:top-28 lg:w-full" data-reveal="right">
              <div className="arch relative aspect-[3/4] overflow-hidden">
                <Image
                  src={desk}
                  alt="Marta Szkudlarek at her desk"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 80vw, 28vw"
                  className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 font-display text-lg italic leading-tight text-bone">
                  “{c.closer}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
