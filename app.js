/* NOMAD — frontend-only e-commerce. No build, no backend. */
const U = (id) => {
  const host = id.startsWith("premium_") ? "https://plus.unsplash.com" : "https://images.unsplash.com";
  return `${host}/${id}?q=80&w=900&auto=format&fit=crop`;
};
const FALLBACK = (seed) => `https://picsum.photos/seed/${seed}/800/800`;
const imgTag = (src, seed, alt, cls="", eager=false) =>
  `<img ${cls?`class="${cls}"`:""} src="${src}" alt="${alt.replace(/"/g,"")}" loading="${eager?"eager":"lazy"}"${eager?' fetchpriority="high"':""} onerror="this.onerror=null;this.src='${FALLBACK(seed)}'" />`;

const PRODUCTS = [
  { id:"daypack-24", name:"NOMAD Daypack 24L", cat:"Bags", price:649000, old:799000, badge:"Best Seller",
    colors:["Black","Sand","Olive"], sizes:null, stock:18, rating:4.9, reviews:412, added:8,
    tag:"24L daily carry that fits cabin, commute and weekend.",
    desc:"Our most-loved daily pack. The Daypack 24L carries a 16″ laptop, a change of clothes and everything you reach for in transit — without ever looking bulky. A structured back panel keeps it comfortable from gate to street, and the coated shell shrugs off light rain.",
    specs:[["Capacity","24L"],["Weight","980 g"],["Material","900D recycled nylon, PFC-free DWR"],["Laptop","Up to 16″ suspended sleeve"],["Warranty","2 years"]],
    images:[U("photo-1553062407-98eeb64c6a62"), U("photo-1614096602561-7394f4d5dc82")] },
  { id:"trail-sling", name:"NOMAD Trail Sling", cat:"Bags", price:329000, old:null, badge:null,
    colors:["Black","Olive"], sizes:null, stock:12, rating:4.8, reviews:268, added:5,
    tag:"5L crossbody for essentials you want within reach.",
    desc:"Phone, wallet, passport, earbuds — the Trail Sling keeps the small things exactly where your hand expects them. Wear it on the chest for crowded stations or on the back for open streets. The magnetic buckle opens one-handed.",
    specs:[["Capacity","5L"],["Weight","320 g"],["Material","Cordura®-style woven, water-repellent"],["Strap","Adjustable, left/right wear"],["Warranty","2 years"]],
    images:[U("photo-1613231685459-e79adcaace76"), U("photo-1485488911053-ab7dfdb9f4d5")] },
  { id:"travel-organizer", name:"NOMAD Travel Organizer", cat:"Travel Accessories", price:189000, old:null, badge:"Loved by many",
    colors:["Black","Sand"], sizes:null, stock:25, rating:4.9, reviews:531, added:6,
    tag:"Every cable, card and document in one slim folio.",
    desc:"Stop digging. The Travel Organizer lays flat like a book with a place for passport, cards, pens, cables and a power bank. It slips into any NOMAD bag and works as a standalone clutch for café work sessions.",
    specs:[["Size","23 × 16 × 4 cm"],["Weight","280 g"],["Material","Vegan leather touch, recycled lining"],["Fits","Passport, 6 cards, cables, power bank"],["Warranty","1 year"]],
    images:[U("photo-1620109176813-e91290f6c795"), U("photo-1627123424574-724758594e93")] },
  { id:"insulated-bottle", name:"NOMAD Insulated Bottle", cat:"Everyday Essentials", price:249000, old:null, badge:"Best Seller",
    colors:["Black","Silver","Sand"], sizes:null, stock:20, rating:4.8, reviews:894, added:7,
    tag:"750 ml. Cold 24h, hot 12h. Zero leaks, zero rattle.",
    desc:"Double-wall vacuum insulation in a bottle that actually fits bike cages and backpack side pockets. The ceramic-feel coating is grippy without sweating, and the cap pours fast then seals with a quarter turn. Fits most cup holders.",
    specs:[["Volume","750 ml"],["Keeps cold","24 h / hot 12 h"],["Material","18/8 stainless, BPA-free cap"],["Weight","440 g"],["Warranty","1 year"]],
    images:[U("photo-1602143407151-7111542de6e8"), U("photo-1767525804740-e141f0be2614")] },
  { id:"rain-jacket", name:"NOMAD Compact Rain Jacket", cat:"Apparel", price:549000, old:649000, badge:"Low Stock",
    colors:["Black","Olive"], sizes:["S","M","L","XL"], stock:8, rating:4.7, reviews:196, added:4,
    tag:"Packs into its own pocket. 10K waterproofing.",
    desc:"A genuinely packable shell — it folds into its chest pocket in under a minute and disappears into your daypack. Taped seams, a two-way front zip and an adjustable hood handle sudden downpours from Sudirman to Sembalun.",
    specs:[["Waterproof","10,000 mm / breathability 8,000 g"],["Weight","380 g (size M)"],["Fit","Regular, room for mid-layer"],["Packs into","Own chest pocket"],["Warranty","2 years"]],
    images:[U("photo-1541635930383-c21a3eab7075"), U("photo-1782174358357-b7338e3f1437")] },
  { id:"packing-cubes", name:"NOMAD Packing Cubes", cat:"Travel Accessories", price:279000, old:null, badge:null,
    colors:["Sand","Olive"], sizes:null, variantLabel:"Set of 3", stock:15, rating:4.9, reviews:342, added:3,
    tag:"Set of 3 compression cubes. Pack 30% flatter.",
    desc:"Three cubes — large, medium and slim — that compress knits and tees so a 3-day wardrobe fits a 24L pack. Mesh windows show what's inside, and the grab handles double as drawer pulls at your stay.",
    specs:[["Set","L + M + Slim"],["Material","Ripstop nylon, mesh window"],["Compression","Dual zip, ~30% volume"],["Weight","240 g total"],["Warranty","1 year"]],
    images:[U("premium_photo-1779223979914-8f6a45db4ebd"), U("premium_photo-1777926622434-0aa9e2b1f29e")] },
  { id:"travel-cap", name:"NOMAD Travel Cap", cat:"Apparel", price:179000, old:null, badge:null,
    colors:["Black","Sand"], sizes:null, stock:17, rating:4.7, reviews:158, added:2,
    tag:"5-panel, crushable, quick-dry. One size.",
    desc:"A five-panel cap designed to be sat on, stuffed and sweated in. Quick-dry twill, a soft unstructured crown and an adjustable strap mean one size genuinely fits most. Packs flat without losing shape.",
    specs:[["Style","5-panel, unstructured"],["Material","Quick-dry cotton twill"],["Fit","Adjustable 54–60 cm"],["Weight","85 g"],["Warranty","1 year"]],
    images:[U("photo-1521369909029-2afed882baee"), U("photo-1554929033-da0fa155d2e7")] },
  { id:"tech-pouch", name:"NOMAD Tech Pouch", cat:"Travel Accessories", price:299000, old:349000, badge:"Sale",
    colors:["Black","Olive"], sizes:null, stock:14, rating:4.8, reviews:276, added:1,
    tag:"The charger-to-cable home base for any bag.",
    desc:"A structured pouch with origami-style pockets that fit chargers, dongles, SSDs and two phones. It stands open on tray tables and zips shut into a brick that slides into any bag's front pocket.",
    specs:[["Size","22 × 14 × 8 cm"],["Weight","310 g"],["Material","Ballistic-weave shell, recycled lining"],["Fits","65W charger, cables, SSD, 2 phones"],["Warranty","1 year"]],
    images:[U("photo-1764909262009-3dcd5691185c"), U("photo-1675668409245-955188b96bf6")] },
];

const CATS = [
  { name:"Bags", desc:"Daypacks & slings", img:U("photo-1553062407-98eeb64c6a62"), count:"2 products" },
  { name:"Travel Accessories", desc:"Organize everything", img:U("photo-1488646953014-85cb44e25828"), count:"3 products" },
  { name:"Apparel", desc:"Wear on the move", img:U("photo-1541635930383-c21a3eab7075"), count:"2 products" },
  { name:"Everyday Essentials", desc:"Carry daily", img:U("photo-1602143407151-7111542de6e8"), count:"1 product" },
];

const KITS = {
  weekend:{ label:"Weekend Escape", desc:"2–3 days, one pack. Light, flexible, ready for anything.", ids:["daypack-24","insulated-bottle","travel-organizer","travel-cap"] },
  city:{ label:"City Explorer", desc:"Long days on foot. Hands free, everything reachable.", ids:["trail-sling","tech-pouch","insulated-bottle","travel-cap"] },
  mountain:{ label:"Mountain Trip", desc:"Weather shifts fast. Layer up and stay dry.", ids:["daypack-24","rain-jacket","insulated-bottle","packing-cubes"] },
  work:{ label:"Work Trip", desc:"Cabin-friendly, meeting-ready, cable chaos solved.", ids:["daypack-24","tech-pouch","travel-organizer","packing-cubes"] },
};

const SHIPPING = [
  { id:"regular", name:"Regular", price:18000, eta:"3–5 business days", desc:"Standard courier, tracking included" },
  { id:"express", name:"Express", price:35000, eta:"1–2 business days", desc:"Priority handling & faster transit" },
  { id:"sameday", name:"Same Day", price:50000, eta:"Today", desc:"Instant courier, Jabodetabek only*" },
];
const PAYMENTS = [
  { id:"transfer", name:"Bank Transfer", desc:"BCA · Mandiri · BRI — verify within 24h", icon:"TRF" },
  { id:"va", name:"Virtual Account", desc:"Simulated VA number after checkout", icon:"VA" },
  { id:"ewallet", name:"E-Wallet", desc:"GoPay · OVO · DANA", icon:"WLT" },
  { id:"qris", name:"QRIS", desc:"Scan once from any m-banking / wallet", icon:"QR" },
  { id:"cod", name:"COD", desc:"Pay cash when your order arrives", icon:"COD" },
];
const STATUSES = ["Pesanan Diproses", "Dikemas", "Dalam Perjalanan", "Sedang Diantar", "Terkirim"];
const STATUS_DESC = [
  "Pesanan telah diverifikasi dan masuk antrean sistem gudang NOMAD.",
  "Barang telah diperiksa dan dikemas rapi dengan material ramah lingkungan di Fulfillment Hub.",
  "Paket dalam perjalanan antar-hub melalui koridor tol logistik (simulasi demo).",
  "Kurir simulasi sedang bergerak menuju ke alamat tujuan pengantaran.",
  "Paket telah tiba dengan selamat di alamat tujuan. Terima kasih telah memilih NOMAD!"
];
const COUPONS = { "NOMAD10":0.10 };
const BUNDLE_RATE = 0.05;
// Complete-kit sets detected from cart contents (greedy, shared units consumed once).
// Recomputed from product data on every call — never trusted from UI text.
function bundleDiscount(cart){
  const pool={}; cart.forEach(i=>{pool[i.pid]=(pool[i.pid]||0)+i.qty;});
  let disc=0;
  Object.values(KITS).forEach(k=>{
    let sets=Infinity; k.ids.forEach(id=>{sets=Math.min(sets,pool[id]||0);});
    if(sets>0&&sets!==Infinity){
      disc+=Math.round(k.ids.reduce((s,id)=>s+byId(id).price,0)*BUNDLE_RATE)*sets;
      k.ids.forEach(id=>{pool[id]-=sets;});
    }
  });
  return disc;
}
const FREE_SHIP_THRESHOLD = 500000;

const TRAVEL_BADGES = {
  "daypack-24": ["Cabin Approved", "16″ Laptop Sleeve", "PFC-Free DWR"],
  "trail-sling": ["5L Crossbody", "Magnetic Quick-Buckle", "Cordura® Woven"],
  "travel-organizer": ["Lays Flat 180°", "Passport + 6 Cards", "Vegan Leather Touch"],
  "insulated-bottle": ["Cold 24h / Hot 12h", "18/8 Pro Stainless", "Zero-Leak Seal"],
  "rain-jacket": ["10,000 mm Waterproof", "Packs into Pocket", "Taped Seams"],
  "packing-cubes": ["Set of 3 Compression", "30% Volume Saver", "Mesh Visibility"],
  "travel-cap": ["Crushable & Packable", "Quick-Dry Twill", "54–60 cm Adjustable"],
  "tech-pouch": ["Origami Pockets", "Stands Upright on Tray", "65W Charger Ready"]
};

const PAIRINGS = {
  "daypack-24": { pairId:"travel-organizer", tag:"Travel System Pairing", reason:"Slips flat into the main compartment to keep cables and passport organized in transit." },
  "trail-sling": { pairId:"insulated-bottle", tag:"Hydration Pairing", reason:"Carry hands-free while keeping cold hydration within arm's reach." },
  "travel-organizer": { pairId:"tech-pouch", tag:"Power & Cable Hub", reason:"Separate flat documents from chunky chargers, plugs, and international adapters." },
  "insulated-bottle": { pairId:"daypack-24", tag:"Carry Companion", reason:"Engineered to slide securely into the 24L side pocket without rattles or falling out." },
  "rain-jacket": { pairId:"daypack-24", tag:"All-Weather System", reason:"Packs into its own pocket and tucks right into the pack's top quick-access sleeve." },
  "packing-cubes": { pairId:"daypack-24", tag:"One-Bag Packing System", reason:"All 3 compression cubes stack modularly inside the 24L main compartment." },
  "travel-cap": { pairId:"trail-sling", tag:"City Explorer Duo", reason:"Crushes flat into the sling's rear slip pocket when the sun dips." },
  "tech-pouch": { pairId:"travel-organizer", tag:"Digital Nomad System", reason:"Keep work power bricks and travel folios coordinated across flights and cafés." }
};

function renderFreeShippingBar(currentAmount){
  const diff = FREE_SHIP_THRESHOLD - currentAmount;
  const pct = Math.min(100, Math.max(0, Math.round((currentAmount / FREE_SHIP_THRESHOLD) * 100)));
  const unlocked = diff <= 0;
  return `
    <div class="ship-progress-box">
      <div class="ship-progress-text">
        ${unlocked 
          ? `<span>🎉 <b>Free Regular Shipping unlocked!</b></span>` 
          : `<span>Add <b>${rp(diff)}</b> more for <b>Free Regular Shipping</b></span>`
        }
        <span class="ship-progress-pct">${pct}%</span>
      </div>
      <div class="ship-progress-track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
        <div class="ship-progress-fill ${unlocked ? "unlocked" : ""}" style="width:${pct}%"></div>
      </div>
    </div>`;
}

window.copyText = (text, msg) => {
  if(navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => toast(msg || "Copied to clipboard!", "ok")).catch(() => toast("Copied: " + text, "ok"));
  } else {
    toast(msg || "Copied to clipboard!", "ok");
  }
};

const COLOR_HEX = { Black:"#202421", Sand:"#D8D1C5", Olive:"#5A624E", Silver:"#B9BEC2" };
const byId = (id) => PRODUCTS.find(p=>p.id===id);
const rp = (n) => "Rp" + Math.round(n).toLocaleString("id-ID");
const esc = (s="") => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const store = {
  get:(k,f)=>{ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):f }catch{ return f } },
  set:(k,v)=>{ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){ console.warn("Storage set error",e); } }
};
const getCart=()=>{
  const raw=store.get("nomad_cart",[]);
  if(!Array.isArray(raw)) return [];
  return raw.filter(i=>i&&typeof i==="object"&&byId(i.pid)&&Number.isInteger(i.qty)&&i.qty>0);
};
const setCart=(c)=>{store.set("nomad_cart",c);updateBadges();renderDrawer();};
const getWish=()=>{
  const raw=store.get("nomad_wish",[]);
  if(!Array.isArray(raw)) return [];
  return raw.filter(id=>typeof id==="string"&&byId(id));
};
const setWish=(w)=>{store.set("nomad_wish",w);updateBadges();};
const getRecent=()=>{
  const raw=store.get("nomad_recent",[]);
  if(!Array.isArray(raw)) return [];
  return raw.filter(id=>typeof id==="string"&&byId(id));
};
const pushRecent=(id)=>{let r=getRecent().filter(x=>x!==id);r.unshift(id);store.set("nomad_recent",r.slice(0,8));};
const getOrders=()=>{
  const raw=store.get("nomad_orders",[]);
  if(!Array.isArray(raw)) return [];
  return raw.filter(o=>o&&typeof o==="object"&&typeof o.id==="string"&&Array.isArray(o.items));
};
const saveOrder=(o)=>{
  if(!o||typeof o!=="object"||!o.id) return;
  const a=getOrders().filter(x=>x.id!==o.id);
  a.unshift(o);
  store.set("nomad_orders",a);
};
const updateOrder=(o)=>{
  if(!o||typeof o!=="object"||!o.id) return;
  const a=getOrders();
  const next=a.map(x=>x.id===o.id?{...o}:x);
  store.set("nomad_orders",next);
};
const getCoupon=()=>store.get("nomad_coupon",null);

function formatEventTime(isoString){
  if(!isoString) return "";
  try {
    const d=new Date(isoString);
    if(isNaN(d.getTime())) return "";
    return d.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})+" WIB";
  } catch { return ""; }
}

function toast(msg, type=""){
  const w=document.getElementById("toastWrap");
  const t=document.createElement("div");
  t.className="toast "+type; t.textContent=msg;
  w.appendChild(t);
  setTimeout(()=>{t.style.opacity="0";t.style.transition="opacity .3s";setTimeout(()=>t.remove(),320)},2400);
}
function stars(r){ const f=Math.round(r); return "★★★★★".slice(0,f)+"☆☆☆☆☆".slice(0,5-f); }
function cartQty(){ return getCart().reduce((s,i)=>s+i.qty,0); }
function updateBadges(){
  const cq=cartQty(), w=getWish().length;
  const cc=document.getElementById("cartCount"), wc=document.getElementById("wishCount");
  cc.textContent=cq; cc.classList.toggle("hidden",cq===0);
  wc.textContent=w; wc.classList.toggle("hidden",w===0);
  const dc=document.getElementById("drawerCount"); if(dc) dc.textContent=cq?`(${cq} item${cq===1?"":"s"})`:"";
}
function totals(shipId="regular", coupon=getCoupon()){
  const cart=getCart();
  const sub=cart.reduce((s,i)=>s+byId(i.pid).price*i.qty,0);
  const couponOn=coupon&&COUPONS[coupon]?coupon:null;
  const disc=couponOn?Math.round(sub*COUPONS[couponOn]):0;
  const bundle=couponOn?0:bundleDiscount(cart); // never stacked with a coupon
  const after=sub-disc-bundle;
  let ship=0;
  if(cart.length){ const m=SHIPPING.find(s=>s.id===shipId)||SHIPPING[0]; ship=m.price; if(m.id==="regular"&&after>=FREE_SHIP_THRESHOLD) ship=0; }
  return { sub, disc, bundle, ship, total:after+ship };
}
const bundleLine=(t)=>t.bundle?`<div class="kv kit-save"><span>Bundle savings (5%)</span><span>− ${rp(t.bundle)}</span></div>`:"";
function addToCart(pid, color, size, qty=1, openDrawer=true, silent=false){
  const p=byId(pid); if(!p) return false;
  color=color||p.colors[0]; size=size||(p.sizes?p.sizes[0]:null);
  const cart=getCart();
  const totalInCart=cart.filter(i=>i.pid===pid).reduce((s,i)=>s+i.qty,0);
  if(totalInCart+qty>p.stock){ toast(`Only ${p.stock} in stock`,"err"); return false; }
  const key=(i)=>i.pid===pid&&i.color===color&&i.size===size;
  const ex=cart.find(key);
  if(ex) ex.qty+=qty; else cart.push({pid,color,size,qty});
  setCart(cart);
  if(!silent) toast("Added to bag");
  if(openDrawer) openCart();
  return true;
}

/* ---------- drawer ---------- */
function openCart(){ document.getElementById("cartDrawer").classList.remove("hidden"); document.getElementById("overlay").classList.remove("hidden"); document.body.style.overflow="hidden"; renderDrawer(); }
function closeCart(){ document.getElementById("cartDrawer").classList.add("hidden"); document.getElementById("overlay").classList.add("hidden"); document.body.style.overflow=""; }
function renderDrawer(){
  const body=document.getElementById("drawerBody"), foot=document.getElementById("drawerFoot");
  if(!body||!foot) return;
  const cart=getCart();
  if(!cart.length){
    body.innerHTML=`
      <div class="empty drawer-empty" style="padding:48px 16px">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="muted" style="margin-bottom:12px"><path d="M6 8h15l-1.5 8.5a1 1 0 0 1-1 .5H8.7a1 1 0 0 1-1-.8L5 4.5A1 1 0 0 0 4 3.7H2"/><circle cx="9.5" cy="20.5" r="1.2"/><circle cx="17.5" cy="20.5" r="1.2"/></svg>
        <h3>Your bag is empty</h3>
        <p class="muted">Explore our essentials and start building your journey.</p>
      </div>`;
    foot.innerHTML=`
      <div class="drawer-actions">
        <a href="#/shop" class="btn btn-dark btn-block" onclick="closeCart()">EXPLORE COLLECTION</a>
      </div>`;
    return;
  }
  const t=totals();
  body.innerHTML=`
    <div class="mini-items">
      ${cart.map((i,ix)=>{const p=byId(i.pid);return `
        <div class="mini-line">
          <a href="#/product/${p.id}" class="mini-thumb">${imgTag(p.images[0],p.id,p.name)}</a>
          <div class="mini-details">
            <div class="mini-header">
              <a class="mini-name" href="#/product/${p.id}">${p.name}</a>
              <b class="mini-price">${rp(p.price*i.qty)}</b>
            </div>
            <div class="mini-var">${i.color}${i.size?" · "+i.size:""} · ${rp(p.price)}</div>
            <div class="mini-controls">
              <div class="cl-qty mini-qty" role="group" aria-label="Quantity for ${p.name}">
                <button onclick="chQty(${ix},-1)" aria-label="Decrease quantity">−</button><b>${i.qty}</b><button onclick="chQty(${ix},1)" aria-label="Increase quantity">+</button>
              </div>
              <button class="mini-remove" onclick="rmLine(${ix})" aria-label="Remove ${p.name} from bag">Remove</button>
            </div>
          </div>
        </div>`;}).join("")}
    </div>`;

  foot.innerHTML=`
    <div class="drawer-summary">
      ${renderFreeShippingBar(t.sub-t.disc-t.bundle)}
      <div class="drawer-subtotal">
        <span class="drawer-subtotal-label">Subtotal</span>
        <b class="drawer-subtotal-val">${rp(t.sub)}</b>
      </div>
      ${t.disc?`<div class="kv kit-save" style="padding:4px 0"><span>Coupon ${getCoupon()}</span><span>− ${rp(t.disc)}</span></div>`:""}
      ${bundleLine(t)}
      ${(t.disc||t.bundle)?`<div class="kv total" style="padding:4px 0 2px"><span>Net Total</span><b>${rp(t.sub-t.disc-t.bundle)}</b></div>`:""}
      <div class="drawer-divider"></div>
      <p class="drawer-ship-note">Shipping calculated at checkout${(t.sub-t.disc-t.bundle)>=FREE_SHIP_THRESHOLD?" · Regular ships free 🎉":""}</p>
    </div>
    <div class="drawer-actions">
      <a href="#/checkout" class="btn btn-dark btn-block" onclick="closeCart()">PROCEED TO CHECKOUT</a>
      <a href="#/cart" class="btn btn-ghost btn-block" onclick="closeCart()">VIEW BAG</a>
    </div>`;
}
window.chQty=(ix,d)=>{
  const c=getCart(); if(!c[ix]) return;
  const p=byId(c[ix].pid);
  const totalOthers=c.filter((item,idx)=>idx!==ix&&item.pid===c[ix].pid).reduce((s,i)=>s+i.qty,0);
  const n=c[ix].qty+d;
  if(n<1)return rmLine(ix);
  if(totalOthers+n>p.stock){toast(`Only ${p.stock} in stock`,"err");return;}
  c[ix].qty=n;setCart(c);
  if(location.hash.includes("#/cart"))render(false);
};
window.rmLine=(ix)=>{const c=getCart();c.splice(ix,1);setCart(c);toast("Removed from bag");if(location.hash.includes("#/cart"))render(false);};
window.closeCart=closeCart;
window.quickAdd=(pid)=>{
  const p=byId(pid); if(!p) return;
  if(p.sizes&&p.sizes.length){
    go("#/product/"+pid);
    toast("Please select your size");
    return;
  }
  addToCart(pid);
};

/* ---------- wishlist ---------- */
function toggleWish(pid){
  let w=getWish();
  if(w.includes(pid)){w=w.filter(x=>x!==pid);toast("Removed from wishlist");}
  else{w.push(pid);toast("Added to wishlist","ok");}
  setWish(w);
  render(false);
}
window.toggleWish=toggleWish;

/* ---------- router ---------- */
function parseHash(){
  const h=location.hash||"#/";
  const [pathQ]=[h.slice(1)];
  const [path,qs]=pathQ.split("?");
  const seg=path.split("/").filter(Boolean);
  return { seg, q:new URLSearchParams(qs||"") };
}
window.addEventListener("hashchange",render);
function go(h){ location.hash=h; }

function productCard(p){
  const wished=getWish().includes(p.id);
  return `<div class="pcard">
    <div class="pcard-media">
      <a href="#/product/${p.id}" style="display:block;height:100%">${imgTag(p.images[0],p.id,p.name)}</a>
      ${p.badge?`<span class="badge ${p.badge==="Sale"?"sale":""}">${p.badge}</span>`:""}
      <button class="wish-btn ${wished?"active":""}" onclick="toggleWish('${p.id}')" aria-label="Wishlist">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="${wished?"currentColor":"none"}" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7.5-4.7-10-9.3C.4 8.6 2.3 5 5.7 5c2 0 3.4 1.1 4.3 2.6l3 4.2 3-4.2c.9-1.5 2.3-2.6 4.3-2.6 3.4 0 5.3 3.6 3.7 6.7C19.5 16.3 12 21 12 21Z"/></svg>
      </button>
      <button class="quick-add" onclick="quickAdd('${p.id}')">Quick Add — ${rp(p.price)}</button>
    </div>
    <div class="pcard-body">
      <span class="pcard-cat">${p.cat}</span>
      <a class="pcard-name" href="#/product/${p.id}">${p.name}</a>
      <div class="pcard-desc">${p.tag}</div>
      <div class="pcard-meta"><span class="stars">${stars(p.rating)}</span><span>${p.rating} (${p.reviews})</span></div>
      <div class="pcard-price"><span class="price">${rp(p.price)}</span>${p.old?`<span class="price-old">${rp(p.old)}</span>`:""}</div>
      <div class="dots">${p.colors.map(c=>`<span class="dot" title="${c}" style="background:${COLOR_HEX[c]||"#999"}"></span>`).join("")}</div>
    </div>
  </div>`;
}

/* ---------- HOME ---------- */
function renderHome(){
  const feat=[byId("daypack-24"),byId("insulated-bottle"),byId("travel-organizer"),byId("rain-jacket")];
  const featIds=new Set(feat.map(p=>p.id));
  const best=[...PRODUCTS].filter(p=>!featIds.has(p.id)).sort((a,b)=>b.reviews-a.reviews).slice(0,4);
  return `
  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">Premium travel gear — Est. Jakarta</div>
      <h1>Carry Less.<br/>Go Further.</h1>
      <p class="lead">Thoughtfully designed travel essentials for lighter, smarter journeys.</p>
      <div class="hero-ctas">
        <a href="#/shop" class="btn btn-terra">SHOP COLLECTION</a>
        <a href="#/" onclick="document.getElementById('kit').scrollIntoView({behavior:'smooth'});return false;" class="btn btn-ghost" style="border-color:#3A4A42;color:#EDE8DC">BUILD YOUR KIT</a>
      </div>
      <div class="hero-proof">
        <div><strong>4.8/5</strong>average product rating</div>
        <div><strong>2-yr</strong>warranty included</div>
        <div><strong>30-day</strong>free returns</div>
      </div>
    </div>
    <div class="hero-media">
      ${imgTag("https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1600&auto=format&fit=crop","hero","NOMAD Daypack resting on a trail in soft natural light","",true)}
    </div>
  </section>
  <div class="trust"><div class="trust-inner">
    <span><b>Free Regular shipping</b> over Rp500.000</span><span><b>30-day</b> easy returns</span><span><b>2-year</b> warranty</span><span><b>COD & QRIS</b> available</span>
  </div></div>

  <section class="section">
    <div class="sec-head"><div><h2>Made for the Journey</h2><p>Four icons our community reaches for again and again — tested from city commutes to summit pushes.</p></div><a class="link-arrow" href="#/shop">View all 8 products →</a></div>
    <div class="grid grid-4">${feat.map(productCard).join("")}</div>
  </section>

  <section class="section" id="collections">
    <div class="sec-head"><div><h2>Shop by Category</h2><p>Start with the system you need, then build around it.</p></div></div>
    <div class="cat-grid">${CATS.map(c=>`
      <a class="cat-tile" href="#/shop?cat=${encodeURIComponent(c.name)}">
        ${imgTag(c.img,c.name,c.name)}<div class="cat-info"><h3>${c.name}</h3><p>${c.desc} · ${c.count}</p><span>Explore →</span></div>
      </a>`).join("")}</div>
  </section>

  <section class="section" id="kit">
    <div class="kit"><div class="kit-inner">
      <h2>Build Your Kit</h2>
      <p>Choose your journey. We'll handle the essentials. Bundle pricing applied automatically — one tap adds everything.</p>
      <div class="kit-tabs" id="kitTabs">
        ${Object.entries(KITS).map(([k,v],i)=>`<button class="kit-tab ${i===0?"active":""}" data-kit="${k}">${v.label}</button>`).join("")}
      </div>
      <div class="kit-panel">
        <div class="kit-items" id="kitItems"></div>
        <div class="kit-summary" id="kitSummary"></div>
      </div>
    </div></div>
  </section>

  <section class="section">
    <div class="sec-head"><div><h2>Best Sellers</h2><p>Community favorites in this demo catalog, ranked by product rating.</p></div><a class="link-arrow" href="#/shop?sort=rating">Shop top rated →</a></div>
    <div class="grid grid-4">${best.map(productCard).join("")}</div>
  </section>

  <section class="section">
    <div class="banner">
      ${imgTag(U("photo-1488646953014-85cb44e25828"),"banner","Travel lighter")}
      <div class="banner-copy"><h2>Travel lighter.<br/>Move further.</h2><p>One bag. Three days. Zero checked luggage. Our packing system makes it possible.</p><a href="#/shop" class="btn btn-terra">EXPLORE THE COLLECTION</a></div>
    </div>
  </section>

  <section class="section" id="reviews">
    <div class="sec-head"><div><h2>Carried Everywhere</h2><p>Illustrative field notes for this demo catalog — weekend escapes, work trips and everything between.</p></div></div>
    <div class="rev-grid">
      ${[
        ["NP","Nadya P. · Jakarta","Weekend Escape Kit","Took the Daypack 24L to Bandung for 3 days — laptop, cubes, jacket, all fit and it still slides under the train seat. Stitching feels indestructible.",5],
        ["BA","Bimo A. · Bandung","Trail Sling","The sling is the first bag I don't notice wearing. Passport, phone and power bank exactly where I expect. Bought a second one for my brother.",5],
        ["SL","Sarah L. · Surabaya","Rain Jacket + Bottle","Got caught in a proper downpour in Bromo. Jacket beaded everything off and packed into its own pocket after. The bottle survived being dropped on rocks — twice.",4],
      ].map(r=>`<div class="rev"><div class="stars">${stars(r[4])}</div><p>“${r[3]}”</p><div class="rev-who"><div class="avatar">${r[0]}</div><div class="rev-author"><b>${r[1]}</b><span>Sample review · ${r[2]}</span></div></div></div>`).join("")}
    </div>
  </section>

  <section class="section" id="story">
    <div class="story">
      ${imgTag(U("photo-1476514525535-07fb3b4ae5f1"),"story","NOMAD philosophy")}
      <div class="story-copy">
        <div class="eyebrow" style="color:var(--terra)">Our philosophy</div>
        <h2>Gear that disappears into the journey.</h2>
        <p>“We believe the best travel gear disappears into the journey — light enough to carry, reliable enough to trust, and considered enough to keep.”</p>
        <p class="muted small">Every NOMAD piece starts from one question: what would you still pack on your tenth trip? If it doesn't earn its grams, it doesn't ship. Recycled shells, honest specs, repairs before replacements.</p>
        <div class="story-stats"><div><strong>8</strong><span>considered essentials</span></div><div><strong>4</strong><span>trip-ready kits</span></div><div><strong>4.8★</strong><span>average product rating</span></div></div>
      </div>
    </div>
    <div class="news">
      <h2>Stay in the Loop</h2>
      <p>Field notes, packing guides and early access to limited colorways. One email a month.</p>
      <form class="news-form" onsubmit="return subscribe(event)"><input id="newsEmail" type="email" required placeholder="you@email.com" aria-label="Email address for newsletter" /><button class="btn btn-dark">Subscribe</button></form>
      <p class="small muted" id="newsMsg" style="margin-top:12px"></p>
    </div>
  </section>`;
}
window.subscribe=(e)=>{e.preventDefault();const v=document.getElementById("newsEmail").value;document.getElementById("newsMsg").innerHTML=`<span class="news-ok">✓ You're in! First field notes land this Friday.</span>`;toast("Subscribed","ok");return false;};

let currentKitKey = "weekend";
let kitSelected = new Set(KITS["weekend"].ids);

function mountKit(){
  const tabs=document.querySelectorAll(".kit-tab"); if(!tabs.length) return;
  const paint=()=>{
    tabs.forEach(t=>t.classList.toggle("active",t.dataset.kit===currentKitKey));
    const k=KITS[currentKitKey];
    const allItems=k.ids.map(byId);
    const selectedCount=kitSelected.size;
    const isFullKit=selectedCount===k.ids.length;

    // render items list with custom checkbox toggle
    document.getElementById("kitItems").innerHTML=allItems.map(p=>{
      const isSel=kitSelected.has(p.id);
      return `
        <div class="kit-item ${isSel?"selected":"unselected"}" onclick="toggleKitItem('${p.id}')" role="checkbox" aria-checked="${isSel}" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleKitItem('${p.id}');}">
          <span class="kit-checkbox" aria-hidden="true">${isSel?"✓":""}</span>
          ${imgTag(p.images[0],p.id,p.name)}
          <div class="kit-item-content">
            <div class="n">${p.name}</div>
            <div class="v">${p.tag}</div>
            <div class="pr">${rp(p.price)}</div>
            <a href="#/product/${p.id}" class="kit-item-link" onclick="event.stopPropagation()">View specs →</a>
          </div>
        </div>`;
    }).join("");

    // render kit summary
    const selectedItems=allItems.filter(p=>kitSelected.has(p.id));
    const sub=selectedItems.reduce((s,p)=>s+p.price,0);
    const save=isFullKit?Math.round(sub*BUNDLE_RATE):0;
    const net=sub-save;

    document.getElementById("kitSummary").innerHTML=`
      <div class="kit-count-badge">${selectedCount} of ${k.ids.length} essentials selected</div>
      <h3>${k.label}</h3>
      <p class="small muted" style="margin:0 0 14px">${k.desc}</p>
      ${allItems.map(p=>{
        const isSel=kitSelected.has(p.id);
        return `<div class="kv" style="${isSel?"":"opacity:.4;text-decoration:line-through"}">
          <span>${p.name}${isSel?"":" (excluded)"}</span>
          <span>${rp(p.price)}</span>
        </div>`;
      }).join("")}
      ${isFullKit
        ? `<div class="kv kit-save"><span>Bundle perk · auto 5% off</span><span>− ${rp(save)}</span></div>`
        : selectedCount>0
        ? `<p class="small muted" style="margin:10px 0;padding:8px 12px;background:#EDE8DC;border-radius:8px">💡 Select all 4 essentials to unlock <b>5% bundle perk</b></p>`
        : ""
      }
      <div class="kv total"><span>Total</span><span>${rp(net)}</span></div>
      ${selectedCount>0
        ? `<button class="btn btn-dark btn-block" style="margin-top:14px" onclick="addSelectedKit()">ADD SELECTED (${selectedCount}) — ${rp(net)}</button>`
        : `<button class="btn btn-dark btn-block" style="margin-top:14px" disabled>SELECT ESSENTIALS</button>`
      }
      <p class="small muted center" style="margin:10px 0 0">
        ${isFullKit 
          ? "5% bundle perk applies automatically · no code needed" 
          : "Tap any item above to include or exclude from bundle"
        }
      </p>
      ${net>=FREE_SHIP_THRESHOLD ? `<p class="small muted center" style="margin:6px 0 0">🎉 Free Regular shipping unlocked!</p>` : ""}`;
  };

  window.toggleKitItem=(pid)=>{
    if(kitSelected.has(pid)) kitSelected.delete(pid);
    else kitSelected.add(pid);
    paint();
  };

  tabs.forEach(t=>t.onclick=()=>{
    currentKitKey=t.dataset.kit;
    kitSelected=new Set(KITS[currentKitKey].ids);
    paint();
  });

  paint();
}

window.addSelectedKit=()=>{
  const k=KITS[currentKitKey];
  const itemsToAdd=k.ids.filter(id=>kitSelected.has(id));
  if(!itemsToAdd.length) return;
  let n=0;
  itemsToAdd.forEach(id=>{
    const p=byId(id);
    if(addToCart(id,p.colors[0],p.sizes?p.sizes[0]:null,1,false,true)) n++;
  });
  const isFull=kitSelected.size===k.ids.length;
  if(getCoupon()) toast(`${n} items added · coupon ${getCoupon()} active, bundle perk paused`);
  else if(isFull) toast(`${n} items added · 5% bundle perk applied`,"ok");
  else toast(`${n} items added to bag`);
  openCart();
};

window.addKit=(key)=>{
  currentKitKey=key;
  kitSelected=new Set(KITS[key].ids);
  window.addSelectedKit();
};

/* ---------- SHOP ---------- */
let shopState={ q:"", cats:[], colors:[], price:"all", avail:"all", sort:"featured" };
function renderShop(q){
  shopState={ q:q.get("q")||"", cats:q.get("cat")?[q.get("cat")]:[], colors:[], price:"all", avail:"all", sort:q.get("sort")||"featured" };
  const allCats=["All","Bags","Travel Accessories","Apparel","Everyday Essentials"];
  const pillsHtml=`
    <div class="shop-pills" id="shopPills" role="tablist" aria-label="Filter categories">
      ${allCats.map(cat=>{
        const isActive=cat==="All"?shopState.cats.length===0:(shopState.cats.length===1&&shopState.cats[0]===cat);
        return `<button type="button" class="shop-pill ${isActive?"active":""}" onclick="selectCatPill('${cat}')">${cat}</button>`;
      }).join("")}
    </div>`;

  return `<div class="shop-head wrap">
    <h1>Shop All</h1>
    <p>8 essentials · filter by trip, color and budget. Demo prices & stock — everything you see is buyable.</p>
    ${pillsHtml}
  </div>
  <div class="shop-layout">
    <aside class="filters">
      <h3>Search</h3>
      <div class="f-search-wrap">
        <input class="f-search" id="fQ" placeholder="Search products…" value="${esc(shopState.q)}" />
        <button class="f-clear-btn ${shopState.q?"":"hidden"}" id="fQClear" onclick="clearSearchFilter()" aria-label="Clear search" type="button">✕</button>
      </div>
      <div class="f-group"><h3>Category</h3>${["Bags","Travel Accessories","Apparel","Everyday Essentials"].map(c=>`
        <label class="f-check"><input type="checkbox" data-fcat="${c}" ${shopState.cats.includes(c)?"checked":""}/> ${c}</label>`).join("")}</div>
      <div class="f-group"><h3>Price</h3>${[["all","All prices"],["under250","Under Rp250rb"],["250to400","Rp250–400rb"],["over400","Over Rp400rb"]].map(o=>`
        <label class="f-check"><input type="radio" name="fprice" value="${o[0]}" ${shopState.price===o[0]?"checked":""}/> ${o[1]}</label>`).join("")}</div>
      <div class="f-group"><h3>Color</h3>${["Black","Sand","Olive","Silver"].map(c=>`
        <label class="f-check"><input type="checkbox" data-fcolor="${c}"/> <span class="dot" style="background:${COLOR_HEX[c]};width:14px;height:14px"></span> ${c}</label>`).join("")}</div>
      <div class="f-group"><h3>Availability</h3>
        <select class="f-select" id="fAvail">
          <option value="all" ${shopState.avail==="all"?"selected":""}>All</option>
          <option value="ready" ${shopState.avail==="ready"?"selected":""}>In stock</option>
          <option value="low" ${shopState.avail==="low"?"selected":""}>Low stock (≤ 8)</option>
        </select></div>
      <button class="btn btn-ghost btn-block btn-sm" onclick="clearFilters()">CLEAR ALL FILTERS</button>
    </aside>
    <div>
      <div class="shop-toolbar"><span class="count" id="shopCount"></span>
        <select id="fSort" aria-label="Sort">
          <option value="featured">Featured</option><option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option><option value="rating">Best Rated</option><option value="newest">Newest</option>
        </select></div>
      <div class="chips" id="shopChips"></div>
      <div class="grid grid-3" id="shopGrid" style="margin-top:16px"></div>
      <div id="recentRow"></div>
    </div>
  </div>`;
}
function filteredProducts(){
  let r=[...PRODUCTS];
  const s=shopState;
  if(s.q) r=r.filter(p=>(p.name+p.tag+p.desc+p.cat).toLowerCase().includes(s.q.toLowerCase()));
  if(s.cats.length) r=r.filter(p=>s.cats.includes(p.cat));
  if(s.colors.length) r=r.filter(p=>p.colors.some(c=>s.colors.includes(c)));
  if(s.price==="under250") r=r.filter(p=>p.price<250000);
  if(s.price==="250to400") r=r.filter(p=>p.price>=250000&&p.price<=400000);
  if(s.price==="over400") r=r.filter(p=>p.price>400000);
  if(s.avail==="ready") r=r.filter(p=>p.stock>0);
  if(s.avail==="low") r=r.filter(p=>p.stock<=8);
  if(s.sort==="price-asc") r.sort((a,b)=>a.price-b.price);
  if(s.sort==="price-desc") r.sort((a,b)=>b.price-a.price);
  if(s.sort==="rating") r.sort((a,b)=>b.rating-a.rating);
  if(s.sort==="newest") r.sort((a,b)=>b.added-a.added);
  return r;
}
function paintShopGrid(loading=false){
  const g=document.getElementById("shopGrid"); if(!g) return;
  if(loading){ g.innerHTML=Array(6).fill(`<div class="skeleton"></div>`).join(""); return; }
  const r=filteredProducts();
  document.getElementById("shopCount").textContent=`${r.length} product${r.length!==1?"s":""}`;
  const chips=[];
  if(shopState.q) chips.push({label:`“${shopState.q}”`, type:"q"});
  shopState.cats.forEach(c=>chips.push({label:c, type:"cat", val:c}));
  shopState.colors.forEach(c=>chips.push({label:c, type:"color", val:c}));
  if(shopState.price!=="all"){
    const pNames={under250:"Under Rp250rb","250to400":"Rp250–400rb",over400:"Over Rp400rb"};
    chips.push({label:pNames[shopState.price]||shopState.price, type:"price"});
  }
  if(shopState.avail!=="all"){
    chips.push({label:shopState.avail==="ready"?"In stock":"Low stock (≤ 8)", type:"avail"});
  }
  document.getElementById("shopChips").innerHTML=chips.map(c=>`
    <span class="chip">${esc(c.label)} <button onclick="removeFilter('${c.type}','${esc(c.val||"")}')" aria-label="Remove filter">✕</button></span>
  `).join("");
  g.innerHTML=r.length?r.map(productCard).join(""):`
    <div class="empty" style="grid-column:1/-1">
      <h3>No products found</h3>
      <p>No products match your current combination of filters.</p>
      <button class="btn btn-dark" onclick="clearFilters()">RESET ALL FILTERS</button>
      <div style="margin-top:16px;font-size:13px;color:var(--muted)">Popular searches: <a href="#/shop" onclick="shopState.q='daypack';document.getElementById('fQ').value='daypack';paintShopGrid();return false;" style="text-decoration:underline;color:var(--ink)">Daypack</a> · <a href="#/shop" onclick="shopState.q='bottle';document.getElementById('fQ').value='bottle';paintShopGrid();return false;" style="text-decoration:underline;color:var(--ink)">Bottle</a> · <a href="#/shop" onclick="shopState.q='jacket';document.getElementById('fQ').value='jacket';paintShopGrid();return false;" style="text-decoration:underline;color:var(--ink)">Jacket</a></div>
    </div>`;
  const rec=getRecent().map(byId).filter(Boolean).slice(0,3);
  document.getElementById("recentRow").innerHTML=rec.length?`<div class="sec-head" style="margin:34px 0 16px"><div><h2 style="font-size:24px">Recently Viewed</h2></div></div><div class="grid grid-3">${rec.map(productCard).join("")}</div>`:"";
  updatePillsUI();
}
function updatePillsUI(){
  document.querySelectorAll("#shopPills .shop-pill").forEach(pill=>{
    const cat=pill.textContent.trim();
    const isActive=cat==="All"?shopState.cats.length===0:(shopState.cats.length===1&&shopState.cats[0]===cat);
    pill.classList.toggle("active", isActive);
  });
}
function bindShop(){
  const q=document.getElementById("fQ"), qClear=document.getElementById("fQClear");
  if(!q) return;
  document.getElementById("fSort").value=shopState.sort;
  document.getElementById("fAvail").value=shopState.avail;
  let deb;
  q.oninput=()=>{
    clearTimeout(deb);
    if(qClear) qClear.classList.toggle("hidden", !q.value.trim());
    deb=setTimeout(()=>{shopState.q=q.value.trim();paintShopGrid();},250);
  };
  document.querySelectorAll("[data-fcat]").forEach(c=>c.onchange=()=>{shopState.cats=[...document.querySelectorAll("[data-fcat]:checked")].map(x=>x.dataset.fcat);paintShopGrid();});
  document.querySelectorAll("[data-fcolor]").forEach(c=>c.onchange=()=>{shopState.colors=[...document.querySelectorAll("[data-fcolor]:checked")].map(x=>x.dataset.fcolor);paintShopGrid();});
  document.querySelectorAll('[name="fprice"]').forEach(r=>r.onchange=()=>{shopState.price=document.querySelector('[name="fprice"]:checked').value;paintShopGrid();});
  document.getElementById("fAvail").onchange=(e)=>{shopState.avail=e.target.value;paintShopGrid();};
  document.getElementById("fSort").onchange=(e)=>{shopState.sort=e.target.value;paintShopGrid();};
  paintShopGrid(true); setTimeout(()=>paintShopGrid(false),350);
}
window.selectCatPill=(cat)=>{
  if(cat==="All"){
    shopState.cats=[];
    document.querySelectorAll("[data-fcat]").forEach(c=>c.checked=false);
  } else {
    shopState.cats=[cat];
    document.querySelectorAll("[data-fcat]").forEach(c=>c.checked=(c.dataset.fcat===cat));
  }
  paintShopGrid();
};
window.clearSearchFilter=()=>{
  shopState.q="";
  const q=document.getElementById("fQ"), qc=document.getElementById("fQClear");
  if(q) q.value="";
  if(qc) qc.classList.add("hidden");
  paintShopGrid();
};
window.removeFilter=(type,val)=>{
  if(type==="q"){ shopState.q=""; const el=document.getElementById("fQ"), qc=document.getElementById("fQClear"); if(el) el.value=""; if(qc) qc.classList.add("hidden"); }
  if(type==="cat"){ shopState.cats=shopState.cats.filter(x=>x!==val); const el=document.querySelector(`[data-fcat="${val}"]`); if(el) el.checked=false; }
  if(type==="color"){ shopState.colors=shopState.colors.filter(x=>x!==val); const el=document.querySelector(`[data-fcolor="${val}"]`); if(el) el.checked=false; }
  if(type==="price"){ shopState.price="all"; const el=document.querySelector('[name="fprice"][value="all"]'); if(el) el.checked=true; }
  if(type==="avail"){ shopState.avail="all"; const el=document.getElementById("fAvail"); if(el) el.value="all"; }
  paintShopGrid();
};
window.clearFilters=()=>{ toast("Filters cleared"); if((location.hash||"").includes("?")) location.hash="#/shop"; else render(); };

/* ---------- PRODUCT DETAIL ---------- */
let pdSel={ color:null, size:null, qty:1, img:0 };
function renderProduct(id){
  const p=byId(id);
  if(!p) return `<div class="page"><div class="empty"><h3>Product not found</h3><a class="btn btn-dark" href="#/shop">BACK TO SHOP</a></div></div>`;
  pushRecent(id);
  pdSel={ color:p.colors[0], size:p.sizes?p.sizes[0]:null, qty:1, img:0 };
  const rel=PRODUCTS.filter(x=>x.id!==id&&(x.cat===p.cat)).concat(PRODUCTS.filter(x=>x.id!==id&&x.cat!==p.cat)).slice(0,4);
  const stockCls=p.stock===0?"out":p.stock<=8?"low":"ok";
  const stockTxt=p.stock===0?"Out of stock":p.stock<=8?`Only ${p.stock} left in stock`:`In stock — ready to ship`;
  const badges=TRAVEL_BADGES[p.id]||[];
  const badgeHtml=badges.length?`
    <div class="travel-badges">
      ${badges.map(b=>`<span class="travel-badge"><span class="travel-badge-dot"></span>${b}</span>`).join("")}
    </div>`:"" ;
  const pair=PAIRINGS[p.id];
  const pairProd=pair?byId(pair.pairId):null;
  const pairingHtml=pairProd?`
    <div class="pairing-section">
      <h3>Travel System Pairing</h3>
      <div class="pairing-card">
        <a href="#/product/${pairProd.id}" class="pairing-thumb">${imgTag(pairProd.images[0],pairProd.id,pairProd.name)}</a>
        <div class="pairing-info">
          <div class="pairing-tag">${pair.tag}</div>
          <a href="#/product/${pairProd.id}" class="pairing-name">${pairProd.name}</a>
          <div class="pairing-desc">${pair.reason}</div>
        </div>
        <div class="pairing-action">
          <div class="pairing-price">${rp(pairProd.price)}</div>
          <button class="btn btn-dark btn-sm" onclick="addToCart('${pairProd.id}')">+ Add Companion</button>
        </div>
      </div>
    </div>`:"" ;

  return `<div class="pd">
    <div class="crumb"><a href="#/">Home</a> / <a href="#/shop">Shop</a> / <a href="#/shop?cat=${encodeURIComponent(p.cat)}">${p.cat}</a> / <b style="color:var(--ink)">${p.name}</b></div>
    <div class="pd-grid">
      <div class="gallery">
        <div class="g-main" id="gMain">${imgTag(p.images[0],p.id,p.name)}</div>
        <div class="g-thumbs">${p.images.map((im,i)=>`<button class="${i===0?"active":""}" onclick="setImg('${p.id}',${i})" aria-label="View ${i+1}">${imgTag(im,p.id+i,p.name)}</button>`).join("")}</div>
      </div>
      <div class="pd-info">
        <span class="pcard-cat">${p.cat}${p.variantLabel?" · "+p.variantLabel:""}</span>
        <h1>${p.name}</h1>
        <div class="pd-rating"><span class="stars">${stars(p.rating)}</span><span><b style="color:var(--ink)">${p.rating}</b> · ${p.reviews} reviews</span></div>
        <div class="pd-price"><span class="now">${rp(p.price)}</span>${p.old?`<span class="price-old">${rp(p.old)}</span><span class="badge sale">Save ${rp(p.old-p.price)}</span>`:""}</div>
        <span class="stock ${stockCls}"><i></i>${stockTxt}</span>
        ${badgeHtml}
        <p class="pd-short">${p.desc}</p>
        <div class="opt-label">Color — <span id="colorName">${pdSel.color}</span></div>
        <div class="swatch-row" id="colorRow">${p.colors.map(c=>`<button class="swatch color-swatch ${c===pdSel.color?"active":""}" title="${c}" style="background:${COLOR_HEX[c]||"#999"}" onclick="setColor('${c}')" aria-label="${c}"></button>`).join("")}</div>
        ${p.sizes?`<div class="opt-label">Size — <span id="sizeName">${pdSel.size}</span> · <a href="#/product/${p.id}" onclick="toast('Size guide: S 68×52 · M 70×53 · L 72×55 · XL 74×57 cm — Regular fit, room for a mid-layer.');return false;" class="small" style="text-decoration:underline">Size guide</a></div>
        <div class="swatch-row">${p.sizes.map(s=>`<button class="swatch ${s===pdSel.size?"active":""}" onclick="setSize(this,'${s}')">${s}</button>`).join("")}</div>`:""}
        <div class="qty-row">
          <div class="qty"><button onclick="setQty(-1,'${p.id}')" aria-label="Decrease">−</button><b id="qtyN">1</b><button onclick="setQty(1,'${p.id}')" aria-label="Increase">+</button></div>
          <span class="small muted" id="qtyHint">Max ${p.stock} per order</span>
        </div>
        <div class="pd-ctas">
          <button class="btn btn-dark" onclick="pdAdd('${p.id}')">ADD TO BAG — <span id="ctaPrice">${rp(p.price)}</span></button>
          <button class="btn btn-ghost" onclick="toggleWish('${p.id}')">♡ Wishlist</button>
        </div>
        <div class="pd-perks"><div><b>Free returns</b>30 days, no questions</div><div><b>2-year warranty</b>Stitching & hardware</div><div><b>Ships in 24h</b>From Jakarta warehouse</div><div><b>COD available</b>Pay at your door</div></div>
        <div class="tabs">
          <div class="tab-btns">
            <button class="active" onclick="tab(this,'d')">Description</button><button onclick="tab(this,'s')">Specifications</button><button onclick="tab(this,'r')">Shipping & Returns</button><button onclick="tab(this,'v')">Reviews (${p.reviews})</button>
          </div>
          <div class="tab-panel" id="tabBody"></div>
        </div>
      </div>
    </div>
    ${pairingHtml}
    <div class="sticky-cta"><button class="btn btn-dark" onclick="pdAdd('${p.id}')">ADD TO BAG — <span id="stickyCtaPrice">${rp(p.price)}</span></button></div>
    <div class="sec-head" style="margin-top:56px"><div><h2>You May Also Like</h2></div><a class="link-arrow" href="#/shop">View all →</a></div>
    <div class="grid grid-4">${rel.map(productCard).join("")}</div>
  </div>`;
}
function bindProduct(id){
  const p=byId(id); if(!p) return;
  paintTab("d",p.id);
}
window.setImg=(pid,i)=>{const p=byId(pid);pdSel.img=i;document.getElementById("gMain").innerHTML=imgTag(p.images[i],pid+i,p.name);
  document.querySelectorAll(".g-thumbs button").forEach((b,j)=>b.classList.toggle("active",j===i));};
window.setColor=(c)=>{pdSel.color=c;document.getElementById("colorName").textContent=c;
  document.querySelectorAll("#colorRow .swatch").forEach(b=>b.classList.toggle("active",b.title===c));};
window.setSize=(btn,s)=>{pdSel.size=s;const el=document.getElementById("sizeName");if(el)el.textContent=s;
  btn.parentElement.querySelectorAll(".swatch").forEach(b=>b.classList.toggle("active",b===btn));};
window.setQty=(d,pid)=>{
  const p=byId(pid);
  pdSel.qty=Math.min(p.stock,Math.max(1,pdSel.qty+d));
  const pr=rp(p.price*pdSel.qty);
  document.getElementById("qtyN").textContent=pdSel.qty;
  document.getElementById("ctaPrice").textContent=pr;
  const sc=document.getElementById("stickyCtaPrice");
  if(sc) sc.textContent=pr;
};
window.pdAdd=(pid)=>{ if(addToCart(pid,pdSel.color,pdSel.size,pdSel.qty)){} };
window.tab=(btn,k)=>{btn.parentElement.querySelectorAll("button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");paintTab(k,location.hash.split("/")[2]);};
function paintTab(k,pid){
  const p=byId(pid); const el=document.getElementById("tabBody"); if(!el||!p) return;
  if(k==="d") el.innerHTML=`<p>${p.desc}</p><p class="muted small">Designed in Jakarta · Responsibly made · Repair program available.</p>`;
  if(k==="s") el.innerHTML=`<table class="spec-table">${p.specs.map(s=>`<tr><td>${s[0]}</td><td><b>${s[1]}</b></td></tr>`).join("")}</table>`;
  if(k==="r") el.innerHTML=`<ul><li>Ships in 24h from Jakarta. Regular ${rp(18000)} (free over ${rp(500000)}), Express ${rp(35000)}, Same Day ${rp(50000)}.</li><li>30-day free returns — unused, tags on.</li><li>2-year warranty on stitching, zips & hardware.</li></ul>`;
  if(k==="v") el.innerHTML=[["Rizky","Jakarta","Fits my whole weekend. Quality rivals brands twice the price.",5],["Anya","Bali","Bought for a work trip, now use it daily. Zips feel premium.",5]].map(r=>`<div class="rev" style="margin-bottom:10px"><div class="stars">${stars(r[3])}</div><p>“${r[2]}”</p><b class="small">${r[0]} · ${r[1]} · <span class="muted">Sample review</span></b></div>`).join("");
}

/* ---------- CART PAGE ---------- */
function renderCart(){
  const cart=getCart();
  if(!cart.length) return `<div class="page center" style="max-width:560px"><h1>Your bag is waiting.</h1><p class="sub">Explore our essentials and start building your journey.</p><a href="#/shop" class="btn btn-dark">SHOP COLLECTION</a>
    <div style="margin-top:36px;text-align:left"><h3 style="font-family:var(--font-ed)">Popular right now</h3><div class="grid grid-3" style="grid-template-columns:repeat(2,1fr)">${[byId("daypack-24"),byId("insulated-bottle")].map(productCard).join("")}</div></div></div>`;
  const t=totals();
  return `<div class="page"><h1>Your Bag</h1><p class="sub">${cartQty()} items · Free Regular shipping Rp500.000+</p>
  <div class="cart-layout"><div class="cart-lines">
    ${cart.map((i,ix)=>{const p=byId(i.pid);return `<div class="cart-line">
      <a href="#/product/${p.id}" class="cl-thumb">${imgTag(p.images[0],p.id,p.name)}</a>
      <div class="cl-details">
        <div class="cl-header">
          <a class="cl-name" href="#/product/${p.id}">${p.name}</a>
          <div class="cl-price">${rp(p.price*i.qty)}</div>
        </div>
        <div class="cl-var">${i.color}${i.size?" · Size "+i.size:""} · ${rp(p.price)} each</div>
        <div class="cl-controls">
          <div class="cl-qty" role="group" aria-label="Quantity for ${p.name}">
            <button onclick="chQty(${ix},-1)" aria-label="Decrease quantity">−</button>
            <b>${i.qty}</b>
            <button onclick="chQty(${ix},1)" aria-label="Increase quantity">+</button>
          </div>
          <button class="cl-remove" onclick="rmLine(${ix})" aria-label="Remove ${p.name} from bag">Remove</button>
        </div>
      </div>
    </div>`;}).join("")}
    <a href="#/shop" class="link-arrow" style="align-self:start">← Continue shopping</a>
  </div>
  <div class="summary"><h3 style="margin:0 0 10px;font-family:var(--font-ed);font-size:22px">Summary</h3>
    ${renderFreeShippingBar(t.sub-t.disc-t.bundle)}
    <div class="kv"><span>Subtotal</span><b>${rp(t.sub)}</b></div>
    ${t.disc?`<div class="kv kit-save"><span>Coupon ${getCoupon()}</span><span>− ${rp(t.disc)}</span></div>`:""}${bundleLine(t)}
    <div class="kv"><span>Shipping</span><span class="muted">At checkout</span></div>
    <div class="kv total"><span>Total <span class="small muted">excl. shipping</span></span><span>${rp(t.sub-t.disc-t.bundle)}</span></div>
    <div class="coupon-row">
      <input id="cpn" placeholder="Coupon code" value="${getCoupon()||""}" />
      <button class="btn btn-ghost btn-sm" onclick="applyCoupon()">Apply</button>
      ${getCoupon()?`<button class="btn btn-ghost btn-sm" onclick="removeCoupon()">Remove</button>`:""}
    </div>
    <div class="coupon-msg" id="cpnMsg"></div>
    <a href="#/checkout" class="btn btn-dark btn-block">PROCEED TO CHECKOUT</a>
    <p class="small muted center">Try <b>NOMAD10</b> for 10% off · complete kits save 5% automatically</p>
  </div></div></div>`;
}
window.removeCoupon=()=>{ store.set("nomad_coupon",null); toast("Coupon removed"); render(false); renderDrawer(); };
window.applyCoupon=()=>{
  const v=(document.getElementById("cpn").value||"").trim().toUpperCase();
  const m=document.getElementById("cpnMsg");
  if(!v){store.set("nomad_coupon",null);render(false);renderDrawer();return;}
  if(COUPONS[v]){store.set("nomad_coupon",v);toast(`Coupon applied — ${Math.round(COUPONS[v]*100)}% off (bundle perk paused)`,"ok");render(false);renderDrawer();}
  else{m.textContent="Invalid coupon code. Try NOMAD10.";m.className="coupon-msg err";}
};

/* ---------- WISHLIST ---------- */
function renderWishlist(){
  const w=getWish().map(byId).filter(Boolean);
  if(!w.length) return `<div class="page center" style="max-width:560px"><h1>Wishlist</h1><p class="sub">Save the gear you're eyeing. It stays here during your visit.</p><a href="#/shop" class="btn btn-dark">DISCOVER PRODUCTS</a></div>`;
  return `<div class="page"><h1>Wishlist</h1><p class="sub">${w.length} saved</p>
  <div class="cart-lines" style="max-width:780px">${w.map(p=>`
    <div class="cart-line">
      <a href="#/product/${p.id}" class="cl-thumb">${imgTag(p.images[0],p.id,p.name)}</a>
      <div class="cl-details">
        <div class="cl-header">
          <a class="cl-name" href="#/product/${p.id}">${p.name}</a>
          <div class="cl-price">${rp(p.price)}</div>
        </div>
        <div class="cl-var">${p.tag}</div>
        <div class="pcard-meta" style="margin-bottom:10px"><span class="stars">${stars(p.rating)}</span><span>${p.rating} (${p.reviews})</span></div>
        <div class="cl-controls">
          <button class="btn btn-dark btn-sm" onclick="wishToCart('${p.id}')">MOVE TO BAG — ${rp(p.price)}</button>
          <button class="cl-remove" onclick="toggleWish('${p.id}')">Remove</button>
        </div>
      </div>
    </div>`).join("")}</div></div>`;
}
window.wishToCart=(pid)=>{ const p=byId(pid); if(!p) return;
  if(addToCart(pid,p.colors[0],p.sizes?p.sizes[0]:null,1,false,true)){ setWish(getWish().filter(x=>x!==pid)); toast("Moved to bag","ok"); render(false); } };

/* ---------- CHECKOUT ---------- */
let co={ step:1, info:store.get("nomad_info",{name:"",phone:"",address:"",city:"",province:"",postal:"",notes:""}), ship:"express", pay:"qris" };
function renderCheckout(){
  if(!getCart().length) return `<div class="page center"><h1>Your bag is empty</h1><p class="sub">Add something before checkout.</p><a class="btn btn-dark" href="#/shop">SHOP COLLECTION</a></div>`;
  const t=totals(co.ship);
  const steps=["Information","Shipping","Payment","Review"];
  return `<div class="page"><h1>Checkout</h1><p class="sub">${cartQty()} items · secure simulated checkout</p>
  <div class="steps">${steps.map((s,i)=>{
    const isDone = co.step > i+1;
    const isActive = co.step === i+1;
    return `${i>0?'<div class="step-line"></div>':""}<div class="step ${isActive?"active":""} ${isDone?"done":""}" ${isDone?`onclick="co.step=${i+1};render(false)" style="cursor:pointer" title="Back to ${s}"`:""}><span class="n">${isDone?"✓":i+1}</span>${s}</div>`;
  }).join("")}</div>
  <div class="co-grid"><div id="coMain"></div>
    <div class="summary"><h3 style="font-family:var(--font-ed);font-size:20px;margin:0 0 10px">Order Summary</h3>
      ${getCart().map(i=>{const p=byId(i.pid);return `<div class="kv"><span>${p.name} <span class="muted">× ${i.qty}</span><br/><span class="small muted">${i.color}${i.size?" · "+i.size:""}</span></span><b>${rp(p.price*i.qty)}</b></div>`;}).join("")}
      <div class="kv"><span>Subtotal</span><span>${rp(t.sub)}</span></div>
      ${t.disc?`<div class="kv kit-save"><span>Discount (${getCoupon()})</span><span>− ${rp(t.disc)}</span></div>`:""}${bundleLine(t)}
      <div class="kv"><span>Shipping (${SHIPPING.find(s=>s.id===co.ship).name})</span><span>${t.ship===0?"FREE":rp(t.ship)}</span></div>
      <div class="kv total"><span>Total</span><span>${rp(t.total)}</span></div>
    </div></div></div>`;
}
function bindCheckout(){
  const m=document.getElementById("coMain"); if(!m) return;
  if(co.step===1){
    const v=co.info;
    m.innerHTML=`<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:14px">
        <h3 style="margin:0">01 — Shipping Information</h3>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button type="button" class="btn btn-ghost btn-sm" onclick="autoFillTangsel()" style="padding:6px 10px;font-size:11.5px" title="Isi alamat Tangerang Selatan untuk pengujian tracking Tangsel">📍 Demo Tangsel</button>
          <button type="button" class="btn btn-ghost btn-sm" onclick="autoFillCheckout()" style="padding:6px 10px;font-size:11.5px" title="Isi alamat Jakarta Selatan">⚡ Demo Jakarta</button>
        </div>
      </div>
      <div class="form-grid">
      ${[["name","Full Name","text","e.g. Nadya Prameswari"],["phone","Phone Number","tel","e.g. 0812xxxxxxx"],["address","Address","text","Street, building, landmark"],["city","City","text","e.g. Jakarta Selatan"],["province","Province / Region","text","e.g. DKI Jakarta"],["postal","Postal Code","text","e.g. 12430"]].map(f=>`
      <div class="field ${f[0]==="address"?"full":""}" id="fw-${f[0]}"><label for="fi-${f[0]}">${f[1]} *</label><input id="fi-${f[0]}" type="${f[2]}" placeholder="${f[3]}" value="${esc(v[f[0]]||"")}" /><span class="err-msg" role="alert">This field is required</span></div>`).join("")}
      <div class="field full"><label for="fi-notes">Order Notes (optional)</label><textarea id="fi-notes" rows="2" placeholder="Gate code, leave with security, gift wrap…">${esc(v.notes||"")}</textarea></div>
    </div><div class="btn-row" style="margin-top:18px"><a href="#/cart" class="btn btn-ghost">← BACK TO BAG</a><button class="btn btn-dark" style="flex:1" onclick="saveInfo()">CONTINUE TO SHIPPING →</button></div></div>`;
  }
  if(co.step===2){
    m.innerHTML=`<div class="card"><h3>02 — Delivery Method</h3>
      ${SHIPPING.map(s=>{let price=s.price;const t0=totals(s.id);if(t0.ship===0&&s.id==="regular")price=0;return `
      <label class="ship-opt ${co.ship===s.id?"active":""}"><input type="radio" name="ship" ${co.ship===s.id?"checked":""} onchange="setShip('${s.id}')" />
      <div class="grow"><b>${s.name} <span class="small muted">· ${s.eta}</span></b><small>${s.desc}${s.id==="regular"&&price===0?" — FREE Rp500.000+":""}</small></div>
      <span class="ship-price">${price===0?"FREE":rp(s.price)}</span></label>`;}).join("")}
      <p class="small muted">* Same Day simulated — Jabodetabek demo only. Couriers: JNE · J&T · SiCepat · AnterAja.</p>
      <div class="btn-row" style="margin-top:8px"><button class="btn btn-ghost" onclick="co.step=1;render()">← BACK</button><button class="btn btn-dark" style="flex:1" onclick="co.step=3;render()">CONTINUE TO PAYMENT →</button></div></div>`;
  }
  if(co.step===3){
    const tot = totals(co.ship).total;
    const isCod = co.pay==="cod";
    const btnText = isCod ? `CONFIRM CASH ON DELIVERY — ${rp(tot)}` : `SIMULATE PAYMENT — ${rp(tot)}`;

    let payDetailHtml = "";
    if(co.pay === "qris"){
      payDetailHtml = `
        <div class="pay-details-card">
          <div class="pay-details-header">
            <span>QRIS Standar Pembayaran Nasional</span>
            <span class="qris-badge">QRIS</span>
          </div>
          <div class="qris-display">
            <div class="qris-merchant">PT NOMAD GOODS INDONESIA</div>
            <div class="qris-nm">NMID: ID1024098234891</div>
            <svg class="qris-qr" viewBox="0 0 200 200" fill="currentColor">
              <rect width="200" height="200" fill="#fff" />
              <rect x="16" y="16" width="48" height="48" fill="#18251F"/>
              <rect x="24" y="24" width="32" height="32" fill="#fff"/>
              <rect x="32" y="32" width="16" height="16" fill="#18251F"/>
              <rect x="136" y="16" width="48" height="48" fill="#18251F"/>
              <rect x="144" y="24" width="32" height="32" fill="#fff"/>
              <rect x="152" y="32" width="16" height="16" fill="#18251F"/>
              <rect x="16" y="136" width="48" height="48" fill="#18251F"/>
              <rect x="24" y="144" width="32" height="32" fill="#fff"/>
              <rect x="32" y="152" width="16" height="16" fill="#18251F"/>
              <rect x="76" y="20" width="12" height="12" fill="#18251F"/>
              <rect x="96" y="28" width="12" height="12" fill="#18251F"/>
              <rect x="112" y="16" width="12" height="12" fill="#18251F"/>
              <rect x="20" y="76" width="12" height="12" fill="#18251F"/>
              <rect x="40" y="88" width="12" height="12" fill="#18251F"/>
              <rect x="74" y="74" width="52" height="52" fill="#18251F" rx="8"/>
              <rect x="82" y="82" width="36" height="36" fill="#fff" rx="4"/>
              <text x="100" y="106" font-size="16" font-weight="bold" fill="#B87952" text-anchor="middle" font-family="sans-serif">N</text>
              <rect x="136" y="76" width="12" height="12" fill="#18251F"/>
              <rect x="164" y="88" width="12" height="12" fill="#18251F"/>
              <rect x="76" y="136" width="12" height="12" fill="#18251F"/>
              <rect x="100" y="152" width="12" height="12" fill="#18251F"/>
              <rect x="136" y="136" width="20" height="20" fill="#18251F"/>
              <rect x="164" y="156" width="16" height="16" fill="#18251F"/>
            </svg>
            <div style="font-size:12px;color:var(--muted)">Scan via BCA Mobile, Livin' by Mandiri, GoPay, OVO, or DANA</div>
            <div style="font-weight:700;font-size:14.5px;margin-top:8px;color:var(--ink)">Amount: ${rp(tot)}</div>
          </div>
        </div>`;
    } else if(co.pay === "va"){
      payDetailHtml = `
        <div class="pay-details-card">
          <div class="pay-details-header">
            <span>BCA Virtual Account (Simulated)</span>
            <span class="small muted">Instant Verification</span>
          </div>
          <div class="va-display">
            <div class="small muted">Virtual Account Number:</div>
            <div class="va-row">
              <span class="va-num">8808 0812 9942 3810</span>
              <button class="copy-btn" onclick="copyText('8808081299423810', 'VA number copied!')">Copy</button>
            </div>
            <div class="bank-info-row"><span>Account Name</span><b>NOMAD / ${esc(co.info.name||"Customer")}</b></div>
            <div class="bank-info-row"><span>Total Amount</span><b>${rp(tot)}</b></div>
            <p class="small muted" style="margin:10px 0 0;line-height:1.45">1. Open m-Banking > Transfer > Virtual Account<br/>2. Enter VA number above<br/>3. Verify recipient and amount will auto-fill</p>
          </div>
        </div>`;
    } else if(co.pay === "transfer"){
      payDetailHtml = `
        <div class="pay-details-card">
          <div class="pay-details-header">
            <span>Bank Transfer (Manual Verification)</span>
            <span class="small muted">BCA / Mandiri</span>
          </div>
          <div class="va-display">
            <div class="bank-info-row">
              <span>BCA Account: <b>5420-192-881</b></span>
              <button class="copy-btn" onclick="copyText('5420192881', 'Account number copied!')">Copy</button>
            </div>
            <div class="bank-info-row"><span>Account Holder</span><b>PT NOMAD GOODS INDONESIA</b></div>
            <div class="bank-info-row"><span>Amount</span><b>${rp(tot)}</b></div>
          </div>
        </div>`;
    } else if(co.pay === "ewallet"){
      payDetailHtml = `
        <div class="pay-details-card">
          <div class="pay-details-header">
            <span>E-Wallet Quick Pay</span>
            <span class="small muted">One-tap simulation</span>
          </div>
          <div class="va-display">
            <p class="small" style="margin:0 0 10px">Registered phone: <b>${esc(co.info.phone||"0812xxxxxxx")}</b></p>
            <div style="display:flex;gap:8px;font-size:12.5px;font-weight:600;flex-wrap:wrap">
              <span style="background:#E5F2E8;color:#256B3D;padding:5px 12px;border-radius:6px">GoPay Ready</span>
              <span style="background:#EBF2FA;color:#1E5388;padding:5px 12px;border-radius:6px">OVO Ready</span>
              <span style="background:#F4EBFB;color:#6C2B92;padding:5px 12px;border-radius:6px">DANA Ready</span>
            </div>
          </div>
        </div>`;
    } else if(co.pay === "cod"){
      payDetailHtml = `
        <div class="pay-details-card">
          <div class="pay-details-header">
            <span>Cash on Delivery (COD)</span>
            <span class="small" style="color:#256B3D;font-weight:700">✓ Pay at Doorstep</span>
          </div>
          <div class="cod-box">
            <div class="bank-info-row"><span>Amount to prepare</span><b>${rp(tot)}</b></div>
            <div class="bank-info-row"><span>Courier Partner</span><b>${SHIPPING.find(s=>s.id===co.ship).name} Courier</b></div>
            <p class="small muted" style="margin:10px 0 0;line-height:1.45">Please prepare exact cash when the courier arrives. No digital transaction fee.</p>
          </div>
        </div>`;
    }

    m.innerHTML=`<div class="card"><h3>03 — Payment <span class="small muted">(simulation — no real charge)</span></h3>
      ${PAYMENTS.map(p=>`<label class="pay-opt ${co.pay===p.id?"active":""}"><input type="radio" name="pay" ${co.pay===p.id?"checked":""} onchange="setPay('${p.id}')" /><span class="pay-icon">${p.icon}</span><div class="grow"><b>${p.name}</b><small>${p.desc}</small></div></label>`).join("")}
      ${payDetailHtml}
      <div class="btn-row" style="margin-top:14px"><button class="btn btn-ghost" onclick="co.step=2;render()">← BACK</button><button class="btn btn-terra" style="flex:1" onclick="simulatePay()">${btnText}</button></div></div>`;
  }
  if(co.step===4){
    const t=totals(co.ship); const sh=SHIPPING.find(s=>s.id===co.ship), py=PAYMENTS.find(p=>p.id===co.pay), v=co.info;
    m.innerHTML=`<div class="card"><h3>04 — Review & Place Order</h3>
      ${getCart().map(i=>{const p=byId(i.pid);return `<div class="kv"><span><b>${p.name}</b><br/><span class="small muted">${i.color}${i.size?" · "+i.size:""} · Qty ${i.qty}</span></span><b>${rp(p.price*i.qty)}</b></div>`;}).join("")}
      <div class="kv"><span>Subtotal</span><span>${rp(t.sub)}</span></div>
      ${t.disc?`<div class="kv kit-save"><span>Discount</span><span>− ${rp(t.disc)}</span></div>`:""}${bundleLine(t)}
      <div class="kv"><span>Shipping · ${sh.name} (${sh.eta}) <button class="cl-remove" onclick="co.step=2;render()">Edit</button></span><span>${t.ship===0?"FREE":rp(t.ship)}</span></div>
      <div class="kv"><span>Payment · ${py.name} <button class="cl-remove" onclick="co.step=3;render()">Edit</button></span><span>Simulated</span></div>
      <div class="kv"><span>Ship to <button class="cl-remove" onclick="co.step=1;render()">Edit</button></span><span style="text-align:right;max-width:55%">${esc(v.name)}<br/><span class="muted">${esc(v.address)}, ${esc(v.city)} ${esc(v.postal)}<br/>${esc(v.phone)}</span></span></div>
      <div class="kv total"><span>Total Payment</span><span>${rp(t.total)}</span></div>
      <div class="btn-row" style="margin-top:14px"><button class="btn btn-ghost" onclick="co.step=3;render()">← BACK</button><button class="btn btn-dark" style="flex:1" onclick="this.disabled=true;placeOrder()">PLACE ORDER</button></div></div>`;
  }
}
window.saveInfo=()=>{
  const fields=["name","phone","address","city","province","postal"]; let ok=true;
  fields.forEach(f=>{const el=document.getElementById("fi-"+f);const w=document.getElementById("fw-"+f);const bad=!el.value.trim()||(f==="phone"&&el.value.replace(/\D/g,"").length<9);
    w.classList.toggle("invalid",bad); if(f==="phone"&&el.value.trim())w.querySelector(".err-msg").textContent=el.value.replace(/\D/g,"").length<9?"Enter a valid phone number":"This field is required";
    if(bad)ok=false; co.info[f]=el.value.trim();});
  co.info.notes=document.getElementById("fi-notes").value.trim();
  store.set("nomad_info",co.info);
  if(!ok){
    toast("Please complete the highlighted fields","err");
    const firstBad=document.querySelector(".field.invalid input, .field.invalid textarea");
    if(firstBad) firstBad.focus();
    return;
  }
  co.step=2; render();
};
window.setShip=(id)=>{co.ship=id;render();};
window.setPay=(id)=>{co.pay=id;render();};
let payTimer1=null, payTimer2=null;
function closePayModal(){
  if(payTimer1){ clearTimeout(payTimer1); payTimer1=null; }
  if(payTimer2){ clearTimeout(payTimer2); payTimer2=null; }
  const modal=document.getElementById("payModal");
  if(modal) modal.classList.add("hidden");
  document.body.style.overflow="";
}
window.closePayModal=closePayModal;
window.finishPayInstantly=()=>{
  closePayModal();
  co.step=4; render(); window.scrollTo(0,0);
  toast(co.pay==="cod"?"Cash on Delivery dikonfirmasi":"Pembayaran berhasil (simulasi)","ok");
};

window.simulatePay=()=>{
  closePayModal();
  const modal=document.getElementById("payModal"),card=document.getElementById("payCard");
  modal.classList.remove("hidden");
  document.body.style.overflow="hidden";
  const isCod = co.pay==="cod";
  card.innerHTML=`<div class="spinner"></div><h3 style="margin:0 0 6px">${isCod?"Menyiapkan pesanan COD…":"Memproses pembayaran…"}</h3><p class="muted small">${isCod?"Menyiapkan Cash on Delivery (simulasi demo)":"Menghubungi "+PAYMENTS.find(p=>p.id===co.pay).name+" (simulasi demo)"}</p><button type="button" class="btn btn-ghost btn-xs" style="margin-top:14px" onclick="finishPayInstantly()">⚡ Bayar Instan (Lewati Tunggu)</button>`;
  payTimer1=setTimeout(()=>{
    card.innerHTML=`<div class="check-big">✓</div><h3 style="margin:0 0 6px">${isCod?"Metode COD Dikonfirmasi":"Pembayaran Berhasil"}</h3><p class="muted small">Membuat data pesanan Anda…</p>`;
    payTimer2=setTimeout(()=>{
      finishPayInstantly();
    },450);
  },650);
};

let isPlacingOrder=false;
window.placeOrder=()=>{
  if(isPlacingOrder) return;
  if(!getCart().length){ toast("Keranjang belanja kosong","err"); return; }
  
  // Validate checkout data
  const info=co.info||{};
  const required=["name","phone","address","city","province","postal"];
  const invalidFields=required.filter(f=>!info[f]||!String(info[f]).trim());
  const phoneDigits=(info.phone||"").replace(/\D/g,"");
  if(invalidFields.length>0||phoneDigits.length<9){
    toast("Harap lengkapi semua data pengiriman dengan benar","err");
    co.step=1;
    render();
    return;
  }

  isPlacingOrder=true;
  try{
    const t=totals(co.ship);
    const id="#NMD-"+Math.floor(100000+Math.random()*900000);
    const trackingNumber="TRK-NMD-"+Math.floor(100000+Math.random()*900000);
    const now=new Date().toISOString();
    const sh=SHIPPING.find(s=>s.id===co.ship)||SHIPPING[0];
    const etaText=sh.id==="sameday"?"Hari ini (Same Day · Kurir simulasi)":sh.id==="express"?"1–2 hari kerja (Express · Kurir simulasi)":"3–5 hari kerja (Reguler · Kurir simulasi)";

    const destResolve = resolveOrderDestinationSync(co.info);

    const order={
      id,
      trackingNumber,
      items:JSON.parse(JSON.stringify(getCart())),
      info:{...co.info},
      destCoords: destResolve.coords,
      destLabel: destResolve.label,
      destKey: destResolve.regionKey,
      ship:co.ship,
      pay:co.pay,
      sub:t.sub,
      disc:t.disc,
      bundle:t.bundle,
      shipCost:t.ship,
      total:t.total,
      coupon:getCoupon(),
      status:0, // Initial stage: Pesanan Dibuat
      created:now,
      eta:etaText,
      events:[
        {
          stage:0,
          title:STATUSES[0],
          desc:STATUS_DESC[0],
          timestamp:now,
          note:"Status pengiriman demo diinisiasi"
        }
      ]
    };

    saveOrder(order);

    // Verify order was saved successfully in storage
    const verified=findOrder(id);
    if(!verified){
      throw new Error("Gagal menyimpan pesanan ke localStorage");
    }

    // Only clear cart and coupon AFTER successful order creation and save
    setCart([]);
    store.set("nomad_coupon",null);
    co={step:1,info:co.info,ship:"express",pay:"qris"};
    isPlacingOrder=false;

    toast("Pesanan berhasil dibuat!","ok");
    go("#/order/"+encodeURIComponent(id));
  }catch(err){
    console.error("Order placement failed",err);
    isPlacingOrder=false;
    toast("Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.","err");
  }
};

/* ---------- ORDER + TRACKING ---------- */
function findOrder(query){
  if(!query||typeof query!=="string") return null;
  const q=decodeURIComponent(query).trim().toLowerCase();
  const cleanQ=q.replace(/^#/,"");
  return getOrders().find(o=>{
    if(!o||!o.id) return false;
    const id=String(o.id).toLowerCase();
    const cleanId=id.replace(/^#/,"");
    const trk=String(o.trackingNumber||"").toLowerCase();
    return id===q||cleanId===cleanQ||trk===q||trk===cleanQ;
  })||null;
}

function renderOrder(id){
  const o=findOrder(decodeURIComponent(id));
  if(!o){
    return `<div class="page center" style="max-width:560px">
      <div class="empty-icon" style="font-size:36px;margin-bottom:12px">📦</div>
      <h1>Order Not Found</h1>
      <p class="sub">Pesanan tidak ditemukan di sesi browser ini (localStorage demo).</p>
      <div class="btn-row" style="justify-content:center">
        <a class="btn btn-dark" href="#/shop">CONTINUE SHOPPING</a>
        <a class="btn btn-ghost" href="#/tracking">TRACK ANOTHER ORDER</a>
      </div>
    </div>`;
  }
  const sh=SHIPPING.find(s=>s.id===o.ship)||SHIPPING[0];
  const py=PAYMENTS.find(p=>p.id===o.pay)||PAYMENTS[0];
  const trk=o.trackingNumber||("TRK-"+o.id.replace("#",""));
  const currStatus=STATUSES[o.status||0]||STATUSES[0];
  const currDesc=STATUS_DESC[o.status||0]||"";

  return `<div class="page" style="max-width:760px">
    <div class="confirm-hero">
      <div class="check-big">✓</div>
      <h1>Order Confirmed</h1>
      <p class="sub">Thank you, ${esc(o.info.name?o.info.name.split(" ")[0]:"traveler")}. Your simulated order has been registered.</p>
      <div class="confirm-badge-wrap">
        <span class="order-id-tag">Order ID: <b>${esc(o.id)}</b> <button type="button" class="copy-btn" style="margin-left:6px" onclick="copyText('${esc(o.id)}', 'Order ID disalin!')">Copy</button></span>
        <span class="tracking-tag">Tracking No: <b>${esc(trk)}</b> <button type="button" class="copy-btn" style="margin-left:6px" onclick="copyText('${esc(trk)}', 'No. Resi disalin!')">Copy</button></span>
      </div>
    </div>

    <!-- Live Status Banner -->
    <div class="card confirm-stage-banner">
      <div class="csb-info">
        <span class="csb-label">Status Pengiriman Demo Saat Ini</span>
        <h3 class="csb-title">${esc(currStatus)}</h3>
        <p class="small muted" style="margin:0">${esc(currDesc)}</p>
      </div>
      <a href="#/tracking/${encodeURIComponent(o.id)}" class="btn btn-dark btn-sm">Buka Pelacakan Langsung →</a>
    </div>

    <!-- Order Items Summary -->
    <div class="card">
      <h3>Order Summary</h3>
      ${o.items.map(i=>{
        const p=byId(i.pid);
        return `<div class="kv"><span>${p?p.name:i.pid} <span class="muted">× ${i.qty} · ${esc(i.color||"")}${i.size?" · "+esc(i.size):""}</span></span><b>${p?rp(p.price*i.qty):""}</b></div>`;
      }).join("")}
      <div class="kv"><span>Subtotal</span><span>${rp(o.sub)}</span></div>
      ${o.disc?`<div class="kv kit-save"><span>Discount (${esc(o.coupon||"Kupon")})</span><span>− ${rp(o.disc)}</span></div>`:""}
      ${o.bundle?`<div class="kv kit-save"><span>Bundle savings (5%)</span><span>− ${rp(o.bundle)}</span></div>`:""}
      <div class="kv"><span>Shipping · ${esc(sh.name)} (${esc(o.eta)})</span><span>${o.shipCost===0?"FREE":rp(o.shipCost)}</span></div>
      <div class="kv total"><span>Total paid</span><span>${rp(o.total)}</span></div>
    </div>

    <!-- Details Box -->
    <div class="order-box">
      <div>
        <b>Shipping Address</b>
        ${esc(o.info.name)}<br/>
        ${esc(o.info.address)}, ${esc(o.info.city)} ${esc(o.info.postal)}<br/>
        ${esc(o.info.phone)}
      </div>
      <div>
        <b>Shipping Method & Estimate</b>
        ${esc(sh.name)} (Kurir simulasi)<br/>
        ${esc(o.eta)}
      </div>
      <div>
        <b>Payment Method</b>
        ${esc(py.name)} (Simulasi)<br/>
        <span class="small" style="color:#256B3D;font-weight:600">✓ Pembayaran Terverifikasi</span>
      </div>
      <div>
        <b>Penyimpanan Sesi Demo</b>
        Tersimpan di browser localStorage<br/>
        <span class="small muted">Data persist saat refresh halaman</span>
      </div>
    </div>

    <div class="btn-row" style="margin-top:22px">
      <a href="#/tracking/${encodeURIComponent(o.id)}" class="btn btn-dark" style="flex:1">TRACK ORDER →</a>
      <a href="#/shop" class="btn btn-ghost" style="flex:1">CONTINUE SHOPPING</a>
    </div>
  </div>`;
}

window.handleTrackSearch=(e)=>{
  if(e) e.preventDefault();
  const input=document.getElementById("trackSearchInput");
  const msg=document.getElementById("trackSearchMsg");
  const val=(input?input.value:"").trim();
  if(!val){
    if(msg){
      msg.textContent="Silakan masukkan Order ID atau Nomor Resi demo terlebih dahulu.";
      msg.className="track-search-msg err";
      msg.classList.remove("hidden");
    }
    return;
  }
  const found=findOrder(val);
  if(found){
    go("#/tracking/"+encodeURIComponent(found.id));
  } else {
    if(msg){
      msg.innerHTML=`Tidak ditemukan pesanan dengan ID atau No. Resi “<b>${esc(val)}</b>”. Pastikan format nomor pesanan sesuai (misal: <i>#NMD-123456</i> atau <i>TRK-NMD-123456</i>).`;
      msg.className="track-search-msg err";
      msg.classList.remove("hidden");
    }
  }
};

function renderTrackingList(){
  const orders=getOrders();
  return `<div class="page" style="max-width:760px">
    <h1>Track Your Order</h1>
    <p class="sub">Pelacakan pengiriman pesanan (simulasi demo interaktif)</p>

    <!-- Search Form -->
    <div class="card tracking-search-card">
      <h3 style="margin:0 0 6px">Cari Pesanan</h3>
      <p class="small muted" style="margin:0">Masukkan Order ID (#NMD-xxxxxx) atau Nomor Resi Demo (TRK-NMD-xxxxxx)</p>
      <form onsubmit="handleTrackSearch(event)" class="track-search-form">
        <input id="trackSearchInput" type="text" placeholder="Contoh: #NMD-849102 atau TRK-NMD-..." autocomplete="off" />
        <button type="submit" class="btn btn-dark btn-sm">LACAK PESANAN</button>
      </form>
      <div id="trackSearchMsg" class="track-search-msg hidden"></div>
    </div>

    <!-- Orders List -->
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:14px">
        <h3 style="margin:0">Riwayat Pesanan Aktif</h3>
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <button type="button" class="btn btn-ghost btn-xs" onclick="seedDemoOrderTangsel()" title="Buat pesanan demo tujuan Tangerang Selatan">📍 Demo Tangsel</button>
          <button type="button" class="btn btn-ghost btn-xs" onclick="seedDemoOrder()" title="Buat pesanan demo tujuan Jakarta Selatan">⚡ Demo Jakarta</button>
          <span class="small muted">${orders.length} order${orders.length!==1?"s":""} tersimpan</span>
        </div>
      </div>

      ${!orders.length?`
        <div class="empty center" style="padding:28px 14px">
          <p class="muted" style="margin-bottom:14px">Belum ada pesanan dalam sesi browser ini. Buat pesanan baru untuk melihat live tracking simulasi.</p>
          <div class="btn-row" style="justify-content:center;gap:10px;flex-wrap:wrap">
            <button type="button" class="btn btn-dark btn-sm" onclick="seedDemoOrderTangsel()">📍 BUAT DEMO TANGSEL</button>
            <button type="button" class="btn btn-ghost btn-sm" onclick="seedDemoOrder()">⚡ BUAT DEMO JAKARTA</button>
            <a href="#/shop" class="btn btn-ghost btn-sm">BELANJA PRODUK</a>
          </div>
        </div>
      `:`
        <div style="display:flex;flex-direction:column;gap:12px">
          ${orders.map(o=>{
            const trk=o.trackingNumber||("TRK-"+o.id.replace("#",""));
            const stIdx=typeof o.status==="number"?o.status:0;
            const stName=STATUSES[stIdx]||STATUSES[0];
            const dateStr=formatEventTime(o.created);
            const totalQty=o.items.reduce((s,i)=>s+i.qty,0);
            return `
              <div class="account-order-row" style="padding:14px 16px">
                <div style="flex:1;min-width:200px">
                  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                    <b style="font-size:15px">${esc(o.id)}</b>
                    <span class="small muted">Resi: ${esc(trk)}</span>
                  </div>
                  <div class="small muted" style="margin:4px 0">${totalQty} item · Total ${rp(o.total)}${dateStr?" · "+dateStr:""}</div>
                  <div class="small" style="color:var(--terra);font-weight:700">● ${esc(stName)} (Tahap ${stIdx+1} dari 5)</div>
                </div>
                <div style="display:flex;gap:8px;align-items:center">
                  <a href="#/order/${encodeURIComponent(o.id)}" class="btn btn-ghost btn-xs">Receipt</a>
                  <a href="#/tracking/${encodeURIComponent(o.id)}" class="btn btn-dark btn-sm">Lacak Detail →</a>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `}
    </div>
  </div>`;
}

const WEIGHT_MAP={
  "daypack-24":980, "trail-sling":320, "travel-organizer":280,
  "insulated-bottle":440, "rain-jacket":380, "packing-cubes":240,
  "travel-cap":85, "tech-pouch":310
};
function calcOrderWeight(items){
  if(!Array.isArray(items)||!items.length) return "0.65";
  const grams=items.reduce((sum,item)=>sum+(WEIGHT_MAP[item.pid]||250)*(item.qty||1),0);
  return (grams/1000).toFixed(2);
}

function formatDateEstimate(shipId, createdIso){
  try{
    const d=createdIso?new Date(createdIso):new Date();
    const opt={day:"numeric",month:"short",year:"numeric"};
    if(shipId==="sameday"){
      return `Hari ini (${d.toLocaleDateString("id-ID",opt)} sebelum 19.00 WIB)`;
    } else if(shipId==="express"){
      const d1=new Date(d); d1.setDate(d1.getDate()+1);
      const d2=new Date(d); d2.setDate(d2.getDate()+2);
      return `${d1.toLocaleDateString("id-ID",{day:"numeric",month:"short"})} – ${d2.toLocaleDateString("id-ID",opt)}`;
    } else {
      const d1=new Date(d); d1.setDate(d1.getDate()+3);
      const d2=new Date(d); d2.setDate(d2.getDate()+5);
      return `${d1.toLocaleDateString("id-ID",{day:"numeric",month:"short"})} – ${d2.toLocaleDateString("id-ID",opt)}`;
    }
  }catch{
    return shipId==="sameday"?"Hari ini (Same Day demo)":shipId==="express"?"1–2 hari kerja (Express demo)":"3–5 hari kerja (Reguler demo)";
  }
}

window.copyTrackingLink=(rawId)=>{
  const url=window.location.origin+window.location.pathname+"#/tracking/"+encodeURIComponent(rawId);
  copyText(url,"Tautan pelacakan disalin ke clipboard!");
};

/* ---------- REAL-ROAD OSRM DELIVERY NAVIGATION & TRACKING SYSTEM ---------- */

// Origin: NOMAD Central Fulfillment Hub BSD, Tangerang Selatan
const ORIGIN_COORDS = [-6.301832, 106.653237];

// Verified Regional Destination Directory for fast & reliable offline/live tracking
const REGION_COORDINATES = {
  // Tangerang Selatan & subdistricts (Origin hub is located in BSD Serpong)
  "tangerang selatan": { coords: [-6.279634, 106.724024], name: "Tangerang Selatan", key: "tangerang-selatan" },
  "tangsel": { coords: [-6.279634, 106.724024], name: "Tangerang Selatan", key: "tangerang-selatan" },
  "bintaro": { coords: [-6.279634, 106.724024], name: "Bintaro Jaya, Tangerang Selatan", key: "tangerang-selatan" },
  "bsd": { coords: [-6.3050, 106.6710], name: "BSD City, Tangerang Selatan", key: "tangerang-selatan" },
  "serpong": { coords: [-6.3150, 106.6750], name: "Serpong, Tangerang Selatan", key: "tangerang-selatan" },
  "ciputat": { coords: [-6.3122, 106.7490], name: "Ciputat, Tangerang Selatan", key: "tangerang-selatan" },
  "pamulang": { coords: [-6.3428, 106.7383], name: "Pamulang, Tangerang Selatan", key: "tangerang-selatan" },
  "pondok aren": { coords: [-6.2690, 106.7030], name: "Pondok Aren, Tangerang Selatan", key: "tangerang-selatan" },
  "alam sutera": { coords: [-6.2235, 106.6539], name: "Alam Sutera, Tangerang", key: "tangerang-selatan" },
  "setu": { coords: [-6.3490, 106.6780], name: "Setu, Tangerang Selatan", key: "tangerang-selatan" },

  // Kota Tangerang & Kabupaten
  "kota tangerang": { coords: [-6.1783, 106.6319], name: "Kota Tangerang", key: "tangerang" },
  "tangerang": { coords: [-6.1783, 106.6319], name: "Tangerang", key: "tangerang" },
  "karawaci": { coords: [-6.2150, 106.6180], name: "Karawaci, Tangerang", key: "tangerang" },

  // DKI Jakarta
  "jakarta selatan": { coords: [-6.238311, 106.812402], name: "Kebayoran Baru, Jakarta Selatan", key: "jakarta-selatan" },
  "jaksel": { coords: [-6.238311, 106.812402], name: "Jakarta Selatan", key: "jakarta-selatan" },
  "senopati": { coords: [-6.238311, 106.812402], name: "Jl. Senopati, Jakarta Selatan", key: "jakarta-selatan" },
  "kebayoran": { coords: [-6.238311, 106.812402], name: "Kebayoran Baru, Jakarta Selatan", key: "jakarta-selatan" },
  "kemang": { coords: [-6.2600, 106.8160], name: "Kemang, Jakarta Selatan", key: "jakarta-selatan" },
  "cilandak": { coords: [-6.2925, 106.8010], name: "Cilandak, Jakarta Selatan", key: "jakarta-selatan" },
  "tebet": { coords: [-6.2260, 106.8580], name: "Tebet, Jakarta Selatan", key: "jakarta-selatan" },
  "pasar minggu": { coords: [-6.2840, 106.8440], name: "Pasar Minggu, Jakarta Selatan", key: "jakarta-selatan" },
  "jakarta pusat": { coords: [-6.1805, 106.8284], name: "Jakarta Pusat", key: "jakarta-pusat" },
  "jakpus": { coords: [-6.1805, 106.8284], name: "Jakarta Pusat", key: "jakarta-pusat" },
  "menteng": { coords: [-6.1960, 106.8320], name: "Menteng, Jakarta Pusat", key: "jakarta-pusat" },
  "jakarta barat": { coords: [-6.1683, 106.7588], name: "Jakarta Barat", key: "jakarta-barat" },
  "jakbar": { coords: [-6.1683, 106.7588], name: "Jakarta Barat", key: "jakarta-barat" },
  "jakarta timur": { coords: [-6.2250, 106.9004], name: "Jakarta Timur", key: "jakarta-timur" },
  "jaktim": { coords: [-6.2250, 106.9004], name: "Jakarta Timur", key: "jakarta-timur" },
  "jakarta utara": { coords: [-6.1384, 106.8640], name: "Jakarta Utara", key: "jakarta-utara" },
  "jakut": { coords: [-6.1384, 106.8640], name: "Jakarta Utara", key: "jakarta-utara" },
  "dki jakarta": { coords: [-6.2088, 106.8456], name: "DKI Jakarta", key: "jakarta-selatan" },
  "jakarta": { coords: [-6.2088, 106.8456], name: "DKI Jakarta", key: "jakarta-selatan" },

  // Bodetabek & Jawa
  "depok": { coords: [-6.4025, 106.7942], name: "Kota Depok", key: "depok" },
  "bogor": { coords: [-6.5971, 106.8060], name: "Kota Bogor", key: "bogor" },
  "bekasi": { coords: [-6.2383, 106.9756], name: "Kota Bekasi", key: "bekasi" },
  "bandung": { coords: [-6.9175, 107.6191], name: "Kota Bandung", key: "bandung" },
  "surabaya": { coords: [-7.2575, 112.7521], name: "Kota Surabaya", key: "surabaya" },
  "semarang": { coords: [-6.9667, 110.4167], name: "Kota Semarang", key: "semarang" },
  "yogyakarta": { coords: [-7.7956, 110.3695], name: "DI Yogyakarta", key: "yogyakarta" }
};

function isCoordsInTangerangSelatan(lat, lon) {
  return lat >= -6.39 && lat <= -6.21 && lon >= 106.62 && lon <= 106.80;
}

function resolveOrderDestinationSync(info) {
  if (!info) return { coords: [-6.279634, 106.724024], label: "Tangerang Selatan", regionKey: "tangerang-selatan" };
  const fullText = [info.address, info.city, info.province, info.postal].filter(Boolean).join(" ").toLowerCase();

  // Tangsel subdistricts & keywords check
  const tangselKeywords = ["tangerang selatan", "tangsel", "bintaro", "bsd", "serpong", "ciputat", "pamulang", "pondok aren", "alam sutera", "setu"];
  for (const kw of tangselKeywords) {
    if (fullText.includes(kw)) {
      const match = REGION_COORDINATES[kw] || REGION_COORDINATES["tangerang selatan"];
      return {
        coords: match.coords,
        label: `${info.address ? info.address + ", " : ""}${info.city || match.name}`,
        regionKey: "tangerang-selatan"
      };
    }
  }

  // Other regional keywords
  for (const [kw, entry] of Object.entries(REGION_COORDINATES)) {
    if (kw !== "jakarta" && fullText.includes(kw)) {
      return {
        coords: entry.coords,
        label: `${info.address ? info.address + ", " : ""}${info.city || entry.name}`,
        regionKey: entry.key
      };
    }
  }

  if (fullText.includes("jakarta")) {
    const entry = REGION_COORDINATES["jakarta selatan"];
    return {
      coords: entry.coords,
      label: `${info.address ? info.address + ", " : ""}${info.city || entry.name}`,
      regionKey: "jakarta-selatan"
    };
  }

  // Safe fallback default: Recipient address in Tangerang Selatan
  return {
    coords: [-6.279634, 106.724024],
    label: `${info.address ? info.address + ", " : ""}${info.city || "Tujuan Pengiriman"}`,
    regionKey: "tangerang-selatan"
  };
}

async function resolveOrderDestination(o) {
  if (!o || !o.info) {
    return { coords: [-6.279634, 106.724024], label: "Tangerang Selatan", regionKey: "tangerang-selatan" };
  }

  // 1. If order already has verified coordinates stored, use them directly (zero repeat lookup)
  if (Array.isArray(o.destCoords) && o.destCoords.length === 2 && !isNaN(o.destCoords[0]) && !isNaN(o.destCoords[1])) {
    return {
      coords: o.destCoords,
      label: o.destLabel || `${o.info.address || ""}${o.info.address && o.info.city ? ", " : ""}${o.info.city || ""}`,
      regionKey: o.destKey || resolveOrderDestinationSync(o.info).regionKey
    };
  }

  const syncFallback = resolveOrderDestinationSync(o.info);

  // 2. Attempt Nominatim live geocoding (one-time lookup with safety timeout)
  try {
    if (typeof fetch !== "undefined") {
      const query = [o.info.address, o.info.city, "Indonesia"].filter(Boolean).join(", ");
      const controller = (typeof AbortController !== "undefined") ? new AbortController() : null;
      const timeout = controller ? setTimeout(() => controller.abort(), 2500) : null;
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=id&limit=1`;
      const resp = await fetch(url, {
        headers: { "Accept-Language": "id,en" },
        signal: controller ? controller.signal : undefined
      });
      if (timeout) clearTimeout(timeout);
      if (resp && resp.ok) {
        const list = await resp.json();
        if (Array.isArray(list) && list.length > 0) {
          const item = list[0];
          const lat = Number(parseFloat(item.lat).toFixed(6));
          const lon = Number(parseFloat(item.lon).toFixed(6));
          const isTangselOrder = (o.info.city || "").toLowerCase().includes("tangerang selatan") ||
                                 (o.info.city || "").toLowerCase().includes("tangsel") ||
                                 (o.info.address || "").toLowerCase().includes("bintaro");

          let isValid = true;
          if (isTangselOrder && !isCoordsInTangerangSelatan(lat, lon)) {
            isValid = false; // reject if geocoding drifted out of Tangsel
          }

          if (isValid && !isNaN(lat) && !isNaN(lon)) {
            const resolved = {
              coords: [lat, lon],
              label: `${o.info.address ? o.info.address + ", " : ""}${o.info.city || ""}`,
              regionKey: syncFallback.regionKey
            };
            o.destCoords = resolved.coords;
            o.destLabel = resolved.label;
            o.destKey = resolved.regionKey;
            updateOrder(o);
            return resolved;
          }
        }
      }
    }
  } catch (err) {
    console.info("Nominatim geocode fallback to verified regional coordinates:", err.message);
  }

  // 3. Fallback to verified regional coordinates for that specific city
  o.destCoords = syncFallback.coords;
  o.destLabel = syncFallback.label;
  o.destKey = syncFallback.regionKey;
  updateOrder(o);
  return syncFallback;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function calculateBearing(lat1, lon1, lat2, lon2) {
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;
  const phi1 = toRad(lat1);
  const phi2 = toRad(lat2);
  const deltaLambda = toRad(lon2 - lon1);
  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function prepareRouteData(rawRoute) {
  if (!rawRoute || !Array.isArray(rawRoute.coordinates) || rawRoute.coordinates.length < 2) return null;
  const coords = rawRoute.coordinates;
  const cumDistances = [0];
  for (let i = 1; i < coords.length; i++) {
    const d = haversineDistance(coords[i - 1][0], coords[i - 1][1], coords[i][0], coords[i][1]);
    cumDistances.push(cumDistances[i - 1] + d);
  }
  const totalDistance = cumDistances[cumDistances.length - 1];
  return {
    coordinates: coords,
    steps: Array.isArray(rawRoute.steps) ? rawRoute.steps : [],
    cumulativeDistances: cumDistances,
    totalDistance: totalDistance,
    distanceKm: (totalDistance / 1000).toFixed(1),
    durationSec: rawRoute.duration || Math.round(totalDistance / 11),
    source: rawRoute.source || "osrm-road-network",
    destCoords: rawRoute.destCoords || coords[coords.length - 1],
    destLabel: rawRoute.destLabel || ""
  };
}

async function loadOSRMRoute(origin, dest, destKey, destLabel) {
  try {
    if (typeof fetch !== "undefined") {
      const url = `https://router.project-osrm.org/route/v1/driving/${origin[1]},${origin[0]};${dest[1]},${dest[0]}?overview=full&geometries=geojson&steps=true`;
      const controller = (typeof AbortController !== "undefined") ? new AbortController() : null;
      const timeout = controller ? setTimeout(() => controller.abort(), 4000) : null;
      const resp = await fetch(url, controller ? { signal: controller.signal } : {});
      if (timeout) clearTimeout(timeout);
      if (resp && resp.ok) {
        const json = await resp.json();
        if (json.code === "Ok" && json.routes && json.routes[0]) {
          const r = json.routes[0];
          const coords = r.geometry.coordinates.map(c => [Number(c[1].toFixed(6)), Number(c[0].toFixed(6))]);
          const steps = (r.legs && r.legs[0] && Array.isArray(r.legs[0].steps)) ? r.legs[0].steps.map(s => ({
            name: s.name || "Jalan Lokal",
            distance: Math.round(s.distance),
            duration: Math.round(s.duration)
          })) : [];
          return prepareRouteData({
            coordinates: coords,
            steps: steps,
            distance: r.distance,
            duration: r.duration,
            source: "osrm-live-network",
            destCoords: dest,
            destLabel: destLabel
          });
        }
      }
    }
  } catch (err) {
    console.info("OSRM live fetch fallback to verified cached road coordinates:", err.message);
  }

  // Strictly use matching verified routes per destination region — never route Tangsel to Jakarta!
  const isTangsel = destKey === "tangerang-selatan" || (Array.isArray(dest) && isCoordsInTangerangSelatan(dest[0], dest[1]));
  if (typeof window !== "undefined") {
    if (isTangsel) {
      const tangselRoute = (window.NOMAD_VERIFIED_ROUTES && window.NOMAD_VERIFIED_ROUTES["tangerang-selatan"]) || window.NOMAD_TANGSEL_ROUTE;
      if (tangselRoute) {
        return prepareRouteData({ ...tangselRoute, source: "osrm-verified-cache-tangsel", destCoords: dest, destLabel: destLabel });
      }
    }
    if (destKey === "jakarta-selatan") {
      const jktRoute = (window.NOMAD_VERIFIED_ROUTES && window.NOMAD_VERIFIED_ROUTES["jakarta-selatan"]) || window.NOMAD_DEFAULT_ROUTE;
      if (jktRoute) {
        return prepareRouteData({ ...jktRoute, source: "osrm-verified-cache-jakarta", destCoords: dest, destLabel: destLabel });
      }
    }
  }

  return null;
}

function getRouteStateAtDistance(distanceMeters, routeData) {
  const coords = routeData.coordinates;
  const cum = routeData.cumulativeDistances;
  const total = routeData.totalDistance;
  const clampedD = Math.max(0, Math.min(total, distanceMeters));
  const progressRatio = total > 0 ? clampedD / total : 0;

  let i = 0;
  while (i < cum.length - 2 && cum[i + 1] < clampedD) {
    i++;
  }

  const segStart = cum[i];
  const segEnd = cum[i + 1] || total;
  const segLen = Math.max(0.001, segEnd - segStart);
  const t = Math.min(1, Math.max(0, (clampedD - segStart) / segLen));

  const p1 = coords[i];
  const p2 = coords[i + 1] || p1;
  const lat = p1[0] + t * (p2[0] - p1[0]);
  const lng = p1[1] + t * (p2[1] - p1[1]);
  const bearing = calculateBearing(p1[0], p1[1], p2[0], p2[1]);

  let streetName = "Jalan Lokal";
  if (progressRatio >= 1.0) {
    streetName = routeData.destLabel ? `Tiba di tujuan: ${routeData.destLabel}` : "Tiba di alamat tujuan";
  } else if (progressRatio <= 0.02) {
    streetName = "NOMAD Central Hub BSD";
  } else if (routeData.steps && routeData.steps.length) {
    let stepDist = 0;
    for (const step of routeData.steps) {
      stepDist += step.distance;
      if (clampedD <= stepDist) {
        streetName = step.name || "Jalan Lokal";
        break;
      }
    }
  } else {
    streetName = routeData.destLabel || "Jalan Lokal";
  }

  let stage = 0;
  if (progressRatio >= 1.0) stage = 4;
  else if (progressRatio >= 0.70) stage = 3;
  else if (progressRatio >= 0.35) stage = 2;
  else if (progressRatio >= 0.12) stage = 1;
  else stage = 0;

  return {
    lat,
    lng,
    bearing,
    coordIndex: i,
    progressRatio,
    traveledMeters: clampedD,
    totalMeters: total,
    streetName,
    stage
  };
}

let simState = {
  isPlaying: true,
  speedMultiplier: 1,
  currentMeters: 0,
  lastTimestamp: null,
  rafId: null,
  orderId: null,
  routeData: null,
  followCamera: false,
  hasArrived: false
};

let trackingMapInstance = null;
let packageMarker = null;
let routePolyline = null;
let traveledPolyline = null;
let activeTrackingOrderId = null;

function destroyTrackingMap() {
  if (simState.rafId && typeof cancelAnimationFrame !== "undefined") {
    cancelAnimationFrame(simState.rafId);
    simState.rafId = null;
  }
  simState.isPlaying = false;
  simState.orderId = null;
  simState.routeData = null;

  if (trackingMapInstance) {
    try {
      if (trackingMapInstance._resizeObs) {
        trackingMapInstance._resizeObs.disconnect();
      }
      trackingMapInstance.remove();
    } catch (err) {}
    trackingMapInstance = null;
    packageMarker = null;
    routePolyline = null;
    traveledPolyline = null;
    activeTrackingOrderId = null;
  }
}

function createCourierIcon(bearing = 0, isDelivered = false) {
  if (typeof L === "undefined") return null;
  if (isDelivered) {
    return L.divIcon({
      className: "custom-map-marker",
      html: '<div class="courier-delivered-pin">✓</div><span class="marker-label">Terkirim ✓</span>',
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });
  }
  return L.divIcon({
    className: "custom-map-marker",
    html: `
      <div class="courier-marker-container">
        <div class="courier-pulse-ring"></div>
        <div class="courier-vehicle-rotator" id="courierRotator" style="transform: rotate(${Math.round(bearing)}deg);">
          <div class="courier-heading-arrow"></div>
          <div class="courier-bike-pin"><span class="courier-bike-emoji">🛵</span></div>
        </div>
      </div>
      <span class="marker-label" id="courierMarkerLabel">Kurir NOMAD</span>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22]
  });
}

function renderMapFallbackHtml(currStage, o) {
  const destText = o && o.info ? `${o.info.address || ""}${o.info.address && o.info.city ? ", " : ""}${o.info.city || "Alamat Penerima"}` : "Alamat Tujuan";
  const progressPct = Math.min(100, Math.round((currStage / (STATUSES.length - 1)) * 100));
  return `
    <div class="map-fallback">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:gap:8px">
        <span class="small" style="font-weight:700;color:var(--ink)">Simulasi Rute Pengiriman Demo (Mode Diagram)</span>
        <span class="map-demo-badge"><span class="badge-dot"></span>Simulasi Rute Nyata · Bukan GPS Langsung</span>
      </div>
      <div class="map-fallback-steps">
        <div class="map-fallback-line"></div>
        <div class="map-fallback-progress" style="width:${progressPct}%"></div>
        ${STATUSES.map((st, idx) => {
          const isDone = idx < currStage;
          const isNow = idx === currStage;
          return `<div class="map-fallback-node ${isDone ? "done" : isNow ? "active" : ""}" title="${st}">${isDone ? "✓" : idx + 1}</div>`;
        }).join("")}
      </div>
      <div class="map-fallback-labels">
        ${STATUSES.map((st, idx) => {
          const isDone = idx < currStage;
          const isNow = idx === currStage;
          return `<div class="map-fallback-label ${isDone ? "done" : isNow ? "active" : ""}">${idx + 1}. ${st}</div>`;
        }).join("")}
      </div>
      <p class="small muted" style="margin:14px auto 0;max-width:48ch;font-size:11px">
        Fulfillment Hub BSD → ${esc(destText)}. Peta navigasi interaktif akan aktif saat koneksi tile peta tersedia.
      </p>
    </div>
  `;
}

async function mountTrackingMap(orderId) {
  const o = findOrder(orderId);
  if (!o) return;
  const container = document.getElementById("trackMapCanvas");
  if (!container) return;

  const curr = typeof o.status === "number" && !isNaN(o.status) ? Math.max(0, Math.min(STATUSES.length - 1, o.status)) : 0;

  if (typeof L === "undefined") {
    container.innerHTML = renderMapFallbackHtml(curr, o);
    return;
  }

  destroyTrackingMap();
  activeTrackingOrderId = o.id;

  const destInfo = await resolveOrderDestination(o);
  const routeData = await loadOSRMRoute(ORIGIN_COORDS, destInfo.coords, destInfo.regionKey, destInfo.label);
  if (!routeData) {
    container.innerHTML = `
      <div class="map-fallback">
        <p class="muted small" style="margin:0 0 10px">Rute jalan langsung untuk alamat ini dialihkan ke mode tahapan diagram terverifikasi.</p>
        ${renderMapFallbackHtml(curr, o)}
      </div>
    `;
    return;
  }

  simState.routeData = routeData;
  simState.orderId = o.id;

  const stageRatios = [0.03, 0.22, 0.52, 0.82, 1.0];
  const initialRatio = stageRatios[curr] || 0.03;
  simState.currentMeters = curr >= STATUSES.length - 1 ? routeData.totalDistance : initialRatio * routeData.totalDistance;
  simState.isPlaying = curr < STATUSES.length - 1;
  simState.hasArrived = curr >= STATUSES.length - 1;
  simState.lastTimestamp = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();

  try {
    trackingMapInstance = L.map("trackMapCanvas", {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors · Routing via OSRM'
    }).addTo(trackingMapInstance);

    routePolyline = L.polyline(routeData.coordinates, {
      color: "#B87952",
      weight: 4,
      opacity: 0.75
    }).addTo(trackingMapInstance);

    const initialCutState = getRouteStateAtDistance(simState.currentMeters, routeData);
    const initialTraveled = routeData.coordinates.slice(0, initialCutState.coordIndex + 1);
    initialTraveled.push([initialCutState.lat, initialCutState.lng]);
    traveledPolyline = L.polyline(initialTraveled, {
      color: "#18251F",
      weight: 5,
      opacity: 0.95
    }).addTo(trackingMapInstance);

    const originIcon = L.divIcon({
      className: "custom-map-marker",
      html: '<div class="marker-pin marker-origin" title="Fulfillment Hub BSD">🏢</div><span class="marker-label">BSD Hub</span>',
      iconSize: [36, 44],
      iconAnchor: [18, 22]
    });
    L.marker(ORIGIN_COORDS, { icon: originIcon })
      .bindPopup("<b>NOMAD Fulfillment Hub BSD</b><br/><span style='font-size:11px;color:var(--muted)'>Pusat fulfillment logistik & kemasan ramah lingkungan, Tangerang Selatan</span>")
      .addTo(trackingMapInstance);

    // Place destination marker at the EXACT end coordinate of the polyline
    const endCoord = routeData.coordinates[routeData.coordinates.length - 1];
    const destIcon = L.divIcon({
      className: "custom-map-marker",
      html: '<div class="marker-pin marker-dest" title="Alamat Tujuan">📍</div><span class="marker-label">Tujuan</span>',
      iconSize: [36, 44],
      iconAnchor: [18, 22]
    });
    L.marker(endCoord, { icon: destIcon })
      .bindPopup(`<b>Alamat Penerima</b><br/><span style='font-size:11px;color:var(--muted)'>${esc(destInfo.label || o.info.address || o.info.city)}</span>`)
      .addTo(trackingMapInstance);

    const courierIcon = createCourierIcon(initialCutState.bearing, simState.hasArrived);
    packageMarker = L.marker([initialCutState.lat, initialCutState.lng], {
      icon: courierIcon,
      zIndexOffset: 1000
    }).addTo(trackingMapInstance);

    trackingMapInstance.fitBounds(routePolyline.getBounds(), {
      padding: [35, 35]
    });

    setTimeout(() => {
      if (trackingMapInstance) trackingMapInstance.invalidateSize();
    }, 150);

    if (typeof ResizeObserver !== "undefined") {
      const resizeObs = new ResizeObserver(() => {
        if (trackingMapInstance) trackingMapInstance.invalidateSize();
      });
      resizeObs.observe(container);
      trackingMapInstance._resizeObs = resizeObs;
    }

    updateHudUi(initialCutState, o);

    if (typeof requestAnimationFrame !== "undefined") {
      const simFrame = (now) => {
        if (!trackingMapInstance || !simState.routeData) return;
        if (simState.isPlaying && !simState.hasArrived) {
          const dt = Math.min(0.1, (now - (simState.lastTimestamp || now)) / 1000);
          simState.lastTimestamp = now;
          const speedMps = (simState.routeData.totalDistance / 38) * simState.speedMultiplier;
          simState.currentMeters += speedMps * dt;

          if (simState.currentMeters >= simState.routeData.totalDistance) {
            simState.currentMeters = simState.routeData.totalDistance;
            simState.isPlaying = false;
            simState.hasArrived = true;
          }

          const curState = getRouteStateAtDistance(simState.currentMeters, simState.routeData);
          updateSimulationDisplay(curState);
        } else {
          simState.lastTimestamp = now;
        }

        simState.rafId = requestAnimationFrame(simFrame);
      };

      simState.rafId = requestAnimationFrame(simFrame);
    }

  } catch (err) {
    console.warn("Leaflet map initialization error:", err);
    container.innerHTML = renderMapFallbackHtml(curr, o);
  }
}

function updateSimulationDisplay(state) {
  if (!packageMarker || !trackingMapInstance) return;

  packageMarker.setLatLng([state.lat, state.lng]);

  const rotator = document.getElementById("courierRotator");
  if (rotator) {
    rotator.style.transform = `rotate(${Math.round(state.bearing)}deg)`;
  }

  if (traveledPolyline && simState.routeData) {
    const traveledSlice = simState.routeData.coordinates.slice(0, state.coordIndex + 1);
    traveledSlice.push([state.lat, state.lng]);
    traveledPolyline.setLatLngs(traveledSlice);
  }

  if (simState.followCamera) {
    trackingMapInstance.panTo([state.lat, state.lng], { animate: false });
  }

  const o = findOrder(simState.orderId);
  updateHudUi(state, o);

  if (o && o.status !== state.stage) {
    o.status = state.stage;
    if (!Array.isArray(o.events)) o.events = [];
    if (!o.events.some(ev => ev.stage === state.stage)) {
      o.events.push({
        stage: state.stage,
        title: STATUSES[state.stage],
        desc: STATUS_DESC[state.stage],
        timestamp: new Date().toISOString(),
        note: `Navigasi rute mencapai: ${state.streetName}`
      });
    }
    updateOrder(o);
    syncTimelineUi(state.stage);
  }

  if (state.progressRatio >= 1.0 && simState.hasArrived) {
    packageMarker.setIcon(createCourierIcon(state.bearing, true));
    const playBtn = document.getElementById("hudPlayPauseBtn");
    if (playBtn) {
      playBtn.className = "hud-btn primary";
      playBtn.innerHTML = "<span>↺</span> <span>Ulangi</span>";
    }
    syncCompletionCard(o);
  }
}

function updateHudUi(state, o) {
  const streetEl = document.getElementById("hudStreetName");
  if (streetEl) streetEl.textContent = `📍 Melintas di: ${state.streetName}`;

  const distEl = document.getElementById("hudDistance");
  if (distEl) distEl.textContent = `${(state.traveledMeters / 1000).toFixed(1)} / ${(state.totalMeters / 1000).toFixed(1)} km`;

  const pctEl = document.getElementById("hudProgressPct");
  if (pctEl) pctEl.textContent = `${Math.round(state.progressRatio * 100)}%`;

  const barEl = document.getElementById("hudProgressBar");
  if (barEl) barEl.style.width = `${(state.progressRatio * 100).toFixed(1)}%`;

  const etaEl = document.getElementById("hudEta");
  if (etaEl) {
    const remainingKm = Math.max(0, (state.totalMeters - state.traveledMeters) / 1000);
    const estMin = Math.max(1, Math.round(remainingKm / 40 * 60));
    etaEl.textContent = state.progressRatio >= 1.0 ? "Tiba di tujuan" : `~${estMin} mnt lagi`;
  }

  const badgeEl = document.getElementById("hudStatusBadge");
  if (badgeEl) {
    badgeEl.textContent = STATUSES[state.stage];
    badgeEl.className = `hud-status-badge ${state.stage >= 4 ? "delivered" : ""}`;
  }

  const stageHeader = document.getElementById("currStageLabel");
  if (stageHeader) {
    stageHeader.innerHTML = `Status saat ini: <b>${STATUSES[state.stage]}</b> (${state.stage + 1}/5)`;
  }
}

function syncTimelineUi(stage) {
  const timeline = document.getElementById("trackingTimeline");
  if (!timeline) return;
  const items = timeline.querySelectorAll(".tl-item");
  items.forEach((item, idx) => {
    const isDone = idx < stage;
    const isNow = idx === stage;
    item.className = `tl-item ${isDone ? "done" : ""} ${isNow ? "now" : ""}`;
    const dot = item.querySelector(".tl-dot");
    if (dot) dot.textContent = isDone ? "✓" : idx + 1;
    const badge = item.querySelector(".tl-badge");
    if (badge) {
      badge.className = `tl-badge ${isDone ? "badge-done" : isNow ? "badge-now" : "badge-pending"}`;
      badge.textContent = isDone ? "Selesai" : isNow ? "Status Terkini" : "Pending";
    }
  });

  const btnAdv = document.getElementById("btnAdvanceSim");
  if (btnAdv && stage < STATUSES.length - 1) {
    btnAdv.innerHTML = `LANJUTKAN SIMULASI PENGIRIMAN → (${STATUSES[stage + 1]})`;
  }

  const pills = document.querySelectorAll(".stage-pill");
  pills.forEach((p, idx) => {
    p.classList.toggle("active", idx === stage);
  });
}

function syncCompletionCard(o) {
  const panel = document.querySelector(".demo-advance-panel");
  if (panel) {
    panel.outerHTML = `
      <div class="completion-card">
        <div class="check-big" style="background:#E5F2E8;color:#256B3D;margin:0 auto 12px">✓</div>
        <h3 style="font-family:var(--font-ed);margin:0 0 6px;text-align:center">Paket Telah Tiba di Tujuan (Terkirim)</h3>
        <p class="muted small center" style="margin:0 auto 16px;max-width:48ch">
          Seluruh tahap pengiriman demo telah selesai. Barang telah diterima dengan aman di alamat pengiriman. Selamat menikmati perjalanan bersama NOMAD!
        </p>
        <div class="btn-row" style="justify-content:center;gap:10px;flex-wrap:wrap">
          <a href="#/shop" class="btn btn-dark btn-sm">KEMBALI BELANJA</a>
          <button type="button" class="btn btn-terra btn-sm" onclick="restartSimulation()">↺ ULANGI SIMULASI (REPLAY)</button>
          <a href="#/order/${encodeURIComponent(o ? o.id : "")}" class="btn btn-ghost btn-sm">LIHAT BUKTI PESANAN</a>
          <button type="button" class="btn btn-ghost btn-sm" onclick="window.print()">🖨 CETAK NOTA DIGITAL</button>
        </div>
      </div>
    `;
  }
}

window.toggleSimulationPlay = () => {
  if (simState.hasArrived) {
    window.restartSimulation();
    return;
  }
  simState.isPlaying = !simState.isPlaying;
  const icon = document.getElementById("hudPlayIcon");
  const text = document.getElementById("hudPlayText");
  const btn = document.getElementById("hudPlayPauseBtn");

  if (simState.isPlaying) {
    simState.lastTimestamp = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    if (icon) icon.textContent = "⏸";
    if (text) text.textContent = "Jeda";
    if (btn) btn.className = "hud-btn primary";
    toast("Simulasi perjalanan dilanjutkan", "ok");
  } else {
    if (icon) icon.textContent = "▶";
    if (text) text.textContent = "Lanjutkan";
    if (btn) btn.className = "hud-btn";
    toast("Simulasi perjalanan dijeda", "ok");
  }
};

window.restartSimulation = () => {
  if (simState.routeData && simState.routeData.totalDistance) {
    simState.currentMeters = 0;
    simState.isPlaying = true;
    simState.hasArrived = false;
    simState.lastTimestamp = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    if (packageMarker) {
      packageMarker.setIcon(createCourierIcon(0, false));
    }
    const icon = document.getElementById("hudPlayIcon");
    const text = document.getElementById("hudPlayText");
    const btn = document.getElementById("hudPlayPauseBtn");
    if (icon) icon.textContent = "⏸";
    if (text) text.textContent = "Jeda";
    if (btn) btn.className = "hud-btn primary";

    const curState = getRouteStateAtDistance(0, simState.routeData);
    updateSimulationDisplay(curState);
    toast("Simulasi rute pengiriman diulang dari awal!", "ok");
  } else {
    const { seg } = parseHash();
    if (seg && seg[1]) replaySimulation(decodeURIComponent(seg[1]));
  }
};

window.setSimulationSpeed = (spd) => {
  simState.speedMultiplier = Number(spd) || 1;
  document.querySelectorAll(".hud-speed-btn").forEach(b => {
    b.classList.toggle("active", b.textContent.trim() === `${spd}x`);
  });
  toast(`Kecepatan simulasi: ${spd}x`, "ok");
};

window.toggleCameraFollow = () => {
  simState.followCamera = !simState.followCamera;
  const btn = document.getElementById("hudFollowBtn");
  if (btn) {
    btn.classList.toggle("active", simState.followCamera);
    btn.innerHTML = simState.followCamera ? "🎯 Mengikuti Kurir" : "🎯 Ikuti Kurir";
  }
  if (simState.followCamera && packageMarker && trackingMapInstance) {
    trackingMapInstance.panTo(packageMarker.getLatLng(), { animate: true });
    toast("Kamera mengikuti posisi kurir", "ok");
  } else {
    toast("Kamera bebas (bisa digeser & dizoom)", "ok");
  }
};

window.toggleAutoPlay = window.toggleSimulationPlay;

window.replaySimulation = (rawId) => {
  const o = findOrder(decodeURIComponent(rawId));
  if (!o) return;
  o.status = 0;
  const now = new Date().toISOString();
  o.events = [
    {
      stage: 0,
      title: STATUSES[0],
      desc: STATUS_DESC[0],
      timestamp: now,
      note: "Simulasi pengiriman diulang dari awal (Replay Demo)"
    }
  ];
  updateOrder(o);
  destroyTrackingMap();
  toast("Simulasi pengiriman diulang dari awal!", "ok");
  render(false);
};

window.jumpToStage = (rawId, targetStage) => {
  const o = findOrder(decodeURIComponent(rawId));
  if (!o) return;
  const target = Math.max(0, Math.min(STATUSES.length - 1, targetStage));
  const stageRatios = [0.03, 0.22, 0.52, 0.82, 1.0];
  const targetRatio = stageRatios[target] || 0.03;

  const baseTime = o.created ? new Date(o.created).getTime() : Date.now();
  if (!Array.isArray(o.events)) o.events = [];
  for (let s = 0; s <= target; s++) {
    if (!o.events.some(ev => ev.stage === s)) {
      const evTime = new Date(baseTime + s * 3600000).toISOString();
      o.events.push({
        stage: s,
        title: STATUSES[s],
        desc: STATUS_DESC[s],
        timestamp: evTime,
        note: "Tahap simulasi terverifikasi"
      });
    }
  }
  o.events.sort((a, b) => a.stage - b.stage);
  o.status = target;
  updateOrder(o);

  if (simState.routeData && trackingMapInstance) {
    simState.currentMeters = targetRatio * simState.routeData.totalDistance;
    simState.isPlaying = target < STATUSES.length - 1;
    simState.hasArrived = target >= STATUSES.length - 1;
    simState.lastTimestamp = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    const curState = getRouteStateAtDistance(simState.currentMeters, simState.routeData);
    updateSimulationDisplay(curState);
    toast(`Lompat ke tahap: ${STATUSES[target]}`, "ok");
  } else {
    destroyTrackingMap();
    render(false);
    toast(`Lompat ke tahap: ${STATUSES[target]}`, "ok");
  }
};

function renderTracking(id){
  const o = findOrder(decodeURIComponent(id));
  if(!o){
    return `<div class="page center" style="max-width:580px">
      <div class="empty-icon" style="font-size:36px;margin-bottom:12px">🔍</div>
      <h1>Pesanan Tidak Ditemukan</h1>
      <p class="sub">Tidak ditemukan pesanan dengan ID atau Nomor Resi “${esc(decodeURIComponent(id))}” pada penyimpanan peramban ini.</p>
      <div class="btn-row" style="justify-content:center">
        <a href="#/tracking" class="btn btn-dark">CARI PESANAN LAIN</a>
        <a href="#/shop" class="btn btn-ghost">KEMBALI BELANJA</a>
      </div>
    </div>`;
  }

  const sh = SHIPPING.find(s => s.id === o.ship) || SHIPPING[0];
  const trk = o.trackingNumber || ("TRK-" + o.id.replace("#", ""));
  const curr = typeof o.status === "number" && !isNaN(o.status) ? Math.max(0, Math.min(STATUSES.length - 1, o.status)) : 0;
  const isDelivered = curr >= STATUSES.length - 1;
  const etaWindow = formatDateEstimate(o.ship, o.created);
  const pkgWeight = calcOrderWeight(o.items);
  const destCity = (o.info && o.info.city) || "";
  const destAddr = (o.info && o.info.address) || "";
  const destNameShort = o.destLabel || (destCity ? `${destCity}` : "Alamat Tujuan");
  const destFull = destAddr ? `${destAddr}${destCity ? ", " + destCity : ""}` : (o.destLabel || "Alamat Tujuan");

  return `<div class="page" style="max-width:760px">
    <div class="crumb"><a href="#/">Home</a> / <a href="#/tracking">Orders</a> / <b style="color:var(--ink)">${esc(o.id)}</b></div>
    <h1>Delivery Tracking</h1>
    <p class="sub" style="overflow-wrap:anywhere;word-break:break-word">
      Order: <b>${esc(o.id)}</b> · No. Resi: <b>${esc(trk)}</b> · Layanan: ${esc(sh.name)} (Simulasi Rute Nyata)
    </p>

    <!-- Interactive Real-Road Delivery Map Card -->
    <div class="card track-map-card">
      <div class="track-map-head">
        <div>
          <h3 style="margin:0 0 2px">Peta Navigasi Pengiriman (Rute Jalan Nyata)</h3>
          <span class="small muted">Rute navigasi OSRM: Central Hub BSD → ${esc(destNameShort)}</span>
        </div>
        <span class="map-demo-badge">
          <span class="badge-dot"></span>
          Simulasi Rute Nyata · Bukan GPS Langsung
        </span>
      </div>

      <!-- Real-Road Live Journey HUD Card -->
      <div class="live-track-hud" id="liveTrackHud">
        <div class="hud-top">
          <div class="hud-street-info">
            <span class="hud-live-dot"></span>
            <span class="hud-street-name" id="hudStreetName">📍 Memulai dari: Fulfillment Hub BSD</span>
          </div>
          <span class="hud-status-badge ${isDelivered ? "delivered" : ""}" id="hudStatusBadge">${STATUSES[curr]}</span>
        </div>

        <div class="hud-progress-wrap">
          <div class="hud-progress-bar" id="hudProgressBar" style="width: 0%"></div>
        </div>

        <div class="hud-bottom">
          <div class="hud-metrics">
            <span class="hud-metrics-item">Jarak: <b id="hudDistance">0.0 / 26.7 km</b></span>
            <span class="hud-metrics-item">Progres: <b id="hudProgressPct">0%</b></span>
            <span class="hud-metrics-item">Estimasi Tiba: <b id="hudEta">~35 mnt lagi</b></span>
          </div>
          <div class="hud-controls">
            <button type="button" class="hud-btn primary" id="hudPlayPauseBtn" onclick="toggleSimulationPlay()">
              <span id="hudPlayIcon">⏸</span> <span id="hudPlayText">Jeda</span>
            </button>
            <button type="button" class="hud-btn" onclick="restartSimulation()" title="Ulangi simulasi dari titik awal">
              ↺ Ulangi
            </button>
            <div class="hud-speed-group">
              <button type="button" class="hud-speed-btn active" id="spdBtn1" onclick="setSimulationSpeed(1)">1x</button>
              <button type="button" class="hud-speed-btn" id="spdBtn2" onclick="setSimulationSpeed(2)">2x</button>
              <button type="button" class="hud-speed-btn" id="spdBtn4" onclick="setSimulationSpeed(4)">4x</button>
            </div>
            <button type="button" class="hud-btn" id="hudFollowBtn" onclick="toggleCameraFollow()" title="Pusatkan kamera pada kurir">
              🎯 Ikuti Kurir
            </button>
          </div>
        </div>
      </div>

      <div class="track-map-wrap">
        <div id="trackMapCanvas"></div>
      </div>

      <div class="map-legend">
        <div class="map-legend-item">
          <span class="legend-dot origin"></span>
          <span>Asal: NOMAD Fulfillment Hub BSD</span>
        </div>
        <div class="map-legend-item">
          <span class="legend-dot pkg"></span>
          <span>Kurir: <b id="mapLegendStage">Navigasi Rute Jalan Nyata (OSRM)</b></span>
        </div>
        <div class="map-legend-item">
          <span class="legend-dot dest"></span>
          <span>Tujuan: ${esc(destFull)}</span>
        </div>
      </div>
      <p class="small muted" style="margin:10px 0 0;font-size:11px;line-height:1.4">
        * Rute navigasi dihitung mengikuti jaringan jalan nyata (OpenStreetMap & Project OSRM). Posisi kurir motor, rotasi sudut jalan, dan estimasi waktu merupakan simulasi demonstrasi interaktif, bukan live GPS fisik kurir di lapangan.
      </p>
    </div>

    <!-- ETA Banner Card -->
    <div class="track-banner">
      <div class="track-banner-left">
        <span class="track-label">Estimasi Pengiriman Simulasi</span>
        <div class="track-eta-date">${esc(etaWindow)}</div>
        <span class="small muted">Layanan: <b>${esc(sh.name)}</b> · Asal: Fulfillment Hub BSD</span>
      </div>
      <div class="track-banner-right">
        <button type="button" class="btn btn-ghost btn-xs" onclick="copyTrackingLink('${esc(o.id)}')">🔗 Salin Link Pelacakan</button>
        <button type="button" class="btn btn-ghost btn-xs" onclick="window.print()">🖨 Cetak Nota Digital</button>
      </div>
    </div>

    <!-- Timeline Card (5 Stages) -->
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:12px">
        <h3 style="margin:0">Tahapan Pengiriman Simulasi</h3>
        <span class="small muted" id="currStageLabel">Status saat ini: <b>${STATUSES[curr]}</b> (${curr + 1}/5)</span>
      </div>

      <div class="timeline" id="trackingTimeline">
        ${STATUSES.map((s, i) => {
          const isDone = i < curr;
          const isNow = i === curr;
          const ev = (o.events || []).find(e => e.stage === i);
          const timeStr = ev ? formatEventTime(ev.timestamp) : "";
          return `
            <div class="tl-item ${isDone ? "done" : ""} ${isNow ? "now" : ""}" data-stage="${i}">
              <span class="tl-dot">${isDone ? "✓" : i + 1}</span>
              <div class="tl-content">
                <div class="tl-header">
                  <b>${i + 1}. ${s}</b>
                  ${timeStr ? `<span class="tl-time">${esc(timeStr)}</span>` : ""}
                </div>
                <p class="tl-desc">${isDone ? (ev && ev.desc ? esc(ev.desc) : STATUS_DESC[i]) : isNow ? STATUS_DESC[i] : "Menunggu tahap sebelumnya selesai."}</p>
                <span class="tl-badge ${isDone ? "badge-done" : isNow ? "badge-now" : "badge-pending"}">
                  ${isDone ? "Selesai" : isNow ? "Status Terkini" : "Pending"}
                </span>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Progression Controls / Completion State -->
      ${!isDelivered ? `
        <div class="demo-advance-panel">
          <button type="button" class="btn btn-dark btn-block" id="btnAdvanceSim" onclick="advance('${encodeURIComponent(o.id)}')">
            LANJUTKAN SIMULASI PENGIRIMAN → (${STATUSES[curr + 1]})
          </button>
          <p class="small muted center" style="margin-top:8px">
            Status pengiriman demo — memajukan tahap simulasi secara berurutan dan menggerakkan paket di peta.
          </p>

          <!-- Stage Jumper Pills -->
          <div class="stage-jumper-wrap">
            <span class="small muted" style="display:block;margin-bottom:6px">Lompat Cepat ke Tahap Tertentu (Demo):</span>
            <div class="stage-pills" id="stageJumperPills">
              ${STATUSES.map((st, idx) => `
                <button type="button" class="stage-pill ${idx === curr ? "active" : ""}" onclick="jumpToStage('${encodeURIComponent(o.id)}', ${idx})">
                  ${idx + 1}. ${st}
                </button>
              `).join("")}
            </div>
            <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">
              <button type="button" class="btn btn-ghost btn-xs" onclick="toggleSimulationPlay()">
                ⏸ / ▶ Jeda / Lanjutkan Perjalanan
              </button>
              <button type="button" class="btn btn-ghost btn-xs" onclick="restartSimulation()">
                ↺ Ulangi Rute (Restart)
              </button>
            </div>
          </div>
        </div>
      ` : `
        <div class="completion-card">
          <div class="check-big" style="background:#E5F2E8;color:#256B3D;margin:0 auto 12px">✓</div>
          <h3 style="font-family:var(--font-ed);margin:0 0 6px;text-align:center">Paket Telah Tiba di Tujuan (Terkirim)</h3>
          <p class="muted small center" style="margin:0 auto 16px;max-width:48ch">
            Seluruh tahap pengiriman demo telah selesai. Barang telah diterima dengan aman di alamat pengiriman. Selamat menikmati perjalanan bersama NOMAD!
          </p>
          <div class="btn-row" style="justify-content:center;gap:10px;flex-wrap:wrap">
            <a href="#/shop" class="btn btn-dark btn-sm">KEMBALI BELANJA</a>
            <button type="button" class="btn btn-terra btn-sm" onclick="restartSimulation()">↺ ULANGI SIMULASI (REPLAY)</button>
            <a href="#/order/${encodeURIComponent(o.id)}" class="btn btn-ghost btn-sm">LIHAT BUKTI PESANAN</a>
            <button type="button" class="btn btn-ghost btn-sm" onclick="window.print()">🖨 CETAK NOTA DIGITAL</button>
          </div>
        </div>
      `}
    </div>

    <!-- Logistics Manifest Detail Card -->
    <div class="card" style="margin-top:14px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <h3 style="margin:0">Manifest Logistik & Kemasan (Simulasi)</h3>
        <span class="badge sale" style="background:#E5F2E8;color:#256B3D">Garansi 2 Tahun Aktif</span>
      </div>
      <div class="manifest-grid">
        <div class="manifest-item">
          <b>Fulfillment Hub Asal</b>
          NOMAD Central Hub BSD, Tangerang Selatan
        </div>
        <div class="manifest-item">
          <b>Destinasi Pengiriman</b>
          ${esc(o.info.city)}, ${esc(o.info.province)} ${esc(o.info.postal)}
        </div>
        <div class="manifest-item">
          <b>Spesifikasi Kemasan</b>
          NOMAD FSC Recycled Kraft Box & Eco-Mailer (PFC-Free DWR)
        </div>
        <div class="manifest-item">
          <b>Berat Paket & QC</b>
          ~${pkgWeight} kg · QC Seal Verified
        </div>
      </div>
    </div>

    <!-- Order Contents Summary -->
    <div class="card" style="margin-top:14px">
      <h3>Ringkasan Pesanan</h3>
      ${o.items.map(i => {
        const p = byId(i.pid);
        return `<div class="kv"><span>${p ? p.name : i.pid} <span class="muted">× ${i.qty} · ${esc(i.color || "")}${i.size ? " · " + esc(i.size) : ""}</span></span><b>${p ? rp(p.price * i.qty) : ""}</b></div>`;
      }).join("")}
      <div class="kv"><span>Subtotal</span><span>${rp(o.sub)}</span></div>
      ${o.disc ? `<div class="kv kit-save"><span>Diskon</span><span>− ${rp(o.disc)}</span></div>` : ""}
      ${o.bundle ? `<div class="kv kit-save"><span>Diskon Bundle (5%)</span><span>− ${rp(o.bundle)}</span></div>` : ""}
      <div class="kv"><span>Ongkos Kirim (${esc(sh.name)})</span><span>${o.shipCost === 0 ? "FREE" : rp(o.shipCost)}</span></div>
      <div class="kv total"><span>Total Pembayaran</span><span>${rp(o.total)}</span></div>
      <div class="kv" style="margin-top:10px;border-top:1px dashed var(--line);padding-top:10px">
        <span>Tujuan Pengiriman</span>
        <span style="text-align:right;max-width:60%">${esc(o.info.address)}, ${esc(o.info.city)} ${esc(o.info.postal)}<br/><span class="muted">Penerima: ${esc(o.info.name)} (${esc(o.info.phone)})</span></span>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="btn-row" style="margin-top:18px">
      <a href="#/shop" class="btn btn-ghost" style="flex:1">KEMBALI BELANJA</a>
      <a href="#/order/${encodeURIComponent(o.id)}" class="btn btn-dark" style="flex:1">LIHAT BUKTI PESANAN</a>
      <button type="button" class="btn btn-ghost" style="flex:1" onclick="window.print()">🖨 CETAK NOTA</button>
      <a href="#/tracking" class="btn btn-ghost" style="flex:1">SEMUA PESANAN</a>
    </div>
  </div>`;
}

window.advance = (eid) => {
  const o = findOrder(decodeURIComponent(eid));
  if(!o){
    toast("Pesanan tidak ditemukan", "err");
    return;
  }
  const curr = typeof o.status === "number" && !isNaN(o.status) ? o.status : 0;
  if(curr >= STATUSES.length - 1){
    toast("Pesanan sudah berada di status akhir (Terkirim)", "ok");
    return;
  }
  const nextStage = curr + 1;
  const stageRatios = [0.03, 0.22, 0.52, 0.82, 1.0];
  const targetRatio = stageRatios[nextStage] || 0.03;

  if(!Array.isArray(o.events)) o.events = [];
  if(!o.events.some(ev => ev.stage === nextStage)){
    o.events.push({
      stage: nextStage,
      title: STATUSES[nextStage],
      desc: STATUS_DESC[nextStage],
      timestamp: new Date().toISOString(),
      note: "Status pengiriman demo diperbarui"
    });
  }
  o.status = nextStage;
  updateOrder(o);

  if (simState.routeData && trackingMapInstance) {
    simState.currentMeters = targetRatio * simState.routeData.totalDistance;
    simState.isPlaying = nextStage < STATUSES.length - 1;
    simState.hasArrived = nextStage >= STATUSES.length - 1;
    simState.lastTimestamp = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    const curState = getRouteStateAtDistance(simState.currentMeters, simState.routeData);
    updateSimulationDisplay(curState);
  } else {
    render(false);
  }
  toast(`Status: ${STATUSES[nextStage]}`, "ok");
};

window.autoFillCheckout=()=>{
  co.info={
    name:"Nadya Prameswari",
    phone:"081298765432",
    address:"Jl. Senopati No. 42, Kebayoran Baru",
    city:"Jakarta Selatan",
    province:"DKI Jakarta",
    postal:"12190",
    notes:"Tolong titipkan di pos sekuriti jika sedang tidak di tempat."
  };
  store.set("nomad_info",co.info);
  toast("Data pengiriman demo Jakarta Selatan terisi otomatis","ok");
  if(co.step===1) render(false);
};

window.autoFillTangsel=()=>{
  co.info={
    name:"Rifqi Pratama",
    phone:"081312345678",
    address:"Jl. Boulevard Bintaro Jaya Sektor 7, Pondok Aren",
    city:"Tangerang Selatan",
    province:"Banten",
    postal:"15224",
    notes:"Titipkan di resepsionis lobi kantor."
  };
  store.set("nomad_info",co.info);
  toast("Data pengiriman demo Tangerang Selatan terisi otomatis","ok");
  if(co.step===1) render(false);
};

window.seedWeekendKit=()=>{
  const kitItems=[
    { pid:"daypack-24", color:"Black", size:null, qty:1 },
    { pid:"insulated-bottle", color:"Black", size:null, qty:1 },
    { pid:"travel-organizer", color:"Black", size:null, qty:1 },
    { pid:"travel-cap", color:"Black", size:null, qty:1 }
  ];
  setCart(kitItems);
  toast("Weekend Kit dimasukkan ke bag — diskon bundle 5% otomatis aktif!","ok");
  render(false);
  openCart();
};

window.seedDemoOrder=()=>{
  const now=new Date().toISOString();
  const id="#NMD-"+Math.floor(100000+Math.random()*900000);
  const trackingNumber="TRK-NMD-"+Math.floor(100000+Math.random()*900000);
  const items=[
    { pid:"daypack-24", color:"Black", size:null, qty:1 },
    { pid:"insulated-bottle", color:"Black", size:null, qty:1 }
  ];
  const sub=649000+249000;
  const shipCost=0; // Free Regular shipping for >500k
  const info={
    name:"Nadya Prameswari",
    phone:"081298765432",
    address:"Jl. Senopati No. 42, Kebayoran Baru",
    city:"Jakarta Selatan",
    province:"DKI Jakarta",
    postal:"12190",
    notes:"Demo order cepat Jakarta Selatan"
  };
  const destResolve = resolveOrderDestinationSync(info);
  const order={
    id,
    trackingNumber,
    items,
    info,
    destCoords: destResolve.coords,
    destLabel: destResolve.label,
    destKey: destResolve.regionKey,
    ship:"regular",
    pay:"qris",
    sub,
    disc:0,
    bundle:0,
    shipCost,
    total:sub+shipCost,
    coupon:null,
    status:0,
    created:now,
    eta:"3–5 hari kerja (Reguler · Kurir simulasi)",
    events:[
      {
        stage:0,
        title:STATUSES[0],
        desc:STATUS_DESC[0],
        timestamp:now,
        note:"Pesanan cepat demo berhasil dibuat"
      }
    ]
  };
  saveOrder(order);
  toast("Order demo Jakarta Selatan berhasil dibuat!","ok");
  go("#/tracking/"+encodeURIComponent(id));
};

window.seedDemoOrderTangsel=()=>{
  const now=new Date().toISOString();
  const id="#NMD-"+Math.floor(100000+Math.random()*900000);
  const trackingNumber="TRK-NMD-"+Math.floor(100000+Math.random()*900000);
  const items=[
    { pid:"daypack-24", color:"Slate", size:null, qty:1 },
    { pid:"trail-sling", color:"Clay", size:null, qty:1 }
  ];
  const sub=649000+349000;
  const shipCost=0;
  const info={
    name:"Rifqi Pratama",
    phone:"081312345678",
    address:"Jl. Boulevard Bintaro Jaya Sektor 7, Pondok Aren",
    city:"Tangerang Selatan",
    province:"Banten",
    postal:"15224",
    notes:"Demo order tujuan Tangerang Selatan"
  };
  const destResolve = resolveOrderDestinationSync(info);
  const order={
    id,
    trackingNumber,
    items,
    info,
    destCoords: destResolve.coords,
    destLabel: destResolve.label,
    destKey: destResolve.regionKey,
    ship:"express",
    pay:"qris",
    sub,
    disc:0,
    bundle:0,
    shipCost,
    total:sub+shipCost,
    coupon:null,
    status:0,
    created:now,
    eta:"1–2 hari kerja (Express · Kurir simulasi)",
    events:[
      {
        stage:0,
        title:STATUSES[0],
        desc:STATUS_DESC[0],
        timestamp:now,
        note:"Pesanan cepat demo Tangerang Selatan berhasil dibuat"
      }
    ]
  };
  saveOrder(order);
  toast("Order demo Tangerang Selatan berhasil dibuat!","ok");
  go("#/tracking/"+encodeURIComponent(id));
};

window.advanceActiveOrder=()=>{
  const { seg }=parseHash();
  let orderId="";
  if(seg[0]==="tracking"&&seg[1]){
    orderId=decodeURIComponent(seg[1]);
  } else {
    const orders=getOrders();
    if(!orders.length){
      toast("Belum ada pesanan aktif. Klik 'Buat Order Demo' terlebih dahulu.","err");
      return;
    }
    orderId=orders[0].id;
    go("#/tracking/"+encodeURIComponent(orderId));
  }
  advance(orderId);
};

window.resetDemoData=()=>{
  if(confirm("Reset seluruh keranjang, wishlist, dan riwayat pesanan demo ke kondisi awal?")){
    localStorage.removeItem("nomad_cart");
    localStorage.removeItem("nomad_wish");
    localStorage.removeItem("nomad_orders");
    localStorage.removeItem("nomad_coupon");
    localStorage.removeItem("nomad_recent");
    updateBadges();
    toast("Semua data demo telah direset.","ok");
    go("#/");
  }
};

// Account Modal
function openAccountModal(){
  const modal=document.getElementById("accountModal");
  if(!modal) return;
  renderAccountContent();
  modal.classList.remove("hidden");
  document.body.style.overflow="hidden";
}
window.openAccountModal=openAccountModal;

function closeAccountModal(){
  const modal=document.getElementById("accountModal");
  if(modal) modal.classList.add("hidden");
  document.body.style.overflow="";
}
window.closeAccountModal=closeAccountModal;

function renderAccountContent(){
  const card=document.getElementById("accountCard");
  if(!card) return;
  const orders=getOrders();
  const info=store.get("nomad_info",{
    name:"Nadya Prameswari",
    phone:"081298765432",
    address:"Jl. Senopati No. 42, Kebayoran Baru",
    city:"Jakarta Selatan",
    postal:"12190"
  });
  card.innerHTML=`
    <div class="account-header">
      <div class="account-avatar">NP</div>
      <div style="flex:1">
        <h3 style="margin:0 0 2px;font-family:var(--font-ed);font-size:20px">${esc(info.name||"Nadya Prameswari")}</h3>
        <p class="small muted" style="margin:0">${esc(info.phone||"0812-9876-5432")} · Akun Demo Pembeli</p>
      </div>
      <button class="icon-btn" onclick="closeAccountModal()" aria-label="Close">✕</button>
    </div>
    <div class="account-section">
      <h4>Alamat Pengiriman Demo</h4>
      <p class="small" style="margin:4px 0">${esc(info.address||"Jl. Senopati No. 42")}, ${esc(info.city||"Jakarta Selatan")} ${esc(info.postal||"12190")}</p>
    </div>
    <div class="account-section">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <h4 style="margin:0">Riwayat Pesanan (${orders.length})</h4>
        ${orders.length?`<a href="#/tracking" onclick="closeAccountModal()" class="small link-arrow">Lihat Semua →</a>`:""}
      </div>
      ${!orders.length?`<p class="small muted">Belum ada pesanan dalam sesi browser ini.</p>`:`
        <div class="account-order-list">
          ${orders.slice(0,4).map(o=>`
            <div class="account-order-row">
              <div>
                <b>${esc(o.id)}</b>
                <div class="small muted">${o.items.length} item · ${rp(o.total)}</div>
                <div class="small" style="color:var(--terra);font-weight:600">${STATUSES[o.status||0]}</div>
              </div>
              <a href="#/tracking/${encodeURIComponent(o.id)}" onclick="closeAccountModal()" class="btn btn-ghost btn-sm" style="padding:4px 10px;font-size:12px">Lacak →</a>
            </div>
          `).join("")}
        </div>
      `}
    </div>
    <div class="btn-row" style="margin-top:16px">
      <button class="btn btn-ghost btn-block btn-sm" onclick="seedDemoOrder();closeAccountModal()">⚡ Buat Order Demo Baru</button>
    </div>
  `;
}

// FAQ Modal
function openFaqModal(){
  const modal=document.getElementById("faqModal");
  if(!modal) return;
  modal.classList.remove("hidden");
  document.body.style.overflow="hidden";
}
window.openFaqModal=openFaqModal;

function closeFaqModal(){
  const modal=document.getElementById("faqModal");
  if(modal) modal.classList.add("hidden");
  document.body.style.overflow="";
}
window.closeFaqModal=closeFaqModal;

// Theme Toggle
function initTheme(){
  const saved=store.get("nomad_theme","light");
  applyTheme(saved);
}
function applyTheme(theme){
  const isDark=theme==="dark";
  document.documentElement.setAttribute("data-theme",isDark?"dark":"light");
  store.set("nomad_theme",isDark?"dark":"light");
  const lightIcons=document.querySelectorAll(".theme-icon-light");
  const darkIcons=document.querySelectorAll(".theme-icon-dark");
  lightIcons.forEach(el=>el.classList.toggle("hidden",isDark));
  darkIcons.forEach(el=>el.classList.toggle("hidden",!isDark));
}
function toggleTheme(){
  const current=document.documentElement.getAttribute("data-theme")||"light";
  const next=current==="dark"?"light":"dark";
  applyTheme(next);
  toast(`Mode ${next==="dark"?"Dark (Forest)":"Light (Warm White)"} aktif`,"ok");
}
window.toggleTheme=toggleTheme;

/* ---------- master render ---------- */
function render(scroll=true){
  const { seg, q }=parseHash();
  const app=document.getElementById("app");
  if(scroll) window.scrollTo(0,0);
  closeCart();
  closePayModal();
  if(seg[0]!=="tracking"){
    destroyTrackingMap();
  }
  let html="";
  if(seg.length===0){
    document.title="NOMAD — Carry Less. Go Further.";
    html=renderHome(); app.innerHTML=html; mountKit();
  } else if(seg[0]==="shop"){
    document.title="Shop All — NOMAD";
    app.innerHTML=renderShop(q); bindShop();
  } else if(seg[0]==="product"){
    const p=byId(seg[1]);
    document.title=p?`${p.name} — NOMAD`:"Product Not Found — NOMAD";
    app.innerHTML=renderProduct(seg[1]); bindProduct(seg[1]);
  } else if(seg[0]==="cart"){
    document.title="Your Bag — NOMAD";
    app.innerHTML=renderCart();
  } else if(seg[0]==="wishlist"){
    document.title="Wishlist — NOMAD";
    app.innerHTML=renderWishlist();
  } else if(seg[0]==="checkout"){
    document.title="Checkout — NOMAD";
    app.innerHTML=renderCheckout(); bindCheckout();
  } else if(seg[0]==="order"){
    document.title="Order Receipt — NOMAD";
    app.innerHTML=renderOrder(seg[1]||"");
  } else if(seg[0]==="tracking"){
    document.title="Track Order — NOMAD";
    if(seg[1]){
      destroyTrackingMap();
      app.innerHTML=renderTracking(seg[1]);
      mountTrackingMap(decodeURIComponent(seg[1]));
    } else {
      destroyTrackingMap();
      app.innerHTML=renderTrackingList();
    }
  } else {
    document.title="NOMAD — Carry Less. Go Further.";
    html=renderHome(); app.innerHTML=html; mountKit();
  }
  updateBadges();
}

/* ---------- global nav ---------- */
const ham=document.getElementById("hamburger");
document.getElementById("cartBtn").onclick=openCart;
document.getElementById("closeDrawer").onclick=closeCart;
document.getElementById("overlay").onclick=closeCart;
ham.onclick=()=>{
  const isHidden=document.getElementById("mobileMenu").classList.toggle("hidden");
  ham.setAttribute("aria-expanded",!isHidden);
};
document.querySelectorAll("#mobileMenu a").forEach(a=>a.onclick=()=>{
  document.getElementById("mobileMenu").classList.add("hidden");
  ham.setAttribute("aria-expanded","false");
});

// Theme and Account controls
const themeBtn=document.getElementById("themeBtn");
if(themeBtn) themeBtn.onclick=toggleTheme;
const accountBtn=document.getElementById("accountBtn");
if(accountBtn) accountBtn.onclick=openAccountModal;
const mobAccountLink=document.getElementById("mobAccountLink");
if(mobAccountLink) mobAccountLink.onclick=(e)=>{ e.preventDefault(); openAccountModal(); };
const mobFaqLink=document.getElementById("mobFaqLink");
if(mobFaqLink) mobFaqLink.onclick=(e)=>{ e.preventDefault(); openFaqModal(); };

const sInput=document.getElementById("searchInput"), sClear=document.getElementById("searchClear");
if(sInput && sClear){
  sInput.addEventListener("input", ()=>{ sClear.classList.toggle("hidden", !sInput.value); });
  sClear.addEventListener("click", ()=>{ sInput.value=""; sClear.classList.add("hidden"); sInput.focus(); });
}
document.getElementById("searchBtn").onclick=()=>{
  const b=document.getElementById("searchBar");
  b.classList.toggle("hidden");
  if(!b.classList.contains("hidden")) document.getElementById("searchInput").focus();
};
document.getElementById("searchGo").onclick=()=>{
  const v=document.getElementById("searchInput").value;
  go("#/shop?q="+encodeURIComponent(v));
  document.getElementById("searchBar").classList.add("hidden");
};
document.getElementById("searchInput").addEventListener("keydown",(e)=>{if(e.key==="Enter")document.getElementById("searchGo").click();});
document.getElementById("announceCoupon").onclick=()=>{
  store.set("nomad_coupon","NOMAD10");
  toast("NOMAD10 saved — 10% off at checkout","ok");
  render(false);
  renderDrawer();
};
document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape"){
    closeCart();
    closePayModal();
    closeAccountModal();
    closeFaqModal();
    document.getElementById("searchBar").classList.add("hidden");
    document.getElementById("mobileMenu").classList.add("hidden");
    ham.setAttribute("aria-expanded","false");
  }
});
document.querySelectorAll("[data-scroll]").forEach(a=>a.addEventListener("click",()=>{
  const t=a.dataset.scroll;
  document.getElementById("mobileMenu").classList.add("hidden");
  ham.setAttribute("aria-expanded","false");
  if(location.hash&&location.hash!=="#/"&&location.hash!=="#"){
    location.hash="#/";
    setTimeout(()=>{const el=document.getElementById(t);if(el)el.scrollIntoView({behavior:"smooth"});},150);
  } else {
    const el=document.getElementById(t);if(el)el.scrollIntoView({behavior:"smooth"});
  }
}));

initTheme();
updateBadges(); renderDrawer();
if(getCoupon()==="KIT5") store.set("nomad_coupon",null); // retired: bundle perk is automatic now
render();
