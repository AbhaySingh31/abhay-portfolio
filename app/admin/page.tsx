'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, User, LogOut, FileText, Briefcase } from 'lucide-react'
import { verifyCredentials, createSession, getSession, clearSession } from '@/lib/adminAuth'

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if already authenticated
    const session = getSession()
    if (session?.isAuthenticated) {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (verifyCredentials(username, password)) {
      createSession(username)
      setIsAuthenticated(true)
    } else {
      setError('Invalid credentials. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    clearSession()
    setIsAuthenticated(false)
    setUsername('')
    setPassword('')
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

  if (!isAuthenticated) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md px-4"
        >
          <div className="card">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h1 className="mb-2 font-display text-3xl font-bold">Admin Login</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Enter your credentials to access the admin panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                  {error}
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                Sign In
              </button>
            </form>

            <div className="mt-6 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Default credentials:</strong>
                <br />
                Username: admin
                <br />
                Password: admin123
                <br />
                <span className="text-xs">
                  (Change these in production via environment variables)
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 font-display text-4xl font-bold tracking-tight">
                Admin <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Manage your portfolio content
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg border-2 border-red-500 px-4 py-2 font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => router.push('/admin/projects')}
            className="card card-hover group text-left"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <Briefcase className="h-8 w-8" />
            </div>
            <h2 className="mb-2 font-display text-2xl font-semibold">Manage Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Add, edit, or remove projects from your portfolio
            </p>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => router.push('/admin/tutorials')}
            className="card card-hover group text-left"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="mb-2 font-display text-2xl font-semibold">Manage Tutorials</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Create and manage your tutorial content and blog posts
            </p>
          </motion.button>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card mt-8"
        >
          <h3 className="mb-4 font-display text-xl font-semibold">Quick Tips</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Projects are stored in <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">data/projects.json</code></li>
            <li>• Tutorials are stored as markdown files in <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">content/tutorials/</code></li>
            <li>• Changes are saved immediately and reflected on your live site</li>
            <li>• Your session expires after 24 hours for security</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
