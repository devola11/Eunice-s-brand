# Eunice's Essentials

A modern, responsive static website for **Eunice's Essentials** — a ladies clothing and professional nail tech business based in Pretoria, South Africa.

## Live Site

[www.eunicesessentials.co.za](https://www.eunicesessentials.co.za/)

## Features

- **Responsive Design** — Optimised for mobile (375px+), tablet, and desktop
- **Product Collection** — Filterable grid with categories (nightwear, casual, lingerie)
- **Nail Services** — Service cards with durations and WhatsApp booking
- **Instagram Gallery** — Masonry-style image grid
- **Contact Form** — Sends enquiries directly via WhatsApp
- **Floating WhatsApp Button** — One-tap customer communication
- **Back to Top** — Smooth scroll navigation
- **Scroll Reveal Animations** — IntersectionObserver-based entrance effects
- **404 Error Page** — Branded, self-contained error page

## Tech Stack

| Layer | Technology |
|-------|-----------|
| HTML | Semantic HTML5 with Schema.org JSON-LD |
| CSS | Custom properties, CSS Grid, Flexbox, `clamp()` |
| JavaScript | Vanilla JS (no frameworks or dependencies) |
| Fonts | Google Fonts (Playfair Display, Poppins) — non-render-blocking |
| Hosting | Netlify (static deployment) |

## Project Structure

```
/
├── index.html        # Main page (single-page layout)
├── 404.html          # Custom error page
├── style.css         # All styles (responsive + reduced motion)
├── script.js         # Navigation, filters, animations, form handler
├── favicon.svg       # SVG favicon
├── _headers          # Netlify security headers
├── robots.txt        # Crawl rules
├── sitemap.xml       # Sitemap for search engines
└── images/
    ├── eunice-clothing/   # Product images (12 items)
    ├── eunice-nail/       # Nail service images (11 items)
    └── og-image.jpg       # Open Graph social share image
```

## Performance

- Zero external JS dependencies
- Non-render-blocking Google Fonts (`media="print"` + JS swap)
- Lazy-loaded images with `loading="lazy"` and `decoding="async"`
- `content-visibility: auto` for off-screen sections
- Throttled scroll handlers with `{ passive: true }`

## Accessibility

- Skip-to-content link
- Semantic `<main>`, `<nav>`, `<section>`, `<footer>` structure
- ARIA attributes on interactive elements (`aria-expanded`, `aria-controls`, `aria-label`)
- Screen-reader-only labels on all form inputs
- Keyboard navigation support (Escape to close menu, focus management)
- Touch targets minimum 44x44px
- `prefers-reduced-motion` support (WCAG 2.1)
- Focus-visible outlines for keyboard users

## Security

- Content Security Policy (CSP) with SHA-256 hash for JSON-LD
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security` with preload
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restricting camera, microphone, geolocation, payment
- Input sanitisation (XSS prevention)
- All external links use `rel="noopener noreferrer"`
- Email addresses encoded with HTML entities (anti-scrape)

## SEO

- Optimised `<title>` and `<meta description>`
- Open Graph and Twitter Card meta tags
- Schema.org LocalBusiness structured data
- Canonical URL
- Geo tags for local search (Pretoria, Gauteng, ZA)
- `robots.txt` and `sitemap.xml`

## Local Development

```bash
# Serve locally (requires Node.js)
npx serve -s

# Or use any static file server
python -m http.server 8080
```

## Deployment

The site is deployed on **Netlify**. Push to `master` to trigger a deploy.

Security headers are configured via the `_headers` file (Netlify-specific).

## Contact

- **WhatsApp:** [+27 64 485 5192](https://wa.me/27644855192)
- **Instagram:** [@eunice.essential](https://www.instagram.com/eunice.essential)
- **Facebook:** [Eunice's Essentials](https://www.facebook.com/share/1BwhwMj8UA/)
- **Email:** Euniceessentials192@gmail.com

---

Made with love in Pretoria, South Africa.
