import type { CSSProperties, ReactNode } from "react";

/**
 * Drafts: section-scale construction drawings from the atelier's drawing
 * board. Burgundy hairlines (paper on a burgundy field), square-cut, drawn on
 * in order when their block is revealed: the form first, then the
 * construction lines, then the one filled point. Each drawing is the idea of
 * its section, never a generic ornament. See `.draft` in globals.css.
 */

/** Order in the drawing sequence: each step starts 120ms after the last. */
const at = (i: number) => ({ pathLength: 1, style: { "--i": i } as CSSProperties });
/** A construction guide: dashed, fades in once the forms are drawn. */
const guide = (i = 6) => ({ className: "draft-guide", style: { "--i": i } as CSSProperties });

function Draft({
  viewBox,
  className = "",
  stroke = 1,
  children,
}: {
  viewBox: string;
  className?: string;
  stroke?: number;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      aria-hidden
      className={`draft ${className}`}
      style={{ "--sw": stroke } as CSSProperties}
    >
      {children}
    </svg>
  );
}

/** Two 45° ticks that close a dimension line (architect's convention). */
function Ticks({ points, i }: { points: [number, number][]; i: number }) {
  return (
    <path {...at(i)} d={points.map(([x, y]) => `M${x - 5} ${y + 5}L${x + 5} ${y - 5}`).join("")} />
  );
}

/**
 * The house door: an arched opening in elevation, keystone, imposts and the
 * compass centre it was struck from. It stands behind the colour field's
 * actions, so the invitation is literally the way in. The jambs run down
 * past the section floor.
 */
export function ArchDoor({ className = "" }: { className?: string }) {
  return (
    <Draft viewBox="0 0 410 1000" className={className}>
      <path {...at(0)} d="M1 1000V229A204 204 0 0 1 409 229V1000" />
      <path {...at(1)} d="M40 1000V229A165 165 0 0 1 370 229V1000" />
      <path {...at(2)} d="M1 229H40M370 229H409M1 241H40M370 241H409" />
      <path {...at(3)} d="M197 25.2 199.5 64M213 25.2 210.5 64" />
      <path {...guide()} d="M40 229H370" />
      <path {...guide(7)} d="M205 229 60.8 84.8" />
      <path {...at(4)} d="M199 229h12M205 223v12" />
      <circle className="draft-fill" cx="205" cy="229" r="2.5" />
    </Draft>
  );
}

/**
 * "Now it runs on you." The whole entablature rests on one column; the dashed
 * columns either side are the structure that is not built yet.
 */
export function OneColumn({ className = "" }: { className?: string }) {
  return (
    <Draft viewBox="0 0 440 360" className={className}>
      {/* load */}
      <path {...at(0)} d="M110 2v22M104 18l6 6 6-6M220 2v22M214 18l6 6 6-6M330 2v22M324 18l6 6 6-6" />
      {/* entablature */}
      <path {...at(1)} d="M0 34H440M10 42H430V78H10ZM10 54H430" />
      {/* the one column: abacus, echinus, shaft, base, plinth */}
      <path {...at(2)} d="M184 78H256V88H184Z" />
      <path {...at(3)} d="M190 88 198 98H242L250 88" />
      <path {...at(4)} d="M200 98V318M240 98V318" />
      <path {...at(5)} d="M192 318H248V328H192ZM184 328H256V338H184Z" />
      <path {...guide(6)} d="M210 102V314M220 102V314M230 102V314" />
      {/* ground */}
      <path {...at(5)} d="M0 338H440" />
      {/* the columns that are missing */}
      <path {...guide(7)} d="M58 78V338M90 78V338M350 78V338M382 78V338M52 78H96M344 78H388" />
      {/* height of the one support */}
      <path {...at(6)} d="M22 78V338" />
      <Ticks i={6} points={[[22, 78], [22, 338]]} />
      <rect className="draft-fill" x="217" y="75" width="6" height="6" />
    </Draft>
  );
}

/**
 * Who this is built for: a spirit level at rest, bubble dead centre, over a
 * measured rule. Honest fit, both ways.
 */
export function Level({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: 25 }, (_, k) => {
    const x = 0.5 + k * 20;
    return `M${x} 84V${k === 12 ? 100 : k % 5 === 0 ? 96 : 90}`;
  }).join("");
  return (
    <Draft viewBox="0 0 481 100" className={className}>
      <path {...at(0)} d="M0.5 24.5H480.5V68.5H0.5Z" />
      <path {...at(1)} d="M16.5 24.5V68.5M464.5 24.5V68.5" />
      <path {...at(2)} d="M196.5 34.5H284.5V58.5H196.5Z" />
      <path {...at(3)} d="M226.5 34.5V58.5M254.5 34.5V58.5" />
      <path {...at(4)} d="M0.5 84H480.5" />
      <path {...at(5)} d={ticks} />
      <circle {...at(5)} cx="240.5" cy="46.5" r="7" />
      <circle className="draft-fill" cx="240.5" cy="46.5" r="2" />
    </Draft>
  );
}

/**
 * Four women, four decisions: a protractor struck from the section's top-right
 * corner, with four radii leaving one centre and each ending in a square.
 * Same starting point, four different directions.
 */
export function FourRadii({ className = "" }: { className?: string }) {
  const C = 440;
  const pt = (r: number, deg: number) => {
    const a = (deg * Math.PI) / 180;
    return [+(C - r * Math.cos(a)).toFixed(1), +(r * Math.sin(a)).toFixed(1)] as const;
  };
  const arc = (r: number) => `M${C - r} 0A${r} ${r} 0 0 0 ${C} ${r}`;
  const ticks = Array.from({ length: 16 }, (_, k) => {
    const deg = k * 6;
    const [x1, y1] = pt(380, deg);
    const [x2, y2] = pt(deg % 18 === 0 ? 400 : 390, deg);
    return `M${x1} ${y1}L${x2} ${y2}`;
  }).join("");
  const radii = [18, 36, 54, 72];
  return (
    <Draft viewBox="0 0 440 440" className={className}>
      <path {...at(0)} d={arc(380)} />
      <path {...at(1)} d={arc(260)} />
      <path {...guide(2)} d={arc(140)} />
      <path {...at(3)} d={ticks} />
      {radii.map((deg, i) => {
        const [x1, y1] = pt(140, deg);
        const [x2, y2] = pt(380, deg);
        return <path key={deg} {...at(4 + i)} d={`M${x1} ${y1}L${x2} ${y2}`} />;
      })}
      {radii.map((deg) => {
        const [x, y] = pt(380, deg);
        return <rect key={deg} className="draft-fill" x={x - 3} y={y - 3} width="6" height="6" />;
      })}
      <path {...guide(8)} d={radii.map((deg) => { const [x, y] = pt(140, deg); return `M${C} 0L${x} ${y}`; }).join("")} />
    </Draft>
  );
}

/* ── The four stories: one drawing each, of the decision she made ── */

/** 45° hatching clipped to a rectangle, as one path. */
function hatch(x: number, y: number, w: number, h: number, step = 9) {
  let d = "";
  for (let c = step; c < w + h; c += step) {
    const u1 = Math.max(0, c - h);
    const u2 = Math.min(w, c);
    d += `M${x + u1} ${y + h - (c - u1)}L${x + u2} ${y + h - (c - u2)}`;
  }
  return d;
}

/** A full calendar, and two days a week protected for creation. */
function StoryWeek() {
  const X = 14, Y = 12, CW = 36, RH = 28;
  const cols = Array.from({ length: 6 }, (_, k) => `M${X + CW * (k + 1)} ${Y}V${Y + RH * 4}`).join("");
  const rows = Array.from({ length: 3 }, (_, k) => `M${X} ${Y + RH * (k + 1)}H${X + CW * 7}`).join("");
  return (
    <>
      <path {...at(0)} d={`M${X} ${Y}H${X + CW * 7}V${Y + RH * 4}H${X}Z`} />
      <path {...guide(2)} d={cols + rows} />
      <path {...at(3)} d={`M${X + CW * 4} ${Y}H${X + CW * 6}V${Y + RH * 4}H${X + CW * 4}Z`} />
      <path {...guide(5)} d={hatch(X + CW * 4, Y, CW * 2, RH * 4)} />
      <rect className="draft-fill" x={X + CW * 5 - 3} y={Y - 3} width="6" height="6" />
    </>
  );
}

/** Of everything she could be known for, the one thing. */
function StoryPoint() {
  const dots: [number, number][] = [];
  for (let c = 0; c < 9; c++) for (let r = 0; r < 4; r++) dots.push([28 + c * 28, 28 + r * 28]);
  const [px, py] = [168, 56];
  return (
    <>
      {dots.map(([x, y]) =>
        x === px && y === py ? null : <circle key={`${x}-${y}`} className="draft-fill" cx={x} cy={y} r="1.6" fillOpacity={0.45} />,
      )}
      <path {...at(1)} d={`M0 ${py}H280M${px} 0V140`} />
      <circle {...at(2)} cx={px} cy={py} r="15" />
      <rect className="draft-fill" x={px - 4} y={py - 4} width="8" height="8" />
    </>
  );
}

/** Many approaches, one gate, and only one passes through. */
function StoryGate() {
  const ys = [16, 43, 97, 124];
  return (
    <>
      <path {...guide(1)} d={ys.map((y) => `M8 ${y}L160 ${y < 70 ? 62 : 78}`).join("")} />
      <path {...at(0)} d="M168 26V60H176V26ZM168 80V114H176V80Z" />
      <path {...at(2)} d="M8 70H266" />
      <path {...at(3)} d="M259 64l7 6-7 6" />
      <rect className="draft-fill" x="5" y="67" width="6" height="6" />
    </>
  );
}

/** One model, deepened, with its capacity set first. */
function StoryDepth() {
  const cx = 124, cy = 70;
  const sq = (s: number) => `M${cx - s / 2} ${cy - s / 2}h${s}v${s}h${-s}Z`;
  return (
    <>
      <path {...at(0)} d={sq(124)} />
      <path {...at(1)} d={sq(88)} />
      <path {...at(2)} d={sq(54)} />
      <path {...at(3)} d={sq(22)} />
      <path {...guide(4)} d={`M${cx - 62} ${cy - 62}L${cx - 11} ${cy - 11}M${cx + 62} ${cy - 62}L${cx + 11} ${cy - 11}M${cx - 62} ${cy + 62}L${cx - 11} ${cy + 11}M${cx + 62} ${cy + 62}L${cx + 11} ${cy + 11}`} />
      <path {...at(5)} d={`M226 ${cy - 62}V${cy + 62}M206 ${cy - 62}H232M206 ${cy + 62}H232`} />
      <Ticks i={6} points={[[226, cy - 62], [226, cy + 62]]} />
      <rect className="draft-fill" x={cx - 3} y={cy - 3} width="6" height="6" />
    </>
  );
}

const storyDrawings = [StoryWeek, StoryPoint, StoryGate, StoryDepth];

/** The drawing for story `index` (0–3), set at the foot of its column. */
export function StoryDraft({ index, className = "" }: { index: number; className?: string }) {
  const Drawing = storyDrawings[index % storyDrawings.length];
  return (
    <Draft viewBox="0 0 280 140" className={className}>
      <Drawing />
    </Draft>
  );
}

/**
 * The four pillars: a temple front in elevation. Four columns carry one
 * entablature and its pediment; when the root is solid, the empire holds.
 */
export function FourPillars({ className = "" }: { className?: string }) {
  const xs = [80, 160, 240, 320];
  const each = (f: (x: number) => string) => xs.map(f).join("");
  return (
    <Draft viewBox="0 0 400 400" className={className}>
      <path {...at(0)} d="M20 90 200 22 380 90Z" />
      <path {...guide(1)} d="M62 84 200 34 338 84" />
      <path {...at(1)} d="M20 90H380V122H20ZM20 104H380" />
      <path {...at(2)} d={each((x) => `M${x - 24} 122H${x + 24}V130H${x - 24}ZM${x - 20} 130 ${x - 14} 138H${x + 14}L${x + 20} 130`)} />
      <path {...at(3)} d={each((x) => `M${x - 14} 138V360M${x + 14} 138V360`)} />
      <path {...guide(4)} d={each((x) => `M${x - 5} 142V356M${x + 5} 142V356`)} />
      <path {...at(4)} d={each((x) => `M${x - 20} 360H${x + 20}V368H${x - 20}Z`)} />
      <path {...at(5)} d="M10 368H390V380H10ZM0 380H400V392H0Z" />
      <rect className="draft-fill" x="197" y="19" width="6" height="6" />
    </Draft>
  );
}

/**
 * The honest answers: an arched window, glazed and barred, and the light it
 * lets fall on the floor.
 */
export function HonestWindow({ className = "" }: { className?: string }) {
  return (
    <Draft viewBox="0 0 360 480" className={className}>
      <path {...at(0)} d="M60 420V170A120 120 0 0 1 300 170V420Z" />
      <path {...at(1)} d="M78 404V172A102 102 0 0 1 282 172V404Z" />
      <path {...at(2)} d="M180 70V404M78 172H282M78 250H282M78 330H282" />
      <path {...at(3)} d="M180 172 107.9 99.9M180 172 252.1 99.9" />
      <path {...at(4)} d="M40 420H320V432H40Z" />
      <path {...guide(5)} d="M78 432 22 474M282 432 238 474M180 432 130 474" />
      <path {...at(6)} d="M22 474H238" />
      <path {...guide(7)} d="M60 170H300" />
      <rect className="draft-fill" x="177" y="169" width="6" height="6" />
    </Draft>
  );
}

/** Who this is for: the square peg flush in its slot. Not for: the round one that rests on top. */
export function Fit({ kind, className = "" }: { kind: "for" | "not"; className?: string }) {
  const slot = "M10 64H110V104H170V64H270";
  return (
    <Draft viewBox="0 0 280 120" className={className}>
      <path {...at(0)} d={slot} />
      <path {...guide(1)} d="M10 116H270" />
      <path {...guide(2)} d={hatch(10, 64, 100, 52, 10) + hatch(170, 64, 100, 52, 10) + hatch(110, 104, 60, 12, 10)} />
      {kind === "for" ? (
        <>
          <path {...at(3)} d="M112 66H168V102H112Z" />
          <path {...at(4)} d="M140 6V40M134 34l6 6 6-6" />
          <rect className="draft-fill" x="137" y="81" width="6" height="6" />
        </>
      ) : (
        <>
          <circle {...at(3)} cx="140" cy="40.1" r="36" />
          <path {...guide(4)} d="M110 64V104M170 64V104" />
          <rect className="draft-fill" x="137" y="37" width="6" height="6" />
        </>
      )}
    </Draft>
  );
}

/** Printer's crop marks at the four corners of a photograph. */
export function Crop() {
  return (
    <span aria-hidden className="crop">
      <i className="tl" />
      <i className="tr" />
      <i className="bl" />
      <i className="br" />
    </span>
  );
}
