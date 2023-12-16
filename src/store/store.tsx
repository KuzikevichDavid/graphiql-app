import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
const setupStore = () =>
  configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
