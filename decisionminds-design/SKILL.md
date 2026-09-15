---
name: decisionminds-design
description: Design system skill for decisionminds. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# decisionminds Design System

You are building UI for **decisionminds**. Light-themed, cool palette, sans-serif typography (Open Sans), compact density on a 4px grid, flat elevation (no shadows), expressive motion.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![decisionminds Homepage](screenshots/homepage.png)

> Read `references/DESIGN.md` for full token details.

## Design Philosophy

- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — Open Sans for body/UI text, Instrument Sans for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **cool palette** — the color temperature runs cool, matching the sans-serif typography.
- **Restrained accent** — `#075892` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Surface | `--surface` | `#f3f4f6` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#0d1726` | Headings, body text |
| Text Muted | `--text-muted` | `#9ca3af` | Captions, placeholders |
| Accent | `--accent` | `#075892` | CTAs, links, focus rings |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Success | `#22c55e` | Confirmations, positive trends |
| Warning | `#f59f0a` | Caution states, pending items |
| Danger | `#f97316` | Errors, destructive actions |

### Extended Palette

- **border:** `#e5e7eb` — Light surface or highlight color
- **foreground:** `#1d3658`
- **secondary:** `#1f3047` — Secondary text, placeholder text
- **destructive:** `#ef4343` — Destructive actions, error states
- `#29b6f6`
- `#000000` — Deep background layer or shadow color
- **primary-dark:** `#e9590c` — Warm accent — hover glow or decorative highlight
- `#60a5fa`

### CSS Variable Tokens

```css
--primary: 18 84% 54%;
--primary-foreground: 0 0% 100%;
--primary-dark: 21 90% 48%;
--primary-light: 27 96% 61%;
--accent: 205 91% 30%;
--accent-foreground: 0 0% 100%;
--background: 0 0% 100%;
--foreground: 215 50% 23%;
--card: 0 0% 100%;
--card-foreground: 215 50% 23%;
--popover: 0 0% 100%;
--popover-foreground: 215 50% 23%;
--secondary: 220 14% 96%;
--secondary-foreground: 205 91% 30%;
--muted: 220 14% 96%;
--muted-foreground: 215 16% 47%;
--success-foreground: 0 0% 100%;
--warning-foreground: 0 0% 100%;
--destructive: 0 84% 60%;
--destructive-foreground: 0 0% 100%;
```

## Typography

### Font Stack

- **Open Sans** — Heading 1, Heading 2, Heading 3
- **Instrument Sans** — Body, Caption
- **SFMono-Regular** — Code

### Font Sources

```css
@font-face {
  font-family: "Instrument Sans";
  src: url("fonts/InstrumentSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Instrument Sans";
  src: url("fonts/InstrumentSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Open Sans";
  src: url("fonts/OpenSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Open Sans";
  src: url("fonts/OpenSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Open Sans | 8rem | 700 |
| Heading 2 | Open Sans | 6rem | 700 |
| Heading 3 | Open Sans | 4.5rem | 700 |
| Body | Instrument Sans | 1rem | 400 |
| Caption | Instrument Sans | .875rem | 400 |
| Code | SFMono-Regular | 14px | 400 |

### Typography Rules

- Body/UI: **Open Sans**, Headings: **Instrument Sans** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 6, 8, 10, 12, 14, 16, 20, 22, 24, 28` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `.25rem, .75rem, 1rem, 1.5rem, 2px, 6px, 10px, 13px, 14px, 20px, inherit`
Default: `6px`

### Container

Max-width: `80rem`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #f3f4f6;
  border-radius: 6px;
  padding: 16px;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #075892;
  color: #0d1726;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #cccccc;
  color: #0d1726;
  border-radius: 6px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 8px 12px;
  color: #0d1726;
  font-size: 14px;
}
.input:focus { border-color: #075892; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #f3f4f6;
  color: #9ca3af;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #f3f4f6;
  border-radius: inherit;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #cccccc;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #cccccc;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
}
.nav-link {
  color: #9ca3af;
  padding: 8px 12px;
  border-radius: 6px;
  transition: color 150ms;
}
.nav-link:hover { color: #0d1726; }
.nav-link.active { color: #075892; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `marquee`
- `marquee-reverse`
- `orbit-inner`
- `orbit-middle`
- `orbit-outer`

### Motion Tokens

- **Duration scale:** `.01ms`, `.1s`, `.15s`, `.2s`, `.3s`, `.5s`, `1s`, `25s`, `50s`, `75ms`, `300ms`
- **Easing functions:** `cubic-bezier(.4,0,.2,1)`, `linear`, `cubic-bezier(0,0,.2,1)`, `ease`
- **Animated properties:** `opacity`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (.01ms) for micro-interactions, long (300ms) for page transitions
- **Easing:** Use `cubic-bezier(.4,0,.2,1)` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Dark Mode

This project supports **light and dark mode** via CSS variables.

### Token Mapping

| Variable | Light | Dark |
|----------|-------|------|
| `--primary` | `18 84% 54%` | `25 95% 53%` |
| `--accent` | `205 91% 30%` | `205 80% 45%` |
| `--background` | `0 0% 100%` | `215 50% 10%` |
| `--foreground` | `215 50% 23%` | `220 14% 98%` |
| `--card` | `0 0% 100%` | `215 50% 13%` |
| `--card-foreground` | `215 50% 23%` | `220 14% 98%` |
| `--popover` | `0 0% 100%` | `215 50% 13%` |
| `--popover-foreground` | `215 50% 23%` | `220 14% 98%` |
| `--secondary` | `220 14% 96%` | `215 40% 20%` |
| `--secondary-foreground` | `205 91% 30%` | `220 14% 98%` |
| `--muted` | `220 14% 96%` | `215 40% 20%` |
| `--muted-foreground` | `215 16% 47%` | `215 20% 65%` |
| `--destructive` | `0 84% 60%` | `0 62% 30%` |
| `--destructive-foreground` | `0 0% 100%` | `220 14% 98%` |
| `--border` | `220 13% 91%` | `215 40% 25%` |

### Implementation

- Toggle via `.dark` class on `<html>` or `[data-theme="dark"]`
- Always use CSS variables for colors — never hardcode hex values
- Test both modes for contrast and readability

## Depth & Elevation

This design uses **flat elevation** — no box-shadows anywhere.

### Elevation Strategy

| Level | Technique | Use |
|-------|-----------|-----|
| 0 — Base | Background color | Page background |
| 1 — Raised | Lighter surface + subtle border | Cards, panels |
| 2 — Floating | Even lighter surface + stronger border | Dropdowns, popovers |
| 3 — Overlay | Backdrop + modal surface | Modals, dialogs |

### Z-Index Scale

`0, 1, 10, 20, 30, 50, 60, 100, 9999`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No box-shadow** on any element — use borders and surface colors for depth
- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Open Sans and Instrument Sans and SFMono-Regular are allowed
- **No arbitrary border-radius** — use the scale: .25rem, .75rem, 1rem, 1.5rem, 2px, 6px, 10px, 13px, 14px, 20px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Open Sans, Instrument Sans, SFMono-Regular only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — flat, surface color shifts only
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `/favicon-32.png`
- **Site URL:** `https://decisionminds.com/`
- **Brand color:** `#075892`
- **Brand typeface:** Open Sans

## Quick Reference

```
Background:     #ffffff
Surface:        #f3f4f6
Text:           #0d1726 / #9ca3af
Accent:         #075892
Border:         (not extracted)
Font:           Open Sans
Spacing:        4px grid
Radius:         6px
Components:     0 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for decisionminds
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "decisionminds" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# decisionminds DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 0
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: yes · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![decisionminds Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a cool, approachable feel. The light background emphasizes content clarity. Typography pairs **Instrument Sans** for display/headings with **Open Sans** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#075892** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tw-ring-offset-color | `#ffffff` | background | Page background, darkest surface |
| secondary | `#f3f4f6` | surface | Card and panel backgrounds |
| background | `#0d1726` | text-primary | Headings and body text |
| muted-foreground | `#9ca3af` | text-muted | Captions, placeholders, secondary info |
| muted-foreground | `#65758b` | text-muted | Captions, placeholders, secondary info |
| accent | `#075892` | accent | CTAs, links, focus rings, active states |
| theme-color | `#f97316` | danger | Error states, destructive actions |
| success | `#22c55e` | success | Success states, positive indicators |
| warning | `#f59f0a` | warning | Warning states, caution indicators |
| foreground | `#1d3658` | info | Informational highlights |
| border | `#e5e7eb` | unknown | Palette color |
| secondary | `#1f3047` | unknown | Palette color |
| destructive | `#ef4343` | unknown | Palette color |
| unknown | `#29b6f6` | unknown | Palette color |
| unknown | `#000000` | unknown | Palette color |
| primary-dark | `#e9590c` | unknown | Palette color |
| unknown | `#60a5fa` | unknown | Palette color |
| unknown | `#3b82f6` | unknown | Palette color |
| primary | `#ec6227` | unknown | Palette color |
| primary-light | `#fb923c` | unknown | Palette color |

### Dark Mode Token Mapping

| Variable | Light | Dark |
|---|---|---|
| `--primary` | `18 84% 54%` | `25 95% 53%` |
| `--accent` | `205 91% 30%` | `205 80% 45%` |
| `--background` | `0 0% 100%` | `215 50% 10%` |
| `--foreground` | `215 50% 23%` | `220 14% 98%` |
| `--card` | `0 0% 100%` | `215 50% 13%` |
| `--card-foreground` | `215 50% 23%` | `220 14% 98%` |
| `--popover` | `0 0% 100%` | `215 50% 13%` |
| `--popover-foreground` | `215 50% 23%` | `220 14% 98%` |
| `--secondary` | `220 14% 96%` | `215 40% 20%` |
| `--secondary-foreground` | `205 91% 30%` | `220 14% 98%` |
| `--muted` | `220 14% 96%` | `215 40% 20%` |
| `--muted-foreground` | `215 16% 47%` | `215 20% 65%` |
| `--destructive` | `0 84% 60%` | `0 62% 30%` |
| `--destructive-foreground` | `0 0% 100%` | `220 14% 98%` |
| `--border` | `220 13% 91%` | `215 40% 25%` |
| `--input` | `220 13% 91%` | `215 40% 25%` |
| `--sidebar-background` | `0 0% 98%` | `215 50% 10%` |
| `--sidebar-foreground` | `215 50% 23%` | `220 14% 96%` |
| `--sidebar-accent` | `220 14% 96%` | `215 40% 18%` |
| `--sidebar-accent-foreground` | `215 50% 23%` | `220 14% 96%` |

### CSS Variable Tokens

```css
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--primary: 18 84% 54%;
--primary-foreground: 0 0% 100%;
--primary-dark: 21 90% 48%;
--primary-light: 27 96% 61%;
--accent: 205 91% 30%;
--accent-foreground: 0 0% 100%;
--background: 0 0% 100%;
--foreground: 215 50% 23%;
--card: 0 0% 100%;
--card-foreground: 215 50% 23%;
--popover: 0 0% 100%;
--popover-foreground: 215 50% 23%;
--secondary: 220 14% 96%;
--secondary-foreground: 205 91% 30%;
--muted: 220 14% 96%;
--muted-foreground: 215 16% 47%;
```


---

## 3. Typography Rules

**Font Stack:**
- **Open Sans** — Heading 1, Heading 2, Heading 3
- **Instrument Sans** — Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Instrument Sans";
  src: url("fonts/InstrumentSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Instrument Sans";
  src: url("fonts/InstrumentSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Open Sans";
  src: url("fonts/OpenSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Open Sans";
  src: url("fonts/OpenSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Open Sans | 8rem | 700 |
| Heading 2 | Open Sans | 6rem | 700 |
| Heading 3 | Open Sans | 4.5rem | 700 |
| Body | Instrument Sans | 1rem | 400 |
| Caption | Instrument Sans | .875rem | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Open Sans** for body/UI text, **Instrument Sans** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

No components detected. Scan `src/components/` or `components/` to populate this section.

---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 20, 22, 24, 28
- **Border radius:** .25rem, .75rem, 1rem, 1.5rem, 2px, 6px, 10px, 13px, 14px, 20px, inherit
- **Max content width:** 80rem

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

No box-shadow values detected. The design appears to use a flat visual style.

**Z-Index Scale:** `0, 1, 10, 20, 30, 50, 60, 100, 9999`


---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes marquee`
- `@keyframes marquee-reverse`
- `@keyframes orbit-inner`
- `@keyframes orbit-middle`
- `@keyframes orbit-outer`
- `@keyframes ping`
- `@keyframes pulse`
- `@keyframes pulse-glow`

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#075892` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Pair **Open Sans** (body) with **Instrument Sans** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use border and background shifts for elevation — not shadows
- Use border-radius from the scale: .25rem, .75rem, 1rem, 1.5rem, 2px
- Always use CSS variables for colors — never hardcode hex
- Test both light and dark modes for contrast

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Open Sans and Instrument Sans and SFMono-Regular
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't add box-shadow — this design system uses flat elevation
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No box-shadow on any element
- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 640px | css |
| md | 768px | css |
| lg | 1024px | css |
| xl | 1280px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f3f4f6
Border: 1px solid var(--border)
Radius: 6px
Padding: 16px
Font: Open Sans
No shadows — use borders and surface colors for depth.
```

### Build a Button

```
Primary: bg #075892, text white
Ghost: bg transparent, border var(--border)
Padding: 8px 16px
Radius: 6px
Hover: opacity 0.9 or lighter shade
Focus: ring with #075892
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 80rem, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f3f4f6
Label: #9ca3af (muted, 12px, uppercase)
Value: #0d1726 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid var(--border)
Focus: border-color #075892
Label: #9ca3af 12px
Spacing: 16px between fields
Radius: 6px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Open Sans, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: flat, surface shifts
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/InstrumentSans-Bold.ttf`
- `fonts/InstrumentSans-Medium.ttf`
- `fonts/InstrumentSans-Regular.ttf`
- `fonts/InstrumentSans-SemiBold.ttf`
- `fonts/OpenSans-Bold.ttf`
- `fonts/OpenSans-ExtraBold.ttf`
- `fonts/OpenSans-Light.ttf`
- `fonts/OpenSans-Medium.ttf`
- `fonts/OpenSans-Regular.ttf`
- `fonts/OpenSans-SemiBold.ttf`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

