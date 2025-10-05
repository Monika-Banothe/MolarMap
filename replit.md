# MolarMap - Real-Time Dental Network Platform

## Overview

MolarMap is a location-based professional networking platform for the dental industry that connects dental clinics, consultant dentists, and dental interns in real-time. The platform addresses inefficiencies in the dental networking ecosystem by providing GPS-based matching, verified professional profiles, instant booking capabilities, and a comprehensive rating system. Built for The Molar Company, MolarMap aims to eliminate manual networking methods (like visiting cards) and enable instant access to dental specialists based on proximity and availability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React + TypeScript**: Modern component-based UI with type safety
- **Vite**: Fast development server and optimized production builds
- **Wouter**: Lightweight client-side routing (alternative to React Router)
- **TanStack Query (React Query)**: Server state management, data fetching, and caching with built-in error handling

**UI Component System**
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Design System**: Healthcare-focused design inspired by premium platforms (Doximity, ZocDoc) with medical blue color palette, Inter typography, and location-based UI patterns
- **Theme Support**: Light/dark mode with CSS custom properties and localStorage persistence

**State & Form Management**
- **React Hook Form**: Performance-optimized form handling
- **Zod**: Runtime type validation integrated with forms via @hookform/resolvers
- **Theme Context**: Custom React Context for theme switching

### Backend Architecture

**Server Framework**
- **Express.js**: Lightweight Node.js web server
- **TypeScript**: End-to-end type safety
- **ES Modules**: Modern module system across the entire application

**API Design Pattern**
- RESTful endpoints with JSON payloads
- Centralized error handling middleware
- Request/response logging with duration tracking
- Path aliases for clean imports (@shared, @, @assets)

**Development Architecture**
- **Vite Middleware Mode**: Integrated dev server with HMR for development
- **Build Process**: Separate client (Vite) and server (esbuild) builds
- **Static Serving**: Production mode serves built frontend from Express

### Data Storage

**Current Implementation**
- **In-Memory Storage**: MemStorage class implementing IStorage interface
- **Contact Submissions**: UUID-based storage with timestamp tracking
- **Interface-Based Design**: Storage abstraction allows easy swap to persistent database

**Planned Database (Drizzle ORM Ready)**
- **PostgreSQL**: Configured via @neondatabase/serverless
- **Drizzle ORM**: Type-safe database toolkit with Zod schema integration
- **Migration System**: drizzle-kit for schema migrations
- **Schema Location**: Shared schema definitions in /shared/schema.ts for client-server type sharing

**Data Models**
- Contact Submissions: name, email, role, message, timestamp
- Schema validation with drizzle-zod for insert operations

### Design System Implementation

**Color Architecture**
- CSS custom properties with HSL color space for dynamic theming
- Semantic color tokens (primary, secondary, muted, accent, destructive)
- Flat colors for standard UI, gradient borders for premium features
- Healthcare-specific palette: Medical Blue (215 85% 25%), Vibrant Teal (180 75% 45%), Success Green (145 70% 50%)

**Typography System**
- Google Fonts Inter (400-800 weights) loaded via CDN
- Responsive scale: 5xl/6xl heroes, xl/2xl headers, base/lg body
- Accessibility-first with appropriate line heights and contrast

**Component Patterns**
- Radix UI primitives for accessibility and keyboard navigation
- Class Variance Authority (CVA) for variant-based styling
- Compound components pattern (Card.Header, Card.Content, etc.)
- Hover/active elevation states via utility classes

### Routing & Navigation

**Client-Side Routing**
- Wouter for declarative routing with minimal bundle size
- Route structure: Home (/), Product (/product), Contact (/contact)
- 404 handling with dedicated NotFound page
- Navigation component with scroll-based header transformation

**Page Architecture**
- Home: Hero section, problem/solution cards, feature showcase
- Product: Detailed feature breakdowns with accordion UI
- Contact: Form with real-time validation and submission feedback

### Form Handling & Validation

**Validation Pipeline**
- Zod schemas defined in shared layer for client-server consistency
- React Hook Form for optimized re-renders and field-level validation
- Integration via zodResolver from @hookform/resolvers
- Custom Form components wrapping Radix Label primitives

**Contact Form Flow**
1. Client-side validation with Zod schema
2. POST to /api/contact with validated data
3. Server-side re-validation
4. MemStorage persistence (database-ready)
5. Toast notification feedback

### Build & Deployment Configuration

**Development Mode**
- tsx for TypeScript execution without compilation
- Vite dev server with middleware mode integration
- HMR and fast refresh enabled
- Source maps for debugging

**Production Build**
- Vite builds client to dist/public
- esbuild bundles server to dist/index.js with external packages
- Static asset serving from Express
- Environment-based configuration (NODE_ENV)

**TypeScript Configuration**
- Strict mode enabled for maximum type safety
- Path aliases matching Vite resolve configuration
- Shared types between client and server
- Incremental compilation with build info caching

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Headless component primitives (Dialog, Dropdown, Popover, Accordion, etc.)
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component
- **cmdk**: Command palette component (Command+K functionality)
- **Vaul**: Drawer component for mobile interactions
- **date-fns**: Date manipulation and formatting

### Development & Tooling
- **Replit Plugins**: Runtime error overlay, cartographer (dev mode only), dev banner
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Drizzle Kit**: Database migration and push commands

### State Management & Data Fetching
- **@tanstack/react-query**: Server state synchronization with configurable stale time and refetch policies

### Backend Dependencies
- **connect-pg-simple**: PostgreSQL session store (for future session management)
- **nanoid**: Compact unique ID generation
- **express-session**: Session middleware (infrastructure ready)

### Validation & Type Safety
- **Zod**: Runtime type validation shared between client and server
- **drizzle-zod**: Automatic schema generation from Drizzle tables
- **TypeScript**: Compile-time type checking across the stack

### Design & Styling
- **Tailwind CSS**: Utility-first CSS with custom configuration
- **tailwind-merge**: Utility for merging Tailwind classes
- **clsx**: Conditional class name composition
- **class-variance-authority**: Type-safe component variants