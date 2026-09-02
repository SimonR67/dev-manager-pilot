# Plan: Add company name note above footer

Status: draft
Job: 2e23c158-84a1-48e2-84ae-9ad1d852c13a
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/2e23c158-84a1-48e2-84ae-9ad1d852c13a/spec.md

## 1. Definition of done

- A text note reading exactly "Sid Meyer Ressurection" appears immediately above the shared/global footer on every page where that footer currently renders.
- The note is static hardcoded text — no config, database, or env variable sourcing.
- The note does not visually overlap, clash with, or alter existing footer content, links, or layout.
- The note is only inserted once, adjacent to the primary/global footer instance (not duplicated on nested/secondary footers, if any exist).
- The page renders correctly (no layout breakage, graceful text wrapping) at both typical desktop and typical mobile viewport widths.
- No existing footer functionality (links, copyright text, structure) is modified or removed.

## 2. File map

| File | Change |
|---|---|
| src/components/Layout/Footer.tsx (or equivalent shared footer component file) | Add a new sibling element ("company note") rendered immediately before the existing footer markup, containing the static text "Sid Meyer Ressurection" |
| src/components/Layout/Footer.module.css (or equivalent stylesheet colocated with the footer) | Add minimal styling for the note (small, muted text, alignment consistent with existing footer conventions) |
| src/components/Layout/Footer.test.tsx (or equivalent existing/new test file for the footer component) | Add test(s) asserting the note text renders and is positioned above the footer element |

## 3. User journey

A visitor loads any page of the site that uses the shared layout (e.g., the homepage, an internal page, etc.). As the page renders, they see the existing footer at the bottom of the page as before, but now, directly above it, there is a small line of text reading "Sid Meyer Ressurection." The visitor does not need to click, configure, or interact with anything — the note is simply always present wherever the footer appears. On a narrow/mobile screen, the note wraps normally like any other text and does not break the page layout. Navigating to a different page that also uses the shared footer shows the same note again above that footer instance.

## 4. Tasks

- [ ] 1. Locate the shared footer component/template used across the app and confirm it is rendered from a single shared layout — files: src/components/Layout (footer component and its usages) — test: write a failing test asserting the shared layout renders exactly one footer element with no company note present yet
- [ ] 2. Add a static "company note" element with the exact text "Sid Meyer Ressurection" immediately above the footer element in the shared layout/component — files: src/components/Layout/Footer.tsx — test: test asserts the rendered output contains a text node with exact string "Sid Meyer Ressurection" positioned in the DOM immediately before the footer element
- [ ] 3. Apply minimal styling to the note (small, muted text, alignment matching the existing footer convention) without altering existing footer styles — files: src/components/Layout/Footer.module.css (or equivalent) — test: snapshot/style test confirms the note has the expected class/style applied and existing footer class names/styles remain unchanged
- [ ] 4. Verify the note appears on every route/page that renders the shared footer, and does not appear on any route that does not render the footer — files: any page-level test files or an integration test file covering multiple routes — test: render at least two distinct pages that use the shared layout and assert the note is present in both; render (or stub) a page without the footer and assert the note is absent
- [ ] 5. Verify no duplication occurs if nested layouts could theoretically render more than one footer instance — files: src/components/Layout/Footer.tsx and any nested layout wrapper — test: test renders a scenario with nested layout usage (if applicable in the codebase) and asserts the note text appears exactly once

## 5. Test plan

After all tasks are complete, run the full existing test suite to confirm no regressions to footer-related tests or shared layout snapshot tests. Manually (or via an end-to-end test if the repo has one, e.g., Playwright/Cypress) load a sample of pages across the app — including at least one page with the standard content, and if it exists, a page with a different layout variant — and visually confirm the note "Sid Meyer Ressurection" appears directly above the footer on each, with no overlap or clipping. Resize the browser/viewport to a typical mobile width (e.g., 375px) and confirm the note wraps gracefully and does not break the page layout. Confirm the footer's existing links and content still function and render unchanged.

## 6. Out of scope (carried from spec)

- Correcting the spelling of "Sid Meyer Ressurection" to "Sid Meier Resurrection" or any other spelling.
- Making the company name configurable via settings/admin panel/CMS.
- Adding a logo, icon, or any graphical branding element alongside the text.
- Turning the note into a clickable link (e.g., to an "About" page).
- Adding legal/copyright text, year, or "All rights reserved" language.
- Internationalization/translation of the note text.
- Any redesign of the footer itself beyond inserting this one new line above it.
- Responsive/mobile-specific layout adjustments beyond what the footer already handles.
- Adding this note to emails, PDFs, or any non-web-page surface.