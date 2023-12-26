import { Auth, CustomError, SignInData, SignUpData } from '@/types/auth';
import { Session, Session as SupabaseSession } from '@supabase/supabase-js';
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

  async getSession(): Promise<SupabaseSession | null> {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  }
}

export default AuthSupabase;
