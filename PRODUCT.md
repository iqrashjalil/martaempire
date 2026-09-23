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

- Home page (with the application form as its last section) and `/terms`; the form posts to `/api/apply` and forwards to a webhook when `APPLICATIONS_WEBHOOK_URL` is set.
- The Truth Session is bought directly through Stripe checkout; VIP Mentoring is by application only, read personally by Marta.
- Contact by email (`info@martaszkudlarek.pl`) and Instagram (`@martaempire`). Based in Poznań, Poland; clients worldwide.

## Capabilities and Constraints

- Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4. All copy lives in `lib/content.ts`; sections are presentational.
- Two prices are factual and must not be restyled into something else: $666 and 3 × $4,997.
- Terminology to keep: Queen Identity, The Truth Session, VIP Mentoring, Truth Map, the four pillars (Self Concept, The Foundation, Sacred Standards, Shakti).

## Brand Commitments

- Name: Marta Empire. Mentor: Marta Szkudlarek.
- Colour scheme is binding, confirmed by the user on 2026-09-23: near-black ground with champagne gold accents.
- Typography chosen by the user on 2026-09-23: Cormorant Garamond for headlines (semibold display, medium italic leads) with a clean sans for body (Manrope). A hairline Didone (Bodoni Moda) was tried the same day and rejected as hard to read. The OG image and favicon (`app/opengraph-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx`) use the self-hosted Cormorant Garamond Light files in `app/fonts`, the same family at a lighter weight.
- Graphics requested by the user on 2026-09-23: every section without a photograph carries engraved gold line art (`components/Emblems.tsx`), and each of the six mechanism decisions has its own emblem.
- Critique fixes on 2026-09-24 (user asked for every finding fixed): the Truth Session is the primary action everywhere (hero and mobile menu link straight to the Stripe payment link, its panel is featured and gold, VIP is ghost); the four client stories returned as a compact two-line strip with emblems; the for-her / not-for-her list ships; the six decisions carry one line each; the pillar panel shows what she does; the application is a real form with a review step, session-storage recovery and a Terms line; section padding was tightened at the user's request; the mechanism closing line was removed at the user's request.
- Copy added on 2026-09-24 that the mentor should confirm: the FAQ answer describing what follows a Truth Session booking (receipt, intake by email, session time), and "applying commits you to nothing".
- Style direction chosen by the user on 2026-09-23: warm boutique elegance with layered photo compositions, gold ornament and framing, texture and light, and rich motion. Rejected the same day: a plain editorial refinement and a sparse lookbook.
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
