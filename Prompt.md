---
name: LaSabroso Website Build Prompt
version: 1.0
created: 2026-08-31
brand_source: DESIGN.md (v2, live-verified)
references:
  - La.Revi (Sk Nahid Hasan) — fine-dining guest-journey architecture
  - Chilled Coffee Delight (Convertica) — bold-TYPO + grid beverage layout
  - Matchao (Juice Lab) — editorial product-showcase revenue loop
  - United Coffee (Mis Manika Khanom) — warm cinematic brand palette
ui_ux_pro_max_baseline: Hero-Centric + Conversion / Vibrant & Block-based
---

# PROMPT — Build the LaSabroso Website

## Design Read

**Reading this as:** premium café landing-page ecosystem for Madhapur, Hyderabad's hybrid-boho brand, leaning toward warm-cream editorial blocks with fluid scroll choreography. **Variance 7 / Motion 6-7 / Density 3-4.** Not a brochure — a guest journey (La.Revi architecture) that moves discovery → brand → menu → booking. One theme lock: warm cream+forest. Primary CTA label: **"Reserve your table"** (Instagram DM = real booking path). Do not rename mid-page.

The palette stays LaSabroso's own (v2 spec). United Coffee's dark cinematic warmth and La.Revi's category switching inform sections; palette hexes are NOT imported — values below are contract.

---

## IA (6 pages)

`index (Home)` · `menu` · `gallery` · `about` · `contact` · plus optional `events` (corporate/FOCO block).

Anchor IDs stable for SEO: `#specialties`, `#menu`, `#partners`, `#events`, `#moments`, `#franchise`.

---

## Visual System (contract from DESIGN.md v2 — verified 2026-08-31)

### Palette (exact)

| Token | Hex | Role |
|---|---|---|
| cream bg | `#FFFDD0` | page base, cosmic latte |
| forest primary | `#166534` | headings, filled buttons, footer |
| forest-deep | `#14532D` | hover, dark sections |
| ink | `#0F1710` | body text (green-tinted, never #000) |
| muted | `#4E584E` | secondary text |
| neon-green glow | `#166534` + `#FFFDD0` | sanctioned glow pair |
| culinary accent | `#E57A4F / #C9623A` | menu prices/dividers ONLY (optional) |
| gold | `#FFD700` | rating stars, chef's-pick badges |
| mint | `#D5F5E3` | veg tags, delivery cards |

**Lock rules:** forest = single accent. Glow = green/cream recipes only, never pink. Terracotta confined to menu contexts.

### Type (exact)

| Token | Value (vendor: `next/font` or `@font-face`) | Usage |
|---|---|---|
| wordmark/Kicker | **Histerm** (fallback Dancing Script) | logo, kicker, neon signs |
| h1/h2/h3/body/buttons | **Outfit** 800 / 700 / 600 / 400 / 700 | UI |
| accent quotes | **Playfair Display italic** | testimonials, taglines ONLY |

Scale: 12·14·16·18·22·28·36·48. Hero headline ≤ 2 lines, ~4 words preferred; `clamp(2.25rem,6vw,4.5rem)`. Italic descenders (y/g/j/p/q): `line-height ≥ 1.1` + reserve padding.

---

## Imagery — REAL assets only, ordered by source

1. **The venue's real CDN hero** (verified live): `https://lasabraso.com/hero-bg.png` — hero background. NOTE: the venue's own domain carries the "sabraso" misspelling — do NOT propagate the typo into copy; flag it in `assets/img/README.md` as upstream-quarantined.
2. **Real menu photos** (41 items, Petpooja CDN `dineinpetweb.gumlet.io`): hot-linked from `assets/js/menu-data.json`; evergreen brand food shots, no reshoot needed.
3. **Partner brand tiles**: Zomato/Swiggy/Zomato District/Swiggy Dineout logos via `/_next/image?url=%2F<name>.png` on lasabroso.com — swap with licensed if redistributing (current: colored text chips, honest fallback).
4. **Gallery slots** (fallback Unsplash IDs in `assets/img/README.md`): warm cafe/dessert/chandelier texture. Qrolic 2026 guidance: visual storytelling > brochure; use 360/interior photos where available.
5. Never: broken Unsplash hotlinks without seed audit; div-fake screenshots; emoji in icons (Phosphor/HugeIcons/Radix/Tabler only).

---

## Section Recipe (Home — the pattern; inner pages inherit)

All blocks own spatial zones, no overlap. Mobile collapse 1-col <768px, `min-h-[100dvh]`.

1. **Hero** — full-bleed `hero-bg` forest scrim, centered cream card: eyebrow (uppercase, 1 max in hero zone), brand wordmark, tagline, subtext ≤20 words, ONE primary CTA pill + max 1 secondary. `pt` ≤24 units; Matchao-style sticker/inline image optional (stacked below headline on mobile).
2. **Offer strip** — cream band, dashed forest border, pill chips with numeric specials (Flat 20-35% pre-book real data).
3. **Specialties/Zigzag** — alternate 1-2 split cards, max 2-in-row pattern (La.Revi rule); bento cells exactly N items, 2-3 cells with real imagery (Bento Diversity gate).
4. **Signature Creations** — page-favorite dishes; the culinary-terracotta accent is permitted here only (menu-food context gate).
5. **Brand story** — aberration split; editorial serif quote (Playfair) framed by real photography.
6. **Category Menu Preview** — La.Revi tabbed pattern ported: category pills (Momos/Pasta/Pizza/Desserts/Coffee/Signature) → dynamic dish grid w/ image, name, price (dotted leader), veg tag, chef's-pick badge. JS creates grid; content visible without JS (progressive enhancement).
7. **Partners** — order/dine-in cards (logo-tile + label, LOGO-ONLY rule); Stripe-style minimal.
8. **Corporate/bulk events** — discount counter + perks grid.
9. **Moments gallery** — masonry 2-column, lightbox with figcaption; IG-highlight cluster mapping (Laso Delights / Desserts / Ice Cream Lab).
10. **Testimonials** — carousel, gold stars on forest, Playfair quotes ≤3 lines, real names from EazyDiner/Zomato.
11. **Footer** — forest 4-col; gold headings; franchise FOCO note; `11 AM–11 PM` hours; map anchor.

---

## Motion Architecture (dynamic & fluid)

- **Stack:** recommend GSAP + ScrollTrigger (canonical skeletons verified) OR `motion/react`; pick one, never mix. Scroll choreography animates only `transform/opacity`; `will-change` sparingly.
- **Scroll reveals:** fade-up 24px, 500ms ease-out, staggered 80ms (CSS `animation-delay` cascade or Motion `whileInView`). NO `window.addEventListener('scroll')`; IntersectionObserver or CSS scroll-driven animations.
- **Sticky/pin moments optionally:** category menu preview (La.Revi feel) — pin the pills while dishes scroll via `start: 'top top'` + `scrub: 1`.
- **Marquee:** ≤1 per page, e.g. `Farm Fresh • Handcrafted • Boho Vibes` kinetic strip — valid only if motivated (vocabulary accent declaration, not filler).
- **Neon flicker:** 4.2s loop sign-only; recipes in DESIGN.md elevation tokens preserved verbatim.
- **Reduced motion:** global `prefers-reduced-motion` gate; disable flicker/reveal/pin entirely — non-negotiable.
- **States:** loading = skeletal shimmer shaped like the card; empty menu search = composed "no dishes match" card; form errors inline below field; CTA focus rings forest 2-4px; `:active translateY(0)`. Hits ALL.

---

## Responsiveness Gates

- Breakpoints: 640 / 768 / 1024 / 1280 / 1536 tested (375mm mobile start, 1440 cap).
- Touch targets ≥ 44px; menu filters stay sticky top 68px; never `h-screen`, always `min-h-[100dvh]`.
- CTA wrap ban: label fits one line ≤ 3 words. No horizontal scroll on mobile.
- Italy-to-mobile collapse: asymmetric hero → single-column stack (H1 above, media below).

---

## Content Density & Copy Discipline

- Section headline ≤ 8 words, subtext ≤ 25 words, one visual/CTA per block.
- Testimonials: 3-line quote cap + name+role attribution; real guest quotes only from listings (sathwik gopu "chocolate khoma dessert…", Rohini Kumar "outdoor seating vibe").
- Zero AI-cliché: no "Elevate", "Seamless", fake %, fake names. Zero em-dashes (Page Failure check: banned).
- Brand canon data at bottom of doc (hours, phone, address, ratings, conflicts) is the ONLY source for UI.

---

## Required Build Steps

1. **Wave 1 (orchestrator pre-wires shared contract)**: `DESIGN.md` (this file + sibling) + `assets/css/style.css` component system + `assets/js/main.js` all hooks (menu-filters, carousel, lightbox, reveal, marquee, reduced-motion) + `assets/js/menu-data.json`. Wave agents consume READ-ONLY.
2. **Wave 2 (2-3 parallel page agents, disjoint HTML ownership)**: every block here owns spatial zone; brief forbids touching shared files; head tags/nav/footer verbatim. Use La.Revi's Framer-checklist sections as layout order.
3. **Wave 3 (verify)**: orchestrator runs typecheck/build/QA — `grep 'style="'` must be 0; `grep -rh 'href="[a-z]*\.html"' *.html | sort -u` must map to on-disk files; DOM counters (menu badge count == 19, veg tags ~82) asserted; content-visible-without-JS confirmed; `designmd lint DESIGN.md` 0 errors.
4. **Post-wave**: image real-asset substitution audit (no Unsplash seed <95% match), acceptance gates final Pass/Fail.

---

## Acceptance Criteria (all must pass)

- [ ] Aesthetic: warm cream+forest, ONE neon glow, no pink, no terracotta outside menu-food
- [ ] La.Revi guest journey: hero → brand → interactive menu tabs → partners → events → moments → footer
- [ ] Real imagery: hero-bg + 41 real menu shots + partner cards + gallery hotspots; no div-fakes
- [ ] IA: 6 pages, stable anchors, ONE CTA label
- [ ] Motion: transform/opacity only, reduced-motion honored, marquee ≤1, no window-scroll listener
- [ ] Responsive: 375→1440, no horizontal scroll, 44px touches, `min-h-[100dvh]`
- [ ] QA gates: links exist, styles-only CSS, DOM counts match, lint clean
- [ ] Copy: real canon data, no AI-tells, testimonials with attributable sources

---

## Canonical Brand Data (verified 2026-08-31)

- **Hours:** Mon–Sun 11:00 AM–11:00 PM
- **Phone:** +91 9182801364 (canonical; Zomato +91 93909 69967, magicpin +91 80085 77931 are rider lines)
- **Address:** Madhapur, Hyderabad, Telangana 500019
- **Rating:** 4.3★ Zomato (1,158) · 4.4 EazyDiner (~1.2K) · 4.4 Swiggy Dineout · 4.6 magicpin
- **Cost for two:** ₹1,200–₹2,000 (exclude Swiggy Dineout ₹600 promo outlier)
- **Partners:** Zomato, Swiggy, magicpin; dine-in Zomato District / Swiggy Dineout (Flat 10–35%)
- **Franchise:** FOCO inquiry (footer)
- **Menu size (live):** explorehyd lists 137 items / 23 categories; re-extract Petpooja before render
- **IG:** @lasabroso_cafe ≈6K followers (dynamic, never hardcode)
- **Name quarantine:** avoid platform slug "Lasabraso" upstream — brand = "LaSabroso"
