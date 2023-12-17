import AuthSupabase from '@/services/supabaseAuth';
import {
  Auth,
  AuthStatusTypes,
  CustomError,
  Session,
  SignUpData,
} from '@/types/auth-types';
import { Dispatch } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';

const { actions } = authSlice;

export const signIn =
  (signUpData: SignUpData) =>
  async (dispatch: Dispatch, _: unknown, { auth }: { auth: AuthSupabase }) => {
    dispatch(actions.startCall({ callType: AuthStatusTypes.SIGN_IN }));

    const signInInfo: { session: Session | null; error: CustomError | null } =
      await auth.signIn(signUpData);

    dispatch(actions.signIn(signInInfo));
  };

export const signUp =
  (signUpData: SignUpData) =>
  async (dispatch: Dispatch, _: unknown, { auth }: { auth: Auth }) => {
    dispatch(actions.startCall({ callType: AuthStatusTypes.SIGN_UP }));

    const signUpInfo: { error: CustomError | null } =
      await auth.signUp(signUpData);

    dispatch(actions.signUp(signUpInfo));
  };

export const signOut =
  () =>
  async (dispatch: Dispatch, _: unknown, { auth }: { auth: Auth }) => {
    dispatch(actions.startCall({ callType: AuthStatusTypes.SIGN_OUT }));

    const signOutRo: { error: CustomError | null } = await auth.signOut();

    dispatch(actions.signOut(signOutRo));
  };

export const setSessionFromLocalSessionData =
  (localSessionData: Session) => (dispatch: Dispatch) => {
    dispatch(actions.setLoggedInUserWithLocalData({ localSessionData }));
  };
