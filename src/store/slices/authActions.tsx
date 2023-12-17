import { AuthSupabase } from '@/services/supabaseAuth';
import {
  AuthCallTypes,
  AuthOutput,
  CustomError,
  Session,
  SignUpData,
} from '@/types/auth-types';
import { Dispatch } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';

const { actions } = authSlice;

export const signIn =
  (signUpData: SignUpData) =>
  async (
    dispatch: Dispatch,
    _: unknown,
    { authOutput }: { authOutput: AuthSupabase }
  ) => {
    dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_IN }));

    const signInInfo: { session: Session | null; error: CustomError | null } =
      await authOutput.signIn(signUpData);

    dispatch(actions.signIn(signInInfo));
  };

export const signUp =
  (signUpData: SignUpData) =>
  async (
    dispatch: Dispatch,
    _: unknown,
    { authOutput }: { authOutput: AuthOutput }
  ) => {
    dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_UP }));

    const signUpInfo: { error: CustomError | null } =
      await authOutput.signUp(signUpData);

    dispatch(actions.signUp(signUpInfo));
  };

export const signOut =
  () =>
  async (
    dispatch: Dispatch,
    _: unknown,
    { authOutput }: { authOutput: AuthOutput }
  ) => {
    dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_OUT }));

    const signOutRo: { error: CustomError | null } = await authOutput.signOut();

    dispatch(actions.signOut(signOutRo));
  };

export const setSessionFromLocalSessionData =
  (localSessionData: Session) => (dispatch: Dispatch) => {
    dispatch(actions.setLoggedInUserWithLocalData({ localSessionData }));
  };
