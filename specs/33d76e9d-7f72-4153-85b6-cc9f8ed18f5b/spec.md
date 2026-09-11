   # Spec: Update site title and colour scheme

Status: draft
Job: 33d76e9d-7f72-4153-85b6-cc9f8ed18f5b
Target repo: SimonR67/sidney
Supersedes (partially): existing site title and stylesheet/colour definitions — no new capability, this is a content/styling update to existing files

## 1. What should change and why

The user wants three visual/textual updates to the existing website:

1. The site title should be changed to "Sid Meyers Alpha Centuri" (spelled exactly as given in the request, including the non-standard spelling of "Meyers" and "Centuri" — treated as intentional, see Open Questions).
2. The page background colour should be changed to dark grey.
3. The text/lettering colour should be changed to bright green.

This is presumably a rebranding/reskin of the site, likely themed around the game "Sid Meier's Alpha Centauri," to give the site a dark, high-contrast, retro-terminal-style look (dark grey background with bright green text).

No ambiguity in the overall intent — this is a straightforward cosmetic/content change. The main ambiguity is the exact spelling used in the request vs. the likely intended reference (see section 6).

## 2. Scope

- Update the site title text (wherever it is rendered — e.g. `<title>` tag, header/banner text, any config value or template variable that holds the site name) to read exactly: "Sid Meyers Alpha Centuri".
- Update the site-wide background colour to a dark grey (e.g. a value such as `#333333` or similar dark grey shade) across all pages that inherit the global stylesheet/layout.
- Update the site-wide text colour to a bright green (e.g. a value such as `#00FF00` or similar bright green shade) across all pages that inherit the global stylesheet/layout.
- Changes should be applied at the site-wide/global level (CSS/theme/template), not on a single page only, unless the current site only has one page — in which case that page is in scope.
- Applies to whatever the current styling mechanism is in the repo (inline styles, a CSS file, a templating layout, etc.) — the implementer should locate and update the existing mechanism rather than introducing a new one.

## 3. Out of scope

- No changes to site structure, navigation, layout, or page content beyond the title and the two colour values.
- No changes to fonts, font sizes, spacing, images, or other visual elements not explicitly mentioned.
- No new theming system, dark-mode toggle, or user-configurable colour scheme — this is a fixed, hard-coded colour change.
- No changes to link colours, button colours, borders, or other UI elements unless they are directly inherited from the "text colour" or "background colour" being changed — no new colour decisions for elements not mentioned.
- No accessibility/contrast audit beyond what's naturally implied by "dark grey background, bright green text."
- No changes to metadata beyond the visible site title (e.g. not touching SEO descriptions, favicon, social preview images) unless the site title is reused there and changing it there is trivial/necessary for consistency — if so, this should be flagged, not assumed.
- No renaming of the repository, domain, or any backend/config identifiers — only the user-facing site title text.

## 4. Edge cases and error behavior

- If the site title is hard-coded in multiple places (e.g. HTML `<title>`, header logo text, footer, README), all user-facing occurrences should be updated for consistency; internal identifiers (repo name, variable names, package name) should NOT be renamed.
- If the current stylesheet uses CSS variables/theme tokens for background and text colour, those tokens should be updated at the source rather than overriding at every usage site.
- If background/text colour is set per-component rather than globally, and some components override the global colour, those overrides should be reviewed and updated too so the whole site is consistent — flag any component that intentionally needs a different colour (e.g. for contrast on a colored button) rather than silently changing it.
- If no existing colour styling exists at all (i.e. site currently uses browser defaults), this becomes an additive change: introduce a minimal global style rule for background and text colour.
- No external dependency, API, or service is involved in this change, so no dependency-unavailable scenarios apply.

## 5. Acceptance criteria

- [ ] Loading the site shows a page `<title>` (browser tab) and/or visible header title reading exactly "Sid Meyers Alpha Centuri".
- [ ] The background colour of all pages is a dark grey shade.
- [ ] The default text colour of all pages is a bright green shade.
- [ ] No other visual elements (fonts, layout, images, navigation) are altered.
- [ ] The change is applied consistently across all pages of the site, not just the homepage (unless the site has only one page).
- [ ] The old title text no longer appears anywhere it was previously shown as the site's name.

## 6. Open questions

- The exact spelling "Sid Meyers Alpha Centuri" does not match the actual game title "Sid Meier's Alpha Centauri." Should the title be used exactly as written in the request (verbatim, as specified above), or should it be corrected to the canonical spelling? This spec assumes verbatim as given — please confirm.
- What exact hex/colour values are wanted for "dark grey" and "bright green"? This spec assumes reasonable defaults (e.g. `#333333` dark grey, `#00FF00` bright green) but the reviewer should confirm or supply specific values.
- Should link colours, hover states, or other secondary UI colours be adjusted to remain legible/consistent against the new dark grey background, or should they be left as-is even if that creates a visual mismatch?
- Are there multiple places the "site title" appears (e.g. header logo, browser tab, footer, README, package metadata) that should all be updated, or only the most visible one (e.g. browser tab/header)?