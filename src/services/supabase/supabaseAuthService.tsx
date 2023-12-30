import { Auth, CustomError, SignInData, SignUpData } from '@/types/auth';
import { Session } from '@supabase/supabase-js';
import supabase from './supabase';

class AuthSupabase implements Auth {
  async signIn({ email, password }: SignInData): Promise<{
    session: Session | null;
    error: CustomError | null;
  }> {
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const transformedSession: Session | null = session;
    return Promise.resolve({ session: transformedSession, error });
  }

  async signUp({
    email,
    password,
  }: SignUpData): Promise<{ error: CustomError | null }> {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    return Promise.resolve({ error });
  }

  async signOut(): Promise<{ error: CustomError | null }> {
    const { error } = await supabase.auth.signOut();

    return Promise.resolve({ error });
  }

  getSession() {
    const pattern = /^sb-(.+)-auth-token$/;
    let localSessionDataString = null;

    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key && pattern.test(key)) {
        localSessionDataString = localStorage.getItem(key);
        break;
      }
    }

    if (!localSessionDataString) return null;

    return JSON.parse(localSessionDataString) as Session;
  }
}

export default AuthSupabase;
