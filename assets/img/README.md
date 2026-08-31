# Image slots — real-asset map (v2, verified 2026-08-31)

All imagery in this template is REAL venue or listing-sourced media, hot-linked
from the cafe's own CDNs. Swap strategy and fallbacks live here.

## Real assets (do not replace without reason)

| Slot | Source | URL |
|---|---|---|
| Hero background | Venue site CDN (verified live) | `https://www.lasabroso.com/hero-bg.png` (840KB PNG, 200 OK). Used as `background` on `.hero__bg` in style.css |
| Menu food photos (40 live + 1 nulled upstream-403) | Petpooja CDN | `dineinpetweb.gumlet.io/homewebsite/104812/thumb_*.{jpeg,jpg,JPG,png}` — hot-linked from `assets/js/menu-data.json`. One item (Veg Alfredo Pasta) returns 403 upstream as of 2026-08-31 and is `null`-photo in the JSON so the renderer shows its placeholder; 40 photos remain live. |
| Wordmark font | Venue site CDN (Histerm OTF) | `https://www.lasabroso.com/_next/static/media/Histerm-s.p.0dgvpl1xcgdvy.otf` via `@font-face` in style.css. Free-for-personal-use license; do NOT redistribute the OTF with this template. Fallback: Dancing Script. |

## Upstream quarantine notes

- The venue's own domain is `lasabroso.com` -> in URLs this template uses the
  working form. The brand NAME is always **LaSabroso** in copy. Never write
  "La Sabraso" — the misspelling appears on the venue's live site (corporate
  events + moments headings, checked 2026-08-31) and is quarantine-listed.
- Upstream menu data keeps venue typos verbatim in `menu-data.json` (e.g.
  category "iced cofffee", "Corriander", "Chessy"). Display labels are
  normalized in `assets/js/main.js` via `CAT_DISPLAY` (`iced cofffee` shows as
  "Iced Coffee"). Do not edit the JSON to "fix" them.

## Gallery (16 slots — Unsplash fallbacks, warm-cafe texture)

`gallery.html` uses a masonry grid with these fallback Unsplash IDs (replace
`src` with local files; update `alt` + `figcaption` accordingly):

| # | Unsplash ID | Subject |
|---|-------------|---------|
| 01 | photo-1554118811-1e0d58224f24 | cafe bar interior |
| 02 | photo-1517248135467-4c7edcad34c4 | dining tables |
| 03 | photo-1559339352-11d035aa65de | dessert plating |
| 04 | photo-1485182708500-e8f1f318ba72 | friends at table |
| 05 | photo-1565299624946-b28f40a0ae38 | pizza close-up |
| 06 | photo-1567620905732-2d1ec7ab7445 | pancake/dessert tower |
| 07 | photo-1514362545857-3bc16549766b | hand-crafted drink |
| 08 | photo-1551024709-8f23befc6f87 | iced beverage |
| 09 | photo-1509042239860-f550ce710b93 | latte art top-down |
| 10 | photo-1495474472287-4d71bcdd2085 | coffee cup on table |
| 11 | photo-1414235077428-338989a2e8c0 | fine dining plate |
| 12 | photo-1541167760496-1628856ab772 | coffee + book |
| 13 | photo-1521017432531-fbd92d768814 | cafe window seat |
| 14 | photo-1445116572660-236099ec97a0 | cafe storefront vibe |
| 15 | photo-1442512595331-e89e73853f31 | pour over |
| 16 | photo-1453614512568-c4024d13c247 | cafe sea-view tables |

Audit rule: before shipping, HEAD-check every Unsplash ID (a 404 or a subject
that doesn't read warm-cafe means swap it).

## Brand marks (partner cards)

Rendered as colored text chips (`.partner__logo`, `.partner__tag`) — honest
fallback for the Zomato/Swiggy/District/Dineout trademarks. The venue's own
site serves logo PNGs at `/_next/image?url=%2F<name>.png`; swap with licensed
assets if redistributing.