import Image from "next/image";
import { about as c, site } from "@/lib/content";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { Corners, Frame } from "./Ornaments";
import desk from "@/public/images/marta-desk.jpg";

export default function About() {
  return (
    <section id="about" className={`relative scroll-mt-24 overflow-hidden ${sectionPad}`}>
      <span className="light right-[-10%] bottom-[-10%] h-[40rem] w-[40rem] opacity-70" />
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div data-reveal>
              <Heading
                align="left"
                title={
                  <>
                    {c.titleA}
                    <br />
                    <span className="italic text-gold-bright">{c.titleB}</span>
                  </>
                }
                lead={c.body}
              />
            </div>

            <p className="reveal mt-12 font-display text-3xl italic text-gold-bright" data-reveal style={stagger(0)}>
              {site.mentor}
            </p>
          </div>

          {/* The desk portrait in its frame, with the facts card laid over its corner */}
          <div className="relative mx-auto w-full max-w-[520px] pb-16 lg:col-span-6 lg:max-w-none lg:pb-0" data-reveal>
            <div className="drift-slow ml-auto w-[80%] lg:w-[76%]">
              <Frame offset="right" corners={false}>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={desk}
                    alt="Marta Szkudlarek at her desk"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 80vw, 38vw"
                    className="object-cover"
                  />
                </div>
              </Frame>
            </div>
            <dl
              className="reveal absolute -bottom-2 left-0 w-[62%] border border-gold/40 bg-ink-950/95 p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:w-[54%] lg:-bottom-10 lg:w-[50%] lg:p-8"
              style={stagger(2, 400)}
            >
              <Corners inset={8} size={14} />
              {c.facts.map((f, i) => (
                <div key={f.k} className={`py-3 ${i > 0 ? "border-t border-gold/15" : ""}`}>
                  <dt className="caption">{f.k}</dt>
                  <dd className="mt-1 font-display text-lg leading-tight text-bone md:text-xl">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
