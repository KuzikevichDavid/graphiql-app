import supabase from '@/services/supabase';
import { CustomError, RequestStatus, Session } from '@/types/auth';
import { RootState } from '../store';

export const selectLocalSessionData = async (): Promise<Session | null> => {
  const sbses = await supabase.auth.getSession();
  return sbses.data.session as Session;
};

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
