# IAT 339 Portfolio Project Rules

## Project Goal

Refactor and complete this portfolio website for IAT 339 P03.

The portfolio presents Ally Cui as a UI/UX and interaction designer who creates thoughtful, playful, and clear interactive experiences.

Primary ethos:

> Designer of clear, playful systems.

Supporting ethos:

> I design thoughtful, playful, and clear interactive experiences by turning complex systems into interactions that feel easier to understand, navigate, and enjoy.

Do not replace the portfolio with a generic template. The final visual layout and aesthetic must remain original to this project.

---

## Mandatory Workflow

Before editing code:

1. Read `AGENTS.md`.
2. Read every file in `/docs`.
3. Inspect the existing repository structure and current HTML, CSS, JavaScript, image, and media files.
4. Explain the proposed plan before changing more than one page.
5. Preserve working content, real project links, project media, and existing visual sections unless the user asks to change them.
6. Do not delete files or remove working sections without explaining why.

When a decision is genuinely unclear, ask one concise question before making assumptions.

---

## Required Pages

The final portfolio must include:

* `index.html`
* `work.html`
* `stylist.html`
* `export-to-reality.html`
* `about.html`
* `contact.html`
* `style-guide.html`
* `citations.html`

Every page must include:

* a skip-to-content link
* a shared accessible header
* working navigation links
* a main landmark
* a shared footer
* footer links to Style Guide and Citations
* a unique page title
* a meta description
* no placeholder `href="#"` links
* no fake contact details

`index.html` must be the portfolio home page, not the Style Guide.

All final content, project links, contact methods, citations, and media sources must be real. Do not invent claims, metrics, research findings, external links, or citations.

---

## IAT 339 Coding Requirements

Use:

* valid HTML5
* `<html lang="en">`
* one meaningful `<h1>` per page
* logical `<h2>` and `<h3>` hierarchy
* semantic HTML using `header`, `nav`, `main`, `section`, `article`, and `footer`
* meaningful `alt` text for non-decorative images
* empty `alt=""` only for decorative images
* CSS Grid and Flexbox
* real media queries for tablet and mobile layouts
* responsive images with width and height attributes
* `loading="lazy"` for below-the-fold images
* `defer` for non-critical JavaScript
* keyboard-accessible controls
* visible `:focus-visible` states
* `prefers-reduced-motion` support
* accessible mobile navigation with a real button and `aria-expanded`
* external CSS files
* external JavaScript files when JavaScript is needed

Do not use:

* inline `style=""` attributes
* `style-hover` attributes
* clickable `div` or `span` elements
* copied templates
* unnecessary JavaScript libraries
* CSS frameworks or UI kits that dictate the final visual layout or aesthetic

Avoid inline `<style>` blocks by default. Only use one when there is a clear, documented optimization reason.

---

## Atomic Design CSS Structure

Create and maintain these stylesheets:

* `css/variables.css`

  * design tokens only
  * colours, typography, spacing, borders, shadows, z-index, motion values

* `css/base.css`

  * reset
  * global body styles
  * headings
  * paragraphs
  * links
  * buttons
  * form fields
  * focus states

* `css/components.css`

  * reusable components
  * header
  * navigation
  * footer
  * buttons
  * project cards
  * metadata rows
  * tags
  * video preview cards
  * figures and captions
  * callouts
  * contact cards
  * mobile menu

* `css/layout.css`

  * container
  * grids
  * split heroes
  * content columns
  * case study layouts
  * media comparison layouts

* `css/templates.css`

  * page-specific structures only
  * home
  * work
  * case study pages
  * about
  * contact
  * style guide
  * citations

* `css/responsive.css`

  * media-query overrides only
  * tablet layout
  * mobile layout
  * grid collapse
  * navigation collapse
  * touch target improvements

Do not duplicate component CSS across pages.
Do not put reusable component styles inside page-specific template CSS.

---

## Accessibility Rules

* Use `<a>` for navigation and destinations.
* Use `<button>` for actions.
* All interactive elements must have visible keyboard focus.
* The mobile menu must support keyboard access and Escape to close.
* Do not autoplay video with sound.
* Any meaningful audio or video content must provide captions or a transcript.
* When an externally hosted YouTube video does not include captions, provide an accessible expandable “Video description and transcript” section on the same page.
* Do not invent timestamps, spoken dialogue, or visual events. Use only transcript content or video descriptions provided in project documentation.
* External video and audio links must have descriptive labels.
* Maintain readable colour contrast.
* The site must remain usable at 200% browser zoom.
* Use semantic HTML before adding ARIA.
* Use ARIA landmarks or labels only where they add useful information beyond semantic HTML.
* Connect every form label to its input using matching `for` and `id` values.

---

## Performance Rules

* Use optimized image files where possible.
* Prefer WebP for large screenshots where possible.
* Do not lazy-load hero images.
* Lazy-load below-the-fold images.
* Do not embed heavy video players in the initial hero viewport when a preview card and external link are enough.
* Avoid duplicate image assets and unused files.
* Use SVG for simple scalable icons where appropriate.
* Do not claim optimization, compression, validation, or testing unless it was actually completed.

---

## Style Guide and Citation Requirements

The Style Guide must use the real design system from the live portfolio.

It must show:

* branding or visual ethos
* colour system
* typography hierarchy
* layout and spacing principles
* navigation
* buttons and links
* project cards
* tags and metadata
* media or video preview cards
* figure captions
* hover and focus states
* responsive behavior
* real HTML and CSS code samples
* Atomic Design mapping

Every component shown in the Style Guide must appear on at least one live portfolio page.

The Citation page must include all external materials actually used, including fonts, icons, external media, libraries, frameworks, research visuals, and AI-assisted assets where disclosure is required.

---

## Verification Rules

Before declaring any task complete:

1. Check changed links.
2. Check heading hierarchy.
3. Check image alt text.
4. Check desktop layout around 1440px.
5. Check tablet layout around 768px.
6. Check mobile layout around 390px.
7. Check keyboard navigation.
8. Check focus states.
9. Check that no inline styles remain.
10. Check that shared components use the correct CSS layer.
11. List changed files.
12. State what was actually tested and what was not tested.
13. List any remaining risks, missing sources, or user decisions needed.

