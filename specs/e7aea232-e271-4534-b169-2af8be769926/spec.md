   # Spec: Add Company Name Note Above Footer

Status: draft
Job: e7aea232-e271-4534-b169-2af8be769926
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a short note displayed just above the site footer that states the website's company name, "Quake World." This appears to be a simple branding/attribution addition — likely intended to clarify ownership of the site or product for visitors.

The request is otherwise unambiguous in intent (add a visible text note naming the company), but it does not specify exact wording, styling, or placement details beyond "just above the footer." The interpretation chosen here is:
- A single line of text (not a full section) will be added directly above the existing footer component, on every page where the footer currently renders.
- The text will read something like: "Quake World" or a short phrase incorporating that name (e.g., "© Quake World" or "A Quake World product"), pending clarification (see Open Questions).
- This is treated as a static, non-interactive UI text addition, not a new configurable setting or CMS field, unless the codebase already has a pattern for such text (e.g., a footer/site config file), in which case the name will be added there for consistency.

## 2. Scope

- Add a new, small text element (e.g., a `<div>`, `<p>`, or similar) positioned immediately above the existing footer component in the layout/template that renders the footer.
- The text will display the company name "Quake World" in plain form, styled to be visually distinct from the footer but consistent with the site's existing design language (font, color, spacing conventions already in use).
- The note will appear on all pages/views where the footer currently appears (i.e., it inherits the same rendering scope as the footer — likely a global layout component).
- If the project has a central config/constants file (e.g., site settings, environment variables, or a `siteConfig` object) where such text/strings are typically stored, the company name will be added there and referenced by the new note component, rather than hardcoded inline — to follow existing conventions if they exist.
- The note is static text only — no links, no icons, no interactive elements.

## 3. Out of scope

- Redesigning, restyling, or restructuring the existing footer itself.
- Adding a logo, image, or icon alongside the company name.
- Making the note configurable via an admin panel, CMS, or user-facing settings UI.
- Internationalization/localization of the note text.
- Adding legal/copyright boilerplate (e.g., "© 2024 Quake World. All rights reserved.") unless explicitly requested — only the company name itself is in scope.
- Changing footer content, links, or layout beyond adding this one note above it.
- Adding this note to emails, PDFs, or any non-web-page surface.
- SEO/meta-tag changes referencing the company name (e.g., `<meta>` tags, structured data).

## 4. Edge cases and error behavior

- **Missing/undefined config value**: If the company name is stored in a config file and that value is missing or empty at build/render time, the note should not render a blank or broken element — it should either fall back to a hardcoded default ("Quake World") or be omitted gracefully, not throw an error.
- **Responsive/mobile layouts**: The note must not overlap, clip, or break layout on smaller screen widths — it should stack normally above the footer in mobile view as it does on desktop.
- **Pages without a footer**: If certain pages/routes intentionally do not render the footer (e.g., a modal, embed, or print view), the note should also not render there — it is tied 1:1 to footer presence.
- **No external dependency involved**: This feature does not call any API, service, or database, so there is no dependency-unavailability scenario to handle.

## 5. Acceptance criteria

- [ ] A text note displaying "Quake World" (or agreed final wording, see Open Questions) appears directly above the footer on every page/view where the footer currently renders.
- [ ] The note does not appear on pages where the footer is not rendered.
- [ ] The note's styling is visually consistent with the site's existing design (matches font family and general spacing/margin conventions of surrounding elements).
- [ ] The note renders correctly on both desktop and mobile viewport widths without layout breakage.
- [ ] No existing footer content, links, or behavior is altered by this change.
- [ ] No console errors or build warnings are introduced by the new element.

## 6. Open questions

- What exact wording is desired? Just the bare name "Quake World," or a phrase such as "© Quake World," "Powered by Quake World," or "A Quake World company"?
- Should this text be a static hardcoded string, or should it be pulled from an existing site configuration/constants file if one exists in the repo?
- Should the note be styled as plain text, or does the reviewer want a specific visual treatment (e.g., muted/gray small text, similar to a copyright line)?
- Is there any existing "footer note" or "tagline" pattern already in the codebase that this should reuse rather than creating a brand-new element?