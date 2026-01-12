import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL_KEY = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL_KEY, SUPABASE_ANON_KEY);