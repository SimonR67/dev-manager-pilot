# Plan: Add company name note above footer

Status: draft
Job: ebf15a62-4433-4118-85e3-687290749b12
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/ebf15a62-4433-4118-85e3-687290749b12/spec.md

## 1. Definition of done

- A static text note reading "Alpha Biscuits" is rendered immediately above the footer element.
- The note appears on every page/view where the footer currently renders (achieved by placing it in the shared footer/layout component, not per-page).
- The note's styling matches the site's existing typography/theme and is visually separated from the footer content (e.g. via spacing/subtle styling), without altering the footer's existing content, links, or layout.
- The text is hardcoded — no props, config, CMS field, or i18n hooks are introduced for it.
- The note is plain, non-interactive text (no link, no click handler, no analytics).
- Existing mobile/desktop layouts remain visually intact (no overflow/breakage introduced).

## 2. File map

| File | Change |
|---|---|
| src/components/Footer.tsx (or equivalent existing footer/layout component) | Add a new line/element rendering "Alpha Biscuits" immediately above the existing footer content, with minimal styling to visually separate it |
| src/components/Footer.css / Footer.module.css (or equivalent site stylesheet used by the footer component) | Add minimal styling for the note (spacing, font matching site theme) |
| src/components/__tests__/Footer.test.tsx (or equivalent test location matching project convention) | New/updated test asserting the note renders above the footer on every render of the layout/footer component |

## 3. User journey

A visitor loads any page of the site. As the page renders, the shared layout/footer component mounts, displaying the existing footer as before, but now with a single line of text reading "Alpha Biscuits" positioned directly above it. The visitor sees this on every page they navigate to, since it's part of the shared footer component rather than a single page. The text is static — it doesn't link anywhere, doesn't change based on data, and doesn't interfere with any existing footer links or layout. On mobile and desktop, the page layout still looks correct, with the note fitting naturally above the footer without causing overflow or misalignment.

## 4. Tasks

- [ ] 1. Locate and confirm the shared footer/layout component used across all pages — files: src/components/Footer.tsx (or wherever the footer is defined/imported from a layout wrapper) — test: write a test that renders the layout/footer component in isolation and asserts the existing footer content still renders unchanged (