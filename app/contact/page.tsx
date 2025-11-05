'use client'

import { useState } from 'react'
import { motion } from 'framer-motion' // Animation library
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react' // Icons

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:abhay@example.com',
    icon: Mail,
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/abhayrajput',
    icon: Github,
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/abhayrajput',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/abhayrajput',
    icon: Twitter,
    color: 'from-sky-400 to-blue-500',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
          className="mb-12 text-center"
        >
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <h2 className="mb-6 font-display text-2xl font-semibold">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 inline-block h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-center text-sm text-green-600 dark:text-green-400">
                    Message sent successfully!
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-center text-sm text-red-600 dark:text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card">
                <h2 className="mb-6 font-display text-2xl font-semibold">Connect With Me</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  I'm always open to discussing new projects, creative ideas, or opportunities to
                  be part of your vision.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-all hover:border-primary-300 hover:shadow-md dark:border-gray-800 dark:hover:border-primary-700"
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${link.color} text-white`}
                      >
                        <link.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{link.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {link.href.replace('mailto:', '').replace('https://', '')}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="mb-4 font-display text-xl font-semibold">Quick Response</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I typically respond within 24-48 hours. For urgent matters, please reach out via
                  email directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
