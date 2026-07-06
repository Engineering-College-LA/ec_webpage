# Architecture Overview

## What Exists Today

This app is a Vite-powered React SPA organized mostly by route and presentation layer.

### Entry flow

1. `src/main.jsx` mounts the app and initializes global CSS and i18n.
2. `src/routes/Router.jsx` defines route structure with `createBrowserRouter`.
3. `src/components/layouts/BaseLayout.jsx` wraps most routes with shared header, footer, toaster, and scroll reset.

### Main code organization

- `src/pages/*`
  - route-level pages such as `home`, `about`, `admission`, `academics`, and event pages
- `src/components/*`
  - shared presentational components such as header, footer, FAQ, hero, forms, carousels, and modal pieces
- `src/config/*`
  - navigation/footer constants and icon definitions
- `src/hooks/*`
  - small UI hooks like scrolling and click-outside behavior
- `src/utils/*` and `src/lib/*`
  - lightweight helpers
- `public/locales/*`
  - translation dictionaries that currently also act as a content store

## Architectural Strengths

- Simple mental model for a small marketing site
- Route-level code splitting already used for some pages
- Tailwind makes visual iteration fast
- i18n foundation already exists
- Shared layout prevents duplication across pages

## Architectural Risks

### 1. No feature boundaries

The current structure separates `pages` and `components`, but business concerns are still spread across many folders. For example, admissions behavior, content, CTA flows, and page sections are composed from generic components instead of living in one feature module.

Result:

- harder ownership
- harder testing
- harder refactoring when design changes

### 2. Content and logic are tightly coupled

Page copy is split between JSX files and locale JSON. Structural content like programs, FAQ, and page sections is not modeled as reusable domain content.

Result:

- repeated rendering logic
- translation files becoming CMS substitutes
- difficult content governance as languages and pages grow

### 3. Side effects live in UI components

`src/components/contact/FormTelegram.jsx` performs Telegram submission and Google Sheets submission directly from the browser.

Result:

- security exposure for browser-readable integration secrets
- weak observability
- difficult retries/error handling
- difficult future migration to CRM or backend APIs

### 4. Design tokens are not yet systematized

The app uses Tailwind config extensions, component classes in `src/index.css`, and inline styles. This is workable today, but it will drift during a redesign.

Result:

- inconsistent spacing and color rules
- harder theming
- repeated one-off patterns

### 5. Cross-cutting concerns are ad hoc

Analytics, chat, forms, scroll behavior, and localization are wired in component files instead of dedicated app-level modules.

Result:

- hidden coupling
- harder debugging
- brittle future experimentation

## Current Backend Separation

There is no clear frontend/backend boundary yet.

Today, the frontend directly owns several responsibilities that should eventually sit behind a backend or backend-like interface:

- lead submission orchestration
- Telegram integration
- Google Sheets integration
- analytics bootstrapping
- chat widget integration configuration

This is acceptable for a prototype, but not for a scalable product architecture.

## Recommended Target Architecture

For scale, redesign, and Supabase adoption, move toward a feature-oriented architecture with a dedicated data boundary.

### Suggested structure

```text
src/
  app/
    layout/
    providers/
    router/
    config/
  features/
    home/
    academics/
    admissions/
    affiliations/
    events/
    contact/
    chat/
  shared/
    ui/
    hooks/
    lib/
    styles/
    config/
    types/
  data/
    clients/
    repositories/
    services/
    mappers/
  content/
    programs/
    faq/
    partners/
    navigation/
  integrations/
    analytics/
    botpress/
    telegram/
    sheets/
    supabase/
```

### Folder responsibilities

#### `app/`

Owns application shell concerns:

- router setup
- app-wide providers
- layout composition
- environment-level configuration

#### `features/`

Owns feature-level UI and behavior:

- page sections
- route views
- feature-specific hooks
- feature controller components

#### `shared/`

Owns reusable primitives:

- buttons, cards, form controls, layout primitives
- generic hooks
- utility functions
- design-system level styles

#### `content/`

Owns structured content that is not raw UI:

- program definitions
- FAQ schemas
- event metadata
- navigation models

This should gradually replace large structural content being embedded inside translation JSON.

#### `data/`

Owns the frontend-facing data access layer.

This is the key layer for Supabase now and a custom backend later.

Recommended internal responsibilities:

- `data/clients/`
  - low-level client creation such as Supabase browser client or future API client
- `data/repositories/`
  - data-source specific implementations like `supabaseLeadRepository`
- `data/services/`
  - app-facing use cases like `submitLead`, `listPrograms`, `getAdmissionsFaq`
- `data/mappers/`
  - shape conversion between DB records, API payloads, and UI/domain models

Important rule:

Components should not call Supabase directly. Components should talk only to `data/services/*` or feature hooks built on top of them.

#### `integrations/`

Owns third-party implementation details that are not core UI:

- analytics providers
- chat providers
- notification providers
- adapter logic for Telegram or Google Sheets if still needed during transition

## Supabase-First, Backend-Ready Approach

Use Supabase as an infrastructure provider, not as your frontend architecture.

### Short-term

- use Supabase for database, auth, storage, and possibly Edge Functions
- isolate Supabase usage inside `data/clients` and `data/repositories`
- expose stable app-facing service functions to the rest of the frontend

### Long-term

When a custom backend is introduced:

- keep feature components unchanged
- replace repository implementations
- keep service contracts stable
- move privileged workflows to backend APIs

This means the future migration should mostly happen behind the `data/` layer instead of across the entire UI tree.

### Example migration-safe flow

Current component contract:

```text
ContactForm -> useSubmitLead -> data/services/submitLead
```

Today:

```text
submitLead -> supabaseLeadRepository -> Supabase table / Edge Function
```

Later:

```text
submitLead -> backendLeadRepository -> custom backend API
```

The UI contract stays the same.

## Recommended Boundaries

### Frontend should own

- rendering
- route composition
- client-side validation
- optimistic UI and loading states
- feature interaction logic

### `data/` layer should own

- reading and writing remote data
- selecting the active data source
- payload mapping and normalization
- caching strategy if introduced later

### Backend or privileged layer should own

- secrets
- CRM integrations
- messaging integrations
- privileged writes
- anti-spam and abuse protection
- audit logging
- retry and queue behavior

## Code-Level Issues Worth Fixing Early

### `src/routes/Router.jsx`

- `useEffect` is used but not imported.
- `GAListener` is placed as a child of `RouterProvider`, which does not render arbitrary children the way this file expects.

### `src/components/header/Header.jsx`

- `Math.min(scrollY / 0, 0.9)` divides by zero, so the opacity logic is effectively broken.

### `src/components/contact/FormTelegram.jsx`

- The Telegram bot token is used from browser-exposed env vars, which is not safe for a public frontend.
- The form component currently mixes UI, tracking of UTM params, remote submission orchestration, and success navigation in one file.

## Suggested Evolution Path

### Phase 1: Stabilize

- fix router and analytics wiring
- introduce `data/` and `integrations/` folders
- move lead submission behind a Supabase-backed service boundary
- extract app providers for analytics, i18n, and chat

### Phase 2: Reorganize

- create `app`, `features`, `shared`, `content`, and `data` top-level structure
- move route-specific UI into feature folders
- reduce `components/*` to reusable primitives only

### Phase 3: Redesign foundation

- define typography, spacing, color, radius, and motion tokens
- build reusable primitives for buttons, cards, sections, nav, form controls, and banners
- replace inline styles with tokenized variants

### Phase 4: Content and backend scale

- define structured content models for programs, FAQs, events, and partner data
- keep locale files for translation only, not primary content modeling
- replace transitional integrations with backend-owned workflows as needed

## Bottom Line

This app should evolve into a feature-based frontend with a dedicated `data/` layer. That gives you a clean way to adopt Supabase now and swap in a custom backend later without rewriting the UI architecture.
