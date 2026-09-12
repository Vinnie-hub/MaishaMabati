/* =========================================================
   WISHLIST — localStorage
   ========================================================= */
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG.STORAGE.WISHLIST)) || [];
  } catch {
    return [];
  }
}
function saveWishlist(list) {
  localStorage.setItem(CONFIG.STORAGE.WISHLIST, JSON.stringify(list));
  if (typeof updateHeaderBadges === "function") updateHeaderBadges();
}
function isInWishlist(id) {
  return getWishlist().includes(Number(id));
}

function toggleWishlist(id) {
  id = Number(id);
  const list = getWishlist();
  const idx = list.indexOf(id);
  if (idx > -1) {
    list.splice(idx, 1);
    showToast("Removed from wishlist");
  } else {
    list.push(id);
    showToast("Added to wishlist");
  }
  saveWishlist(list);
}
function removeFromWishlist(id) {
  saveWishlist(getWishlist().filter((x) => x !== Number(id)));
}

function renderWishlistPage() {
  const grid = document.getElementById("wishlist-grid");
  if (!grid) return;
  const list = getWishlist();

  if (list.length === 0) {
    grid.outerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="ico">${icon("heart", 60)}</div>
        <h3>Your wishlist is empty</h3>
        <p>Save products you love and find them here later.</p>
        <a href="shop.html" class="btn btn-primary">Browse Products</a>
      </div>`;
    return;
  }

  grid.innerHTML =
    list
      .map((id) => {
        const p = getProductById(id);
        return p ? renderProductCard(p) : "";
      })
      .join("") +
    `
    <div style="grid-column:1/-1;text-align:center;margin-top:20px;">
      <button class="btn btn-primary" id="wish-to-cart">${icon("cart", 16)} Move All to Cart</button>
    </div>`;

  document.getElementById("wish-to-cart")?.addEventListener("click", () => {
    list.forEach((id) => addToCart(id, 1));
    saveWishlist([]);
    renderWishlistPage();
    showToast("All items moved to cart");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("wishlist-grid")) renderWishlistPage();
});
