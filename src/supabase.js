import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_SERVICE_ROLE;

// Create a single supabase client for interacting with your database
const supabase = createClient(url, key);

export default supabase;
