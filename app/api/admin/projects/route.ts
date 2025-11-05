import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const projects = await request.json()

    // Delete all existing projects
    await supabase.from('projects').delete().neq('id', '')

    // Insert new projects
    const { error } = await supabase.from('projects').insert(projects)

    if (error) throw error

    return NextResponse.json({ success: true, message: 'Projects saved successfully' })
  } catch (error) {
    console.error('Error saving projects:', error)
    return NextResponse.json({ error: 'Failed to save projects' }, { status: 500 })
  }
}
