import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Test endpoint to verify database connection in production
export async function GET() {
  try {
    // Check if env vars are loaded
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    // Try to fetch tutorials
    const { data, error } = await supabase
      .from('tutorials')
      .select('slug, title')
      .limit(5)
    
    return NextResponse.json({
      status: 'ok',
      environment: {
        hasSupabaseUrl: hasUrl,
        hasSupabaseKey: hasKey,
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) + '...',
      },
      database: {
        connected: !error,
        error: error?.message || null,
        tutorialsCount: data?.length || 0,
        tutorials: data || [],
      },
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}
