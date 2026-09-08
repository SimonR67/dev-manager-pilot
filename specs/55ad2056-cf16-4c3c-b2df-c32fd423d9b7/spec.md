   # Spec: Re-theme site, rename to "Alpha Centuri", and update home page copy

Status: draft
Job: 55ad2056-cf16-4c3c-b2df-c32fd423d9b7
Target repo: SimonR67/sidney
Supersedes (partially): existing site color scheme/theme, site title, and home page content — this changes existing files rather than adding new capability

## 1. What should change and why

The user wants three changes applied to the existing website in this repo:

1. A visual re-theme: dark blue becomes the primary background/theme color across the site, and orange is used for buttons and text accents/highlights (e.g., links, hover states, call-to-action elements).
2. The site title (as shown in the browser tab, header/nav, and any place the site name is rendered, e.g. `<title>` tag, header logo/text, config values used for the site name) changes to "Alpha Centuri".
3. The home page content is updated to include the exact text: "Our board advisory services ensure that your board is composed of the most qualified and diverse members, driving better decision-making and governance and support in building your businesses roadmap for growth."

Interpretation choices made due to ambiguity:
- "Dark blue" is not given as a specific hex value. Interpretation: a reasonable dark navy/dark blue shade (e.g., in the #0a1a33–#0d2340 range) will be chosen and applied consistently as the primary background/theme color, unless the repo already defines a color palette/variable system, in which case existing variables will be updated to dark blue values rather than hardcoding new colors ad hoc.
- "Orange" for buttons and text accents/highlights is interpreted as: button backgrounds (or borders, depending on existing button style), link colors, hover/focus states, and any existing highlighted text elements (e.g., taglines, emphasized spans) — not a wholesale recolor of all body text to orange.
- The home page text is to be *added* to the home page ("update... to include"), not necessarily replacing all existing home page content. Existing home page structure/sections are otherwise left intact unless they directly conflict with fitting in this new text, in which case placement will be chosen to read naturally (e.g., as an intro/services paragraph).
- "Site title" is interpreted broadly to include all user-visible instances of the current site name (page `<title>`, header/branding text, meta tags referencing site name if present) — not just one occurrence.

## 2. Scope

- Update CSS/styling (whether in stylesheets, inline styles, CSS variables, or a theme config file) so that:
  - The primary background/theme color across pages (header, body background, footer, nav, etc.) uses a dark blue color.
  - Buttons use orange as their primary color (background or prominent accent, matching existing button style conventions).
  - Text accents/highlights (links, hover states, emphasized/highlighted text elements) use orange.
- Replace all user-visible occurrences of the current site title with "Alpha Centuri", including the HTML `<title>` tag, header/nav branding, and any config/constant that centrally defines the site name (if one exists, update it there rather than per-page).
- Edit the home page (the repo's index/home template or content file) to include the specified paragraph of text about board advisory services, placed in a sensible content location (e.g., intro section or services section).
- Changes are visual/content/theme only — no new pages, routes, or functionality.

## 3. Out of scope

- Adding new pages, sections, or navigation items beyond what's needed to display the specified home page text.
- Changing site structure, layout/grid, fonts, or imagery — only color theme and specified text change.
- Rewriting or restructuring existing home page copy beyond incorporating the new sentence; other existing home page content is preserved as-is.
- Renaming the repo, domain, package name, or any internal identifiers/URLs — "site title" refers only to the user-facing display name.
- Rebranding logo/favicon graphics (unless the current logo is purely text-based and directly renders the old site title as text, in which case only the text is updated, not a new logo design).
- Accessibility/contrast audit beyond ensuring the chosen dark blue/orange combination is reasonably readable (a full WCAG compliance pass is not part of this request).
- Any backend, data, or functional changes — this is a front-end presentation and content change only.

## 4. Edge cases and error behavior

- If the site title is hardcoded in multiple places with inconsistent capitalization/spacing, all instances should be normalized to "Alpha Centuri" as given (no alternate spelling "Alpha Centauri" will be substituted, even though that may be the astronomically "correct" spelling — the request is taken verbatim).
- If there is no existing centralized theme/color variable system, colors will be updated directly in the relevant CSS selectors, with a note left for the reviewer that introducing a variable-based theme system was considered out of scope unless requested.
- If the home page is generated/templated from multiple partials (e.g., a hero section + separate content section), the new text will be placed in the most contextually relevant content section rather than the hero/banner, to avoid disrupting layout — this choice is flagged for reviewer confirmation.
- If existing button or link styles vary across the site (different classes for different button types), orange will be applied to all primary/interactive button and link styles consistently; purely decorative elements unrelated to buttons/text accents are not recolored.
- No user input or runtime data is involved in this change, so there is no "invalid input" handling to define; this is a static content/style edit.
- No external dependencies are introduced, so there is no dependency-unavailable scenario to handle.

## 5. Acceptance criteria

- [ ] The site's background/theme color is visibly dark blue across all pages that inherit the global theme.
- [ ] All buttons use orange as their primary visual color.
- [ ] Text accent/highlight elements (links, hover states, highlighted text) use orange.
- [ ] The page `<title>` and all visible site name/branding instances read "Alpha Centuri".
- [ ] The home page displays the exact sentence: "Our board advisory services ensure that your board is composed of the most qualified and diverse members, driving better decision-making and governance and support in building your businesses roadmap for growth."
- [ ] No existing pages, routes, or functionality are broken by the change.
- [ ] No unrelated content, structure, or functionality is altered.

## 6. Open questions

- Is there a specific hex code or brand guideline for "dark blue" and "orange," or is the implementer free to choose a reasonable shade of each?
- Should the site title also be updated in any non-visible metadata (e.g., `package.json` name field, SEO meta description mentioning the old name) or strictly limited to user-visible text?
- Where exactly on the home page should the new sentence be placed (e.g., replacing a hero tagline, added as a new paragraph, appended to an existing services section)?
- Should the misspelling "Alpha Centuri" (vs. the astronomical "Alpha Centauri") be kept exactly as requested, or was this a typo the user wants corrected? (Assumed: keep verbatim as specified unless reviewer says otherwise.)