import { RequestStatus } from '@/types/auth';
import { authSlice } from './authSlice';

describe('authSlice', () => {
  const initState = {
    session: null,
    signInError: null,
    signInStatus: RequestStatus.IDLE,
    signUpError: null,
    signUpStatus: RequestStatus.IDLE,
    signOutError: null,
    signOutStatus: RequestStatus.IDLE,
  };
  it('should handle initial state', () => {
    expect(authSlice.reducer(undefined, { type: 'unknown' })).toEqual(
      initState
    );
  });

  it('should handle signIn', () => {
    const actual = authSlice.reducer(initState, {
      type: 'auth/signIn',
      payload: {
        session: null,
        error: null,
      },
    });
    expect(actual).toEqual({
      session: null,
      signInError: null,
      signInStatus: RequestStatus.COMPLETED,
      signUpError: null,
      signUpStatus: RequestStatus.IDLE,
      signOutError: null,
      signOutStatus: RequestStatus.IDLE,
    });
  });

  it('should handle signUp', () => {
    const actual = authSlice.reducer(initState, {
      type: 'auth/signUp',
      payload: {
        error: null,
      },
    });
    expect(actual).toEqual({
      session: null,
      signInError: null,
      signInStatus: RequestStatus.IDLE,
      signUpError: null,
      signUpStatus: RequestStatus.COMPLETED,
      signOutError: null,
      signOutStatus: RequestStatus.IDLE,
    });
  });

  it('should handle signOut', () => {
    const actual = authSlice.reducer(initState, {
      type: 'auth/signOut',
      payload: {
        error: null,
      },
    });
    expect(actual).toEqual({
      session: null,
      signInError: null,
      signInStatus: RequestStatus.IDLE,
      signUpError: null,
      signUpStatus: RequestStatus.IDLE,
      signOutError: null,
      signOutStatus: RequestStatus.COMPLETED,
    });
  });
});
