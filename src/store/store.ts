import AuthSupabase from '@/services/supabase/supabaseAuthService';
import { AppOutputs } from '@/types/auth';
import {
  Action,
  ThunkAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { gqlapi } from './gqlapi/gqlapi';
import { authSlice } from './auth/authSlice';
import gqlSlice from './gqlapi/slice/gqlSlice';

export const appOutputs: AppOutputs = {
  auth: new AuthSupabase(),
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  gql: gqlSlice,
  gqlapi: gqlapi.reducer,
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
