"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

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
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-700 sm:px-8 lg:px-12 ${
            scrolled ? "" : ""
          }`}
        >
          <div
            className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-full w-full border-b border-line bg-ink-900/70 backdrop-blur-xl" />
          </div>

          <Link
            href="/"
            className="group flex items-baseline gap-2 font-display text-[1.55rem] leading-none tracking-tight text-bone"
            aria-label={`${site.name} home`}
          >
            <span className="font-light">Marta</span>
            <span className="italic text-gold transition-colors duration-500 group-hover:text-gold-bright">
              Empire
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] text-bone-70 transition-colors duration-500 hover:text-bone"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/#apply" className="btn btn-gold hidden !px-6 !py-3.5 sm:inline-flex">
              Apply
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line-strong lg:hidden"
            >
              <span
                className={`absolute h-px w-5 bg-bone transition-all duration-500 ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-bone transition-all duration-500 ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-end bg-ink-950/95 backdrop-blur-2xl transition-all duration-700 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute left-1/2 top-1/3 -z-10 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full glow-gold blur-3xl" />
        <nav className="px-8 pb-16" aria-label="Mobile">
          <ul className="space-y-2">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-700 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${120 + i * 70}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-line py-4 font-display text-4xl font-light text-bone"
                >
                  <span className="roman text-base">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`mt-10 flex flex-col gap-3 transition-all duration-700 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "520ms" }}
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
