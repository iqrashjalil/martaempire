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

        <div className={`grid gap-8 lg:grid-cols-12 lg:gap-6 ${headerGap}`}>
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            {c.areas.map((a, i) => (
              <article
                key={a.n}
                className="card-luxe group !border-0 bg-ink-900 p-5 md:p-6"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 80 + Math.floor(i / 3) * 60}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="roman text-xl">{a.n}</span>
                  <span className="h-px w-8 bg-line-strong transition-all duration-700 group-hover:w-12 group-hover:bg-gold" />
                </div>
                <h3 className="mt-3 font-display text-[1.25rem] font-normal leading-tight text-bone">{a.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-[1.65] text-bone-50 transition-colors duration-500 group-hover:text-bone-70">
                  {a.body}
                </p>
              </article>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="arch-frame mx-auto w-[70%] max-w-[300px] lg:w-full" data-reveal="right">
              <div className="arch relative aspect-[3/4] overflow-hidden">
                <Image
                  src={desk}
                  alt="Marta Szkudlarek at her desk"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 70vw, 22vw"
                  className="object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-display text-base italic leading-tight text-bone">
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
