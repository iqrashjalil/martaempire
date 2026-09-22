"use client";

import { useEffect, useState } from "react";

/**
 * Global, dependency-free motion layer:
 *  – reveals any [data-reveal] element when it enters the viewport
 *  – tracks pointer position on .card-luxe surfaces for the gold spotlight
 *  – draws a thin gold scroll-progress line along the top edge
 */
export default function Effects() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => {
        if (reduce) el.classList.add("is-in");
        else io.observe(el);
      });
    };
    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    const onMove = (ev: PointerEvent) => {
      const target = (ev.target as HTMLElement | null)?.closest<HTMLElement>(".card-luxe");
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      target.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-gold-deep via-gold-bright to-gold"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
