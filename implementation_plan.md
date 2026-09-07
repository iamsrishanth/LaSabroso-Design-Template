# Implementation Plan - La Sabrosa Cafe Template Design

Design and build a warm, Latin-inspired artisanal cafe web template for **La Sabrosa Cafe** ("The Flavorful One"). The design combines rustic elegance (terracotta, warm crema, rich espresso, botanical greens) with modern UX: interactive digital menu with dietary filtering, seamless table reservation system, dynamic order-to-table/takeaway modal, artisan coffee & pastry showcase, customer reviews, and ambiance gallery.

## Proposed Design System & Aesthetics

- **Theme & Vibe**: Latin-Artisanal Specialty Coffee & Bakery (Warm Terracotta `#C85A32`, Roasted Espresso `#2B1810`, Warm Crema Linen `#FBF8F3`, Golden Amber `#D49A3D`, Sage Herb `#4E6B56`).
- **Typography**: Editorial serif headings (*Playfair Display* / *Cormorant Garamond*) paired with clean geometric body typography (*Plus Jakarta Sans*).
- **Visuals**: AI-generated realistic imagery showcasing cozy architectural cafe interiors, signature pour-over lattes, freshly baked dulce de leche pastries, artisanal brunch boards, and sun-drenched patio seating.
- **Interactions**: Tabbed menu with quick dietary filters (Gluten-Free, Vegan, Chef's Special), instant search, live reservation form with time-slot picker, cart drawer for online takeaway, and interactive photo gallery lightbox.

---

## Proposed Changes

### Project Setup & Assets
Directory: `C:\Users\Admin\.gemini\antigravity\scratch\la-sabrosa-cafe`

#### [NEW] `assets/images/`
Generate curated, photorealistic visual assets:
- `hero_cafe.png`: Sunlit, bohemian Latin cafe interior with terracotta walls, hanging green plants, and warm ambient lighting.
- `specialty_latte.png`: Artisanal Spanish latte / Colombian pour-over with intricate latte art and fresh roasted beans.
- `artisan_brunch.png`: Plated gourmet brunch featuring artisanal sourdough, poached eggs, and Latin savory empanadas.
- `bakery_pastries.png`: Golden churros with chocolate & cajeta dips and fresh dulce de leche alfajores.
- `patio_ambiance.png`: Sunlit cobblestone cafe patio surrounded by olive trees and terracotta planters.

---

### Core Frontend Files

#### [NEW] [index.html](file:///C:/Users/Admin/.gemini/antigravity/scratch/la-sabrosa-cafe/index.html)
- **Top Bar & Navigation**: Brand logo, navigation links (Story, Menu, Experience, Reviews, Contact), "Book a Table" CTA, and Quick Order cart button with item counter badge.
- **Hero Section**: Catchy headline (*"Artisanal Coffee & Latin Flavor in Every Sip"*), animated badge, quick action buttons, opening hours highlight pill, and hero image with floating social proof badge.
- **Brand Story & Roastery Philosophy**: Narrative about single-origin Latin-American beans, heritage baking traditions, and locally sourced ingredients.
- **Signature Highlights / Seasonal Specials**: Interactive cards with tags, ingredient notes, and quick "Add to Order" action.
- **Interactive Menu Section**:
  - Category tabs (Specialty Coffee, Artisanal Teas, Breakfast & Brunch, Fresh Bakery & Pastries, Savory Tapas).
  - Filter chips (All, Vegan, Vegetarian, Gluten-Free, Signature).
  - Search bar for instant item lookup.
  - Rich menu item cards with prices, descriptions, allergen indicators, and order trigger.
- **Ambiance & Atmosphere Showcase**: Masonry-style gallery with interactive lightbox modal.
- **Table Reservation System**: Multi-step booking form (Guests, Date, Time slot, Seating preference, Special requests) with instant booking summary.
- **Guest Testimonials & Press Mentions**: Interactive quote carousel and rating highlights.
- **Location, Hours & Interactive Map Preview**: Visual representation of the cafe's opening times, location, parking details, and instant directions button.
- **Footer**: Newsletter subscription for 10% off first visit, social media links, sustainability commitment badge, and copyright.
- **Modals & Drawers**:
  - Takeaway Order Drawer (cart management, subtotal, tax, simulated checkout).
  - Lightbox viewer for gallery images.
  - Reservation Confirmation Modal with calendar download prompt.

#### [NEW] [styles.css](file:///C:/Users/Admin/.gemini/antigravity/scratch/la-sabrosa-cafe/styles.css)
- Comprehensive CSS variable system for color tokens, typography scales, shadows, and smooth radius values.
- Micro-interactions: hover lifts, badge glow, smooth tab transitions, floating navigation blur on scroll.
- Fully responsive layout with mobile drawer navigation, flexible grids, and touch-friendly controls.

#### [NEW] [app.js](file:///C:/Users/Admin/.gemini/antigravity/scratch/la-sabrosa-cafe/app.js)
- Sticky navigation scroll detection and mobile menu toggle.
- Menu filtering by category, dietary tags, and live search term.
- Interactive cart state management (Add, Remove, Quantity adjustments, Cart totals).
- Table reservation form handler with realistic date/time constraints and confirmation feedback toast.
- Testimonial slider / carousel auto-play and manual navigation.
- Lightbox popup for gallery inspection.

---

## Verification Plan

### Automated / Browser Verification
1. Verify local server launch using PowerShell / static server or local browser preview.
2. Check console for any JavaScript errors or broken asset paths.
3. Validate responsiveness across desktop (1440px), tablet (768px), and mobile (375px) viewports.

### Manual Verification
- Test menu tab switching and dietary filter combinations (e.g. Vegan + Coffee).
- Test search bar filtering menu items in real time.
- Test adding items to the takeaway order drawer and verifying price calculations.
- Test table reservation form submission and toast notification.
- Verify image loading, transitions, and lightbox modal behavior.
