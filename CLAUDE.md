# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm start        # Run production server
npm run lint     # ESLint check
```

## Tech Stack

- **Framework**: Next.js 16.1.0 with React 19.2.0 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4 + DaisyUI
- **UI Components**: shadcn/ui (New York style)
- **Animations**: Framer Motion
- **Email**: Resend API (requires `RESEND_API_KEY` env var)
- **Icons**: Lucide React + React Icons

## Architecture

### Directory Structure
- `/app` - Next.js App Router pages and layouts
- `/app/actions` - Server actions (email via Resend)
- `/components/ui` - All UI components (sections, navbar, shadcn components)
- `/lib` - Utilities (`cn()` for className merging)
- `/public` - Static assets (logo, resume PDF)

### Page Structure
Single-page portfolio with scrollable anchor sections rendered in `app/page.tsx`:
- Home → Skills → Projects → Contact → Footer

### Key Patterns
- **Path aliases**: `@/*` maps to project root
- **Client components**: Navbar (scroll detection), interactive sections use `'use client'`
- **Server components**: Default for non-interactive content
- **Responsive design**: Mobile-first with Tailwind breakpoints (`hidden md:flex`, `md:hidden`)

## Environment Variables

- `RESEND_API_KEY` - Required for contact form email functionality

## Deployment

Deployed on Vercel at https://personal-portfolio-ten-lac-80.vercel.app/. Push to main triggers auto-deployment.
