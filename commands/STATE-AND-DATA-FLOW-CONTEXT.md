# State And Data Flow Context

## Current State Management

This app currently uses lightweight local state patterns.

### What exists today

- `useState` for component-local UI state
- `useEffect` for lifecycle and side effects
- `useContext` in the header for mobile menu state
- `react-hook-form` for form state
- `react-router-dom` location state for route-aware behavior
- `i18next` as global localization runtime

There is no dedicated global state manager like Redux, Zustand, or Jotai in the app today.

## Current State Ownership Examples

### Local UI state

- app modal open/close in `Navbar.jsx`
- chat open/close in `ChatBot.jsx`
- section highlight state in `Admission.jsx`

### Small shared UI state

- mobile menu state in `HeaderContext`

### Form state

- contact form inputs and errors via `react-hook-form`

### Route-driven state

- pathname and hash behavior in pages and layout

## Current Data Flow Problems

- remote side effects are triggered from UI components
- service boundaries do not exist yet
- translation files also carry structural content responsibilities
- there is no standard place for loading, error, success, and remote cache logic

## Recommended Future Ownership

### UI state

Keep local when possible:

- modal visibility
- accordion open state
- tab selection
- transient animation state

### Shared app state

Only introduce a global state manager if the app truly grows into cross-page client state.

Examples that may justify a global manager later:

- authenticated session UX state
- multi-step application flow state
- cross-page filters
- persistent campaign context

### Remote data state

Do not store this ad hoc in random components.

Use:

- `data/services/*`
- feature hooks like `usePrograms`, `useAdmissionsFaq`, `useSubmitLead`
- optionally a query library later if the app begins to read more dynamic backend data

## Supabase-Compatible Data Flow

Recommended flow:

```text
UI Component
  -> feature hook
  -> data/service
  -> repository
  -> Supabase client
```

Future backend flow:

```text
UI Component
  -> feature hook
  -> data/service
  -> repository
  -> backend API client
```

The feature hook and UI component should not care which backend implementation is active.

## Recommended Newcomer Rule

Before adding state, ask:

1. is this only for one component
2. is this shared across one feature
3. is this remote data
4. is this truly app-global

That usually tells you whether the state belongs in local component state, a feature hook, the `data/` layer, or a future global manager.
