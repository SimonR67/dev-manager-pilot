   # Spec: Rebrand website to "Alpha Centuri" with dark blue/orange theme and updated home page copy

Status: draft
Job: 392b9d9e-063b-4b5e-80e0-17475eb94210
Target repo: SimonR67/sidney
Supersedes (partially): existing site theme/color styles, site title/branding strings, and home page body content

## 1. What should change and why

The user wants a visual and content refresh of the existing website in this repo, consisting of three distinct changes:

1. A site-wide re-theme: dark blue as the primary background/theme color, with orange used for buttons and text accents (links, headings, highlights, CTAs).
2. The site title (as shown in the browser tab, header/nav branding, and any `<title>`/meta tags or config value that drives the displayed site name) changed to "Alpha Centuri".
3. The home page updated to include a specific new paragraph of body copy about board advisory services.

Interpretation notes (ambiguity resolved as follows):
- "Site title" is interpreted to mean the human-visible name of the site wherever it appears as branding text (page `<title>`, header logo/text, footer copyright line if it includes the site name, and any config/settings field like `site.title` or similar). It does not mean renaming the repo, package name, or internal identifiers.
- "Dark blue as primary background/theme color" is interpreted as: dark blue used for the main page background and/or primary theme/brand color (nav bar, header, footer, section backgrounds as applicable to current design), not necessarily every single element on the page.
- "Orange for buttons and text accents" means button backgrounds/borders and accent text (links, highlighted words, small UI accents) use orange; orange is not intended as a second large background color.
- The home page update is treated as adding/inserting the given paragraph into the existing home page content, not replacing the entire home page. If the home page currently has no obvious "intro" or "about" text block, the paragraph will be added as a new visible section near the top of the page content.

## 2. Scope

- Update the site's CSS/theme (whatever styling mechanism the repo uses — CSS file(s), theme config, CSS variables, or templating theme settings) so that:
  - Primary background and/or main theme color across all pages of the site is a dark blue.
  - Buttons (all interactive button elements) use orange as their color/accent.
  - Text accents — links, hover states, headings or highlighted text elements that currently use an accent color — are changed to orange.
- Update the site title string used in:
  - The HTML `<title>` tag on all pages (or the single templated source that generates it, if the site uses shared layout/templates).
  - Any visible header/nav branding text and footer text that currently shows the old site name.
  - Any site config/metadata field (e.g., in a `_config.yml`, `package.json` "name" used for display, or similar) that is the source of truth for the displayed title.
- Update the home page (the site's index/landing page) to include the exact text provided:
  "Our board advisory services ensure that your board is composed of the most qualified and diverse members, driving better decision-making and governance and support in building your businesses roadmap for growth."
  - This text will be inserted as its own paragraph in a sensible, visible location on the home page (e.g., an intro/hero section or main content area), using existing page structure/styling conventions.
- This is a single combined visual + content update to the existing site; no new pages, routes, or features are introduced.

## 3. Out of scope

- Redesigning the site's layout, structure, navigation, or information architecture — only color/theme changes are made, not layout changes.
- Changing fonts, imagery, logos, icons, or adding new graphical assets, unless strictly required to make the new colors legible (e.g., swapping a logo that is unreadable on dark blue is out of scope unless explicitly requested).
- Changing content on any page other than the home page (e.g., about, contact, services detail pages) beyond what is needed for the title update.
- Renaming the GitHub repository, package name, domain name, or any internal/code-level identifiers — "Alpha Centuri" is a display/branding change only.
- Rewriting or restructuring the rest of the home page copy beyond inserting the new paragraph — existing home page content stays unless it visually conflicts with the new text placement.
- Accessibility/contrast auditing beyond a basic sanity check that orange-on-dark-blue and text-on-background combinations are reasonably legible; a full WCAG contrast compliance pass is not included.
- Adding a theme toggle, light/dark mode switch, or making the color scheme configurable — this is a fixed re-theme, not a new theming system.
- SEO metadata changes beyond the `<title>` tag (e.g., meta descriptions, Open Graph tags, favicon) unless they directly contain the old site name and break due to the title change.
- Any backend/server-side logic changes — this is a front-end styling and content change only.

## 4. Edge cases and error behavior

- If the site title currently appears in multiple hard-coded locations (rather than one templated source), all occurrences must be found and updated consistently — a partial rename (e.g., tab title changed but header logo not) is considered incomplete.
- If the current theme uses hard-coded colors scattered across many files/inline styles rather than a central variable/config, the same "dark blue primary / orange accent" rule must be applied consistently across all of them; any color that is clearly a background should become dark blue, and any color that is clearly a button/accent/link should become orange, defaulting to the closest existing usage pattern when ambiguous.
- If the home page is generated from a CMS, data file, or template rather than static HTML, the new paragraph should be added at the appropriate content source rather than only in rendered HTML output.
- If inserting the new paragraph breaks existing page layout (e.g., overflow, spacing issues) it should be added in a way (e.g., own paragraph/section) that avoids breaking surrounding elements; no dependency on JavaScript is assumed for this content to render.
- If the site has no build/deploy step and is plain static files, changes are made directly to the relevant HTML/CSS files with no additional tooling introduced.
- No external dependencies (fonts, color libraries, CMS services) are expected to be required for this change; if the repo turns out to depend on an external theme package that can't be locally overridden, this should be flagged rather than worked around silently.

## 5. Acceptance criteria

- [ ] Viewing any page of the site shows a dark blue primary background/theme color as the dominant visual color.
- [ ] All buttons on the site render with orange as their primary color (background, border, or text as applicable to the button style).
- [ ] Links and other designated text accents render in orange across the site.
- [ ] The browser tab title on every page reads "Alpha Centuri" (or is generated from a single updated source that resolves to this).
- [ ] Any visible header/nav and footer branding text showing the site name displays "Alpha Centuri" instead of the previous name.
- [ ] The home page visibly contains the exact sentence: "Our board advisory services ensure that your board is composed of the most qualified and diverse members, driving better decision-making and governance and support in building your businesses roadmap for growth."
- [ ] No other pages' content, layout, or navigation structure has been altered beyond the title/branding update.
- [ ] The site still builds/renders without errors after these changes.

## 6. Open questions

- Is there a specific hex value or shade of "dark blue" and "orange" preferred (e.g., brand guidelines), or is choosing a reasonable standard dark navy blue and a standard orange acceptable?
- Should the new home page paragraph be placed in a specific existing section (e.g., hero banner, "About us" block) or is any prominent placement on the home page acceptable?
- Does "site title" also need to include the favicon or any browser bookmark name/meta tags beyond the `<title>` element, or is the visible title/branding text sufficient?
- Is there an existing style guide or design system in the repo that should constrain how the new colors are applied, or is a straightforward global color swap acceptable?