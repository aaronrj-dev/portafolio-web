/**
 * Carrito de la tienda — sin dependencias, persistido en localStorage.
 * Se expone en `window.RVCart` para que la página de checkout lo reutilice.
 *
 * El catálogo mínimo (slug → {name, price, image, size}) se inyecta en el DOM
 * como <script type="application/json" id="rv-products"> desde el layout.
 */

export interface CartLine {
  slug: string;
  qty: number;
}
interface ProductLite {
  name: string;
  price: number;
  image: string;
  size: string;
}

const KEY = "rv_cart";
const CURRENCY = "€";

const fmt = (n: number) => `${n.toFixed(2).replace(".", ",")} ${CURRENCY}`;

function catalog(): Record<string, ProductLite> {
  const el = document.getElementById("rv-products");
  if (!el?.textContent) return {};
  try {
    return JSON.parse(el.textContent);
  } catch {
    return {};
  }
}

function load(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((l) => l && l.slug && l.qty > 0) : [];
  } catch {
    return [];
  }
}

let lines: CartLine[] = load();
const products = () => catalog();

function save() {
  localStorage.setItem(KEY, JSON.stringify(lines));
  render();
}

function count() {
  return lines.reduce((n, l) => n + l.qty, 0);
}
function subtotal() {
  const cat = products();
  return lines.reduce((sum, l) => sum + (cat[l.slug]?.price ?? 0) * l.qty, 0);
}

function add(slug: string, qty = 1) {
  const line = lines.find((l) => l.slug === slug);
  if (line) line.qty += qty;
  else lines.push({ slug, qty });
  save();
  open();
}
function setQty(slug: string, qty: number) {
  const line = lines.find((l) => l.slug === slug);
  if (!line) return;
  line.qty = qty;
  if (line.qty <= 0) lines = lines.filter((l) => l.slug !== slug);
  save();
}
function remove(slug: string) {
  lines = lines.filter((l) => l.slug !== slug);
  save();
}
function clear() {
  lines = [];
  save();
}

/* ---------------------------------------------------------------- Drawer UI */

const drawer = () => document.querySelector<HTMLElement>("[data-cart-drawer]");
const panel = () => document.querySelector<HTMLElement>("[data-cart-panel]");

function open() {
  const d = drawer();
  if (!d) return;
  d.classList.remove("pointer-events-none");
  d.setAttribute("data-open", "");
  document.body.classList.add("cart-open");
}
function close() {
  const d = drawer();
  if (!d) return;
  d.removeAttribute("data-open");
  d.classList.add("pointer-events-none");
  document.body.classList.remove("cart-open");
}

function render() {
  // Badges de cantidad (en la cabecera).
  const c = count();
  document.querySelectorAll<HTMLElement>("[data-cart-count]").forEach((el) => {
    el.textContent = String(c);
    el.classList.toggle("hidden", c === 0);
  });

  // Contenido del drawer.
  const body = document.querySelector<HTMLElement>("[data-cart-body]");
  const foot = document.querySelector<HTMLElement>("[data-cart-footer]");
  if (!body) return;
  const cat = products();

  if (lines.length === 0) {
    body.innerHTML = `<p class="py-16 text-center text-ink-soft">Tu carrito está vacío.</p>`;
    if (foot) foot.classList.add("hidden");
    return;
  }
  if (foot) foot.classList.remove("hidden");

  body.innerHTML = lines
    .map((l) => {
      const p = cat[l.slug];
      if (!p) return "";
      return `
      <div class="flex gap-4 py-4">
        <img src="${p.image}" alt="${p.name}" width="72" height="72" loading="lazy"
             class="h-18 w-18 shrink-0 rounded-lg object-cover" style="width:72px;height:72px" />
        <div class="flex-1">
          <p class="font-medium leading-snug text-ink">${p.name}</p>
          <p class="text-sm text-ink-soft">${p.size} · ${fmt(p.price)}</p>
          <div class="mt-2 flex items-center gap-3">
            <div class="inline-flex items-center rounded-full border border-cream-200">
              <button type="button" data-qty-dec="${l.slug}" aria-label="Quitar uno"
                class="grid h-8 w-8 place-items-center text-lg text-ink-soft hover:text-ink">−</button>
              <span class="w-6 text-center text-sm" aria-live="polite">${l.qty}</span>
              <button type="button" data-qty-inc="${l.slug}" aria-label="Añadir uno"
                class="grid h-8 w-8 place-items-center text-lg text-ink-soft hover:text-ink">+</button>
            </div>
            <button type="button" data-remove="${l.slug}"
              class="text-sm text-ink-soft underline hover:text-forest-700">Quitar</button>
          </div>
        </div>
        <p class="font-medium text-ink">${fmt(p.price * l.qty)}</p>
      </div>`;
    })
    .join('<div class="border-t border-cream-200"></div>');

  const sub = document.querySelector<HTMLElement>("[data-cart-subtotal]");
  if (sub) sub.textContent = fmt(subtotal());
}

/* -------------------------------------------------------------- Wiring / API */

function wire() {
  // Añadir al carrito (delegado, funciona para tarjetas y ficha de producto).
  document.addEventListener("click", (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>("[data-add-to-cart]");
    if (t) {
      e.preventDefault();
      const slug = t.getAttribute("data-add-to-cart")!;
      const qtyInput = document.querySelector<HTMLInputElement>("[data-qty-input]");
      const qty = qtyInput ? Math.max(1, parseInt(qtyInput.value || "1", 10)) : 1;
      add(slug, qty);
      return;
    }
    if ((e.target as HTMLElement).closest("[data-cart-toggle]")) {
      open();
      return;
    }
    if (
      (e.target as HTMLElement).closest("[data-cart-close]") ||
      (e.target as HTMLElement).closest("[data-cart-overlay]")
    ) {
      close();
      return;
    }
    const inc = (e.target as HTMLElement).closest<HTMLElement>("[data-qty-inc]");
    const dec = (e.target as HTMLElement).closest<HTMLElement>("[data-qty-dec]");
    const rem = (e.target as HTMLElement).closest<HTMLElement>("[data-remove]");
    if (inc) setQty(inc.getAttribute("data-qty-inc")!, (lines.find((l) => l.slug === inc.getAttribute("data-qty-inc"))?.qty ?? 0) + 1);
    if (dec) setQty(dec.getAttribute("data-qty-dec")!, (lines.find((l) => l.slug === dec.getAttribute("data-qty-dec"))?.qty ?? 0) - 1);
    if (rem) remove(rem.getAttribute("data-remove")!);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  render();
}

// API pública para la página de checkout.
declare global {
  interface Window {
    RVCart: {
      lines: () => CartLine[];
      products: () => Record<string, ProductLite>;
      subtotal: () => number;
      count: () => number;
      clear: () => void;
      fmt: (n: number) => string;
    };
  }
}
window.RVCart = {
  lines: () => lines,
  products,
  subtotal,
  count,
  clear,
  fmt,
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", wire);
} else {
  wire();
}
