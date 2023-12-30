import { Session, User } from '@supabase/supabase-js';
import { authSlice } from './authSlice';

describe('Auth actions', () => {
  const mockSession: Session = {
    access_token: 'mock-access-token',

    refresh_token: 'mock-refresh-token',

    expires_in: 2400,

    token_type: 'mock-token-type',
    user: {
      id: 'mock-user-id',
      email: 'mock-email',
    } as User,
  };
  it('should handle signIn', () => {
    const actual = authSlice.actions.signIn({
      session: mockSession,
      error: null,
    });
    expect(actual).toEqual({
      type: 'auth/signIn',
      payload: {
        session: mockSession,
        error: null,
      },
    });
  });

  it('should handle signOut', () => {
    const actual = authSlice.actions.signOut({
      error: null,
    });
    expect(actual).toEqual({
      type: 'auth/signOut',
      payload: {
        error: null,
      },
    });
  });

  it('should handle signUp', () => {
    const actual = authSlice.actions.signUp({
      error: null,
    });
    expect(actual).toEqual({
      type: 'auth/signUp',
      payload: {
        error: null,
      },
    });
  });
});
