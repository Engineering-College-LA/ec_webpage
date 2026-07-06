# Styles And Design System Context

## Current Styling Stack

- Tailwind CSS for utility-first styling
- `src/index.css` for global classes and custom utility classes
- `tailwind.config.js` for custom tokens and theme extensions
- some inline styles inside components

## Main Files

- Global stylesheet: `src/index.css`
- Tailwind config: `tailwind.config.js`
- App entry import: `src/main.jsx`

## How Styles Are Organized Today

### Global base rules

`src/index.css` sets:

- margin/padding reset
- `box-sizing`
- root font family
- smoothing and text rendering
- smooth scroll behavior

### Reusable global classes

`src/index.css` also defines reusable classes such as:

- `.max-container`
- `.page`
- `.page-style`
- `.page-title`
- `.page-subtitle`
- `.page-paragraph`
- `.section-title`
- `.flex-center`
- `.question`

These act as an informal design system.

### Tailwind theme extensions

`tailwind.config.js` currently defines:

- custom brand colors
- background image tokens
- custom keyframes and animations
- custom box shadows
- one custom utility plugin for shimmer gradient

## Current Gaps

- tokens are split across Tailwind config, CSS classes, and inline styles
- semantic naming is partial
- component variants are not systematized
- typography and spacing rules are not yet formalized as a design system
- some components still use direct style objects instead of reusable abstractions

## Recommended Future Ownership

Move toward:

### `shared/styles/`

Owns:

- token definitions
- CSS variables
- app-level utility layers
- animation primitives

### `shared/ui/`

Owns:

- reusable design-system components
- variant APIs
- layout primitives

### Tailwind config

Should continue to own low-level token registration, but the design language should be defined semantically, not page by page.

## Recommended Newcomer Rule

When changing styling:

1. prefer reusable tokens over hardcoded values
2. prefer shared UI primitives over page-local styling
3. avoid adding new inline styles unless there is a strong reason
4. if a pattern repeats twice, consider promoting it into `shared/ui` or `shared/styles`
