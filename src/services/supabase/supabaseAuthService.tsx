import { Auth, CustomError, SignInData, SignUpData } from '@/types/auth';
import { Session } from '@supabase/supabase-js';
import supabase from './supabase';

class AuthSupabase implements Auth {
  signIn = async ({
    email,
    password,
  }: SignInData): Promise<{
    session: Session | null;
    error: CustomError | null;
  }> => {
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const transformedSession: Session | null = session;
    return Promise.resolve({ session: transformedSession, error });
  };

  signUp = async ({
    email,
    password,
  }: SignUpData): Promise<{ error: CustomError | null }> => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    return Promise.resolve({ error });
  };

  signOut = async (): Promise<{ error: CustomError | null }> => {
    const { error } = await supabase.auth.signOut();
    return Promise.resolve({ error });
  };

  async getSession(): Promise<Session | null> {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  }
}
const supabaseInstance = new AuthSupabase();

export default supabaseInstance;
