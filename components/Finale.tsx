import Image from "next/image";
import Link from "next/link";
import { finale as c } from "@/lib/content";
import { Container, Eyebrow } from "./Section";
import hallway from "@/public/images/marta-hallway.jpg";

export default function Finale() {
  return (
    <section id="finale" className="relative isolate overflow-hidden bg-ink-950">
      <div className="grid lg:grid-cols-12">
        {/* Image column */}
        <div className="relative min-h-[60vw] lg:col-span-5 lg:min-h-[100svh]">
          <Image
            src={hallway}
            alt="Marta Szkudlarek in a hallway, arms raised"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-[50%_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink-950" />
          <div className="absolute bottom-8 left-8 hidden lg:block">
            <p className="font-display text-xl italic text-bone/90">{c.quoteA}</p>
          </div>
        </div>

        {/* Copy column */}
        <div className="relative flex items-center lg:col-span-7">
          <div className="absolute right-[-15%] top-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full glow-gold blur-3xl" />
          <Container className="py-24 lg:py-40 lg:pl-20">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-lg mt-8 max-w-3xl text-bone" data-reveal>
              {c.title.split(" ").slice(0, 3).join(" ")}{" "}
              <span className="italic">
                <span className="gold-text">{c.title.split(" ").slice(3).join(" ")}</span>
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-[1.85] text-bone-70" data-reveal>
              {c.body}
            </p>

            <figure className="mt-14 max-w-xl border-l border-gold/60 pl-8" data-reveal>
              <p className="font-display text-2xl font-light text-bone lg:hidden">{c.quoteA}</p>
              <p className="font-display text-2xl font-light italic leading-snug text-bone/90 md:text-3xl">{c.quoteB}</p>
            </figure>

            <div className="mt-14 flex flex-col gap-4 sm:flex-row" data-reveal>
              <Link href={c.primary.href} className="btn btn-gold">
                {c.primary.label}
              </Link>
              <a href={c.secondary.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                {c.secondary.label}
              </a>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
