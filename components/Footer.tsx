import Link from "next/link";
import { footer as c, site } from "@/lib/content";
import { Container } from "./Section";

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-line bg-ink-950">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="font-display text-4xl font-light text-bone">
              Marta <span className="italic text-gold">Empire</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone-50">{site.description}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-bone-30">Navigate</p>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-bone-70 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-bone-30">Write</p>
            <a href={`mailto:${site.email}`} className="mt-5 block font-display text-xl text-bone transition-colors hover:text-gold">
              {site.email}
            </a>
            <p className="mt-2 text-sm text-bone-50">Poznań, Poland · Clients worldwide</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.66rem] uppercase tracking-[0.22em] text-bone-30 sm:flex-row sm:items-center sm:justify-between">
          <p>{c.legal}</p>
          <p className="flex items-center gap-3">
            <span className="text-gold">✦</span> Fewer clients. Higher entry. Deeper work.
          </p>
        </div>
      </Container>
    </footer>
  );
}
