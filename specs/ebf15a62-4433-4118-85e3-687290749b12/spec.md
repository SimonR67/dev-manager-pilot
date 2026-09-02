   # Spec: Add company name note above footer

Status: draft
Job: ebf15a62-4433-4118-85e3-687290749b12
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a short note directly above the site footer that displays the company name "Alpha Biscuits". This is understood as a small branding/attribution addition — likely intended to give visible credit or identification of the company operating/maintaining the site, similar to a "Powered by X" or "© Company Name" style line.

The request is ambiguous on a few points, and the following interpretation has been chosen:
- "Note" is interpreted as a single line of static text, not a styled banner, alert box, or interactive component.
- The note applies to the site-wide footer (i.e., wherever the footer component is rendered across the app), not just one specific page — since no page was specified.
- No specific wording beyond the company name was given, so the note will read simply: **"Alpha Biscuits"** (see Open Questions for whether additional framing text like "A product of Alpha Biscuits" is desired).

## 2. Scope

- Add a single line of text reading "Alpha Biscuits" (or a minor variant per Open Questions) immediately above the existing footer element in the layout.
- The note should appear on every page/view where the footer currently renders, using the existing footer/layout component structure.
- Basic styling only: text should be visually distinct from the footer (e.g., via spacing or subtle styling) but should match the existing site's typography/theme (font, color palette) so it looks native rather than injected.
- Static content only — no dynamic data, no configuration options, no CMS/editable field for this text (hardcoded string in the codebase).

## 3. Out of scope

- No changes to the footer's existing content, links, or layout beyond adding the new note above it.
- No new configuration/settings UI to let users or admins edit this text.
- No internationalization/translation support for this string.
- No logo, icon, or image — text only.
- No changes to header, navigation, or any other part of the page.
- No legal/copyright text (e.g., "© 2024 Alpha Biscuits") unless explicitly requested — this spec covers only the company name note as stated.
- No responsive-design overhaul; only minimal adjustments needed to ensure the note doesn't break existing mobile/desktop layouts.
- No analytics, tracking, or click behavior on this note (it's plain text, not a link) unless clarified otherwise.

## 4. Edge cases and error behavior

- **Invalid input:** Not applicable — this is static text with no user input.
- **Dependency unavailable:** Not applicable — no