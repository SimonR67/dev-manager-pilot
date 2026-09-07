   # Spec: Rebrand and restyle site as "Alpha Centauri" (dark blue theme, orange accents)

Status: draft
Job: 73e4bb2c-ee3b-4009-b0ed-97501935ff03
Target repo: SimonR67/sidney
Supersedes (partially): Existing site theme/styling (CSS/stylesheets) and site branding/title strings across templates, headers, and metadata — not a new capability, a visual and branding overhaul of the current site.

## 1. What should change and why

The user wants the existing website in this repo restyled and rebranded:

1. The overall visual theme (primary background and color scheme) should become dark blue.
2. Buttons and text accents (things currently styled with the site's accent/highlight color, e.g. links, call-to-action buttons, hover states, borders/highlights) should become orange.
3. The site's name should change from whatever it is currently to "Alpha Centauri" — this includes the browser tab title, the header/navbar branding/logo text, and any metadata that references the old name (e.g. `<title>` tags, `og:site_name`, meta descriptions, footer copyright text, README references to the site name if user-facing, manifest/app name fields, etc.).

Problem this solves: the site currently has an outdated color scheme and name that the owner wants refreshed to a new "Alpha Centauri" identity with a dark blue / orange color palette, presumably for a rebrand or refresh of the project's public presentation.

Interpretation chosen: "Rebuild the existing website" is interpreted as a restyle/rebrand of the current site's presentation layer (CSS/theme variables, templates, metadata, and title strings), not a from-scratch rewrite of the site's architecture, framework, content, or functionality. This is the most sensible reading of "rebuild ... with the following changes," since all three listed changes are cosmetic/branding changes, not structural or functional ones. If a full architectural rebuild (e.g., new framework, new tech stack) was intended, that is called out as an open question below.

## 2. Scope

- Update the site's global color theme:
  - Primary background color(s) across all pages/layouts changed to a dark blue (a specific hex/color token should be chosen and applied consistently — e.g., via CSS variables/theme config if the codebase supports it, or by direct edits to stylesheets if not).
  - Ensure sufficient contrast for text/readability against the new dark blue background (standard accessibility contrast expectations, not a formal WCAG audit).
- Update accent styling:
  - All buttons (primary, secondary, CTAs, form submit buttons, nav buttons, etc.) recolored to orange.
  - Text accents — meaning elements currently using an "accent" or "highlight" color (e.g., links, active nav item indicators, headings with accent color, icons tied to accent color, hover/focus states) — recolored to orange.
- Update site branding/title:
  - Browser tab `<title>` on all pages updated to reference "Alpha Centauri" instead of the old name.
  - Header/navbar branding/logo text updated to "Alpha Centauri" (text-based branding; if there's an image/logo file, replacing the text label next to/within it, not designing a new logo graphic unless the "logo" is purely text-based already).
  - Any metadata referencing the old site name updated: HTML `<meta>` tags (description, og:title, og:site_name, twitter:card fields), web app manifest `name`/`short_name` fields, footer text (e.g., "© [old name]"), and any other user-visible or crawler-visible string that names the site.
- Apply changes consistently across all existing pages/templates/layouts in the site (not just the homepage).
- Update these changes wherever they are defined once (e.g., shared layout/theme files) so the change propagates, rather than requiring per-page duplication, if the codebase structure allows it.

## 3. Out of scope

- No changes to site content, copy (other than the site name/title references), page structure, navigation structure, routing, or URLs.
- No changes to site functionality, features, business logic, backend behavior, or data models.
- No framework, language, or tech-stack migration — this is a styling/branding change applied within the existing codebase and existing technology choices, not a ground-up rewrite.
- No redesign of layout/UX beyond color changes (e.g., not repositioning elements, not changing typography/fonts, not changing spacing/grid systems) unless required to make the new colors legible.
- No new logo artwork/graphic design — if the current branding uses an image-based logo, this spec covers replacing/updating the adjacent or embedded text label, not commissioning or generating new logo imagery.
- No changes to domain name, hosting, repo name, or package/project name (e.g., `package.json` `name` field, repo identifier) unless explicitly confirmed as in-scope by the reviewer — see Open Questions.
- No SEO strategy work beyond literally swapping the old name string for "Alpha Centauri" in existing metadata fields.
- No dark-mode/light-mode toggle feature — this is a single, permanent recolor of the existing theme, not an added user-facing theme switcher (unless one already exists, in which case both variants should be updated — see edge cases).
- No accessibility audit or WCAG compliance certification — only a reasonable, common-sense effort to keep text readable against the new colors.

## 4. Edge cases and error behavior

- **Site name appears in unexpected places**: If the old site name is hardcoded in places beyond obvious templates/metadata (e.g., email templates, error pages, config files, JSON-LD structured data, RSS feeds, sitemap titles), these should also be updated. A full repo-wide search for the old name string should be performed as part of implementation, and anything ambiguous (e.g., a name that's also a common word) should be flagged rather than blindly replaced.
- **Existing light/dark mode toggle**: If the site already has a light/dark theme switcher, both theme variants should be updated to use the dark blue / orange palette (i.e., "dark blue" becomes the new base for both, or if a true light variant is required to remain, flag this as an open question rather than guessing).
- **Hardcoded colors vs. theme variables**: If the codebase uses ad-hoc hardcoded hex colors scattered across many files/components rather than centralized theme variables, all instances used for background/primary and button/accent purposes should still be found and updated — this is more effort but still in scope; a partial/inconsistent recolor is not acceptable.
- **Images/assets with baked-in old branding**: If the header/favicon includes the old site name baked into an image file, replacing the actual pixels of that image is out of scope (see Section 3), but this should be explicitly flagged to the reviewer as a gap rather than silently skipped.
- **Third-party integrations displaying old name**: If the old name appears in places controlled by external services (e.g., a connected analytics dashboard title, OAuth app name), those are out of scope since they're outside the repo/codebase.
- **No CSS theming system exists**: If colors are entirely inline/scattered with no shared stylesheet or variable system, implementation will take a direct find-and-replace approach across files; this should not block the spec but may increase implementation time — flagged for the planning stage, not a blocker here.

## 5. Acceptance criteria

- [ ] The dominant background color across all pages of the site is a consistent dark blue.
- [ ] All buttons across the site render in orange (including hover/active states where styled).
- [ ] All previously-accent-colored text/links/highlights across the site render in orange.
- [ ] The browser tab title on every page reads "Alpha Centauri" (or "Alpha Centauri — [Page Name]" if the existing pattern includes page-specific suffixes).
- [ ] The header/navbar branding text visibly reads "Alpha Centauri" on every page.
- [ ] All `<meta>` tags, manifest fields, and footer/copyright text that previously referenced the old site name now reference "Alpha Centauri."
- [ ] A repo-wide search confirms no remaining user-facing or metadata references to the old site name (excluding out-of-scope items like repo name/package name, unless separately approved).
- [ ] The site remains functionally identical to before — all existing pages, links, and features work exactly as they did prior to this change.
- [ ] Text remains legible (reasonable contrast) against the new dark blue background throughout the site.

## 6. Open questions

- What is the current name of the site (needed to do a complete find-and-replace to "Alpha Centauri")? The request refers to "the old site name" but doesn't state it.
- Is there a specific dark blue and orange color (exact hex codes or a brand palette) the user wants, or is choosing reasonable specific shades within "dark blue" and "orange" acceptable?
- Does "retitle the site" also imply renaming the GitHub repository itself, the `package.json`/project name, or the domain, or is it strictly limited to user-facing title/branding/metadata as assumed in this spec?
- Is there an existing logo image (as opposed to text-based branding) that contains the old name baked into graphics, which would need new artwork out of this spec's scope?
- Does the site currently have a light/dark mode toggle that needs to be reconciled with this recolor, or is there only a single fixed theme today?
- Should favicon(s) be updated to reflect the new color scheme/branding, or left as-is? (Not explicitly requested, but often expected as part of a rebrand — flagging for reviewer decision.)