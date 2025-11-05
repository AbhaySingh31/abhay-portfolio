'use client'

import Link from 'next/link'
import { motion } from 'framer-motion' // Animation library
import { Calendar, Clock } from 'lucide-react' // Icons
import type { Tutorial } from '@/lib/mdx'

interface TutorialCardProps {
  tutorial: Tutorial
}

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  const formattedDate = new Date(tutorial.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Estimate reading time (assuming 200 words per minute)
  const wordCount = tutorial.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card card-hover group h-full"
    >
      <Link href={`/tutorials/${tutorial.slug}`} className="block">
        <div className="flex flex-col">
          {/* Tags */}
          {tutorial.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {tutorial.tags.slice(0, 3).map((tag) => (
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
          <h3 className="mb-2 font-display text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
            {tutorial.title}
          </h3>

          {/* Description */}
          <p className="mb-4 flex-1 text-gray-600 dark:text-gray-400">{tutorial.description}</p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
