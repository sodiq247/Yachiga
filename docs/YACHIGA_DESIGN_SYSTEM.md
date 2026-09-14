# Yachiga Design System

This design system combines the **Kohol Iornem visual structure** with the **Yachiga brand identity**, resulting in a modern, premium, internationally credible legal + public policy + corporate speaking personal brand.

## Colors
Extracted from Yachiga's current brand identity (Deep Navy and Gold/Bronze) and expanded into a full palette for a premium corporate aesthetic.

```css
:root {
  /* Brand Colors */
  --color-primary: #001d39; /* Deep Navy - Authority, Trust, Law */
  --color-secondary: #002b54; /* Lighter Navy for hovers and gradients */
  --color-accent: #985e23; /* Gold/Bronze - Premium, Excellence */
  --color-accent-hover: #b87a38;
  
  /* Backgrounds */
  --color-background: #ffffff;
  --color-surface: #f8fafc; /* Very light slate/blue tint for sections */
  --color-surface-dark: #0a1118; /* For dark mode or dark sections (footer) */
  
  /* Text */
  --color-text: #1e293b; /* Slate 800 - Highly readable dark gray */
  --color-text-muted: #64748b; /* Slate 500 - Secondary text */
  --color-text-inverse: #ffffff;
  
  /* UI Elements */
  --color-border: #e2e8f0;
  --color-border-dark: #1e293b;
}
```

## Typography
Inspired by the editorial elegance of the reference site, optimized for long-form legal/policy reading.

- **Headings (Display):** `Playfair Display` or `Merriweather` (Serif, authoritative, elegant)
- **Body & UI:** `Inter` or `Outfit` (Modern Sans-serif, highly legible, clean)
- **Accents:** Uppercase tracking for subheadings (e.g., 2px letter spacing).

## Spacing & Layout
- **Container:** Max-width 1200px.
- **Section Padding:** Generous vertical rhythm (`py-24` on desktop, `py-16` on mobile) to let content breathe.
- **Grid:** 12-column CSS Grid structure. 3-column layout for the core pillars.

## Components & UI Elements
- **Cards:** White surface, subtle 1px border (`--color-border`), extremely soft shadow (`box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05)`). On hover, slight upward translation (`-translate-y-1`) and shadow intensification.
- **Buttons:** 
  - *Primary:* Solid Gold (`--color-accent`) background, white text, no border.
  - *Secondary:* Outline with Navy (`--color-primary`) border and text, transparent background.
- **Images:** Aspect ratios controlled (16:9 for hero/banners, 4:3 or 1:1 for cards). Use subtle overlays to ensure text readability when text is placed over images.
- **Micro-interactions:** Smooth CSS transitions (300ms ease) for all hovers. Fade-up entrance animations for sections using Framer Motion.
