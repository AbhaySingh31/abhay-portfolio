import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider' // next-themes for dark mode
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ErrorMonitor from '@/components/ErrorMonitor' // Error monitoring for development

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
    default: 'Abhay Singh | AWS Solutions Architect & Developer',
    template: '%s | Abhay Singh',
  },
  description:
    'AWS Certified Solutions Architect with 4.5+ years of experience in backend development, cloud-native applications, and site reliability engineering. Skilled in Node.js, AWS, and serverless architecture.',
  keywords: [
    'Abhay Singh',
    'AWS Solutions Architect',
    'Cloud Developer',
    'Backend Developer',
    'Node.js',
    'AWS Lambda',
    'Serverless',
    'Portfolio',
  ],
  authors: [{ name: 'Abhay Singh' }],
  creator: 'Abhay Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhaysingh.com',
    title: 'Abhay Singh | AWS Solutions Architect & Developer',
    description: 'AWS Certified Solutions Architect with expertise in cloud-native applications and serverless architecture.',
    siteName: 'Abhay Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Singh | AWS Solutions Architect & Developer',
    description: 'AWS Certified Solutions Architect with expertise in cloud-native applications.',
    creator: '@abhaysingh31',
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
          <ErrorMonitor />
        </ThemeProvider>
      </body>
    </html>
  )
}
