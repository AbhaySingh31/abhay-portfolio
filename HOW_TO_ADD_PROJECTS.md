# How to Add Projects to Your Portfolio

This guide explains how to add new projects to your portfolio website.

## Quick Start

Projects are stored in a JSON file and displayed automatically on the `/projects` page. No code changes needed!

## Step-by-Step Guide

### 1. Open the Projects Data File

Navigate to: `data/projects.json`

### 2. Add Your Project Entry

Add a new object to the JSON array with the following structure:

```json
{
  "id": "unique-project-id",
  "title": "Your Project Title",
  "description": "A brief description of your project (1-2 sentences)",
  "stack": ["Technology1", "Technology2", "Technology3"],
  "image": "/images/projects/your-image.jpg",
  "link": "https://github.com/yourusername/project-repo",
  "featured": true
}
```

### 3. Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ Yes | Unique identifier (use lowercase with hyphens) |
| `title` | string | ✅ Yes | Project name displayed on card |
| `description` | string | ✅ Yes | Short description (keep under 150 characters) |
| `stack` | array | ✅ Yes | List of technologies used |
| `image` | string | ✅ Yes | Path to project image (see Image Setup below) |
| `link` | string | ✅ Yes | URL to project (GitHub, live demo, etc.) |
| `featured` | boolean | ✅ Yes | `true` to show at top, `false` for regular display |

### 4. Image Setup

#### Option A: Add Local Images (Recommended)

1. Create the images directory if it doesn't exist:
   ```
   public/images/projects/
   ```

2. Add your project image:
   - Recommended size: 800x600px or 16:9 aspect ratio
   - Supported formats: JPG, PNG, WebP
   - File size: Keep under 500KB for best performance

3. Reference in JSON:
   ```json
   "image": "/images/projects/my-project.jpg"
   ```

#### Option B: Use External URLs

```json
"image": "https://example.com/path/to/image.jpg"
```

### 5. Example: Adding a New Project

Here's a complete example:

```json
[
  {
    "id": "ai-chatbot",
    "title": "AI Chatbot Assistant",
    "description": "An intelligent chatbot built with GPT-4 and LangChain, featuring context-aware conversations and memory management.",
    "stack": ["Python", "LangChain", "OpenAI", "FastAPI", "React"],
    "image": "/images/projects/chatbot.jpg",
    "link": "https://github.com/abhayrajput/ai-chatbot",
    "featured": true
  },
  {
    "id": "my-new-project",
    "title": "My Awesome Project",
    "description": "A revolutionary app that solves real-world problems using cutting-edge technology.",
    "stack": ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    "image": "/images/projects/my-project.jpg",
    "link": "https://github.com/myusername/my-project",
    "featured": false
  }
]
```

### 6. Save and View

1. Save the `projects.json` file
2. The dev server will auto-reload
3. Visit `http://localhost:3001/projects` to see your new project!

## Tips & Best Practices

### Writing Good Descriptions

✅ **Good**: "An intelligent chatbot built with GPT-4 and LangChain, featuring context-aware conversations."

❌ **Too Long**: "This is an amazing project that I built over several months using various technologies including GPT-4, LangChain, and many other tools. It features context-aware conversations, memory management, and a beautiful user interface."

❌ **Too Short**: "A chatbot."

### Choosing Technologies

- List 3-5 main technologies
- Put the most important/impressive ones first
- Use proper capitalization (e.g., "Next.js" not "nextjs")
- Be specific (e.g., "React" instead of "JavaScript")

### Featured Projects

- Set `featured: true` for your best 2-3 projects
- Featured projects appear first on the page
- They get more visual prominence

### Project IDs

- Use lowercase letters
- Separate words with hyphens
- Keep it short and descriptive
- Examples: `ai-chatbot`, `portfolio-website`, `ml-classifier`

## Image Guidelines

### Recommended Specifications

- **Dimensions**: 800x600px (4:3) or 1200x675px (16:9)
- **Format**: JPG for photos, PNG for screenshots with text
- **File Size**: 200-500KB (compress if larger)
- **Quality**: High enough to look good, but optimized for web

### Creating Project Images

1. **Screenshots**: Take a screenshot of your project in action
2. **Mockups**: Use tools like Figma or Canva to create mockups
3. **Placeholder**: Use a solid color with your project name
4. **Free Images**: Use Unsplash or Pexels for generic tech images

### Image Optimization Tools

- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app for optimization

## Troubleshooting

### Image Not Showing

1. Check the file path is correct
2. Ensure the image exists in `public/images/projects/`
3. Check the file extension matches (`.jpg` vs `.jpeg`)
4. Try hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Project Not Appearing

1. Check JSON syntax is valid (no missing commas or brackets)
2. Ensure all required fields are present
3. Check the dev server console for errors
4. Verify the file is saved

### JSON Syntax Errors

Common mistakes:
- Missing comma between objects
- Extra comma after last object
- Missing closing bracket `]`
- Unescaped quotes in strings

Use a JSON validator: [JSONLint](https://jsonlint.com/)

## Advanced: Customizing Project Display

The projects are displayed using the `ProjectCard` component. If you want to customize how projects look:

1. Edit: `components/ProjectCard.tsx`
2. Modify the card layout, colors, or animations
3. Changes will apply to all project cards

## Need Help?

- Check the browser console for errors (F12)
- Use the Error Monitor (floating button in bottom-right)
- Validate your JSON at [JSONLint](https://jsonlint.com/)
- Check the existing projects in `data/projects.json` for reference

## Quick Checklist

Before adding a project, make sure you have:

- [ ] Unique project ID
- [ ] Clear, concise title
- [ ] Description under 150 characters
- [ ] 3-5 relevant technologies
- [ ] Project image (800x600px recommended)
- [ ] Valid project link (GitHub, demo, etc.)
- [ ] Decided if it should be featured
- [ ] Valid JSON syntax (no missing commas!)

---

**That's it!** Your portfolio will automatically display all projects from the JSON file. No code changes needed! 🎉
