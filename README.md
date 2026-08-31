# La Sabroso — Boho Cafe Website Template (v2)

A standalone 6-page website template for **The Cafe La Sabroso**, Madhapur,
Hyderabad — built from the cafe's live design language (lasabroso.com, v2
tokens verified 2026-08-31), its live dine-in menu (Petpooja QR menu,
re-extracted 2026-08-31), and public listings (Zomato, Swiggy Dineout,
EazyDiner).

> Fan craft / redesign concept — not affiliated with the cafe.

## Pages

```
index.html    Home: hero (real venue hero-bg) > offer strip > specialties >
              interactive menu preview (La.Revi-style tabs) > partners >
              events (neon) > marquee > moments > testimonials > newsletter
menu.html     Full live menu: 121 dishes · 20 categories · sticky category
              tabs + search + veg-only toggle + chef's-pick badges + veg
              tags + real food photos (gumlet CDN)
gallery.html  16-slot masonry gallery + lightbox + IG highlight mapping
about.html    Brand story, signatures, amenities, events teaser
contact.html  Reservation form (inline validation), contact cards, map,
              amenity chips
events.html   Corporate/bulk events, FOCO franchise note, neon sign,
              how-to-book
```

Stable anchors: `#specialties`, `#menu`, `#partners`, `#events`, `#moments`,
`#franchise` (footer). One booking CTA: "Reserve your table" (Instagram DM).

## Design system (v2, live-verified)

- **Palette:** cream `#FFFDD0` · forest `#166534` / deep `#14532D` · ink
  `#0F1710` · muted `#4E584E` · gold `#FFD700` (stars, chef badges) · mint
  `#D5F5E3` (veg tags, delivery cards) · terracotta `#E57A4F/#C9623A`
  (menu-food contexts only). One neon glow pair: green/cream. No pink.
- **Type:** Histerm wordmark/kickers (hot-linked OTF from the venue CDN;
  fallback Dancing Script) · Outfit UI 400/600/700/800 · Playfair italic
  quotes only.
- Full token spec: see `DESIGN.md` (passes `designmd lint` with 0 errors).

## Real assets

- Hero: `https://www.lasabroso.com/hero-bg.png` (venue CDN, verified 200).
- Menu photos: 40 live gumlet URLs in `assets/js/menu-data.json` (one
  upstream file 403s and was nulled). Evergreen shot, no reshoot needed.
- Partner tiles: honest text chips (Zomato/Swiggy/District/Dineout).
- Gallery: warm-cafe Unsplash fallbacks (audit list in
  `assets/img/README.md`).

## Run it

```bash
cd LaSabroso
python3 -m http.server 8000
# -> http://localhost:8000
```

Deploy anywhere: the folder is self-contained static HTML/CSS/JS.

## Updating the menu

`assets/js/menu-data.json` is the single source. Refresh by re-extracting
from the live QR menu (dinein.petpooja.com/orders/category/fm32c9qw/19) or
hand-editing; menu.html and the index preview render from it at load time.
Raw venue typos live in the JSON (e.g. "iced cofffee"); display labels are
normalized in `assets/js/main.js`.

## Verification status (2026-08-31)

- Petpooja re-extraction: 121 items / 20 categories / 82 veg / 40 real
  photos, fresh prices verified (2026-08-31).
- Chef's-pick badge count in DOM: exactly 19 (curated list matches 19
  unique dishes). Veg tag count: 82.
- All 6 pages share the contract stylesheet + main.js; 0 inline styles,
  0 em-dashes in copy, 1 h1 per page.
- Browser smoke passed: menu tabs/search/veg toggle/empty state, carousel,
  lightbox, preview tabs, marquee, newsletter, contact form inline errors,
  375px mobile layout with no horizontal scroll, reduced-motion gate.
- `designmd lint DESIGN.md` -> 0 errors.