// Check specific tutorial details
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://eqixyvzlieezofzedwkh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxaXh5dnpsaWVlem9memVkd2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNjkxNzIsImV4cCI6MjA3Nzk0NTE3Mn0.3Zkz-Ma475_6nYehxVva8Xr9Oy5zzxqSUaG_rubHdxg'

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkTutorial() {
  console.log('🔍 Checking Tutorial Details...\n')

  const slug = 'tutorial-1762371779556'
  
  const { data, error } = await supabase
    .from('tutorials')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    console.error('❌ Error:', error)
    return
  }

  console.log('✅ Tutorial Found:')
  console.log('Slug:', data.slug)
  console.log('Title:', data.title)
  console.log('Date:', data.date)
  console.log('Description:', data.description)
  console.log('Tags:', data.tags)
  console.log('Content:', data.content ? `${data.content.substring(0, 100)}...` : 'NULL')
  console.log('\nFull data:', JSON.stringify(data, null, 2))
}

checkTutorial()
