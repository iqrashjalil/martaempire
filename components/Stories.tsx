import { stories as c } from "@/lib/content";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { Column, Compass, Hourglass, Scales } from "./Emblems";

const emblems = [Hourglass, Compass, Scales, Column];

const numerals = ["I", "II", "III", "IV"];

/** Four anonymised client stories, two lines each: the decision, and what changed. */
export default function Stories() {
  return (
    <section id="stories" className={`relative scroll-mt-24 overflow-hidden border-t border-gold/15 ${sectionPad}`}>
      <span className="light right-[-15%] top-[20%] h-[36rem] w-[36rem] opacity-60" />
      <Container>
        <div data-reveal>
          <Heading
            title={
              <>
                {c.titleA} <span className="italic text-gold-bright">{c.titleB}</span>
              </>
            }
            lead={c.body}
          />
        </div>

        <ol className="mt-16 grid gap-x-12 border-t border-gold/20 lg:mt-20 lg:grid-cols-2" data-reveal>
          {c.items.map((s, i) => {
            const Emblem = emblems[i % emblems.length];
            return (
            <li
              key={s.who}
              className="reveal reveal-card group grid grid-cols-[2.5rem_1fr_3.5rem] gap-x-4 border-b border-gold/20 py-8 md:grid-cols-[2.5rem_1fr_4.5rem] md:py-9"
              style={stagger(i, 120)}
            >
              <span className="numeral text-2xl leading-none">{numerals[i]}</span>
              <div>
                <p className="font-display text-[1.4rem] leading-snug text-bone md:text-[1.6rem]">{s.who}</p>
                <p className="mt-3 max-w-[48ch] text-[0.95rem] leading-[1.7] text-bone-70">
                  <span className="text-gold">{s.decision}</span> {s.change}
                </p>
              </div>
              <Emblem className="h-14 w-14 justify-self-end text-gold/70 transition-colors duration-500 group-hover:text-gold-bright md:h-[4.5rem] md:w-[4.5rem]" />
            </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
