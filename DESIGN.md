---
name: Marta Empire
description: Warm boutique elegance on black velvet. Champagne gold as frame, numeral and rule; a Didone voice; Manrope for the small print.
colors:
  ink-950: "#070605"
  ink-900: "#0b0a09"
  ink-800: "#15120f"
  ink-700: "#1f1a16"
  bone: "#f3ecdf"
  bone-70: "rgba(243, 236, 223, 0.74)"
  bone-50: "rgba(243, 236, 223, 0.56)"
  bone-30: "rgba(243, 236, 223, 0.36)"
  line: "rgba(243, 236, 223, 0.12)"
  line-strong: "rgba(243, 236, 223, 0.28)"
  gold: "#cfae74"
  gold-bright: "#e9cf96"
  gold-deep: "#9a7b45"
  gold-line: "rgba(207, 174, 116, 0.45)"
  gold-faint: "rgba(207, 174, 116, 0.18)"
typography:
  display-xl:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(3.6rem, 8.6vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 96"
  display-lg:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.6rem, 4.8vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.005em"
    fontVariation: "'opsz' 96"
  display-md:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2rem, 3.2vw, 2.9rem)"
    fontWeight: 500
    lineHeight: 1.1
    fontVariation: "'opsz' 96"
  display-sm:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.1vw, 1.9rem)"
    fontWeight: 500
    lineHeight: 1.2
    fontVariation: "'opsz' 96"
  lead:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.3rem, 1.9vw, 1.65rem)"
    fontWeight: 400
    lineHeight: 1.35
    fontStyle: italic
    fontVariation: "'opsz' 48"
  title:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.5rem, 2vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.25
    fontVariation: "'opsz' 48"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.8
  body-sm:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.16em"
    textTransform: uppercase
  control:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
    textTransform: uppercase
  numeral:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontWeight: 500
    fontStyle: italic
    fontVariation: "'opsz' 48"
  field:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)"
    fontWeight: 400
    fontVariation: "'opsz' 48"
rounded:
  none: "0px"
  arch: "999px 999px 6px 6px"
  arch-offset: "999px 999px 10px 10px"
  pill: "999px"
spacing:
  gutter-sm: "24px"
  gutter-md: "40px"
  gutter-lg: "64px"
  container: "1360px"
  section-sm: "112px"
  section-lg: "160px"
  heading-gap: "28px"
  block-gap: "80px"
  block-gap-lg: "112px"
  row: "28px"
  frame-offset: "12px"
  frame-inset: "14px"
  corner-inset: "10px"
  corner-size: "18px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink-950}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "16.8px 32px"
  button-gold-hover:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.ink-950}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "16.8px 32px"
  button-ghost-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink-950}"
  button-nav:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink-950}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  link-underlined:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.control}"
    padding: "0 0 5.6px 0"
  link-underlined-hover:
    textColor: "{colors.gold-bright}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.field}"
    rounded: "{rounded.none}"
    padding: "14.4px 0"
  panel:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "48px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.bone-70}"
    typography: "{typography.caption}"
  nav-link-hover:
    textColor: "{colors.bone}"
  caption:
    textColor: "{colors.bone-50}"
    typography: "{typography.caption}"
  numeral:
    textColor: "{colors.gold}"
    typography: "{typography.numeral}"
---

# Design System: Marta Empire

## Overview

**Creative North Star: "The Boutique House on Black Velvet"**

Marta Empire is a private, high-priced mentoring practice, and the site is built as the house it would occupy: a near-black interior that reads as velvet rather than flat pixels, one candle of warm light per room, and champagne gold used only where a jeweller would use it. Photographs hang in drawn gold frames with a second frame set 12px behind, chapters open on a rule-diamond-rule divider, decisions are counted in roman numerals, and the house seal (an ME monogram in a ring of lettering) signs the opening view. Nothing glows; the light is placed.

Density is generous and editorial. Sections run 112px to 160px tall, headings breathe on a 28px rhythm, and body copy never exceeds 58 characters. The voice is a high-contrast Didone (Bodoni Moda at optical size 96 for display, 48 for leads, numerals and form fields) set against a quiet Manrope for body and small uppercase captions. Layouts are layered, not spread: a portrait overlaps its frame, a facts card lays over a photograph's corner, a seal sits on the edge of the composition.

Motion is a single drawing-on technique used everywhere: frames draw with a stroke, photographs unveil from a bottom clip while settling from 1.12 to 1, lines rise from masks, scroll reveals stagger at 110ms and replay on every pass, and everything eases on one expo curve. Inertia scrolling runs continuously on fine pointers, and a soft pool of gold light trails the platform cursor; reduced motion and coarse pointers keep state changes only. Confirmed rejections: the glowing-card coaching template and the bare lookbook of plain spreads.

**Key Characteristics:**
- Ink ground with still film grain and a faint satin weave; flat black is never shipped bare.
- Gold is a material (frames, hairlines, numerals, diamonds, prices, one fill), never a wash or a gradient tint on type.
- Bodoni Moda carries every heading, lead, pull line, numeral and form field; Manrope carries body, captions and controls.
- Ornament vocabulary is fixed: divider, diamond, corner marks, offset frame, roman numeral, seal.
- One soft gold light per section, positioned on purpose; one imperative per view.
- Zero radius except the arch; hairline borders, not cards.
- One easing curve, long durations (0.6s to 2.4s), one entrance grammar.

## Colors

Black velvet in four steps of warm ink, bone for type at four opacities, and a three-step champagne gold with two translucent line weights.

### Primary
- **Champagne Gold** (`gold`): the material of the house. Frames, corner marks, dividers, diamonds, numerals, prices, the filled primary button, focus rings, selection highlight, the cursor, the caret. Used on hairlines at 15% to 45% opacity and at full strength only on small elements or one button per view.
- **Bright Champagne** (`gold-bright`): the italic second word of every headline ("Identity.", "Decision."), prices, the button sweep fill, hover text on links and footer items, the active numeral, and the inline error line under a form field. It is the highlight, never a surface.
- **Deep Gold** (`gold-deep`): scrollbar thumb on hover. Reserved for pressed and secondary states; not used on type.
- **Gold Line** (`gold-line`): the offset frame behind photographs and the ghost button border at rest.
- **Gold Faint** (`gold-faint`): declared for the faintest gold fills; the build reaches it through Tailwind `gold/15` and `gold/20` on section borders, list rules and panel borders.

### Neutral
- **Ink 900** (`ink-900`): the page ground and theme colour. Every section sits on it unless it is a darker chapter.
- **Ink 950** (`ink-950`): the darker chapter ground (Invitation, FAQ, Apply, Footer, the mobile menu at 97%), the ticker band at 60%, scrollbar track, and text on gold buttons.
- **Ink 800 / Ink 700** (`ink-800`, `ink-700`): the panel gradient (ink-800 at 92% to ink-900 at 96%) and the scrollbar thumb. Never used as a card fill on their own.
- **Bone** (`bone`): primary type, headline word one, ghost button text, link text, nav wordmark.
- **Bone 70** (`bone-70`): body copy, leads, nav links, FAQ questions at rest, ticker mantras.
- **Bone 50** (`bone-50`): captions, "before" column type, the not-for-her list, placeholders, footer small print, muted headline fragments.
- **Bone 30** (`bone-30`): inactive tab numerals and tags, the not-for-her diamond.
- **Line / Line Strong** (`line`, `line-strong`): bone hairlines at 12% and 28% for truths rows, mobile menu rows, the terms sidebar rule, the field underline at rest, and the link underline track.

### Named Rules
**The Gold-as-Material Rule.** Gold is applied only where a physical object would be gilded: a hairline, a frame, a numeral, a diamond, a price, one filled button. It is never a background wash, a gradient over type, or a glow behind a card. The only gold soft light is the `.light` pool, one per section, blurred 40px at 22% peak opacity.

**The One Accent Rule.** Each view carries one filled gold element (the primary button) and one bright-gold word in its headline. Everything else in gold is a hairline or a small mark.

**The Two-Ground Rule.** Chapters alternate between Ink 900 and Ink 950; a darker chapter is separated by a gold hairline at 15% and receives the satin weave. There are no third surface tones and no cards with their own fill except the offer panel.

## Typography

**Display Font:** Bodoni Moda variable, optical size axis, roman and italic (with Didot, Georgia, serif)
**Body Font:** Manrope 300 to 600 (with system-ui, sans-serif)

**Character:** A high-contrast Didone at optical size 96 gives the headlines hairline serifs and blade-thin joins that read as engraved at 6rem; the same face at optical size 48, italic, carries leads, numerals, pull quotes and form fields with warmth. Manrope is deliberately quiet: one weight (500) for uppercase captions and controls, regular for body, so the serif is the only voice in the room.

### Hierarchy
- **Display XL** (500, `clamp(3.6rem, 8.6vw, 6rem)`, 0.96, -0.01em, opsz 96): the hero only. Two words on two lines; the second word italic in Bright Champagne.
- **Display LG** (500, `clamp(2.6rem, 4.8vw, 4.25rem)`, 1.04, -0.005em, opsz 96): every chapter title via the shared Heading, and the application success title (italic).
- **Display MD** (500, `clamp(2rem, 3.2vw, 2.9rem)`, 1.1, opsz 96): the /terms page title.
- **Display SM** (500, `clamp(1.5rem, 2.1vw, 1.9rem)`, 1.2, opsz 96): declared and available; not yet placed in the build.
- **Lead** (400 italic, `clamp(1.3rem, 1.9vw, 1.65rem)`, 1.35, opsz 48): the sentence under every chapter title and the hero subtitle. Max width 42rem.
- **Title** (400, 1.5rem to 1.9rem, 1.25, Bodoni): item titles inside lists and grids: truths, mechanism areas, story headings, FAQ questions, pillar tabs, offer names (2.4rem to 3rem), facts values. Set in Tailwind size utilities on `font-display`, not a named class.
- **Pull line** (Bodoni italic, 1.25rem to 1.9rem): the gold or bright-gold closing line of a block (pillar mantra, mechanism closer, mentor signature).
- **Body** (400, 1.0625rem, 1.8): `.prose-body` for paragraphs, Bone 70, 58ch max. Secondary body at 0.95rem to 1rem, 1.6 to 1.8, with a 34ch to 50ch max inside grids.
- **Caption** (500, 0.78rem, 0.16em, uppercase): labels, terms under a price, column heads, the hero credentials line, question counters, keyboard hints. Bone 50 by default, gold when it names an active state or a footer column.
- **Control** (500, 0.86rem, 0.06em, uppercase): button and text-link labels.
- **Numeral** (500 italic, gold, opsz 48): roman numerals I to VI beside truths, mechanism areas and stories at 1.5rem to 1.875rem; clause numerals on /terms at 1.125rem; zero-padded arabic numerals ("01") on pillar tabs and the mobile menu at 0.875rem to 1rem.
- **Field** (400, `clamp(1.4rem, 2.2vw, 1.85rem)`, opsz 48): application inputs set in Bodoni with an italic Bone 50 placeholder.

### Named Rules
**The Second-Word Rule.** A chapter title splits into a roman first phrase in Bone and an italic last word or phrase in Bright Champagne. The split is the only colour change inside a headline; no gradient text, no tracked-out display.

**The Serif-Only Voice Rule.** Anything the reader is meant to hear (headings, leads, list titles, mantras, prices, numerals, even the input she types into) is Bodoni. Manrope never rises above 1.0625rem and never carries a headline.

**The Caption Floor Rule.** Manrope uppercase is never smaller than 0.78rem or tracked wider than 0.16em, and its lowest opacity is Bone 50. Bone 30 is reserved for inactive controls, not for readable copy.

## Layout

A single centred container of 1360px with gutters of 24px, 40px at 640px and 64px at 1024px. Sections are 112px tall on mobile and 160px from 768px (`py-28 md:py-40`); the hero is full-viewport (`min-h-svh`) with its own padding. Inside a section the chapter Heading is followed by a 80px gap to the first block, 112px from 1024px.

The grid is twelve columns at 1024px and up, with 32px to 48px column gaps. Recurring splits: 6/6 (hero, About: voice left, composition right), 5/7 (Pillars: framed photo, tabs plus panel), 7/4 with the paragraph pushed to columns 9 to 12 (Mechanism: title, then a self-aligned closer), 4/7 with the right block starting at column 6 (FAQ, Apply, /terms: a sticky left aside at `top: 8rem`, content right). Lists are three columns (Mechanism areas) with gold hairlines between cells and no cell fills.

Vertical rhythm inside blocks is 28px between a divider, title and lead; rows in lists are 28px to 32px tall padding on each side; offer panels use 32px padding on mobile and 48px from 768px. The mobile order puts the voice below the composition in the hero (`order-last lg:order-first`), photographs shrink to 76% to 82% of the column with a 420px to 520px cap, and the pillar tabs become a horizontally scrolling row.

Fixed layers: the navigation at `z-50` (transparent, then 85% Ink 900 with a 12px blur and a gold 15% hairline after 24px of scroll), grain at `z-60`.

## Elevation & Depth

Depth is tonal and material, not stacked. The two grounds (Ink 900 and Ink 950), the still grain overlay (5.5% soft-light fractal noise, fixed), the satin weave (an 8px diagonal repeat at 1.6% bone) and one blurred gold light per section make a flat black feel like fabric. Panels and photographs sit on hairlines rather than lifting off the page. Overlapping layers use a long, soft black drop shadow so the overlap reads as a physical object laid on top; that shadow is never applied to a panel sitting on its own.

### Shadow Vocabulary
- **Laid-over object** (`box-shadow: 0 40px 80px -30px rgba(0,0,0,0.9)`): the small bed portrait overlapping the hero composition, and the facts card overlapping the About portrait. Only for an element that physically overlaps a photograph.
- **Featured panel glow** (`box-shadow: 0 40px 90px -40px rgba(207,174,116,0.35)`, hover `0 50px 100px -40px rgba(207,174,116,0.45)`): the VIP Mentoring panel only, alongside a 60% gold border and a 4px hover lift.
- **Section light** (`.light`: radial gradient from `rgba(233,207,150,0.22)` through `rgba(207,174,116,0.07)` at 45% to transparent at 72%, `filter: blur(40px)`, sized 30rem to 50rem): the candle. One per section, placed off an edge or centred behind a chapter.

### Named Rules
**The One Candle Rule.** Each section carries exactly one `.light` pool (the hero carries two, one at 60%); it is placed with intent (behind the composition, off the top-right, centred under the offer panels) and never tiled or stacked.

**The Hairline-Not-Card Rule.** Content groups are bounded by 1px lines at 12% bone or 15% to 25% gold, never by a filled or raised surface. The single exception is the offer panel.

## Shapes

Everything is square-cornered: buttons, panels, photographs, inputs, cards, nav. The one curved silhouette is the arch (`border-radius: 999px 999px 6px 6px` on the photograph, `999px 999px 10px 10px` on its offset frame) used for the hero mirror portrait. Circles appear only as the seal and the section light.

Borders are 1px hairlines. A framed photograph carries a 1px gold outline at 35% on its edge, a second 1px gold-line frame inset -14px and translated 12px right and down (or left and down with `data-offset="left"`) that slides home and brightens on hover, and four 18px gold corner marks inset 10px (14px marks inset 8px on small cards). The drawn hero frame is an SVG rect with `stroke-opacity 0.6` and `pathLength 1`. Panels have a 1px gold border at 22% (60% when featured) with corner marks inset 12px. Rules end in a diamond (a 12-unit rotated square path) on the chapter divider: two 64px hairlines fading to gold 70% with a 10px diamond between. Diamond bullets are 6px to 8px and separate caption fragments and list items.

## Components

Refined and restrained: controls are typographic first, gold second, and every state change is a slow slide rather than a snap.

### Buttons
- **Shape:** square, 1px border (`0px` radius); uppercase Manrope 500 at 0.86rem tracked 0.06em; padding 1.05rem by 2rem; `inline-flex` with a 0.75rem gap.
- **Gold (primary):** Champagne Gold fill, Ink 950 text, gold border. Hover: a Bright Champagne plane sweeps in from the left over 0.7s on the expo curve. Active: 1px press. Disabled: 50% opacity.
- **Ghost (secondary):** transparent, Bone text, Gold Line border. Hover: gold rises from the bottom over 0.7s, text flips to Ink 950 and the border goes full gold.
- **Nav button:** the gold button compacted to 0.625rem by 1.25rem.
- **Full-width variant:** inside offer panels the button spans the panel (`w-full`); featured gets gold, the other gets ghost.
- **Focus:** a 1.5px gold outline offset 4px, global.

### Text Link
- **Style:** uppercase control type in Bone with a 1px Line Strong underline 0.35rem below and a small drawn arrow (16-unit SVG, 1.25 stroke, 0.85em).
- **Hover:** a gold underline scales in from the left over 0.6s, the text goes Bright Champagne, the arrow slides 4px right.

### Cards / Containers
- **Offer panel:** square, gradient from Ink 800 at 92% to Ink 900 at 96%, 1px gold border at 22%, corner marks inset 12px, padding 32px (48px from 768px). Hover: border to gold 50% over 0.6s. Featured: border at 60%, the gold glow, a 4px lift on hover. Content: Bodoni name at 2.4rem to 3rem, Bright Champagne price at 2.4rem to 2.8rem beside a caption for terms, a gold-15% divided include list with diamond bullets, the button pinned to the bottom.
- **Framed photograph:** the `Frame` primitive (offset frame, hairline outline, corner marks, `reveal-photo` unveil). Aspect 3/4 on portraits, 2/3 for the arched hero portrait. Optional `arch` drops the corner marks. The `drift-slow` wrapper adds a scroll-driven 3% vertical drift.
- **Quote card:** 1px gold border at 25%, corner marks, 40px to 48px padding, Bodoni italic at 1.7rem to 2rem with a gold caption attribution.
- **Facts card:** Ink 950 at 95% with a 4px backdrop blur, 1px gold border at 40%, corner marks, the laid-over shadow; caption/Bodoni definition pairs divided by gold 15% rules.

### Inputs / Fields
- **Style:** borderless except a 1px Line Strong bottom rule, transparent, Bodoni at `clamp(1.4rem, 2.2vw, 1.85rem)`, 0.9rem vertical padding, Bone text, italic Bone 50 placeholder. Textareas auto-grow with no resize handle.
- **Focus:** the bottom rule turns gold over 0.4s; the global outline is suppressed on fields.
- **Error:** a Bright Champagne 0.9rem line below the field in an `aria-live` region; no red.
- **Progress:** a row of 1px segments, gold for answered and current, Line Strong for the rest; a caption counter "Question 3 of 7" with the number in gold.
- **Question:** Bodoni 300 at 1.875rem to 2.25rem, hint in italic Bone 50.

### Navigation
- **Bar:** fixed, transparent over the hero with 24px to 28px vertical padding; after 24px of scroll it compacts to 16px, takes Ink 900 at 85% with a 12px blur and a gold 15% bottom hairline, over 0.5s.
- **Wordmark:** "Marta" roman, a 6px diamond, "Empire" italic, Bodoni 1.45rem in Bone.
- **Links:** Manrope uppercase 0.8rem tracked 0.12em in Bone 70; hover to Bone with a gold underline scaling in from the left over 0.5s. Hidden below 1024px.
- **Mobile:** a two-hairline toggle that crosses into an X; a full-screen Ink 950 at 97% sheet with one light, bottom-anchored Bodoni 2.1rem items each with a zero-padded gold numeral and a Line rule, staggered in at 60ms, then a gold Apply button and a ghost Terms button.

### Tabs (Pillars)
- **Style:** a vertical list (horizontal scroll under 768px) of Bodoni 1.25rem to 1.6rem titles with a gold numeral and a caption tag, divided by Line hairlines. Active: gold bottom border, Bone title, Bright Champagne numeral, gold tag. Inactive: Bone 50 title, Bone 30 numeral. The panel re-enters with a 0.6s fade-up.

### Accordion (FAQ)
- **Style:** rows on gold 20% hairlines; Bodoni 1.5rem to 1.7rem question in Bone 70 (Bone when open); a 16px plus made of two 1px hairlines that rotates 45 degrees and turns gold when open. The answer grid-row animates 0fr to 1fr over 0.6s.

### Chapter Heading
The house opener: divider, Display LG title with a bright-gold italic second phrase, optional italic lead, each staggered 90ms as a reveal. Centred at 56rem max, or left-aligned at 48rem with the leading hairline hidden.

### Divider, Diamond, Corners, Seal
The fixed ornament set. Divider: rule, 10px diamond, rule. Diamond: a 6px to 8px gold bullet between caption fragments and before list items (Bone 30 in the not-for-her list). Corners: four L-marks. Seal: a 120-unit SVG with two 0.75 stroke rings at 55%, "MARTA EMPIRE · QUEEN IDENTITY" on a text path in Manrope, and an italic ME monogram; it rotates once every 48s in the hero.

### Ticker
A 24px-padded band on Ink 950 at 60% with gold 20% top and bottom hairlines; Bodoni italic mantras in Bone 70 at 1.25rem to 1.5rem separated by diamonds, moving left over 70s, paused on hover, with 160px ink fades at each end.

### Motion Grammar
One easing, `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out-expo`), for every entrance, hover and state change. Entrances: `rise` (a line lifting out of an overflow mask, 1.3s), `fade-up` (16px, 1.1s), `unveil` (a clip from the bottom, 1.5s to 1.6s) paired with `settle` (scale 1.12 to 1, 2.1s to 2.4s), `draw` (stroke-dashoffset, 2s). Scroll reveals: each `.reveal` element is observed on its own; hidden it sits at opacity 0, 32px down and 5px blurred (`.reveal-card` cells: 56px down at scale 0.96), resolving over 1s to 1.2s. Elements that enter together are staggered 110ms apart in reading order by the script, and the state reverses when an element leaves the viewport so the entrance replays on the next pass. Engaged only when `html.js` is present so a failed script hides nothing. Scroll-driven: `parallax-bg` (-10% to 10% at 1.2 scale) on section backgrounds and `drift` / `drift-slow` (6% / 3%) on framed photographs, under `@supports (animation-timeline: view())`. Continuous: the seal (48s), the ticker (70s), Lenis inertia at lerp 0.085 with an 88px anchor offset. The cursor is the platform default; a 640px pool of gold light (screen blend, 20% at its centre) trails it at 8% per frame on fine pointers. Hover fills sweep over 0.6s to 0.7s; borders and colours cross over 0.4s to 0.6s. Reduced motion removes every animation and reveal and collapses hover transitions to 0.01s; coarse pointers get no Lenis.

## Do's and Don'ts

### Do:
- **Do** open every chapter with the Heading primitive: divider, Display LG title with the last phrase in italic Bright Champagne, an italic lead.
- **Do** hang every photograph in the Frame primitive (hairline outline, 12px offset gold frame, corner marks) inside a `[data-reveal]` so it unveils and drifts.
- **Do** count with gold Bodoni italic numerals: roman for truths, mechanism areas, stories and clauses.
- **Do** place exactly one `.light` pool per section and give darker chapters (Ink 950) the satin weave and a gold 15% top hairline.
- **Do** bound lists with 1px hairlines (Line for neutral rows, gold at 15% to 25% for chapters) and separate inline fragments with a diamond.
- **Do** keep body copy at 1.0625rem, line-height 1.8, Bone 70, 58ch; keep captions at 0.78rem, 0.16em, Bone 50 or gold.
- **Do** run every transition on `--ease-out-expo` with the house durations (0.4s to 0.7s for state, 1s to 2.4s for entrances) and honour reduced motion.
- **Do** ship one gold button and one underlined text link as the pair of actions in a view.

### Don't:
- **Don't** wash gold across a surface, a gradient over type, or a glow behind a card; gold is a hairline, a mark or a single fill.
- **Don't** round corners; the arch on the hero portrait is the only curve, and circles belong to the seal and the light.
- **Don't** put a drop shadow under a panel or photograph that is not physically overlapping another element; the laid-over shadow is for overlaps only.
- **Don't** set a heading, price, numeral or field in Manrope, and don't let Manrope exceed 1.0625rem.
- **Don't** set readable copy below 0.78rem, wider than 0.16em, or fainter than Bone 50.
- **Don't** add a second candle, a second easing curve or a second entrance technique; the frame draw, unveil and rise are the whole vocabulary.
- **Don't** introduce a third surface tone or a filled card; the offer panel is the only filled container.
- **Don't** use glyph icons or icon packs; the only icons are the drawn arrow, the plus made of hairlines, the diamond and the seal.
