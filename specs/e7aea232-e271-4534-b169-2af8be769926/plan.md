# Plan: Add Company Name Note Above Footer

Status: draft
Job: e7aea232-e271-4534-b169-2af8be769926
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/e7aea232-e271-4534-b169-2af8be769926/spec.md

## 1. Definition of done

- A small static text note reading "Quake World" renders directly above the footer component on every page/view where the footer currently appears.
- The note does not render on any page/route where the footer itself is not rendered (1:1 tie to footer presence).
- If a site config/constants file already exists with a suitable pattern for this kind of string, the company name value is sourced from there; otherwise it is a hardcoded default of "Quake World." Either way, a missing/empty config value falls back to the hardcoded default or omits the note gracefully — it never renders blank or throws.
- The note's styling (font, color, spacing) is visually consistent with the surrounding design system and does not alter the existing footer's content, links, or layout.
- The note renders correctly without overlap/clipping/breakage on both desktop and mobile viewport widths.
- No console errors or build warnings are introduced.
- No links, icons, or interactive elements are added; no i18n, no copyright boilerplate beyond the company name, no admin/CMS configurability.

## 2. File map

| File | Change |
|---|---|
| src/components/Footer.tsx (or equivalent existing footer component) | No structural changes; used as anchor point/reference for placement of new note, confirm it is not modified beyond adjacent placement |
| src/components/FooterNote.tsx (new) | New small presentational component rendering the static "Quake World" text note |
| src/layouts/MainLayout.tsx (or wherever `<Footer />` is currently rendered) | Import and render `<FooterNote />` immediately above `<Footer />` |
| src/config/siteConfig.ts (if it exists) | Add a `companyName: "Quake World"` field if a config/constants pattern already exists in the repo; otherwise skip this file |
| src/styles/FooterNote.module.css (or existing shared stylesheet, per project convention) | Minimal styling to match font/spacing conventions of the site, responsive-safe |
| tests/components/FooterNote.test.tsx (new) | Unit test(s) for the new component |
| tests/layout/MainLayout.test.tsx (or equivalent existing layout test) | Test(s) verifying note appears only where footer appears |

## 3. User journey

A visitor loads any page of the site that currently displays the footer (e.g., the homepage). As they scroll to the bottom of the page, directly above the footer they see a small, static line of text reading "Quake World," styled subtly and consistently with the rest of the page — not part of the footer itself, and not interactive. On a page that intentionally omits the footer (e.g., a modal or print view), the visitor sees neither the footer nor this note. On mobile, the same note appears in the same relative position (just above the footer), stacked normally with no layout breakage. No footer links or content are affected by this addition.

## 4. Tasks

- [ ] 1. Locate the existing footer component and its rendering site(s) in the layout, and identify whether a site config/constants file already stores similar static strings — files: src/components/Footer.tsx, src/layouts/MainLayout.tsx, src/config/siteConfig.ts (read-only investigation, no test; documented findings inform tasks 2–3)
- [ ] 2. Create the `FooterNote` component that renders "Quake World" as static text, sourcing the value from `siteConfig.companyName` if that config pattern exists, otherwise using a hardcoded default, with graceful fallback if the config value is missing/empty — files: src/components/FooterNote.tsx, src/config/siteConfig.ts (if applicable) — test: unit test renders `FooterNote` and asserts the text "Quake World" is present in the DOM; a second test simulates a missing/empty config value and asserts the component still renders the hardcoded default instead of blank or throwing
- [ ] 3. Wire `FooterNote` into the layout immediately above `Footer` wherever it currently renders — files: src/layouts/MainLayout.tsx (and any other layout that independently renders `Footer`) — test: render the layout and assert `FooterNote` appears in the DOM immediately preceding the `Footer` element (DOM order check)
- [ ] 4. Verify the note is absent on pages/routes that intentionally do not render the footer — files: relevant page/route component that omits the footer (e.g., modal/embed/print view), corresponding test file — test: render that page/route and assert neither `Footer` nor `FooterNote` is present in the DOM
- [ ] 5. Apply styling to `FooterNote` for visual consistency (font family, muted color, spacing) matching existing design conventions, and confirm responsive behavior — files: src/styles/FooterNote.module.css (or project's existing styling convention) — test: snapshot or visual regression test (or manual viewport check documented) confirming no overlap/clipping at a mobile breakpoint (e.g., 375px width) and a desktop breakpoint (e.g., 1280px width)
- [ ] 6. Confirm no regressions to existing footer content/links/behavior and no new console errors or build warnings — files: none (verification only) — test: run full existing footer/layout test suite plus a build/lint check; assert all pass with zero new warnings/errors

## 5. Test plan

- Run the full existing test suite for layout and footer-related components to confirm no regressions to footer content, links, or behavior.
- Run the new `FooterNote` unit tests (task 2) and layout integration tests (tasks 3–4) together to confirm the note renders exactly where the footer renders and nowhere else.
- Manually (or via automated viewport testing) verify rendering at common mobile and desktop breakpoints per task 5, confirming no layout breakage.
- Run a production build and lint pass to confirm no new console errors or build warnings are introduced by the new component.
- Do a final manual pass across all pages that currently render the footer (per the file map/investigation in task 1) to confirm the note appears consistently everywhere the footer is present.

## 6. Out of scope (carried from spec)

- Redesigning, restyling, or restructuring the existing footer itself.
- Adding a logo, image, or icon alongside the company name.
- Making the note configurable via an admin panel, CMS, or user-facing settings UI.
- Internationalization/localization of the note text.
- Adding legal/copyright boilerplate (e.g., "© 2024 Quake World. All rights reserved.") — only the bare company name is in scope.
- Changing footer content, links, or layout beyond adding this one note above it.
- Adding this note to emails, PDFs, or any non-web-page surface.
- SEO/meta-tag changes referencing the company name (e.g., `<meta>` tags, structured data).