# Kashi Nath Steels

A modern, accessible redesign of the Kashi Nath Steels website built with React, Vite, and Tailwind CSS.

## Stack

- React 18
- Vite
- Tailwind CSS
- React Router
- ESLint + Prettier

## What is included

- Home, Products, About, and Contact pages
- Local product catalog with search, multi-select filters, sorting, pagination, and modal detail view
- Accessibility toolbar with text-size, contrast, dyslexic font, skip link, and reduced-motion controls
- Product detail pages with JSON-LD structured data
- Sanitized company facts with sensitive figures removed
- Footer credit linking to Chitrance Infotech

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Lint and format

```bash
npm run lint
npm run format
```

## Where to update content

- Product data lives in [src/data/products.js](src/data/products.js)
- Shared company text and filters live in [src/data/site.js](src/data/site.js)
- Images are referenced from [public/images](public/images)

## Deployment

This is a static React app. Deploy the Vite build output from `dist/` to Netlify, Vercel, GitHub Pages, or any static host.

If your host does not support client-side routing fallback, configure it to redirect all requests to `index.html`.

## Notes

- Product images are stored locally for reliability.
- Contact forms do not prefill product data.
- The site uses client-side routing for local product pages.