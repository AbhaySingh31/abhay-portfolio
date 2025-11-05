'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from 'lucide-react'
import { getSession } from '@/lib/adminAuth'

interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  image: string
  link: string
  featured: boolean
}

export default function AdminProjectsPage() {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      // Check authentication
      const session = getSession()
      if (!session?.isAuthenticated) {
        router.push('/admin')
        return
      }

      // Load projects
      loadProjects()
    } catch (error) {
      console.error('Error in admin projects page:', error)
      setLoading(false)
    }
  }, [])

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects')
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.error('Failed to load projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!editingProject) return

    try {
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projects),
      })

      if (response.ok) {
        alert('Projects saved successfully!')
        setIsEditing(false)
        setEditingProject(null)
      } else {
        alert('Failed to save projects')
      }
    } catch (error) {
      console.error('Failed to save:', error)
      alert('Failed to save projects')
    }
  }

  const handleAdd = () => {
    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: 'New Project',
      description: 'Project description',
      stack: ['Technology'],
      image: '/images/projects/placeholder.jpg',
      link: 'https://github.com/yourusername/project',
      featured: false,
    }
    setProjects([...projects, newProject])
    setEditingProject(newProject)
    setIsEditing(true)
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((p) => p.id !== id))
    }
  }

  const handleUpdate = (field: keyof Project, value: string | string[] | boolean) => {
    if (!editingProject) return

    const updated = { ...editingProject, [field]: value }
    setEditingProject(updated)
    setProjects(projects.map((p) => (p.id === updated.id ? updated : p)))
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

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/admin')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </button>
            <h1 className="font-display text-3xl font-bold">Manage Projects</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={handleAdd} className="btn-primary flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add Project
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition-all hover:bg-green-700"
            >
              <Save className="h-5 w-5" />
              Save All
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              {isEditing && editingProject?.id === project.id ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold">Edit Project</h3>
                    <button
                      onClick={() => {
                        setIsEditing(false)
                        setEditingProject(null)
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Project ID</label>
                      <input
                        type="text"
                        value={project.id}
                        onChange={(e) => handleUpdate('id', e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleUpdate('title', e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => handleUpdate('description', e.target.value)}
                        rows={3}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Tech Stack (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={project.stack.join(', ')}
                        onChange={(e) =>
                          handleUpdate(
                            'stack',
                            e.target.value.split(',').map((s) => s.trim())
                          )
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Image URL</label>
                      <input
                        type="text"
                        value={project.image}
                        onChange={(e) => handleUpdate('image', e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Project Link</label>
                      <input
                        type="text"
                        value={project.link}
                        onChange={(e) => handleUpdate('link', e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={project.featured}
                          onChange={(e) => handleUpdate('featured', e.target.checked)}
                          className="h-5 w-5 rounded border-gray-300"
                        />
                        <span className="text-sm font-medium">Featured Project</span>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                      {project.featured && (
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mb-3 text-gray-600 dark:text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="card text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No projects yet. Click "Add Project" to create your first one!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
