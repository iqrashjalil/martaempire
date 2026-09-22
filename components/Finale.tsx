import Image from "next/image";
import Link from "next/link";
import { finale as c } from "@/lib/content";
import { Container, Eyebrow, sectionPad } from "./Section";
import hallway from "@/public/images/marta-hallway.jpg";

export default function Finale() {
  return (
    <section id="finale" className={`relative isolate overflow-hidden bg-ink-950 ${sectionPad}`}>
      <div className="absolute right-[-15%] top-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full glow-gold blur-3xl" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-6 text-bone" data-reveal>
              {c.title.split(" ").slice(0, 3).join(" ")}{" "}
              <span className="italic">
                <span className="gold-text">{c.title.split(" ").slice(3).join(" ")}</span>
              </span>
            </h2>
            <p className="mt-6 max-w-md leading-[1.8] text-bone-70" data-reveal>
              {c.body}
            </p>

            <figure className="mt-8 max-w-lg border-l border-gold/60 pl-6" data-reveal>
              <p className="font-display text-xl font-light text-bone">{c.quoteA}</p>
              <p className="mt-1 font-display text-xl font-light italic leading-snug text-bone/90 md:text-2xl">
                {c.quoteB}
              </p>
            </figure>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row" data-reveal>
              <Link href={c.primary.href} className="btn btn-gold">
                {c.primary.label}
              </Link>
              <a href={c.secondary.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                {c.secondary.label}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:col-span-4 lg:col-start-9">
            <div className="arch-frame mx-auto w-[80%] max-w-[360px] lg:w-full" data-reveal="right">
              <div className="arch relative aspect-[3/4] overflow-hidden">
                <Image
                  src={hallway}
                  alt="Marta Szkudlarek in a hallway, arms raised"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 80vw, 28vw"
                  className="object-cover object-[50%_25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
