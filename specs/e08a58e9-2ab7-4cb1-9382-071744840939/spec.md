   # Spec: Add footer with copyright notice to homepage

Status: draft
Job: e08a58e9-2ab7-4cb1-9382-071744840939
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a footer element to the homepage of the application that displays a copyright notice (e.g., "© 2025 [Project/Company Name]. All rights reserved."). Currently the homepage has no footer, so there is no persistent branding, attribution, or copyright statement visible to users.

The request is fairly simple but has a couple of ambiguous points, resolved as follows:
- **Which "homepage"**: Interpreted as the main landing/dashboard page a user sees after loading the app (or the root `/` route if unauthenticated). If the app has a distinct marketing landing page vs. an authenticated dashboard, this spec targets whichever page currently serves as the root route.
- **Copyright text content**: No specific name/year/entity was provided. Interpretation chosen: use a generic, dynamically-generated year (current year) plus a placeholder project name (e.g., "Dev Manager Pilot") until the actual owning entity name is confirmed by the reviewer (see Open Questions).
- **Scope of footer**: Interpreted narrowly — this is about adding a footer to the homepage only, not a global/app-wide footer across every page, unless the homepage layout is shared by other pages already (in which case it would naturally propagate).

## 2. Scope

- Add a `<footer>` element (or equivalent component) to the homepage.
- The footer contains a single-line copyright notice in the format: `© {current year} Dev Manager Pilot. All rights reserved.`
- The year is computed dynamically (e.g., `new Date().getFullYear()`) so it doesn't require manual updates each year.
- Basic, minimal styling consistent with the existing homepage design system (font, color, spacing) — small text, centered or aligned per existing layout conventions, positioned at the bottom of the page content.
- The footer is a static, non-interactive element (no links, no buttons) unless explicitly requested later.
- If the homepage uses a shared layout/component structure, the footer may be added to that shared layout so it renders consistently — but functional testing/acceptance is scoped only to the homepage.

## 3. Out of scope

- Adding the footer to every page of the application (unless it's a natural side effect of a shared layout already used only by the homepage).
- Additional footer content such as navigation links, social media icons, contact info, legal/privacy policy links, sitemap, or newsletter signup.
- Internationalization/localization of the copyright text.
- Making the footer sticky/fixed to the viewport bottom.
- Configurability of the copyright text via admin settings or environment variables (the text is hardcoded/static for this