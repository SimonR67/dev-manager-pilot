   # Spec: Black, Gold, and Aqua Colour Theme

Status: draft
Job: dccfae81-4d05-4206-9959-224ae7058bcc
Target repo: SimonR67/sidney
Supersedes (partially): existing colour/theme rules in the site's current CSS/stylesheet(s) — not a new capability, this replaces existing colour values

## 1. What should change and why

The user wants the visual colour scheme of the website updated to a black, gold, and aqua palette. Specifically:

- Page background: black
- Title and all headline elements (h1, h2, h3, h4, h5, h6) text colour: gold
- All other body/paragraph text (p, li, span, div text, links unless otherwise styled, etc.): aqua

The problem this solves is purely cosmetic/branding — the site currently uses a different colour scheme, and the user wants a consistent, distinctive black/gold/aqua look applied site-wide rather than on a single page.

Interpretation chosen: "the title" is read to include both the browser/tab `<title>` text where visually rendered (if there is an on-page title/heading element acting as the page title, e.g. a top banner or h1) and general headline tags. Since `<title>` in `<head>` has no visible colour (it's not rendered on the page, only in the browser tab), the gold colour rule is applied to whatever visible heading element serves as the page title plus all h1–h6 tags. This is the standard interpretation of "title and headlines" for CSS styling purposes.

"All other body/paragraph text" is interpreted as all standard text content that is not a heading — this includes paragraphs, list items, generic text containers, and similar — and should default to aqua unless a specific element is a heading.

## 2. Scope

- Locate the site's existing CSS/stylesheet file(s) (or inline `<style>` blocks / style attributes if no external stylesheet exists) used across the site.
- Set the background colour of the page/body (`body` or main page wrapper element) to black.
- Set the text colour of all headline elements (h1, h2, h3, h4, h5, h6) to gold, applied consistently wherever these elements appear across all pages/templates in the site.
- Set the text colour of all other standard body/paragraph text elements (p, li, span, generic text, etc., excluding headlines) to aqua.
- Apply these changes consistently across every page/template in the site, not just one page — i.e., update shared/global CSS rather than page-specific overrides, so the theme is uniform site-wide.
- If the site uses a shared/global stylesheet, make changes there. If styles are duplicated per-page (inline or per-page `<style>` blocks), update each occurrence so the result is visually consistent across the whole site.
- Exact shades: standard/common CSS colour values for "black", "gold", and "aqua" (e.g. `#000000`, `gold`/`#FFD700`, `aqua`/`#00FFFF`) unless the codebase already defines specific named theme variables, in which case those existing variables should be updated to these colours.

## 3. Out of scope

- Any change to page layout, structure, HTML markup, fonts, font sizes, spacing, or component structure — this is a colour-only change.
- Styling of non-text elements such as buttons, borders, icons, images, form fields, tables, navigation bars, unless they are directly affected by the "background" or "text colour" rules described above (e.g. button background colour, border colour, hover/focus states are NOT included unless the request is later clarified to include them).
- Link colour/hover/visited states are not explicitly mentioned by the user; unless links are considered "body text," their specific colour treatment (e.g., distinguishing from aqua paragraph text) is not defined here and is out of scope for this pass (see Open Questions).
- Any dark-mode/light-mode toggle or theme-switching functionality — this is a single, fixed theme replacing the current one, not a configurable/multi-theme system.
- Accessibility/contrast auditing beyond what's requested (e.g., WCAG contrast ratio compliance is not a stated requirement, though gold-on-black and aqua-on-black are reasonably high contrast).
- Any content changes, copy changes, or restructuring of pages.
- Any changes to non-CSS assets (images, logos, favicons) even if they currently clash with the new colour scheme.
- Print stylesheets or email templates, unless they are part of the same shared CSS file already in scope.

## 4. Edge cases and error behavior

- If an element currently has an inline `style` attribute or a more specific CSS rule overriding colour, the global rule may not visually apply — these overrides should be identified and updated too so the theme is consistent; if this is not feasible within scope, it should be flagged rather than silently left inconsistent.
- If the site has multiple stylesheets (e.g., one per page/template) rather than one shared file, all of them need to be updated to avoid an inconsistent look on some pages.
- If there are elements that are technically headings but used for non-title purposes (e.g., a decorative "h2" styled as a small label), applying gold uniformly may look visually odd — this is accepted as expected behavior per the literal request unless the reviewer flags a specific exception.
- If the site has no existing CSS file and relies entirely on inline styles or a CSS-in-JS/templating system, the same colour rules should still be applied consistently, but the exact mechanism will depend on repo structure discovered during implementation.
- No user input or dynamic data is involved in this change, so there is no "invalid input" handling scenario in the traditional sense — this is a static styling change.
- No external dependency is required for this change (no new libraries/services), so "dependency unavailable" does not apply.

## 5. Acceptance criteria

- [ ] The page background renders as black across all pages of the site.
- [ ] All h1–h6 elements (and any element functioning as a visible page title/headline) render with gold text colour, on every page/template.
- [ ] All standard body/paragraph text (non-heading text) renders with aqua text colour, on every page/template.
- [ ] The colour changes are implemented in the site's CSS/styling source (not just visible on one sample page) so the theme is consistent site-wide.
- [ ] No layout, structural, or non-colour visual properties are changed as a side effect.
- [ ] No page is left using the old colour scheme due to a missed stylesheet, inline style, or per-page override.

## 6. Open questions

- Should hyperlinks/anchor text be treated as "body text" (aqua) or should they retain a distinct colour (e.g., gold or another accent) for visual distinction from surrounding text? The request doesn't mention links explicitly.
- Is there an existing design system or CSS variable/theme file in the repo that should be the single source of truth for these colours, or should the colours be hard-coded wherever they appear?
- Should hover/focus/active states for interactive elements (buttons, links) also be updated to fit the new theme, or left as-is since they weren't mentioned?
- Are there any pages, admin panels, or components explicitly excluded from this reskin (e.g., an admin dashboard vs. public-facing pages), or does "the webpage" mean the entire site including all sub-sections?
- Should the exact colour values use named CSS colours (`gold`, `aqua`) or should specific hex codes be provided/approved by the reviewer for brand consistency?