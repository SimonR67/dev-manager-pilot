# Plan: Add company name note above footer

Status: draft
Job: a65be394-16e5-4b9d-9937-ff71e8a46367
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/a65be394-16e5-4b9d-9937-ff71e8a46367/spec.md

## 1. Definition of done

- A text note reading exactly "Alpha Biscuits" appears immediately above the footer on every page/layout where the footer currently renders.
- The note is static text (no dynamic config), unless an existing company-name config/constant already exists, in which case that value is reused instead of a hardcoded string.
- The note is styled as small, muted text — visually subordinate to the footer, consistent with existing footer typography — and does not break existing responsive footer layout.
- If the footer is rendered from a single shared component, the note is added there once (single source of truth). If footer markup is duplicated across multiple templates/pages, the note is added consistently to each instance, and this duplication is flagged to the reviewer.
- No other footer content, links, layout, branding elsewhere in the app, legal/copyright text, i18n, or new config/admin UI is introduced.

## 2. File map

| File | Change |
|---|---|
| src/components/Footer/Footer.tsx (or equivalent shared footer component, exact path TBD after repo inspection) | Add a small `<p>`/`<span>` element rendering "Alpha Biscuits" immediately above the existing footer content/markup |
| src/components/Footer/Footer.module.css (or equivalent styles file colocated with footer, exact path TBD) | Add a minimal, muted text style (small font-size, muted color) for the new note, reusing existing footer typography tokens/classes if available |
| src/components/Footer/Footer.test.tsx (or equivalent existing footer test file, exact path TBD) | Add/extend test asserting the note text is rendered and positioned above the footer content |
| (contingency) any additional per-page/template files found to duplicate footer markup | Add the same note to each, if no shared footer component exists — flagged to reviewer per spec edge case |

## 3. User journey

A visitor loads any page of the site that includes the footer (e.g. the homepage, a dashboard page, etc.). As the page renders, just above the footer's existing content (links, copyright, etc.), the visitor sees a small, muted line of text reading "Alpha Biscuits". This appears identically across every page that has a footer, requires no interaction, and does not alter any existing footer functionality, links, or responsive behavior.

## 4. Tasks

- [ ] 1. Inspect the codebase to locate the footer rendering: confirm whether it is a single shared component or duplicated across templates, and check for any existing "company name" config/constant — files