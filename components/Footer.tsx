import Link from "next/link";
import { footer, site } from "@/lib/content";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="relative border-t border-rule bg-paper-2">
      <Container className="pt-20 pb-10 md:pt-24">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="font-display text-[2.6rem] leading-none">
              Marta <span className="em">Empire</span>
            </p>
            <p className="body mt-5 max-w-[34ch]">{footer.line}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="label">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[0.95rem] text-ink transition-colors hover:text-burgundy">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <p className="label">Write</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 block break-words font-display text-[1.5rem] leading-tight transition-colors hover:text-burgundy"
            >
              {site.email}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-[0.95rem] text-ink-70 transition-colors hover:text-burgundy"
            >
              Instagram @martaempire
            </a>
            <p className="mt-3 text-[0.95rem] text-ink-55">{site.location}</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-rule pt-8 text-[0.85rem] text-ink-55 sm:flex-row sm:justify-between">
          <p>{footer.legal}</p>
          <p>{site.mentor}</p>
        </div>
      </Container>
    </footer>
  );
}
