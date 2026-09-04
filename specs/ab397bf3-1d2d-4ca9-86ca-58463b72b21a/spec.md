   # Spec: Simple "Gondor" Landing Page (index.html)

Status: draft
Job: ab397bf3-1d2d-4ca9-86ca-58463b72b21a
Target repo: SimonR67/sidney
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to build a simple single-page HTML website for a site/brand called "Gondor". The page needs a navigation bar with branding and links, a hero section with a prominent heading, tagline, and call-to-action button, all styled in a black and orange color scheme, and basic responsive CSS so it looks reasonable on both desktop and mobile.

The problem this solves: there is currently no landing page for this brand/site; this creates a minimal, self-contained starting point (no build tools, no frameworks) that can be extended later.

Ambiguity and chosen interpretation:
- The request does not specify what "About" and "Contact" nav links should point to. Interpretation: these will be placeholder anchor links (e.g. `#about`, `#contact`) or simple `href="#"` links, since no additional pages or sections are explicitly requested beyond the hero. No actual About/Contact page content will be built unless clarified (see Open Questions).
- The request says "call-to-action button" without specifying the action or label. Interpretation: a generic CTA button (e.g. "Get Started" or "Learn More") that links to `#` or an in-page anchor, since no specific destination or action was given.
- "Basic responsive CSS" is interpreted as a single breakpoint (e.g. via media query) that adjusts nav layout (e.g. stacking or collapsing links) and hero text sizing for narrow viewports — not a full responsive framework or hamburger-menu JS interaction.

## 2. Scope

In scope:
- A single `index.html` file containing:
  - A `<nav>` element with:
    - Site branding/logo text "Gondor"
    - 3 nav links: Home, About, Contact (as in-page anchors or `#` placeholders)
  - A hero section directly below the nav containing:
    - A large, prominent heading displaying "Gondor"
    - A short tagline/subtext (one sentence, placeholder copy is fine, e.g. "One site to rule them all.")
    - A single call-to-action button (styled, not necessarily wired to real functionality)
  - Black and orange color scheme applied throughout:
    - Black (or near-black) background for nav and/or page background
    - Orange used for headings, accents, links, and/or button background
  - CSS styling either inline via a `<style>` tag in the `<head>` of `index.html`, or as a separate `styles.css` file linked from `index.html` (either approach is acceptable; a single-file approach with inline `<style>` is the default unless the reviewer prefers a separate stylesheet)
  - Responsive behavior via at least one CSS media query so the layout doesn't visibly break on mobile-width viewports (e.g. nav links wrap/stack, hero text scales down)
- Plain HTML/CSS only — no JavaScript required for core functionality (a mobile menu toggle is not required)
- No external frameworks (no Bootstrap, Tailwind, etc.) and no build step

Out of scope items are listed explicitly in Section 3.

## 3. Out of scope

- Actual "About" and "Contact" pages/sections with real content — only placeholder links/anchors are in scope
- Working contact form or form backend/submission handling
- JavaScript-driven interactivity (mobile hamburger menu toggle, animations, smooth scroll, etc.) — plain CSS only
- Any CSS/JS frameworks or libraries (Bootstrap, Tailwind, jQuery, React, etc.)
- Multi-page site structure, routing, or a build/bundling pipeline
- SEO metadata, favicon, social sharing tags, or analytics integration
- Accessibility audit beyond basic semantic HTML (e.g. using `<nav>`, `<h1>`, `<button>`/`<a>` appropriately) — no ARIA audit or WCAG compliance testing
- Cross-browser testing beyond modern evergreen browsers (Chrome/Firefox/Safari/Edge current versions)
- Deployment/hosting setup (e.g. GitHub Pages configuration) — only the file(s) themselves are in scope
- Real brand assets (logo image, custom fonts, icon files) — text-based branding only unless specified otherwise

## 4. Edge cases and error behavior

- No user input is collected on this page, so there is no "invalid input" handling to design — the CTA button and nav links can be non-functional placeholders (`href="#"`) if no real destination exists.
- No external dependencies (no CDN-hosted CSS/JS, no fonts loaded from external services) are required, so there is no "dependency unavailable" scenario to handle. If a web font is desired later, it is out of scope for this spec and should default to system fonts.
- Very narrow viewports (e.g. < 320px) are not explicitly targeted; the media query breakpoint should be chosen to reasonably cover common mobile widths (e.g. ≤ 600px or ≤ 768px), but pixel-perfect support for extremely small or unusual screen sizes is not required.
- If nav links list grows beyond 3 items in the future, current layout is not required to gracefully handle overflow — that's a future concern.

## 5. Acceptance criteria

- [ ] `index.html` exists at the repo root (or specified path) and renders without errors in a modern browser
- [ ] Page includes a `<nav>` element showing the text "Gondor" as branding and at least the links Home, About, Contact
- [ ] A hero section is visible directly below the nav bar containing a prominent heading with the text "Gondor", a short tagline/subtext, and one visible call-to-action button
- [ ] The color scheme is visibly black and orange — background/nav in black (or near-black), with orange used for at least the heading text and/or the CTA button
- [ ] CSS is included either inline in a `<style>` tag or via a linked stylesheet — no external framework CSS is loaded
- [ ] At least one CSS media query exists that changes layout for narrow viewports (e.g. nav or hero text adjusts) and the page does not visibly break (no horizontal overflow, unreadable overlapping text) at common mobile widths (~375px) and desktop widths (~1440px)
- [ ] No JavaScript framework, external library, or build tool is required to view the page — opening `index.html` directly in a browser works
- [ ] Nav links and CTA button are present and clickable, even if they point to placeholder anchors (`#`)

## 6. Open questions

- Should the About and Contact nav links point to actual sections/pages, or is `href="#"` / placeholder acceptable for this first version?
- Is there specific copy desired for the tagline and CTA button label, or is placeholder text acceptable (e.g. "One site to rule them all." / "Get Started")?
- Should the CSS live inline in `index.html` or as a separate `styles.css` file — is there a repo convention to follow?
- Are there existing brand assets (logo image, specific hex codes for the orange/black, fonts) that should be used instead of generic placeholder colors/text?
- Is a mobile navigation toggle (hamburger menu) desired in a future iteration, or is simple wrapping/stacking of nav links on mobile sufficient long-term?