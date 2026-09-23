import Link from "next/link";
import { invitation as c } from "@/lib/content";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { Corners, Diamond } from "./Ornaments";
import { Hourglass, Laurel } from "./Emblems";

const emblems = [Hourglass, Laurel];

export default function Invitation() {
  return (
    <section id="invitation" className={`relative isolate scroll-mt-24 overflow-hidden border-t border-gold/15 bg-ink-950 ${sectionPad}`}>
      <div className="absolute inset-0 -z-20 satin" />
      <span className="light left-1/2 top-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2" />
      <Container>
        <div data-reveal>
          <Heading
            title={
              <>
                {c.titleA}
                <br />
                <span className="italic text-gold-bright">{c.titleB}</span>
              </>
            }
            lead={c.closer}
          />
          <p className="caption reveal mx-auto mt-8 max-w-2xl text-center text-gold" style={stagger(3)}>
            {c.order}
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:mt-28 lg:grid-cols-2 lg:gap-10" data-reveal>
          {c.tiers.map((t, i) => {
            const Emblem = emblems[i % emblems.length];
            return (
            <article
              key={t.name}
              className={`panel reveal reveal-card flex flex-col p-8 md:p-12 ${t.featured ? "panel-featured" : ""}`}
              style={stagger(i, 150)}
            >
              <Corners inset={12} />
              <Emblem className="absolute right-8 top-8 h-[4.5rem] w-[4.5rem] text-gold/75 md:right-12 md:top-12 md:h-20 md:w-20" />
              <p className="caption pr-24 text-gold">{t.tier}</p>
              <h3 className="mt-4 max-w-[9ch] font-display text-[2.4rem] leading-none text-bone md:text-[3rem]">{t.name}</h3>
              <p className="mt-7 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="font-display text-[2.4rem] leading-none text-gold-bright md:text-[2.8rem]">{t.price}</span>
                <span className="caption">{t.terms}</span>
              </p>

              <p className="mt-8 max-w-[50ch] text-[1rem] leading-[1.8] text-bone-70">{t.body}</p>

              <ul className="mt-8 divide-y divide-gold/15 border-y border-gold/15">
                {t.includes.map((inc) => (
                  <li key={inc} className="flex items-baseline gap-4 py-3.5 text-[0.95rem] leading-[1.6] text-bone">
                    <Diamond className="relative top-[-1px] h-1.5 w-1.5" />
                    {inc}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                {t.cta.external ? (
                  <a
                    href={t.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full ${t.featured ? "btn-gold" : "btn-ghost"}`}
                  >
                    {t.cta.label}
                  </a>
                ) : (
                  <Link href={t.cta.href} className={`btn w-full ${t.featured ? "btn-gold" : "btn-ghost"}`}>
                    {t.cta.label}
                  </Link>
                )}
                <p className="mt-5 text-[0.95rem] leading-[1.6] text-bone-50">{t.note}</p>
              </div>
            </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
