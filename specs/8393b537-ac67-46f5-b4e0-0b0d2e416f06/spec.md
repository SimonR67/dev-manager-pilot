   # Spec: Rebuild website as "Strange New Worlds"

Status: draft
Job: 8393b537-ac67-46f5-b4e0-0b0d2e416f06
Target repo: SimonR67/sidney
Supersedes (partially): none — this rebuilds the existing site's structure and content wholesale, replacing whatever site currently exists in this repo

## 1. What should change and why

The user wants the existing website rebuilt from scratch as a small, simple site titled "Strange New Worlds." The rebuilt site should have a navigation menu with three items — Home, About Us, and Contact — and use a dark green background with gold-coloured text throughout. The "About Us" and "Contact" sections are explicitly meant to be placeholder content only (e.g. "Coming soon"), not fully built-out pages. The problem this solves is replacing an outdated or unwanted site with a fresh, minimal, on-brand starting point that the user can flesh out later.

No specific technology stack, hosting platform, or content management requirement was given, so the interpretation chosen is: keep whatever underlying tech/framework the repo already uses (if discernible), and if none is established, build the simplest reasonable static site (plain HTML/CSS, no build tooling or frameworks) consistent with "keep the overall design and structure simple."

## 2. Scope

- A rebuilt website with three navigable sections/pages: Home, About Us, Contact.
- A persistent navigation menu (e.g. header nav bar) present on all pages, linking to the three sections above.
- Site title "Strange New Worlds" displayed prominently (e.g. in the header/banner and page `<title>`).
- Home page contains basic introductory content appropriate to the site title (simple welcome text/heading — not elaborate content, since no specific content was requested beyond the title).
- About Us page/section: placeholder content only (e.g. "Coming soon" or equivalent short placeholder text).
- Contact page/section: placeholder content only (e.g. "Coming soon" or equivalent short placeholder text).
- Global colour scheme: dark green background, gold-coloured text/writing, applied consistently across all pages/sections and the navigation menu.
- Simple, clean, minimal layout: no complex grids, animations, sliders, forms, or multi-column layouts unless trivially simple.
- Site should be structured as either a single page with anchored sections or multiple simple pages — either is acceptable, but navigation must clearly move between the three items.

## 3. Out of scope

- Real/final content for About Us and Contact — only placeholder text is required at this stage.
- Any contact form, email integration, or contact functionality (Contact is a placeholder only, not a working form).
- User accounts, authentication, or any dynamic/backend functionality.
- Blog, gallery, e-commerce, search, or any additional pages/features beyond Home, About Us, Contact.
- Responsive/mobile-specific design work beyond basic reasonable behavior (not explicitly requested; a simple layout that doesn't break is sufficient, but pixel-perfect responsive design is not required).
- SEO optimization, analytics integration, or performance tuning.
- Custom fonts, icons, imagery, or branding assets beyond the specified colour scheme (dark green background, gold text) unless trivial to include.
- Animations, transitions, or interactive UI flourishes.
- Accessibility audit/compliance work beyond sensible defaults (e.g., using semantic HTML) — not explicitly requested, so not a hard requirement, but not deliberately excluded either if it's low effort.
- Deployment/hosting setup, unless the repo already has an established deployment pipeline this rebuild should slot into (in which case only reuse it, don't build new infrastructure).

## 4. Edge cases and error behavior

- If the repo has no existing site structure to "rebuild," this spec covers building a new minimal site from scratch instead — this is treated as the same task, not a blocker.
- If the existing site uses a specific framework/CMS not obvious from a quick look, default to preserving that framework rather than introducing a new one, to keep the change minimal.
- Navigation links should never lead to a broken/missing page — About Us and Contact must resolve to their placeholder content, not a 404.
- If colour scheme (dark green + gold) results in poor contrast/readability in some component, prioritize keeping the requested colours but choose shades that keep text legible (e.g. a gold that's readable on dark green, not pure yellow-on-black-green with no thought to contrast).
- No dependency on external services (APIs, databases) is introduced by this feature, so "dependency unavailable" scenarios are not applicable — noted as N/A for this spec.
- No user input is collected anywhere on the site (no forms), so invalid-input handling is not applicable — noted as N/A for this spec.

## 5. Acceptance criteria

- [ ] Site displays the title "Strange New Worlds" visibly on the page(s) and in the browser tab title.
- [ ] A navigation menu with exactly three items — Home, About Us, Contact — is present and functional on every page/section.
- [ ] Clicking/navigating to Home shows introductory/welcome content.
- [ ] Clicking/navigating to About Us shows placeholder text (e.g. "Coming soon").
- [ ] Clicking/navigating to Contact shows placeholder text (e.g. "Coming soon").
- [ ] The background colour across all pages/sections is dark green, and all text/writing is gold-coloured, including within the navigation menu.
- [ ] No unrelated pages, forms, or features are present — the site contains only Home, About Us, and Contact.
- [ ] The layout is simple and clean: no complex components, no unnecessary visual elements beyond the nav, title, and placeholder/intro text.

## 6. Open questions

- Should Home, About Us, and Contact be separate HTML pages, or a single page with in-page anchor navigation (e.g. `#about`, `#contact`)? Either satisfies the request, but the reviewer may have a preference.
- Is there an existing site/framework in the repo that should be preserved/reused, or is a full from-scratch rebuild expected regardless of current contents?
- Any preference on exact shades of "dark green" and "gold" (e.g. specific hex codes), or is reasonable designer discretion acceptable?
- Should the Home page include any specific content/copy beyond a generic welcome message, given "Strange New Worlds" as a title (e.g. is this a sci-fi themed personal/fan site, a business, something else)?
- Is any deployment/publishing step expected as part of this work, or is committing the rebuilt site files to the repo sufficient?