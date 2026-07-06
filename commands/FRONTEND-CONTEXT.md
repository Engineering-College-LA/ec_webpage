# Frontend Context

## Installed Skills

The following Codex skills were installed to strengthen frontend and architecture work:

### Matt Pocock skills

- `ask-matt`
- `code-review`
- `codebase-design`
- `diagnosing-bugs`
- `domain-modeling`
- `grill-with-docs`
- `implement`
- `improve-codebase-architecture`
- `prototype`
- `research`
- `resolving-merge-conflicts`
- `setup-matt-pocock-skills`
- `tdd`
- `to-issues`
- `to-prd`
- `triage`

### UI/UX skill

- `ui-ux-pro-max`

Restart Codex after installation if you want the app to pick up newly installed skills in future sessions.

## Current App Snapshot

- App type: marketing + admissions website for E|C Engineering College
- Runtime: React 18 + Vite
- Router: `react-router-dom` with `createBrowserRouter`
- Styling: Tailwind CSS plus global CSS utilities and a few inline styles
- Localization: `i18next` with English and Russian JSON dictionaries
- State management: local React state plus small local `Context` usage in header
- Motion/UI libs: `framer-motion`, `lucide-react`, `sonner`
- External integrations:
  - Google Analytics 4
  - Telegram bot submission endpoint
  - Google Sheets form sink
  - Botpress chat widget

## Important Source Files

- App bootstrap: `src/main.jsx`
- Routing: `src/routes/Router.jsx`
- Global layout: `src/components/layouts/BaseLayout.jsx`
- Global styles: `src/index.css`
- Tailwind tokens: `tailwind.config.js`
- Localization init: `src/i18n.js`
- Navigation/footer config: `src/config/constants.js`
- Home page composition: `src/pages/home/Home.jsx`
- Lead form: `src/components/contact/FormTelegram.jsx`
- Chat widget: `src/components/chat-bot/ChatBot.jsx`

## High-Level Observations

- The app is currently page-composed, not feature-composed.
- Most product content lives inside translation JSON and JSX markup.
- Shared UI primitives exist, but there is not yet a formal design system.
- External side effects are triggered directly from client components.
- There is not yet a dedicated app data layer between UI and remote systems.
- The app is good for rapid marketing iteration, but it will become harder to scale as pages, locales, and lead flows grow.

## Target Direction

The recommended medium-term structure is:

```text
src/
  app/
  features/
  shared/
  data/
  content/
  integrations/
```

The most important addition is `data/`, which should isolate Supabase usage now and allow a future custom backend to replace it behind stable service contracts.
