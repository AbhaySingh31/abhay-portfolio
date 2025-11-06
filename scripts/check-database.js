// Quick script to check database contents
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://eqixyvzlieezofzedwkh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxaXh5dnpsaWVlem9memVkd2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNjkxNzIsImV4cCI6MjA3Nzk0NTE3Mn0.3Zkz-Ma475_6nYehxVva8Xr9Oy5zzxqSUaG_rubHdxg'

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkDatabase() {
  console.log('🔍 Checking Supabase Database...\n')

  // Check projects
  console.log('📦 PROJECTS:')
  const { data: projects, error: projectsError } = await supabase
    .from('projects')
    .select('*')
  
  if (projectsError) {
    console.error('❌ Error fetching projects:', projectsError.message)
  } else {
    console.log(`✅ Found ${projects.length} projects`)
    projects.forEach(p => console.log(`   - ${p.title} (ID: ${p.id})`))
  }

  console.log('\n📝 TUTORIALS:')
  const { data: tutorials, error: tutorialsError } = await supabase
    .from('tutorials')
    .select('*')
  
  if (tutorialsError) {
    console.error('❌ Error fetching tutorials:', tutorialsError.message)
  } else {
    console.log(`✅ Found ${tutorials.length} tutorials`)
    tutorials.forEach(t => console.log(`   - ${t.title} (Slug: ${t.slug})`))
  }

  console.log('\n✅ Database check complete!')
}

checkDatabase()
