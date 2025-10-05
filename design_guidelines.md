# MolarMap Design Guidelines

## Design Approach
**Reference-Based with Healthcare Tech Focus**: Drawing inspiration from premium healthcare platforms (Doximity, ZocDoc) + Stripe's sophisticated aesthetics + Uber's location-based clarity. The design must convey trust, innovation, and premium quality while maintaining medical professionalism.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Deep Medical Blue: 215 85% 25% (trust, professionalism)
- Clean White: 0 0% 100% (clinical clarity)
- Soft Dental White: 200 20% 98% (backgrounds)

**Accent Colors:**
- Vibrant Teal: 180 75% 45% (innovation, location pins)
- Success Green: 145 70% 50% (verified badges, active status)
- Warm Coral: 10 75% 62% (CTAs, important actions)

**Dark Mode:**
- Rich Navy: 220 35% 12%
- Slate: 220 20% 18%
- Accent adjustments: Same hues, adjusted lightness to 55-65%

### Typography
- **Headings**: Inter (700-800 weight) - modern, premium, excellent readability
- **Body**: Inter (400-500 weight) - clean, professional
- **Scale**: text-5xl/6xl for heroes, text-xl/2xl for section headers, text-base/lg for body

### Layout System
- **Spacing primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- **Containers**: max-w-7xl for full sections, max-w-6xl for content, max-w-prose for text blocks
- **Section padding**: py-20 lg:py-32 for major sections, py-12 lg:py-16 for subsections

### Component Library

**Navigation:**
- Fixed transparent header becoming solid on scroll
- Logo left, nav center/right, prominent "Request Demo" CTA button (Coral accent)
- Mobile: Hamburger with slide-in menu

**Hero Section:**
- 80vh impactful hero with large hero image showing the app interface on phones/tablets with location maps visible
- Split layout: Left - headline + subheadline + dual CTAs, Right - App mockup with glowing location pins
- Floating trust indicators: "10,000+ Active Users", "500+ Verified Clinics"

**Feature Sections:**
- Problem-Solution Cards: Dark cards with gradient borders, icon + title + description
- 3-column grid on desktop (lg:grid-cols-3), single column mobile
- Icons from Heroicons (location marker, user check, calendar, star)

**How It Works:**
- Horizontal timeline with three user types (Clinic Owners, Consultants, Interns)
- Each step with numbered badge, illustration placeholder, and benefit text
- Use tabs or accordion for switching between user journeys

**Interactive Map Section:**
- Full-width section with map placeholder (OpenStreetMap/Mapbox style)
- Animated pins showing real-time connections
- Side panel: Statistics counter (connections made, average response time)

**Testimonials:**
- 2-column layout with clinic owner photo + quote cards
- Verified badge next to names, clinic location subtitle
- Soft shadows, rounded corners (rounded-2xl)

**CTA Sections:**
- Bold, full-width sections with gradient backgrounds (Blue to Teal)
- Large headline + supporting text + app store buttons or demo request
- Include QR code visual for app download

**Footer:**
- 4-column layout: Company info, Product links, Resources, Contact
- Social links, newsletter signup, trust badges (ISO certified, HIPAA compliant)
- Legal links at bottom

### Images Strategy
- **Hero Image**: Required - Large, high-quality mockup of MolarMap app showing map interface with location pins and profile cards
- **Feature Sections**: App screenshots showing GPS tracking, verified profiles, booking interface
- **How It Works**: Isometric illustrations of clinics, consultants with location markers
- **Testimonial Photos**: Professional headshots of dental professionals (use placeholders)
- **Trust Section**: Logos of partner clinics or dental associations

### Visual Enhancements
- **Glassmorphism**: Frosted glass effects for overlaid cards (backdrop-blur-lg)
- **Gradients**: Subtle gradients on buttons and hero backgrounds
- **Shadows**: Layered shadows for depth (shadow-lg, shadow-2xl)
- **Borders**: 1px borders with subtle gradients on premium cards
- **Animations**: MINIMAL - smooth fade-ins on scroll, subtle hover lifts (2-4px), pulsing location pins only

### Accessibility
- Maintain 4.5:1 contrast ratios minimum
- Dark mode: Consistent across all inputs, forms, and interactive elements
- Focus states: Visible 2px teal rings on all interactive elements
- Alt text for all images and icons

## Page Structure

**Home:** Hero → Problem Statement → Solution Features (3-col) → How It Works (3 user types) → Interactive Map Demo → Testimonials → Statistics → Premium CTA → Footer

**Product:** Product Hero → Detailed Feature Breakdown (6-8 features) → For Clinics/Consultants/Interns Sections → Pricing/Demo Request → FAQ

**Contact:** Split layout - Left: Contact form (name, email, role, message), Right: Contact info + office locations + response time expectations + trust badges

This design establishes MolarMap as a premium, trustworthy healthcare technology platform while maintaining clarity and professional appeal across all user types.