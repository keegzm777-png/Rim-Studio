# RIM STUDIO — Complete Website

Premium static website for RIM STUDIO (Sandton) — alloy wheels, tyres & detailing.

## How to preview locally

```bash
cd rim-studio
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

Or open `index.html` after uploading to GitHub Pages.

## File structure

```
rim-studio/
├── index.html, about.html, mags.html, tyres.html, detailing.html
├── contact.html, product.html, cart.html, checkout.html
├── privacy.html, terms.html, returns.html
├── css/style.css
├── js/
│   ├── products.js    (real catalogue)
│   ├── cart.js
│   ├── render.js
│   ├── components.js  (header / footer / WhatsApp)
│   └── main.js
└── images/
    ├── logo.png
    └── shop.jpg
```

## Before launch

1. Replace WhatsApp number in `js/components.js` (`WHATSAPP_NUMBER`)
2. Add real product photos and set `image` fields in `js/products.js`
3. Set Formspree ID (or API) in `contact.html`
4. Review legal pages with a professional
