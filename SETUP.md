# RIM STUDIO website — setup & deploy

## WhatsApp
- Number used site-wide: **081 056 0116** (`+27 81 056 0116`)
- Configured in `js/components.js` as `WHATSAPP_NUMBER = "27810560116"`
- All buttons (nav, floating, product CTAs, combos, contact) open WhatsApp to this number

## Email
- Public email: **info@rimstudio.co.za**
- Shown in footer, contact page, about page, schema markup
- Checkout “email order” and contact form both target this address

## Contact form (delivers to info@rimstudio.co.za)
The contact form uses [formsubmit.co](https://formsubmit.co) — no backend required.

**First-time activation (important):**
1. Open the live contact page and submit a test message once.
2. Check the inbox of **info@rimstudio.co.za** for an activation email from formsubmit.co.
3. Click the confirmation link in that email.
4. After that, every form submission is delivered to info@rimstudio.co.za.

Optional: you can switch the form action to Formspree later by replacing  
`https://formsubmit.co/info@rimstudio.co.za`  
with your Formspree endpoint in `contact.html`.

## Deploy to GitHub / hosting
1. Unzip this package.
2. Upload the **contents** of the `rim-studio` folder to your web root  
   (or push the folder to a GitHub repo and connect it to Netlify / Vercel / GitHub Pages / cPanel).
3. Ensure the domain points to the folder that contains `index.html`.
4. Hard-refresh the browser after upload so CSS/JS cache updates (`?v=neon8`).

## Files that must stay together
- `index.html` and all other `.html` pages
- `css/`, `js/`, `images/`
- `robots.txt`, `sitemap.xml`

## SEO
- Meta tags, Open Graph, Twitter cards and LocalBusiness schema already include Sandton, Randburg and Johannesburg.
- Update `sitemap.xml` lastmod dates after big content changes if desired.
