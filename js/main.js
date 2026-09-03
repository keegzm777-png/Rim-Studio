/**
 * RIM STUDIO — motion & page init
 */

document.addEventListener("DOMContentLoaded", function () {
  // Page fade-in
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.45s ease";
  requestAnimationFrame(function () {
    document.body.style.opacity = "1";
  });

  // Hero: ken-burns background layer
  var hero = document.querySelector(".hero");
  if (hero) {
    var bgUrl = hero.style.backgroundImage || "";
    if (!bgUrl || bgUrl === "none") {
      bgUrl = "url('images/shop.jpg')";
    }
    var match = bgUrl.match(/url\(['"]?([^'")]+)['"]?\)/);
    var src = match ? match[1] : "images/shop.jpg";
    if (!hero.querySelector(".hero-bg-motion")) {
      var layer = document.createElement("div");
      layer.className = "hero-bg-motion";
      layer.style.backgroundImage = "url('" + src + "')";
      hero.insertBefore(layer, hero.firstChild);
      hero.style.backgroundImage = "none";
    }
  }

  // Sticky header glass on scroll
  function onScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  setTimeout(onScroll, 50);
  setTimeout(onScroll, 250);

  // Scroll reveal — only for deeper sections, keep page-header/hero visible
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(
    ".section .card-grid > *, .product-grid > *, .detail-gallery figure, .section-tight .card, .cta-banner, .section .section-head"
  );

  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    if (el.matches(".product-card, .card, figure")) {
      el.classList.add("reveal-delay-" + ((i % 4) + 1));
    }
  });

  function revealAll(list) {
    list.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (reduce || !("IntersectionObserver" in window)) {
    revealAll(document.querySelectorAll(".reveal"));
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    io.observe(el);
    // Fallback: if already in viewport
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      el.classList.add("is-visible");
    }
  });

  // Safety net — nothing stays invisible
  setTimeout(function () {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }, 1200);
});
