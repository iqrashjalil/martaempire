"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { applyCta, nav, routes, site } from "@/lib/content";
import { Arrow } from "./ui";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-display text-[1.6rem] leading-none tracking-[-0.01em] ${className}`} aria-label={`${site.name} home`}>
      Marta <span className="italic">Empire</span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the sheet whenever the route changes.
  if (open && openedAt !== pathname) {
    setOpen(false);
    setOpenedAt(pathname);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const onApply = pathname === routes.appointment;
  const solid = scrolled || open || onApply;
  const isActive = (href: string) => !href.includes("#") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
          onApply ? "border-rule bg-paper" : solid ? "border-rule bg-paper/90 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center gap-6 px-5 sm:px-8 lg:px-14">
          <Wordmark className="relative z-10" />

          <nav className="ml-16 hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-[0.82rem] font-medium uppercase tracking-[0.08em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-burgundy after:transition-transform after:duration-500 after:ease-out-expo hover:text-burgundy ${
                    active ? "text-burgundy after:scale-x-100" : "text-ink-70 after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            {!onApply && (
              <Link href={applyCta.href} className="btn btn-outline hidden min-h-0! bg-paper/80 px-5! py-2.5! sm:inline-flex">
                {applyCta.label}
                <Arrow />
              </Link>
            )}
            <button
              type="button"
              onClick={() => {
                setOpen((v) => !v);
                setOpenedAt(pathname);
              }}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-ink transition-transform duration-500 ease-out-expo ${open ? "rotate-45" : "-translate-y-[4px]"}`}
              />
              <span
                className={`absolute h-px w-6 bg-ink transition-transform duration-500 ease-out-expo ${open ? "-rotate-45" : "translate-y-[4px]"}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        inert={!open}
        className={`on-burgundy fixed inset-0 z-40 flex flex-col bg-burgundy text-on-burgundy transition-[clip-path] duration-700 ease-out-expo lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav className="mt-auto px-5 pb-10 sm:px-8" aria-label="Menu">
          <ul className="border-t border-on-burgundy-rule">
            {[{ label: "Home", href: routes.home }, ...nav].map((item, i) => (
              <li
                key={item.href}
                className={`border-b border-on-burgundy-rule transition-[opacity,transform] duration-700 ease-out-expo ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-center justify-between py-4 font-display text-[2.4rem] leading-none"
                >
                  {item.label}
                  <Arrow className="h-5 w-5 opacity-60" />
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`mt-8 flex flex-col gap-3 transition-[opacity,transform] duration-700 ease-out-expo ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
          >
            <Link href={applyCta.href} onClick={() => setOpen(false)} className="btn btn-paper">
              {applyCta.long}
              <Arrow />
            </Link>
            <Link href={routes.truthSession} onClick={() => setOpen(false)} className="btn btn-outline-paper">
              Book the Truth Session
              <Arrow />
            </Link>
            <p className="label mt-4">{site.location}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
