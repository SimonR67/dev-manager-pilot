   # Spec: Simple HTML Website — Home Page with Nav Bar and Hero Section

Status: draft
Job: ab064744-ddea-48d8-98a8-e46f1b980268
Target repo: SimonR67/quake-revised
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to build a simple, static HTML website for a home page that includes:
- A navigation bar
- A hero section
- A black and orange color scheme applied consistently throughout
- A clear, prominent site title, "Quake Revised", displayed in the hero section

The problem this solves: the repo currently has no web front-end/landing page. This creates a minimal, presentable home page that establishes the site's identity (name, branding, basic navigation) as a starting point for future pages/content.

Interpretation of ambiguous points:
- "Simple HTML website" is interpreted as static HTML/CSS (and minimal or no JavaScript), not a framework-driven or dynamic site, since the request emphasizes simplicity.
- "Nav bar" is interpreted as a basic horizontal navigation bar with placeholder links (e.g., Home, and possibly a couple of stub links like About/Downloads), since no specific nav items were given. Actual destinations for these links are an open question (see Section 6).
- "Hero section" is interpreted as a full-width banner area near the top of the page containing the site title "Quake Revised" prominently (large heading/logo-style text), optionally with a short tagline or subtitle, though no tagline text was specified by the user.
- "Black and orange color scheme throughout" means the nav bar, hero section, backgrounds, text, buttons/links, and any other visible UI elements use only black, orange, and neutral supporting shades (e.g., white/light gray for text contrast) — no other accent colors.

## 2. Scope

- A single home page (`index.html`) built with static HTML and CSS.
- A nav bar component at the top of the page:
  - Contains the site name/logo text ("Quake Revised") and a small set of nav links (placeholder links acceptable, e.g., "Home").
  - Styled with the black/orange color scheme (e.g., black background, orange text/highlights, or orange background with black text/accents).
- A hero section directly below or as part of the nav bar area:
  - Displays "Quake Revised" as a large, prominent heading (e.g., `<h1>`).
  - Uses the black and orange color scheme (e.g., black or dark background with orange title text, or orange background with black title text).
  - May include a short supporting subtitle/tagline placeholder and/or a call-to-action button, styled consistently with the color scheme, if useful for visual balance — but no specific tagline copy is mandated.
- Global styling (CSS) applied site-wide (or at least to this page) to enforce the black and orange color palette across backgrounds, text, links, and buttons.
- Basic responsive layout so the nav bar and hero section render reasonably on both desktop and mobile widths (simple CSS, no heavy framework required).
- The page should be a self-contained deliverable: HTML file(s) plus one CSS file (and any minimal assets like a favicon if desired), placed appropriately in the repo.

## 3. Out of scope

- Any additional pages beyond the home page (no About, Downloads, Contact, etc. pages — nav links to such pages, if included, may be placeholders/non-functional or link to "#").
- Backend functionality, server-side rendering, databases, or dynamic content of any kind.
- JavaScript-driven interactivity beyond minimal needs (e.g., a mobile nav toggle is not required unless trivially simple; no animations, sliders, carousels, or JS frameworks).
- Integration with the actual "Quake Revised" game/mod itself (no game assets, downloads, screenshots, or gameplay content are being sourced or added as part of this spec).
- SEO optimization, analytics integration, or accessibility auditing beyond basic semantic HTML.
- Custom logo/graphic design work (the title will be rendered as styled text unless a logo asset is separately provided).
- Cross-browser/legacy browser testing beyond modern evergreen browsers.
- Build tooling, bundlers, CSS preprocessors (e.g., Sass), or any front-end framework (React, Vue, etc.) — plain HTML/CSS only.
- Deployment/hosting configuration (this spec covers the page's creation, not how/where it is served).

## 4. Edge cases and error behavior

- **Missing or broken nav links:** Since no destination pages exist yet, nav links (other than "Home") should degrade gracefully — e.g., link to `#` or clearly marked as placeholders — rather than pointing to broken/404 URLs.
- **Small viewport widths:** The nav bar and hero title text must remain readable and not overflow or overlap on narrow (mobile) screens; text should wrap or scale down rather than break the layout.
- **Long title rendering:** "Quake Revised" is short and fixed text, but the hero heading styling should not assume a specific exact pixel width in a way that breaks if font rendering differs slightly across browsers/OS.
- **No JavaScript dependency failure:** Since this is a static HTML/CSS page with no required JS, there is no dependency to fail; if any optional JS is added (e.g., mobile nav toggle), the page must remain functional/readable with JS disabled.
- **Color contrast:** Orange-on-black or black-on-orange combinations must maintain sufficient contrast for text legibility (not full WCAG audit, but avoid unreadable combinations like light orange text on a similarly light background).
- **No content/CMS input validation applies:** This is a static page with fixed content, so there is no user input to validate.

## 5. Acceptance criteria

- [ ] A home page file exists in the repo (e.g., `index.html`) and renders correctly in a modern browser.
- [ ] The page includes a visible nav bar at the top with at least a "Home" link and site branding text.
- [ ] The page includes a hero section clearly visually distinct from the nav bar (e.g., via background color/size).
- [ ] The hero section prominently displays the text "Quake Revised" as the main heading, larger and more visually dominant than any other text on the page.
- [ ] The overall color palette used across the nav bar, hero section, and general page background/text is limited to black, orange, and neutral supporting colors (e.g., white/gray for readability) — no unrelated accent colors.
- [ ] The layout does not visibly break (overlapping text, unreadable content, horizontal scroll) at common desktop (~1440px) and mobile (~375px) viewport widths.
- [ ] No JavaScript errors occur on page load (if any JS is included).
- [ ] All styling is contained in HTML/CSS files added to the repo, with no external framework dependencies required.

## 6. Open questions

- Should the nav bar include additional links beyond "Home" (e.g., placeholders for "About", "Downloads", "News"), or should it only contain the site title/logo and a single "Home" link for now?
- Is there a specific tagline or subtitle text the reviewer wants under "Quake Revised" in the hero section, or should the hero contain only the title (and perhaps a generic placeholder call-to-action button)?
- Are there existing brand assets (logo image, specific font, exact hex color codes for the "orange") that should be used, or is the AI free to choose reasonable black/orange hex values and a standard web-safe or Google Font?
- Where in the repo structure should this HTML/CSS live (e.g., repo root, a `public/` or `web/` folder), given the repo's current structure is unknown/unspecified?
- Is a favicon or basic page metadata (title tag, meta description) expected as part of "simple HTML website," or is that unnecessary polish for this first pass?