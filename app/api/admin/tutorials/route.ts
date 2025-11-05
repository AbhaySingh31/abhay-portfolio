import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('tutorials')
      .select('*')
      .order('date', { ascending: false })

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Error fetching tutorials:', error)
    return NextResponse.json({ error: 'Failed to load tutorials' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const tutorial = await request.json()

    const { error } = await supabase
      .from('tutorials')
      .upsert(tutorial, { onConflict: 'slug' })

    if (error) throw error

    return NextResponse.json({ success: true, message: 'Tutorial saved successfully' })
  } catch (error) {
    console.error('Error saving tutorial:', error)
    return NextResponse.json({ error: 'Failed to save tutorial' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('tutorials')
      .delete()
      .eq('slug', slug)

    if (error) throw error

    return NextResponse.json({ success: true, message: 'Tutorial deleted successfully' })
  } catch (error) {
    console.error('Error deleting tutorial:', error)
    return NextResponse.json({ error: 'Failed to delete tutorial' }, { status: 500 })
  }
}
