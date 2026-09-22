import type { ReactNode } from "react";

/** Shared page gutter. Every section's content starts at this left edge. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** Standard vertical rhythm for every section. */
export const sectionPad = "py-20 md:py-24";
/** Gap between a section header and its content. */
export const headerGap = "mt-12 md:mt-14";

export function Eyebrow({
  children,
  className = "",
  rule = true,
}: {
  children: ReactNode;
  className?: string;
  rule?: boolean;
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-4 ${className}`}>
      {rule && <span className="h-px w-10 bg-gold/60" />}
      {children}
    </span>
  );
}

/**
 * One header pattern for every section: eyebrow, title, optional body.
 * Title sits in the left 7 columns, body in the right 4, bottom-aligned.
 */
export function SectionHeader({
  eyebrow,
  title,
  body,
  size = "lg",
  className = "",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  size?: "lg" | "md";
  className?: string;
}) {
  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:gap-8 ${className}`}>
      <div className="lg:col-span-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={`${size === "lg" ? "display-lg" : "display-md"} mt-6 text-bone`} data-reveal>
          {title}
        </h2>
      </div>
      {body && (
        <p
          className="max-w-md self-end leading-[1.8] text-bone-70 lg:col-span-4 lg:col-start-9"
          data-reveal
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          {body}
        </p>
      )}
    </div>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-flex items-center gap-3 text-gold ${className}`}>
      <span className="h-px w-8 bg-gold/50" />
      <span className="text-sm">✦</span>
      <span className="h-px w-8 bg-gold/50" />
    </span>
  );
}
