import { RequestStatus } from '@/types/auth';
import {
  selectIsLoggedInSession,
  selectIsLoggedInUser,
  selectLoggedInUser,
  selectSignInError,
  selectSignInStatus,
  selectSignOutStatus,
  selectSignUpError,
  selectSignUpStatus,
} from './authSelectors';
import { RootState } from '../store';

describe('authSelectors', () => {
  const initState = {
    session: null,
    signInError: null,
    signInStatus: RequestStatus.LOADING,
    signUpError: null,
    signUpStatus: RequestStatus.IDLE,
    signOutError: null,
    signOutStatus: RequestStatus.IDLE,
  };
  it('selectSignInStatus', () => {
    expect(selectSignInStatus({ auth: initState } as RootState)).toBe(
      RequestStatus.LOADING
    );
  });

  it('selectSignUpStatus', () => {
    expect(selectSignUpStatus({ auth: initState } as RootState)).toBe(
      RequestStatus.IDLE
    );
  });

  it('selectIsLoggedInUser', () => {
    expect(selectIsLoggedInUser({ auth: initState } as RootState)).toBe(false);
  });

  it('selectSignUpError', () => {
    expect(selectSignUpError({ auth: initState } as RootState)).toBe(null);
  });

  it('selectSignInError', () => {
    expect(selectSignInError({ auth: initState } as RootState)).toBe(null);
  });

  it('selectIsLoggedInSession', () => {
    expect(selectIsLoggedInSession({ auth: initState } as RootState)).toBe(
      false
    );
  });

  it('selectSignOutStatus', () => {
    expect(selectSignOutStatus({ auth: initState } as RootState)).toBe(
      RequestStatus.IDLE
    );
  });

  it('selectSignOutError', () => {
    expect(selectSignUpError({ auth: initState } as RootState)).toBe(null);
  });

  it('selectLoggedInUser', () => {
    expect(selectLoggedInUser({ auth: initState } as RootState)).toBe(null);
  });
});
