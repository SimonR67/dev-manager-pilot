   # Spec: Change button and title text color to Gold

Status: draft
Job: 46fbd1f3-775e-46bd-889f-a70f039fc771
Target repo: SimonR67/sidney
Supersedes (partially): none — new capability (styling change to existing UI elements)

## 1. What should change and why

The requester wants the visual styling of the website updated so that:
- All buttons have the color Gold applied to them.
- The title text (the site/page title, e.g. header or `<h1>`/logo text) is colored Gold.

This is a purely cosmetic/branding change. The problem it solves is a stated preference for a different visual theme — no functional issue is being fixed.

Ambiguity in the request and interpretation chosen:
- "Color of the buttons" is ambiguous — it could mean the button background, the button text/label color, or the border. **Interpretation chosen:** apply Gold as the button background color (the most common meaning of "button color"), and ensure button text remains legible (defaulting to existing/contrasting text color unless this causes a legibility problem, in which case it will be flagged rather than silently decided).
- "Title text" is ambiguous — it could mean the page `<title>` (browser tab text, which has no visual color), the main heading/site title displayed on the page, or every heading level (h1–h6). **Interpretation chosen:** "title text" refers to the visible site/page title element (e.g., the main header/logo heading shown at the top of pages), not the invisible browser-tab `<title>` tag, and not every heading level on the page.
- "Gold" is ambiguous as an exact hex/RGB value. **Interpretation chosen:** use a standard "Gold" color value (e.g., CSS named color `gold` / `#FFD700`) unless the repo already defines a specific gold-like brand color variable, in which case that existing variable should be reused for consistency.

## 2. Scope

- Update the CSS/styling (wherever button styles are currently defined — stylesheet, CSS-in-JS, theme file, or inline styles) so that all buttons across the site use Gold as their color.
- Update the styling for the site's main title/heading text so it renders in Gold.
- Apply consistently across all pages/views where buttons and the title appear, not just one page.
- Preserve existing layout, spacing, fonts, hover/focus states' non-color behavior (e.g., a hover state can still exist, but its base/resting color should be Gold unless doing so breaks accessibility per section 4).
- Change is limited to color only — no changes to button size, shape, spacing, font, or the wording of the title text.

## 3. Out of scope

- Changing any other UI colors (backgrounds, links, navigation, borders, icons, etc.) not explicitly named as "buttons" or "title text."
- Redesigning button shapes, sizes, fonts, or interaction behavior.
- Changing the site's overall theme, logo, or branding beyond this specific color change.
- Changing the browser tab `<title>` metadata (it has no color and is unaffected).
- Adding a theming/color-configuration system (e.g., a settings page to let users pick colors) — this is a hardcoded style change, not a new feature.
- Changing colors in emails, PDFs, or any non-web-page output.
- Accessibility/contrast redesign of the whole site beyond ensuring the specific new Gold elements remain reasonably legible (see section 4).

## 4. Edge cases and error behavior

- **Invalid input:** Not applicable in the traditional sense — this is a styling change, not a feature accepting user input. The only "invalid input" risk is if "Gold" needs to be reconciled with an existing design system/theme file that defines colors via variables; if such a system exists, the change should update the relevant variable rather than hardcoding Gold in many places.
- **Dependency unavailable:** Not applicable — no external service or dependency is required for a color/style change.
- **Legibility/contrast risk:** If button text or title text is currently a light color (e.g., white) on a light background, and Gold is applied, there is a risk of poor contrast (Gold is a light-mid color). If this is detected, the implementer should flag it rather than ship an illegible result, and a fallback text color (e.g., dark gray/black) should be chosen for readability.
- **Multiple button styles:** If the site has different button types (e.g., primary, secondary, disabled, danger/delete), it should be clarified whether Gold applies to all of them or only the primary/default button style (see Open Questions).
- **Multiple "title" locations:** If the title text appears differently on different pages (e.g., homepage hero title vs. inner-page header), all instances of the site's title element should be updated consistently.

## 5. Acceptance criteria

- [ ] All buttons on every page of the site display Gold as their color (background, per the chosen interpretation) in their default/resting state.
- [ ] The site's title text (main visible header/site name) displays in Gold on every page where it appears.
- [ ] No other UI elements (links, backgrounds, non-title headings, icons) have been changed as a side effect.
- [ ] Button and title text remain legible (sufficient contrast against their background) after the color change.
- [ ] The change is applied via the site's existing styling mechanism (CSS/theme file) rather than ad-hoc inline overrides, where feasible.
- [ ] A visual review confirms the Gold color is applied consistently across all pages/views, not just one.

## 6. Open questions

- Does "buttons" mean all buttons (primary, secondary, disabled, danger, etc.), or only primary/call-to-action buttons? Should disabled buttons also turn Gold, or keep a distinct disabled style?
- Should "Gold" apply to the button background, the button text, or both? The spec assumes background, but please confirm.
- Is there an existing design/theme system (CSS variables, theme file) in the repo that defines a "primary" or "accent" color that should simply be repointed to Gold, or should this be applied element-by-element?
- Does "title text" refer only to the main site title/header, or should it also include page-specific headings (e.g., blog post titles, section headings)?
- Is there a specific exact shade of Gold desired (hex code), or is the standard CSS `gold` (#FFD700) acceptable?
- Should hover/active/focus states of buttons also be Gold-toned (e.g., a darker gold on hover), or is only the resting state in scope?