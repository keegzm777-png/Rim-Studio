/**
 * RIM STUDIO — product card + grid rendering
 */

function productImageMarkup(product) {
  if (product.image) {
    return '<img src="' + product.image + '" alt="' + product.name.replace(/"/g, "&quot;") + '" loading="lazy" />';
  }
  var label = product.size || product.category || "Tyre";
  return (
    '<div class="product-placeholder" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;min-height:200px;background:linear-gradient(160deg,#0c0c0c,#141414);">' +
    '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:0.5">' +
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>' +
    "</svg>" +
    '<span style="color:var(--cyan);font-weight:700;letter-spacing:0.04em;">' + label + "</span>" +
    '<span style="font-size:0.75rem;color:var(--text-muted);">Nankang AR-1</span>' +
    "</div>"
  );
}

function productCardHTML(product) {
  var badge = product.tag
    ? '<span class="badge">' + product.tag + "</span>"
    : "";
  var was = product.wasPrice
    ? '<span class="price-was">' + formatZAR(product.wasPrice) + "</span>"
    : "";
  return (
    '<a href="product.html?id=' +
    product.id +
    '" class="product-card">' +
    '<div class="product-media">' +
    badge +
    productImageMarkup(product) +
    "</div>" +
    '<div class="product-body">' +
    "<h3>" +
    product.name +
    "</h3>" +
    '<p class="product-meta">' +
    (product.brandFit || product.size || "") +
    "</p>" +
    '<div class="price-row">' +
    '<span class="price">' +
    formatZAR(product.price) +
    "</span>" +
    was +
    "</div>" +
    "</div>" +
    "</a>"
  );
}

function renderProductGrid(containerId, products) {
  var el = document.getElementById(containerId);
  if (!el) return;
  if (!products || !products.length) {
    el.innerHTML =
      '<div class="empty-state"><h3>No products found</h3><p>Try a different filter or check back soon.</p></div>';
    return;
  }
  el.innerHTML = products.map(productCardHTML).join("");
}
