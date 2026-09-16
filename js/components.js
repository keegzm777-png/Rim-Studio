/**
 * RIM STUDIO — shared header, footer, WhatsApp
 * Update WHATSAPP_NUMBER when the real number is provided.
 */

var WHATSAPP_NUMBER = "27810560116"; // +27 81 056 0116

var FACEBOOK_URL = "https://www.facebook.com/share/14sgt9V3BjC/";

var INSTAGRAM_URL = "https://www.instagram.com/rimstudiorsa";

function waLink(message) {
  var text = encodeURIComponent(
    message || "Hi RIM STUDIO, I'd like some information about your wheels/tyres."
  );
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
}

function headerHTML(activePage) {
  function navClass(page) {
    return activePage === page ? "active" : "";
  }
  return (
    '<div class="announcement-bar" aria-hidden="true">' +
    '<div class="announcement-track">' +
    '<span class="announcement-item">Free quotations on all products</span>' +
    '<span class="announcement-item">Premium alloy wheels & mags</span>' +
    '<span class="announcement-item">Tyre fitment & wheel balancing</span>' +
    '<span class="announcement-item">Paint Protection Film (PPF)</span>' +
    '<span class="announcement-item">Vehicle detailing & training</span>' +
    '<span class="announcement-item">Edenburg · Sandton</span>' +
    '<span class="announcement-item">Performance tyres & racing sets</span>' +
    '<span class="announcement-item">Free quotations on all products</span>' +
    '<span class="announcement-item">Premium alloy wheels & mags</span>' +
    '<span class="announcement-item">Tyre fitment & wheel balancing</span>' +
    '<span class="announcement-item">Paint Protection Film (PPF)</span>' +
    '<span class="announcement-item">Vehicle detailing & training</span>' +
    '<span class="announcement-item">Edenburg · Sandton</span>' +
    '<span class="announcement-item">Performance tyres & racing sets</span>' +
    '</div></div>' +
    '<header class="site-header">' +
    '<div class="wrap">' +
    '<a href="index.html" class="logo"><img src="images/logo.png?v=neon11" alt="RIM STUDIO Sandton – alloy wheels, mags and tyres Johannesburg" height="36" /></a>' +
    '<nav class="nav-desktop">' +
    '<a href="index.html" class="' + navClass("home") + '">HOME</a>' +
    '<a href="about.html" class="' + navClass("about") + '">ABOUT US</a>' +
    '<a href="mags.html" class="' + navClass("mags") + '">MAGS</a>' +
    '<a href="tyres.html" class="' + navClass("tyres") + '">TYRES</a>' +
    '<a href="nankang.html" class="' + navClass("nankang") + '">NANKANG</a>' +
    '<a href="detailing.html" class="' + navClass("detailing") + '">DETAILING</a>' +
    '<a href="contact.html" class="' + navClass("contact") + '">CONTACT US</a>' +
    "</nav>" +
    '<div class="nav-actions">' +
    '<a href="cart.html" class="nav-icon" aria-label="Cart">' +
    '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M6 6L5 2H2"/></svg>' +
    '<span class="cart-count" data-cart-count>0</span>' +
    "</a>" +
    '<a href="' + FACEBOOK_URL + '" class="nav-social" target="_blank" rel="noopener noreferrer" aria-label="Facebook">' +'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.887v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>' +'</a>' +'<a href="' + INSTAGRAM_URL + '" class="nav-social" target="_blank" rel="noopener noreferrer" aria-label="Instagram @rimstudiorsa">' +'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>' +'</a>' +
    '<a href="' + waLink() + '" class="nav-wa" target="_blank" rel="noopener">WhatsApp</a>' +
    '<button class="menu-toggle" id="menuToggle" aria-label="Menu">' +
    '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>' +
    "</button>" +
    "</div>" +
    "</div>" +
    '<div class="mobile-nav" id="mobileNav">' +
    '<a href="index.html">HOME</a>' +
    '<a href="about.html">ABOUT US</a>' +
    '<a href="mags.html">MAGS</a>' +
    '<a href="tyres.html">TYRES</a>' +
    '<a href="nankang.html">NANKANG</a>' +
    '<a href="detailing.html">DETAILING</a>' +
    '<a href="contact.html">CONTACT US</a>' +
    '<a href="' + waLink() + '" class="wa-mobile" target="_blank" rel="noopener">WhatsApp Us</a>' +
    "</div>" +
    "</header>"
  );
}

function footerHTML() {
  return (
    '<footer class="site-footer">' +
    '<div class="wrap">' +
    '<div class="footer-grid">' +
    "<div>" +
    '<img src="images/logo.png?v=neon11" alt="RIM STUDIO" class="footer-logo" />' +
    "<p>Alloy wheels, mags, tyres, fitment, balancing, PPF & wraps in Sandton.<br/>Sandton’s destination for correct fitment and exceptional finish.</p>" +
    "</div>" +
    "<div>" +
    "<h4>Visit Us</h4>" +
    "<address><a href='https://www.google.com/maps?q=4+7th+Ave,+Edenburg,+Sandton,+2128,+South+Africa' target='_blank' rel='noopener' style='color:inherit;text-decoration:none'>4 7th Ave<br/>Edenburg, Sandton, 2128<br/>South Africa</a></address>" +
    '<p style="margin-top:10px;"><a href="mailto:info@rimstudio.co.za" style="color:var(--cyan)">info@rimstudio.co.za</a></p>' +
    "</div>" +
    "<div>" +
    "<h4>Explore</h4>" +
    "<ul>" +
    '<li><a href="mags.html">Mags</a></li>' +
    '<li><a href="tyres.html">Tyres</a></li>' +
    '<li><a href="nankang.html">Nankang</a></li>' +
    '<li><a href="detailing.html">Detailing</a></li>' +
    '<li><a href="about.html">About Us</a></li>' +
    '<li><a href="contact.html">Contact Us</a></li>' +
    "</ul>" +
    "</div>" +
    "<div>" +
    "<h4>Information</h4>" +
    "<ul>" +
    '<li><a href="privacy.html">Privacy Policy</a></li>' +
    '<li><a href="terms.html">Terms &amp; Conditions</a></li>' +
    '<li><a href="returns.html">Returns Policy</a></li>' +
    "</ul>" +
    '<a href="' + waLink() + '" class="btn btn-whatsapp" style="margin-top:14px;display:inline-flex;" target="_blank" rel="noopener">WhatsApp Us</a>' +
    '<div class="footer-social">' +
    '<a href="' + FACEBOOK_URL + '" class="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">' +'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.887v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg> Facebook' +'</a>' +'<a href="' + INSTAGRAM_URL + '" class="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram @rimstudiorsa">' +'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> Instagram' +'</a>' +
    '</div>' +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom">&copy; ' +
    new Date().getFullYear() +
    " RIM STUDIO. All rights reserved. Sandton, South Africa.</div>" +
    "</div>" +
    "</footer>"
  );
}

function whatsappFloatHTML() {
  return (
    '<a href="' +
    waLink() +
    '" class="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' +
    '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
    "</a>"
  );
}

function mountComponents() {
  var page = document.body.getAttribute("data-page") || "";
  var headerEl = document.getElementById("site-header");
  var footerEl = document.getElementById("site-footer");
  var waEl = document.getElementById("site-whatsapp");

  if (headerEl) headerEl.outerHTML = headerHTML(page);
  if (footerEl) footerEl.outerHTML = footerHTML();
  if (waEl) waEl.outerHTML = whatsappFloatHTML();

  var toggle = document.getElementById("menuToggle");
  var mobile = document.getElementById("mobileNav");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      mobile.classList.toggle("open");
    });
  }

  updateCartUI();
}

document.addEventListener("DOMContentLoaded", mountComponents);
