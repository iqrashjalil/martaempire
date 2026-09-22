import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

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

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-flex items-center gap-3 text-gold ${className}`}>
      <span className="h-px w-8 bg-gold/50" />
      <span className="text-sm">✦</span>
      <span className="h-px w-8 bg-gold/50" />
    </span>
  );
}
