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

### Error Monitoring Framework

**Timestamp**: 2024-11-05 18:36 IST

**Files Created**:
- `lib/errorLogger.ts` - Error logging utility with localStorage persistence
- `components/ErrorMonitor.tsx` - Development error monitoring panel

**Files Modified**:
- `app/layout.tsx` - Added ErrorMonitor component integration

**Packages Added**:
- `lucide-react@latest` - Icon library for UI components

**Description**: 
- Fixed missing `lucide-react` dependency that was causing module resolution errors
- Implemented comprehensive error monitoring framework for development
- Created error logger that captures:
  - Runtime errors and exceptions
  - Unhandled promise rejections
  - Console logs (log, error, warn, info)
  - Network errors (future enhancement)
- Features:
  - Automatic error capture and localStorage persistence
  - Floating button with error count badge
  - Filterable error panel (by type: error, warning, info, log, network)
  - Download logs as JSON for sharing
  - Stack trace viewer
  - Only visible in development mode
  - Auto-refresh logs every 2 seconds when panel is open
- Error logs can be viewed in real-time through the floating button in bottom-right corner
- Logs persist across page reloads via localStorage
- Maximum 100 logs retained to prevent memory issues

**Usage**: Click the floating error icon in bottom-right corner (dev mode only) to view all console logs and errors

---

### CSS Syntax Error Fix

**Timestamp**: 2024-11-05 18:41 IST

**Files Modified**:
- `app/globals.css` - Removed undefined `border-border` class reference

**Description**: 
- Fixed Tailwind CSS syntax error where `border-border` class was applied to all elements
- The class referenced an undefined `--border` CSS variable
- Removed the problematic line `@apply border-border;` from the universal selector
- Fixed non-existent `primary-950` color class in `.btn-secondary` style
- Replaced `primary-950` with `primary-900/20` (primary-900 with 20% opacity)
- These errors were preventing the dev server from compiling

**Errors Fixed**: 
- `The 'border-border' class does not exist. If 'border-border' is a custom class, make sure it is defined within a @layer directive.`
- `The 'primary-950' class does not exist` (color only defined up to primary-900)

---

### Error Logger Infinite Loop Fix

**Timestamp**: 2024-11-05 18:45 IST

**Files Modified**:
- `lib/errorLogger.ts` - Fixed infinite recursion in console interception

**Files Created**:
- `HOW_TO_ADD_PROJECTS.md` - Comprehensive guide for adding projects

**Description**: 
- Fixed critical infinite loop bug in error logger
- The console.log interception was calling `logError()`, which called `console.log()`, creating infinite recursion
- Created separate `logErrorSilent()` method for internal logging without console output
- Stored original console methods in `window.__originalConsole` to prevent recursion
- Console interception now uses `logErrorSilent()` to avoid the loop
- Public `logError()` method uses original console for development output
- This fix resolves the "Maximum call stack size exceeded" error
- Contact page and all other pages now load correctly

**Technical Changes**:
- Added `logErrorSilent()` private method for internal logging
- Modified `interceptConsole()` to store original console methods globally
- Refactored `logError()` to use original console methods for dev output
- All intercepted console methods now call `logErrorSilent()` instead of `logError()`

**Error Fixed**: `RangeError: Maximum call stack size exceeded` in errorLogger.ts

---

## Future Updates

All future modifications will be logged here with:
- Timestamp
- Files modified/added/removed
- Description of changes
- Packages added/removed (if any)
