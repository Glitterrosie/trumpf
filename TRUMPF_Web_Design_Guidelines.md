# TRUMPF Corporate Design & Frontend Development Guidelines

> **Status:** Authoritative — all frontend work on this project must conform to this document.  
> **Namespace:** All CSS classes and custom properties use the `tr-` prefix to avoid global pollution.

---

## 1. Brand Essence & Web Architecture

### Digital Core Values

| Value | Manifestation |
|---|---|
| **Precision** | Pixel-perfect alignment, sharp edges, mathematical spacing, no decorative noise |
| **Trust** | Consistent visual language, high contrast, legible typography at every size |
| **Technical Excellence** | Semantic HTML, modular CSS, accessible markup, performance-first assets |

### Component-Driven Atomic Design

The UI is built from the bottom up:

- **Atoms** — buttons, inputs, labels, icons, color swatches
- **Molecules** — form groups, stat cards, table rows, nav items
- **Organisms** — hero sections, data tables, navigation bars, product cards
- **Templates** — page-level layout shells (no content)
- **Pages** — templates filled with real content

Every atom is self-contained: its HTML, CSS, and accessibility attributes travel together.

---

## 2. Grid & Responsive Layout Systems

### CSS Custom Properties

```css
:root {
  --tr-max-width:        1440px;
  --tr-gutter:           24px;
  --tr-container-pad-sm: 16px;
  --tr-container-pad-md: 32px;
  --tr-container-pad-lg: 48px;
  --tr-col-gap:          24px;
}
```

### Breakpoints

| Name | Range | Columns | Container Padding |
|---|---|---|---|
| Mobile | `< 600px` | 4 | `var(--tr-container-pad-sm)` = 16px |
| Tablet | `600px – 1023px` | 8 | `var(--tr-container-pad-md)` = 32px |
| Desktop | `1024px – 1439px` | 12 | `var(--tr-container-pad-lg)` = 48px |
| Wide Desktop | `≥ 1440px` | 12 | Centered at `var(--tr-max-width)` |

### Responsive Grid Boilerplate

```html
<div class="tr-container">
  <div class="tr-grid">
    <div class="tr-col tr-col--8">Main content</div>
    <div class="tr-col tr-col--4">Sidebar</div>
  </div>
</div>
```

```css
.tr-container {
  width: 100%;
  max-width: var(--tr-max-width);
  margin-inline: auto;
  padding-inline: var(--tr-container-pad-sm);
}

.tr-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--tr-col-gap);
}

@media (min-width: 600px) {
  .tr-container { padding-inline: var(--tr-container-pad-md); }
  .tr-grid      { grid-template-columns: repeat(8, 1fr); }
}

@media (min-width: 1024px) {
  .tr-container { padding-inline: var(--tr-container-pad-lg); }
  .tr-grid      { grid-template-columns: repeat(12, 1fr); }
}

@media (min-width: 1440px) {
  .tr-container { padding-inline: 0; } /* centered by max-width */
}

/* Column span helpers — extend as needed */
.tr-col--4  { grid-column: span 4; }
.tr-col--6  { grid-column: span 6; }
.tr-col--8  { grid-column: span 8; }
.tr-col--12 { grid-column: span 12; }

@media (max-width: 599px) {
  [class*="tr-col--"] { grid-column: span 4; } /* full width on mobile */
}
```

---

## 3. Official Color Palette (CSS Tokens)

```css
:root {
  /* Primary Blues */
  --tr-color-primary:         #003366; /* TRUMPF Corporate Blue */
  --tr-color-primary-deep:    #002244; /* Deep Blue — hover states, nav bg */

  /* Tech Accent */
  --tr-color-teal:            #009999; /* Cyan/Teal — h2 borders, highlights */

  /* Conversion Accent */
  --tr-color-green:           #4B9B43; /* CTA green */
  --tr-color-green-hover:     #3E8237; /* CTA green hover */

  /* Neutrals */
  --tr-color-text:            #1C1F22; /* Body text — never pure #000 */
  --tr-color-bg-light:        #F4F5F7; /* Section backgrounds, card fills */
  --tr-color-border:          #D1D5DB; /* Dividers, input borders, table lines */

  /* Utility */
  --tr-color-white:           #FFFFFF;
  --tr-color-error:           #C0392B;
  --tr-color-focus-ring:      rgba(0, 51, 102, 0.4);
}
```

### Usage Rules

| Token | Allowed Uses |
|---|---|
| `--tr-color-primary` | Page header bg, nav bg, primary text links, table headers |
| `--tr-color-primary-deep` | Hover state for nav items, dark footer bg |
| `--tr-color-teal` | h2 left-border accent, active nav indicator, icon strokes |
| `--tr-color-green` | **Primary CTA buttons only** — do not use for decoration |
| `--tr-color-green-hover` | Hover/focus state of CTA buttons only |
| `--tr-color-text` | All body copy, headings, labels |
| `--tr-color-bg-light` | Alternating section backgrounds, card fills, table stripe |
| `--tr-color-border` | All borders: inputs, tables, dividers, cards |

**Rules:**
- Never use pure `#000000` or `#FFFFFF` for body text.
- Do not use `--tr-color-green` for anything other than conversion CTAs.
- Teal is an accent only — never use it as a background fill.

---

## 4. Typography & Rigid Hierarchy

### Font Stack

```css
:root {
  --tr-font-sans: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --tr-font-mono: "Courier New", Courier, monospace;
}
```

### Type Scale

```css
body {
  font-family: var(--tr-font-sans);
  font-size:   1rem;        /* 16px base */
  line-height: 1.6;
  color:       var(--tr-color-text);
  background:  var(--tr-color-white);
  -webkit-font-smoothing: antialiased;
}

h1 {
  font-size:     2.5rem;    /* 40px */
  font-weight:   700;
  line-height:   1.15;
  letter-spacing: -0.02em;
  margin-block:  0 1.25rem;
  color:         var(--tr-color-primary);
}

h2 {
  font-size:     1.75rem;   /* 28px */
  font-weight:   600;
  line-height:   1.25;
  margin-block:  2rem 0.75rem;
  padding-left:  0.75rem;
  border-left:   4px solid var(--tr-color-teal);
  color:         var(--tr-color-text);
}

h3 {
  font-size:     1.25rem;   /* 20px */
  font-weight:   600;
  line-height:   1.35;
  margin-block:  1.5rem 0.5rem;
  color:         var(--tr-color-text);
}

h4 {
  font-size:     1rem;
  font-weight:   600;
  line-height:   1.4;
  margin-block:  1.25rem 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color:         var(--tr-color-primary);
}

p {
  margin-block: 0 1rem;
  max-width:    72ch; /* optimal reading width */
}

.tr-caption {
  font-size:    0.8125rem;  /* 13px */
  line-height:  1.45;
  color:        #5A6270;
  letter-spacing: 0.01em;
}

.tr-label {
  font-size:    0.75rem;    /* 12px */
  font-weight:  600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color:        var(--tr-color-primary);
}

@media (max-width: 599px) {
  h1 { font-size: 1.875rem; }
  h2 { font-size: 1.375rem; }
  h3 { font-size: 1.125rem; }
}
```

---

## 5. Atomic UI Components

### Buttons

**Rule: `border-radius` maximum is `2px`. No pill shapes, no heavy rounding.**

```html
<!-- Primary CTA -->
<button class="tr-btn tr-btn--primary">Request Demo</button>

<!-- Secondary / Informational -->
<button class="tr-btn tr-btn--secondary">Learn More</button>

<!-- Disabled state -->
<button class="tr-btn tr-btn--primary" disabled>Unavailable</button>
```

```css
.tr-btn {
  display:         inline-flex;
  align-items:     center;
  justify-content: center;
  gap:             0.5rem;
  padding:         0.75rem 1.75rem;
  font-family:     var(--tr-font-sans);
  font-size:       0.875rem;
  font-weight:     600;
  line-height:     1;
  letter-spacing:  0.06em;
  text-transform:  uppercase;
  text-decoration: none;
  border:          2px solid transparent;
  border-radius:   2px;          /* MAX ALLOWED */
  cursor:          pointer;
  transition:      background-color 0.15s ease, color 0.15s ease,
                   border-color 0.15s ease, box-shadow 0.15s ease;
}

.tr-btn:focus-visible {
  outline: 3px solid var(--tr-color-focus-ring);
  outline-offset: 2px;
}

.tr-btn:disabled {
  opacity: 0.45;
  cursor:  not-allowed;
}

/* Primary — Conversion Green */
.tr-btn--primary {
  background-color: var(--tr-color-green);
  border-color:     var(--tr-color-green);
  color:            var(--tr-color-white);
}
.tr-btn--primary:hover:not(:disabled) {
  background-color: var(--tr-color-green-hover);
  border-color:     var(--tr-color-green-hover);
}

/* Secondary — Blue Outline */
.tr-btn--secondary {
  background-color: transparent;
  border-color:     var(--tr-color-primary);
  color:            var(--tr-color-primary);
}
.tr-btn--secondary:hover:not(:disabled) {
  background-color: var(--tr-color-primary);
  color:            var(--tr-color-white);
}
```

---

### Form Inputs

```html
<div class="tr-field">
  <label class="tr-field__label" for="company">Company Name</label>
  <input
    class="tr-field__input"
    id="company"
    type="text"
    placeholder="TRUMPF GmbH"
    autocomplete="organization"
  />
  <span class="tr-field__hint">Enter your registered company name.</span>
</div>
```

```css
.tr-field {
  display:        flex;
  flex-direction: column;
  gap:            0.375rem;
  margin-bottom:  1.25rem;
}

.tr-field__label {
  font-size:      0.8125rem;
  font-weight:    600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color:          var(--tr-color-text);
}

.tr-field__input {
  width:            100%;
  padding:          0.625rem 0.875rem;
  font-family:      var(--tr-font-sans);
  font-size:        1rem;
  color:            var(--tr-color-text);
  background-color: var(--tr-color-white);
  border:           1.5px solid var(--tr-color-border);
  border-radius:    2px;
  transition:       border-color 0.15s ease, box-shadow 0.15s ease;
  appearance:       none;
}

.tr-field__input::placeholder {
  color: #9CA3AF;
}

.tr-field__input:hover {
  border-color: #9AA5B1;
}

.tr-field__input:focus {
  outline:      none;
  border-color: var(--tr-color-primary);
  box-shadow:   0 0 0 3px var(--tr-color-focus-ring);
}

.tr-field__input:invalid:not(:placeholder-shown) {
  border-color: var(--tr-color-error);
}

.tr-field__hint {
  font-size: 0.75rem;
  color:     #6B7280;
}
```

---

### Technical Data Tables

```html
<div class="tr-table-wrap" role="region" aria-label="Technical Specifications" tabindex="0">
  <table class="tr-table tr-table--stripe">
    <thead>
      <tr>
        <th scope="col">Parameter</th>
        <th scope="col">Value</th>
        <th scope="col">Unit</th>
        <th scope="col">Tolerance</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Max laser power</td>
        <td>12,000</td>
        <td>W</td>
        <td>± 0.5 %</td>
      </tr>
      <tr>
        <td>Beam quality M²</td>
        <td>1.1</td>
        <td>—</td>
        <td>≤ 1.2</td>
      </tr>
      <tr>
        <td>Positioning accuracy</td>
        <td>0.02</td>
        <td>mm</td>
        <td>± 0.005 mm</td>
      </tr>
    </tbody>
  </table>
</div>
```

```css
.tr-table-wrap {
  width:       100%;
  overflow-x:  auto;
  border:      1px solid var(--tr-color-border);
  border-radius: 2px;
}

.tr-table {
  width:           100%;
  border-collapse: collapse;
  font-size:       0.9375rem;
  color:           var(--tr-color-text);
}

.tr-table thead tr {
  background-color: var(--tr-color-primary);
}

.tr-table thead th {
  padding:        0.75rem 1rem;
  font-size:      0.75rem;
  font-weight:    600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color:          var(--tr-color-white);
  text-align:     left;
  white-space:    nowrap;
  border-right:   1px solid rgba(255, 255, 255, 0.12);
}

.tr-table thead th:last-child {
  border-right: none;
}

.tr-table tbody td {
  padding:     0.6875rem 1rem;
  border-top:  1px solid var(--tr-color-border);
  border-right: 1px solid var(--tr-color-border);
  font-variant-numeric: tabular-nums;
}

.tr-table tbody td:last-child {
  border-right: none;
}

/* Alternating row stripe */
.tr-table--stripe tbody tr:nth-child(even) {
  background-color: var(--tr-color-bg-light);
}

.tr-table tbody tr:hover {
  background-color: #EBF0F7;
}
```

---

## 6. Iconography & Media Assets

### SVG Icon Rules

- **Stroke weight:** 2px, no fill (`fill="none"`, `stroke="currentColor"`)
- **Viewbox:** 24×24 or 20×20 — never mix sizes
- **Style:** Geometric, line-art. No rounded decorative shapes, no cartoon fills
- **Color:** Inherit via `currentColor` so icons respond to parent text color
- **Size classes:**

```css
.tr-icon {
  display:        inline-block;
  vertical-align: middle;
  flex-shrink:    0;
}
.tr-icon--sm  { width: 16px; height: 16px; }
.tr-icon--md  { width: 20px; height: 20px; }
.tr-icon--lg  { width: 24px; height: 24px; }
.tr-icon--xl  { width: 32px; height: 32px; }
```

**SVG template:**

```html
<svg
  class="tr-icon tr-icon--md"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="square"
  stroke-linejoin="miter"
  aria-hidden="true"
  focusable="false"
>
  <!-- path here -->
</svg>
```

### Photography & Image Rules

- **Subject matter:** Real industrial machinery, laser cutting in action, precision manufacturing floors
- **Lighting:** High-contrast, directional industrial lighting. Blue-steel tones preferred
- **Color grading:** Minimal — no Instagram filters, no heavy warmth, no oversaturation
- **Forbidden:** Stock-photo smiles, abstract blurs used as backgrounds, heavy vignettes, AI-generated "concept art" aesthetics
- **Format:** WebP (with JPEG fallback), `loading="lazy"`, always include `alt` text
- **Aspect ratios:** 16:9 for hero images, 4:3 for product cards, 1:1 for avatar/icon crops

---

## 7. Accessibility & Compliance (WCAG 2.1 & BITV 2.0)

### Contrast Minimums

| Use | Minimum Ratio | Pair Example |
|---|---|---|
| Body text on white | 4.5 : 1 | `#1C1F22` on `#FFFFFF` = **16.9 : 1** ✓ |
| White text on primary blue | 4.5 : 1 | `#FFFFFF` on `#003366` = **9.4 : 1** ✓ |
| White text on green CTA | 4.5 : 1 | `#FFFFFF` on `#4B9B43` = **4.6 : 1** ✓ |
| Caption text | 4.5 : 1 | `#5A6270` on `#FFFFFF` = **5.2 : 1** ✓ |

**Never** place light grey text on white for body copy.

### Focus Indicators

```css
/* Global baseline — never remove without a visible replacement */
:focus-visible {
  outline:        3px solid var(--tr-color-focus-ring);
  outline-offset: 2px;
}

/* Permitted override — must remain visible */
.tr-btn:focus-visible,
.tr-field__input:focus {
  outline:    none;
  box-shadow: 0 0 0 3px var(--tr-color-focus-ring);
}
```

**Rule:** `outline: none` is **only** allowed when a `box-shadow` focus ring replaces it.

### Semantic HTML Mandates

| Purpose | Required Element | Forbidden Substitute |
|---|---|---|
| Page sections | `<main>`, `<section>`, `<aside>` | `<div>` without role |
| Navigation | `<nav aria-label="…">` | `<div class="nav">` |
| Tables | `<table>`, `<thead>`, `<th scope="…">` | CSS grid pretending to be a table |
| Buttons | `<button>` or `<a>` with `href` | `<div onclick>` |
| Forms | `<label for="…">` paired with input `id` | Placeholder-only labels |
| Lists | `<ul>` / `<ol>` / `<dl>` | Bare `<div>` + `<span>` rows |

### ARIA & Additional Rules

- Every `<img>` must have `alt`. Decorative images use `alt=""` and `role="presentation"`.
- Interactive elements must be keyboard-reachable and operable with `Enter`/`Space`.
- Form error messages must be linked via `aria-describedby`.
- Page `<title>` must be unique and descriptive on every route.
- Color alone must **never** be the sole indicator of state (add an icon or text label).
- Animated elements must respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration:   0.01ms !important;
    transition-duration:  0.01ms !important;
  }
}
```

---

*End of TRUMPF Corporate Design & Frontend Development Guidelines.*
