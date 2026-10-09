# NOMAD — Carry Less. Go Further.

Premium travel-lifestyle e-commerce (frontend-only, no build step) for Build Challenge #02.

## Run locally
- Double-click `index.html`, or
- `npx serve .` then open the URL, or
- VS Code Live Server.

No `npm install` needed. Data persists in `localStorage` (cart, wishlist, orders, coupon).

## Judge flow (22 steps — all work)
1. Open homepage → hero `SHOP COLLECTION` / `BUILD YOUR KIT`
2. Search via navbar icon (e.g. "bottle") → real filtering
3. Shop: category / price / color / availability / sort — count updates, empty state + `CLEAR FILTERS`
4. Open product → gallery, rating, stock badge (`Only 8 left…`)
5. Pick color/size variant → reflected in bag
6. Qty capped at stock → `ADD TO BAG` → toast + drawer
7. Add second product (or `Build Your Kit → ADD ALL TO BAG`)
8. Bag page: `−/+`, remove, subtotal; coupon `NOMAD10` = −10%; Regular free over Rp500rb
9. Checkout 01 Information → inline validation blocks empty/invalid phone
10. 02 Shipping → Regular/Express/Same Day updates total instantly
11. 03 Payment → 5 simulated methods → `SIMULATE PAYMENT` → processing → success
12. 04 Review → edit links → `PLACE ORDER` → `#NMD-xxxxxx` receipt
13. `TRACK ORDER` → 6-step timeline + `SIMULATE NEXT STATUS` demo button
14. Wishlist ♡ on any card, `/wishlist` page, Recently Viewed on shop
15. Newsletter → simulated success; announcement bar copies `NOMAD10`

## Submission draft
- Nama peserta: (isi)
- Nama project: NOMAD — Carry Less. Go Further.
- Niche: Premium travel lifestyle gear
- Link website: (isi setelah deploy — Netlify/Vercel drag folder ini)
- Link GitHub: (isi)
- Konsep singkat: Editorial travel store; 8 produk, kit bundling per trip, full flow simulasi tanpa backend.
- Target customer: 18–35, weekend/city/light-hike/work trips, minimalist packing.
- Fitur unggulan: Build Your Kit (add-all+bundle savings), simulated checkout 4 langkah, live tracking demo, kupon, wishlist, recently viewed, free-shipping threshold.

## Deploy
Folder ini statis: drag ke Netlify Drop / `vercel --prod` / GitHub Pages. Tidak ada env var.
