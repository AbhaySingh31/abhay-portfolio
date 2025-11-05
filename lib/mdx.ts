import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' // Parse frontmatter from markdown files

const tutorialsDirectory = path.join(process.cwd(), 'content/tutorials')

export interface Tutorial {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
}

export function getAllTutorials(): Tutorial[] {
  // Ensure directory exists
  if (!fs.existsSync(tutorialsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(tutorialsDirectory)
  const allTutorials = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(tutorialsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        tags: data.tags || [],
        content,
      }
    })

  // Sort by date
  return allTutorials.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getTutorialBySlug(slug: string): Tutorial | null {
  try {
    const fullPath = path.join(tutorialsDirectory, `${slug}.md`)
    let fileContents: string

    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } else {
      const mdxPath = path.join(tutorialsDirectory, `${slug}.mdx`)
      if (fs.existsSync(mdxPath)) {
        fileContents = fs.readFileSync(mdxPath, 'utf8')
      } else {
        return null
      }
    }

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      tags: data.tags || [],
      content,
    }
  } catch (error) {
    console.error(`Error reading tutorial ${slug}:`, error)
    return null
  }
}
