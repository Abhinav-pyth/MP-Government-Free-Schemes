import { createClient } from "@supabase/supabase-js";

// Vite requires env variables to be prefixed with VITE_ to be exposed to the client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
