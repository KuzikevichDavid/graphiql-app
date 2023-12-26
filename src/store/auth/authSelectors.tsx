import { CustomError, RequestStatus } from '@/types/auth';
import { User } from '@supabase/supabase-js';
import { RootState } from '../store';

export const selectLoggedInUser = ({ auth }: RootState): User | null =>
  auth.session?.user ?? null;

export const selectIsLoggedInSession = ({ auth }: RootState): boolean =>
  Boolean(auth.session);

export const selectIsLoggedInUser = ({ auth }: RootState): boolean =>
  Boolean(auth.session?.user);

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
