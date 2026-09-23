import type { ReactNode } from "react";

/** Rule — diamond — rule. The house divider. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center gap-4 text-gold ${className}`}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70" />
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor">
        <path d="M6 0 12 6 6 12 0 6z" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70" />
    </span>
  );
}

/** A small diamond bullet. */
export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={`h-2 w-2 shrink-0 fill-gold ${className}`}
    >
      <path d="M6 0 12 6 6 12 0 6z" />
    </svg>
  );
}

/** Four gold corner marks, drawn inside the edges of a box. */
export function Corners({
  inset = 10,
  size = 18,
  className = "",
}: {
  inset?: number;
  size?: number;
  className?: string;
}) {
  const box = { width: size, height: size };
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute text-gold ${className}`}
      style={{ inset }}
    >
      <span
        className="absolute left-0 top-0 border-l border-t border-current"
        style={box}
      />
      <span
        className="absolute right-0 top-0 border-r border-t border-current"
        style={box}
      />
      <span
        className="absolute bottom-0 left-0 border-b border-l border-current"
        style={box}
      />
      <span
        className="absolute bottom-0 right-0 border-b border-r border-current"
        style={box}
      />
    </span>
  );
}

/** The house seal: a monogram inside a ring of lettering. */
export function Seal({
  className = "",
  spin = true,
}: {
  className?: string;
  spin?: boolean;
}) {
  return (
    <div aria-hidden className={className}>
      <div className="relative h-full w-full">
        <svg
          viewBox="0 0 120 120"
          className={`h-full w-full text-gold ${spin ? "seal-spin" : ""}`}
        >
          <defs>
            <path
              id="seal-ring"
              d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
            />
          </defs>
          <circle
            cx="60"
            cy="60"
            r="58"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="0.75"
          />
          <circle
            cx="60"
            cy="60"
            r="34"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="0.75"
          />
          <text
            fontSize="7.4"
            letterSpacing="1.7"
            fill="currentColor"
            fontFamily="var(--font-sans)"
            fontWeight="500"
          >
            <textPath href="#seal-ring">
              MARTA EMPIRE · QUEEN IDENTITY · MARTA EMPIRE ·
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-[1.7em] italic leading-none text-gold">
          M<span className="-ml-[0.12em]">E</span>
        </span>
      </div>
    </div>
  );
}

/**
 * A photograph in a gold frame. The image keeps a hairline on its edge; a
 * second frame sits offset behind it and slides home on hover. Wrap in a
 * [data-reveal] ancestor to get the scroll unveil.
 */
export function Frame({
  children,
  className = "",
  offset = "right",
  arch = false,
  corners = true,
}: {
  children: ReactNode;
  className?: string;
  offset?: "left" | "right";
  arch?: boolean;
  corners?: boolean;
}) {
  return (
    <div className={`frame ${className}`} data-offset={offset}>
      <span
        aria-hidden
        className={`frame-offset ${arch ? "arch-offset" : ""}`}
      />
      <div className={`frame-photo reveal-photo ${arch ? "arch" : ""}`}>
        {children}
        {corners && !arch && <Corners />}
      </div>
    </div>
  );
}
