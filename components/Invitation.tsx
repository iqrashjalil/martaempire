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
              className={`relative flex flex-col p-6 md:p-7 ${
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
                  <span className="absolute -top-3 left-6 bg-gold px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-ink-950 md:left-7">
                    By application
                  </span>
                </>
              )}

              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">{t.tier}</p>
              <h3 className="mt-3 font-display text-[2rem] font-light leading-none text-bone md:text-[2.4rem]">
                {t.name}
              </h3>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-y border-line py-3">
                <span className="font-display text-3xl font-light text-bone">{t.price}</span>
                <span className="text-[0.62rem] uppercase tracking-[0.24em] text-bone-50">{t.terms}</span>
              </div>

              <p className="mt-4 text-[0.9rem] leading-[1.7] text-bone-70">{t.body}</p>

              <ul className="mt-4 space-y-2 border-t border-line pt-4">
                {t.includes.map((inc) => (
                  <li key={inc} className="flex gap-3 text-[0.88rem] text-bone-70">
                    <span className="mt-[0.45rem] h-px w-4 shrink-0 bg-gold" />
                    {inc}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
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
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
