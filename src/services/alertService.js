
import { supabase } from '../../lib/supabase';

export const getActiveAlerts = async () => {
  return await supabase
    .from('emergency_alerts')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });
};
