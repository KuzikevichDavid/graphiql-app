import { gqlapi } from '@/store/gql/gqlapi';
import { appOutputs, rootReducer, RootState } from '@/store/store';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export type TestRootState = Partial<RootState>;

export const setupTestStore = (initialState?: TestRootState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: { extraArgument: appOutputs },
      }).concat(gqlapi.middleware),
  });

function TestProvider({
  children,
  initialState = undefined,
}: {
  children: React.ReactNode;
  initialState?: TestRootState;
}) {
  return <Provider store={setupTestStore(initialState)}>{children}</Provider>;
}

export default TestProvider;
