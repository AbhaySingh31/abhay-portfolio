import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

// Simple markdown to HTML converter
function formatMarkdown(markdown: string): string {
  const html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // Line breaks
    .replace(/\n\n/gim, '</p><p>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gi, '<ul>$1</ul>')
  
  return `<p>${html}</p>`
}

async function getTutorial(slug: string) {
  const { data } = await supabase
    .from('tutorials')
    .select('*')
    .eq('slug', slug)
    .single()
  
  return data
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tutorial = await getTutorial(slug)

  if (!tutorial) {
    return {
      title: 'Tutorial Not Found',
    }
  }

  return {
    title: tutorial.title,
    description: tutorial.description,
  }
}

export default async function TutorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tutorial = await getTutorial(slug)

  if (!tutorial) {
    notFound()
  }

  const formattedDate = new Date(tutorial.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const wordCount = tutorial.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Back Link */}
          <Link
            href="/tutorials"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tutorials
          </Link>

          {/* Header */}
          <header className="mb-8">
            {/* Tags */}
            {tutorial.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {tutorial.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-700 dark:bg-accent-950 dark:text-accent-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {tutorial.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(tutorial.content) }}
          />
        </div>
      </article>
    </div>
  )
}
