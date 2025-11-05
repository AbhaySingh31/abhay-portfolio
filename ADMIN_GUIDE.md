# Admin Panel Guide

## Overview

Your portfolio now has a complete admin panel that allows you to manage projects and tutorials without editing JSON files or markdown manually!

## Accessing the Admin Panel

1. Navigate to: **http://localhost:3000/admin** (or your production URL + `/admin`)
2. Login with credentials:
   - **Username**: `admin`
   - **Password**: `admin123`

⚠️ **Important**: Change these credentials in production!

## Features

### 1. Dashboard

After logging in, you'll see the main dashboard with two options:
- **Manage Projects**: Add, edit, or delete portfolio projects
- **Manage Tutorials**: Create and manage blog posts/tutorials

### 2. Managing Projects

**Add a New Project:**
1. Click "Manage Projects" from dashboard
2. Click "Add Project" button
3. Fill in the details:
   - **Project ID**: Unique identifier (e.g., `my-awesome-project`)
   - **Title**: Project name
   - **Description**: Brief description (1-2 sentences)
   - **Tech Stack**: Comma-separated technologies (e.g., `Node.js, AWS, React`)
   - **Image URL**: Path to project image (e.g., `/images/projects/my-project.jpg`)
   - **Project Link**: GitHub or live demo URL
   - **Featured**: Check to feature on homepage
4. Click "Save All" to persist changes

**Edit a Project:**
1. Click the blue edit icon on any project
2. Modify the fields
3. Click "Save All" when done

**Delete a Project:**
1. Click the red trash icon
2. Confirm deletion
3. Click "Save All" to persist

### 3. Managing Tutorials

**Create a New Tutorial:**
1. Click "Manage Tutorials" from dashboard
2. Click "New Tutorial" button
3. Fill in the details:
   - **Slug**: URL-friendly identifier (e.g., `getting-started-with-aws`)
   - **Title**: Tutorial title
   - **Date**: Publication date
   - **Description**: Brief summary
   - **Tags**: Comma-separated tags (e.g., `AWS, Tutorial, Serverless`)
   - **Content**: Full tutorial content in Markdown
4. Click "Save Tutorial"

**Edit a Tutorial:**
1. Click the blue edit icon on any tutorial
2. Modify the content
3. Click "Save Tutorial"

**Delete a Tutorial:**
1. Click the red trash icon
2. Confirm deletion

### 4. Markdown Support

Tutorials support full Markdown syntax:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered list
2. Item 2

[Link text](https://example.com)

\`\`\`javascript
// Code block
const hello = "world";
\`\`\`

> Blockquote
```

## File Storage

### Projects
- Stored in: `data/projects.json`
- Automatically updated when you click "Save All"
- Backup recommended before major changes

### Tutorials
- Stored in: `content/tutorials/`
- Each tutorial is a separate `.md` file
- Filename matches the slug (e.g., `my-tutorial.md`)
- Includes frontmatter with metadata

## Security

### Development
- Default credentials work fine for local development
- Session expires after 24 hours

### Production
Set environment variables to change credentials:

```bash
# .env.local
NEXT_PUBLIC_ADMIN_USERNAME=your_username
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
```

⚠️ **Never commit credentials to Git!**

### Session Management
- Sessions stored in browser localStorage
- Automatic logout after 24 hours
- Click "Logout" button to manually end session

## Tips & Best Practices

### Projects
1. **Images**: Place project images in `public/images/projects/`
2. **Featured Projects**: Limit to 2-3 featured projects for best visual impact
3. **Tech Stack**: List 3-5 main technologies, most important first
4. **Descriptions**: Keep under 150 characters for consistent card heights

### Tutorials
1. **Slugs**: Use lowercase with hyphens (e.g., `my-tutorial-name`)
2. **Tags**: Use 2-5 relevant tags for better organization
3. **Content**: Start with a clear introduction
4. **Code Blocks**: Always specify the language for syntax highlighting
5. **Images**: Reference images in `public/images/tutorials/`

### General
1. **Save Often**: Click save buttons frequently to avoid losing work
2. **Test Locally**: Preview changes on localhost before deploying
3. **Backup**: Keep backups of `data/projects.json` and `content/tutorials/`
4. **Mobile**: Admin panel works on mobile but desktop is recommended for editing

## Troubleshooting

### Can't Login
- Check credentials (default: admin/admin123)
- Clear browser localStorage and try again
- Check browser console for errors

### Changes Not Showing
- Click "Save All" or "Save Tutorial" button
- Refresh the public pages
- Check browser console for API errors
- Verify file permissions on server

### Session Expired
- Simply login again
- Sessions expire after 24 hours for security

### Tutorials Page Crashing
- Check markdown syntax is valid
- Ensure frontmatter is properly formatted
- Verify `content/tutorials/` directory exists

## API Endpoints

The admin panel uses these API endpoints:

- `GET /api/admin/projects` - Fetch all projects
- `POST /api/admin/projects` - Save projects
- `GET /api/admin/tutorials` - Fetch all tutorials
- `POST /api/admin/tutorials` - Save tutorial
- `DELETE /api/admin/tutorials?slug=xxx` - Delete tutorial

## Future Enhancements

Potential features to add:
- [ ] Image upload functionality
- [ ] Rich text editor for tutorials
- [ ] Preview mode before publishing
- [ ] Draft/published status
- [ ] Multi-user support with roles
- [ ] Activity log
- [ ] Bulk operations
- [ ] Import/export functionality

## Support

If you encounter issues:
1. Check the browser console for errors
2. Review the error monitor (floating button in dev mode)
3. Check `CHANGELOG.md` for recent changes
4. Verify file permissions and paths

---

**Happy content managing! 🚀**

Your portfolio is now fully self-service - no more manual JSON editing!
