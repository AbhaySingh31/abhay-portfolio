import { notFound } from 'next/navigation'
import { getAllTutorials, getTutorialBySlug } from '@/lib/mdx' // MDX utility functions
import { MDXRemote } from 'next-mdx-remote/rsc' // Server-side MDX rendering
import { Calendar, Clock, ArrowLeft } from 'lucide-react' // Icons
import Link from 'next/link'

export async function generateStaticParams() {
  const tutorials = getAllTutorials()
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tutorial = getTutorialBySlug(params.slug)

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

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = getTutorialBySlug(params.slug)

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
                {tutorial.tags.map((tag) => (
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
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <MDXRemote source={tutorial.content} />
          </div>
        </div>
      </article>
    </div>
  )
}
