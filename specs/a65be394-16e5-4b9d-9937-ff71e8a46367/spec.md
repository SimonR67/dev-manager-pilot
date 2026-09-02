   # Spec: Add company name note above footer

Status: draft
Job: a65be394-16e5-4b9d-9937-ff71e8a46367
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The user wants a short note displayed just above the site footer that states the website's company name: "Alpha Biscuits". The purpose appears to be attribution/branding — making it clear which company operates or owns the site.

The request is fairly simple but slightly ambiguous on presentation. Interpretation chosen:
- The note will be a small text line (e.g. "Alpha Biscuits") rendered directly above the existing footer component, on every page that currently renders the footer.
- It will be static text, not a dynamic/configurable value pulled from settings or environment variables, unless the codebase already has an established pattern for footer-adjacent metadata (e.g. an existing "company name" config field), in which case that pattern should be reused instead of hardcoding.
- No specific styling direction was given, so the note will use minimal, unobtrusive styling consistent with the existing footer's typography (small, muted text), rather than a prominent banner.

## 2. Scope

- Add a single line of text reading "Alpha Biscuits" positioned immediately above the footer, on all pages/layouts where the footer currently appears.
- Style the note to be visually subordinate to the footer content (small font size, muted color), consistent with surrounding design.
- If the codebase has a shared layout/footer component, the note is added there so it propagates everywhere the footer is used (single source of truth, not per-page duplication).
- Text content is static: "Alpha Biscuits" (no additional slogan, tagline, or copyright symbol unless trivially matching existing footer conventions, e.g. if the footer already shows "© {year}", the note may optionally sit alongside that pattern — but this is not required).

## 3. Out of scope

- No changes to the footer's existing content, links, or layout beyond adding the new note above it.
- No new configuration system, admin UI, or CMS field for editing the company name dynamically — this is a static text addition.
- No changes to branding elsewhere in the app (page titles, header, favicon, about page, etc.).
- No legal/copyright text (e.g. "© 2024 Alpha Biscuits. All rights reserved.") unless explicitly requested — only the plain company name note as described.
- No internationalization/translation of this text.
- No responsive/mobile-specific redesign beyond ensuring the note doesn't break existing responsive footer layout.

## 4. Edge cases and error behavior

- If there is no single shared footer component (i.e. footer markup is duplicated across multiple pages/templates), the note must be added consistently to each instance — this should be flagged back to the reviewer if discovered, since it increases the size/risk of the change beyond a trivial one-line