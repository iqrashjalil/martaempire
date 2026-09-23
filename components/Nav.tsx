"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Diamond } from "./Ornaments";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[padding,background-color,border-color] duration-500 ${
          scrolled
            ? "border-gold/15 bg-ink-900/85 py-4 backdrop-blur-md"
            : "border-transparent bg-transparent py-6 md:py-7"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link
            href="/"
            className="flex items-center gap-3 font-display text-[1.45rem] leading-none text-bone"
            aria-label={`${site.name} home`}
          >
            <span>Marta</span>
            <Diamond className="h-1.5 w-1.5" />
            <span className="italic">Empire</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[0.8rem] uppercase tracking-[0.12em] text-bone-70 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 after:ease-out-expo hover:text-bone hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/#apply" className="btn btn-gold hidden px-5! py-2.5! sm:inline-flex">
              Apply
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-bone transition-transform duration-500 ease-out-expo ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-bone transition-transform duration-500 ease-out-expo ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-end bg-ink-950/[0.97] transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <span className="light left-1/2 top-1/4 h-[60vw] w-[60vw] -translate-x-1/2" />
        <nav className="relative px-6 pb-14 sm:px-10" aria-label="Mobile">
          <ul>
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={`border-b border-line transition-[opacity,transform] duration-700 ease-out-expo ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5 font-display text-[2.1rem] leading-none text-bone"
                >
                  <span className="numeral text-base">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`mt-10 flex flex-col gap-4 transition-[opacity,transform] duration-700 ease-out-expo ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "460ms" : "0ms" }}
          >
            <Link href="/#apply" onClick={() => setOpen(false)} className="btn btn-gold">
              Apply for VIP Mentoring
            </Link>
            <Link href="/terms" onClick={() => setOpen(false)} className="btn btn-ghost">
              Terms
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
