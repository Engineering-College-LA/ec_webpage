# Security Audit Brief

## Purpose

Use this document to assign and run a security audit for the E|C Engineering College web app.

This audit should cover:

- the current React/Vite frontend
- current third-party integrations
- planned Supabase adoption
- future migration readiness for a custom backend

The goal is to identify security weaknesses, confirm that current flows are safe enough for public use, and produce a prioritized remediation list.

## Project Context

Current app characteristics:

- React 18 + Vite frontend
- `react-router-dom` SPA routing
- Tailwind CSS styling
- `i18next` localization
- current lead submission from the browser
- Botpress chat widget
- Google Analytics
- likely future `Supabase` integration
- future target architecture with `src/data/` as the data boundary

Important architectural context:

- There is not yet a clean frontend/backend separation.
- Some remote side effects currently happen directly in UI components.
- The app is expected to grow, so the audit should evaluate both current risk and future migration safety.

## Current High-Risk Areas To Review First

### 1. Browser-exposed integration flow

Review `src/components/contact/FormTelegram.jsx`.

Why:

- the client submits directly to Telegram
- the client submits directly to Google Sheets
- browser-readable env vars are involved
- this may expose secrets or enable abuse

### 2. Third-party widget exposure

Review `src/components/chat-bot/ChatBot.jsx`.

Why:

- third-party chat widget loads in the client
- widget config, origin trust, and data exposure should be reviewed

### 3. Future data boundary

Review the planned architecture in:

- `commands/ARCHITECTURE-OVERVIEW.md`
- `commands/STATE-AND-DATA-FLOW-CONTEXT.md`

Why:

- Supabase should be introduced behind a stable data layer
- future backend migration should not require security-sensitive rewrites across the whole UI

## Audit Objectives

The assigned auditor should verify:

1. no secrets or privileged credentials are exposed to the browser
2. public endpoints cannot be abused for spam, fraud, or automated submission
3. third-party scripts and widgets do not create obvious security or privacy risks
4. future Supabase integration can be added with clear least-privilege boundaries
5. the app can evolve toward a backend-owned privileged layer without architectural conflict

## Audit Scope

### In scope now

- frontend code in `src/`
- environment variable usage
- form submission flows
- third-party integrations
- analytics setup
- localization resource loading
- routing behavior
- static asset exposure
- deployment configuration if available

### In scope soon

- Supabase client configuration
- Supabase auth model
- Row Level Security planning
- storage policies
- Edge Functions or serverless handlers
- service-role key handling

### Out of scope unless later added

- native mobile app security
- infrastructure not owned by this repo
- internal admin systems not connected to this app

## Required Deliverables

The auditor should produce:

### 1. Findings report

Each finding should include:

- title
- severity: `critical`, `high`, `medium`, `low`
- affected area
- reproduction steps
- business impact
- recommended remediation

### 2. Architecture risk summary

A short summary covering:

- whether current frontend/backend separation is acceptable
- whether Supabase can be introduced safely
- what must move behind backend or Edge Function boundaries first

### 3. Remediation plan

A prioritized list of fixes with:

- immediate actions
- short-term actions
- longer-term architecture actions

## Security Test Checklist

### Secrets and configuration

- check whether any secrets are exposed through `VITE_*` env vars
- check build output for leaked tokens, IDs, or hidden config
- confirm that only publishable browser-safe keys are ever shipped to the client
- verify whether Telegram, Google Sheets, or future Supabase credentials can be extracted from the browser

### Input handling and form abuse

- test contact form validation bypass
- test malicious payloads in name, phone, and message fields
- test extremely large input payloads
- test repeated submissions and bot abuse
- check whether rate limiting, CAPTCHA, bot detection, or throttling exist
- confirm whether reflected or stored XSS is possible through submitted content

### Client-to-third-party integrations

- inspect direct browser calls to Telegram
- inspect direct browser calls to Google Sheets or Apps Script endpoints
- verify whether unauthenticated public abuse is possible
- verify whether error messages leak operational detail
- review whether third-party integrations should move behind a backend or Edge Function

### Authentication and authorization planning

- if Supabase is introduced, verify planned auth boundaries
- confirm that anonymous/public users cannot perform privileged writes
- review how roles will map to Supabase RLS policies
- verify that service-role credentials will never be placed in the frontend

### Supabase readiness

For the future Supabase phase, verify that:

- the frontend will use only anon/public keys
- all sensitive actions are routed through secure policies or server-side functions
- Row Level Security is enabled for all exposed tables
- storage buckets use correct access controls
- audit logs or traceability exist for sensitive writes

### Routing and client behavior

- test route handling for unexpected input and malformed URLs
- review redirects and thank-you flows for abuse or open redirect patterns
- confirm no sensitive state is trusted from query params without validation

### Third-party script and widget review

- review Botpress widget exposure and configuration
- review analytics scripts and data collection behavior
- check CSP compatibility and whether a Content Security Policy should be added
- review external image or script sources for unnecessary trust expansion

### Browser security headers and deployment

If deployment access is available, verify:

- `Content-Security-Policy`
- `X-Frame-Options` or equivalent framing policy
- `Referrer-Policy`
- `Permissions-Policy`
- `Strict-Transport-Security`
- proper HTTPS enforcement
- cookie flags if cookies are later introduced

### Dependency and supply-chain review

- audit direct npm dependencies
- check for known vulnerable packages
- review whether unused libraries can be removed
- inspect third-party packages that process user data or embed external scripts

### Privacy and data handling

- identify what personal data is collected
- verify where it is sent and stored
- verify consent or disclosure requirements for analytics and chat tooling
- check whether logs or third parties receive unnecessary PII

## Recommended Audit Method

The assigned person should use a mix of:

- manual code review
- browser devtools inspection
- network request inspection
- dependency vulnerability scanning
- environment/config review
- abuse-case testing against forms and public endpoints

## Suggested Severity Priorities For This Project

Treat these as especially important:

- exposed secrets
- public write endpoints without abuse protection
- insecure future Supabase policy design
- any path that allows spam, impersonation, or data leakage
- any client-side trust of privileged operations

## Expected Output Format

Use a report structure like this:

```text
1. Executive Summary
2. Scope
3. Methodology
4. Findings
5. Architecture Risks
6. Remediation Priorities
7. Go / No-Go Recommendation
```

## Success Criteria

This audit is successful if it answers:

- Is the current public frontend safe enough to operate?
- What must be fixed before integrating Supabase?
- Which flows must move behind backend or Edge Function boundaries?
- What policies and guardrails are required so the future architecture remains secure?

## Notes For The Auditor

- Do not assume the current frontend data flows are acceptable just because they work.
- Evaluate the app as both a live public website and a growing product platform.
- Prioritize migration-safe recommendations that support the planned `data/` layer and future backend separation.
