import { authSlice } from '@/store/auth/authSlice';
import { appOutputs } from '@/store/store';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
const setupTestStore = () =>
  configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: { extraArgument: appOutputs },
      }),
  });

function TestProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={setupTestStore()}>{children}</Provider>;
}

export default TestProvider;
