/**
 * RIM STUDIO — localStorage cart
 */

var CART_KEY = "rimstudio_cart_v1";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, qty) {
  qty = qty || 1;
  var cart = getCart();
  var existing = cart.find(function (i) { return i.id === productId; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart(cart);
  showToast("Added to cart");
}

function removeFromCart(productId) {
  saveCart(getCart().filter(function (i) { return i.id !== productId; }));
}

function setQty(productId, qty) {
  qty = Math.max(0, parseInt(qty, 10) || 0);
  var cart = getCart();
  if (qty <= 0) {
    saveCart(cart.filter(function (i) { return i.id !== productId; }));
    return;
  }
  var item = cart.find(function (i) { return i.id === productId; });
  if (item) {
    item.qty = qty;
    saveCart(cart);
  }
}

function getCartLines() {
  return getCart()
    .map(function (item) {
      var product = getProductById(item.id);
      if (!product) return null;
      return {
        product: product,
        qty: item.qty,
        lineTotal: product.price * item.qty
      };
    })
    .filter(Boolean);
}

function getCartSubtotal() {
  return getCartLines().reduce(function (sum, line) {
    return sum + line.lineTotal;
  }, 0);
}

function getCartCount() {
  return getCart().reduce(function (sum, i) {
    return sum + i.qty;
  }, 0);
}

function updateCartUI() {
  var count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach(function (el) {
    el.textContent = count;
    if (count > 0) el.classList.add("show");
    else el.classList.remove("show");
  });
}

function showToast(msg) {
  var t = document.getElementById("site-toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "site-toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function () {
    t.classList.remove("show");
  }, 2000);
}
