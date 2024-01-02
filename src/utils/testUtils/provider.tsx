import { authSlice } from '@/store/auth/authSlice';
import { appOutputs } from '@/store/store';
import { AuthState } from '@/types/auth';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  BaseQueryFn,
  CombinedState,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { QueryArgs } from '@testing-library/react';
import { Provider } from 'react-redux';

export interface TestRootState {
  auth?: AuthState;
  gql?: QueryArgs;
  gqlapi?: CombinedState<
    {
      getGraphQL: QueryDefinition<
        QueryArgs,
        BaseQueryFn<QueryArgs, string>,
        never,
        string,
        'gqlapi'
      >;
    },
    never,
    'gqlapi'
  >;
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
export const setupTestStore = (initialState?: TestRootState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: { extraArgument: appOutputs },
      }),
  });

function TestProvider({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: TestRootState;
}) {
  return <Provider store={setupTestStore(initialState)}>{children}</Provider>;
}

TestProvider.defaultProps = {
  initialState: undefined,
};

export default TestProvider;
