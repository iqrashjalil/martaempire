import { fit as c } from "@/lib/content";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { Diamond } from "./Ornaments";
import { Radiance } from "./Emblems";

/** Who the work is for, and who it is not for. The refusal is the point. */
export default function Fit() {
  return (
    <section id="fit" className={`relative scroll-mt-24 overflow-hidden bg-ink-950 ${sectionPad}`}>
      <div className="absolute inset-0 satin" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4" data-reveal>
            <Heading
              align="left"
              title={
                <>
                  {c.titleA} <span className="italic text-gold-bright">{c.titleB}</span>
                </>
              }
            />
            <div className="reveal mt-12 hidden lg:block" style={stagger(2)}>
              <Radiance className="h-64 w-64 text-gold/80" />
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-8 lg:gap-10" data-reveal>
            <div className="reveal" style={stagger(0)}>
              <p className="font-display text-2xl text-bone md:text-[1.8rem]">{c.forTitle}</p>
              <ul className="mt-6 border-t border-gold/25">
                {c.forItems.map((item) => (
                  <li key={item} className="flex items-baseline gap-4 border-b border-gold/15 py-4 text-[1rem] leading-[1.7] text-bone">
                    <Diamond className="relative top-[-1px] h-1.5 w-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" style={stagger(1)}>
              <p className="font-display text-2xl italic text-bone-70 md:text-[1.8rem]">{c.notTitle}</p>
              <ul className="mt-6 border-t border-line-strong">
                {c.notItems.map((item) => (
                  <li key={item} className="flex items-baseline gap-4 border-b border-line py-4 text-[1rem] leading-[1.7] text-bone-70">
                    <svg aria-hidden viewBox="0 0 12 12" className="relative top-[-1px] h-1.5 w-1.5 shrink-0 fill-none stroke-bone-50">
                      <path d="M6 .7 11.3 6 6 11.3.7 6z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
