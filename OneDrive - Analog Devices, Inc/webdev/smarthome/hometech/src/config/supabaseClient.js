import { createClient } from '@supabase/supabase-js'

// 🔑 Replace these with your actual Supabase project credentials
const supabaseUrl = 'https://fmwxyqqprdqothuszfhl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtd3h5cXFwcmRxb3RodXN6ZmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NTcyNDIsImV4cCI6MjA3NTMzMzI0Mn0.3Yb-XjbVJChXspRu60BE_BRUCUOHGm1n4KVhiHcHzMY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
