import { authSlice } from '@/store/auth/authSlice';
import { appOutputs } from '@/store/store';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

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

export default setupTestStore;
