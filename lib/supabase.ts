import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  image: string
  link: string
  featured: boolean
  created_at?: string
  updated_at?: string
}

export interface Tutorial {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
  created_at?: string
  updated_at?: string
}