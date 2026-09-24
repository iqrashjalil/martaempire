import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { pillars as c } from "@/lib/content";
import { ColorField, Container, PageHero, Title, pad } from "@/components/ui";
import { Crop, FourPillars } from "@/components/Drafts";
import { Arch, Column, Container as ContainerMark, Horizon, Steps, Target } from "@/components/Marks";
import sofa from "@/public/images/marta-sofa.jpg";
import hallway from "@/public/images/marta-hallway.jpg";
import desk from "@/public/images/marta-desk.jpg";
import mirror from "@/public/images/marta-mirror.jpg";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

/** Each pillar gets a photograph, alternating sides. */
const visuals: { photo: StaticImageData; alt: string; pos?: string }[] = [
  { photo: sofa, alt: "Marta Szkudlarek seated on a sofa with her laptop" },
  { photo: desk, alt: "Marta Szkudlarek at her desk" },
  { photo: hallway, alt: "Marta Szkudlarek laughing in a hallway", pos: "object-[50%_18%]" },
  { photo: mirror, alt: "Marta Szkudlarek standing before an arched mirror", pos: "object-[50%_25%]" },
];

const decisionMarks = [Steps, Arch, Target, Horizon, ContainerMark, Column];

export default function PillarsPage() {
  return (
    <>
      <PageHero
        crumb="Pillars"
        titleA={c.hero.titleA}
        titleB={c.hero.titleB}
        lead={c.hero.lead}
        aside={
          <div className="flex justify-center" data-reveal>
            <FourPillars className="w-full max-w-[16rem] lg:max-w-[22rem]" />
          </div>
        }
      >
        <nav aria-label="Pillars" className="flex flex-wrap gap-x-8 gap-y-3">
          {c.items.map((p) => (
            <a key={p.n} href={`#${slug(p.title)}`} className="link">
              <span className="index">{p.n}</span> {p.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* ── The four pillars ── */}
      {c.items.map((p, i) => {
        const v = visuals[i];
        const flip = i % 2 === 1;
        return (
          <section
            key={p.n}
            id={slug(p.title)}
            className={`relative scroll-mt-20 border-b border-rule ${i % 2 === 1 ? "bg-paper-2" : ""} ${pad}`}
          >
            <Container>
              <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
                <div className={`lg:col-span-5 ${flip ? "lg:order-last lg:col-start-8" : ""}`} data-reveal>
                  <div className="drift relative">
                      <Crop />
                      <div className="photo reveal-photo aspect-[4/5]">
                        <Image
                          src={v.photo}
                          alt={v.alt}
                          fill
                          placeholder="blur"
                          sizes="(max-width: 1024px) 100vw, 36vw"
                          className={`object-cover ${v.pos ?? ""}`}
                        />
                      </div>
                    </div>
                </div>

                <div className={`lg:col-span-6 ${flip ? "lg:col-start-1" : "lg:col-start-7"}`} data-reveal>
                  <div className="reveal flex items-baseline gap-5">
                    <span className="index text-[1.6rem]">{p.n}</span>
                    <h2 className="display-lg">{p.title}</h2>
                  </div>
                  <ul className="reveal mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="border border-rule-strong px-3 py-1.5 text-[0.82rem] text-ink-70">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="reveal mt-12 grid gap-8 border-t border-ink pt-8 md:grid-cols-2">
                    <div>
                      <p className="label">Who she becomes</p>
                      <p className="mt-4 font-display text-[1.55rem] leading-[1.25]">{p.becomes}</p>
                    </div>
                    <div>
                      <p className="label">What she does</p>
                      <p className="body mt-4">{p.does}</p>
                    </div>
                  </div>
                  <p className="reveal mt-10 flex items-baseline gap-4 font-display text-[1.35rem] italic text-burgundy">
                    <span aria-hidden className="relative top-[-0.3em] block h-px w-8 shrink-0 bg-burgundy" />
                    {p.mantra}
                  </p>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* ── Where the work lands ── */}
      <section className={`relative ${pad}`}>
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10" data-reveal>
            <Title a={c.decisions.titleA} b={c.decisions.titleB} className="reveal lg:col-span-7" />
            <p className="body reveal lg:col-span-4 lg:col-start-9">{c.decisions.body}</p>
          </div>
          <ul className="mt-14 border-t border-ink" data-reveal>
            {c.decisions.items.map((d, i) => {
              const M = decisionMarks[i];
              return (
                <li
                  key={d.title}
                  className="reveal group grid grid-cols-[3rem_1fr] items-start gap-x-6 gap-y-3 border-b border-rule-strong py-7 md:grid-cols-[4rem_minmax(0,5fr)_minmax(0,6fr)] md:gap-x-10 md:py-8"
                >
                  <M className="h-11 w-11 md:h-12 md:w-12" />
                  <h3 className="font-display text-[1.7rem] leading-[1.1] transition-colors duration-300 group-hover:text-burgundy md:text-[2rem]">
                    {d.title}
                  </h3>
                  <p className="col-start-2 max-w-[48ch] text-[0.98rem] leading-[1.7] text-ink-70 md:col-start-3 md:pt-1.5">{d.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <ColorField titleA={c.cta.titleA} titleB={c.cta.titleB} primary={c.cta.primary} secondary={c.cta.secondary} />
    </>
  );
}
