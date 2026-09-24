import Image from "next/image";
import Link from "next/link";
import { faqPreview, home, pillars, services, stories } from "@/lib/content";
import { Action, Arrow, ColorField, Container, Gridlines, Title, delay, pad } from "@/components/ui";
import { Monogram } from "@/components/Marks";
import { Crop, FourRadii, OneColumn, StoryDraft } from "@/components/Drafts";
import Accordion from "@/components/Accordion";
import mirror from "@/public/images/marta-mirror.jpg";
import sofa from "@/public/images/marta-sofa.jpg";
import desk from "@/public/images/marta-desk.jpg";

export default function Home() {
  const h = home.hero;
  return (
    <>
      {/* ── Hero: the proposition on the grid, the portrait to the edge ── */}
      <section className="relative isolate overflow-hidden border-b border-rule lg:min-h-svh">
        <Gridlines className="-z-10" />
        <Container className="relative">
          <div className="grid lg:min-h-svh lg:grid-cols-12">
            <div className="flex flex-col justify-center pt-32 pb-14 lg:col-span-7 lg:pt-36 lg:pb-16">
              <h1 className="display-xl text-[clamp(4.2rem,11.5vw,10rem)]!">
                <span className="line-mask">
                  <span style={delay(150)}>{h.titleA}</span>
                </span>{" "}
                <span className="line-mask">
                  <span className="em" style={delay(290)}>
                    {h.titleB}
                  </span>
                </span>
              </h1>
              <p className="lead fade-up mt-10" style={delay(650)}>
                {h.lead}
              </p>
              <div className="fade-up mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10" style={delay(800)}>
                <Action action={h.primary} variant="primary" />
                <Action action={h.secondary} variant="link" />
              </div>

              <dl className="fade-up mt-16 hidden border-t border-rule-strong sm:grid sm:grid-cols-3 lg:mt-20 lg:grid-cols-[calc(28.5714%+0.4167rem)_calc(28.5714%+0.4167rem)_1fr]" style={delay(950)}>
                {h.stats.map((s, i) => (
                  <div key={s.k} className={`py-5 sm:pr-6 ${i > 0 ? "border-t border-rule sm:border-t-0 sm:border-l sm:pl-6" : ""}`}>
                    <dt className="label">{s.k}</dt>
                    <dd className="mt-2 text-[0.98rem] text-ink">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>

        <div className="relative mx-5 mb-12 sm:mx-8 lg:absolute lg:inset-y-0 lg:right-0 lg:m-0 lg:w-[40%]">
          <div className="hero-photo photo relative aspect-[4/5] lg:aspect-auto lg:h-full" style={delay(200)}>
            <Image
              src={mirror}
              alt="Marta Szkudlarek standing before an arched mirror"
              fill
              preload
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[50%_22%]"
            />
          </div>
          <Monogram
            className="fade-up absolute -bottom-6 left-6 w-20 text-[2rem] lg:bottom-20 lg:-left-14 lg:w-28 lg:text-[2.8rem]"
          />
        </div>
      </section>

      {/* ── Where you are ── */}
      <section className={`relative bg-paper-2 ${pad}`}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10" data-reveal>
            <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
              <span className="rule-draw mb-10 w-16 text-burgundy" />
              <Title a={home.truths.titleA} b={home.truths.titleB} size="md" className="reveal" />
              <OneColumn className="mt-14 w-full max-w-[18rem] sm:max-w-[22rem] lg:mt-20 lg:max-w-[26rem]" />
            </div>
            <ol className="grid border-t border-rule-strong sm:grid-cols-2 lg:col-span-7">
              {home.truths.items.map((t, i) => (
                <li
                  key={t}
                  className={`reveal reveal-card flex flex-col gap-8 border-b border-rule-strong py-8 sm:py-10 ${
                    i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"
                  }`}
                >
                  <span aria-hidden className="block h-2 w-2 bg-burgundy" />
                  <p className="font-display text-[1.65rem] leading-[1.18] md:text-[1.9rem]">{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── Two ways in ── */}
      <section className={`relative ${pad}`}>
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10" data-reveal>
            <Title a={home.offers.titleA} b={home.offers.titleB} split={false} className="reveal lg:col-span-7" />
            <div className="reveal lg:col-span-4 lg:col-start-9">
              <p className="body">{home.offers.body}</p>
            </div>
          </div>

          <div className="mt-14 grid border-t border-ink md:grid-cols-2" data-reveal>
            {services.tiers.map((t, i) => (
              <Link
                key={t.id}
                href={`/services#${t.id}`}
                className={`reveal reveal-card group relative flex flex-col gap-10 border-b border-rule-strong py-10 transition-colors duration-500 hover:bg-paper-2 md:py-12 ${
                  i === 0 ? "md:border-r md:pr-10" : "md:pl-10"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="display-md">{t.name}</h3>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-rule-strong transition-colors duration-500 group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-on-burgundy">
                    <Arrow />
                  </span>
                </div>
                <div className="mt-auto">
                  <p className="font-display text-[3rem] leading-none text-burgundy md:text-[3.6rem]">{t.price}</p>
                  <p className="mt-3 text-[0.95rem] text-ink-55">{t.terms}</p>
                  <p className="body mt-6">{t.body}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10" data-reveal>
            <Action action={home.offers.link} variant="link" className="reveal" />
          </div>
        </Container>
      </section>

      {/* ── The four pillars ── */}
      <section className={`relative border-t border-rule ${pad}`}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5" data-reveal>
              <div className="drift relative">
                <Crop />
                <div className="photo reveal-photo aspect-[3/4]">
                  <Image
                    src={sofa}
                    alt="Marta Szkudlarek seated on a sofa with her laptop"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7" data-reveal>
              <Title a={home.pillars.titleA} b={home.pillars.titleB} className="reveal" />
              <p className="lead reveal mt-8">{home.pillars.body}</p>
              <ol className="mt-12 border-t border-rule-strong">
                {pillars.items.map((p) => (
                  <li key={p.n} className="reveal border-b border-rule-strong">
                    <Link
                      href={`/pillars#${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5 md:py-6"
                    >
                      <span className="index text-[1.4rem]">{p.n}</span>
                      <span>
                        <span className="block font-display text-[1.9rem] leading-none transition-colors group-hover:text-burgundy md:text-[2.2rem]">
                          {p.title}
                        </span>
                        <span className="mt-2 block text-[0.9rem] text-ink-55">{p.tags.join(" · ")}</span>
                      </span>
                      <Arrow className="text-ink-40 transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-burgundy" />
                    </Link>
                  </li>
                ))}
              </ol>
              <div className="mt-10">
                <Action action={home.pillars.link} variant="link" className="reveal" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── About ── */}
      <section id="about" className={`relative scroll-mt-20 bg-paper-2 ${pad}`}>
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6" data-reveal>
              <span className="rule-draw mb-10 w-16 text-burgundy" />
              <Title a={home.about.titleA} b={home.about.titleB} size="md" className="reveal" />
              <p className="lead reveal mt-8">{home.about.body}</p>
              <p className="reveal mt-8 font-display text-[1.9rem] italic text-burgundy">Marta Szkudlarek</p>
              <dl className="reveal mt-12 border-t border-rule-strong">
                {home.about.facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-[8rem_1fr] gap-4 border-b border-rule py-4">
                    <dt className="label pt-0.5">{f.k}</dt>
                    <dd className="text-[0.98rem]">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-5 lg:col-start-8" data-reveal>
              <div className="relative">
                <Crop />
                <div className="photo reveal-photo aspect-[4/5]">
                  <Image
                    src={desk}
                    alt="Marta Szkudlarek at her desk"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Four women ── */}
      <section className={`relative isolate ${pad}`}>
        <Container className="relative">
          {/* Four radii from one centre, struck from the section's corner. */}
          <div aria-hidden className="pointer-events-none absolute -z-10 hidden opacity-45 lg:-top-32 lg:right-14 lg:block" data-reveal>
            <FourRadii className="w-[22rem]" />
          </div>
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10" data-reveal>
            <Title a={stories.titleA} b={stories.titleB} className="reveal lg:col-span-7" />
          </div>
          {/* Who she was, the decision, what changed: three rows shared by all four,
              with the decision row carried by one burgundy line. */}
          <ol className="relative mt-14 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto_1fr]" data-reveal>
            {stories.items.map((s, i) => (
              <li
                key={s.who}
                className="reveal reveal-card flex flex-col border-b border-rule-strong py-10 sm:odd:pr-6 sm:even:border-l sm:even:pl-6 lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:border-b-0 lg:px-6 lg:py-12 lg:first:pl-0 lg:[&:nth-child(n+2)]:border-l"
              >
                <p className="font-display text-[1.45rem] leading-[1.2] md:text-[1.6rem]">{s.who}</p>
                <div className="flex items-center gap-4 py-7">
                  <span aria-hidden className="relative block h-2.5 w-2.5 shrink-0 bg-burgundy" />
                  <span aria-hidden className="flex-1 lg:hidden">
                    <span className="rule-draw text-burgundy/30" />
                  </span>
                </div>
                <p className="text-[1rem] leading-[1.65] text-burgundy">{s.decision}</p>
                <div className="flex flex-col">
                  <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink-70">{s.change}</p>
                  {/* The decision, drawn: set at the foot of the column so all four sit on one line. */}
                  <StoryDraft index={i} className="mt-auto w-full max-w-[16rem] pt-12 opacity-70 lg:max-w-[17.5rem] lg:pt-14" />
                </div>
              </li>
            ))}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 hidden -translate-y-1/2 items-center lg:flex lg:[grid-column:1/-1] lg:[grid-row:2/3]">
              <span className="flex-1">
                <span className="rule-draw text-burgundy/40" />
              </span>
              <svg viewBox="0 0 10 10" className="-ml-1 h-2.5 w-2.5 text-burgundy/60" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M2 1l5 4-5 4" />
              </svg>
            </div>
          </ol>
        </Container>
      </section>

      {/* ── Questions ── */}
      <section className={`relative border-t border-rule ${pad}`}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4" data-reveal>
              <Title a={home.faq.titleA} b={home.faq.titleB} className="reveal" />
              <div className="reveal mt-10">
                <Action action={home.faq.link} variant="link" />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <Accordion items={faqPreview} />
            </div>
          </div>
        </Container>
      </section>

      <ColorField titleA={home.cta.titleA} titleB={home.cta.titleB} primary={home.cta.primary} secondary={home.cta.secondary} />
    </>
  );
}
