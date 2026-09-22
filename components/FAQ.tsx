"use client";

import { useState } from "react";
import { faq as c } from "@/lib/content";
import { Container, Eyebrow } from "./Section";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-28 md:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <h2 className="display-md mt-8 text-bone" data-reveal>
                {c.titleA} <span className="italic text-gold">{c.titleB}</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-line">
              {c.items.map((item, i) => {
                const on = open === i;
                return (
                  <li key={item.q} className="border-b border-line" data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                    <button
                      type="button"
                      onClick={() => setOpen(on ? null : i)}
                      aria-expanded={on}
                      aria-controls={`faq-${i}`}
                      className="group flex w-full items-start justify-between gap-8 py-7 text-left md:py-8"
                    >
                      <span
                        className={`font-display text-2xl font-light leading-snug transition-colors duration-500 md:text-[1.75rem] ${
                          on ? "text-gold-bright" : "text-bone group-hover:text-gold"
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`relative mt-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          on ? "rotate-45 border-gold text-gold" : "border-line-strong text-bone-50 group-hover:border-gold"
                        }`}
                        aria-hidden
                      >
                        <span className="absolute h-px w-3 bg-current" />
                        <span className="absolute h-3 w-px bg-current" />
                      </span>
                    </button>
                    <div
                      id={`faq-${i}`}
                      className="grid transition-[grid-template-rows] duration-700 ease-[var(--ease-luxe)]"
                      style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-8 leading-[1.85] text-bone-70">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
