import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider' // next-themes for dark mode
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Abhay Rajput | AI Engineer & Developer',
    template: '%s | Abhay Rajput',
  },
  description:
    'Personal portfolio of Abhay Rajput - Learning AI, building projects, and sharing knowledge through tutorials and journals.',
  keywords: [
    'Abhay Rajput',
    'AI Engineer',
    'Machine Learning',
    'Portfolio',
    'Projects',
    'Tutorials',
    'Web Development',
  ],
  authors: [{ name: 'Abhay Rajput' }],
  creator: 'Abhay Rajput',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhayrajput.com',
    title: 'Abhay Rajput | AI Engineer & Developer',
    description: 'Learning AI, building, and sharing.',
    siteName: 'Abhay Rajput Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Rajput | AI Engineer & Developer',
    description: 'Learning AI, building, and sharing.',
    creator: '@abhayrajput',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
