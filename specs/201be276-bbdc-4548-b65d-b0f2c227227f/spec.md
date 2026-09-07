   # Spec: Rebrand site to "Beta Centuri" with dark grey / orange theme

Status: draft
Job: 201be276-bbdc-4548-b65d-b0f2c227227f
Target repo: SimonR67/sidney
Supersedes (partially): existing site theme/CSS and hardcoded site title/branding strings — not a new capability, a visual + copy update to the current site.

## 1. What should change and why

The request has two distinct parts:

1. **Visual theme change**: Update the site's overall color scheme so that backgrounds and base UI colors use dark grey tones, while buttons, links, text accents, and highlighted elements use orange. This is a rebrand/restyle, not a functional change — no new UI components or layouts are being introduced.
2. **Site title/branding change**: Replace all instances of the current site name/title with "Beta Centuri" everywhere it currently appears — this includes the browser tab title (`<title>`), the header/logo text shown to users, `<meta>` tags (e.g., description/OG/Twitter card tags that reference the site name), and any other visible or metadata occurrence (footer, config files, package/app name strings used for display, email templates if they reference the site name, etc.).

Interpretation chosen: The request is read as a **cosmetic/branding update only** — colors and text strings — not a request to redesign layout, restructure pages, add a theme-switcher, or change functionality. Where the site name appears only in internal/non-user-facing identifiers (e.g., a database name, internal variable names, repo name itself), those are treated as out of scope unless they are user-visible, since renaming internal identifiers carries higher risk and wasn't explicitly requested.

## 2. Scope

- Update the site's stylesheet(s)/theme configuration so that:
  - Primary background/base colors (page background, panels, cards, nav bars, base surfaces) use dark grey shades (a consistent palette, not a single flat grey — e.g., a couple of shades for layering/contrast such as header vs. body background).
  - Buttons (primary and secondary, if styled differently) use orange as their base/background or border color, with appropriate hover/active states derived from that orange.
  - Text accents and highlights (links, active nav item, highlighted text, badges/tags, focus states) use orange to draw attention against the dark grey base.
  - Base body text remains legible against dark grey backgrounds (e.g., light grey/white text) — this is implied by "dark grey background" even though not stated explicitly, since it's necessary for basic usability.
- Apply the color change consistently across all pages/templates that share the site's common theme/layout (not just the homepage).
- Replace the current site title/name with "Beta Centuri" in every user-visible and metadata location, including but not limited to:
  - HTML `<title>` tag on all pages.
  - Header/navbar logo or site name text.
  - `<meta>` tags referencing the site name (description, Open Graph `og:title`/`og:site_name`, Twitter card tags, etc.), if such tags currently include the old site name.
  - Footer text, if it displays the site name.
  - Any config/constants file whose value is used to render the displayed site name (e.g., a `SITE_NAME` setting), so the change propagates from one source of truth where such a mechanism already exists.
- Both changes (theme + title) are treated as one combined update since they're part of the same rebrand request, but each can be reviewed/verified independently.

## 3. Out of scope

- Any layout, structural, or navigation changes (page structure, component arrangement, adding/removing sections).
- Introducing a theme system (e.g., light/dark mode toggle, user-selectable themes). This is a single fixed theme replacing the current one, not a new configurable feature.
- Changing fonts, iconography, imagery, or logo artwork (unless the current logo is literally a text rendering of the old site name — in that case only the text is updated, not its style/typeface, unless flagged in open questions).
- Renaming the GitHub repository itself, package name, database name, or other internal/non-user-facing identifiers.
- Changing the domain name, favicon, or app icon (unless favicon/app icon contains the old name as visible text — flagged as open question below).
- Accessibility/contrast auditing beyond a basic sanity check that base text remains readable on dark grey; a full WCAG contrast audit is not part of this spec.
- Updating any external references to the old site name outside this repo (e.g., third-party listings, social media bios) — this is limited to what's in the codebase.
- Any content/copy changes beyond the literal site name/title (e.g., taglines, marketing copy, feature descriptions are untouched unless they contain the old name).

## 4. Edge cases and error behavior

- **Old site name embedded in image assets** (e.g., a logo image file containing the name as a graphic rather than text): flag this explicitly rather than attempting to regenerate/edit image assets, since that's outside a typical code-only change — call this out during implementation review if found.
- **Site name used in dynamic/templated strings** (e.g., string interpolation like "Welcome to {siteName}"): ensure the underlying variable/constant is updated once, so all templated occurrences update automatically, rather than requiring find-and-replace in every template.
- **Hardcoded color values scattered across inline styles or multiple stylesheet files** (as opposed to centralized theme variables/CSS custom properties): if the codebase has no central theme/variables file, this may require touching multiple files — acceptable, but should be noted if it significantly increases the size of the change.
- **Third-party components/widgets** that ship their own default styling (if any) may not fully adopt the new color scheme without extra overrides — if such components exist, note that full visual consistency may require targeted overrides, and partial inconsistency in third-party widget chrome is acceptable if it's not part of the app's own templates.
- **No dependency unavailability scenarios apply** — this is a static content/style change with no runtime service dependency.

## 5. Acceptance criteria

- [ ] All pages sharing the common site layout show a dark grey background/base color scheme.
- [ ] All buttons across the site use orange as their primary visual color (background or prominent border), with a visibly distinct hover/active state.
- [ ] Links, highlighted/active navigation items, and other text accents use orange consistently.
- [ ] Base body text remains clearly legible against the new dark grey backgrounds.
- [ ] The browser tab title on every page reads "Beta Centuri" (or "Beta Centuri — [page-specific suffix]" if the current pattern includes page-specific suffixes).
- [ ] The header/logo text visible to users reads "Beta Centuri".
- [ ] All `<meta>` tags that previously referenced the old site name now reference "Beta Centuri".
- [ ] Footer or any other visible occurrence of the old site name is updated to "Beta Centuri".
- [ ] A search of the codebase for the old site name string turns up no remaining user-visible occurrences (internal-only identifiers excluded, per Section 3).
- [ ] No layout/structural regressions are introduced as a side effect of the theme change (spot-check on main pages).

## 6. Open questions

- What is the current site title/name string that needs to be replaced? (Needed to confirm all occurrences are found — please confirm the exact current name.)
- Is there an existing centralized theme/color-variable mechanism (e.g., CSS custom properties, a theme config file) in this codebase, or are colors likely hardcoded in multiple places? This affects how large the diff will be.
- Should the favicon or app icon be updated as part of this request, given the title change, even though it wasn't explicitly mentioned?
- Is there a specific orange shade/hex and dark grey shade(s) preferred (brand palette), or is the implementer free to choose reasonable, accessible values?
- Are there multiple "modes" or sub-sites (e.g., admin panel vs. public site) that should both receive this theme/title update, or is this scoped to the public-facing site only?
- If the logo is an image asset containing the old name as graphic text, should this spec be expanded to include asset regeneration, or should that be handled as a follow-up?