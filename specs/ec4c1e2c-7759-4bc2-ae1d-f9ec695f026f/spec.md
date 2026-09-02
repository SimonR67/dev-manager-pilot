   # Spec: Add company name note above footer

Status: draft
Job: ec4c1e2c-7759-4bc2-ae1d-f9ec695f026f
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a short note displayed just above the site footer that states the website's company name, "Alpha Biscuits". This is a simple branding/attribution addition — likely intended to make it clear to visitors what company operates the site.

The request is ambiguous in a few ways, and the following interpretation has been chosen:
- "A note" is interpreted as a single line of static text (e.g., "© Alpha Biscuits" or "Alpha Biscuits" — see Open Questions for exact wording).
- "Just above the footer" is interpreted as: within the main page layout, positioned immediately before the existing `<footer>` element (or equivalent footer component), so it appears as the last piece of content before the footer on every page that renders the shared layout.
- This note is static text, not a dynamic/configurable value pulled from settings or a database — it is hardcoded in the layout/template, since no such config mechanism was requested.

## 2. Scope

- Add a single line of text (e.g., "Alpha Biscuits") to the shared page layout/component, positioned immediately above the footer element.
- The note appears on every page that uses the standard layout with a footer.
- Basic, minimal styling consistent with the surrounding footer area (e.g., small, muted text) so it doesn't visually clash — no new design system or theming work.
- Text is static and hardcoded in the codebase (in the layout/footer component file).

## 3. Out of scope

- Making the company name configurable via settings, environment variables, admin UI, or database.
- Adding additional company information (address, contact details, social links, legal disclaimers, copyright year logic, etc.) beyond the single stated name.
- Redesigning or restructuring the existing footer.
- Adding this note to emails, PDFs, or any non-web-page surfaces.
- Internationalization/translation of the note text.
- Any backend or API changes — this is purely a front-end/template text addition.
- Adding the note to pages that do not use the shared footer layout (e.g., standalone/print views), unless such pages don't exist in the current app.

## 4. Edge cases and error behavior

- Invalid input: not applicable — there is no user input involved; this is static text.
- Dependency unavailable: not applicable — no external dependency or service call is required to render static text.
- Pages without a footer component: if a page renders without the shared footer, no note should be forced onto it; the note only appears where the footer already appears.
- Responsive/mobile layouts: the note should remain readable and not overlap or break layout on small screen widths — verify it wraps or truncates gracefully rather than causing layout shift.
- Long text wrapping: since "Alpha Biscuits" is short, wrapping is