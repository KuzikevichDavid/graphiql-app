import supabaseInstance from '@/services/supabase/supabaseAuthService';
import { AppOutputs } from '@/types/auth';
import {
  Action,
  ThunkAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice } from './auth/authSlice';
import docsSlice from './docs/docsSlice';
import { gqlapi } from './gql/gqlapi';
import gqlSlice from './gql/slice/gqlSlice';
import responseDataSlice from './responseData/responseDataSlice';

export const appOutputs: AppOutputs = {
  auth: supabaseInstance,
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  docs: docsSlice,
  gql: gqlSlice,
  gqlapi: gqlapi.reducer,
  response: responseDataSlice,
});
const setupStore = () =>
  configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: { extraArgument: appOutputs },
      }).concat(gqlapi.middleware),
  });

export const store = setupStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, never, Action>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
