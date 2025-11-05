'use client'

import { motion } from 'framer-motion' // Animation library
import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react' // Icons

export default function ResumePage() {
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
          className="mb-12 text-center"
        >
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            AI Engineer passionate about machine learning, deep learning, and building intelligent
            systems.
          </p>
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </motion.div>

        {/* Resume Content */}
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Experience</h2>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">AI Engineer</h3>
                    <p className="text-primary-600 dark:text-primary-400">Tech Company</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    2023 - Present
                  </span>
                </div>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Developed and deployed machine learning models for production systems</li>
                  <li>Implemented NLP solutions using transformers and LLMs</li>
                  <li>Collaborated with cross-functional teams to deliver AI-powered features</li>
                </ul>
              </div>

              <div className="card">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">ML Intern</h3>
                    <p className="text-primary-600 dark:text-primary-400">Startup Inc.</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2022 - 2023</span>
                </div>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  <li>Built computer vision models for image classification tasks</li>
                  <li>Optimized model performance and reduced inference time by 40%</li>
                  <li>Created data pipelines for training and evaluation</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Education</h2>
            </div>

            <div className="card">
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">University Name</p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">2019 - 2023</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized in Artificial Intelligence and Machine Learning. GPA: 3.8/4.0
              </p>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                <Code className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Skills</h2>
            </div>

            <div className="card">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-display text-lg font-semibold">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'TypeScript', 'SQL'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-lg font-semibold">ML/AI</h3>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'TensorFlow', 'Transformers', 'LangChain', 'OpenAI'].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-accent-100 px-3 py-1 text-sm font-medium text-accent-700 dark:bg-accent-950 dark:text-accent-300"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-lg font-semibold">Web Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'FastAPI', 'TailwindCSS'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-lg font-semibold">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'AWS', 'Vercel', 'Jupyter'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-accent-100 px-3 py-1 text-sm font-medium text-accent-700 dark:bg-accent-950 dark:text-accent-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-600 to-primary-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Certifications</h2>
            </div>

            <div className="space-y-4">
              <div className="card">
                <h3 className="mb-1 font-display text-lg font-semibold">
                  Deep Learning Specialization
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coursera - 2023</p>
              </div>

              <div className="card">
                <h3 className="mb-1 font-display text-lg font-semibold">
                  Machine Learning Engineering
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Udacity - 2022</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
