import { CustomError, RequestStatus, Session, User } from '@/types/auth-types';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectLocalSessionData = (): Session | null => {
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
};

export const selectLoggedInSession = ({ auth }: RootState): Session | null =>
  auth.session;

export const selectIsLoggedInSession = createSelector(
  [selectLoggedInSession],
  (loggedInSession): boolean => {
    return !!loggedInSession;
  }
);

export const selectLoggedInUser = ({ auth }: RootState): User | null =>
  auth.session?.user ?? null;

export const selectIsLoggedInUser = createSelector(
  [selectLoggedInUser],
  (loggedInUser) => !!loggedInUser
);

export const selectSignInError = ({ auth }: RootState): CustomError | null =>
  auth.signInError;

export const selectSignInStatus = ({ auth }: RootState): RequestStatus =>
  auth.signInStatus;

export const selectSignUpError = ({ auth }: RootState): CustomError | null =>
  auth.signUpError;

export const selectSignUpStatus = ({ auth }: RootState): RequestStatus =>
  auth.signUpStatus;

export const selectSignOutStatus = ({ auth }: RootState): RequestStatus =>
  auth.signOutStatus;
