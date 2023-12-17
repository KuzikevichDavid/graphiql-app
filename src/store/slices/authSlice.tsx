import {
  AuthState,
  RequestStatus,
  CustomError,
  AuthStatusTypes,
  Session,
} from '@/types/auth-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: AuthState = {
  session: null,
  signInError: null,
  signInStatus: RequestStatus.IDLE,
  signUpError: null,
  signUpStatus: RequestStatus.IDLE,
  signOutError: null,
  signOutStatus: RequestStatus.IDLE,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startCall: (
      state: AuthState,
      { payload }: PayloadAction<{ callType: AuthStatusTypes }>
    ) => {
      state[payload.callType] = RequestStatus.LOADING;
    },
    signIn: (
      state: AuthState,
      {
        payload,
      }: PayloadAction<{ session: Session | null; error: CustomError | null }>
    ) => {
      state.session = payload.session;
      state.signInError = payload.error;

      state.signInStatus = payload.error
        ? RequestStatus.FAILED
        : RequestStatus.COMPLETED;
    },
    signUp: (
      state: AuthState,
      { payload }: PayloadAction<{ error: CustomError | null }>
    ) => {
      state.signUpError = payload.error;

      state.signUpStatus = payload.error
        ? RequestStatus.FAILED
        : RequestStatus.COMPLETED;
    },
    signOut: (
      state: AuthState,
      { payload }: PayloadAction<{ error: CustomError | null }>
    ) => {
      state.signOutError = payload.error;

      if (!payload.error) {
        state.signOutStatus = RequestStatus.COMPLETED;
        state.session = null;

        return;
      }

      state.signOutStatus = RequestStatus.FAILED;
    },
    setLoggedInUserWithLocalData: (
      state: AuthState,
      { payload }: PayloadAction<{ localSessionData: Session }>
    ) => {
      state.session = payload.localSessionData;
    },
  },
});
