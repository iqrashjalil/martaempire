"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/content";

/** Ruled question list; one answer open at a time. */
export default function Accordion({ items, initial = 0 }: { items: FaqItem[]; initial?: number | null }) {
  const [open, setOpen] = useState<number | null>(initial);
  const base = useId();

  return (
    <ul className="border-t border-rule-strong">
      {items.map((item, i) => {
        const on = open === i;
        const panel = `${base}-panel-${i}`;
        const button = `${base}-button-${i}`;
        return (
          <li key={item.q} className="reveal border-b border-rule-strong">
            <h3>
              <button
                id={button}
                type="button"
                onClick={() => setOpen(on ? null : i)}
                aria-expanded={on}
                aria-controls={panel}
                className="group flex w-full items-start justify-between gap-8 py-6 text-left md:py-7"
              >
                <span
                  className={`font-display text-[1.6rem] leading-[1.2] transition-colors duration-300 md:text-[1.9rem] ${
                    on ? "text-burgundy" : "text-ink group-hover:text-burgundy"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`relative mt-2.5 flex h-7 w-7 shrink-0 items-center justify-center border transition-colors duration-300 ${
                    on ? "border-burgundy bg-burgundy text-on-burgundy" : "border-rule-strong text-ink group-hover:border-burgundy"
                  }`}
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span
                    className={`absolute h-3 w-px bg-current transition-transform duration-500 ease-out-expo ${on ? "scale-y-0" : ""}`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panel}
              role="region"
              aria-labelledby={button}
              className="grid transition-[grid-template-rows] duration-500 ease-out-expo"
              style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="body pb-8 pr-12">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
