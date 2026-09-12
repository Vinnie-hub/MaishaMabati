/* =========================================================
   COMPARE — localStorage
   ========================================================= */

function getCompare() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG.STORAGE.COMPARE)) || [];
  } catch {
    return [];
  }
}
function saveCompare(list) {
  localStorage.setItem(CONFIG.STORAGE.COMPARE, JSON.stringify(list));
  updateHeaderBadges();
}
function isInCompare(id) {
  return getCompare().includes(Number(id));
}

function toggleCompare(id) {
  id = Number(id);
  const list = getCompare();
  const idx = list.indexOf(id);
  if (idx > -1) {
    list.splice(idx, 1);
    showToast("Removed from compare");
  } else {
    if (list.length >= 4) {
      showToast("You can compare up to 4 products");
      return;
    }
    list.push(id);
    showToast("Added to compare");
  }
  saveCompare(list);
}

/* ---------- COMPARE PAGE ---------- */
function renderComparePage() {
  const wrap = document.getElementById("compare-wrap");
  if (!wrap) return;
  const list = getCompare().map(getProductById).filter(Boolean);

  if (list.length === 0) {
    wrap.innerHTML = `
      <div class="empty-state">
        <div class="ico">⇄</div>
        <h3>No products to compare</h3>
        <p>Add up to 4 products to compare their specs side by side.</p>
        <a href="shop.html" class="btn btn-primary">Browse Products</a>
      </div>`;
    return;
  }

  const rows = [
    { label: "Image", render: (p) => `<img src="${p.image}" alt="${p.name}">` },
    { label: "Name", render: (p) => `<strong>${p.name}</strong>` },
    { label: "Category", render: (p) => p.category },
    {
      label: "Price",
      render: (p) => {
        const hasSale = p.salePrice && p.salePrice < p.price;
        return hasSale
          ? `<del>${formatMoney(p.price)}</del> <ins style="color:var(--red);text-decoration:none;">${formatMoney(p.salePrice)}</ins>`
          : formatMoney(p.price);
      },
    },
    {
      label: "Stock",
      render: (p) =>
        p.stock
          ? '<span style="color:#16a34a;font-weight:700;">In Stock</span>'
          : '<span style="color:var(--red);font-weight:700;">Out of Stock</span>',
    },
    {
      label: "Colors",
      render: (p) => (p.colors.length ? p.colors.join(", ") : "—"),
    },
    {
      label: "Variants",
      render: (p) => (p.variants.length ? p.variants.join(", ") : "—"),
    },
    { label: "Description", render: (p) => p.description },
    {
      label: "",
      render: (p) =>
        `<button class="btn btn-primary btn-sm" data-action="add-cart" data-id="${p.id}">Add to Cart</button>`,
    },
  ];

  let html = '<table class="compare-table"><thead><tr><th>Feature</th>';
  list.forEach((p) => {
    html += `<th>${p.name} <span class="remove-col" data-remove="${p.id}">✕</span></th>`;
  });
  html += "</tr></thead><tbody>";

  rows.forEach((row) => {
    html += `<tr><th>${row.label}</th>`;
    list.forEach((p) => {
      html += `<td>${row.render(p)}</td>`;
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  wrap.innerHTML = html;

  wrap.querySelectorAll("[data-remove]").forEach((el) => {
    el.addEventListener("click", () => {
      removeFromCompare(Number(el.dataset.remove));
      renderComparePage();
    });
  });
}

function removeFromCompare(id) {
  saveCompare(getCompare().filter((x) => x !== Number(id)));
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("compare-wrap")) renderComparePage();
});
