
import { supabase } from '../../lib/supabase';

// Register a new resident
export const registerUser = async (fullName, email, password) => {
  if (!fullName.trim() || !email.trim() || !password) {
    return {
      error: { message: 'Please complete all fields.' },
    };
  }

  if (password.length < 6) {
    return {
      error: {
        message: 'Password must contain at least 6 characters.',
      },
    };
  }

  return await supabase.auth.signUp({
    email: email.trim(),
    password,
    options: {
      data: {
        full_name: fullName.trim(),
      },
    },
  });
};

// Login an existing resident
export const loginUser = async (email, password) => {
  if (!email.trim() || !password) {
    return {
      error: { message: 'Enter your email and password.' },
    };
  }

  return await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });
};

// Logout resident
export const logoutUser = async () => {
  return await supabase.auth.signOut();
};
