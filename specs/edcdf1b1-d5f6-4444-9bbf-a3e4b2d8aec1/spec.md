   # Spec: Add company name note above footer

Status: draft
Job: edcdf1b1-d5f6-4444-9bbf-a3e4b2d8aec1
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a short note displayed just above the site footer that states the website's company name, "Quake World". This is a branding/informational addition — currently there is no visible statement of the company name near the footer, and the request asks for one to be added there.

Interpretation chosen: The "note" is a simple, static text element (e.g. a single line such as "Quake World" or "© Quake World" depending on reviewer preference — see Open Questions) rendered directly above the existing footer component, on every page where the footer currently appears. No mention was made of styling, links, or dynamic content, so this is treated as plain static text using existing site typography/styling conventions, not a new design component.

## 2. Scope

- Add a single line of text containing the company name "Quake World" positioned immediately above the footer element in the site layout.
- The note should appear on all pages that currently render the shared footer (i.e., it becomes part of the shared layout/footer wrapper, not a page-specific addition).
- Text content is static (hard-coded string "Quake World"), not pulled from a config file, CMS, or environment variable, unless such a pattern already exists for similar footer content in the codebase — in that case, follow the existing convention for consistency.
- Basic styling only: the note should visually read as a distinct, small line of text (e.g., consistent with existing footer text styling such as font size/color), not a large heading or banner.
- Responsive behavior should match however the existing footer already handles different screen sizes (no new responsive logic needed if the footer is already responsive).

## 3. Out of scope

- No new design system, component library additions, or visual redesign of the footer.
- No dynamic/configurable company name (e.g., no admin setting, no i18n/localization of the string).
- No additional company information beyond the name itself (no address, no tagline, no legal/copyright text, no social links) unless explicitly requested later.
- No changes to footer content, layout, or links that already exist.
- No SEO metadata changes, structured data (schema.org Organization), or `<title>`/meta tag updates related to the company name.
- No analytics or tracking additions related to this note.
- No changes to pages/layouts that do not currently include the shared footer.

## 4. Edge cases and error behavior

- Invalid input: not applicable — this is static text with no user input or form involved.
- Dependency unavailable: not applicable — the note has no external data dependency (e.g., no API call, no database lookup); it is hard-coded text rendered at build/render time.
- Pages without a footer: if a page intentionally omits the footer, the note should also be omitted (i.e., the note lives with the footer, not injected independently across all pages).
- Long text wrapping: not a concern given the short, fixed string, but the note should not visually overlap or crowd the footer on small screens — verify against existing footer spacing.
- Duplicate rendering: ensure the note is not accidentally duplicated if the footer component is rendered in more than one place (e.g., both in a layout wrapper and a page template).

## 5. Acceptance criteria

- [ ] A text note reading "Quake World" (or an agreed-upon exact wording per Open Questions) appears immediately above the footer on every page that currently renders the shared footer.
- [ ] The note is not present on pages that do not render the footer.
- [ ] The note's styling is visually consistent with surrounding footer content (no unstyled/raw text, no oversized heading).
- [ ] No existing footer content, layout, or functionality is altered or broken by this change.
- [ ] The note renders correctly across the breakpoints/screen sizes already supported by the existing footer.
- [ ] No console errors or build warnings introduced by the change.

## 6. Open questions

- What is the exact desired wording of the note? Options include: "Quake World", "© Quake World", "A Quake World company", or "Website by Quake World". The request only specifies the company name itself, so exact phrasing needs confirmation.
- Should the note be a plain text string, or should it link somewhere (e.g., to a company website or about page)? The request does not mention a link, so current assumption is plain text, no link.
- Is there an existing convention in this codebase for footer-adjacent text (e.g., a copyright line) that this new note should match in style/placement, or is the footer currently minimal with no precedent to follow?
- Should this note be easily editable later (e.g., extracted as a constant/config value) even though scope currently treats it as hard-coded, in case the company name changes in the future?