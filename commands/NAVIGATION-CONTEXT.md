# Navigation Context

## Current Navigation Ownership

Navigation is currently driven by a mix of route definitions, layout composition, and config-based link metadata.

### Main files

- Router definition: `src/routes/Router.jsx`
- Shared layout shell: `src/components/layouts/BaseLayout.jsx`
- Header wrapper: `src/components/header/Header.jsx`
- Navbar UI: `src/components/header/Navbar.jsx`
- Mobile navigation: `src/components/header/MobileMenu.jsx`
- Navigation config: `src/config/constants.js`
- Footer links: `src/config/constants.js`

## How Navigation Works Today

### Route layer

`src/routes/Router.jsx` is the top-level source of truth for app routes.

Current route groups:

- `/`
- `/about`
- `/academics`
- `/academics/software-engineering`
- `/academics/cyber-security`
- `/academics/management-in-it`
- `/academics/industrial-design`
- `/academics/marketing`
- `/affiliations`
- `/career-test`
- `/admissions`
- `/events/young-innovators-olympiad`
- `/thank-you`
- `/ec_app`
- `*`

### Layout layer

`BaseLayout` wraps most routes with:

- fixed header
- footer
- route outlet
- toaster
- scroll-to-top behavior on pathname changes

### Header layer

`Header` provides a small local `HeaderContext` for mobile menu state and renders:

- `Navbar`
- `MobileMenu`

### Link metadata

`src/config/constants.js` currently stores:

- `navLinks`
- footer column data
- helpful links
- contact links

This is effectively acting as a lightweight navigation content model.

## Current Gaps

- Route definitions and navigation metadata are separate but loosely coupled.
- Footer and header links are config-driven, but there is no central typed navigation model.
- Hash navigation is handled ad hoc in page components such as `Home.jsx` and `Admission.jsx`.
- There is no single place documenting which routes are marketing pages, conversion pages, utility pages, or campaign pages.

## Recommended Future Ownership

Move toward this split:

### `app/router/`

Owns actual route registration and route trees.

### `content/navigation/`

Owns structured navigation metadata:

- primary nav
- footer nav
- CTA destinations
- route labels
- possibly role-based or locale-aware variants later

### `features/navigation/`

Owns rendered navigation UI:

- desktop nav
- mobile nav
- app modal launchers
- sticky section subnav patterns

## Recommended Newcomer Rule

When touching navigation, check these layers in order:

1. `commands/NAVIGATION-CONTEXT.md`
2. route definitions
3. navigation config/content
4. header or footer UI
5. page-level hash navigation behavior
