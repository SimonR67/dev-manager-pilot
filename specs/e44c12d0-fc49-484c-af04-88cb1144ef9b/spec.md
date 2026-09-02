   # Spec: Add company name note above footer

Status: draft
Job: e44c12d0-fc49-484c-af04-88cb1144ef9b
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The user wants a short note displayed just above the site footer that states the website's company name: "Alpha Biscuits". This is a branding/attribution addition — currently the footer area does not display a company name, and the request is to add one so visitors can see who operates the site.

The request is otherwise unambiguous in intent (add text, place it directly above the footer, content is the literal string "Alpha Biscuits"), but it is ambiguous on presentation details. Interpretation chosen:
- The note will be a simple, static text line, e.g. "© Alpha Biscuits" or "Alpha Biscuits" (final wording to be confirmed — see Open Questions).
- It will appear on every page that renders the shared footer/layout, not just one page, since "the website" implies site-wide.
- It is a static/hardcoded string, not driven by a database field, config setting, or CMS content, unless the repo already has an established pattern for such text (e.g. an existing "site settings" or "app config" object) — in which case that pattern will be used instead of a hardcoded literal.

## 2. Scope

- Add a single line of text containing "Alpha Biscuits" immediately above the existing footer component, in the shared layout so it appears consistently across all pages that already render the footer.
- Styling will match the existing footer's visual language (font size, color, spacing) so it reads as a natural extension of the footer rather than a jarring addition — no new design system introduced.
- The note is view-only text: no links, no interactivity, no icons required.
- Applies to whatever rendering surface the footer currently uses (e.g. the same React/HTML component tree), rebuilt/reused rather than duplicated.

## 3. Out of scope

- Adding the company name anywhere else on the site (header, page titles, browser tab title, emails, etc.) — only the footer area is affected.
- Adding a logo, image, or link (e.g. link to a company website) alongside the text — text only.
- Making the company name configurable via an admin UI or settings page (unless such a mechanism already exists and is trivially reusable — see Section 1).
- Localization/translation of the note into multiple languages.
- Adding legal boilerplate (copyright year, "All rights reserved", trademark symbols, etc.) beyond the plain company name, unless explicitly requested later.
- Any changes to footer layout, links, or content beyond inserting this one note above it.
- Responsive/mobile-specific redesign of the footer area beyond ensuring the new note doesn't visually break on smaller screens.

## 4. Edge cases and error behavior

- No user input is involved, so there is no invalid-input hand