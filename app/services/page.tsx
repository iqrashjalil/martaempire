import type { Metadata } from "next";
import Image from "next/image";
import { services as c } from "@/lib/content";
import { Action, ColorField, Container, PageHero, Title, pad } from "@/components/ui";
import { Hourglass } from "@/components/Marks";
import { Crop, Fit, Level } from "@/components/Drafts";
import hallway from "@/public/images/marta-hallway.jpg";
import bed from "@/public/images/marta-bed.jpg";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function ServicesPage() {
  const [truth, vip] = c.tiers;

  return (
    <>
      <PageHero
        crumb="Services"
        titleA={c.hero.titleA}
        titleB={c.hero.titleB}
        lead={c.hero.lead}
        photo={{ src: hallway, alt: "Marta Szkudlarek laughing in a hallway", pos: "object-[50%_18%]" }}
      />

      {/* ── The Truth Session: the entry ── */}
      <section id={truth.id} className={`relative scroll-mt-20 ${pad}`}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10" data-reveal>
            <div className="lg:col-span-5">
              <div className="reveal flex items-baseline gap-5">
                <span className="index text-[1.6rem]">{truth.index}</span>
                <h2 className="display-lg">{truth.name}</h2>
              </div>
              <p className="reveal mt-10 font-display text-[4.5rem] leading-none text-burgundy md:text-[6rem]">{truth.price}</p>
              <p className="reveal mt-4 text-[0.98rem] text-ink-55">
                {truth.tier} · {truth.terms}
              </p>
              <p className="lead reveal mt-10">{truth.body}</p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="reveal reveal-card border border-ink p-8 md:p-12">
                <div className="flex items-start justify-between gap-6">
                  <p className="label">What you receive</p>
                  <Hourglass className="h-14 w-14" />
                </div>
                <ul className="mt-8 border-t border-rule-strong">
                  {truth.includes.map((inc) => (
                    <li key={inc} className="flex items-baseline gap-4 border-b border-rule py-4 text-[1rem]">
                      <span aria-hidden className="relative top-[-2px] block h-1.5 w-1.5 shrink-0 bg-burgundy" />
                      {inc}
                    </li>
                  ))}
                </ul>

                <p className="label mt-12">After you book</p>
                <ol className="mt-5 space-y-3">
                  {truth.after.map((step, i) => (
                    <li key={step} className="grid grid-cols-[2rem_1fr] text-[0.98rem] text-ink-70">
                      <span className="index text-[1.1rem]">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>

                <div className="mt-12 flex flex-col gap-4">
                  <Action action={truth.cta} variant="primary" className="w-full" />
                  <p className="text-[0.92rem] text-ink-55">{truth.note}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── VIP Mentoring: the container ── */}
      <section id={vip.id} className={`relative scroll-mt-20 border-t border-rule bg-paper-2 ${pad}`}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="order-last lg:order-first lg:col-span-5" data-reveal>
              <div className="drift relative">
                <Crop />
                <div className="photo reveal-photo aspect-[4/5]">
                  <Image
                    src={bed}
                    alt="Marta Szkudlarek, portrait"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7" data-reveal>
              <div className="reveal flex items-baseline gap-5">
                <span className="index text-[1.6rem]">{vip.index}</span>
                <h2 className="display-lg">{vip.name}</h2>
              </div>
              <p className="reveal mt-10 font-display text-[3.6rem] leading-none text-burgundy md:text-[4.6rem]">{vip.price}</p>
              <p className="reveal mt-4 text-[0.98rem] text-ink-55">
                {vip.tier} · {vip.terms}
              </p>
              <p className="lead reveal mt-10">{vip.body}</p>

              <div className="reveal mt-12 grid gap-10 border-t border-ink pt-8 sm:grid-cols-2">
                <div>
                  <p className="label">Inside the container</p>
                  <ul className="mt-5 space-y-3">
                    {vip.includes.map((inc) => (
                      <li key={inc} className="flex items-baseline gap-3 text-[0.98rem]">
                        <span aria-hidden className="relative top-[-2px] block h-1.5 w-1.5 shrink-0 bg-burgundy" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label">How it begins</p>
                  <ol className="mt-5 space-y-3">
                    {vip.after.map((step, i) => (
                      <li key={step} className="grid grid-cols-[1.75rem_1fr] text-[0.98rem] text-ink-70">
                        <span className="index text-[1.1rem]">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="reveal mt-12 flex flex-col items-start gap-4">
                <Action action={vip.cta} variant="outline" />
                <p className="text-[0.92rem] text-ink-55">{vip.note}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Who it is for ── */}
      <section className={`relative border-t border-rule ${pad}`}>
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12" data-reveal>
            <Title a={c.fit.titleA} b={c.fit.titleB} split={false} className="reveal lg:col-span-7" />
            <Level className="w-full max-w-[30rem] lg:col-span-5 lg:col-start-8 lg:justify-self-end" />
          </div>
          <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-10" data-reveal>
            <div className="reveal flex flex-col">
              <p className="font-display text-[2rem] leading-none">{c.fit.forTitle}</p>
              <ul className="mt-8 border-t border-rule-strong">
                {c.fit.forItems.map((item) => (
                  <li key={item} className="flex items-baseline gap-4 border-b border-rule py-4 text-[1rem]">
                    <span aria-hidden className="relative top-[-2px] block h-1.5 w-1.5 shrink-0 bg-burgundy" />
                    {item}
                  </li>
                ))}
              </ul>
              <Fit kind="for" className="mt-auto w-full max-w-[18rem] pt-12" />
            </div>
            <div className="reveal flex flex-col">
              <p className="font-display text-[2rem] italic leading-none text-ink-70">{c.fit.notTitle}</p>
              <ul className="mt-8 border-t border-rule-strong">
                {c.fit.notItems.map((item) => (
                  <li key={item} className="flex items-baseline gap-4 border-b border-rule py-4 text-[1rem] text-ink-70">
                    <span aria-hidden className="relative top-[-2px] block h-1.5 w-1.5 shrink-0 border border-ink-40" />
                    {item}
                  </li>
                ))}
              </ul>
              <Fit kind="not" className="mt-auto w-full max-w-[18rem] pt-12 opacity-55" />
            </div>
          </div>
        </Container>
      </section>

      <ColorField titleA={c.cta.titleA} titleB={c.cta.titleB} primary={c.cta.primary} secondary={c.cta.secondary} />
    </>
  );
}
