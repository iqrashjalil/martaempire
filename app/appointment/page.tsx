import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { application as c, routes, site } from "@/lib/content";
import { delay } from "@/components/ui";
import { Letter } from "@/components/Marks";
import ApplicationForm from "@/components/ApplicationForm";
import desk from "@/public/images/marta-desk.jpg";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function AppointmentPage() {
  return (
    <section className="relative grid lg:min-h-svh lg:grid-cols-12">
      {/* The burgundy panel: who reads, and what happens next. */}
      <div className="on-burgundy relative bg-burgundy text-on-burgundy lg:col-span-5">
        <div className="flex h-full flex-col px-5 pt-32 pb-14 sm:px-8 lg:min-h-svh lg:px-14 lg:pt-36">
          <nav aria-label="Breadcrumb" className="fade-up label flex items-center gap-3" style={delay(0)}>
            <Link href="/" className="transition-colors hover:text-on-burgundy">
              Home
            </Link>
            <span aria-hidden className="h-px w-6 bg-on-burgundy-rule" />
            <span aria-current="page" className="text-on-burgundy">
              {c.label}
            </span>
          </nav>

          <h1 className="display-xl mt-10">
            <span className="line-mask">
              <span style={delay(120)}>Write to</span>
            </span>{" "}
            <span className="line-mask">
              <span className="em" style={delay(260)}>
                me.
              </span>
            </span>
          </h1>
          <p className="fade-up mt-8 max-w-[40ch] text-[1.08rem] leading-[1.65] text-on-burgundy-70" style={delay(600)}>
            {c.body}
          </p>

          <ol className="fade-up mt-12 border-t border-on-burgundy-rule" style={delay(760)}>
            {c.steps.map((s, i) => (
              <li key={s.k} className="grid grid-cols-[2.25rem_1fr] gap-2 border-b border-on-burgundy-rule py-4">
                <span className="font-display text-[1.3rem] leading-none">{i + 1}</span>
                <span>
                  <span className="block font-display text-[1.35rem] leading-none">{s.k}</span>
                  <span className="mt-1.5 block text-[0.92rem] leading-[1.55] text-on-burgundy-70">{s.v}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="fade-up mt-auto hidden items-end gap-6 pt-12 lg:flex" style={delay(900)}>
            <div className="photo relative aspect-[4/5] w-28 shrink-0 outline outline-1 -outline-offset-1 outline-on-burgundy-rule">
              <Image src={desk} alt="Marta Szkudlarek at her desk" fill placeholder="blur" sizes="112px" className="object-cover" />
            </div>
            <div>
              <p className="font-display text-[1.5rem] italic leading-none">{site.mentor}</p>
              <p className="label mt-2">{c.meta2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* The form on paper. */}
      <div className="relative bg-paper px-5 pt-16 pb-20 sm:px-8 lg:col-span-7 lg:px-16 lg:pt-36 xl:px-24">
        <div className="mx-auto max-w-[44rem]">
          <Letter className="fade-up mb-10 h-12 w-12" />
          <ApplicationForm />
          <p className="mt-12 border-t border-rule pt-6 text-[0.92rem] text-ink-55">
            Prefer to start smaller?{" "}
            <Link href={routes.truthSession} className="text-ink underline decoration-burgundy/50 underline-offset-4 transition-colors hover:text-burgundy">
              Book the Truth Session
            </Link>{" "}
            instead, or write to{" "}
            <a href={`mailto:${site.email}`} className="text-ink underline decoration-burgundy/50 underline-offset-4 transition-colors hover:text-burgundy">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
