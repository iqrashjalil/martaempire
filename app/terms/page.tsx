import type { Metadata } from "next";
import Link from "next/link";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow } from "@/components/Section";
import { terms, termsMeta } from "@/lib/terms";

export const metadata: Metadata = {
  title: termsMeta.title,
  description: termsMeta.subtitle,
};

export default function TermsPage() {
  return (
    <>
      <Effects />
      <Nav />
      <main className="relative overflow-hidden pt-40 pb-28">
        <div className="absolute left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-gold blur-3xl" />
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow>Legal</Eyebrow>
                <h1 className="display-md mt-8 text-bone">
                  Terms of <span className="italic text-gold">Service</span>
                </h1>
                <p className="mt-6 text-bone-70">{termsMeta.subtitle}</p>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.28em] text-bone-30">{termsMeta.updated}</p>

                <nav className="mt-12 hidden lg:block" aria-label="Sections">
                  <ol className="space-y-2.5 border-l border-line pl-5">
                    {terms.map((s, i) => (
                      <li key={s.title}>
                        <a href={`#s${i + 1}`} className="text-[0.8rem] text-bone-50 transition-colors hover:text-gold">
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <Link href="/" className="btn btn-ghost mt-12">
                  ← Back home
                </Link>
              </div>
            </aside>

            <div className="lg:col-span-7 lg:col-start-6">
              {terms.map((s, i) => (
                <section key={s.title} id={`s${i + 1}`} className="scroll-mt-32 border-t border-line py-12 first:border-t-0 first:pt-0">
                  <h2 className="font-display text-3xl font-light text-bone">{s.title}</h2>
                  <ol className="mt-8 space-y-5">
                    {s.items.map((it, j) => (
                      <li key={j} className="grid gap-2 sm:grid-cols-[2.5rem_1fr]">
                        <span className="roman text-lg">{j + 1}.</span>
                        <p className="leading-[1.85] text-bone-70">{it}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
