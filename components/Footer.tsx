import Link from "next/link";
import { footer as c, hero, site } from "@/lib/content";
import { Container } from "./Section";
import { Diamond } from "./Ornaments";

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-gold/20 bg-ink-950">
      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <p className="flex items-center gap-3 font-display text-3xl text-bone">
              <span>Marta</span>
              <Diamond className="h-2 w-2" />
              <span className="italic">Empire</span>
            </p>
            <p className="mt-5 max-w-[40ch] font-display text-lg italic text-bone-50">{hero.body}</p>
          </div>
          <div className="md:col-span-3">
            <p className="caption text-gold">Navigate</p>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[0.95rem] text-bone-70 transition-colors hover:text-gold-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="caption text-gold">Write</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 block font-display text-xl text-bone transition-colors hover:text-gold-bright"
            >
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[0.95rem] text-bone-70 transition-colors hover:text-gold-bright"
            >
              Instagram
            </a>
            <p className="mt-4 text-[0.95rem] text-bone-50">Poznań, Poland · Clients worldwide</p>
          </div>
        </div>
        <p className="mt-20 border-t border-gold/15 pt-8 text-[0.85rem] text-bone-50">{c.legal}</p>
      </Container>
    </footer>
  );
}
