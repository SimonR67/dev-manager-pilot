   # Spec: Gondor Home Page (Hero + Navigation, Black/Orange Theme)

Status: draft
Job: 8462275f-63c8-4fa5-9caa-ff5af056f746
Target repo: SimonR67/sidney
Supersedes (partially): none — new capability

## 1. What should change and why

The request asks for a simple static HTML website with a single home page. That page should contain:
- A navigation bar
- A hero section displaying the site title "Gondor" prominently
- A black and orange colour scheme applied consistently across the page

The problem this solves: there is currently no site/home page in this repo matching this design intent. The goal is a minimal, clean landing page skeleton that can serve as a starting point for a site branded "Gondor."

Interpretation of ambiguous points:
- "Simple HTML website" is interpreted as a single home page (`index.html`) plus a separate CSS file — no build tooling, no framework, no JavaScript required.
- "Navigation bar" is interpreted as a basic horizontal nav bar with placeholder links (e.g. Home, About, Contact), since no specific pages or link targets were given. Links may point to `#` or in-page anchors since no other pages are in scope.
- "Hero section" is interpreted as a full-width or prominent banner area near the top of the page (below or including the nav) containing the large "Gondor" title, and optionally a short subtitle/tagline area left minimal/empty since none was specified.
- "Black and orange colour scheme throughout" is interpreted as: black (or near-black) as the dominant background/base colour, orange as the accent colour (used for highlights, nav bar accents, hero title or background, buttons/links, hover states), applied consistently across nav and hero.

## 2. Scope

- One HTML file (e.g. `index.html`) representing the home page.
- One CSS file (e.g. `style.css`) linked from the HTML, containing all styling.
- Navigation bar:
  - Horizontal layout, positioned at the top of the page.
  - Contains a small set of placeholder nav links (e.g. Home, About, Contact) — text-only, styled with the colour scheme, with basic hover state.
  - No functional routing to other pages required; links can be `#` placeholders.
- Hero section:
  - Positioned directly below the nav bar.
  - Displays "Gondor" as a large, clearly prominent heading (e.g. `<h1>`).
  - May include a short supporting subtitle or tagline as optional decorative text (not specified by the user, so kept minimal/generic or omitted).
  - Visually distinct as a "hero" (e.g. full-width band, larger padding/height, background colour or accent).
- Colour scheme:
  - Black (or near-black) and orange used consistently across nav bar and hero section (background, text, borders, accents as appropriate).
  - No other colours introduced except necessary neutrals (e.g. white/light grey for text readability) if needed for contrast.
- Plain, semantic HTML5 and plain CSS only — no CSS frameworks (e.g. Bootstrap), no JS libraries, no build step, no preprocessors (Sass/Less).
- Basic responsive-friendly structure is acceptable but not a hard requirement (see Open Questions).

## 3. Out of scope

- Additional pages (About, Contact, etc.) — only the home page is built, even though nav links reference them.
- JavaScript functionality of any kind (menus, animations, interactivity, mobile hamburger nav toggle, etc.).
- CSS frameworks, component libraries, or build tooling (webpack, Sass, Tailwind, etc.).
- Backend/server logic, routing, or CMS integration.
- SEO optimization, meta tags beyond the basics, analytics, or favicon design work.
- Custom fonts/web font loading (system/default fonts are acceptable unless specified otherwise).
- Content beyond the home page (footer content, additional sections like "About Gondor," galleries, forms, etc.) unless trivially needed to make the hero/nav look complete — anything beyond hero + nav bar is not required.
- Accessibility audit beyond basic semantic HTML (e.g. no full WCAG compliance pass).
- Cross-browser testing beyond modern evergreen browsers.
- Deployment/hosting setup.

## 4. Edge cases and error behavior

- No dynamic input exists (static HTML/CSS), so classic "invalid input" handling does not apply.
- No external dependency (no CDN-hosted CSS/JS, no fonts, no images required) — since there's nothing to fail to load, there is no "dependency unavailable" failure mode. If an image/logo were to be added later, missing-image fallback (e.g. `alt` text) should be considered, but no image asset is required by this spec.
- Browser window resizing: the page should not visibly break (e.g. nav overlapping hero, text overflowing) on common desktop widths; full mobile responsiveness is not strictly required but should not look broken (see Open Questions).
- Missing/placeholder nav link targets (`#`) are acceptable and not treated as an error since no additional pages are in scope.
- Long or wrapped browser window sizes causing the "Gondor" title to wrap awkwardly — acceptable if it remains legible; not required to have fluid typography scaling.

## 5. Acceptance criteria

- [ ] Repository contains a home page file (e.g. `index.html`) that opens correctly in a browser with no console errors.
- [ ] A CSS file is linked from the HTML and contains all styling (no inline style-heavy markup).
- [ ] Page includes a visible navigation bar near the top with at least a couple of placeholder links.
- [ ] Page includes a hero section (distinct visual band) displaying "Gondor" as a large, prominent heading.
- [ ] Black and orange are the dominant colours used across the nav bar and hero section (verifiable by inspecting CSS colour values).
- [ ] No JavaScript files or frameworks are included.
- [ ] No CSS frameworks or preprocessor output are included — plain CSS only.
- [ ] Page structure uses semantic HTML elements where reasonable (e.g. `<nav>`, `<header>` or `<section>` for hero).

## 6. Open questions

- Should the navigation bar links correspond to any real intended future pages, or are purely placeholder/non-functional links acceptable indefinitely?
- Is any responsive/mobile behavior required (e.g. nav bar collapsing on small screens), or is a simple fixed/basic layout sufficient for this first version?
- Should a subtitle/tagline accompany "Gondor" in the hero, or should the hero contain only the title with no additional copy?
- Are there existing brand assets (logo, exact hex colour codes for "black" and "orange") to use, or is the author free to choose specific shades?
- Should this home page replace any existing content at the repo root, or be added fresh (repo contents/existing files were not reviewed as part of this spec)?