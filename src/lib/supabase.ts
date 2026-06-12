import { createClient } from "@supabase/supabase-js";

// Retrieve keys from environments safely
const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://swkzswokhwbarufiswrz.supabase.co";
const supabaseAnonKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_-craGBXBnyo9v6aYjp_tYA_M9WAx9hU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Robust database insert logger helper
 */
export async function logToSupabase(table: string, payload: any) {
  try {
    const { data, error } = await supabase.from(table).insert([payload]).select();
    if (error) {
      console.warn(`[Supabase Warning] Could not insert log into ${table}:`, error.message);
      return { success: false, error: error.message };
    }
    console.log(`[Supabase Success] Logged record to ${table}:`, data);
    return { success: true, data };
  } catch (err: any) {
    console.error(`[Supabase Exception] Failed to persist data to ${table}:`, err.message || err);
    return { success: false, error: err.message || err };
  }
}
