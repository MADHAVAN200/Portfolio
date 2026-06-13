import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SUPABASE_URL) ||
  (typeof process !== "undefined" && process.env?.VITE_SUPABASE_URL) ||
  "https://swkzswokhwbarufiswrz.supabase.co";

const supabaseAnonKey =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY) ||
  (typeof process !== "undefined" && process.env?.VITE_SUPABASE_PUBLISHABLE_KEY) ||
  "sb_publishable_-craGBXBnyo9v6aYjp_tYA_M9WAx9hU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Robust database insert logger helper
 */
export async function logToSupabase(table: string, payload: any) {
  try {
    const { data, error } = await supabase.from(table).insert([payload]).select();
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message || err };
  }
}
