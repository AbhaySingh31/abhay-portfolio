import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TutorialNotFound() {
  console.log('[TUTORIAL NOT FOUND] Custom 404 page rendered')
  
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tutorial Not Found
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            The tutorial you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tutorials
          </Link>
        </div>
      </div>
    </div>
  )
}
