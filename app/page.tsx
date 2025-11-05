'use client'

import { motion } from 'framer-motion' // Animation library for smooth transitions
import Link from 'next/link'
import { ArrowRight, Sparkles, Code, BookOpen } from 'lucide-react' // Icon library

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.05),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.05),transparent_50%)]" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 dark:border-primary-700 dark:bg-gray-800 dark:text-primary-400"
          >
            <Sparkles className="h-4 w-4" />
            <span>AWS Solutions Architect & Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              Abhay Singh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-xl text-gray-600 dark:text-gray-300 sm:text-2xl"
          >
            Building cloud-native solutions with AWS.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 text-lg text-gray-600 dark:text-gray-400"
          >
            AWS Certified Solutions Architect with 4.5+ years of experience in backend development,
            serverless architecture, and cloud-native applications. Passionate about building scalable
            systems and sharing knowledge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/projects" className="btn-primary group">
              View Projects
              <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/tutorials" className="btn-secondary">
              Read Tutorials
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card card-hover group"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">Projects</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Explore my latest AI and machine learning projects, from experiments to production
              applications.
            </p>
            <Link href="/projects" className="link">
              View all projects →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card card-hover group"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">Tutorials</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Deep dives into AI concepts, tutorials, and my learning journal documenting the
              journey.
            </p>
            <Link href="/tutorials" className="link">
              Read tutorials →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card card-hover group"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">About Me</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Learn more about my background, skills, and download my resume to see my experience.
            </p>
            <Link href="/resume" className="link">
              View resume →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
