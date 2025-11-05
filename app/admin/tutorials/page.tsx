'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Plus, Edit, Trash2, Save } from 'lucide-react'
import { getSession } from '@/lib/adminAuth'

interface Tutorial {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
}

export default function AdminTutorialsPage() {
  const router = useRouter()
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingTutorial, setEditingTutorial] = useState<Tutorial | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      // Check authentication
      const session = getSession()
      if (!session?.isAuthenticated) {
        router.push('/admin')
        return
      }

      loadTutorials()
    } catch (error) {
      console.error('Error in admin tutorials page:', error)
      setLoading(false)
    }
  }, [])

  const loadTutorials = async () => {
    try {
      const response = await fetch('/api/admin/tutorials')
      if (response.ok) {
        const data = await response.json()
        setTutorials(data)
      }
    } catch (error) {
      console.error('Failed to load tutorials:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (tutorial: Tutorial) => {
    try {
      const response = await fetch('/api/admin/tutorials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tutorial),
      })

      if (response.ok) {
        alert('Tutorial saved successfully!')
        setIsEditing(false)
        setEditingTutorial(null)
        loadTutorials()
      } else {
        alert('Failed to save tutorial')
      }
    } catch (error) {
      console.error('Failed to save:', error)
      alert('Failed to save tutorial')
    }
  }

  const handleAdd = () => {
    const newTutorial: Tutorial = {
      slug: `tutorial-${Date.now()}`,
      title: 'New Tutorial',
      date: new Date().toISOString().split('T')[0],
      description: 'Tutorial description',
      tags: ['AI', 'Tutorial'],
      content: '# New Tutorial\n\nStart writing your tutorial content here...',
    }
    setEditingTutorial(newTutorial)
    setIsEditing(true)
  }

  const handleEdit = (tutorial: Tutorial) => {
    setEditingTutorial(tutorial)
    setIsEditing(true)
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this tutorial?')) return

    try {
      const response = await fetch(`/api/admin/tutorials?slug=${slug}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        alert('Tutorial deleted successfully!')
        loadTutorials()
      } else {
        alert('Failed to delete tutorial')
      }
    } catch (error) {
      console.error('Failed to delete:', error)
      alert('Failed to delete tutorial')
    }
  }

  const handleUpdate = (field: keyof Tutorial, value: string | string[]) => {
    if (!editingTutorial) return
    setEditingTutorial({ ...editingTutorial, [field]: value })
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary-500 border-t-transparent"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (isEditing && editingTutorial) {
    return (
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setIsEditing(false)
                  setEditingTutorial(null)
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                <ArrowLeft className="h-5 w-5" />
                Back
              </button>
              <h1 className="font-display text-3xl font-bold">
                {editingTutorial.slug.startsWith('tutorial-') ? 'New Tutorial' : 'Edit Tutorial'}
              </h1>
            </div>
            <button
              onClick={() => handleSave(editingTutorial)}
              className="btn-primary flex items-center gap-2"
            >
              <Save className="h-5 w-5" />
              Save Tutorial
            </button>
          </div>

          <div className="card space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Slug (URL)</label>
                <input
                  type="text"
                  value={editingTutorial.slug}
                  onChange={(e) => handleUpdate('slug', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                  placeholder="my-tutorial-slug"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Date</label>
                <input
                  type="date"
                  value={editingTutorial.date}
                  onChange={(e) => handleUpdate('date', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">Title</label>
                <input
                  type="text"
                  value={editingTutorial.title}
                  onChange={(e) => handleUpdate('title', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                  placeholder="Tutorial Title"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">Description</label>
                <textarea
                  value={editingTutorial.description}
                  onChange={(e) => handleUpdate('description', e.target.value)}
                  rows={2}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                  placeholder="Brief description of the tutorial"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={editingTutorial.tags.join(', ')}
                  onChange={(e) =>
                    handleUpdate(
                      'tags',
                      e.target.value.split(',').map((s) => s.trim())
                    )
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                  placeholder="AI, Machine Learning, Tutorial"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Content (Markdown)
                </label>
                <textarea
                  value={editingTutorial.content}
                  onChange={(e) => handleUpdate('content', e.target.value)}
                  rows={20}
                  className="font-mono w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                  placeholder="# Tutorial Title&#10;&#10;Write your tutorial content in Markdown..."
                />
                <p className="mt-2 text-sm text-gray-500">
                  Use Markdown syntax. Supports headings, lists, code blocks, links, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/admin')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </button>
            <h1 className="font-display text-3xl font-bold">Manage Tutorials</h1>
          </div>
          <button onClick={handleAdd} className="btn-primary flex items-center gap-2">
            <Plus className="h-5 w-5" />
            New Tutorial
          </button>
        </div>

        <div className="space-y-4">
          {tutorials.map((tutorial) => (
            <motion.div
              key={tutorial.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 font-display text-xl font-semibold">{tutorial.title}</h3>
                  <p className="mb-3 text-gray-600 dark:text-gray-400">{tutorial.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-500">
                      {new Date(tutorial.date).toLocaleDateString()}
                    </span>
                    {tutorial.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-accent-100 px-3 py-1 text-sm font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(tutorial)}
                    className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(tutorial.slug)}
                    className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {tutorials.length === 0 && (
          <div className="card text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No tutorials yet. Click "New Tutorial" to create your first one!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
