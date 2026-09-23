import type { CSSProperties, ReactNode } from "react";
import { Divider } from "./Ornaments";

/** Shared page gutter. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

export const sectionPad = "py-16 md:py-24";

/** Inline style helper for staggered reveals: --i (index) and --base (delay). */
export const stagger = (i: number, base = 0): CSSProperties =>
  ({ ["--i" as string]: i, ["--base" as string]: `${base}ms` }) as CSSProperties;

/**
 * A chapter opening: divider, title, optional lead. Centered by default,
 * left-aligned with `align="left"`.
 */
export function Heading({
  title,
  lead,
  align = "center",
  size = "lg",
  className = "",
}: {
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  size?: "lg" | "md";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"} ${className}`}>
      <div className="reveal" style={stagger(0)}>
        <Divider className={centered ? "" : "[&>span:first-child]:hidden"} />
      </div>
      <h2 className={`${size === "lg" ? "display-lg" : "display-md"} reveal mt-7 text-bone`} style={stagger(1)}>
        {title}
      </h2>
      {lead && (
        <p className={`lead reveal mt-7 text-bone-70 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`} style={stagger(2)}>
          {lead}
        </p>
      )}
    </div>
  );
}

/** A small drawn arrow for text links. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow h-[0.85em] w-[0.85em] shrink-0 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}
