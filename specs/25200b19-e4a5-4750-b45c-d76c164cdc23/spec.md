   # Spec: Simple Home Page with Navigation Bar and Hero Section for "Minas Tirus"

Status: draft
Job: 25200b19-e4a5-4750-b45c-d76c164cdc23
Target repo: SimonR67/sidney
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to build a simple, static HTML/CSS website consisting of a single home page. This page should include:
- A navigation bar
- A hero section that prominently displays the site title "Minas Tirus"
- A black and orange color scheme applied consistently across the site

The problem this solves is the absence of any existing site structure in the repo — this establishes the initial front-facing page for the "Minas Tirus" site.

Interpretation notes:
- "Simple structure (HTML/CSS, no complex frameworks required)" is interpreted as: plain HTML and CSS files, no JavaScript frameworks (e.g., React, Vue), no build tooling (e.g., webpack, npm bundlers), no CSS frameworks (e.g., Bootstrap, Tailwind) required. Minimal vanilla JavaScript is acceptable only if needed for basic nav interactivity (e.g., mobile menu toggle), but is not required by this spec.
- The navigation bar's exact links/items were not specified in the request. This spec assumes a minimal nav bar (e.g., site name/logo + a small set of placeholder links such as "Home", "About", "Contact") purely as structural scaffolding, since no other pages were requested. See Open Questions.
- "Hero section" is interpreted as a prominent full-width (or near full-width) banner area near the top of the page, below the nav bar, containing the site title "Minas Tirus" as the dominant visual element (e.g., large heading text), optionally with a short subtitle or tagline placeholder.

## 2. Scope

In scope:
- One HTML page (`index.html`) representing the home page.
- One CSS file (e.g., `styles.css`) linked from the HTML page, defining the black and orange color scheme.
- A navigation bar component at the top of the page:
  - Contains the site name/brand and a small set of placeholder nav links (styled, not necessarily functional beyond anchor links or `#`).
  - Styled using the black/orange color scheme (e.g., black background, orange text/accents, or similar contrast).
- A hero section directly below the nav bar:
  - Displays "Minas Tirus" as a large, clearly readable heading (e.g., `<h1>`).
  - Uses the black and orange color scheme (e.g., black or dark background with orange text, or orange accent elements against a black background).
  - Optionally includes a short subtitle/tagline and/or a call-to-action button, styled consistently, as simple placeholder content.
- Basic responsive behavior so the page is readable on both desktop and mobile widths (e.g., via simple CSS flexbox/media queries) — kept lightweight, not a full responsive framework.
- Semantic, valid HTML5 markup (`<nav>`, `<header>`/`<section>` for hero, etc.).
- Basic accessibility considerations: appropriate heading hierarchy, alt text placeholders if images are used, sufficient color contrast between black/orange elements and text.

Out of scope items are listed separately below.

## 3. Out of scope

- Additional pages (About, Contact, Services, etc.) — only the home page is in scope. If nav links point to other pages, they may be placeholder `#` links or omitted entirely; building those destination pages is explicitly not included.
- Any backend, server-side logic, database, or CMS integration.
- Any JavaScript frameworks, CSS frameworks, or build/bundling tooling (React, Vue, Bootstrap, Tailwind, Sass compilation, webpack, etc.).
- Any interactive functionality beyond basic nav display (e.g., no working contact forms, no search, no dynamic content loading, no animations beyond simple CSS transitions if desired).
- Custom logo design, branded imagery, or professional photography — placeholder text/graphics only unless specified otherwise.
- SEO optimization, analytics integration, or third-party script embeds.
- Cross-browser testing beyond modern evergreen browsers (Chrome, Firefox, Safari, Edge current versions).
- Deployment/hosting setup — this spec covers the site's source files only, not publishing infrastructure.
- Domain-specific "Minas Tirus" content (e.g., lore, story content, additional sections about what "Minas Tirus" is) — the title is used purely as branding text; no additional narrative content is assumed unless explicitly requested later.

## 4. Edge cases and error behavior

- **Missing/broken assets (e.g., if an image or icon is referenced in the nav/hero):** page should still render correctly with graceful fallback (e.g., alt text shown, no broken layout). If no images are used, this is not applicable.
- **Very small viewport widths:** nav bar and hero text should remain readable and not overflow horizontally; a simple responsive breakpoint should stack or shrink elements as needed rather than break layout.
- **Very large viewport widths:** hero section and nav bar should not look sparse or broken — content should be centered or constrained with reasonable max-widths.
- **No JavaScript available:** since this is HTML/CSS-first, the page must remain fully functional and readable with JavaScript disabled (no reliance on JS for core content display).
- **Long site title or subtitle text:** hero heading text should wrap gracefully rather than overflow or get clipped.
- **Color contrast failure risk:** since orange-on-black or black-on-orange can have contrast issues depending on exact shades, chosen colors must be checked to maintain reasonable readability (not a strict WCAG audit, but visibly legible text).

## 5. Acceptance criteria

- [ ] Repo contains an `index.html` file that renders a complete, valid HTML5 page.
- [ ] A separate CSS file is linked and used to style the page (no inline-only styling for major layout).
- [ ] Page includes a visible navigation bar at the top containing at least the site name and one or more nav links/placeholders.
- [ ] Page includes a hero section directly below the nav bar.
- [ ] The hero section prominently displays the text "Minas Tirus" as the dominant heading element.
- [ ] The color scheme across the nav bar, hero section, and overall page background/text uses only black and orange (with white/light neutral used only if needed for text legibility, to be confirmed with reviewer).
- [ ] The page renders correctly (no broken layout) at common desktop and mobile viewport widths.
- [ ] No JavaScript framework, CSS framework, or build tool is required to view or edit the site — opening `index.html` in a browser works as-is.
- [ ] Page is free of console errors when opened in a modern browser.

## 6. Open questions

- What specific nav bar items/links are desired (e.g., "Home", "About", "Contact"), or should the nav bar contain only the site name/logo with no additional links for now?
- Should the hero section include any additional content beyond the title "Minas Tirus" (e.g., a tagline, subtitle, or call-to-action button)? If so, what should the text say?
- Are there exact hex/color values preferred for "black" and "orange" (e.g., pure black `#000000` vs. dark charcoal, and a specific shade of orange), or is design discretion acceptable?
- Should any placeholder imagery, icon, or logo be included in the nav bar or hero section, or should this remain text-only for now?
- Is this intended to be a single static page only, or is this the first step toward a multi-page site (which would affect whether nav links should point to real future pages)?