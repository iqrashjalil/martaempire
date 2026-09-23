import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";
import { Arrow, Container } from "./Section";
import { Corners, Diamond, Seal } from "./Ornaments";
import mirror from "@/public/images/marta-mirror.jpg";
import hallway from "@/public/images/marta-hallway.jpg";
import texture from "@/public/images/hero-texture.jpg";

const delay = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="absolute inset-0 -z-20">
        <Image src={texture} alt="" fill preload sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/70 to-ink-900" />
        <div className="absolute inset-0 satin" />
      </div>
      <span className="light right-[-10%] top-[-10%] -z-10 h-[46rem] w-[46rem]" />
      <span className="light left-[-15%] bottom-[-20%] -z-10 h-[34rem] w-[34rem] opacity-60" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Voice: on every width the proposition and the action come first. */}
          <div className="lg:col-span-6">
            <h1 className="display-xl text-bone">
              <span className="line-mask">
                <span style={delay(200)}>{hero.titleA}</span>
              </span>
              <span className="line-mask">
                <span className="italic text-gold-bright" style={delay(340)}>
                  {hero.titleB}
                </span>
              </span>
            </h1>

            <p className="lead fade-up mt-8 max-w-2xl text-bone" style={delay(800)}>
              {hero.subtitle}
            </p>
            <p className="prose-body fade-up mt-6" style={delay(920)}>
              {hero.body}
            </p>

            <div
              className="fade-up mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10"
              style={delay(1040)}
            >
              <a href={hero.primary.href} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                {hero.primary.label}
              </a>
              <Link href={hero.secondary.href} className="link">
                {hero.secondary.label}
                <Arrow />
              </Link>
            </div>
            <p className="caption fade-up mt-5 text-bone-50" style={delay(1100)}>
              {hero.primaryNote}
            </p>

            <p className="caption fade-up mt-12 flex flex-wrap items-center gap-x-4 gap-y-2" style={delay(1200)}>
              <span className="text-bone">{hero.caption.name}</span>
              <Diamond className="h-1.5 w-1.5" />
              <span>{hero.caption.role}</span>
            </p>
          </div>

          {/* Composition: arched portrait, offset gold frame, a second photograph, the seal */}
          <div className="relative mx-auto mb-10 w-full max-w-[400px] sm:max-w-[480px] lg:col-span-6 lg:mb-0 lg:max-w-none">
            <div className="relative ml-auto w-[76%] lg:w-[72%]">
              <svg
                aria-hidden
                className="pointer-events-none absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.6"
              >
                <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)" rx="0" pathLength={1} className="frame-draw" />
              </svg>
              <div className="hero-photo arch relative aspect-[2/3] overflow-hidden">
                <Image
                  src={mirror}
                  alt="Marta Szkudlarek standing before an arched mirror"
                  fill
                  preload
                  placeholder="blur"
                  sizes="(max-width: 1024px) 76vw, 36vw"
                  className="object-cover object-[50%_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
              </div>
            </div>

            <div
              className="fade-up absolute -bottom-10 left-0 w-[44%] lg:-bottom-14 lg:left-2 lg:w-[40%]"
              style={delay(900)}
            >
              <div className="relative aspect-[3/4] overflow-hidden outline outline-1 -outline-offset-1 outline-gold/40 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                <Image
                  src={hallway}
                  alt="Marta Szkudlarek laughing in a hallway"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 34vw, 16vw"
                  className="object-cover object-[50%_18%]"
                />
                <Corners inset={8} size={14} />
              </div>
            </div>

            <Seal className="fade-up absolute -top-8 right-[-4%] h-24 w-24 sm:h-28 sm:w-28 lg:-top-10 lg:right-[-6%] lg:h-32 lg:w-32" />
          </div>
        </div>
      </Container>
    </section>
  );
}
