# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2024-11-05

### Initial Project Setup

**Timestamp**: 2024-11-05 18:15 IST

**Files Created**:
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - TailwindCSS theme configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `.gitignore` - Git ignore patterns
- `.env.local.example` - Environment variables template
- `vercel.json` - Vercel deployment configuration

**Packages Added**:
- `next@^15.0.2` - React framework for production
- `react@^18.3.1` - React library
- `react-dom@^18.3.1` - React DOM renderer
- `framer-motion@^11.5.4` - Animation library
- `next-mdx-remote@^5.0.0` - MDX support for tutorials
- `gray-matter@^4.0.3` - Parse frontmatter from markdown
- `next-themes@^0.3.0` - Dark/light mode support
- `tailwindcss@^3.4.12` - Utility-first CSS framework
- `typescript@^5.6.2` - TypeScript language
- `prettier@^3.3.3` - Code formatter
- `prettier-plugin-tailwindcss@^0.6.6` - Tailwind class sorting
- `@tailwindcss/typography@^0.5.15` - Typography plugin for prose content

**Description**: Initial project setup with Next.js 15, TailwindCSS, TypeScript, and all required dependencies. Configured ESLint, Prettier, and Vercel deployment.

---

### Core Layout & Components

**Timestamp**: 2024-11-05 18:30 IST

**Files Created**:
- `app/layout.tsx` - Root layout with metadata and theme provider
- `app/globals.css` - Global styles with custom CSS utilities
- `app/page.tsx` - Home page with hero section
- `components/ThemeProvider.tsx` - Theme context provider
- `components/Navbar.tsx` - Navigation bar with mobile menu
- `components/Footer.tsx` - Footer with social links

**Description**: Created core layout structure with responsive navbar, footer, and home page. Implemented dark/light mode toggle and smooth animations.

---

### Projects Section

**Timestamp**: 2024-11-05 18:45 IST

**Files Created**:
- `data/projects.json` - Project data source
- `app/projects/page.tsx` - Projects listing page
- `components/ProjectCard.tsx` - Reusable project card component

**Description**: Implemented dynamic projects page that reads from JSON data. Added project cards with hover effects, tech stack tags, and external links.

---

### Tutorials/Journal Section

**Timestamp**: 2024-11-05 19:00 IST

**Files Created**:
- `lib/mdx.ts` - MDX utility functions for reading tutorials
- `content/tutorials/getting-started-with-transformers.md` - Sample tutorial
- `content/tutorials/building-neural-networks-pytorch.md` - Sample tutorial
- `app/tutorials/page.tsx` - Tutorials listing page
- `app/tutorials/[slug]/page.tsx` - Dynamic tutorial detail page
- `components/TutorialCard.tsx` - Tutorial card component

**Description**: Implemented MDX-powered tutorials system with frontmatter support. Added dynamic routing for individual tutorial pages with reading time estimation.

---

### Resume & Contact Pages

**Timestamp**: 2024-11-05 19:15 IST

**Files Created**:
- `app/resume/page.tsx` - Resume page with experience, education, skills
- `app/contact/page.tsx` - Contact page with form and social links

**Description**: Created resume page with structured sections for experience, education, skills, and certifications. Implemented contact form with validation and social media links.

---

### Documentation

**Timestamp**: 2024-11-05 19:30 IST

**Files Created**:
- `README.md` - Comprehensive project documentation
- `CHANGELOG.md` - This file

**Description**: Added complete documentation including setup instructions, content management guide, deployment instructions, and project structure overview.

---

## Future Updates

All future modifications will be logged here with:
- Timestamp
- Files modified/added/removed
- Description of changes
- Packages added/removed (if any)
