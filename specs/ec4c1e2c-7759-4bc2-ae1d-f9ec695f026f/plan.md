# Plan: Add company name note above footer

Status: draft
Job: ec4c1e2c-7759-4bc2-ae1d-f9ec695f026f
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/ec4c1e2c-7759-4bc2-ae1d-f9ec695f026f/spec.md

## 1. Definition of done

- A static text note ("Alpha Biscuits") is rendered immediately above the `<footer>` element in the shared page layout/component.
- The note appears on every page that renders the shared layout with a footer, and does not appear on pages that don't render that footer.
- The note is hardcoded (no config, env var, DB, or admin UI dependency).
- The note has minimal styling consistent with the footer area (small, muted text) and does not break or overflow on narrow/mobile viewports.
- No other footer content, structure, or unrelated pages are modified.

## 2. File map

| File | Change |
|---|---|
| Shared layout component containing the `<footer>` (e.g. `src/components/Layout.jsx` / equivalent shared layout/footer template — exact path to be confirmed by locating the existing `<footer>` usage in the repo) | Add a new element (e.g. `<p class="company-note">Alpha Biscuits</p>`) immediately before the existing `<footer>` element |
| Stylesheet associated with the layout/footer (e.g. `src/components/Layout.css` / `src/styles/footer.css` or equivalent, matching whatever styling approach the footer already uses) | Add minimal styling class (small, muted text) for the new note, consistent with footer styling; ensure it wraps gracefully on small screens |
| Existing layout/footer test file (e.g. `src/components/Layout.test.jsx` or equivalent, if a test file for the layout already exists) | Add/extend tests verifying the note renders above the footer and only where the footer is present |

## 3. User journey

A visitor loads any page of the site that uses the standard shared layout (e.g. the homepage or any content page with a footer). As they scroll to the bottom of the page, just before the footer content (links, copyright, etc.), they see a small, unobtrusive line of text reading "Alpha Biscuits", indicating the company that operates the site. On a page that intentionally does not render the shared footer (e.g. a standalone/print view, if one exists), no such note appears. Resizing the browser to a mobile width, the note remains readable, wraps if needed, and does not overlap or shift other footer content.

## 4. Tasks

- [ ] 1