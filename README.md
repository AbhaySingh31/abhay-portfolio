# Abhay Rajput - Personal Portfolio

A modern, production-grade personal portfolio website showcasing AI learning journey, projects, tutorials, and professional experience.

## 🚀 Features

- **Home**: Hero section with bio and tagline
- **Projects**: Dynamic project showcase from JSON data
- **Tutorials/Journal**: MDX-powered blog for tutorials and learning notes
- **Resume**: Professional experience, skills, and downloadable PDF
- **Contact**: Working contact form with social links
- **Dark/Light Mode**: Seamless theme switching
- **Responsive Design**: Mobile-first, works on all devices
- **Animations**: Smooth transitions with Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **Content**: MDX for tutorials, JSON for projects
- **Typography**: Inter & Manrope fonts
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd abhay-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Adding New Projects

Edit `data/projects.json`:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Project description",
  "stack": ["Tech1", "Tech2"],
  "image": "/images/projects/image.jpg",
  "link": "https://github.com/username/repo",
  "featured": true
}
```

### Adding New Tutorials

Create a new `.md` or `.mdx` file in `content/tutorials/`:

```markdown
---
title: "Tutorial Title"
date: "2024-11-05"
description: "Brief description"
tags: ["AI", "Python", "Tutorial"]
---

# Your Content Here

Write your tutorial content in Markdown...
```

### Adding Resume PDF

Place your resume PDF at `public/resume.pdf` for the download link to work.

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

### Social Links

Update social links in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
abhay-portfolio/
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── tutorials/         # Tutorials listing & detail pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── ThemeProvider.tsx
│   └── TutorialCard.tsx
├── content/               # Content files
│   └── tutorials/         # Tutorial markdown files
├── data/                  # Data files
│   └── projects.json      # Projects data
├── lib/                   # Utility functions
│   └── mdx.ts            # MDX utilities
├── public/                # Static assets
│   ├── images/           # Images
│   └── resume.pdf        # Resume PDF
├── CHANGELOG.md          # Change log
├── README.md             # This file
└── package.json          # Dependencies
```

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration
- `vercel.json` - Vercel deployment configuration

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Abhay Rajput - [abhay@example.com](mailto:abhay@example.com)

Project Link: [https://github.com/abhayrajput/portfolio](https://github.com/abhayrajput/portfolio)
