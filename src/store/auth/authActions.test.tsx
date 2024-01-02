import { AuthStatus } from '@/types/auth';
import { signIn, signOut, signUp } from './authActions';
import { authSlice } from './authSlice';

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
