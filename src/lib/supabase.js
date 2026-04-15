import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://klmdztzvxixecqankpqw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbWR6dHp2eGl4ZWNxYW5rcHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMTI3MTIsImV4cCI6MjA5MTc4ODcxMn0.Z-zOa1pIZu8TPlRgyiqGmz67RSTcr2iI37ssAfoIEjU'
export const supabase = createClient(supabaseUrl, supabaseKey)
