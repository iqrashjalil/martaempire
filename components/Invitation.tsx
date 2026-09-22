import Link from "next/link";
import { invitation as c } from "@/lib/content";
import { Container, SectionHeader, headerGap, sectionPad } from "./Section";

export default function Invitation() {
  return (
    <section id="invitation" className={`relative scroll-mt-24 overflow-hidden ${sectionPad}`}>
      <div className="absolute inset-x-0 top-0 gold-rule" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-gold blur-3xl opacity-50" />
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
          body={c.closer}
        />

        <div className={`grid gap-5 lg:grid-cols-2 lg:items-stretch ${headerGap}`}>
          {c.tiers.map((t, i) => (
            <article
              key={t.name}
              className={`relative flex flex-col p-7 md:p-9 ${
                t.featured
                  ? "bg-gradient-to-b from-ink-800 to-ink-950 shadow-[0_40px_120px_-40px_rgba(207,174,116,0.35)]"
                  : "card-luxe"
              }`}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 140}ms` }}
            >
              {t.featured && (
                <>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] p-px"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(236,211,154,0.9), rgba(207,174,116,0.25) 40%, rgba(154,123,69,0.15) 70%, rgba(236,211,154,0.6))",
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span className="absolute -top-3 left-7 bg-gold px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-ink-950 md:left-9">
                    By application
                  </span>
                </>
              )}

              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">{t.tier}</p>
              <h3 className="mt-4 font-display text-bone">
                <span className="block text-lg font-light italic text-bone-70">{t.pre}</span>
                <span className="block text-[2.2rem] font-light leading-none md:text-4xl">{t.name}</span>
              </h3>

              <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-y border-line py-4">
                <span className="font-display text-4xl font-light text-bone">{t.price}</span>
                <span className="text-[0.64rem] uppercase tracking-[0.24em] text-bone-50">{t.terms}</span>
              </div>

              <p className="mt-5 text-[0.95rem] leading-[1.75] text-bone-70">{t.body}</p>

              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {t.includes.map((inc) => (
                  <li key={inc} className="flex gap-4 text-[0.9rem] text-bone-70">
                    <span className="mt-[0.45rem] h-px w-4 shrink-0 bg-gold" />
                    {inc}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
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
                <p className="mt-4 text-center text-[0.78rem] italic leading-relaxed text-bone-50">{t.note}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
