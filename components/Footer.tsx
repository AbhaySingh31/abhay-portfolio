'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react' // Icons for social links

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/abhayrajput', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abhayrajput', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/abhayrajput', icon: Twitter },
  { name: 'Email', href: 'mailto:abhay@example.com', icon: Mail },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block font-display text-2xl font-bold">
              <span className="gradient-text">Abhay Rajput</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learning AI, building projects, and sharing knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Abhay Rajput. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
