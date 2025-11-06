# ⚡ Quick Reference Guide

Fast lookup for common tasks and code patterns.

---

## 🗂️ File Locations

| What | Where |
|------|-------|
| **Pages** | `app/*/page.tsx` |
| **API Routes** | `app/api/admin/*/route.ts` |
| **Components** | `components/*.tsx` |
| **Database Client** | `lib/supabase.ts` |
| **Auth Logic** | `lib/adminAuth.ts` |
| **Styles** | `app/globals.css` |
| **Config** | `tailwind.config.ts`, `next.config.mjs` |
| **Environment** | `.env.local` |

---

## 🔑 Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=YourSecurePassword123!
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
NEXT_PUBLIC_SITE_NAME=Your Name
```

---

## 📊 Database Queries

### Fetch All Projects
```typescript
const { data } = await supabase
  .from('projects')
  .select('*')
  .order('created_at', { ascending: false })
```

### Fetch Single Tutorial
```typescript
const { data } = await supabase
  .from('tutorials')
  .select('*')
  .eq('slug', 'tutorial-slug')
  .single()
```

### Insert Projects
```typescript
const { error } = await supabase
  .from('projects')
  .insert([
    { id: '1', title: 'Project 1', ... },
    { id: '2', title: 'Project 2', ... }
  ])
```

### Update Tutorial
```typescript
const { error } = await supabase
  .from('tutorials')
  .upsert({ slug: 'my-tutorial', title: 'Updated Title', ... })
```

### Delete Tutorial
```typescript
const { error } = await supabase
  .from('tutorials')
  .delete()
  .eq('slug', 'tutorial-slug')
```

---

## 🔐 Authentication

### Check if Logged In
```typescript
import { getSession } from '@/lib/adminAuth'

const session = getSession()
if (session?.isAuthenticated) {
  // User is logged in
}
```

### Verify Credentials
```typescript
import { verifyCredentials } from '@/lib/adminAuth'

if (verifyCredentials(username, password)) {
  // Credentials are correct
}
```

### Create Session
```typescript
import { createSession } from '@/lib/adminAuth'

createSession(username) // Stores in localStorage
```

### Logout
```typescript
import { clearSession } from '@/lib/adminAuth'

clearSession() // Removes from localStorage
```

---

## 🌐 API Routes

### GET Request
```typescript
const response = await fetch('/api/admin/projects')
const data = await response.json()
```

### POST Request
```typescript
const response = await fetch('/api/admin/projects', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(projects)
})
```

### DELETE Request
```typescript
const response = await fetch(`/api/admin/tutorials?slug=${slug}`, {
  method: 'DELETE'
})
```

---

## ⚛️ React Patterns

### State Management
```typescript
const [data, setData] = useState<Type[]>([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')
```

### Fetch Data on Mount
```typescript
useEffect(() => {
  async function loadData() {
    const { data } = await supabase.from('table').select('*')
    setData(data)
    setLoading(false)
  }
  loadData()
}, [])
```

### Protected Route
```typescript
useEffect(() => {
  const session = getSession()
  if (!session?.isAuthenticated) {
    router.push('/admin')
    return
  }
  loadData()
}, [])
```

### Form Handling
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Process form
}

<form onSubmit={handleSubmit}>
  <input 
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
</form>
```

---

## 🎨 Styling

### Common Classes
```typescript
// Cards
className="card"
className="card card-hover"

// Buttons
className="btn-primary"
className="btn-secondary"

// Text
className="gradient-text"
className="link"

// Layout
className="container mx-auto px-4 py-16"
```

### Dark Mode
```typescript
// Light mode | Dark mode
className="bg-white dark:bg-gray-900"
className="text-gray-900 dark:text-gray-100"
className="border-gray-200 dark:border-gray-800"
```

---

## 🚀 Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint

# Format
npm run format

# Deploy to Vercel
git push origin master
```

---

## 📝 Adding Content

### Add Project (via Admin Panel)
1. Go to `/admin`
2. Login
3. Click "Manage Projects"
4. Click "Add Project"
5. Fill in details
6. Click "Save All"

### Add Tutorial (via Admin Panel)
1. Go to `/admin`
2. Login
3. Click "Manage Tutorials"
4. Click "New Tutorial"
5. Write content in Markdown
6. Click "Save Tutorial"

---

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Environment Variables Not Working
- Restart dev server after changing `.env.local`
- Check variable names start with `NEXT_PUBLIC_`
- Verify no typos in variable names

### Database Connection Failed
- Check Supabase URL and key in `.env.local`
- Verify Supabase project is active
- Check network connection

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 📚 Documentation Links

- **Architecture**: `ARCHITECTURE.md` - System diagrams
- **Code Explained**: `CODE_EXPLAINED.md` - Line-by-line walkthrough
- **Admin Guide**: `ADMIN_GUIDE.md` - How to use admin panel
- **Changelog**: `CHANGELOG.md` - All changes
- **README**: `README.md` - Setup instructions

---

## 🔗 URLs

| Page | URL |
|------|-----|
| Homepage | `/` |
| Projects | `/projects` |
| Tutorials | `/tutorials` |
| Tutorial Detail | `/tutorials/[slug]` |
| Resume | `/resume` |
| Contact | `/contact` |
| Admin Login | `/admin` |
| Admin Projects | `/admin/projects` |
| Admin Tutorials | `/admin/tutorials` |

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | Framework |
| `react` | UI library |
| `@supabase/supabase-js` | Database client |
| `framer-motion` | Animations |
| `tailwindcss` | Styling |
| `lucide-react` | Icons |
| `next-themes` | Dark mode |

---

## 🎯 Project Structure

```
app/
├── layout.tsx          → Root layout (Navbar, Footer)
├── page.tsx            → Homepage
├── projects/           → Projects page
├── tutorials/          → Tutorials pages
├── resume/             → Resume page
├── contact/            → Contact page
├── admin/              → Admin pages
└── api/admin/          → API routes

components/
├── Navbar.tsx          → Navigation
├── Footer.tsx          → Footer
├── ProjectCard.tsx     → Project display
└── TutorialCard.tsx    → Tutorial display

lib/
├── supabase.ts         → Database client
└── adminAuth.ts        → Authentication
```

---

## ⚡ Quick Tips

1. **Always restart dev server** after changing `.env.local`
2. **Use TypeScript interfaces** for type safety
3. **Check CHANGELOG.md** before making changes
4. **Test locally** before deploying
5. **Keep credentials secure** - never commit `.env.local`
6. **Use Mermaid diagrams** in `ARCHITECTURE.md` for reference
7. **Follow existing patterns** when adding features
8. **Update CHANGELOG.md** after making changes

---

For detailed explanations, see:
- `ARCHITECTURE.md` - Visual diagrams
- `CODE_EXPLAINED.md` - Code walkthrough
