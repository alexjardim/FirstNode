import { createClient } from '@supabase/supabase-js'
import postgres from 'postgres'
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL
export const sql = postgres(connectionString)

export const supabase = createClient('https://oapgrhthcdbmblxqdpvi.supabase.co', 'sb_publishable_4O6BfvHviX83-HfzHQvfmQ_Zndeg4by')