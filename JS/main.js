/* =========================================================
   MAIN — shared UI logic (nav, search, toast, render helpers)
   ========================================================= */

/* ---------- TOAST ---------- */
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- MONEY ---------- */
function formatMoney(n) {
  return (
    CONFIG.CURRENCY +
    " " +
    Number(n).toLocaleString("en-KE", { minimumFractionDigits: 0 })
  );
}

/* ---------- MOBILE MENU ---------- */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.add("open");
    overlay?.classList.add("show");
  });
  const close = () => {
    menu.classList.remove("open");
    overlay?.classList.remove("show");
  };
  overlay?.addEventListener("click", close);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

/* ---------- HEADER SEARCH ---------- */
function initHeaderSearch() {
  const form = document.querySelector(".search-bar");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = form.querySelector("input").value.trim();
    window.location.href =
      "shop.html" + (q ? "?search=" + encodeURIComponent(q) : "");
  });
}

/* ---------- HEADER BADGES ---------- */
function updateHeaderBadges() {
  const cart = getCart();
  const wish = getWishlist();
  const cmp = getCompare();

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('[data-badge="cart"]').forEach((el) => {
    el.textContent = cartCount;
    el.style.display = cartCount > 0 ? "flex" : "none";
  });
  document.querySelectorAll('[data-badge="wishlist"]').forEach((el) => {
    el.textContent = wish.length;
    el.style.display = wish.length > 0 ? "flex" : "none";
  });
  document.querySelectorAll('[data-badge="compare"]').forEach((el) => {
    el.textContent = cmp.length;
    el.style.display = cmp.length > 0 ? "flex" : "none";
  });
}

/* ---------- PRODUCT CARD RENDERER ---------- */
function renderProductCard(p) {
  const inWish = isInWishlist(p.id);
  const inCmp = isInCompare(p.id);
  const hasSale = p.salePrice && p.salePrice < p.price;
  const displayPrice = hasSale ? p.salePrice : p.price;

  const waText = encodeURIComponent(
    `Hello, I would like to order:\n\nProduct: ${p.name}\nPrice: ${CONFIG.CURRENCY} ${displayPrice}\n\nPlease confirm availability.`,
  );
  const waLink = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${waText}`;

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-thumb">
        <a href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </a>
        <div class="product-tags">
          ${hasSale ? '<span class="tag tag-sale">Sale</span>' : ""}
          ${p.featured ? '<span class="tag tag-new">Featured</span>' : ""}
          ${!p.stock ? '<span class="tag tag-out">Out of Stock</span>' : ""}
        </div>
        <div class="product-quick-actions">
          <button class="quick-btn ${inWish ? "active" : ""}" data-action="wishlist" data-id="${p.id}" title="Wishlist">♡</button>
          <button class="quick-btn ${inCmp ? "active" : ""}" data-action="compare" data-id="${p.id}" title="Compare">⇄</button>
          <a class="quick-btn" href="product.html?id=${p.id}" title="View">👁</a>
        </div>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-title"><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="product-price">
          ${hasSale ? `<del>${formatMoney(p.price)}</del><ins>${formatMoney(p.salePrice)}</ins>` : formatMoney(p.price)}
        </div>
        <div class="product-stock ${p.stock ? "" : "out"}">
          ${p.stock ? "● In Stock" : "● Out of Stock"}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary" data-action="add-cart" data-id="${p.id}" ${!p.stock ? 'disabled style="opacity:.5;cursor:not-allowed"' : ""}>Add</button>
          <a class="btn btn-green" href="${waLink}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

/* ---------- GLOBAL EVENT DELEGATION ---------- */
function initGlobalActions() {
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const action = btn.dataset.action;
    const id = Number(btn.dataset.id);

    if (action === "add-cart") {
      e.preventDefault();
      addToCart(id);
      updateHeaderBadges();
    }
    if (action === "wishlist") {
      e.preventDefault();
      toggleWishlist(id);
      btn.classList.toggle("active");
      updateHeaderBadges();
    }
    if (action === "compare") {
      e.preventDefault();
      toggleCompare(id);
      btn.classList.toggle("active");
      updateHeaderBadges();
    }
  });
}

/* ---------- BOOT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initHeaderSearch();
  initGlobalActions();
  updateHeaderBadges();
});
