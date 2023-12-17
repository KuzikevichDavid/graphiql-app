/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import {
  AuthOutput,
  CustomError,
  Session,
  SignInData,
  SignUpData,
} from '@/types/auth-types';
import supabase from './supabase';

export class AuthSupabase implements AuthOutput {
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
    const transformedSession: Session | null = session as Session;
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
}
