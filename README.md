# Raymie's Laundry Services — Website

**Fresh clothes, zero hassle.**

A premium, futuristic marketing + booking website for Raymie's Laundry
Services. Built with Next.js (App Router) + TypeScript + Tailwind CSS v4,
react-hook-form + Zod, and WhatsApp-first forms.

> **Scope:** This is an info/booking site only. There is **no e-commerce** — no
> cart, no checkout, no payments, no file uploads, no backend database and no
> email. Every form validates client-side, then opens a **pre-filled WhatsApp
> message** (`wa.me` deep link) that the customer sends themselves.

---

## Tech stack

| Layer     | Choice                                                                         |
| --------- | ------------------------------------------------------------------------------ |
| Framework | Next.js 16.4.3 (App Router, `cacheComponents`, Turbopack)                      |
| Language  | TypeScript (`@/*` path alias, `src/` dir)                                      |
| Styling   | Tailwind CSS v4 with custom theme tokens (`src/app/globals.css` → `@theme`)    |
| Forms     | react-hook-form + Zod v4 + a small custom resolver (`src/lib/zod-resolver.ts`) |
| Data      | Static catalogue files in `src/data/` (no database)                            |
| Icons     | lucide-react (brand icons in the footer are inline SVG)                        |
| Fonts     | Inter / Sora / Fraunces via `next/font`                                        |
| Motion    | framer-motion (reveal, sliders, accordions)                                    |

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Quality gates (all must pass):

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run build       # production build
```

---

## Environment variables

`.env.example` is intentionally minimal:

```bash
NEXT_PUBLIC_SITE_NAME="Raymie's Laundry Services"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

Copy to `.env` and adjust for production. No secrets are required — there is
no server-side email, database or API key.

---

## Project structure

```
src/
  app/                  # App Router pages
    page.tsx            # Home (hero, marquee, services, stats, process,
                        #   before/after, estimator, pricing, testimonials,
                        #   coverage, FAQ, final CTA)
    services/           # Service list + [slug] detail pages
    pricing/            # Plans (replaces the old /packages route)
    how-it-works/       # 4-step process page
    book/               # WhatsApp pickup booking form
    about/ faqs/ contact/ privacy/ terms/
  components/
    home/               # Homepage sections
    layout/             # Navbar, footer, floating widgets
    forms/              # Booking + contact forms (WhatsApp handoff)
    ui/                 # Primitives (button, badge, section-header, …)
  data/                 # Static content: services, pricing, faqs, hero, …
  lib/
    site.ts             # Single source of truth: phone, WhatsApp number,
                        #   hours, nav, credit, whatsappHref()
    validation.ts       # Zod schemas for the two forms
    utils.ts, zod-resolver.ts
public/
  images/               # Placeholder photography (replace with real photos)
  logo.jpeg, logo-badge.svg
```

---

## WhatsApp-first forms

There is **no backend**. Both forms work like this:

1. Fields validate client-side with Zod (`src/lib/validation.ts`).
2. A honeypot field silently drops bots.
3. The valid payload is composed into a readable message.
4. `whatsappHref(message)` (from `src/lib/site.ts`) builds the `wa.me` deep
   link — the phone number lives **only** in `site.ts`.
5. `window.open(link, "_blank")` opens WhatsApp with the message pre-filled
   (fallback: `location.href`).
6. A success screen offers **"Open WhatsApp again"**.

The number is never hardcoded in components.

---

## Business details

All business copy lives in `src/lib/site.ts`:

- Display phone: `0802 755 6093`
- WhatsApp: `2348027556093` → `https://wa.me/2348027556093`
- Hours: `Open 24/7`
- Footer credit: `Powered by ECHELON TECHNOLOGIES`

---

## Before launch — TODO checklist

Search the repo for `TODO` to find every placeholder. Highlights:

- [ ] `src/lib/site.ts` — tagline, description, address, email, social URLs
- [ ] `src/app/layout.tsx` — JSON-LD `areaServed` city
- [ ] `src/data/pricing.ts` / `estimator.ts` — confirm real prices (NGN)
- [ ] `src/data/coverage.ts` — real pickup areas
- [ ] `src/data/stats.ts` — real numbers for the counters
- [ ] `public/images/*` — replace generated placeholders with real photos
      (hero slides, before/after shots, team, map)
- [ ] `public/logo.jpeg` / `logo-badge.svg` — final brand logo
- [ ] `privacy/page.tsx` and `terms/page.tsx` — review with a legal adviser
- [ ] `about/page.tsx` — real team members and photos

---

Powered by **ECHELON TECHNOLOGIES**.
