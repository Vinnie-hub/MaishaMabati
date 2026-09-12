/* =========================================================
   MAIN — shared UI logic 
   ========================================================= */

function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.innerHTML = `${icon("check", 16)} <span>${msg}</span>`;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2400);
}

function formatMoney(n) {
  return (
    CONFIG.CURRENCY +
    " " +
    Number(n).toLocaleString("en-KE", { minimumFractionDigits: 0 })
  );
}

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

function updateHeaderBadges() {
  const cart = typeof getCart === "function" ? getCart() : [];
  const wish = typeof getWishlist === "function" ? getWishlist() : [];
  const cmp = typeof getCompare === "function" ? getCompare() : [];
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

function renderProductCard(p) {
  const inWish =
    typeof isInWishlist === "function" ? isInWishlist(p.id) : false;
  const inCmp = typeof isInCompare === "function" ? isInCompare(p.id) : false;
  const hasSale = p.salePrice && p.salePrice < p.price;
  const displayPrice = hasSale ? p.salePrice : p.price;

  const waMsg =
    `Hello, I would like to order:\n\n` +
    `Product: ${p.name}\n` +
    `Price: ${CONFIG.CURRENCY} ${displayPrice}\n\n` +
    `Please confirm availability.`;
  const waLink = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-thumb">
        <a href="products.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </a>
        <div class="product-tags">
          ${hasSale ? '<span class="tag tag-sale">Sale</span>' : ""}
          ${p.featured ? '<span class="tag tag-new">Featured</span>' : ""}
          ${!p.stock ? '<span class="tag tag-out">Out of Stock</span>' : ""}
        </div>
        <div class="product-quick-actions">
          <button class="quick-btn ${inWish ? "active" : ""}" data-action="wishlist" data-id="${p.id}" title="Wishlist">${icon(inWish ? "heartFill" : "heart", 15)}</button>
          <button class="quick-btn ${inCmp ? "active" : ""}" data-action="compare" data-id="${p.id}" title="Compare">${icon("compare", 15)}</button>
          <a class="quick-btn" href="products.html?id=${p.id}" title="View">${icon("eye", 15)}</a>
        </div>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-title"><a href="products.html?id=${p.id}">${p.name}</a></h3>
        <div class="product-price">
          ${
            hasSale
              ? `<del>${formatMoney(p.price)}</del><ins>${formatMoney(p.salePrice)}</ins>`
              : formatMoney(p.price)
          }
        </div>
        <div class="product-stock ${p.stock ? "" : "out"}">
          ${p.stock ? icon("check", 12) + " In Stock" : icon("close", 12) + " Out of Stock"}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary" data-action="add-cart" data-id="${p.id}"
            ${!p.stock ? 'disabled style="opacity:.5;cursor:not-allowed"' : ""}>
            ${icon("cart", 14)} <span>Add</span>
          </button>
          <a class="btn btn-green" href="${waLink}" target="_blank" rel="noopener">
            ${icon("whatsapp", 14)} <span>Order</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

function initGlobalActions() {
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const id = Number(btn.dataset.id);

    if (action === "add-cart") {
      e.preventDefault();
      if (typeof addToCart === "function") {
        addToCart(id);
        updateHeaderBadges();
      }
    }
    if (action === "wishlist") {
      e.preventDefault();
      if (typeof toggleWishlist === "function") {
        toggleWishlist(id);
        btn.classList.toggle("active");
        btn.innerHTML = icon(
          btn.classList.contains("active") ? "heartFill" : "heart",
          15,
        );
        updateHeaderBadges();
      }
    }
    if (action === "compare") {
      e.preventDefault();
      if (typeof toggleCompare === "function") {
        toggleCompare(id);
        btn.classList.toggle("active");
        updateHeaderBadges();
      }
    }
  });
}

/* ---------- Header/footer HTML injector (shared across pages) ---------- */
function renderHeader(activePage = "") {
  return `
  <header class="site-header">
    <div class="topbar">
      <div class="container">
        <div class="contact-links">
          <span class="contact-item">${icon("phone", 15)}<a href="tel:${CONFIG.PHONE_TEL}">${CONFIG.PHONE}</a></span>
          <span class="contact-item">${icon("mail", 15)}<a href="mailto:${CONFIG.EMAIL}">${CONFIG.EMAIL}</a></span>
        </div>
        <div class="delivery-message">
          <span class="delivery-dot"></span>
          <span>Countrywide delivery · Same-day in Nairobi</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header-main">
        <button class="menu-toggle" aria-label="Menu" type="button">${icon("menu", 26)}</button>
        <a href="index.html" class="brand">
          <img src="${CONFIG.LOGO}" alt="${CONFIG.BUSINESS_NAME}">
        </a>
        <form class="search-bar" role="search">
          <input type="search" placeholder="Search for mabati, cement, steel..." aria-label="Search">
          <button type="submit" aria-label="Search">${icon("search", 18)}</button>
        </form>
        <div class="header-icons">
          <a href="compare.html" class="icon-btn ${activePage === "compare" ? "active" : ""}" title="Compare">
            <span class="icon">${icon("compare", 22)}</span>
            <span class="label">Compare</span>
            <span class="badge" data-badge="compare" style="display:none">0</span>
          </a>
          <a href="wishlist.html" class="icon-btn ${activePage === "wishlist" ? "active" : ""}" title="Wishlist">
            <span class="icon">${icon("heart", 22)}</span>
            <span class="label">Wishlist</span>
            <span class="badge" data-badge="wishlist" style="display:none">0</span>
          </a>
          <a href="cart.html" class="icon-btn ${activePage === "cart" ? "active" : ""}" title="Cart">
            <span class="icon">${icon("cart", 22)}</span>
            <span class="label">Cart</span>
            <span class="badge" data-badge="cart" style="display:none">0</span>
          </a>
        </div>
      </div>
    </div>
    <nav class="main-nav">
      <div class="container">
        <a href="shop.html" class="all-cats">${icon("grid", 16)} <span>All Categories</span></a>
        <ul>
          <li><a href="index.html" class="${activePage === "home" ? "active" : ""}">Home</a></li>
          <li><a href="shop.html" class="${activePage === "shop" ? "active" : ""}">Shop</a></li>
          <li><a href="about.html" class="${activePage === "about" ? "active" : ""}">About</a></li>
          <li><a href="contact.html" class="${activePage === "contact" ? "active" : ""}">Contact</a></li>
        </ul>
        <a href="contact.html" class="nav-help">${icon("info", 16)} <span>Help Center</span></a>
      </div>
    </nav>
  </header>
  <div class="overlay"></div>
  <aside class="mobile-menu">
    <h3>Menu</h3>
    <a href="index.html">Home</a>
    <a href="shop.html">Shop</a>
    <a href="wishlist.html">Wishlist</a>
    <a href="compare.html">Compare</a>
    <a href="cart.html">Cart</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </aside>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="${CONFIG.LOGO}" alt="${CONFIG.BUSINESS_NAME}">
          </div>
          <p>Quality alu-zinc and colour-coated steel roofing sheets, cement, steel and building materials delivered across Kenya since 2009.</p>
          <div class="socials">
            <a href="${CONFIG.SOCIAL.facebook}" aria-label="Facebook">${icon("facebook", 18)}</a>
            <a href="${CONFIG.SOCIAL.instagram}" aria-label="Instagram">${icon("instagram", 18)}</a>
            <a href="${CONFIG.SOCIAL.twitter}" aria-label="Twitter">${icon("twitter", 18)}</a>
            <a href="${CONFIG.SOCIAL.tiktok}" aria-label="TikTok">${icon("tiktok", 18)}</a>
          </div>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="shop.html">All Products</a></li>
            <li><a href="shop.html?category=Roofing%20Sheets">Roofing Sheets</a></li>
            <li><a href="shop.html?category=Cement">Cement</a></li>
            <li><a href="shop.html?category=Steel">Steel</a></li>
            <li><a href="shop.html?category=Hardware">Hardware</a></li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="wishlist.html">Wishlist</a></li>
            <li><a href="compare.html">Compare</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul class="contact-info">
            <li><span class="contact-icon">${icon("phone", 16)}</span><a href="tel:${CONFIG.PHONE_TEL}">${CONFIG.PHONE}</a></li>
            <li><span class="contact-icon">${icon("mail", 16)}</span><a href="mailto:${CONFIG.EMAIL}">${CONFIG.EMAIL}</a></li>
            <li><span class="contact-icon">${icon("pin", 16)}</span><span>${CONFIG.ADDRESS}</span></li>
            <li><span class="contact-icon">${icon("clock", 16)}</span><span>${CONFIG.HOURS}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 ${CONFIG.BUSINESS_NAME}. All rights reserved.</div>
        <div>Built with <span style="color:#f5b301">♥</span> in Kenya</div>
      </div>
    </div>
  </footer>
  <div class="mobile-bottom">
    <ul>
      <li><a href="shop.html"><span class="icon">${icon("store", 22)}</span><span>Store</span></a></li>
      <li><a href="shop.html"><span class="icon">${icon("search", 22)}</span><span>Search</span></a></li>
      <li><a href="wishlist.html"><span class="icon">${icon("heart", 22)}</span><span>Wishlist</span></a></li>
      <li><a href="cart.html"><span class="icon">${icon("cart", 22)}</span><span>Cart</span></a></li>
      <li><a href="shop.html"><span class="icon">${icon("grid", 22)}</span><span>Categories</span></a></li>
    </ul>
  </div>
  <a class="wa-float" href="https://wa.me/${CONFIG.WHATSAPP_NUMBER}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon("whatsapp", 26)}</a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initHeaderSearch();
  initGlobalActions();
  updateHeaderBadges();
});
