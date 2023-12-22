import {
  Auth,
  AuthStatus,
  CustomError,
  Session,
  SignUpData,
} from '@/types/auth';
import { Dispatch } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';

const { actions } = authSlice;

export const signIn =
  (signUpData: SignUpData) =>
  async (dispatch: Dispatch, _: unknown, { auth }: { auth: Auth }) => {
    dispatch(actions.startAuth({ callType: AuthStatus.SIGN_IN }));

    const signInInfo: { session: Session | null; error: CustomError | null } =
      await auth.signIn(signUpData);

    dispatch(actions.signIn(signInInfo));
  };

export const signUp =
  (signUpData: SignUpData) =>
  async (dispatch: Dispatch, _: unknown, { auth }: { auth: Auth }) => {
    dispatch(actions.startAuth({ callType: AuthStatus.SIGN_UP }));

    const signUpInfo: { error: CustomError | null } =
      await auth.signUp(signUpData);

    dispatch(actions.signUp(signUpInfo));
  };

export const signOut =
  () =>
  async (dispatch: Dispatch, _: unknown, { auth }: { auth: Auth }) => {
    dispatch(actions.startAuth({ callType: AuthStatus.SIGN_OUT }));

    const signOutRo: { error: CustomError | null } = await auth.signOut();

    dispatch(actions.signOut(signOutRo));
  };

export const setSessionFromLocalSessionData =
  (localSessionData: Session) => (dispatch: Dispatch) => {
    dispatch(actions.signInWithLocalData({ localSessionData }));
  };
