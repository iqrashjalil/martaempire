import type { Metadata } from "next";
import { faq as c, site } from "@/lib/content";
import { ColorField, Container, PageHero, pad } from "@/components/ui";
import { HonestWindow } from "@/components/Drafts";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumb="FAQ"
        titleA={c.hero.titleA}
        titleB={c.hero.titleB}
        lead={c.hero.lead}
        aside={
          <div className="hidden justify-center lg:flex" data-reveal>
            <HonestWindow className="w-full max-w-[20rem]" />
          </div>
        }
      />

      <section className={`relative ${pad}`}>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <aside className="lg:col-span-3">
              <nav aria-label="Topics" className="lg:sticky lg:top-28">
                <p className="label">Topics</p>
                <ol className="mt-5 border-t border-rule-strong">
                  {c.groups.map((g, i) => (
                    <li key={g.id} className="border-b border-rule">
                      <a href={`#${g.id}`} className="group flex items-baseline gap-4 py-3.5 transition-colors hover:text-burgundy">
                        <span className="index text-[1.05rem]">{i + 1}</span>
                        <span className="font-display text-[1.4rem] leading-none">{g.title}</span>
                        <span className="ml-auto text-[0.85rem] text-ink-55">{g.items.length}</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 text-[0.92rem] leading-[1.6] text-ink-55">
                  Something else?{" "}
                  <a href={`mailto:${site.email}`} className="text-ink underline decoration-burgundy/50 underline-offset-4 hover:text-burgundy">
                    Write to me
                  </a>
                  .
                </p>
              </nav>
            </aside>

            <div className="space-y-20 lg:col-span-8 lg:col-start-5 md:space-y-24">
              {c.groups.map((g, i) => (
                <div key={g.id} id={g.id} className="scroll-mt-28" data-reveal>
                  <div className="reveal flex items-baseline gap-5">
                    <span className="index text-[1.5rem]">{i + 1}</span>
                    <h2 className="display-md">{g.title}</h2>
                  </div>
                  <div className="mt-8">
                    <Accordion items={g.items} initial={i === 0 ? 0 : null} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ColorField titleA={c.cta.titleA} titleB={c.cta.titleB} primary={c.cta.primary} secondary={{ label: site.email, href: `mailto:${site.email}` }} />
    </>
  );
}
