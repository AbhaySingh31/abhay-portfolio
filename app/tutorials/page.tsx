import TutorialCard from '@/components/TutorialCard'
import { supabase } from '@/lib/supabase'

export const metadata = {
  title: 'Tutorials',
  description: 'Deep dives into cloud architecture, AWS, and backend development.',
}

async function getTutorials() {
  const { data } = await supabase
    .from('tutorials')
    .select('*')
    .order('date', { ascending: false })
  
  return data || []
}

export default async function TutorialsPage() {
  const tutorials = await getTutorials()

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tutorials & <span className="gradient-text">Journal</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            My learning journey in AI and machine learning. Deep dives, tutorials, and reflections
            on what I'm discovering.
          </p>
        </div>

        {/* Tutorials Grid */}
        {tutorials.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial) => (
              <TutorialCard key={tutorial.slug} tutorial={tutorial} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center dark:border-gray-800 dark:bg-gray-900">
            <p className="text-gray-600 dark:text-gray-400">
              No tutorials yet. Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
