/* =========================================================
   CART — localStorage based
   ========================================================= */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG.STORAGE.CART)) || [];
  } catch {
    return [];
  }
}
function saveCart(cart) {
  localStorage.setItem(CONFIG.STORAGE.CART, JSON.stringify(cart));
  updateHeaderBadges();
}

function addToCart(id, qty = 1, color = null, variant = null) {
  const p = getProductById(id);
  if (!p || !p.stock) return;
  const cart = getCart();
  const key = `${id}-${color || ""}-${variant || ""}`;
  const existing = cart.find((i) => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, id, qty, color, variant });
  }
  saveCart(cart);
  showToast(`${p.name} added to cart`);
}

function updateCartQty(key, qty) {
  const cart = getCart();
  const item = cart.find((i) => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
}

function removeFromCart(key) {
  saveCart(getCart().filter((i) => i.key !== key));
}

function clearCart() {
  saveCart([]);
}

function getCartTotal() {
  return getCart().reduce((sum, i) => {
    const p = getProductById(i.id);
    if (!p) return sum;
    const price = p.salePrice && p.salePrice < p.price ? p.salePrice : p.price;
    return sum + price * i.qty;
  }, 0);
}

function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

/* ---------- CART PAGE RENDER ---------- */
function renderCartPage() {
  const wrap = document.getElementById("cart-items");
  const summary = document.getElementById("cart-summary");
  if (!wrap) return;

  const cart = getCart();

  if (cart.length === 0) {
    wrap.outerHTML = `
      <div class="empty-state">
        <div class="ico">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Browse our products and add items to your cart.</p>
        <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
      </div>`;
    if (summary) summary.style.display = "none";
    return;
  }

  wrap.innerHTML = cart
    .map((item) => {
      const p = getProductById(item.id);
      if (!p) return "";
      const price =
        p.salePrice && p.salePrice < p.price ? p.salePrice : p.price;
      return `
      <div class="cart-item" data-key="${item.key}">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="meta">
            ${item.color ? "Color: " + item.color : ""}
            ${item.variant ? " | Variant: " + item.variant : ""}
          </div>
          <div class="price">${formatMoney(price)}</div>
        </div>
        <div class="qty-selector">
          <button data-cart-action="dec" data-key="${item.key}">−</button>
          <input type="text" value="${item.qty}" readonly>
          <button data-cart-action="inc" data-key="${item.key}">+</button>
        </div>
        <button class="cart-item-remove" data-cart-action="remove" data-key="${item.key}">✕ Remove</button>
      </div>`;
    })
    .join("");

  if (summary) {
    const subtotal = getCartTotal();
    const shipping = 0;
    const total = subtotal + shipping;
    summary.innerHTML = `
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>${formatMoney(subtotal)}</span></div>
      <div class="summary-row"><span>Delivery</span><span>To be confirmed</span></div>
      <div class="summary-row total"><span>Total</span><span>${formatMoney(total)}</span></div>
      <button class="btn btn-green btn-block" id="checkout-wa">Order via WhatsApp</button>
      <button class="btn btn-ghost btn-block" id="clear-cart" style="margin-top:8px;">Clear Cart</button>
      <a href="shop.html" class="btn btn-outline btn-block" style="margin-top:8px;">Continue Shopping</a>
    `;

    document
      .getElementById("checkout-wa")
      .addEventListener("click", () => checkoutWhatsApp());
    document.getElementById("clear-cart").addEventListener("click", () => {
      if (confirm("Clear all items from cart?")) {
        clearCart();
        renderCartPage();
      }
    });
  }

  // cart qty handlers
  wrap.querySelectorAll("[data-cart-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const action = btn.dataset.cartAction;
      const item = getCart().find((i) => i.key === key);
      if (!item) return;
      if (action === "inc") updateCartQty(key, item.qty + 1);
      if (action === "dec") updateCartQty(key, item.qty - 1);
      if (action === "remove") removeFromCart(key);
      renderCartPage();
    });
  });
}

/* ---------- WHATSAPP CHECKOUT ---------- */
function checkoutWhatsApp() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }

  let msg = "Hello, I would like to place an order:\n\n";
  let total = 0;

  cart.forEach((item, i) => {
    const p = getProductById(item.id);
    if (!p) return;
    const price = p.salePrice && p.salePrice < p.price ? p.salePrice : p.price;
    const line = price * item.qty;
    total += line;
    msg += `${i + 1}. ${p.name}\n`;
    if (item.color) msg += `   Color: ${item.color}\n`;
    if (item.variant) msg += `   Variant: ${item.variant}\n`;
    msg += `   Quantity: ${item.qty}\n`;
    msg += `   Price: ${CONFIG.CURRENCY} ${price} each\n`;
    msg += `   Subtotal: ${CONFIG.CURRENCY} ${line}\n\n`;
  });

  msg += `Total: ${CONFIG.CURRENCY} ${total}\n\n`;
  msg += `Customer Name: \n`;
  msg += `Phone: \n`;
  msg += `Delivery Location: \n\n`;
  msg += `Please confirm availability and delivery details.`;

  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ---------- SINGLE PRODUCT WHATSAPP ---------- */
function orderSingleWhatsApp(id, qty = 1, color = null, variant = null) {
  const p = getProductById(id);
  if (!p) return;
  const price = p.salePrice && p.salePrice < p.price ? p.salePrice : p.price;
  const total = price * qty;

  let msg = "Hello, I would like to place an order:\n\n";
  msg += `Product: ${p.name}\n`;
  if (color) msg += `Variant/Color: ${color}\n`;
  if (variant) msg += `Variant: ${variant}\n`;
  msg += `Quantity: ${qty}\n`;
  msg += `Price: ${CONFIG.CURRENCY} ${price}\n\n`;
  msg += `Total: ${CONFIG.CURRENCY} ${total}\n\n`;
  msg += `Customer Name: \n`;
  msg += `Phone: \n`;
  msg += `Delivery Location: \n\n`;
  msg += `Please confirm availability and delivery details.`;

  window.open(
    `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("cart-items")) renderCartPage();
});
