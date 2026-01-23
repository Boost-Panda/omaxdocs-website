# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 (App Router) website built by **Hala** for their client **Associated Oral & Maxillofacial Surgeons (AOMS)** - an oral & maxillofacial surgery practice. The site uses TypeScript, Tailwind CSS, and shadcn/ui components.

## Development Commands

```bash
# Development server
npm run dev

# Build production version
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Framework & Routing
- **Next.js 14 App Router**: Uses the `src/app/` directory structure
- **MDX Support**: Configured to render `.mdx` files as pages, particularly for service pages
- **TypeScript**: Strict TypeScript configuration

### Key Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── services/          # Medical services (all .mdx files)
│   ├── about/             # About pages including doctor profiles
│   ├── contact/           # Contact and location pages
│   ├── information/       # Patient information pages
│   └── patient-resources/ # Patient forms and resources
├── components/
│   ├── ui/               # shadcn/ui components
│   └── website/          # Custom website components
│       ├── Home/         # Homepage-specific components
│       ├── Navbar*       # Navigation components (desktop/mobile)
│       ├── Footer.tsx    # Site footer
│       └── Chat.tsx      # Chat widget integration
└── lib/                  # Data and utilities
    ├── types.ts          # TypeScript type definitions
    ├── locations.ts      # Practice locations data
    ├── doctors.tsx       # Doctor profiles data
    ├── services.tsx      # Services data
    └── staff.ts          # Staff information
```

### UI Components
- **shadcn/ui**: Pre-configured with "new-york" style and CSS variables
- **Tailwind CSS**: Custom configuration with neutral base color
- **Path Aliases**: `@/components`, `@/lib`, `@/hooks` configured
- **FontAwesome Icons**: Available for brand, solid, and regular icons

### Data Management
- **Static Data**: Business information stored in `src/lib/` files
- **Types**: Well-defined TypeScript interfaces in `src/lib/types.ts`
- **Location Data**: Multiple practice locations with full contact info
- **Doctor Profiles**: Dynamic routing at `/about/[doctor]`

### Special Features
- **Chat Widget**: Pandy Bot integration via iframe with responsive behavior
- **Google Analytics**: Configured with GTM tag
- **MDX Content**: Service pages written in MDX for rich content
- **Dynamic Routes**: Doctor profile pages using Next.js dynamic routing

### Content Structure
- **Services**: 20+ medical services, each as separate MDX page
- **Multi-location**: Support for multiple practice locations
- **Patient Forms**: Registration and referral forms integration
- **Responsive Design**: Mobile-first approach with desktop/mobile nav variants

## Environment Variables
- `NEXT_PUBLIC_PANDY_ORG_ID`: Required for chat widget functionality

## Important Notes
- The `params` parameter in API routes is a Promise (Next.js 14 App Router requirement)
- Chat widget includes mobile scroll lock functionality
- Site title: "Associated Oral & Maxillofacial Surgeons"
- Uses Geist font family (local fonts included)