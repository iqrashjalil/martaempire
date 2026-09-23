import ApplicationForm from "./ApplicationForm";
import { Container, Heading, sectionPad, stagger } from "./Section";
import { application as c } from "@/lib/content";
import { Flourish, Letter } from "./Emblems";

/** The application, on the landing page: title and note on the left, the seven questions on the right. */
export default function Apply() {
  const words = c.title.split(" ");

  return (
    <section id="apply" className={`relative scroll-mt-24 overflow-hidden border-t border-gold/15 bg-ink-950 ${sectionPad}`}>
      <div className="absolute inset-0 satin" />
      <span className="light right-[-10%] top-[-10%] h-[40rem] w-[40rem]" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4" data-reveal>
            <Letter className="reveal mb-8 h-16 w-16 text-gold lg:h-20 lg:w-20" style={stagger(0)} />
            <Heading
              align="left"
              title={
                <>
                  {words.slice(0, -1).join(" ")} <span className="italic text-gold-bright">{words.at(-1)}</span>
                </>
              }
              lead={c.body}
            />
            <p className="caption reveal mt-8 text-gold">{c.meta}</p>
            <Flourish className="reveal mt-10 hidden w-56 text-gold/80 lg:block" />
          </div>
          <div className="reveal lg:col-span-7 lg:col-start-6">
            <ApplicationForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
