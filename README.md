# Verified Sp  Website

A production-ready Next.js + TypeScript website for Verified Sp , combining elegant animations with clean, content-first layouts.

## Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling with custom brand colors
- **shadcn/ui** components for accessible UI
- **Framer Motion** for smooth animations
- **Zod** + **react-hook-form** for form validation
- **SEO optimized** with metadata and JSON-LD structured data
- **Security** with rate limiting, CSP headers, and honeypot spam protection
- **Responsive design** with mobile-first approach
- **Accessibility** with WCAG 2.1 AA compliance considerations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables (optional):

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /layout.tsx          # Global layout with Header/Footer
  /page.tsx            # Home page
  /services/page.tsx   # Services overview
  /case-studies/page.tsx  # Case studies
  /contact/page.tsx    # Contact form
  /api/leads/route.ts  # API endpoint for lead submission
/components
  /ui                  # shadcn/ui components
  Header.tsx           # Navigation header
  Footer.tsx           # Footer component
  Hero.tsx             # Hero section
  ServicesGrid.tsx     # Services grid
  CaseCard.tsx         # Case study card
  AnimatedBackground.tsx  # Animated SVG background
  FadeIn.tsx           # Fade-in animation component
  SlideIn.tsx          # Slide-in animation component
/lib
  validators.ts        # Zod schemas
  api.ts              # API helpers
  metadata.ts         # SEO metadata utilities
  constants.ts        # App constants
  utils.ts            # Utility functions
/middleware.ts        # Rate limiting and security headers
```

## Key Features

### Pages

- **Home** (`/`) - Hero section, services overview, about section, CTA
- **Services** (`/services`) - Detailed service offerings
- **Case Studies** (`/case-studies`) - Portfolio of work
- **Contact** (`/contact`) - Lead capture form with validation

### Components

- **Header** - Sticky navigation with mobile menu
- **Footer** - Company info and links
- **Hero** - Animated hero section with background
- **ServicesGrid** - Service cards with hover animations
- **CaseCard** - Case study cards with parallax effects
- **AnimatedBackground** - Subtle SVG animations

### API

- **POST /api/leads** - Submit lead form data
  - Rate limited (5 requests per minute)
  - Zod validation
  - Honeypot spam protection

## Customization

### Brand Colors

Edit `tailwind.config.js` to update brand colors:

```js
primary: "#0a0f28",
secondary: "#1abc9c",
neutral: "#bdc3c7",
```

### SEO Metadata

Update `lib/metadata.ts` to customize SEO settings and structured data.

### Services

Edit `lib/constants.ts` to update service offerings.

## Security

- Rate limiting on API routes
- Content Security Policy headers
- X-Frame-Options protection
- Honeypot field for spam protection
- Input validation with Zod

## Performance

- Image optimization with Next.js Image
- Code splitting
- Font optimization
- Reduced motion support for accessibility

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the production bundle:

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private - Verified Sp 

