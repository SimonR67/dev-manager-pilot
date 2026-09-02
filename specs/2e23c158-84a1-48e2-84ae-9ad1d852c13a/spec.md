   # Spec: Add company name note above footer

Status: draft
Job: 2e23c158-84a1-48e2-84ae-9ad1d852c13a
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request asks for a small text note to be added just above the site footer, displaying the website/company name "Sid Meyer Ressurection".

The request is fairly ambiguous about exact wording, styling, and placement details. Interpretation chosen:
- A single line of text (a "note") will be inserted in the layout, positioned immediately above the existing footer element, on every page that currently renders the footer (assuming the footer is a shared/global component).
- The text content will read exactly: "Sid Meyer Ressurection" (spelling preserved as given verbatim in the request, even though it appears to be a misspelling of "Sid Meier"). No correction will be made unless the reviewer confirms it should be fixed.
- No indication was given that this should link anywhere, or be part of a copyright/legal line — it is treated as a simple standalone label/note.

This solves the stated problem: the site currently has no visible company/site name near the footer, and the user wants one added.

## 2. Scope

- Add a new text element (e.g., a `<div>`, `<p>`, or similar) directly above the footer component, in the shared layout/template that renders the footer across the app.
- Display the static text: "Sid Meyer Ressurection".
- Basic minimal styling consistent with the existing footer area (e.g., small text, muted color, centered or left-aligned to match footer's existing alignment convention) — no new design system or theming work.
- The note is static content (hardcoded string), not sourced from configuration, database, or environment variables.
- Applies to all pages/routes where the shared footer currently appears.

## 3. Out of scope

- Correcting the spelling of "Sid Meyer Ressurection" to "Sid Meier Resurrection" or any other spelling — will not be changed unless explicitly requested.
- Making the company name configurable via settings/admin panel/CMS.
- Adding a logo, icon, or any graphical branding element alongside the text.
- Turning the note into a clickable link (e.g., to an "About" page).
- Adding legal/copyright text, year, or "All rights reserved" language — only the plain company name note is in scope.
- Internationalization/translation of the note text.
- Any redesign of the footer itself beyond inserting this one new line above it.
- Responsive/mobile-specific layout adjustments beyond what the footer already handles.
- Adding this note to emails, PDFs, or any non-web-page surface.

## 4. Edge cases and error behavior

- **Footer not present on a page:** If a given page/template does not render the shared footer component at all, the note will also not appear there (it is only inserted relative to the footer, not independently).
- **Very narrow viewports:** The note should not break layout or overflow on small screens; it should wrap or truncate gracefully using default text wrapping, consistent with how the footer already handles narrow screens. No dedicated mobile styling will be built.
- **No dependency risk:** Since this is static text with no external data source, there is no "dependency unavailable" failure mode — the note will always render if the code deploys successfully.
- **Multiple footers on one page (if any exist due to nested layouts):** The note will only be added to the primary/global footer instance, not duplicated for every nested footer instance, unless the reviewer indicates otherwise.

## 5. Acceptance criteria

- [ ] On every page that renders the shared footer, a text note reading exactly "Sid Meyer Ressurection" appears immediately above the footer.
- [ ] The note is visually distinct enough to be readable but does not visually clash with or overlap the footer content.
- [ ] The note is static (hardcoded), requires no configuration, and needs no backend/data changes.
- [ ] No existing footer functionality (links, copyright, layout) is altered or broken by this addition.
- [ ] The note renders correctly on both desktop and typical mobile viewport widths without layout breakage.

## 6. Open questions

- Should the spelling "Sid Meyer Ressurection" be corrected to "Sid Meier Resurrection," or is the exact text as given intentional (e.g., a stylized/brand-specific spelling)?
- Should this note be a clickable link (e.g., to a homepage or about page), or purely plain text?
- Is there a specific visual style (font size, color, weight) the reviewer wants, or is matching the existing footer's muted/small-text style acceptable?
- Should this note appear on all pages, or only specific pages/sections of the site?