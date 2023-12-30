import { AuthStatus } from '@/types/auth';
import { Session, User } from '@supabase/supabase-js';
import { signIn, signOut, signUp } from './authActions';
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

describe('dispatch actions', () => {
  const dispatch = vi.fn();
  beforeEach(() => {
    dispatch.mockClear();
  });

  const auth = {
    signIn: vi.fn().mockResolvedValue({ session: null, error: null }),
    signUp: vi.fn().mockResolvedValue({ error: null }),
    signOut: vi.fn().mockResolvedValue({ error: null }),
  };

  it('should dispatch startAuth and signIn actions', async () => {
    const signInData = {
      email: 'test@test.com',
      password: 'Test123!',
    };

    await signIn(signInData)(dispatch, undefined, { auth });

    expect(dispatch).toHaveBeenCalledWith(
      authSlice.actions.startAuth({ callType: AuthStatus.SIGN_IN })
    );
    expect(dispatch).toHaveBeenCalledWith(
      authSlice.actions.signIn({ session: null, error: null })
    );
  });

  it('should dispatch startAuth and signUp actions', async () => {
    const signUpData = {
      email: 'test@test.com',
      password: 'Test123!',
    };
    await signUp(signUpData)(dispatch, undefined, { auth });

    expect(dispatch).toHaveBeenCalledWith(
      authSlice.actions.startAuth({ callType: AuthStatus.SIGN_UP })
    );
    expect(dispatch).toHaveBeenCalledWith(
      authSlice.actions.signUp({ error: null })
    );
  });

  it('should dispatch startAuth and signOut actions', async () => {
    await signOut()(dispatch, undefined, { auth });
    expect(dispatch).toHaveBeenCalledWith(
      authSlice.actions.startAuth({ callType: AuthStatus.SIGN_OUT })
    );
    expect(dispatch).toHaveBeenCalledWith(
      authSlice.actions.signOut({ error: null })
    );
  });
});
