import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/ui";
import { terms, termsMeta } from "@/lib/terms";

export const metadata: Metadata = {
  title: termsMeta.title,
  description: termsMeta.subtitle,
};

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms" titleA="Terms of" titleB="Service." lead={`${termsMeta.subtitle}. ${termsMeta.updated}.`} />

      <section className="relative py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <aside className="lg:col-span-3">
              <nav aria-label="Sections" className="hidden lg:sticky lg:top-28 lg:block">
                <p className="label">Sections</p>
                <ol className="mt-5 space-y-2.5 border-l border-rule-strong pl-5">
                  {terms.map((s, i) => (
                    <li key={s.title}>
                      <a href={`#s${i + 1}`} className="text-[0.92rem] text-ink-55 transition-colors hover:text-burgundy">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="lg:col-span-8 lg:col-start-5">
              {terms.map((s, i) => (
                <section key={s.title} id={`s${i + 1}`} className="scroll-mt-28 border-t border-rule-strong py-12 first:border-t-0 first:pt-0">
                  <h2 className="display-sm">{s.title}</h2>
                  <ol className="mt-8 space-y-5">
                    {s.items.map((it, j) => (
                      <li key={j} className="grid gap-2 sm:grid-cols-[2.5rem_1fr]">
                        <span className="index text-[1.1rem]">{j + 1}.</span>
                        <p className="leading-[1.8] text-ink-70">{it}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
