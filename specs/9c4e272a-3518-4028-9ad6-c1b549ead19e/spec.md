   # Spec: Build "Mordor" Home Page with Hero Section and Navigation Bar

Status: draft
Job: 9c4e272a-3518-4028-9ad6-c1b549ead19e
Target repo: SimonR67/sidney
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to build a simple, static HTML website consisting of a single home page. This home page needs two structural elements: a navigation bar and a hero section. The site should use a black and orange colour scheme consistently across the page. The hero section must prominently display the site's name, "Mordor", as a clear title (i.e., large, high-visibility heading text, not buried in body copy).

The problem this solves: the repo currently has no website/homepage scaffold, and the user wants a minimal, themed starting point with the site's identity ("Mordor") front and center.

Interpretation chosen: "Simple HTML website" is read as a static, single-page site built with plain HTML and CSS (no JavaScript framework, no backend, no build tooling required) unless the existing repo already has a stack that should be reused. Since the request only mentions a home page, only one page is in scope — the navigation bar may contain links, but those links are not required to lead to fully-built additional pages (see Scope and Out of scope for how this is handled).

## 2. Scope

- A single home page (e.g., `index.html`) containing:
  - A navigation bar at the top of the page. It should include the site name/logo ("Mordor") and can contain placeholder nav links (e.g., "Home", "About", "Contact") — these can be anchor placeholders (`#`) or link only to the home page itself, since no other pages are being built.
  - A hero section below the nav bar that:
    - Displays "Mordor" as a large, prominent heading (e.g., `<h1>`), clearly the visual focal point of the page.
    - May include a short supporting tagline/subtext (optional, minimal, thematically consistent — e.g., a short line evoking the "Mordor" theme), but the site name/title is the required element.
- A consistent black and orange colour scheme applied across the page:
  - Background(s) predominantly black (or very dark).
  - Accent colour (text highlights, buttons, nav highlights, borders) predominantly orange.
  - Sufficient contrast for readability of text against backgrounds.
- Basic responsive/clean layout so the page renders reasonably on both desktop and mobile widths (simple CSS, no complex breakpoints required).
- Plain HTML + CSS implementation (CSS can be inline `<style>`, a `<style>` block, or a separate `.css` file — implementer's choice, kept simple).
- Semantic HTML structure (e.g., `<nav>`, `<header>`/hero section, appropriate heading tags) for basic accessibility and maintainability.

## 3. Out of scope

- Building out any additional pages beyond the home page (e.g., About, Contact, Blog) — nav links to these are placeholders only, not functional destinations.
- Any backend, server-side logic, database, CMS, or dynamic content.
- JavaScript-driven interactivity (animations, sliders, mobile menu toggle scripts, etc.) unless trivially needed for basic nav usability — not a requirement of this spec.
- Any content beyond what's described (no footer content requirements, no image/media assets, no logo design — a simple text-based "Mordor" title/logo is sufficient).
- SEO optimization, analytics integration, or performance tuning beyond basic sensible HTML/CSS.
- Cross-browser/device testing beyond a basic visual sanity check.
- Deployment/hosting setup — this spec covers only the creation of the HTML/CSS files in the repo, not publishing them anywhere.
- Design system, component library, or theming framework — the black/orange scheme is applied directly and simply, not built as a reusable/configurable theme.
- Custom fonts or icon libraries beyond web-safe/system fonts, unless trivially included.

## 4. Edge cases and error behavior

- No user input is collected on this page, so there is no "invalid input" handling to design for.
- No external dependencies (APIs, fonts from third-party CDNs, JS libraries) are required; if any are used for convenience (e.g., a web font), the page must still render correctly and remain legible if that dependency fails to load (i.e., graceful fallback to system fonts/colours — no broken layout).
- If the nav bar links point to non-existent pages (`#` or unbuilt anchors), this is expected behavior for this spec, not a bug — clicking them should not cause a JavaScript error or broken page.
- Very small or very large viewport widths should not cause the hero title or nav bar to overflow, overlap, or become unreadable — basic responsive behavior (e.g., fluid widths, reasonable font scaling) should be verified.
- Colour contrast should be checked so orange-on-black or black-on-orange text remains legible (avoid low-contrast combinations like dark orange on black).

## 5. Acceptance criteria

- [ ] Repository contains a home page file (e.g., `index.html`) that renders in a browser without errors.
- [ ] Page includes a visible navigation bar element, positioned at the top of the page.
- [ ] Page includes a hero section, positioned near the top of the page (below or including the nav), that visually stands out (e.g., full-width band, larger padding/font).
- [ ] The text "Mordor" appears in the hero section as a large, prominent heading — clearly the most visually dominant text element on the page.
- [ ] The page's colour scheme is visibly and consistently black and orange (background, text, and/or accent elements) across the nav bar and hero section — no other dominant colours used.
- [ ] Page is legible and usable at both a typical desktop width (e.g., 1280px+) and a typical mobile width (e.g., 375px), without major layout breakage.
- [ ] No JavaScript errors occur when loading the page or interacting with nav links.

## 6. Open questions

- Should the navigation bar include specific link labels (e.g., "Home", "About", "Contact"), or is a minimal nav with just the site name/logo sufficient for this first iteration?
- Is there an existing design/tech stack in the `SimonR67/sidney` repo (e.g., a framework, existing CSS files, build tooling) that this new page should integrate with, or should this be a fully standalone static HTML/CSS page?
- Should the hero section include any supporting tagline or imagery evoking "Mordor" (e.g., thematic text, background texture), or should it be limited to just the title as described?
- Is a favicon or page `<title>` tag (browser tab text) expected as part of this spec, or is that out of scope for this iteration?