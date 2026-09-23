import type { SVGProps } from "react";

/**
 * Engraved gold line art. Every stroked element carries pathLength so the
 * reveal system can draw it on; see `.glyph` in globals.css.
 */
type GlyphProps = SVGProps<SVGSVGElement> & { className?: string };

const d = { pathLength: 1 } as const;

function Svg({ className = "", children, viewBox = "0 0 64 64", ...rest }: GlyphProps) {
  return (
    <svg aria-hidden viewBox={viewBox} className={`glyph ${className}`} {...rest}>
      {children}
    </svg>
  );
}

/** I · Pricing and offer architecture: a balance. */
export function Scales(p: GlyphProps) {
  return (
    <Svg {...p}>
      <path {...d} d="M32 16v36" />
      <path {...d} d="M12 22h40" />
      <circle {...d} cx="32" cy="13" r="2.4" />
      <path {...d} d="M22 52h20" />
      <path {...d} d="M14 22 8 38M14 22l6 16" />
      <path {...d} d="M5 38c2 6 16 6 18 0" />
      <path {...d} d="M50 22l-6 16M50 22l6 16" />
      <path {...d} d="M41 38c2 6 16 6 18 0" />
    </Svg>
  );
}

/** II · Client selection: the key. */
export function Key(p: GlyphProps) {
  return (
    <Svg {...p}>
      <circle {...d} cx="17" cy="32" r="9.5" />
      <circle {...d} cx="17" cy="32" r="3.2" />
      <path {...d} d="M27 32h29" />
      <path {...d} d="M29 28v8" />
      <path {...d} d="M47 32v8h4v-4h4v4h1" />
    </Svg>
  );
}

/** III · Positioning and communication: the compass rose. */
export function Compass(p: GlyphProps) {
  return (
    <Svg {...p}>
      <circle {...d} cx="32" cy="32" r="23" />
      <circle {...d} cx="32" cy="32" r="5.5" />
      <path {...d} d="M32 7l3.6 21.4L32 32l-3.6-3.6z" />
      <path {...d} d="M32 57l-3.6-21.4L32 32l3.6 3.6z" />
      <path {...d} d="M7 32l21.4-3.6L32 32l-3.6 3.6z" />
      <path {...d} d="M57 32l-21.4 3.6L32 32l3.6-3.6z" />
      <path {...d} d="M38.4 25.6l6-6M25.6 25.6l-6-6M25.6 38.4l-6 6M38.4 38.4l6 6" />
    </Svg>
  );
}

/** IV · Visibility and authority: the crown. */
export function Crown(p: GlyphProps) {
  return (
    <Svg {...p}>
      <path {...d} d="M14 44 9 22l13 11 10-19 10 19 13-11-5 22z" />
      <path {...d} d="M14 44h36v7H14z" />
      <circle {...d} cx="9" cy="20" r="2" />
      <circle {...d} cx="32" cy="12" r="2.2" />
      <circle {...d} cx="55" cy="20" r="2" />
      <path {...d} d="M32 45l3 2.5-3 2.5-3-2.5z" />
    </Svg>
  );
}

/** V · Access, boundaries and capacity: the velvet rope. */
export function Rope(p: GlyphProps) {
  return (
    <Svg {...p}>
      <path {...d} d="M14 23v28M50 23v28" />
      <path {...d} d="M6 52c0-2.5 16-2.5 16 0s-16 2.5-16 0zM42 52c0-2.5 16-2.5 16 0s-16 2.5-16 0z" />
      <circle {...d} cx="14" cy="19" r="3.2" />
      <circle {...d} cx="50" cy="19" r="3.2" />
      <path {...d} d="M17 27c6 18 24 18 30 0" />
      <path {...d} d="M17 30c6 18 24 18 30 0" />
    </Svg>
  );
}

/** VI · Decision-making and structure: the queen. */
export function Queen(p: GlyphProps) {
  return (
    <Svg {...p}>
      <circle {...d} cx="32" cy="9" r="2.4" />
      <path {...d} d="M20 23l4-11 8 5 8-5 4 11" />
      <path {...d} d="M20 23c8 4 16 4 24 0" />
      <path {...d} d="M23 25l3 17M41 25l-3 17" />
      <path {...d} d="M25 42h14" />
      <path {...d} d="M25 42l-5 10h24l-5-10" />
      <path {...d} d="M17 56h30" />
    </Svg>
  );
}

/** The Truth Session: an hourglass. */
export function Hourglass(p: GlyphProps) {
  return (
    <Svg {...p}>
      <path {...d} d="M20 10h24M20 54h24" />
      <path {...d} d="M23 12c0 12 4 16 9 20-5 4-9 8-9 20" />
      <path {...d} d="M41 12c0 12-4 16-9 20 5 4 9 8 9 20" />
      <path {...d} d="M27 46l5-6 5 6" />
      <path {...d} d="M27 18h10" />
    </Svg>
  );
}

/** VIP Mentoring: a laurel wreath, leaves grown along two branches. */
export function Laurel(p: GlyphProps) {
  const leaves: string[] = [];
  const r = (n: number) => n.toFixed(1);
  const branch = (sign: 1 | -1) => {
    // Quadratic from the base up the side: P0 to P2 with control P1.
    const P0 = [32 + sign * 6, 57];
    const P1 = [32 + sign * 30, 40];
    const P2 = [32 + sign * 15, 6];
    const pt = (t: number) => [
      (1 - t) ** 2 * P0[0] + 2 * (1 - t) * t * P1[0] + t * t * P2[0],
      (1 - t) ** 2 * P0[1] + 2 * (1 - t) * t * P1[1] + t * t * P2[1],
    ];
    const tan = (t: number) => {
      const x = 2 * (1 - t) * (P1[0] - P0[0]) + 2 * t * (P2[0] - P1[0]);
      const y = 2 * (1 - t) * (P1[1] - P0[1]) + 2 * t * (P2[1] - P1[1]);
      const l = Math.hypot(x, y);
      return [x / l, y / l];
    };
    for (let i = 0; i < 6; i++) {
      const t = 0.12 + i * 0.15;
      const [px, py] = pt(t);
      const [tx, ty] = tan(t);
      // outward normal, then lean the leaf up the branch
      const nx = sign * ty;
      const ny = -sign * tx;
      const dx = nx * 0.7 + tx * 0.7;
      const dy = ny * 0.7 + ty * 0.7;
      const L = 8.5;
      const w = 2.6;
      const ex = px + dx * L;
      const ey = py + dy * L;
      const mx = px + dx * (L / 2);
      const my = py + dy * (L / 2);
      const wx = -dy * w;
      const wy = dx * w;
      leaves.push(
        `M${r(px)} ${r(py)}Q${r(mx + wx)} ${r(my + wy)} ${r(ex)} ${r(ey)}Q${r(mx - wx)} ${r(my - wy)} ${r(px)} ${r(py)}z`,
      );
    }
    return `M${P0[0]} ${P0[1]}Q${P1[0]} ${P1[1]} ${P2[0]} ${P2[1]}`;
  };
  const left = branch(-1);
  const right = branch(1);
  return (
    <Svg {...p}>
      <path {...d} d={left} />
      <path {...d} d={right} />
      {leaves.map((leaf) => (
        <path key={leaf} {...d} d={leaf} />
      ))}
      <path {...d} d="M32 52l3 3.5-3 3.5-3-3.5z" />
    </Svg>
  );
}

/** A structure that compounds: the column. */
export function Column(p: GlyphProps) {
  return (
    <Svg {...p}>
      <path {...d} d="M16 13h32" />
      <path {...d} d="M19 17h26" />
      <path {...d} d="M22 20v29M42 20v29" />
      <path {...d} d="M28 22v25M36 22v25" />
      <path {...d} d="M19 51h26" />
      <path {...d} d="M16 55h32" />
    </Svg>
  );
}

/** The application: a letter under a wax seal. */
export function Letter(p: GlyphProps) {
  return (
    <Svg {...p}>
      <path {...d} d="M8 17h48v32H8z" />
      <path {...d} d="M8 17l24 19 24-19" />
      <path {...d} d="M8 49l17-16M56 49L39 33" />
      <circle className="glyph-ink" cx="32" cy="36" r="7.5" />
      <circle {...d} cx="32" cy="36" r="7.5" />
      <path {...d} d="M32 31.5l3.5 4.5-3.5 4.5-3.5-4.5z" />
    </Svg>
  );
}

/** A calligraphic rule: two swashes meeting at a diamond. */
export function Flourish({ className = "" }: { className?: string }) {
  return (
    <Svg viewBox="0 0 240 24" className={`glyph-fine ${className}`} preserveAspectRatio="xMidYMid meet">
      <path {...d} d="M6 12C42 12 58 4 84 8S112 18 118 12" />
      <path {...d} d="M234 12c-36 0-52-8-78-4s-28 10-34 4" />
      <circle className="glyph-fill" cx="6" cy="12" r="1.3" />
      <circle className="glyph-fill" cx="234" cy="12" r="1.3" />
      <path className="glyph-fill" d="M120 7l4 5-4 5-4-5z" />
    </Svg>
  );
}

/** An engraved sun: rings and hairline rays around a diamond. */
export function Radiance({ className = "", rays = 48, spin = true }: { className?: string; rays?: number; spin?: boolean }) {
  const lines: string[] = [];
  const r = (n: number) => n.toFixed(1);
  for (let i = 0; i < rays; i++) {
    const a = (i / rays) * Math.PI * 2;
    const r1 = 68;
    const r2 = i % 4 === 0 ? 116 : i % 2 === 0 ? 100 : 88;
    lines.push(`M${r(200 + r1 * Math.cos(a))} ${r(200 + r1 * Math.sin(a))}L${r(200 + r2 * Math.cos(a))} ${r(200 + r2 * Math.sin(a))}`);
  }
  return (
    <Svg viewBox="0 0 400 400" className={`glyph-fine ${spin ? "spin-slower" : ""} ${className}`}>
      <circle {...d} cx="200" cy="200" r="197" strokeOpacity="0.6" />
      <circle cx="200" cy="200" r="176" strokeDasharray="1 7" strokeOpacity="0.8" />
      <circle {...d} cx="200" cy="200" r="126" />
      <circle {...d} cx="200" cy="200" r="60" />
      <circle {...d} cx="200" cy="200" r="20" />
      <path {...d} d={lines.join("")} />
      <path className="glyph-fill" d="M200 190l7 10-7 10-7-10z" />
    </Svg>
  );
}

/** A lozenge crest with the monogram at its heart. */
export function Crest({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative ${className}`}>
      <Svg viewBox="0 0 200 200" className="glyph-fine h-full w-full">
        <path {...d} d="M100 6l94 94-94 94L6 100z" />
        <path {...d} d="M100 20l80 80-80 80-80-80z" />
        <circle {...d} cx="100" cy="100" r="46" />
        <circle cx="100" cy="100" r="58" strokeDasharray="1 5" />
        <path {...d} d="M100 6v14M100 180v14M6 100h14M180 100h14" />
        <path className="glyph-fill" d="M100 44l3 4-3 4-3-4zM100 148l3 4-3 4-3-4zM44 100l4-3 4 3-4 3zM148 100l4-3 4 3-4 3z" />
      </Svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-[2.6em] font-medium italic leading-none text-gold">
        M<span className="-ml-[0.12em]">E</span>
      </span>
    </div>
  );
}
