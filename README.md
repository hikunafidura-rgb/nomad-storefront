# NOMAD — Carry Less. Go Further.

Premium travel-lifestyle e-commerce (frontend-only, no build step, no backend) for Build Challenge #02.

- Demo: https://nomad-storefront-l268.vercel.app/
- Repo: https://github.com/hikunafidura-rgb/nomad-storefront

## Run locally
- Double-click `index.html`, or `npx serve .`, or VS Code Live Server. No `npm install`.

## Features
- Homepage editorial: hero, featured, categories, Build Your Kit, best sellers, banner, reviews, story, newsletter.
- Catalog (8 products): live search, category / price / color / availability filters, 5 sort modes, count, loading + empty states.
- Product detail: gallery, rating, stock badge, color/size variants, qty capped at stock, tabs, related, recently viewed.
- Bag drawer + page: qty steppers, remove, subtotal. Persists in `localStorage`.
- 4-step checkout: validated info form → shipping (Regular free over Rp500rb / Express / Same Day, total updates instantly) → 5 simulated payments → review with edit links → `#NMD-xxxxxx` receipt.
- Tracking: 6-step timeline + `SIMULATE NEXT STATUS` demo control.
- Coupons: `NOMAD10` (−10%), `KIT5` (−5%, auto-applied by Build Your Kit). One coupon per order — no stacking.
- Wishlist with explicit move-to-bag; announcement bar copies `NOMAD10`.

## Judge demo flow
Search "bottle" → filter Apparel + Low stock → open Rain Jacket → pick size M → qty 2 → add → Build Your Kit Weekend → ADD ALL + KIT5 → bag → apply `NOMAD10` (replaces KIT5) → checkout → invalid phone blocked → valid info → Same Day → QRIS → simulate → success → review → place order → receipt → track to Delivered.

## Limitations (by design, per challenge brief)
- Payment & shipping are simulations; no real gateway, courier, or backend.
- Orders/cart/wishlist live in this browser's `localStorage` (session-scoped, per device).
- One coupon per order; KIT5 applies to the whole bag, not kit items only.
- Ratings, reviews, prices, stock, photos are dummy/demo data (Unsplash with picsum fallback).
- Same-Day courier copy is demo flavor text.
