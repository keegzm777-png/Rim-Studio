/**
 * RIM STUDIO — product card + grid rendering
 */

function productImageMarkup(product) {
  if (product.image) {
    return '<img src="' + product.image + '" alt="' + product.name.replace(/"/g, "&quot;") + '" loading="lazy" />';
  }
  return (
    '<div class="product-placeholder">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>' +
    '<path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"/>' +
    "</svg>" +
    "<span>Product photo coming soon</span>" +
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
