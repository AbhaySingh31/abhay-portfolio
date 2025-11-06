import { notFound } from 'next/navigation'
import { Calendar, ExternalLink, Github, ArrowLeft, Code } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

async function getProject(id: string) {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) {
      console.error('Error fetching project:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Exception fetching project:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = await getProject(id)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = await getProject(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Back Link */}
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Project Image */}
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950 dark:to-accent-950">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            )}
            {!project.image && (
              <div className="flex h-full items-center justify-center">
                <Code className="h-32 w-32 text-gray-400" />
              </div>
            )}
          </div>

          {/* Header */}
          <header className="mb-8">
            {/* Featured Badge */}
            {project.featured && (
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-2 text-sm font-medium text-white">
                  ⭐ Featured Project
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>

            {/* Description */}
            <p className="mb-6 text-xl text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                <Code className="h-4 w-4" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 dark:bg-gray-800 dark:text-primary-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
              >
                <ExternalLink className="h-5 w-5" />
                View Project
              </Link>
              
              {project.link.includes('github.com') && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Link>
              )}
            </div>
          </header>

          {/* Project Details Section */}
          <div className="card">
            <h2 className="mb-4 font-display text-2xl font-bold">About This Project</h2>
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              
              <h3 className="mt-6 font-display text-xl font-semibold">Key Features</h3>
              <ul className="text-gray-600 dark:text-gray-400">
                <li>Built with modern technologies: {project.stack.slice(0, 3).join(', ')}</li>
                <li>Clean and maintainable code architecture</li>
                <li>Responsive design for all devices</li>
                {project.featured && <li>Featured project showcasing best practices</li>}
              </ul>

              <h3 className="mt-6 font-display text-xl font-semibold">Technologies</h3>
              <p className="text-gray-600 dark:text-gray-400">
                This project utilizes {project.stack.length} different technologies including {project.stack.join(', ')}.
              </p>
            </div>
          </div>

          {/* Related Info */}
          {project.created_at && (
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>
                Created on {new Date(project.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
