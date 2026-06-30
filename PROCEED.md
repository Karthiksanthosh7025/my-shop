# My Shop — Project Handoff Summary

**Purpose of this file:** Paste this into a new Claude conversation to resume exactly where we left off, with full context.

## Project Overview
- Building a simple e-commerce website ("My Shop") to sell physical products
- Solo project, guided step-by-step by Claude, user is rebuilding IT skills after a career break (former Software Test Engineer — test automation, CI/CD, Agile, DevOps, Docker)
- Goal: keep it simple, user-friendly, not overly complex
- User environment: MacBook Pro M4, macOS

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- React Context (for cart state)
- Stripe (Checkout, test mode) for payments
- Git + GitHub for version control
- Local dev tools installed: Node.js (via nvm), npm, Git, VS Code (with `code` terminal command enabled)

## Project Location
- Local: `~/Projects/my-shop`
- GitHub: `https://github.com/Karthiksanthosh7025/my-shop`

## Progress So Far

### ✅ Sprint 0 — Environment Setup (Complete)
- Installed nvm, Node.js (LTS, v24.18.0), npm (v11.60.0)
- Installed VS Code, enabled `code` terminal command
- Scaffolded project: `npx create-next-app@latest my-shop` with TypeScript, ESLint, Tailwind, `src/` directory, App Router, default import alias
- Git initialized, connected to GitHub repo, pushed successfully

### ✅ Sprint 1 — Static Storefront (Complete)
- Built homepage (`app/page.tsx`) with product grid (3 sample products)
- Added real product photos to `public/` folder (`model1.jpg`, `model2.jpg`, `model3.jpg`)
- Centralized product data in `src/lib/products.ts` (single source of truth — `Product` type + `products` array with id, name, price, image, description)
- Built dynamic product detail pages at `app/products/[id]/page.tsx` using Next.js dynamic routing
- Homepage product cards link to their detail pages

### 🔶 Sprint 2 — Cart & Checkout (In Progress)
Completed so far:
- Created `src/lib/cart-context.tsx` — React Context for global cart state (`addToCart`, `removeFromCart`, `updateQuantity`, `totalPrice`, `totalItems`), supports changeable quantities
- Wrapped app in `CartProvider` inside `app/layout.tsx`
- Created `app/header.tsx` — shows "My Shop" + Cart link with live item count badge
- Wired "Add to Cart" buttons on both homepage and product detail page
- Built `app/cart/page.tsx` — full cart view with quantity +/- controls, remove item, running total, empty-cart state
- Created Stripe account (test mode), saved API keys
- Created `.env.local` with `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (confirmed `.gitignore` already excludes `.env*`, so keys are safe from GitHub)
- Installed `stripe` and `@stripe/stripe-js` npm packages
- Created `app/api/checkout/route.ts` — server-side API route that builds a Stripe Checkout session, including:
  - Guest checkout (default, no account needed)
  - Card payments
  - UK shipping address collection
  - Two shipping options: Standard Delivery (£3.99, 3-5 days) and Express Delivery (£7.99, 1-2 days)
  - Redirects to `/checkout/success` on success, back to `/cart` on cancel

**Next immediate step:** Connect the "Checkout" button on `app/cart/page.tsx` to call `app/api/checkout/route.ts` and redirect the browser to the returned Stripe URL. Then test a full purchase using Stripe test card numbers (e.g. 4242 4242 4242 4242).

## Planned Roadmap (Not Yet Started)
- **Finish Sprint 2:** Wire checkout button → Stripe redirect → build `/checkout/success` page
- **Sprint 3 — Real Data:** Move products from static file to a real database (likely Supabase); add user accounts/login (Supabase Auth or Clerk) — guest checkout will always remain available alongside login
- **Sprint 4 — Testing:** Unit tests (Jest), end-to-end tests (Playwright/Cypress) — leveraging user's test automation background
- **Sprint 5 — CI/CD:** GitHub Actions to run tests automatically + auto-deploy to Vercel on pass; optional Docker setup for local dev parity
- **Sprint 6 — Polish & Launch:** SEO, performance, custom domain, go live

## Deferred to Post-Launch (User's Request)
- Real courier API integration (e.g. Royal Mail, DPD, Evri) for parcel shop collection and live courier selection — agreed this comes after the core store is working, as it requires substantial separate integration work

## How to Resume
1. Open VS Code, open the `my-shop` project folder
2. Run `npm run dev` in the terminal, check `http://localhost:3000`
3. Paste this file's content into a new Claude conversation and say "let's continue from here"