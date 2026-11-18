
import { supabase } from '../../lib/supabase';

export const submitEmergencyReport = async (userId, report) => {
  if (
    !report.title.trim() ||
    !report.description.trim() ||
    !report.location.trim()
  ) {
    return {
      error: { message: 'Please complete all report fields.' },
    };
  }

  return await supabase
    .from('emergency_reports')
    .insert({
      user_id: userId,
      title: report.title.trim(),
      description: report.description.trim(),
      report_type: report.type,
      location: report.location.trim(),
    });
};
