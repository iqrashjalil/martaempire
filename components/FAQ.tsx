"use client";

import { useState } from "react";
import { faq as c } from "@/lib/content";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { Crest, Flourish } from "./Emblems";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={`relative scroll-mt-24 overflow-hidden border-t border-gold/15 bg-ink-950 ${sectionPad}`}>
      <div className="absolute inset-0 satin" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4" data-reveal>
            <div className="lg:sticky lg:top-32">
              <Heading
                align="left"
                title={
                  <>
                    {c.titleA} <span className="italic text-gold-bright">{c.titleB}</span>
                  </>
                }
              />
              <div className="reveal mt-12 hidden lg:block" style={stagger(2)}>
                <Crest className="h-52 w-52 text-gold/80" />
                <Flourish className="mt-10 w-52 text-gold/80" />
              </div>
            </div>
          </div>

          <ul className="border-t border-gold/20 lg:col-span-7 lg:col-start-6" data-reveal>
            {c.items.map((item, i) => {
              const on = open === i;
              return (
                <li key={item.q} className="reveal border-b border-gold/20" style={stagger(i)}>
                  <button
                    type="button"
                    onClick={() => setOpen(on ? null : i)}
                    aria-expanded={on}
                    aria-controls={`faq-${i}`}
                    className="group flex w-full items-start justify-between gap-8 py-7 text-left"
                  >
                    <span
                      className={`font-display text-2xl leading-snug transition-colors duration-400 md:text-[1.7rem] ${
                        on ? "text-bone" : "text-bone-70 group-hover:text-bone"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={`relative mt-3 flex h-4 w-4 shrink-0 items-center justify-center transition-[transform,color] duration-500 ease-out-expo ${
                        on ? "rotate-45 text-gold" : "text-bone-50 group-hover:text-gold"
                      }`}
                    >
                      <span className="absolute h-px w-4 bg-current" />
                      <span className="absolute h-4 w-px bg-current" />
                    </span>
                  </button>
                  <div
                    id={`faq-${i}`}
                    className="grid transition-[grid-template-rows] duration-600 ease-out-expo"
                    style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[58ch] pb-8 text-[1rem] leading-[1.8] text-bone-70">{item.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
