# Netvly — Next.js site

This is the Netvly marketing site converted to Next.js (App Router).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.js        Root layout — fonts, page metadata/favicons, renders Header + Footer on every route
  globals.css       All site styles (design tokens, components, sections)
  sitemap.js         Generates /sitemap.xml for search engines
  robots.js          Generates /robots.txt, points crawlers at the sitemap
  page.js            Home page (hero, trust bar, services, process, work, stack, contact form)
  privacy/page.js    Privacy Policy
  terms/page.js      Terms & Conditions
  founder/page.js    Founder page (placeholder bio — see note below)
  about/page.js      About Us page

components/
  Header.js          Shared nav: logo, live clock, links, mobile menu (client component)
  Footer.js          Shared footer: nav links, legal links, social icons
  ContactForm.js     Contact form — builds a pre-filled mailto: link + confirmation popup
  TrustBar.js        Scrolling client-logo marquee + rating
  ScrollReveal.js     Fade/rise-in-on-scroll effect for elements with the "reveal" class
  HashScroll.js       Fixes cross-page anchor links (e.g. clicking "Contact" from /privacy) —
                      Next.js doesn't reliably auto-scroll to a hash target when navigating in
                      from a different route, so this retries until the target element exists
  ErrorBoundary.js    Wraps every page; if a page ever throws during render, shows a "Something
                      went wrong" message with a link home instead of a silent blank page

public/
  favicon-32.png, favicon-512.png, apple-touch-icon.png
  images/logo.png, images/work-bullvera.jpg, images/work-netv.jpg, images/work-astrov.jpg
```

## SEO: set your real domain

`app/sitemap.js`, `app/robots.js`, and `app/layout.js` all read `NEXT_PUBLIC_SITE_URL` (falling
back to `https://netvly.com` if unset). Copy `.env.local.example` to `.env.local` and set it to
your actual production domain before deploying, so the sitemap, robots.txt, and canonical URLs
are correct:

```bash
cp .env.local.example .env.local
# then edit .env.local with your real domain
```

Once deployed, your sitemap will be live at `/sitemap.xml` and `/robots.txt` will point to it
automatically — no need to submit these by hand, though you can still add the sitemap URL to
Google Search Console / Bing Webmaster Tools to speed up indexing.

## Things to update before going live

- **Contact form** (`components/ContactForm.js`): currently opens the visitor's email app via a
  `mailto:` link to `hello@netvly.com`. For automatic server-side sending (no email app required),
  wire it up to a form backend (e.g. Formspree, Resend, EmailJS) instead.
- **Founder page** (`app/founder/page.js`): uses a placeholder name/bio/avatar. Swap in the real
  founder's details and photo.
- **Social links** (`components/Footer.js`, `app/founder/page.js`): LinkedIn/Twitter links are
  currently `#` placeholders.
- **Legal pages** (`app/privacy/page.js`, `app/terms/page.js`): generic template content — have a
  lawyer review before treating as your real policy.
- **Work section** (`app/page.js` + `public/images/work-*.jpg`): screenshots for BullVera, Netv,
  and AstroV. Four placeholder logos (Lumen Labs, Northbridge, Vantik, Pulsewave) are mixed into
  the trust-bar marquee in `components/TrustBar.js` — swap for real clients as you sign them.
