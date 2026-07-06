# Scaling And Redesign Plan

## Primary Goal

Scale the app without letting the redesign turn into a cosmetic rewrite on top of unstable foundations.

## What We Should Preserve

- React + Vite setup
- Tailwind as the implementation layer
- route-based code splitting
- i18n support
- existing content footprint and conversion paths

## What We Should Change

### 1. Introduce a design system layer

Create a shared UI foundation before redesigning pages:

- typography scale
- spacing scale
- semantic colors
- elevation/shadow rules
- border radius rules
- motion rules
- layout containers
- reusable section patterns

### 2. Move from page assembly to feature ownership

Examples:

- admissions content, CTA logic, and scholarship UI should live in one `features/admissions` area
- academics program cards and detail pages should share one structured content model
- contact and lead capture should become a dedicated feature, not scattered reusable markup

### 3. Add a backend boundary for lead capture

Current browser-to-Telegram and browser-to-Google-Sheets submission is fine for a prototype but not for a scaled public app.

Replace with:

- frontend form
- server endpoint or serverless function
- adapter(s) for Telegram, Sheets, CRM, email, analytics

Benefits:

- hides secrets
- allows validation and anti-spam
- enables monitoring and retries

### 4. Separate content from rendering

Program cards, event promos, FAQs, and partner data should move into structured content modules.

This unlocks:

- easier translation
- easier page redesign
- future CMS migration
- reusable rendering across web/app/landing experiences

## Recommended Information Architecture Direction

Use a clearer content hierarchy:

1. Brand and college story
2. Programs and outcomes
3. Admissions and scholarships
4. Events and campaigns
5. Contact and conversion

That hierarchy should drive both routing and component design.

## Suggested Redesign Sequence

1. Define visual system and tokens
2. Rebuild global shell: header, footer, containers, section rhythm
3. Rebuild conversion-critical flows: hero, programs, admissions, contact
4. Rebuild secondary informational pages
5. Normalize mobile behavior and accessibility states

## Success Criteria

- new pages can be assembled from shared primitives
- visual consistency is enforced by tokens, not memory
- feature folders own behavior and content mapping
- integrations are isolated behind adapters
- adding a new locale or program does not require editing many unrelated files
