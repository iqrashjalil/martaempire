import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArchDoor } from "@/components/Drafts";

/** Shared page gutter. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14 ${className}`}>{children}</div>;
}

/** Vertical rhythm for a standard section. */
export const pad = "py-20 md:py-28 lg:py-32";

/** Inline style helper for an entrance delay on first-view animations. */
export const delay = (ms: number): CSSProperties => ({ ["--d" as string]: `${ms}ms` }) as CSSProperties;

/** The hairline column grid drawn behind a section, on the layout's own columns. */
export function Gridlines({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="mx-auto h-full w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="gridlines">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={i >= 4 ? "hidden lg:block" : ""} />
          ))}
        </div>
      </div>
    </div>
  );
}

export type HeroPhoto = { src: StaticImageData; alt: string; pos?: string };

/** A two-part headline: the first phrase in ink, the last in burgundy italic. */
export function Title({
  a,
  b,
  as: Tag = "h2",
  size = "lg",
  className = "",
  split = true,
}: {
  a: ReactNode;
  b?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md" | "sm";
  className?: string;
  split?: boolean;
}) {
  return (
    <Tag className={`display-${size} ${className}`}>
      {a}
      {b && (
        <>
          {" "}
          {split && <br />}
          <span className="em">{b}</span>
        </>
      )}
    </Tag>
  );
}

/** A small drawn arrow for links and buttons. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow h-[0.9em] w-[0.9em] shrink-0 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden
    >
      <path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

/** An arrow that points up-right: leaves the site. */
export function ArrowOut({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow h-[0.85em] w-[0.85em] shrink-0 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden
    >
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

type Action = { label: string; href: string };

/** A button or text link that opens external targets in a new tab with a visible cue. */
export function Action({
  action,
  variant,
  className = "",
}: {
  action: Action;
  variant: "primary" | "outline" | "paper" | "outline-paper" | "link";
  className?: string;
}) {
  const external = /^https?:/.test(action.href);
  const cls = variant === "link" ? `link ${className}` : `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {action.label}
      {external ? <ArrowOut /> : <Arrow />}
      {external && <span className="sr-only"> (opens Stripe checkout in a new tab)</span>}
    </>
  );
  return external ? (
    <a href={action.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={action.href} className={cls}>
      {inner}
    </Link>
  );
}

/**
 * The opening of an inner page: breadcrumb, a large headline on the grid,
 * a lead, and an optional photograph or mark on the right.
 */
export function PageHero({
  crumb,
  titleA,
  titleB,
  lead,
  aside,
  photo,
  children,
}: {
  crumb: string;
  titleA: string;
  titleB: string;
  lead: string;
  aside?: ReactNode;
  photo?: HeroPhoto;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-rule pt-32 md:pt-40 lg:min-h-[44rem]">
      <Gridlines className="-z-10" />
      <Container>
        <nav aria-label="Breadcrumb" className="fade-up label flex items-center gap-3" style={delay(0)}>
          <Link href="/" className="transition-colors hover:text-burgundy">
            Home
          </Link>
          <span aria-hidden className="h-px w-6 bg-rule-strong" />
          <span aria-current="page" className="text-burgundy">
            {crumb}
          </span>
        </nav>
        <div className="grid gap-12 pb-16 pt-10 md:pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-14">
          <div className={aside || photo ? "lg:col-span-7" : "lg:col-span-10"}>
            <h1 className="display-xl">
              <span className="line-mask">
                <span style={delay(120)}>{titleA}</span>
              </span>{" "}
              <span className="line-mask">
                <span className="em" style={delay(260)}>
                  {titleB}
                </span>
              </span>
            </h1>
            <p className="lead fade-up mt-10" style={delay(600)}>
              {lead}
            </p>
            {children && (
              <div className="fade-up mt-10" style={delay(760)}>
                {children}
              </div>
            )}
          </div>
          {aside && <div className="lg:col-span-4 lg:col-start-9 lg:self-end">{aside}</div>}
        </div>
      </Container>
      {photo && (
        <div className="px-5 pb-12 sm:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[38%] lg:p-0">
          <div className="hero-photo photo relative aspect-[4/5] lg:aspect-auto lg:h-full" style={delay(250)}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              preload
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 38vw"
              className={`object-cover ${photo.pos ?? ""}`}
            />
          </div>
        </div>
      )}
      <span aria-hidden className="hero-rule absolute inset-x-0 bottom-0 block h-px bg-burgundy" style={delay(500)} />
    </section>
  );
}

/**
 * The page's one burgundy colour field: a closing statement and its action,
 * full-bleed, with the grid showing through in paper.
 */
export function ColorField({
  titleA,
  titleB,
  primary,
  secondary,
  children,
}: {
  titleA: string;
  titleB: string;
  primary: Action;
  secondary?: Action;
  children?: ReactNode;
}) {
  return (
    <section className="on-burgundy relative isolate overflow-hidden bg-burgundy text-on-burgundy">
      <Gridlines className="-z-10" />
      <Container className="py-24 md:py-32 xl:pt-52">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10" data-reveal>
          <div className="lg:col-span-8">
            <span className="rule-draw mb-10 w-24 text-on-burgundy" />
            <h2 className="display-lg reveal">
              {titleA}{" "}
              <br />
              <span className="em">{titleB}</span>
            </h2>
            {children}
          </div>
          <div className="reveal lg:col-span-4 lg:flex lg:justify-end xl:justify-center">
            {/* One column, one width: a filled and an outlined button, labels left and arrows right on the same lines. */}
            <div className="relative grid w-max max-w-full gap-3">
              {/* The door: the actions stand in its opening, below the springing line. The jambs run off the section floor. */}
              <ArchDoor className="pointer-events-none absolute top-[-265px] left-1/2 hidden w-[410px] -translate-x-1/2 xl:block" />
              <Action action={primary} variant="paper" className="justify-between!" />
              {secondary && <Action action={secondary} variant="outline-paper" className="justify-between! bg-burgundy" />}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
