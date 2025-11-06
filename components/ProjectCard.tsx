'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion' // Animation library
import { ExternalLink, Github } from 'lucide-react' // Icons

interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  image: string
  link: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="card card-hover group h-full overflow-hidden cursor-pointer"
      >
      {/* Project Image */}
      <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950 dark:to-accent-950">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {!project.image && (
          <div className="flex h-full items-center justify-center">
            <Github className="h-16 w-16 text-gray-400" />
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex flex-col">
        <h3 className="mb-2 font-display text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-gray-600 dark:text-gray-400">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-gray-800 dark:text-primary-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            View Details →
          </span>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(project.link, '_blank', 'noopener,noreferrer')
            }}
            className="inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            aria-label="Open project link"
          >
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
    </Link>
  )
}
