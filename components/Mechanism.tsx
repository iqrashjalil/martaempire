import Image from "next/image";
import { mechanism as c } from "@/lib/content";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { Divider } from "./Ornaments";
import { Compass, Crown, Key, Queen, Rope, Scales } from "./Emblems";

const emblems = [Scales, Key, Compass, Crown, Rope, Queen];
import mirror from "@/public/images/marta-mirror.jpg";

export default function Mechanism() {
  return (
    <section id="mechanism" className={`relative isolate scroll-mt-24 overflow-hidden border-t border-gold/15 ${sectionPad}`}>
      <div className="parallax-bg absolute inset-0 -z-20 overflow-hidden">
        <Image src={mirror} alt="" fill sizes="100vw" className="object-cover object-[50%_30%] opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/70 to-ink-900" />
      </div>
      <span className="light right-[-10%] top-[10%] -z-10 h-[40rem] w-[40rem]" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12" data-reveal>
          <div className="lg:col-span-7">
            <Heading
              align="left"
              title={
                <>
                  {c.titleA}
                  <br />
                  <span className="italic text-gold-bright">{c.titleB}</span>
                </>
              }
            />
          </div>
          <p className="prose-body reveal self-end lg:col-span-4 lg:col-start-9" style={stagger(3)}>
            {c.body}
          </p>
        </div>

        <ul className="mt-20 grid border-t border-gold/20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3" data-reveal>
          {c.areas.map((a, i) => {
            const Emblem = emblems[i % emblems.length];
            return (
            <li
              key={a.n}
              className="reveal reveal-card group relative border-b border-gold/20 px-0 py-10 sm:px-8 lg:px-10 [&:nth-child(3n)]:lg:border-r-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-gold/20 lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r lg:[&:not(:nth-child(3n))]:border-gold/20"
              style={stagger(i, 200)}
            >
              <span className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/[0.07] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <Emblem className="absolute right-0 top-8 h-14 w-14 text-gold/70 transition-colors duration-500 group-hover:text-gold-bright sm:right-8 lg:right-10" />
              <span className="numeral text-3xl">{a.n}</span>
              <h3 className="mt-6 pr-16 font-display text-2xl leading-tight text-bone md:text-[1.8rem]">{a.title}</h3>
            </li>
            );
          })}
        </ul>

        <div className="mt-16 text-center" data-reveal>
          <p className="reveal font-display text-2xl italic text-gold md:text-[1.9rem]" style={stagger(0)}>
            {c.closer}
          </p>
          <div className="reveal mt-6" style={stagger(1)}>
            <Divider />
          </div>
        </div>
      </Container>
    </section>
  );
}
