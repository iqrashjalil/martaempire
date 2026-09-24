# Product

<!-- impeccable:product-schema 1 -->

> Written from the codebase and copy without an interview (the user asked to proceed directly). Every fact below is inferred from `lib/content.ts`, the committed assets and the live site's messaging, and is marked *(inferred)* where the repository does not state it outright. Correct anything wrong here; later design work reads this file.

## Platform

web

## Users

Established female founders who already earn and lead, whose business works but still runs on their own energy. They arrive on a phone or laptop from Instagram or a referral, usually in a quiet moment rather than at a desk *(inferred)*. Their job on this site: decide whether Marta's mentoring is for them and take one of two steps, book the Truth Session or apply for VIP Mentoring.

## Product Purpose

Marta Empire sells private, identity-level 1:1 mentoring ("Queen Identity") to founders building boutique, premium businesses. The site exists to make the offer intelligible, qualify the visitor honestly (this is for her / not for her), and convert into a Stripe checkout ($666 Truth Session) or an application (VIP Mentoring, 3 × $4,997). Success is a qualified application or a booked session, not traffic.

## Positioning

Identity work that lands in five business decisions: pricing, client selection, positioning and visibility, access and capacity, and decision-making structure. "Soul becomes a decision. That is the whole method." Fewer clients, higher entry, deeper work. No curriculum, no templates, no funnel; live work on the founder's real numbers and calendar.

## Operating Context

- This `staging` branch holds variant 2, a multi-page site: home `/`, `/services` (both offers, Stripe checkout for the Truth Session), `/pillars` (the four pillars and six decisions), `/appointment` (the VIP application form), `/faq` and `/terms`. The form posts to `/api/apply` and forwards to a webhook when `APPLICATIONS_WEBHOOK_URL` is set. Variant 1 (black and gold, single page) lives on `main`.
- The Truth Session is bought directly through Stripe checkout; VIP Mentoring is by application only, read personally by Marta.
- Contact by email (`info@martaszkudlarek.pl`) and Instagram (`@martaempire`). Based in Poznań, Poland; clients worldwide.

## Capabilities and Constraints

- Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4. All copy lives in `lib/content.ts`; sections are presentational.
- Two prices are factual and must not be restyled into something else: $666 and 3 × $4,997.
- Terminology to keep: Queen Identity, The Truth Session, VIP Mentoring, Truth Map, the four pillars (Self Concept, The Foundation, Sacred Standards, Shakti).

## Brand Commitments

- Name: Marta Empire. Mentor: Marta Szkudlarek.
- Variant 2 (this branch), specified by the user on 2026-09-24: completely different from variant 1; warm white paper with burgundy `#6b1428` as the primary colour; mood "modern minimal luxury" (visible hairline grid, square corners, 1px rules, one burgundy colour field per page); Instrument Serif for display with Geist for body; Services, Pillars, Appointment and FAQ on their own pages; the appointment page is the application form only. The OG image and icons use the self-hosted Instrument Serif files in `app/fonts`.
- Carried over from variant 1 feedback: little text per section, photographs used generously, every section animated with scroll reveals that replay in reverse, the platform cursor, readable type (a hairline Didone was rejected), and drawn graphics wherever a section has no photograph (here: burgundy monoline marks in `components/Marks.tsx`, one mark per idea).
- The Truth Session is the entry offer: its button is the page's burgundy primary on home and services and links to Stripe checkout; VIP Mentoring is reached by application.
- Variant 1 (`main`): near-black ground with champagne gold, Cormorant Garamond with Manrope, engraved gold line art, warm boutique elegance with layered photo compositions. Rejected for variant 1 on 2026-09-23: a plain editorial refinement and a sparse lookbook.
- Copy the mentor should confirm (both variants): the FAQ answer describing what follows a Truth Session booking (receipt, intake by email, session time), and "applying commits you to nothing". Variant 2 FAQ answers on Zoom, invoices, declined applications and the 14-day withdrawal are drawn from `lib/terms.ts`.
- Voice: direct, confrontational, declarative sentences; no coaching clichés, no hype, no emoji.

## Evidence on Hand

- Five photographs of Marta in `public/images/` (mirror, desk, sofa, bed, hallway) plus an abstract texture. These are real and are the site's only imagery.
- Four anonymised client stories in copy (no names, no numbers beyond "seven-figure"). Do not invent testimonials, logos, metrics or press.
- No video, no reviews, no partner logos.

## Product Principles

1. Prove by specificity, not volume: fewer sections, each saying one thing precisely.
2. The photographs carry presence; type carries authority. Decoration adds neither.
3. Qualify honestly: the "not for her" list is as prominent as the "for her" list.
4. Two actions only, always findable: book the session, apply for mentoring.
5. Legibility over atmosphere: nothing important is set small, faint or tracked out.
