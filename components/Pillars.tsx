"use client";

import { useState } from "react";
import { pillars as c } from "@/lib/content";
import { Container, Eyebrow } from "./Section";

export default function Pillars() {
  const [active, setActive] = useState(0);
  const p = c.items[active];

  return (
    <section id="pillars" className="relative scroll-mt-24 overflow-hidden py-28 md:py-40">
      <div className="absolute inset-x-0 top-0 gold-rule" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-8 text-bone" data-reveal>
              {c.titleA} <span className="italic text-gold">{c.titleB}</span>
            </h2>
          </div>
          <p
            className="max-w-lg self-end leading-[1.85] text-bone-70 lg:col-span-6 lg:col-start-7"
            data-reveal
          >
            {c.body}
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {/* Selector */}
          <ul className="flex gap-2 overflow-x-auto pb-2 lg:col-span-5 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0" role="tablist">
            {c.items.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.n} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls={`pillar-panel-${i}`}
                    id={`pillar-tab-${i}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative flex w-full items-baseline gap-5 border-b px-4 py-5 text-left transition-all duration-500 lg:px-0 lg:py-8 ${
                      on ? "border-gold" : "border-line hover:border-line-strong"
                    }`}
                  >
                    <span
                      className={`roman text-lg transition-colors duration-500 lg:text-2xl ${
                        on ? "text-gold-bright" : "text-bone-30"
                      }`}
                    >
                      {item.n}
                    </span>
                    <span>
                      <span
                        className={`block font-display text-2xl font-light transition-all duration-700 lg:text-[2.6rem] lg:leading-none ${
                          on ? "translate-x-2 text-bone" : "text-bone-50 group-hover:text-bone-70"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`mt-2 hidden text-[0.62rem] uppercase tracking-[0.26em] transition-all duration-500 lg:block ${
                          on ? "translate-x-2 text-gold" : "text-bone-30"
                        }`}
                      >
                        {item.tags}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Panel */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div
              key={p.n}
              id={`pillar-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`pillar-tab-${active}`}
              className="card-luxe relative overflow-hidden p-8 md:p-12"
              style={{ animation: "wordIn 0.9s var(--ease-luxe) both" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[11rem] font-light leading-none text-gold/[0.06]"
              >
                {p.n}
              </span>
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold lg:hidden">{p.tags}</p>

              <div className="relative mt-4 lg:mt-0">
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-bone-30">Who she becomes</p>
                <p className="mt-4 font-display text-[1.65rem] font-light italic leading-snug text-bone md:text-3xl">
                  {p.becomes}
                </p>
              </div>

              <div className="relative mt-10 border-t border-line pt-10">
                <p className="text-[0.62rem] uppercase tracking-[0.3em] text-bone-30">What she does differently</p>
                <p className="mt-4 leading-[1.85] text-bone-70">{p.does}</p>
              </div>

              <div className="relative mt-10 flex items-center gap-4">
                <span className="h-px w-10 bg-gold/60" />
                <p className="font-display text-lg italic text-gold">{p.mantra}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
