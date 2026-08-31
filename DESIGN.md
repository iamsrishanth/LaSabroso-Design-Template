---
version: alpha
name: La Sabroso
description: >-
  A warm bohemian cafe in Madhapur, Hyderabad. "A sensory sanctuary" fusing
  Italian elegance with Indian spice. Cosmic-latte cream and forest green
  with green-tinted neon-glow accents under the Histerm hand-lettered
  wordmark, Outfit UI sans, and Playfair editorial quotes. Live-site tokens
  verified 2026-08-31 (Next.js + Tailwind v4 build).
colors:
  primary: "{colors.forest}"
  cream: "#FFFDD0"
  forest: "#166534"
  forest-deep: "#14532D"
  ink: "#0F1710"
  muted: "#4E584E"
  neon-green: "#166534"
  neon-cream: "#FFFDD0"
  gold: "#FFD700"
  mint: "#D5F5E3"
  terracotta: "#E57A4F"
  terracotta-deep: "#C9623A"
typography:
  wordmark:
    fontFamily: "'Histerm', 'Dancing Script', cursive"
    fontSize: 3rem
    fontWeight: 400
    lineHeight: 1
  h1:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 3rem
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
  h3:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  kicker:
    fontFamily: "'Histerm', 'Dancing Script', cursive"
    fontSize: 1.875rem
    fontWeight: 400
    lineHeight: 1.1
  accent-quote:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 1.1875rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  pill: 999px
  card: 20px
  img: 16px
spacing:
  xs: 6px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  section: 72px
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: 13px 30px
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
  button-outline:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.forest}"
    rounded: "{rounded.pill}"
    padding: 13px 30px
  button-culinary:
    backgroundColor: "{colors.terracotta-deep}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: 13px 30px
  card:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 30px 26px
  menu-item:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 18px
---

# La Sabroso — Brand Design System v2

## Live-Site Sync (verified 2026-08-31)

The cafe's official site was rebuilt (Next.js + Tailwind v4). Source of truth for tokens: the live compiled CSS chunk (`/_next/static/chunks/*.css`) under `lasabroso.com`. Verified live findings:

- **Fonts:** `--font-script: "Histerm"` (self-hosted OTF via next/font local, `font-display: swap`, synthetic fallback metrics) — replaces Dancing Script. `--font-sans: "Outfit"` — replaces Nunito.
- **Palette:** `--background: #FFFDD0` (cosmic latte cream) · `--foreground: #0F1710` (green-tinted ink) · `--color-boho-green: #166534` (Tailwind green-800) · `--color-boho-cream` / `--color-dark-base` tokens exist (naming quirk: values are ink/cream).
- **Neon effects (real recipes, extracted verbatim):**
  - `drop-shadow-neon-cream: 0 0 2px #0A100A66, 0 0 4px #0A100A33, 0 0 8px #0A100A1a`
  - `drop-shadow-neon-green: 0 0 2px #166534, 0 0 4px #166534, 0 0 8px #16653499, 0 0 16px #1665344d`
  - The neon glow is now green/cream. The legacy #FF5C8A neon-pink no longer appears in the live build and is quarantined.
- **Anti-drift probe recipe:** re-verify tokens by curling `/` → extracting the `/_next/static/chunks/*.css` link → grepping `--font-script`, `--font-sans`, `--color-*` in the chunk. Run this before any palette/font derivation.

Design read: warm boho cafe brand, gallery-airy (variance 6, motion 5, density 4). The hero message is the brand; centered hero is deliberate.

## Overview

La Sabroso ("tasty" in Spanish) is a **sensory sanctuary** in Madhapur, Hyderabad. Open daily 11 AM–11 PM. The identity fuses **Italian elegance with Indian spice**: a warm, hand-crafted, bohemian interior where graphic art sits above upholstery, quotes are emboldened on textured walls, hanging lights glow, and the Histerm wordmark anchors the room. The mood is welcoming, artisanal, slightly playful, never corporate.

- Tagline: "Feed your spirit. Feed your belly. Feed your soul."
- Positioning: "A sophisticated blend of Italian elegance and Indian spice."
- Signature offerings: parmesan onion rings, crum-fried cheese momos, crispy fried cheese rolls, liquid-nitrogen ice cream, artisan coffee.
- Est. since **2023**. Owner: self-taught BTech foodie, Chengalpet Venu Madhav.
- Amenities: pet-friendly, free parking, free Wi-Fi, live music, AC, indoor + outdoor seating, wheelchair-accessible, kids allowed, takeaway, smoking area.
- **New live features (Aug 2026):** Franchise inquiry (FOCO model) in footer; corporate & bulk-event bookings with group perks; IG highlights inventory: Feedback, Desserts, Laso Delights, Ice Cream Lab, Elated News.

## Colors

- **Cream (`#FFFDD0`)** — page base (live value; cosmic latte). Never pure white.
- **Forest (`#166534`)** — primary. Headings, filled buttons, footer. Contrast on cream ≈ 11.8:1 (AAA).
- **Forest-deep (`#14532D`)** — hover state, dark sections.
- **Ink (`#0F1710`)** — body text. Green-tinted near-black, never pure `#000000`. ≈18.9:1 on cream.
- **Muted (`#4E584E`)** — secondary text/captions (green-tinted gray to match ink family).
- **Neon-green (`#166534`) + Neon-cream (`#FFFDD0`)** — the sanctioned glow pair. Glow layers on dark grounds only, single point of brand punctuation.
- **Mint (`#D5F5E3`)** — semantic support: veg badges, delivery cards. Forest text on top.
- **Gold (`#FFD700`)** — functional status: rating stars, chef's-pick badges. On forest/ink only.
- **Terracotta (`#E57A4F` / deep `#C9623A`)** — **optional culinary accent (downgraded)**. The verified live build carries no terracotta tokens; it remains allowed ONLY for menu-food contexts (prices, chef's-pick dividers, offer strips) and never as a page default. If the live site stays terracotta-free at next audit, remove.

**Banned:** neon-pink (quarantined legacy); terracotta for body copy; any background outside the warm family (no pure-white pages, no cool grays, no pure black).

**Accent role framing:** forest is the one locked primary. The glow is a dual green/cream recipe, not pink. Terracotta is optional culinary flavor, not the accent. Gold stays functional, mint stays semantic.

**Contrast note (recognized tradeoff):** the culinary terracotta button (`#C9623A` + white) is 3.97:1 — acceptable only for ≥14px bold labels (WCAG large-text 3:1). Forest buttons are the AA-safe default.

## Typography

| Token | Value | Usage |
|---|---|---|
| wordmark | Histerm (fallback Dancing Script) | "La Sabroso" wordmark, nav, footer |
| kicker | Histerm / Dancing Script | Section kickers, neon signs |
| h1 / h2 / h3 | Outfit 800 / 700 / 600 | Headings (weight+color drive hierarchy) |
| body | Outfit 400/600, buttons 700 | Body copy, prices 700 |
| accent-quote | Playfair Display italic | Taglines, pull quotes, testimonials |

Scale (px): 12 · 14 · 16 · 18 · 22 · 28 · 36 · 48. Line-height: 1.6 body, 1.15–1.2 display, 1.0 wordmark. Letter-spacing: normal; h1 −0.01em.

- H1: 48px Outfit 800 (headline never exceeds 2 lines on desktop).
- Kickers: Histerm 28px, forest.
- Prices: Outfit 700, forest (terracotta optional in culinary contexts).
- Italic descender clearance: Playfair italic words with y/g/j/p/q use min `line-height: 1.5`, no clip containers.
- **Histerm licensing:** free-for-personal-use script by Yudi Pratama Chandra; the venue self-hosts the OTF. External reusers (this template) must NOT redistribute the OTF — fall back to Dancing Script when Histerm is unavailable. State the fallback in code comments.

**Font rule:** Outfit is the brand UI family (LOD replaced Nunito). Histerm is the hand-lettered voice. Playfair italic is quotes only — never UI labels or prices. No Inter, no generic system-serif defaults.

## Layout & Spacing

- **Container:** max-width 1140px, centered, `padding: 0 20px`.
- **Section gap:** 72px desktop; `clamp(3rem, 8vw, 4.5rem)` on mobile.
- **Grids:** `grid--2 / grid--3 / grid--4` collapse to 2-col at 900px, 1-col at 620px. CSS Grid, never flexbox percentage math.
- **Hero (home):** full-viewport (min-88dvh) background photo, warm forest overlay, centered cream card. The centered hero is deliberate — the card carries the message.
- **Inner page-hero:** cream alt band, 84/56px padding, centered.
- **Split sections:** 1fr 1fr grid; reverse variant flips order; collapses at 860px.
- **No overlapping elements.** Every element owns its spatial zone.
- **Mobile:** single-column collapse below 768px, no horizontal scroll, touch targets ≥ 44px, `min-h-[100dvh]` for full-height sections (never `h-screen`).

## Elevation & Depth

| Token | Value | Usage |
|---|---|---|
| shadow-card | `0 8px 24px rgba(15,23,16,.10)` | resting cards |
| shadow-lift | `0 14px 34px rgba(15,23,16,.16)` | hover lift |
| glow-neon-green | `0 0 2px #166534, 0 0 4px #166534, 0 0 8px #16653499, 0 0 16px #1665344d` | sign flourish |
| glow-neon-cream | `0 0 2px #0A100A66, 0 0 4px #0A100A33, 0 0 8px #0A100A1a` | inverted sign flourish |

Shadows are tinted to the ink hue family, never pure black. Cards only where elevation conveys hierarchy. Neon glow recipes are verbatim from the live build — preserve the layer stack exactly.

## Shapes

Everything rounded. No sharp corners.

- Pill (`999px`): buttons, filter tabs, badges, search, offer chips.
- Card (`20px`): all cards.
- Image (`16px`): images, gallery tiles, menu-item thumbs.

Dividers use dotted forest (culinary-terracotta optional). Veg/non-veg indicators are 14px squares (green dot, brown triangle) per FSSAI marks.

## Components

- **nav** (sticky 68px, cream `rgba(255,253,208,.92)` + backdrop blur, Histerm wordmark, pill CTA). Hamburger below 820px.
- **hero** (blurred photo + forest scrim + cream card, Histerm wordmark 64px, Playfair tagline, two CTAs).
- **offer-strip** (cream band, dashed forest borders, pill chips).
- **section-heading** (Histerm kicker + Outfit 800 title + subdued description).
- **specialty-card** (icon + title + copy; center-aligned).
- **partner-card** (Zomato/Swiggy/District/Dineout, 52px brand tile + label).
- **events** (forest-deep dark section + neon-green glow + gold perk headings).
- **corporate-events-card** (NEW: group discount + event framing, forest ground, gold numbers).
- **franchise-inquiry strip** (NEW: FOCO footer note, Outfit 400).
- **testimonial-carousel** (white card, gold stars, Playfair quote, prev/next round buttons, dots). Candidate verbatim quotes: "chocolate khoma dessert… soo satisfying" (sathwik gopu), "outdoor seating offers a far better vibe" (Rohini Kumar) from EazyDiner.
- **gallery-strip / masonry + lightbox** (16px radius, tinted shadow). IG highlight themes map to strip clusters: Laso Delights / Ice Cream Lab / Desserts.
- **newsletter** (mint band, pill input + forest button).
- **footer** (forest, 4-col, gold headings, franchise note).
- **menu-tabs** (pill category filters, sticky at top 68px). Data verified 2026-08-31: Petpooja QR extraction 121 items / 20 cats, 82 veg / 40 photos. explorehyd lists 137/23 (counts subsections differently) — safe to keep the 121/20 source.
- **menu-item** (white card, 96px thumb, dotted-leader price row, veg tag, chef's-pick gold badge).
- **btn-filled / btn-outline / btn-culinary** (pill, `:active` translateY(0) tactile press, hover translateY(-3px) + shadow-lift).
- **rating-badge** (gold stars on forest).
- **reveal** (fade-up 24px, 500ms ease-out, staggered 80ms).

**States:** loading = skeletal shimmer matching card shape; empty state = composed "no dishes match" card; form error = inline forest text below field; every button has pressed + hover; inputs get forest focus ring with labels above.

## Do's and Don'ts

**Do**
- Write warm, welcoming, artisanal copy. "Feed your spirit. Feed your belly. Feed your soul."
- Use Histerm for the wordmark and kickers (Dancing Script fallback when the OTF isn't available); Outfit for UI.
- Keep the glow in the green/cream pair, single glow per dark section.
- Show real food photography: warm evening light, chandeliers, macrame, rattan, latte art, ceramic close-ups. Sepia-warm grade, rounded corners.
- Reserve a table via Instagram DM = primary conversion path; booking partners Zomato/Swiggy; dine-in via District/Dineout.
- Probe the live site before changing tokens (see Live-Site Sync probe recipe).
- Honor stock photo swaps via `assets/img/README.md`.

**Don't**
- Never write "La Sabraso" (live-site typo — checked 2026-08-31, still present in corporate-events + moments headings. Do not propagate; the access is quarantine-listed).
- No neon-pink reintroduction; it is legacy-quarantined.
- Don't use terracotta outside menu-food contexts; audit removes it if the live site stays clean.
- Don't ship pure-white pages, cool grays, or pure-black text.
- Don't use generic serif for UI — Playfair italic is quotes/tags only.
- No "AI purple/blue" gradient cliché; the only sanctioned glow is green/cream.
- No fake round numbers or placeholder names — real menu data in `assets/js/menu-data.json`, real guest quotes from listings.
- Don't add a second neon glow, marquee, or extra loupe — warm and restrained.

---

## Canonical Brand Data (verified 2026-08-31 — source-logged)

- **Hours:** Mon–Sun 11:00 AM–11:00 PM (official site + Zomato + EazyDiner 3-of-3)
- **Phone:** +91 9182801364 (official, canonical) · **Email:** lasabrosocafe2022@gmail.com
- **Address:** Madhapur, Hyderabad, Telangana 500019 (official short form)
- **Rating:** 4.3★ Zomato (1,158 dining) · 4.4 EazyDiner (~1.2K) · 4.4 Swiggy Dineout (1K) · 4.6 magicpin (17) · ≈4.5 explorehyd
- **Order:** Zomato, Swiggy, magicpin · **Dine-in:** Zomato District, Swiggy Dineout (Flat 10–35% pre-book)
- **Social:** Instagram @lasabroso_cafe (≈6K followers, live-verified bio: "11 am to 11 pm" + "bookings/collabs via DM") · Threads synced. Highlights: Feedback, Desserts, Laso Delights, Ice Cream Lab, Elated News.
- **Franchise:** FOCO model inquiry (footer of official site).
- **Cuisines:** Continental, Italian, Indian fusion, American, Cafe, Pizza, Sandwich, Desserts, Momos.

### Data-conflict resolution (source-logged)

| Claim | Source A | Source B | Canonical | Note |
|---|---|---|---|---|
| Cost for two | Zomato ₹2,000 | Swiggy Dineout ₹600 / magicpin ₹2,000 | ₹1,200–₹2,000 | Dineout's ₹600 is a promo-floor outlier; exclude from range checks |
| Phone | Site +91 9182801364 | Zomato +91 93909 69967 / magicpin +91 80085 77931 | +91 9182801364 | Official site value is canonical; alternates are rider/aggregator lines |
| Fonts | Old build: Nunito + Dancing Script | Live build (verified): Outfit + Histerm | Outfit + Histerm | Live probe supersedes historical spec |
| Menu size | Petpooja extract: 121 items / 20 cats (Aug 31) | explorehyd: 137 items / 23 cats | 121 / 20 (Petpooja QR) | Petpooja re-extraction ran 2026-08-31; explorehyd's 137/23 counts subsections differently; 82 veg / 40 photos verified |
| IG followers | Spec said 6,036 | Live: 6,034 | ≈6K (no hardcode) | Never hardcode follower counts in UI |
| Neon accent | v1: neon-pink #FF5C8A | Live: green/cream dual-glow | green/cream | Pink quarantined as legacy |

The full menu data (121 items, re-extracted 2026-08-31) is in `assets/js/menu-data.json`. Petpooja QR still serves 121/20 with 82 veg and 40 working photo URLs; explorehyd's 137-item count includes subsection products.
