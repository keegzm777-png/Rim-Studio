/**
 * RIM STUDIO — page init helpers
 */

document.addEventListener("DOMContentLoaded", function () {
  // Hero background: use real shop photo when present
  var hero = document.querySelector(".hero");
  if (hero && !hero.style.backgroundImage) {
    hero.style.backgroundImage = "url('images/shop.jpg')";
  }

  // Soft fade-in for main content
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.35s ease";
  requestAnimationFrame(function () {
    document.body.style.opacity = "1";
  });
});
