   # Spec: Update site color scheme from green to orange/blue palette

Status: draft
Job: b390d376-14ac-4f77-b895-d693213f39f1
Target repo: SimonR67/Sidney
Supersedes (partially): Existing green-based color scheme/theme styling used in the site's current build (CSS/SCSS/theme config files) — not a full redesign, just a palette swap.

## 1. What should change and why

The user wants the site's current color scheme, which uses green as its primary/accent color, replaced with an orange-and-blue palette. This is a purely visual/branding refresh — no functional or structural changes to the site are requested.

Interpretation chosen: "the last website build" refers to the most recently generated/deployed version of the static site in this repo, and "styling/theme" refers to whatever CSS, SCSS, theme configuration, or inline style definitions currently define green as a color value (hex codes, named colors like `green`, CSS variables, or theme config keys) across the site's templates and stylesheets. All such instances should be identified and replaced with equivalent orange and/or blue values, preserving the same structural role (e.g., a green used as an accent color becomes an orange or blue accent; a green used as a background becomes an appropriate orange or blue background) so that contrast, readability, and layout remain intact.

Since no specific hex values or design mockup were provided, a reasonable orange/blue palette will be chosen and applied consistently, with the intent that it can be adjusted after review.

## 2. Scope

- Search the repository for all styling-related files (CSS, SCSS/SASS, LESS, theme JSON/YAML config, or inline style attributes in templates/HTML) that define green colors.
- Replace green color values — whether specified as named colors (`green`, `darkgreen`, `forestgreen`, etc.), hex codes, RGB/RGBA, or HSL — with values from a defined orange-and-blue palette.
- Apply the replacement consistently across all pages/components that currently use the green scheme (e.g., headers, links, buttons, highlights, borders, backgrounds, icons if colorable via CSS).
- Define a small, consistent palette (e.g., a primary blue, a primary orange, and complementary shades/tints) to be used in place of the various greens, rather than a single flat substitution, so the site's visual hierarchy is preserved.
- Update any theme variables (e.g., CSS custom properties like `--primary-color`, SCSS variables like `$brand-green`) to use new orange/blue names and values, renaming variables where their names explicitly reference "green."
- Rebuild/regenerate the site's static output (if the repo has a build step) so the deployed/last-built version reflects the new palette.

## 3. Out of scope

- Any changes to site layout, typography, spacing, or component structure — this is a color-only change.
- Any changes to content, copy, images, or logos, even if a logo or image contains green (unless it is a simple CSS-colored SVG/icon that is trivially recolorable via existing style rules).
- Introducing a full theming/dark-mode system or making colors user-configurable — a single new fixed palette replaces the old one.
- Redesigning the visual identity beyond a color swap (no new fonts, icons, layout changes, or component redesigns).
- Accessibility/contrast audit beyond basic sanity checking that text remains readable against new backgrounds (a full WCAG audit is not requested).
- Updating any external assets (e.g., favicons, social preview images, README badges) unless they are generated directly from the site's CSS/theme.

## 4. Edge cases and error behavior

- **Ambiguous or non-brand greens**: Some green values may be incidental (e.g., a green used only in an unrelated third-party embedded widget or a code syntax-highlighting block for "success" states). These should be left alone unless they are clearly part of the site's own brand/theme styling; flag ambiguous cases rather than guessing.
- **Green used for semantic meaning**: If green is used to indicate a semantic state (e.g., "success" or "online" indicators) rather than purely brand/theme color, replacing it with orange/blue could cause confusing UX (orange typically implies "warning"). These instances should be identified and called out for reviewer decision rather than silently changed.
- **No build step available**: If the repo has no automated build/deploy pipeline and "last website build" refers to a static output directory that isn't regenerated from source, the change should be made both in source styling files and in the corresponding built/output files if they are checked into the repo.
- **Green defined via images or inline SVG fills not controlled by CSS**: These cannot be changed via stylesheet edits alone; such cases will be listed but not altered unless explicitly approved.
- **Color defined through third-party framework/theme (e.g., Bootstrap theme variable overrides)**: Ensure overrides are updated at the correct level (source variables) rather than patched with ad hoc CSS overrides, to avoid conflicting styles.

## 5. Acceptance criteria

- A defined orange-and-blue palette (with specific hex/RGB values) is documented and used consistently in place of the previous green values.
- All CSS/SCSS/theme files in the repo that previously referenced green colors (named, hex, rgb, or hsl) no longer do so, except where explicitly flagged as out-of-scope (e.g., semantic status colors, third-party embeds).
- Theme variables whose names reference "green" are renamed or repurposed to reflect the new orange/blue palette, with all usages updated accordingly.
- The site, when built/rendered, visually displays orange and blue in place of the former green in all primary UI elements (backgrounds, links, buttons, headers, borders, highlights) that were previously green.
- No layout, content, or functional regressions are introduced — a visual diff/spot check of key pages shows only color changes.
- A list of any green instances intentionally left unchanged (with justification) is provided for reviewer sign-off.

## 6. Open questions

- Should specific hex/RGB values for the orange and blue palette be provided by the user/reviewer, or is the assistant expected to choose a reasonable palette independently?
- Is "the last website build" referring to a checked-in static output (e.g., a `_site`, `dist`, or `build` folder) that needs direct edits, or purely the source templates/stylesheets that generate the site on each build?
- Are there any existing brand guidelines (e.g., a style guide, logo colors) that the orange/blue palette should align with?
- Should greens used for semantic/status indicators (if any exist) be converted too, or explicitly preserved as green regardless of the general palette change?
- Is there a specific shade preference (e.g., "burnt orange" vs. "bright orange," "navy" vs. "sky blue"), or is general orange/blue sufficient?