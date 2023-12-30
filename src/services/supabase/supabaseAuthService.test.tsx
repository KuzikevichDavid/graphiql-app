/* eslint-disable @typescript-eslint/unbound-method */
import {
  AuthError,
  AuthResponse,
  AuthTokenResponsePassword,
  Session,
} from '@supabase/supabase-js';
import supabase from './supabase';
import AuthSupabase from './supabaseAuthService';

describe('AuthSupabase', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('signIn', () => {
    const authSupabase = new AuthSupabase();
    const email = 'test@test.com';
    const password = 'Test123!';
    const mockSession: Session = {
      access_token: 'mock-token',
      expires_at: 1703957503,
      expires_in: 3600,
      refresh_token: 'wvRvY4ACKr75bgOgbZQcJQ',
      token_type: 'bearer',
      user: {
        id: 'bdc59735-44c7-4e46-98ea-d30436bd3b21',
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: '2022-03-03T15:55:03.000Z',
      },
    };

    it('should sign in successfully', async () => {
      const error = null;
      const signInResponse: AuthTokenResponsePassword = {
        data: {
          user: mockSession.user,
          session: mockSession,
        },
        error,
      };
      vi.spyOn(supabase.auth, 'signInWithPassword').mockResolvedValueOnce(
        signInResponse
      );

      const result = await authSupabase.signIn({ email, password });

      expect(result.session?.user.aud).toEqual(mockSession.user.aud);
      expect(result.session?.user.identities).toEqual(
        mockSession.user.identities
      );
      expect(result.error).toEqual(error);
    });

    it('should handle sign in error', async () => {
      const error = new AuthError('Invalid login credentials');

      vi.spyOn(supabase.auth, 'signInWithPassword').mockRejectedValueOnce(
        error
      );

      try {
        const result = await authSupabase.signIn({ email, password });
        expect(result).toBeUndefined();
      } catch (err) {
        if (err instanceof AuthError) {
          expect(err.message).toBe('Invalid login credentials');
        }
      }
    });
  });

  describe('signUp', () => {
    it('successful sign up', async () => {
      const authSupabase = new AuthSupabase();
      const mockResponse = { data: { user: null, session: null }, error: null };
      vi.spyOn(authSupabase, 'signUp').mockResolvedValueOnce(mockResponse);

      const signUpResult = await authSupabase.signUp({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(authSupabase.signUp).toHaveBeenCalledTimes(1);
      expect(authSupabase.signUp).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
      expect(signUpResult).toEqual(mockResponse);
    });

    it('sign up with existing user', async () => {
      const authSupabase = new AuthSupabase();

      const mockResponse: AuthResponse = {
        data: {
          user: null,
          session: null,
        },
        error: new AuthError('User already exists'),
      };
      vi.spyOn(authSupabase, 'signUp').mockResolvedValueOnce(mockResponse);

      const signUpResult = await authSupabase.signUp({
        email: 'test@test.com',
        password: 'password123',
      });

      expect(authSupabase.signUp).toHaveBeenCalledTimes(1);
      expect(authSupabase.signUp).toHaveBeenCalledWith({
        email: 'test@test.com',
        password: 'password123',
      });
      expect(signUpResult).toEqual(mockResponse);
    });
  });

  describe('signOut', () => {
    it('should handle sign out', async () => {
      const authSupabase = new AuthSupabase();

      const mockResponse = {
        data: {
          user: null,
          session: null,
        },
        error: null,
      };
      vi.spyOn(authSupabase, 'signOut').mockResolvedValueOnce(mockResponse);
      const signOutResult = await authSupabase.signOut();

      expect(authSupabase.signOut).toHaveBeenCalledTimes(1);
      expect(signOutResult).toEqual(mockResponse);
    });
  });

  describe('getSession', () => {
    it('should handle get session', async () => {
      const authSupabase = new AuthSupabase();

      const mockSession: Session = {
        access_token: 'mock-token',
        expires_at: 1703957503,
        expires_in: 3600,
        refresh_token: 'wvRvY4ACKr75bgOgbZQcJQ',
        token_type: 'bearer',
        user: {
          id: 'bdc59735-44c7-4e46-98ea-d30436bd3b21',
          app_metadata: {},
          user_metadata: {},
          aud: 'authenticated',
          created_at: '2022-03-03T15:55:03.000Z',
        },
      };
      vi.spyOn(authSupabase, 'getSession').mockResolvedValueOnce(mockSession);

      const session = await authSupabase.getSession();
      expect(session).toEqual(mockSession);
    });
  });
});
