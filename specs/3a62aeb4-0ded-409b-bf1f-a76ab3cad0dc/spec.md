   # Spec: Add Company Name Note Above Footer

Status: draft
Job: 3a62aeb4-0ded-409b-bf1f-a76ab3cad0dc
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request asks for a short note to be displayed just above the site footer that states the website's company name, "Quake World". This appears to be a branding/attribution addition — likely intended to make it clear to visitors which company operates the site.

The request is ambiguous in a couple of ways:
- It's unclear whether "a note" means a single line of plain text (e.g. "Quake World") or a fuller sentence (e.g. "This website is operated by Quake World").
- It's unclear whether this note should appear on every page (i.e. be part of a shared layout/footer component) or only on specific pages.

**Interpretation chosen:** Since footers are typically rendered as part of a shared layout, this note will be added to the shared layout/footer component so it appears consistently on every page, directly above the existing footer content. The note will be a simple, single-line text display: "Quake World". This is the minimal, low-risk interpretation that satisfies the literal request without inventing additional copy or design decisions.

## 2. Scope

- Add a short text note reading "Quake World" positioned immediately above the existing footer element, on every page that currently renders the footer.
- The note will be implemented as static text (no dynamic data source, no CMS/config lookup) unless the project already has an established pattern for site-wide text config, in which case the existing convention will be followed for consistency.
- Basic styling to match the existing footer's visual style (font, color, spacing) so the note looks intentional and not out of place — no new design system or theme introduced.
- The note applies globally, i.e., in the shared layout component that renders the footer, not duplicated per-page.

## 3. Out of scope

- No new branding assets (logos, icons) — text only.
- No links, contact info, copyright year, or legal text added alongside the note — just the company name as requested.
- No changes to the footer's existing content, structure, or links.
- No internationalization/localization of the note text.
- No admin/CMS capability to edit this text after deployment — it is a static, hardcoded string.
- No changes to page layout, spacing, or responsiveness beyond what is needed to fit the new note in cleanly.
- No SEO metadata changes (e.g., no update to `<meta>` company name tags) — this is a purely visual UI addition.

## 4. Edge cases and error behavior

- **Pages without a footer:** If there are pages/layouts that do not render the shared footer component, the note will not appear on them; this is expected and not a bug.
- **Very small/mobile viewports:** The note text should wrap or shrink gracefully rather than overflow or overlap the footer — should be verified visually but does not require new responsive logic beyond existing footer behavior.
- **No dependency risk:** Since this is static text with no external data source, there is no failure mode related to unavailable dependencies.
- **Duplicate footers:** If the app has more than one footer implementation (e.g., a different one for an admin panel vs. public site), the author should confirm whether the note is intended for all of them or only the public-facing site (see Open Questions).

## 5. Acceptance criteria

- [ ] A text note reading "Quake World" is visible directly above the footer on all pages that render the shared footer.
- [ ] The note is visually distinct enough to be read but does not disrupt the existing footer's layout or styling.
- [ ] No existing footer content, links, or functionality is altered or removed.
- [ ] The note appears consistently across all major supported viewport sizes (desktop and mobile) without visual overlap or clipping.
- [ ] No new external dependencies, API calls, or configuration are introduced to render this note.

## 6. Open questions

- Should the note say just "Quake World", or a fuller phrase like "© Quake World" or "A Quake World website"? The spec currently assumes plain text with no additional copy.
- If the codebase has multiple footer/layout components (e.g., separate public site vs. admin/dashboard layouts), should the note appear in all of them or only the primary public-facing one?
- Is there an existing convention in this repo for site-wide static strings (e.g., a constants/config file) that this text should be added to instead of hardcoding directly in the component?