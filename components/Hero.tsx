import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";
import { Container } from "./Section";
import HeroGlow from "./HeroGlow";
import mirror from "@/public/images/marta-mirror.jpg";
import texture from "@/public/images/hero-texture.jpg";

function Words({ text, base = 0 }: { text: string; base?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span className="word-in" style={{ ["--d" as string]: `${base + i * 90}ms` }}>
            {w}
          </span>
          {i < text.split(" ").length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-28 pb-16 md:pt-32 lg:pb-20">
      {/* Layered background: original abstract texture, vignette, glow */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={texture}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/70 to-ink-900" />
        <div className="absolute -left-40 top-1/3 h-[38rem] w-[38rem] rounded-full glow-gold blur-3xl" />
      </div>
      <HeroGlow />

      <Container className="relative">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="lg:col-span-7 xl:col-span-7">
            <p
              className="eyebrow mb-8 inline-flex items-center gap-4"
              style={{ animation: "wordIn 1.2s var(--ease-luxe) both" }}
            >
              <span className="h-px w-10 bg-gold/60" />
              {hero.eyebrow}
            </p>

            <h1 className="display-xl text-bone">
              <span className="block">
                <Words text={hero.titleA} base={200} />
              </span>
              <span className="block italic">
                <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <span className="word-in gold-text" style={{ ["--d" as string]: "420ms" }}>
                    {hero.titleB}
                  </span>
                </span>
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl font-display text-2xl font-light italic leading-snug text-bone/90 md:text-[1.7rem]"
              data-reveal
              style={{ ["--reveal-delay" as string]: "700ms" }}
            >
              {hero.subtitle}
            </p>

            <p
              className="mt-5 max-w-xl text-[0.95rem] leading-[1.8] text-bone-70"
              data-reveal
              style={{ ["--reveal-delay" as string]: "850ms" }}
            >
              {hero.body}
            </p>

            <div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              data-reveal
              style={{ ["--reveal-delay" as string]: "1000ms" }}
            >
              <Link href={hero.primary.href} className="btn btn-gold">
                {hero.primary.label}
              </Link>
              <Link href={hero.secondary.href} className="btn btn-ghost">
                {hero.secondary.label}
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative lg:col-span-5">
            <div
              className="arch-frame relative mx-auto w-[78%] max-w-[420px] lg:ml-auto lg:mr-6 lg:w-full"
              data-reveal="scale"
              style={{ ["--reveal-delay" as string]: "500ms" }}
            >
              <div className="arch relative aspect-[2/3] overflow-hidden">
                <Image
                  src={mirror}
                  alt="Marta Szkudlarek standing before an arched mirror"
                  fill
                  preload
                  placeholder="blur"
                  sizes="(max-width: 1024px) 78vw, 36vw"
                  className="object-cover object-[50%_20%] transition-transform duration-[2000ms] ease-out hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
              </div>

              {/* Floating caption card */}
              <div className="absolute -bottom-6 -left-4 flex items-center gap-4 border border-line bg-ink-900/80 px-5 py-4 backdrop-blur-xl sm:-left-10 animate-float">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold animate-pulse-soft" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-bright" />
                </span>
                <div>
                  <p className="font-display text-lg leading-none text-bone">{hero.caption.name}</p>
                  <p className="mt-1.5 text-[0.62rem] uppercase tracking-[0.28em] text-gold">
                    {hero.caption.role}
                  </p>
                </div>
              </div>

              {/* Rotating seal */}
              <div className="absolute -right-6 -top-6 hidden h-28 w-28 md:block lg:-right-10">
                <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow text-gold/80">
                  <defs>
                    <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                  </defs>
                  <text fontSize="8.6" letterSpacing="2.4" fill="currentColor" fontFamily="var(--font-sans)">
                    <textPath href="#circ">QUEEN IDENTITY · MARTA EMPIRE · EST. POZNAŃ ·</textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-gold">✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-14 hidden items-center gap-4 text-[0.62rem] uppercase tracking-[0.3em] text-bone-30 lg:flex">
          <span className="relative h-10 w-px overflow-hidden bg-line-strong">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-gold" style={{ animation: "cue 2.2s ease-in-out infinite" }} />
          </span>
          Scroll
          <style>{`@keyframes cue{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>
        </div>
      </Container>
    </section>
  );
}
