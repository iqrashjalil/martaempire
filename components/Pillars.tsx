"use client";

import Image from "next/image";
import { useState } from "react";
import { pillars as c } from "@/lib/content";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { Frame } from "./Ornaments";
import sofa from "@/public/images/marta-sofa.jpg";

export default function Pillars() {
  const [active, setActive] = useState(0);
  const p = c.items[active];

  return (
    <section id="pillars" className={`relative scroll-mt-24 overflow-hidden ${sectionPad}`}>
      <span className="light left-[-10%] top-[30%] h-[36rem] w-[36rem] opacity-70" />
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5" data-reveal>
            <div className="drift-slow mx-auto w-[82%] max-w-[420px] lg:w-full">
              <Frame offset="left">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={sofa}
                    alt="Marta Szkudlarek seated on a sofa with her laptop"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 82vw, 38vw"
                    className="object-cover"
                  />
                </div>
              </Frame>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div data-reveal>
              <Heading
                align="left"
                title={
                  <>
                    {c.titleA} <span className="italic text-gold-bright">{c.titleB}</span>
                  </>
                }
                lead={c.body}
              />
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-12" data-reveal>
              <ul className="reveal flex gap-1 overflow-x-auto md:col-span-5 md:flex-col md:gap-0 md:overflow-visible" role="tablist" style={stagger(0)}>
                {c.items.map((item, i) => {
                  const on = i === active;
                  return (
                    <li key={item.n} className="shrink-0 md:shrink">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={on}
                        aria-controls={`pillar-panel-${i}`}
                        id={`pillar-tab-${i}`}
                        onClick={() => setActive(i)}
                        className={`group flex w-full items-baseline gap-4 border-b py-4 pr-6 text-left transition-colors duration-500 md:pr-0 ${
                          on ? "border-gold" : "border-line hover:border-gold/50"
                        }`}
                      >
                        <span className={`numeral text-sm transition-colors ${on ? "text-gold-bright" : "text-bone-30"}`}>
                          {item.n}
                        </span>
                        <span>
                          <span
                            className={`block whitespace-nowrap font-display text-xl leading-none transition-colors duration-500 md:text-[1.6rem] ${
                              on ? "text-bone" : "text-bone-50 group-hover:text-bone-70"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className={`caption mt-2 hidden md:block ${on ? "text-gold" : "text-bone-30"}`}>{item.tags}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="reveal md:col-span-7" style={stagger(1)}>
                <div
                  key={p.n}
                  id={`pillar-panel-${active}`}
                  role="tabpanel"
                  aria-labelledby={`pillar-tab-${active}`}
                  className="step-in"
                >
                  <p className="caption md:hidden">{p.tags}</p>
                  <p className="caption mt-6 md:mt-0">Who she becomes</p>
                  <p className="mt-4 font-display text-[1.5rem] italic leading-snug text-bone md:text-[1.8rem]">{p.becomes}</p>
                  <p className="mt-10 border-t border-gold/25 pt-6 font-display text-xl italic text-gold">{p.mantra}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
