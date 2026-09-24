"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Entrance motion, driven by the scroll position and reversible:
 *  – every `.reveal` element rises into place when it enters the viewport,
 *    settles back out when it leaves, and rises again on the next pass;
 *    elements that arrive together are staggered in reading order
 *  – every `[data-reveal]` wrapper wipes open the photograph inside it and
 *    draws its rules and marks the same way
 * Mounted once in the root layout; re-scans the page on every route change.
 */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(".reveal, [data-reveal]");

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => {
            const ra = a.getBoundingClientRect();
            const rb = b.getBoundingClientRect();
            return ra.top - rb.top || ra.left - rb.left;
          });
        entering.forEach((el, i) => {
          el.style.transitionDelay = `${Math.min(i, 8) * 100}ms`;
          el.classList.add("is-in");
        });
        for (const e of entries) {
          if (e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.style.transitionDelay = "0ms";
          el.classList.remove("is-in");
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
