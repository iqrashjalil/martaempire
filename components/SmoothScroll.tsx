"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Inertia scrolling on the native scroller. Off for reduced motion and coarse pointers. */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const lenis = new Lenis({
      lerp: 0.085,
      autoRaf: true,
      autoToggle: true,
      anchors: { offset: -88 },
      stopInertiaOnNavigate: true,
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
