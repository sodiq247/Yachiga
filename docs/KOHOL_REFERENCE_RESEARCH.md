# Kohol Iornem Reference Research

## Site Architecture
```text
Navigation
├── Home
├── About Kohol
├── Latest
├── Publications
├── Consultancy Services
├── Gallery
├── Blog
└── Contact
```

## Homepage Sections
1. **Hero Section (Slider)**
   - **Purpose:** Introduce the professional pillars (Speaker, Trainer, Coach, Leadership, Educationist, Author).
   - **Visuals:** Full-screen high-quality imagery with dark overlay (`rgba(0,0,0,0.5)`).
   - **Typography:** Large uppercase Oswald (sans-serif) combined with italicized Merriweather (serif) for contrast. Red accent color (`#da1333`) used for key words.
2. **Professional Introduction**
   - **Purpose:** A brief introduction to the professional's identity and mission.
   - **Layout:** Generous whitespace, center-aligned text, elegant serif headers.
3. **Services / Pillars**
   - **Purpose:** Display core service areas.
   - **Cards:** Clean borders, hover effects, subtle shadows, prominent icons or imagery.
4. **Testimonials / Proven Leadership Experience**
   - **Purpose:** Social proof and credibility.
   - **Visuals:** Carousel of quotes or statistics with deep blue/red accents.
5. **Latest / Blog / Publications**
   - **Purpose:** Thought leadership.
   - **Layout:** Grid layout of cards with featured images, clear typography for titles, and "Read More" links.
6. **Footer**
   - **Purpose:** Navigation, contact, social links.
   - **Layout:** Multi-column layout with dark background (`#030303`), white text, and clear brand identity.

## Design System
- **Primary Color:** Deep Blue (`#213875`)
- **Accent Color:** Vibrant Red (`#da1333`)
- **Backgrounds:** White (`#ffffff`), Light Gray (`#f8f9fa`), Dark (`#030303`)
- **Typography:** 
  - Headings: Oswald / Playfair Display (Serif, authoritative, elegant)
  - Body: Muli (Sans-serif, clean, readable)
  - Accent Text: Merriweather (Italicized, premium feel)
- **Container Widths:** Max 1140px (Bootstrap 4 standard)
- **Buttons:** Solid colors, rounded or pill-shaped, hover transition to darker shade.
- **Image Treatment:** High-resolution, full-width or elegant grids, often with dark overlays for text readability.

## Responsive System
- **Desktop (1024px+):** Full horizontal navigation, 3-4 column grids for services/articles.
- **Tablet (768px - 1023px):** 2 column grids, slightly reduced typography scales.
- **Mobile (<768px):** Hamburger menu (off-canvas right), stacked sections (1 column), vertically spaced with generous padding to prevent clutter.
