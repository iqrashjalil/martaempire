"use client";

import { useEffect, useRef } from "react";

/** A soft candle-light spot that follows the cursor across the hero. */
export default function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let tx = window.innerWidth * 0.62;
    let ty = window.innerHeight * 0.4;
    let x = tx;
    let y = ty;
    let raf = 0;

    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      el.style.transform = `translate3d(${x - 400}px, ${y - 400}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] rounded-full opacity-70 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(closest-side, rgba(236,211,154,0.18), rgba(207,174,116,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
