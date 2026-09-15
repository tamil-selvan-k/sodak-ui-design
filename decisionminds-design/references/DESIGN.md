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
