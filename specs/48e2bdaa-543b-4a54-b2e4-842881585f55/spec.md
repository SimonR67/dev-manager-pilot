   # Spec: Simple HTML Home Page with Hero Section and Navigation Bar ("BetaMax")

Status: draft
Job: 48e2bdaa-543b-4a54-b2e4-842881585f55
Target repo: SimonR67/sidney
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to build a simple, static HTML website consisting of a Home page. The page must include two structural elements: a navigation bar and a hero section. The hero section must prominently display the site title "BetaMax". The visual design should follow a dark green and orange color scheme throughout.

The problem this solves: there is currently no website in this repo. This spec covers the initial, minimal version — a single Home page with the foundational layout (nav + hero) that establishes the site's branding and visual identity, which future pages/sections can build on later.

Interpretation chosen: "Simple HTML website" is interpreted as a static site built with plain HTML and CSS (no JavaScript framework, no backend, no build tooling required), since the request emphasizes simplicity and does not mention any dynamic functionality, backend, or additional pages. "Home page" is interpreted as the single page delivered in this iteration — the request does not describe other pages, so only one page is built. "Navigation bar" is interpreted as a visual/structural nav element (e.g., a header bar with a logo/title and menu-style links), but since no other pages exist yet, its links may be placeholder/anchor links (e.g., to sections on the same page) rather than links to other pages.

## 2. Scope

- A single static HTML page (Home page) styled with CSS, using plain HTML/CSS only.
- A navigation bar at the top of the page containing:
  - The site name/logo text ("BetaMax") or a simple placeholder logo.
  - A small set of nav links (e.g., Home, About, Contact) — these can be placeholder anchors (`#`) or same-page anchors, since no other pages are being built.
- A hero section directly below (or as part of) the navigation bar that:
  - Prominently displays the site title "BetaMax" as the main heading (large, bold, clearly the visual focal point).
  - May include a short supporting subtitle/tagline (a simple, generic placeholder is acceptable since none was specified).
  - May include a simple call-to-action button (optional, kept minimal, styled to match the color scheme).
- A color scheme applied consistently across the nav bar and hero section using dark green as the primary/background color and orange as the accent/highlight color (e.g., for buttons, links, hover states, or the title text).
- Basic responsive behavior so the page looks reasonable on both desktop and mobile widths (simple CSS, no complex breakpoints required).
- Semantic, valid HTML structure (e.g., `<header>`, `<nav>`, `<section>`).

## 3. Out of scope

- Any additional pages (About, Contact, Services, Blog, etc.) beyond the Home page — only Home is being built now.
- Backend functionality, forms that submit data, databases, or server-side processing.
- JavaScript-driven interactivity beyond basic CSS hover/focus states (e.g., no mobile hamburger menu toggle logic unless trivially achievable with CSS alone).
- CSS/JS frameworks or build tooling (e.g., Bootstrap, Tailwind, React, Webpack) — plain HTML/CSS only, per the "simple" requirement.
- Content sections beyond the nav bar and hero (e.g., footer, testimonials, pricing, image galleries) — not requested and not included.
- Custom logo/icon design or branded imagery — text-based title only unless a placeholder is trivially added.
- Accessibility audit beyond basic semantic HTML (no WCAG compliance testing, ARIA deep-dive, etc.).
- SEO optimization, analytics integration, or meta-tag strategy beyond basic `<title>` and viewport tags.
- Hosting/deployment setup — this spec covers the HTML/CSS files only, not publishing them live.
- Cross-browser testing beyond modern evergreen browsers (Chrome, Firefox, Safari, Edge).

## 4. Edge cases and error behavior

- Invalid input: not applicable in the traditional sense since this is a static page with no user input fields or forms in scope.
- Missing/unavailable dependencies: since no external frameworks or CDNs are required, there is no dependency-availability risk; if a web font is used, a system-font fallback must be specified in the CSS so the page still renders correctly if the font fails to load.
- Narrow viewport / mobile screens: the nav bar and hero section must remain readable and not visually broken (e.g., text overflowing, overlapping elements) at common mobile widths (~320–480px).
- Long or wrapped browser window resizing: the hero title "BetaMax" must remain visible and not clipped or overflow its container at various window widths.
- No JavaScript environment: since the page uses plain HTML/CSS only, it must be fully functional and correctly styled even with JavaScript disabled.

## 5. Acceptance criteria

- A Home page HTML file exists and renders correctly in a modern browser without console errors.
- The page includes a visible navigation bar at the top of the page.
- The page includes a hero section with "BetaMax" displayed as a large, clearly prominent heading — visually the most dominant text element on the page.
- The overall color palette visibly uses dark green as a primary color and orange as an accent color, applied to at least the nav bar and hero section.
- The page layout does not visibly break (overlapping text, unreadable content) at both a typical desktop width (~1280px) and a typical mobile width (~375px).
- No JavaScript is required for the page to display correctly.
- HTML is semantic and valid (passes basic validation, e.g., no unclosed tags, appropriate use of `<header>`/`<nav>`/`<section>`).

## 6. Open questions

- Should the navigation bar include specific link labels (e.g., Home, About, Services, Contact), or is a minimal/placeholder set acceptable given only the Home page exists?
- Is there a specific tagline/subtitle text intended for the hero section under "BetaMax", or should a generic placeholder be used?
- Are there specific exact color hex values for "dark green" and "orange" the reviewer wants, or is reasonable designer discretion acceptable?
- Should the hero section include a call-to-action button (e.g., "Learn More"), or should the hero be text-only (title + optional subtitle)?
- Is a logo/icon expected alongside the "BetaMax" text in the nav bar, or is text-only branding sufficient?