   # Spec: Add company name note above footer

Status: draft
Job: bb4b9112-079b-4eaf-97f5-dfbde96d0107
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a short note displayed just above the site footer, stating the website's company name: "Alpha Biscuits". This appears to be a branding/attribution addition — likely intended to clarify ownership of the site to visitors, similar to a "Powered by" or copyright-adjacent line.

The request is ambiguous in a few ways:
- It doesn't specify exact wording (e.g., "Alpha Biscuits", "© Alpha Biscuits", "A product of Alpha Biscuits", etc.)
- It doesn't specify styling (font size, color, alignment).
- It doesn't specify whether this should appear on every page or just specific ones.

**Interpretation chosen:** This is a static, site-wide text element rendered directly above the existing footer component, displaying the plain text "Alpha Biscuits" as the company name. It will appear on every page that currently renders the footer, using styling consistent with the existing footer's visual tone (muted/secondary text style) so it reads as a subtle attribution note rather than a prominent heading.

## 2. Scope

- Add a single line of text reading "Alpha Biscuits" immediately above the existing footer element, on all pages/layouts where the footer is currently rendered.
- Styling: small, unobtrusive text (e.g., matching existing footer's secondary/muted text styling), centered or left-aligned consistent with the footer's existing content alignment.
- This is a static, hardcoded string — not sourced from a config file, environment variable, or database, unless the codebase already has an established pattern for footer-adjacent text (in which case that pattern should be followed for consistency).
- Applies to the web UI only.

## 3. Out of scope

- No changes to the footer's existing content, links, or layout structure beyond adding the new note directly above it.
- No new configuration system, admin setting, or CMS field to make the company name editable — the text is static for this iteration.
- No changes to page metadata, `<title>` tags, SEO tags, or legal/copyright notices (e.g., this is not a copyright statement).
- No internationalization/translation of the note.
- No changes to mobile-specific layouts beyond what naturally follows from placing it above the existing responsive footer.
- No logo, image, or icon addition — text only.
- No changes to other pages' branding elsewhere in the app (e.g., header, about page).

## 4. Edge cases and error behavior

- **Invalid input:** Not applicable — this is static text with no user input involved.
- **Dependency unavailable:** Not applicable — no external service or data dependency is introduced.
- **Missing footer on some pages:** If certain pages/layouts don't currently render a footer, this note should not be force-added to those pages; it only appears where the footer already exists, to avoid inconsistent partial rollout.
- **Layout overflow:** On very narrow viewports, ensure the added text wraps normally and does not break the existing footer layout or cause horizontal scrolling.

## 5. Acceptance criteria

- [ ] A text note reading "Alpha Biscuits" appears directly above the footer on every page where the footer currently renders.
- [ ] The note's styling is visually consistent with the site's existing design (not jarring or oversized relative to the footer).
- [ ] No existing footer content, links, or functionality is altered or broken.
- [ ] The addition renders correctly across common breakpoints (desktop and mobile) without layout breakage.
- [ ] No new configuration, database field, or admin UI is introduced for this text.

## 6. Open questions

- Should the note include any additional wording (e.g., "© Alpha Biscuits", "Alpha Biscuits, Inc.", "A product of Alpha Biscuits") or is the bare company name sufficient?
- Should this text be a static string in code, or should it pull from an existing site-wide config/constants file if one already exists in the repo (e.g., a `siteConfig` or `constants.ts`)?
- Is there a specific visual style intended (e.g., italic, bold, specific color) or is "match existing footer secondary text style" an acceptable default?
- Should this note be a clickable link (e.g., to a company website) or plain static text only?