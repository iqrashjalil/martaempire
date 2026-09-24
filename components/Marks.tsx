import type { ReactNode } from "react";

/**
 * Burgundy monoline marks: square-cut geometry on a 48-unit grid, one
 * 1.25 stroke. Every stroked element carries pathLength so the reveal system
 * draws it on (see `.mark` in globals.css). Each mark stands for one idea.
 */
const d = { pathLength: 1 } as const;

function Svg({ className = "", children, label }: { className?: string; children: ReactNode; label?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`mark ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {children}
    </svg>
  );
}

type P = { className?: string };

/** Pricing: the entry rises, step by step. */
export function Steps({ className }: P) {
  return (
    <Svg className={className}>
      <path {...d} d="M4 44h10V34h10V24h10V14h10V4" />
      <path {...d} d="M4 44h40" />
      <rect className="mark-fill" x="40" y="3" width="4" height="4" />
    </Svg>
  );
}

/** Client selection: a doorway, and who passes through it. */
export function Arch({ className }: P) {
  return (
    <Svg className={className}>
      <path {...d} d="M10 44V22a14 14 0 0 1 28 0v22" />
      <path {...d} d="M17 44V23a7 7 0 0 1 14 0v21" />
      <path {...d} d="M4 44h40" />
    </Svg>
  );
}

/** Positioning: one clear point. */
export function Target({ className }: P) {
  return (
    <Svg className={className}>
      <circle {...d} cx="24" cy="24" r="19" />
      <circle {...d} cx="24" cy="24" r="11" />
      <path {...d} d="M24 1v8M24 39v8M1 24h8M39 24h8" />
      <rect className="mark-fill" x="22" y="22" width="4" height="4" />
    </Svg>
  );
}

/** Visibility: a sun on the horizon line. */
export function Horizon({ className }: P) {
  return (
    <Svg className={className}>
      <path {...d} d="M8 32a16 16 0 0 1 32 0" />
      <path {...d} d="M2 32h44" />
      <path {...d} d="M24 6v6M9 13l4 4M39 13l-4 4" />
      <path {...d} d="M10 40h28" />
    </Svg>
  );
}

/** Access and capacity: a container inside a container. */
export function Container({ className }: P) {
  return (
    <Svg className={className}>
      <rect {...d} x="4" y="4" width="40" height="40" />
      <rect {...d} x="14" y="14" width="20" height="20" />
      <path {...d} d="M4 4l10 10M44 4 34 14M4 44l10-10M44 44 34 34" />
    </Svg>
  );
}

/** Decisions and structure: a column that carries weight. */
export function Column({ className }: P) {
  return (
    <Svg className={className}>
      <path {...d} d="M6 6h36M10 11h28" />
      <path {...d} d="M14 11v26M24 11v26M34 11v26" />
      <path {...d} d="M10 37h28M6 42h36" />
    </Svg>
  );
}

/** Self concept: a mirror, and the figure in it. */
export function Mirror({ className }: P) {
  return (
    <Svg className={className}>
      <path {...d} d="M12 46V18a12 12 0 0 1 24 0v28" />
      <circle {...d} cx="24" cy="20" r="4" />
      <path {...d} d="M17 38c1.5-7 12.5-7 14 0" />
      <path {...d} d="M6 46h36" />
    </Svg>
  );
}

/** A letter, sealed. */
export function Letter({ className }: P) {
  return (
    <Svg className={className}>
      <rect {...d} x="3" y="10" width="42" height="28" />
      <path {...d} d="M3 10l21 16 21-16" />
      <rect className="mark-fill" x="21" y="23" width="6" height="6" />
    </Svg>
  );
}

/** A question held open. */
export function Question({ className }: P) {
  return (
    <Svg className={className}>
      <rect {...d} x="4" y="4" width="40" height="40" />
      <path {...d} d="M17 18a7 7 0 1 1 10 6.3c-2 1-3 2.4-3 4.7v2" />
      <rect className="mark-fill" x="22" y="35" width="4" height="4" />
    </Svg>
  );
}

/** Time: ninety minutes, one decision. */
export function Hourglass({ className }: P) {
  return (
    <Svg className={className}>
      <path {...d} d="M10 4h28M10 44h28" />
      <path {...d} d="M13 4c0 11 11 14 11 20S13 33 13 44" />
      <path {...d} d="M35 4c0 11-11 14-11 20s11 9 11 20" />
      <path {...d} d="M18 40l6-6 6 6" />
    </Svg>
  );
}

/** The monogram in a square: the house signature. */
export function Monogram({ className = "", tone = "burgundy" }: { className?: string; tone?: "burgundy" | "paper" }) {
  return (
    <div
      aria-hidden
      className={`flex aspect-square items-center justify-center font-display italic leading-none ${
        tone === "paper" ? "bg-on-burgundy text-burgundy" : "bg-burgundy text-on-burgundy"
      } ${className}`}
    >
      <span className="translate-y-[-0.04em]">ME</span>
    </div>
  );
}
